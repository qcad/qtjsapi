
      // auto generated
      //var self;

      // class constructor:
      function QTabBar() {
        

        // should be QTabBar_BaseJs.call(this, engine):
        //QTabBar.prototype = new QTabBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTabBar.getIdStatic()))) {

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
            qWarning("QTabBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTabBar_Wrapper(
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

      

        //copyProperties(this, wrapper, QTabBar);
  }

  
  else {
    
        print("QTabBar(): wrong number / type of arguments");
      
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

      //QTabBar.prototype = new QTabBar_BaseJs(engine);
      //QTabBar.prototype = new QTabBar_Wrapper(engine);
      QTabBar.prototype = new Object();


      QTabBar.prototype.toString = function() {
          //return "QTabBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTabBar [JS]";
        };
      QTabBar.getObjectType = function() {
        return RJSType_QTabBar.getIdStatic();
      };

      QTabBar.prototype.getObjectType = function() {
        return RJSType_QTabBar.getIdStatic();
      };

      QTabBar.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTabBar.getIdStatic()) {
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
QTabBar.RoundedNorth = QTabBar_Wrapper.RoundedNorth;
QTabBar.RoundedSouth = QTabBar_Wrapper.RoundedSouth;
QTabBar.RoundedWest = QTabBar_Wrapper.RoundedWest;
QTabBar.RoundedEast = QTabBar_Wrapper.RoundedEast;
QTabBar.TriangularNorth = QTabBar_Wrapper.TriangularNorth;
QTabBar.TriangularSouth = QTabBar_Wrapper.TriangularSouth;
QTabBar.TriangularWest = QTabBar_Wrapper.TriangularWest;
QTabBar.TriangularEast = QTabBar_Wrapper.TriangularEast;

  // enum: ButtonPosition
QTabBar.LeftSide = QTabBar_Wrapper.LeftSide;
QTabBar.RightSide = QTabBar_Wrapper.RightSide;

  // enum: SelectionBehavior
QTabBar.SelectLeftTab = QTabBar_Wrapper.SelectLeftTab;
QTabBar.SelectRightTab = QTabBar_Wrapper.SelectRightTab;
QTabBar.SelectPreviousTab = QTabBar_Wrapper.SelectPreviousTab;


      // functions:
      
        // function 
        QTabBar.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QTabBar.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QTabBar.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QTabBar.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QTabBar.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QTabBar.prototype.findChild = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QTabBar.prototype.children = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QTabBar.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QTabBar.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QTabBar.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QTabBar.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QTabBar.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QTabBar.prototype.property = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QTabBar.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QTabBar.prototype.parent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QTabBar.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QTabBar.prototype.devType = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QTabBar.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QTabBar.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QTabBar.prototype.isModal = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QTabBar.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QTabBar.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QTabBar.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QTabBar.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QTabBar.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QTabBar.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QTabBar.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QTabBar.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QTabBar.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QTabBar.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QTabBar.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QTabBar.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QTabBar.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QTabBar.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QTabBar.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QTabBar.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QTabBar.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QTabBar.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QTabBar.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QTabBar.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QTabBar.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QTabBar.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QTabBar.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QTabBar.prototype.window = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QTabBar.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QTabBar.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QTabBar.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QTabBar.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QTabBar.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QTabBar.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QTabBar.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QTabBar.prototype.setFont = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QTabBar.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QTabBar.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QTabBar.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QTabBar.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QTabBar.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QTabBar.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QTabBar.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QTabBar.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QTabBar.prototype.setMask = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QTabBar.prototype.mask = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QTabBar.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QTabBar.prototype.grab = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QTabBar.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QTabBar.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QTabBar.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QTabBar.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QTabBar.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QTabBar.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QTabBar.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QTabBar.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QTabBar.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QTabBar.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QTabBar.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QTabBar.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QTabBar.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QTabBar.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QTabBar.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QTabBar.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QTabBar.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QTabBar.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QTabBar.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QTabBar.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QTabBar.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QTabBar.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QTabBar.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QTabBar.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QTabBar.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QTabBar.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QTabBar.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QTabBar.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QTabBar.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QTabBar.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QTabBar.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QTabBar.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QTabBar.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QTabBar.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QTabBar.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QTabBar.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QTabBar.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QTabBar.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QTabBar.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QTabBar.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QTabBar.prototype.update = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QTabBar.prototype.repaint = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QTabBar.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QTabBar.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QTabBar.prototype.show = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QTabBar.prototype.hide = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QTabBar.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QTabBar.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QTabBar.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QTabBar.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QTabBar.prototype.close = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QTabBar.prototype.raise = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QTabBar.prototype.lower = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QTabBar.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QTabBar.prototype.move = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QTabBar.prototype.resize = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QTabBar.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QTabBar.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QTabBar.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QTabBar.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QTabBar.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QTabBar.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QTabBar.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QTabBar.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QTabBar.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QTabBar.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QTabBar.prototype.windowState = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QTabBar.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QTabBar.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QTabBar.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QTabBar.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QTabBar.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QTabBar.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QTabBar.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QTabBar.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QTabBar.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QTabBar.prototype.layout = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QTabBar.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QTabBar.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QTabBar.prototype.setParent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QTabBar.prototype.scroll = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QTabBar.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QTabBar.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QTabBar.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QTabBar.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QTabBar.prototype.addAction = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QTabBar.prototype.addActions = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QTabBar.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QTabBar.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QTabBar.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QTabBar.prototype.actions = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QTabBar.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QTabBar.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QTabBar.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QTabBar.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QTabBar.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QTabBar.prototype.windowType = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QTabBar.prototype.childAt = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QTabBar.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QTabBar.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QTabBar.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QTabBar.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QTabBar.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QTabBar.prototype.event = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QTabBar.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.metric = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QTabBar.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QTabBar.prototype.redirected = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QTabBar.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QTabBar.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QTabBar.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QTabBar.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QTabBar.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QTabBar.prototype.create = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QTabBar.prototype.destroy = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QTabBar.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QTabBar.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QTabBar.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QTabBar.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QTabBar.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QTabBar.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QTabBar.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QTabBar.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QTabBar.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QTabBar.prototype.setShape = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setShape");
          
              return this.__PROXY__.setShape(...args);
            
        };
        
        // function 
        QTabBar.prototype.addTab = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.addTab");
          
              return this.__PROXY__.addTab(...args);
            
        };
        
        // function 
        QTabBar.prototype.insertTab = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.insertTab");
          
              return this.__PROXY__.insertTab(...args);
            
        };
        
        // function 
        QTabBar.prototype.removeTab = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.removeTab");
          
              return this.__PROXY__.removeTab(...args);
            
        };
        
        // function 
        QTabBar.prototype.moveTab = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.moveTab");
          
              return this.__PROXY__.moveTab(...args);
            
        };
        
        // function 
        QTabBar.prototype.isTabEnabled = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isTabEnabled");
          
              return this.__PROXY__.isTabEnabled(...args);
            
        };
        
        // function 
        QTabBar.prototype.setTabEnabled = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setTabEnabled");
          
              return this.__PROXY__.setTabEnabled(...args);
            
        };
        
        // function 
        QTabBar.prototype.isTabVisible = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isTabVisible");
          
              return this.__PROXY__.isTabVisible(...args);
            
        };
        
        // function 
        QTabBar.prototype.setTabVisible = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setTabVisible");
          
              return this.__PROXY__.setTabVisible(...args);
            
        };
        
        // function 
        QTabBar.prototype.tabText = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.tabText");
          
              return this.__PROXY__.tabText(...args);
            
        };
        
        // function 
        QTabBar.prototype.setTabText = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setTabText");
          
              return this.__PROXY__.setTabText(...args);
            
        };
        
        // function 
        QTabBar.prototype.tabTextColor = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.tabTextColor");
          
              return this.__PROXY__.tabTextColor(...args);
            
        };
        
        // function 
        QTabBar.prototype.setTabTextColor = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setTabTextColor");
          
              return this.__PROXY__.setTabTextColor(...args);
            
        };
        
        // function 
        QTabBar.prototype.tabIcon = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.tabIcon");
          
              return this.__PROXY__.tabIcon(...args);
            
        };
        
        // function 
        QTabBar.prototype.setTabIcon = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setTabIcon");
          
              return this.__PROXY__.setTabIcon(...args);
            
        };
        
        // function 
        QTabBar.prototype.setElideMode = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setElideMode");
          
              return this.__PROXY__.setElideMode(...args);
            
        };
        
        // function 
        QTabBar.prototype.setTabToolTip = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setTabToolTip");
          
              return this.__PROXY__.setTabToolTip(...args);
            
        };
        
        // function 
        QTabBar.prototype.tabToolTip = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.tabToolTip");
          
              return this.__PROXY__.tabToolTip(...args);
            
        };
        
        // function 
        QTabBar.prototype.setTabWhatsThis = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setTabWhatsThis");
          
              return this.__PROXY__.setTabWhatsThis(...args);
            
        };
        
        // function 
        QTabBar.prototype.tabWhatsThis = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.tabWhatsThis");
          
              return this.__PROXY__.tabWhatsThis(...args);
            
        };
        
        // function 
        QTabBar.prototype.setTabData = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setTabData");
          
              return this.__PROXY__.setTabData(...args);
            
        };
        
        // function 
        QTabBar.prototype.tabData = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.tabData");
          
              return this.__PROXY__.tabData(...args);
            
        };
        
        // function 
        QTabBar.prototype.tabRect = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.tabRect");
          
              return this.__PROXY__.tabRect(...args);
            
        };
        
        // function 
        QTabBar.prototype.tabAt = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.tabAt");
          
              return this.__PROXY__.tabAt(...args);
            
        };
        
        // function 
        QTabBar.prototype.setDrawBase = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setDrawBase");
          
              return this.__PROXY__.setDrawBase(...args);
            
        };
        
        // function 
        QTabBar.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
        
        // function 
        QTabBar.prototype.setUsesScrollButtons = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setUsesScrollButtons");
          
              return this.__PROXY__.setUsesScrollButtons(...args);
            
        };
        
        // function 
        QTabBar.prototype.setTabsClosable = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setTabsClosable");
          
              return this.__PROXY__.setTabsClosable(...args);
            
        };
        
        // function 
        QTabBar.prototype.setTabButton = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setTabButton");
          
              return this.__PROXY__.setTabButton(...args);
            
        };
        
        // function 
        QTabBar.prototype.tabButton = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.tabButton");
          
              return this.__PROXY__.tabButton(...args);
            
        };
        
        // function 
        QTabBar.prototype.setSelectionBehaviorOnRemove = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setSelectionBehaviorOnRemove");
          
              return this.__PROXY__.setSelectionBehaviorOnRemove(...args);
            
        };
        
        // function 
        QTabBar.prototype.setExpanding = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setExpanding");
          
              return this.__PROXY__.setExpanding(...args);
            
        };
        
        // function 
        QTabBar.prototype.isMovable = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.isMovable");
          
              return this.__PROXY__.isMovable(...args);
            
        };
        
        // function 
        QTabBar.prototype.setMovable = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setMovable");
          
              return this.__PROXY__.setMovable(...args);
            
        };
        
        // function 
        QTabBar.prototype.setDocumentMode = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setDocumentMode");
          
              return this.__PROXY__.setDocumentMode(...args);
            
        };
        
        // function 
        QTabBar.prototype.setAutoHide = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setAutoHide");
          
              return this.__PROXY__.setAutoHide(...args);
            
        };
        
        // function 
        QTabBar.prototype.setChangeCurrentOnDrag = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setChangeCurrentOnDrag");
          
              return this.__PROXY__.setChangeCurrentOnDrag(...args);
            
        };
        
        // function 
        QTabBar.prototype.accessibleTabName = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.accessibleTabName");
          
              return this.__PROXY__.accessibleTabName(...args);
            
        };
        
        // function 
        QTabBar.prototype.setAccessibleTabName = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setAccessibleTabName");
          
              return this.__PROXY__.setAccessibleTabName(...args);
            
        };
        
        // function 
        QTabBar.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
        
        // function 
        QTabBar.prototype.tabSizeHint = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.tabSizeHint");
          
              return this.__PROXY__.tabSizeHint(...args);
            
        };
        
        // function 
        QTabBar.prototype.minimumTabSizeHint = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.minimumTabSizeHint");
          
              return this.__PROXY__.minimumTabSizeHint(...args);
            
        };
        
        // function 
        QTabBar.prototype.tabInserted = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.tabInserted");
          
              return this.__PROXY__.tabInserted(...args);
            
        };
        
        // function 
        QTabBar.prototype.tabRemoved = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.tabRemoved");
          
              return this.__PROXY__.tabRemoved(...args);
            
        };
        
        // function 
        QTabBar.prototype.tabLayoutChange = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.tabLayoutChange");
          
              return this.__PROXY__.tabLayoutChange(...args);
            
        };
        
        // function 
        QTabBar.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        
        // function 
        QTabBar.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QTabBar.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QTabBar.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QTabBar.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QTabBar.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QTabBar.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QTabBar.prototype.resizeEvent.__SUPER__ = true;
        

      // static functions:
      
          Object.defineProperty(QTabBar.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'currentIndex', {
              get: function() {
                  
                      return this.__PROXY__.currentIndex;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentIndex(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'count', {
              get: function() {
                  
                      return this.__PROXY__.count;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'drawBase', {
              get: function() {
                  
                      return this.__PROXY__.drawBase;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDrawBase(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'elideMode', {
              get: function() {
                  
                      return this.__PROXY__.elideMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setElideMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'usesScrollButtons', {
              get: function() {
                  
                      return this.__PROXY__.usesScrollButtons;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUsesScrollButtons(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'shape', {
              get: function() {
                  
                      return this.__PROXY__.shape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'tabsClosable', {
              get: function() {
                  
                      return this.__PROXY__.tabsClosable;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabsClosable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'selectionBehaviorOnRemove', {
              get: function() {
                  
                      return this.__PROXY__.selectionBehaviorOnRemove;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionBehaviorOnRemove(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'expanding', {
              get: function() {
                  
                      return this.__PROXY__.expanding;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setExpanding(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'movable', {
              get: function() {
                  
                      return this.__PROXY__.isMovable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMovable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'documentMode', {
              get: function() {
                  
                      return this.__PROXY__.documentMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDocumentMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'autoHide', {
              get: function() {
                  
                      return this.__PROXY__.autoHide;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoHide(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabBar.prototype, 'changeCurrentOnDrag', {
              get: function() {
                  
                      return this.__PROXY__.changeCurrentOnDrag;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setChangeCurrentOnDrag(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QTabBar.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QTabBar.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QTabBar.prototype, 'currentChanged', {
            get: function() { return this.__PROXY__.currentChanged; },
            configurable: true
        });
        
          Object.defineProperty(QTabBar.prototype, 'currentChanged(int)', {
              get: function() { return this.__PROXY__.currentChanged; },
              configurable: true
          });
        
        Object.defineProperty(QTabBar.prototype, 'tabCloseRequested', {
            get: function() { return this.__PROXY__.tabCloseRequested; },
            configurable: true
        });
        
          Object.defineProperty(QTabBar.prototype, 'tabCloseRequested(int)', {
              get: function() { return this.__PROXY__.tabCloseRequested; },
              configurable: true
          });
        
        Object.defineProperty(QTabBar.prototype, 'tabMoved', {
            get: function() { return this.__PROXY__.tabMoved; },
            configurable: true
        });
        
          Object.defineProperty(QTabBar.prototype, 'tabMoved(int,int)', {
              get: function() { return this.__PROXY__.tabMoved; },
              configurable: true
          });
        
        Object.defineProperty(QTabBar.prototype, 'tabBarClicked', {
            get: function() { return this.__PROXY__.tabBarClicked; },
            configurable: true
        });
        
          Object.defineProperty(QTabBar.prototype, 'tabBarClicked(int)', {
              get: function() { return this.__PROXY__.tabBarClicked; },
              configurable: true
          });
        
        Object.defineProperty(QTabBar.prototype, 'tabBarDoubleClicked', {
            get: function() { return this.__PROXY__.tabBarDoubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(QTabBar.prototype, 'tabBarDoubleClicked(int)', {
              get: function() { return this.__PROXY__.tabBarDoubleClicked; },
              configurable: true
          });
        QTabBar.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTabBar.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTabBar.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTabBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTabBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTabBar.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      