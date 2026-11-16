
      // auto generated
      //var self;

      // class constructor:
      function QTextBrowser() {
        

        // should be QTextBrowser_BaseJs.call(this, engine):
        //QTextBrowser.prototype = new QTextBrowser_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextBrowser.getIdStatic()))) {

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
            qWarning("QTextBrowser.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTextBrowser_Wrapper(
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

      

        //copyProperties(this, wrapper, QTextBrowser);
  }

  
  else {
    
        print("QTextBrowser(): wrong number / type of arguments");
      
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

      //QTextBrowser.prototype = new QTextBrowser_BaseJs(engine);
      //QTextBrowser.prototype = new QTextBrowser_Wrapper(engine);
      QTextBrowser.prototype = new Object();


      QTextBrowser.prototype.toString = function() {
          //return "QTextBrowser [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextBrowser [JS]";
        };
      QTextBrowser.getObjectType = function() {
        return RJSType_QTextBrowser.getIdStatic();
      };

      QTextBrowser.prototype.getObjectType = function() {
        return RJSType_QTextBrowser.getIdStatic();
      };

      QTextBrowser.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextBrowser.getIdStatic()) {
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
        
          if (t===RJSType_QTextEdit.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QTextBrowser.NoFrame = QTextBrowser_Wrapper.NoFrame;
QTextBrowser.Box = QTextBrowser_Wrapper.Box;
QTextBrowser.Panel = QTextBrowser_Wrapper.Panel;
QTextBrowser.WinPanel = QTextBrowser_Wrapper.WinPanel;
QTextBrowser.HLine = QTextBrowser_Wrapper.HLine;
QTextBrowser.VLine = QTextBrowser_Wrapper.VLine;
QTextBrowser.StyledPanel = QTextBrowser_Wrapper.StyledPanel;

  // enum: Shadow
QTextBrowser.Plain = QTextBrowser_Wrapper.Plain;
QTextBrowser.Raised = QTextBrowser_Wrapper.Raised;
QTextBrowser.Sunken = QTextBrowser_Wrapper.Sunken;

  // enum: StyleMask
QTextBrowser.Shadow_Mask = QTextBrowser_Wrapper.Shadow_Mask;
QTextBrowser.Shape_Mask = QTextBrowser_Wrapper.Shape_Mask;

  // enum: LineWrapMode
QTextBrowser.NoWrap = QTextBrowser_Wrapper.NoWrap;
QTextBrowser.WidgetWidth = QTextBrowser_Wrapper.WidgetWidth;
QTextBrowser.FixedPixelWidth = QTextBrowser_Wrapper.FixedPixelWidth;
QTextBrowser.FixedColumnWidth = QTextBrowser_Wrapper.FixedColumnWidth;

  // enum: AutoFormattingFlag
QTextBrowser.AutoNone = QTextBrowser_Wrapper.AutoNone;
QTextBrowser.AutoBulletList = QTextBrowser_Wrapper.AutoBulletList;
QTextBrowser.AutoAll = QTextBrowser_Wrapper.AutoAll;


      // functions:
      
        // function 
        QTextBrowser.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.findChild = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.children = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.property = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.parent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.devType = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isModal = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.window = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setFont = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setMask = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.mask = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.grab = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.update = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.repaint = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.show = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.hide = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.close = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.raise = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.lower = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.move = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.resize = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.windowState = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.layout = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setParent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.scroll = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.addAction = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.addActions = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.actions = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.windowType = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.childAt = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.metric = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.redirected = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.create = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.destroy = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.Q_DECLARE_PRIVATE = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.Q_DECLARE_PRIVATE");
          
              return this.__PROXY__.Q_DECLARE_PRIVATE(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setDocument = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setDocument");
          
              return this.__PROXY__.setDocument(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setPlaceholderText = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setPlaceholderText");
          
              return this.__PROXY__.setPlaceholderText(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setTextCursor = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setTextCursor");
          
              return this.__PROXY__.setTextCursor(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.textCursor = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.textCursor");
          
              return this.__PROXY__.textCursor(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isReadOnly = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isReadOnly");
          
              return this.__PROXY__.isReadOnly(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setReadOnly = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setReadOnly");
          
              return this.__PROXY__.setReadOnly(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setTextInteractionFlags = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setTextInteractionFlags");
          
              return this.__PROXY__.setTextInteractionFlags(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.fontPointSize = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.fontPointSize");
          
              return this.__PROXY__.fontPointSize(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.fontFamily = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.fontFamily");
          
              return this.__PROXY__.fontFamily(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.fontWeight = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.fontWeight");
          
              return this.__PROXY__.fontWeight(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.fontUnderline = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.fontUnderline");
          
              return this.__PROXY__.fontUnderline(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.fontItalic = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.fontItalic");
          
              return this.__PROXY__.fontItalic(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.textColor = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.textColor");
          
              return this.__PROXY__.textColor(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.textBackgroundColor = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.textBackgroundColor");
          
              return this.__PROXY__.textBackgroundColor(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.currentFont = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.currentFont");
          
              return this.__PROXY__.currentFont(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.alignment = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.alignment");
          
              return this.__PROXY__.alignment(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.mergeCurrentCharFormat = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.mergeCurrentCharFormat");
          
              return this.__PROXY__.mergeCurrentCharFormat(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setCurrentCharFormat = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setCurrentCharFormat");
          
              return this.__PROXY__.setCurrentCharFormat(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.currentCharFormat = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.currentCharFormat");
          
              return this.__PROXY__.currentCharFormat(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setAutoFormatting = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setAutoFormatting");
          
              return this.__PROXY__.setAutoFormatting(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setTabChangesFocus = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setTabChangesFocus");
          
              return this.__PROXY__.setTabChangesFocus(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setDocumentTitle = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setDocumentTitle");
          
              return this.__PROXY__.setDocumentTitle(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isUndoRedoEnabled = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isUndoRedoEnabled");
          
              return this.__PROXY__.isUndoRedoEnabled(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setUndoRedoEnabled = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setUndoRedoEnabled");
          
              return this.__PROXY__.setUndoRedoEnabled(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setLineWrapMode = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setLineWrapMode");
          
              return this.__PROXY__.setLineWrapMode(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setLineWrapColumnOrWidth = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setLineWrapColumnOrWidth");
          
              return this.__PROXY__.setLineWrapColumnOrWidth(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.wordWrapMode = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.wordWrapMode");
          
              return this.__PROXY__.wordWrapMode(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setWordWrapMode = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setWordWrapMode");
          
              return this.__PROXY__.setWordWrapMode(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.toPlainText = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.toPlainText");
          
              return this.__PROXY__.toPlainText(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.toHtml = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.toHtml");
          
              return this.__PROXY__.toHtml(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.ensureCursorVisible = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.ensureCursorVisible");
          
              return this.__PROXY__.ensureCursorVisible(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.createStandardContextMenu = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.createStandardContextMenu");
          
              return this.__PROXY__.createStandardContextMenu(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.cursorRect = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.cursorRect");
          
              return this.__PROXY__.cursorRect(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.anchorAt = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.anchorAt");
          
              return this.__PROXY__.anchorAt(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setOverwriteMode = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setOverwriteMode");
          
              return this.__PROXY__.setOverwriteMode(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setTabStopDistance = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setTabStopDistance");
          
              return this.__PROXY__.setTabStopDistance(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setCursorWidth = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setCursorWidth");
          
              return this.__PROXY__.setCursorWidth(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setAcceptRichText = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setAcceptRichText");
          
              return this.__PROXY__.setAcceptRichText(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.moveCursor = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.moveCursor");
          
              return this.__PROXY__.moveCursor(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.canPaste = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.canPaste");
          
              return this.__PROXY__.canPaste(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setFontPointSize = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setFontPointSize");
          
              return this.__PROXY__.setFontPointSize(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setFontFamily = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setFontFamily");
          
              return this.__PROXY__.setFontFamily(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setFontWeight = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setFontWeight");
          
              return this.__PROXY__.setFontWeight(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setFontUnderline = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setFontUnderline");
          
              return this.__PROXY__.setFontUnderline(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setFontItalic = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setFontItalic");
          
              return this.__PROXY__.setFontItalic(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setTextColor = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setTextColor");
          
              return this.__PROXY__.setTextColor(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setTextBackgroundColor = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setTextBackgroundColor");
          
              return this.__PROXY__.setTextBackgroundColor(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setCurrentFont = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setCurrentFont");
          
              return this.__PROXY__.setCurrentFont(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setPlainText = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setPlainText");
          
              return this.__PROXY__.setPlainText(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setHtml = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setHtml");
          
              return this.__PROXY__.setHtml(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setMarkdown = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setMarkdown");
          
              return this.__PROXY__.setMarkdown(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setText = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.cut = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.cut");
          
              return this.__PROXY__.cut(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.copy = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.copy");
          
              return this.__PROXY__.copy(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.paste = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.paste");
          
              return this.__PROXY__.paste(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.undo = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.undo");
          
              return this.__PROXY__.undo(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.redo = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.redo");
          
              return this.__PROXY__.redo(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.clear = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.insertPlainText = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.insertPlainText");
          
              return this.__PROXY__.insertPlainText(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.insertHtml = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.insertHtml");
          
              return this.__PROXY__.insertHtml(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.append = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.append");
          
              return this.__PROXY__.append(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.scrollToAnchor = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.scrollToAnchor");
          
              return this.__PROXY__.scrollToAnchor(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.zoomIn = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.zoomIn");
          
              return this.__PROXY__.zoomIn(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.zoomOut = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.zoomOut");
          
              return this.__PROXY__.zoomOut(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.timerEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.timerEvent");
          
              return this.__PROXY__.timerEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.createMimeDataFromSelection = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.createMimeDataFromSelection");
          
              return this.__PROXY__.createMimeDataFromSelection(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.canInsertFromMimeData = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.canInsertFromMimeData");
          
              return this.__PROXY__.canInsertFromMimeData(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.insertFromMimeData = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.insertFromMimeData");
          
              return this.__PROXY__.insertFromMimeData(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBy(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.doSetTextCursor = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.doSetTextCursor");
          
              return this.__PROXY__.doSetTextCursor(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.zoomInF = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.zoomInF");
          
              return this.__PROXY__.zoomInF(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.source = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.source");
          
              return this.__PROXY__.source(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setSearchPaths = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setSearchPaths");
          
              return this.__PROXY__.setSearchPaths(...args);
            
        };
        
      // function 
      QTextBrowser.prototype.loadResource = function() 
        
      {
        //print("JS: QTextBrowser.prototype.loadResource");
        
      if (arguments.length == 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.loadResource(
                // call highest level JS implementation:
                //return this.loadResourceBase(
                
                    return this.__PROXY__.loadResourceSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTextBrowser);
  }

  
  else {
    
        print("QTextBrowser.loadResource(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QTextBrowser.prototype.isBackwardAvailable = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isBackwardAvailable");
          
              return this.__PROXY__.isBackwardAvailable(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.isForwardAvailable = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.isForwardAvailable");
          
              return this.__PROXY__.isForwardAvailable(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.clearHistory = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.clearHistory");
          
              return this.__PROXY__.clearHistory(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.historyTitle = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.historyTitle");
          
              return this.__PROXY__.historyTitle(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.historyUrl = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.historyUrl");
          
              return this.__PROXY__.historyUrl(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.backwardHistoryCount = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.backwardHistoryCount");
          
              return this.__PROXY__.backwardHistoryCount(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.forwardHistoryCount = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.forwardHistoryCount");
          
              return this.__PROXY__.forwardHistoryCount(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setOpenExternalLinks = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setOpenExternalLinks");
          
              return this.__PROXY__.setOpenExternalLinks(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setOpenLinks = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setOpenLinks");
          
              return this.__PROXY__.setOpenLinks(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.setSource = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.setSource");
          
              return this.__PROXY__.setSource(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.backward = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.backward");
          
              return this.__PROXY__.backward(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.forward = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.forward");
          
              return this.__PROXY__.forward(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.home = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.home");
          
              return this.__PROXY__.home(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.reload = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.reload");
          
              return this.__PROXY__.reload(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.event = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QTextBrowser.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QTextBrowser.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QTextBrowser.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QTextBrowser.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QTextBrowser.prototype.doSetSource = function(...args) 
          
        {
          //print("JS: QTextBrowser.prototype.doSetSource");
          
              return this.__PROXY__.doSetSource(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QTextBrowser.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'autoFormatting', {
              get: function() {
                  
                      return this.__PROXY__.autoFormatting;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFormatting(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'tabChangesFocus', {
              get: function() {
                  
                      return this.__PROXY__.tabChangesFocus;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabChangesFocus(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'documentTitle', {
              get: function() {
                  
                      return this.__PROXY__.documentTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDocumentTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'undoRedoEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isUndoRedoEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUndoRedoEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'lineWrapMode', {
              get: function() {
                  
                      return this.__PROXY__.lineWrapMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWrapMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'lineWrapColumnOrWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWrapColumnOrWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWrapColumnOrWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'readOnly', {
              get: function() {
                  
                      return this.__PROXY__.isReadOnly();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setReadOnly(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'html', {
              get: function() {
                  
                      return this.__PROXY__.toHtml();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHtml(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'plainText', {
              get: function() {
                  
                      return this.__PROXY__.toPlainText();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlainText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'overwriteMode', {
              get: function() {
                  
                      return this.__PROXY__.overwriteMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOverwriteMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'tabStopDistance', {
              get: function() {
                  
                      return this.__PROXY__.tabStopDistance;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabStopDistance(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'acceptRichText', {
              get: function() {
                  
                      return this.__PROXY__.acceptRichText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptRichText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'cursorWidth', {
              get: function() {
                  
                      return this.__PROXY__.cursorWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursorWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'textInteractionFlags', {
              get: function() {
                  
                      return this.__PROXY__.textInteractionFlags;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextInteractionFlags(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'document', {
              get: function() {
                  
                      return this.__PROXY__.document;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDocument(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'placeholderText', {
              get: function() {
                  
                      return this.__PROXY__.placeholderText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlaceholderText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'sourceType', {
              get: function() {
                  
                      return this.__PROXY__.sourceType;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'searchPaths', {
              get: function() {
                  
                      return this.__PROXY__.searchPaths;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSearchPaths(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'openExternalLinks', {
              get: function() {
                  
                      return this.__PROXY__.openExternalLinks;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOpenExternalLinks(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextBrowser.prototype, 'openLinks', {
              get: function() {
                  
                      return this.__PROXY__.openLinks;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOpenLinks(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QTextBrowser.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QTextBrowser.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QTextBrowser.prototype, 'textChanged', {
            get: function() { return this.__PROXY__.textChanged; },
            configurable: true
        });
        
        Object.defineProperty(QTextBrowser.prototype, 'undoAvailable', {
            get: function() { return this.__PROXY__.undoAvailable; },
            configurable: true
        });
        
          Object.defineProperty(QTextBrowser.prototype, 'undoAvailable(bool)', {
              get: function() { return this.__PROXY__.undoAvailable; },
              configurable: true
          });
        
        Object.defineProperty(QTextBrowser.prototype, 'redoAvailable', {
            get: function() { return this.__PROXY__.redoAvailable; },
            configurable: true
        });
        
          Object.defineProperty(QTextBrowser.prototype, 'redoAvailable(bool)', {
              get: function() { return this.__PROXY__.redoAvailable; },
              configurable: true
          });
        
        Object.defineProperty(QTextBrowser.prototype, 'currentCharFormatChanged', {
            get: function() { return this.__PROXY__.currentCharFormatChanged; },
            configurable: true
        });
        
          Object.defineProperty(QTextBrowser.prototype, 'currentCharFormatChanged(QTextCharFormat)', {
              get: function() { return this.__PROXY__.currentCharFormatChanged; },
              configurable: true
          });
        
        Object.defineProperty(QTextBrowser.prototype, 'copyAvailable', {
            get: function() { return this.__PROXY__.copyAvailable; },
            configurable: true
        });
        
          Object.defineProperty(QTextBrowser.prototype, 'copyAvailable(bool)', {
              get: function() { return this.__PROXY__.copyAvailable; },
              configurable: true
          });
        
        Object.defineProperty(QTextBrowser.prototype, 'selectionChanged', {
            get: function() { return this.__PROXY__.selectionChanged; },
            configurable: true
        });
        
        Object.defineProperty(QTextBrowser.prototype, 'cursorPositionChanged', {
            get: function() { return this.__PROXY__.cursorPositionChanged; },
            configurable: true
        });
        
        Object.defineProperty(QTextBrowser.prototype, 'backwardAvailable', {
            get: function() { return this.__PROXY__.backwardAvailable; },
            configurable: true
        });
        
          Object.defineProperty(QTextBrowser.prototype, 'backwardAvailable(bool)', {
              get: function() { return this.__PROXY__.backwardAvailable; },
              configurable: true
          });
        
        Object.defineProperty(QTextBrowser.prototype, 'forwardAvailable', {
            get: function() { return this.__PROXY__.forwardAvailable; },
            configurable: true
        });
        
          Object.defineProperty(QTextBrowser.prototype, 'forwardAvailable(bool)', {
              get: function() { return this.__PROXY__.forwardAvailable; },
              configurable: true
          });
        
        Object.defineProperty(QTextBrowser.prototype, 'historyChanged', {
            get: function() { return this.__PROXY__.historyChanged; },
            configurable: true
        });
        
        Object.defineProperty(QTextBrowser.prototype, 'sourceChanged', {
            get: function() { return this.__PROXY__.sourceChanged; },
            configurable: true
        });
        
          Object.defineProperty(QTextBrowser.prototype, 'sourceChanged(QUrl)', {
              get: function() { return this.__PROXY__.sourceChanged; },
              configurable: true
          });
        
        Object.defineProperty(QTextBrowser.prototype, 'highlighted', {
            get: function() { return this.__PROXY__.highlighted; },
            configurable: true
        });
        
          Object.defineProperty(QTextBrowser.prototype, 'highlighted(QUrl)', {
              get: function() { return this.__PROXY__.highlighted; },
              configurable: true
          });
        
        Object.defineProperty(QTextBrowser.prototype, 'anchorClicked', {
            get: function() { return this.__PROXY__.anchorClicked; },
            configurable: true
        });
        
          Object.defineProperty(QTextBrowser.prototype, 'anchorClicked(QUrl)', {
              get: function() { return this.__PROXY__.anchorClicked; },
              configurable: true
          });
        QTextBrowser.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTextBrowser.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTextBrowser.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextBrowser.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextBrowser.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTextBrowser.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      