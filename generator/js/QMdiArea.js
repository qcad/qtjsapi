
      // auto generated
      //var self;

      // class constructor:
      function QMdiArea() {
        

        // should be QMdiArea_BaseJs.call(this, engine):
        //QMdiArea.prototype = new QMdiArea_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QMdiArea.getIdStatic()))) {

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
            qWarning("QMdiArea.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QMdiArea_Wrapper(
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

      

        //copyProperties(this, wrapper, QMdiArea);
  }

  
  else {
    
        print("QMdiArea(): wrong number / type of arguments");
      
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

      //QMdiArea.prototype = new QMdiArea_BaseJs(engine);
      //QMdiArea.prototype = new QMdiArea_Wrapper(engine);
      QMdiArea.prototype = new Object();


      QMdiArea.prototype.toString = function() {
          //return "QMdiArea [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMdiArea [JS]";
        };
      QMdiArea.getObjectType = function() {
        return RJSType_QMdiArea.getIdStatic();
      };

      QMdiArea.prototype.getObjectType = function() {
        return RJSType_QMdiArea.getIdStatic();
      };

      QMdiArea.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QMdiArea.getIdStatic()) {
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
QMdiArea.NoFrame = QMdiArea_Wrapper.NoFrame;
QMdiArea.Box = QMdiArea_Wrapper.Box;
QMdiArea.Panel = QMdiArea_Wrapper.Panel;
QMdiArea.WinPanel = QMdiArea_Wrapper.WinPanel;
QMdiArea.HLine = QMdiArea_Wrapper.HLine;
QMdiArea.VLine = QMdiArea_Wrapper.VLine;
QMdiArea.StyledPanel = QMdiArea_Wrapper.StyledPanel;

  // enum: Shadow
QMdiArea.Plain = QMdiArea_Wrapper.Plain;
QMdiArea.Raised = QMdiArea_Wrapper.Raised;
QMdiArea.Sunken = QMdiArea_Wrapper.Sunken;

  // enum: StyleMask
QMdiArea.Shadow_Mask = QMdiArea_Wrapper.Shadow_Mask;
QMdiArea.Shape_Mask = QMdiArea_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QMdiArea.AdjustIgnored = QMdiArea_Wrapper.AdjustIgnored;
QMdiArea.AdjustToContentsOnFirstShow = QMdiArea_Wrapper.AdjustToContentsOnFirstShow;
QMdiArea.AdjustToContents = QMdiArea_Wrapper.AdjustToContents;

  // enum: AreaOption
QMdiArea.DontMaximizeSubWindowOnActivation = QMdiArea_Wrapper.DontMaximizeSubWindowOnActivation;

  // enum: WindowOrder
QMdiArea.CreationOrder = QMdiArea_Wrapper.CreationOrder;
QMdiArea.StackingOrder = QMdiArea_Wrapper.StackingOrder;
QMdiArea.ActivationHistoryOrder = QMdiArea_Wrapper.ActivationHistoryOrder;

  // enum: ViewMode
QMdiArea.SubWindowView = QMdiArea_Wrapper.SubWindowView;
QMdiArea.TabbedView = QMdiArea_Wrapper.TabbedView;


      // functions:
      
        // function 
        QMdiArea.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QMdiArea.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QMdiArea.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QMdiArea.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QMdiArea.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QMdiArea.prototype.findChild = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QMdiArea.prototype.children = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QMdiArea.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QMdiArea.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QMdiArea.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QMdiArea.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QMdiArea.prototype.property = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QMdiArea.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QMdiArea.prototype.parent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QMdiArea.prototype.devType = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QMdiArea.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QMdiArea.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QMdiArea.prototype.isModal = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QMdiArea.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QMdiArea.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QMdiArea.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QMdiArea.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QMdiArea.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QMdiArea.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QMdiArea.prototype.window = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QMdiArea.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QMdiArea.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QMdiArea.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QMdiArea.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setFont = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QMdiArea.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QMdiArea.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QMdiArea.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QMdiArea.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QMdiArea.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setMask = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QMdiArea.prototype.mask = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QMdiArea.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QMdiArea.prototype.grab = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QMdiArea.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QMdiArea.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QMdiArea.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QMdiArea.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QMdiArea.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QMdiArea.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QMdiArea.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QMdiArea.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QMdiArea.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QMdiArea.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QMdiArea.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QMdiArea.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QMdiArea.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QMdiArea.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QMdiArea.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QMdiArea.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QMdiArea.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QMdiArea.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QMdiArea.prototype.update = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QMdiArea.prototype.repaint = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QMdiArea.prototype.show = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QMdiArea.prototype.hide = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QMdiArea.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QMdiArea.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QMdiArea.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QMdiArea.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QMdiArea.prototype.close = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QMdiArea.prototype.raise = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QMdiArea.prototype.lower = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QMdiArea.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QMdiArea.prototype.move = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QMdiArea.prototype.resize = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QMdiArea.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QMdiArea.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QMdiArea.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QMdiArea.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QMdiArea.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QMdiArea.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QMdiArea.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QMdiArea.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QMdiArea.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QMdiArea.prototype.windowState = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QMdiArea.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QMdiArea.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QMdiArea.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QMdiArea.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QMdiArea.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QMdiArea.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QMdiArea.prototype.layout = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QMdiArea.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setParent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.scroll = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QMdiArea.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QMdiArea.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QMdiArea.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QMdiArea.prototype.addAction = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QMdiArea.prototype.addActions = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QMdiArea.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QMdiArea.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QMdiArea.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QMdiArea.prototype.actions = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QMdiArea.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QMdiArea.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QMdiArea.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QMdiArea.prototype.windowType = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QMdiArea.prototype.childAt = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QMdiArea.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QMdiArea.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QMdiArea.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QMdiArea.prototype.event = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QMdiArea.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.metric = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QMdiArea.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QMdiArea.prototype.redirected = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QMdiArea.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QMdiArea.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QMdiArea.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QMdiArea.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QMdiArea.prototype.create = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QMdiArea.prototype.destroy = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QMdiArea.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QMdiArea.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QMdiArea.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QMdiArea.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QMdiArea.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QMdiArea.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QMdiArea.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QMdiArea.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QMdiArea.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
        
        // function 
        QMdiArea.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
        
        // function 
        QMdiArea.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        
        // function 
        QMdiArea.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
        
        // function 
        QMdiArea.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
        
        // function 
        QMdiArea.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
        
        // function 
        QMdiArea.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
        
        // function 
        QMdiArea.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
        
        // function 
        QMdiArea.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
        
        // function 
        QMdiArea.prototype.viewport = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setViewport = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
        
        // function 
        QMdiArea.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
        
        // function 
        QMdiArea.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
        
        // function 
        QMdiArea.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
        
        // function 
        QMdiArea.prototype.currentSubWindow = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.currentSubWindow");
          
              return this.__PROXY__.currentSubWindow(...args);
            
        };
        
        // function 
        QMdiArea.prototype.activeSubWindow = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.activeSubWindow");
          
              return this.__PROXY__.activeSubWindow(...args);
            
        };
        
        // function 
        QMdiArea.prototype.subWindowList = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.subWindowList");
          
              return this.__PROXY__.subWindowList(...args);
            
        };
        
        // function 
        QMdiArea.prototype.addSubWindow = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.addSubWindow");
          
              return this.__PROXY__.addSubWindow(...args);
            
        };
        
        // function 
        QMdiArea.prototype.removeSubWindow = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.removeSubWindow");
          
              return this.__PROXY__.removeSubWindow(...args);
            
        };
        
        // function 
        QMdiArea.prototype.background = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.background");
          
              return this.__PROXY__.background(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setBackground = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setBackground");
          
              return this.__PROXY__.setBackground(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setActivationOrder = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setActivationOrder");
          
              return this.__PROXY__.setActivationOrder(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setOption = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setOption");
          
              return this.__PROXY__.setOption(...args);
            
        };
        
        // function 
        QMdiArea.prototype.testOption = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.testOption");
          
              return this.__PROXY__.testOption(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setViewMode = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setViewMode");
          
              return this.__PROXY__.setViewMode(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setDocumentMode = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setDocumentMode");
          
              return this.__PROXY__.setDocumentMode(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setTabsClosable = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setTabsClosable");
          
              return this.__PROXY__.setTabsClosable(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setTabsMovable = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setTabsMovable");
          
              return this.__PROXY__.setTabsMovable(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setTabShape = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setTabShape");
          
              return this.__PROXY__.setTabShape(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setTabPosition = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setTabPosition");
          
              return this.__PROXY__.setTabPosition(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setActiveSubWindow = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setActiveSubWindow");
          
              return this.__PROXY__.setActiveSubWindow(...args);
            
        };
        
        // function 
        QMdiArea.prototype.tileSubWindows = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.tileSubWindows");
          
              return this.__PROXY__.tileSubWindows(...args);
            
        };
        
        // function 
        QMdiArea.prototype.cascadeSubWindows = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.cascadeSubWindows");
          
              return this.__PROXY__.cascadeSubWindows(...args);
            
        };
        
        // function 
        QMdiArea.prototype.closeActiveSubWindow = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.closeActiveSubWindow");
          
              return this.__PROXY__.closeActiveSubWindow(...args);
            
        };
        
        // function 
        QMdiArea.prototype.closeAllSubWindows = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.closeAllSubWindows");
          
              return this.__PROXY__.closeAllSubWindows(...args);
            
        };
        
        // function 
        QMdiArea.prototype.activateNextSubWindow = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.activateNextSubWindow");
          
              return this.__PROXY__.activateNextSubWindow(...args);
            
        };
        
        // function 
        QMdiArea.prototype.activatePreviousSubWindow = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.activatePreviousSubWindow");
          
              return this.__PROXY__.activatePreviousSubWindow(...args);
            
        };
        
        // function 
        QMdiArea.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
        
        // function 
        QMdiArea.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: QMdiArea.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBy(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QMdiArea.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'activationOrder', {
              get: function() {
                  
                      return this.__PROXY__.activationOrder;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setActivationOrder(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'viewMode', {
              get: function() {
                  
                      return this.__PROXY__.viewMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setViewMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'documentMode', {
              get: function() {
                  
                      return this.__PROXY__.documentMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDocumentMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'tabsClosable', {
              get: function() {
                  
                      return this.__PROXY__.tabsClosable;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabsClosable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'tabsMovable', {
              get: function() {
                  
                      return this.__PROXY__.tabsMovable;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabsMovable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'tabShape', {
              get: function() {
                  
                      return this.__PROXY__.tabShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiArea.prototype, 'tabPosition', {
              get: function() {
                  
                      return this.__PROXY__.tabPosition;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabPosition(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QMdiArea.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QMdiArea.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QMdiArea.prototype, 'subWindowActivated', {
            get: function() { return this.__PROXY__.subWindowActivated; },
            configurable: true
        });
        
          Object.defineProperty(QMdiArea.prototype, 'subWindowActivated(QMdiSubWindow*)', {
              get: function() { return this.__PROXY__.subWindowActivated; },
              configurable: true
          });
        QMdiArea.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QMdiArea.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QMdiArea.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QMdiArea.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMdiArea.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QMdiArea.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      