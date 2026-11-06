
      // auto generated
      //var self;

      // class constructor:
      function QTextEdit() {
        

        // should be QTextEdit_BaseJs.call(this, engine):
        //QTextEdit.prototype = new QTextEdit_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextEdit.getIdStatic()))) {

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
            qWarning("QTextEdit.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QTextEdit_Wrapper(
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

      

        //copyProperties(this, wrapper, QTextEdit);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTextEdit_Wrapper(
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

      

        //copyProperties(this, wrapper, QTextEdit);
  }

  
  else {
    
        print("QTextEdit(): wrong number / type of arguments");
      
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

      //QTextEdit.prototype = new QTextEdit_BaseJs(engine);
      //QTextEdit.prototype = new QTextEdit_Wrapper(engine);
      QTextEdit.prototype = new Object();


      QTextEdit.prototype.toString = function() {
          //return "QTextEdit [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextEdit [JS]";
        };
      QTextEdit.getObjectType = function() {
        return RJSType_QTextEdit.getIdStatic();
      };

      QTextEdit.prototype.getObjectType = function() {
        return RJSType_QTextEdit.getIdStatic();
      };

      QTextEdit.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextEdit.getIdStatic()) {
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
QTextEdit.NoFrame = QTextEdit_Wrapper.NoFrame;
QTextEdit.Box = QTextEdit_Wrapper.Box;
QTextEdit.Panel = QTextEdit_Wrapper.Panel;
QTextEdit.WinPanel = QTextEdit_Wrapper.WinPanel;
QTextEdit.HLine = QTextEdit_Wrapper.HLine;
QTextEdit.VLine = QTextEdit_Wrapper.VLine;
QTextEdit.StyledPanel = QTextEdit_Wrapper.StyledPanel;

  // enum: Shadow
QTextEdit.Plain = QTextEdit_Wrapper.Plain;
QTextEdit.Raised = QTextEdit_Wrapper.Raised;
QTextEdit.Sunken = QTextEdit_Wrapper.Sunken;

  // enum: StyleMask
QTextEdit.Shadow_Mask = QTextEdit_Wrapper.Shadow_Mask;
QTextEdit.Shape_Mask = QTextEdit_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QTextEdit.AdjustIgnored = QTextEdit_Wrapper.AdjustIgnored;
QTextEdit.AdjustToContentsOnFirstShow = QTextEdit_Wrapper.AdjustToContentsOnFirstShow;
QTextEdit.AdjustToContents = QTextEdit_Wrapper.AdjustToContents;

  // enum: LineWrapMode
QTextEdit.NoWrap = QTextEdit_Wrapper.NoWrap;
QTextEdit.WidgetWidth = QTextEdit_Wrapper.WidgetWidth;
QTextEdit.FixedPixelWidth = QTextEdit_Wrapper.FixedPixelWidth;
QTextEdit.FixedColumnWidth = QTextEdit_Wrapper.FixedColumnWidth;

  // enum: AutoFormattingFlag
QTextEdit.AutoNone = QTextEdit_Wrapper.AutoNone;
QTextEdit.AutoBulletList = QTextEdit_Wrapper.AutoBulletList;
QTextEdit.AutoAll = QTextEdit_Wrapper.AutoAll;


      // functions:
      
        // function 
        QTextEdit.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QTextEdit.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QTextEdit.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QTextEdit.prototype.findChild = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QTextEdit.prototype.children = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QTextEdit.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QTextEdit.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QTextEdit.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QTextEdit.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QTextEdit.prototype.property = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QTextEdit.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QTextEdit.prototype.parent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QTextEdit.prototype.devType = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QTextEdit.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isModal = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QTextEdit.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QTextEdit.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QTextEdit.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QTextEdit.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QTextEdit.prototype.window = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QTextEdit.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QTextEdit.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QTextEdit.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QTextEdit.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setFont = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QTextEdit.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QTextEdit.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QTextEdit.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QTextEdit.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QTextEdit.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setMask = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QTextEdit.prototype.mask = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QTextEdit.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QTextEdit.prototype.grab = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QTextEdit.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QTextEdit.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QTextEdit.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QTextEdit.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QTextEdit.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QTextEdit.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QTextEdit.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QTextEdit.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QTextEdit.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QTextEdit.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QTextEdit.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QTextEdit.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QTextEdit.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QTextEdit.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QTextEdit.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QTextEdit.prototype.update = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QTextEdit.prototype.repaint = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QTextEdit.prototype.show = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QTextEdit.prototype.hide = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QTextEdit.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QTextEdit.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QTextEdit.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QTextEdit.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QTextEdit.prototype.close = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QTextEdit.prototype.raise = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QTextEdit.prototype.lower = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QTextEdit.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QTextEdit.prototype.move = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QTextEdit.prototype.resize = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QTextEdit.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QTextEdit.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QTextEdit.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QTextEdit.prototype.windowState = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QTextEdit.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QTextEdit.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QTextEdit.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QTextEdit.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QTextEdit.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QTextEdit.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QTextEdit.prototype.layout = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QTextEdit.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setParent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.scroll = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QTextEdit.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QTextEdit.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QTextEdit.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QTextEdit.prototype.addAction = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QTextEdit.prototype.addActions = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QTextEdit.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QTextEdit.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QTextEdit.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QTextEdit.prototype.actions = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QTextEdit.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QTextEdit.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QTextEdit.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QTextEdit.prototype.windowType = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QTextEdit.prototype.childAt = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QTextEdit.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QTextEdit.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QTextEdit.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.metric = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QTextEdit.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QTextEdit.prototype.redirected = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QTextEdit.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QTextEdit.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QTextEdit.prototype.create = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QTextEdit.prototype.destroy = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QTextEdit.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QTextEdit.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QTextEdit.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QTextEdit.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QTextEdit.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QTextEdit.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QTextEdit.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QTextEdit.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
    
        // function 
        QTextEdit.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
    
        // function 
        QTextEdit.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        QTextEdit.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
    
        // function 
        QTextEdit.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
    
        // function 
        QTextEdit.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        QTextEdit.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
    
        // function 
        QTextEdit.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
    
        // function 
        QTextEdit.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
    
        // function 
        QTextEdit.prototype.viewport = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setViewport = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
    
        // function 
        QTextEdit.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
    
        // function 
        QTextEdit.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
    
        // function 
        QTextEdit.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    
        // function 
        QTextEdit.prototype.Q_DECLARE_PRIVATE = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.Q_DECLARE_PRIVATE");
          
              return this.__PROXY__.Q_DECLARE_PRIVATE(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setDocument = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setDocument");
          
              return this.__PROXY__.setDocument(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setPlaceholderText = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setPlaceholderText");
          
              return this.__PROXY__.setPlaceholderText(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setTextCursor = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setTextCursor");
          
              return this.__PROXY__.setTextCursor(...args);
            
        };
    
        // function 
        QTextEdit.prototype.textCursor = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.textCursor");
          
              return this.__PROXY__.textCursor(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isReadOnly = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isReadOnly");
          
              return this.__PROXY__.isReadOnly(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setReadOnly = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setReadOnly");
          
              return this.__PROXY__.setReadOnly(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setTextInteractionFlags = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setTextInteractionFlags");
          
              return this.__PROXY__.setTextInteractionFlags(...args);
            
        };
    
        // function 
        QTextEdit.prototype.fontPointSize = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.fontPointSize");
          
              return this.__PROXY__.fontPointSize(...args);
            
        };
    
        // function 
        QTextEdit.prototype.fontFamily = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.fontFamily");
          
              return this.__PROXY__.fontFamily(...args);
            
        };
    
        // function 
        QTextEdit.prototype.fontWeight = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.fontWeight");
          
              return this.__PROXY__.fontWeight(...args);
            
        };
    
        // function 
        QTextEdit.prototype.fontUnderline = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.fontUnderline");
          
              return this.__PROXY__.fontUnderline(...args);
            
        };
    
        // function 
        QTextEdit.prototype.fontItalic = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.fontItalic");
          
              return this.__PROXY__.fontItalic(...args);
            
        };
    
        // function 
        QTextEdit.prototype.textColor = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.textColor");
          
              return this.__PROXY__.textColor(...args);
            
        };
    
        // function 
        QTextEdit.prototype.textBackgroundColor = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.textBackgroundColor");
          
              return this.__PROXY__.textBackgroundColor(...args);
            
        };
    
        // function 
        QTextEdit.prototype.currentFont = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.currentFont");
          
              return this.__PROXY__.currentFont(...args);
            
        };
    
        // function 
        QTextEdit.prototype.alignment = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.alignment");
          
              return this.__PROXY__.alignment(...args);
            
        };
    
        // function 
        QTextEdit.prototype.mergeCurrentCharFormat = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.mergeCurrentCharFormat");
          
              return this.__PROXY__.mergeCurrentCharFormat(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setCurrentCharFormat = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setCurrentCharFormat");
          
              return this.__PROXY__.setCurrentCharFormat(...args);
            
        };
    
        // function 
        QTextEdit.prototype.currentCharFormat = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.currentCharFormat");
          
              return this.__PROXY__.currentCharFormat(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setAutoFormatting = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setAutoFormatting");
          
              return this.__PROXY__.setAutoFormatting(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setTabChangesFocus = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setTabChangesFocus");
          
              return this.__PROXY__.setTabChangesFocus(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setDocumentTitle = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setDocumentTitle");
          
              return this.__PROXY__.setDocumentTitle(...args);
            
        };
    
        // function 
        QTextEdit.prototype.isUndoRedoEnabled = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.isUndoRedoEnabled");
          
              return this.__PROXY__.isUndoRedoEnabled(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setUndoRedoEnabled = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setUndoRedoEnabled");
          
              return this.__PROXY__.setUndoRedoEnabled(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setLineWrapMode = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setLineWrapMode");
          
              return this.__PROXY__.setLineWrapMode(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setLineWrapColumnOrWidth = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setLineWrapColumnOrWidth");
          
              return this.__PROXY__.setLineWrapColumnOrWidth(...args);
            
        };
    
        // function 
        QTextEdit.prototype.wordWrapMode = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.wordWrapMode");
          
              return this.__PROXY__.wordWrapMode(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setWordWrapMode = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setWordWrapMode");
          
              return this.__PROXY__.setWordWrapMode(...args);
            
        };
    
        // function 
        QTextEdit.prototype.toPlainText = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.toPlainText");
          
              return this.__PROXY__.toPlainText(...args);
            
        };
    
        // function 
        QTextEdit.prototype.toHtml = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.toHtml");
          
              return this.__PROXY__.toHtml(...args);
            
        };
    
        // function 
        QTextEdit.prototype.ensureCursorVisible = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.ensureCursorVisible");
          
              return this.__PROXY__.ensureCursorVisible(...args);
            
        };
    
        // function 
        QTextEdit.prototype.loadResource = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.loadResource");
          
              return this.__PROXY__.loadResource(...args);
            
        };
    
        // function 
        QTextEdit.prototype.createStandardContextMenu = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.createStandardContextMenu");
          
              return this.__PROXY__.createStandardContextMenu(...args);
            
        };
    
        // function 
        QTextEdit.prototype.cursorRect = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.cursorRect");
          
              return this.__PROXY__.cursorRect(...args);
            
        };
    
        // function 
        QTextEdit.prototype.anchorAt = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.anchorAt");
          
              return this.__PROXY__.anchorAt(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setOverwriteMode = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setOverwriteMode");
          
              return this.__PROXY__.setOverwriteMode(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setTabStopDistance = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setTabStopDistance");
          
              return this.__PROXY__.setTabStopDistance(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setCursorWidth = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setCursorWidth");
          
              return this.__PROXY__.setCursorWidth(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setAcceptRichText = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setAcceptRichText");
          
              return this.__PROXY__.setAcceptRichText(...args);
            
        };
    
        // function 
        QTextEdit.prototype.moveCursor = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.moveCursor");
          
              return this.__PROXY__.moveCursor(...args);
            
        };
    
        // function 
        QTextEdit.prototype.canPaste = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.canPaste");
          
              return this.__PROXY__.canPaste(...args);
            
        };
    
        // function 
        QTextEdit.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setFontPointSize = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setFontPointSize");
          
              return this.__PROXY__.setFontPointSize(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setFontFamily = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setFontFamily");
          
              return this.__PROXY__.setFontFamily(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setFontWeight = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setFontWeight");
          
              return this.__PROXY__.setFontWeight(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setFontUnderline = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setFontUnderline");
          
              return this.__PROXY__.setFontUnderline(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setFontItalic = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setFontItalic");
          
              return this.__PROXY__.setFontItalic(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setTextColor = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setTextColor");
          
              return this.__PROXY__.setTextColor(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setTextBackgroundColor = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setTextBackgroundColor");
          
              return this.__PROXY__.setTextBackgroundColor(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setCurrentFont = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setCurrentFont");
          
              return this.__PROXY__.setCurrentFont(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setPlainText = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setPlainText");
          
              return this.__PROXY__.setPlainText(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setHtml = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setHtml");
          
              return this.__PROXY__.setHtml(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setMarkdown = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setMarkdown");
          
              return this.__PROXY__.setMarkdown(...args);
            
        };
    
        // function 
        QTextEdit.prototype.setText = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        QTextEdit.prototype.cut = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.cut");
          
              return this.__PROXY__.cut(...args);
            
        };
    
        // function 
        QTextEdit.prototype.copy = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.copy");
          
              return this.__PROXY__.copy(...args);
            
        };
    
        // function 
        QTextEdit.prototype.paste = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.paste");
          
              return this.__PROXY__.paste(...args);
            
        };
    
        // function 
        QTextEdit.prototype.undo = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.undo");
          
              return this.__PROXY__.undo(...args);
            
        };
    
        // function 
        QTextEdit.prototype.redo = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.redo");
          
              return this.__PROXY__.redo(...args);
            
        };
    
        // function 
        QTextEdit.prototype.clear = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QTextEdit.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
    
        // function 
        QTextEdit.prototype.insertPlainText = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.insertPlainText");
          
              return this.__PROXY__.insertPlainText(...args);
            
        };
    
        // function 
        QTextEdit.prototype.insertHtml = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.insertHtml");
          
              return this.__PROXY__.insertHtml(...args);
            
        };
    
        // function 
        QTextEdit.prototype.append = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.append");
          
              return this.__PROXY__.append(...args);
            
        };
    
        // function 
        QTextEdit.prototype.scrollToAnchor = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.scrollToAnchor");
          
              return this.__PROXY__.scrollToAnchor(...args);
            
        };
    
        // function 
        QTextEdit.prototype.zoomIn = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.zoomIn");
          
              return this.__PROXY__.zoomIn(...args);
            
        };
    
        // function 
        QTextEdit.prototype.zoomOut = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.zoomOut");
          
              return this.__PROXY__.zoomOut(...args);
            
        };
    
        // function 
        QTextEdit.prototype.event = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QTextEdit.prototype.timerEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.timerEvent");
          
              return this.__PROXY__.timerEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        QTextEdit.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QTextEdit.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QTextEdit.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QTextEdit.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.createMimeDataFromSelection = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.createMimeDataFromSelection");
          
              return this.__PROXY__.createMimeDataFromSelection(...args);
            
        };
    
        // function 
        QTextEdit.prototype.canInsertFromMimeData = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.canInsertFromMimeData");
          
              return this.__PROXY__.canInsertFromMimeData(...args);
            
        };
    
        // function 
        QTextEdit.prototype.insertFromMimeData = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.insertFromMimeData");
          
              return this.__PROXY__.insertFromMimeData(...args);
            
        };
    
        // function 
        QTextEdit.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QTextEdit.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBy(...args);
            
        };
    
        // function 
        QTextEdit.prototype.doSetTextCursor = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.doSetTextCursor");
          
              return this.__PROXY__.doSetTextCursor(...args);
            
        };
    
        // function 
        QTextEdit.prototype.zoomInF = function(...args) 
          
        {
          //print("JS: QTextEdit.prototype.zoomInF");
          
              return this.__PROXY__.zoomInF(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QTextEdit.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'autoFormatting', {
              get: function() {
                  
                      return this.__PROXY__.autoFormatting;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFormatting(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'tabChangesFocus', {
              get: function() {
                  
                      return this.__PROXY__.tabChangesFocus;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabChangesFocus(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'documentTitle', {
              get: function() {
                  
                      return this.__PROXY__.documentTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDocumentTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'undoRedoEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isUndoRedoEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUndoRedoEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'lineWrapMode', {
              get: function() {
                  
                      return this.__PROXY__.lineWrapMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWrapMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'lineWrapColumnOrWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWrapColumnOrWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWrapColumnOrWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'readOnly', {
              get: function() {
                  
                      return this.__PROXY__.isReadOnly();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setReadOnly(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'html', {
              get: function() {
                  
                      return this.__PROXY__.toHtml();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHtml(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'plainText', {
              get: function() {
                  
                      return this.__PROXY__.toPlainText();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlainText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'overwriteMode', {
              get: function() {
                  
                      return this.__PROXY__.overwriteMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOverwriteMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'tabStopDistance', {
              get: function() {
                  
                      return this.__PROXY__.tabStopDistance;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabStopDistance(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'acceptRichText', {
              get: function() {
                  
                      return this.__PROXY__.acceptRichText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptRichText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'cursorWidth', {
              get: function() {
                  
                      return this.__PROXY__.cursorWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursorWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'textInteractionFlags', {
              get: function() {
                  
                      return this.__PROXY__.textInteractionFlags;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextInteractionFlags(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'document', {
              get: function() {
                  
                      return this.__PROXY__.document;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDocument(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextEdit.prototype, 'placeholderText', {
              get: function() {
                  
                      return this.__PROXY__.placeholderText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlaceholderText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QTextEdit.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QTextEdit.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QTextEdit.prototype, 'textChanged', {
            get: function() { return this.__PROXY__.textChanged; },
            configurable: true
        });
        
        Object.defineProperty(QTextEdit.prototype, 'undoAvailable', {
            get: function() { return this.__PROXY__.undoAvailable; },
            configurable: true
        });
        
          Object.defineProperty(QTextEdit.prototype, 'undoAvailable(bool)', {
              get: function() { return this.__PROXY__.undoAvailable; },
              configurable: true
          });
        
        Object.defineProperty(QTextEdit.prototype, 'redoAvailable', {
            get: function() { return this.__PROXY__.redoAvailable; },
            configurable: true
        });
        
          Object.defineProperty(QTextEdit.prototype, 'redoAvailable(bool)', {
              get: function() { return this.__PROXY__.redoAvailable; },
              configurable: true
          });
        
        Object.defineProperty(QTextEdit.prototype, 'currentCharFormatChanged', {
            get: function() { return this.__PROXY__.currentCharFormatChanged; },
            configurable: true
        });
        
          Object.defineProperty(QTextEdit.prototype, 'currentCharFormatChanged(QTextCharFormat)', {
              get: function() { return this.__PROXY__.currentCharFormatChanged; },
              configurable: true
          });
        
        Object.defineProperty(QTextEdit.prototype, 'copyAvailable', {
            get: function() { return this.__PROXY__.copyAvailable; },
            configurable: true
        });
        
          Object.defineProperty(QTextEdit.prototype, 'copyAvailable(bool)', {
              get: function() { return this.__PROXY__.copyAvailable; },
              configurable: true
          });
        
        Object.defineProperty(QTextEdit.prototype, 'selectionChanged', {
            get: function() { return this.__PROXY__.selectionChanged; },
            configurable: true
        });
        
        Object.defineProperty(QTextEdit.prototype, 'cursorPositionChanged', {
            get: function() { return this.__PROXY__.cursorPositionChanged; },
            configurable: true
        });
        QTextEdit.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTextEdit.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTextEdit.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextEdit.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextEdit.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTextEdit.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      