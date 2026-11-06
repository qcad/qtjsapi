
      // auto generated
      //var self;

      // class constructor:
      function QStackedWidget() {
        

        // should be QStackedWidget_BaseJs.call(this, engine):
        //QStackedWidget.prototype = new QStackedWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStackedWidget.getIdStatic()))) {

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
            qWarning("QStackedWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QStackedWidget_Wrapper(
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

      

        //copyProperties(this, wrapper, QStackedWidget);
  }

  
  else {
    
        print("QStackedWidget(): wrong number / type of arguments");
      
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

      //QStackedWidget.prototype = new QStackedWidget_BaseJs(engine);
      //QStackedWidget.prototype = new QStackedWidget_Wrapper(engine);
      QStackedWidget.prototype = new Object();


      QStackedWidget.prototype.toString = function() {
          //return "QStackedWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStackedWidget [JS]";
        };
      QStackedWidget.getObjectType = function() {
        return RJSType_QStackedWidget.getIdStatic();
      };

      QStackedWidget.prototype.getObjectType = function() {
        return RJSType_QStackedWidget.getIdStatic();
      };

      QStackedWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStackedWidget.getIdStatic()) {
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
QStackedWidget.NoFrame = QStackedWidget_Wrapper.NoFrame;
QStackedWidget.Box = QStackedWidget_Wrapper.Box;
QStackedWidget.Panel = QStackedWidget_Wrapper.Panel;
QStackedWidget.WinPanel = QStackedWidget_Wrapper.WinPanel;
QStackedWidget.HLine = QStackedWidget_Wrapper.HLine;
QStackedWidget.VLine = QStackedWidget_Wrapper.VLine;
QStackedWidget.StyledPanel = QStackedWidget_Wrapper.StyledPanel;

  // enum: Shadow
QStackedWidget.Plain = QStackedWidget_Wrapper.Plain;
QStackedWidget.Raised = QStackedWidget_Wrapper.Raised;
QStackedWidget.Sunken = QStackedWidget_Wrapper.Sunken;

  // enum: StyleMask
QStackedWidget.Shadow_Mask = QStackedWidget_Wrapper.Shadow_Mask;
QStackedWidget.Shape_Mask = QStackedWidget_Wrapper.Shape_Mask;


      // functions:
      
        // function 
        QStackedWidget.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.eventFilter");
          
              return this.__PROXY__.eventFilterSuper(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.children = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.property = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.window = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.update = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.show = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.close = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.move = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
      // function 
      QStackedWidget.prototype.actionEvent = function() 
        
      {
        //print("JS: QStackedWidget.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QStackedWidget);
  }

  
  else {
    
        print("QStackedWidget.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QStackedWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.create = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.addWidget = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.addWidget");
          
              return this.__PROXY__.addWidget(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.insertWidget = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.insertWidget");
          
              return this.__PROXY__.insertWidget(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.removeWidget = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.removeWidget");
          
              return this.__PROXY__.removeWidget(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.currentWidget = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.currentWidget");
          
              return this.__PROXY__.currentWidget(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.currentIndex = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.currentIndex");
          
              return this.__PROXY__.currentIndex(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.indexOf = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.indexOf");
          
              return this.__PROXY__.indexOf(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.widget = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.setCurrentWidget = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.setCurrentWidget");
          
              return this.__PROXY__.setCurrentWidget(...args);
            
        };
    
        // function 
        QStackedWidget.prototype.event = function(...args) 
          
        {
          //print("JS: QStackedWidget.prototype.event");
          
              return this.__PROXY__.eventSuper(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QStackedWidget.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedWidget.prototype, 'count', {
              get: function() {
                  
                      return this.__PROXY__.count;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QStackedWidget.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QStackedWidget.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QStackedWidget.prototype, 'currentChanged', {
            get: function() { return this.__PROXY__.currentChanged; },
            configurable: true
        });
        
          Object.defineProperty(QStackedWidget.prototype, 'currentChanged(int)', {
              get: function() { return this.__PROXY__.currentChanged; },
              configurable: true
          });
        
        Object.defineProperty(QStackedWidget.prototype, 'widgetRemoved', {
            get: function() { return this.__PROXY__.widgetRemoved; },
            configurable: true
        });
        
          Object.defineProperty(QStackedWidget.prototype, 'widgetRemoved(int)', {
              get: function() { return this.__PROXY__.widgetRemoved; },
              configurable: true
          });
        QStackedWidget.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QStackedWidget.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QStackedWidget.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStackedWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStackedWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QStackedWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      