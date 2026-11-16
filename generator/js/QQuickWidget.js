
      // auto generated
      //var self;

      // class constructor:
      function QQuickWidget() {
        

        // should be QQuickWidget_BaseJs.call(this, engine):
        //QQuickWidget.prototype = new QQuickWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QQuickWidget.getIdStatic()))) {

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
            qWarning("QQuickWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QQuickWidget_Wrapper(
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

      

        //copyProperties(this, wrapper, QQuickWidget);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QQuickWidget_Wrapper(
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

      

        //copyProperties(this, wrapper, QQuickWidget);
  }

  
  else {
    
        print("QQuickWidget(): wrong number / type of arguments");
      
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

      //QQuickWidget.prototype = new QQuickWidget_BaseJs(engine);
      //QQuickWidget.prototype = new QQuickWidget_Wrapper(engine);
      QQuickWidget.prototype = new Object();


      QQuickWidget.prototype.toString = function() {
          //return "QQuickWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QQuickWidget [JS]";
        };
      QQuickWidget.getObjectType = function() {
        return RJSType_QQuickWidget.getIdStatic();
      };

      QQuickWidget.prototype.getObjectType = function() {
        return RJSType_QQuickWidget.getIdStatic();
      };

      QQuickWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QQuickWidget.getIdStatic()) {
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
      
  // enum: ResizeMode
QQuickWidget.SizeViewToRootObject = QQuickWidget_Wrapper.SizeViewToRootObject;
QQuickWidget.SizeRootObjectToView = QQuickWidget_Wrapper.SizeRootObjectToView;

  // enum: Status
QQuickWidget.Null = QQuickWidget_Wrapper.Null;
QQuickWidget.Ready = QQuickWidget_Wrapper.Ready;
QQuickWidget.Loading = QQuickWidget_Wrapper.Loading;
QQuickWidget.Error = QQuickWidget_Wrapper.Error;


      // functions:
      
        // function 
        QQuickWidget.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.eventFilter");
          
              return this.__PROXY__.eventFilterSuper(...args);
            
        };
        QQuickWidget.prototype.eventFilter.__SUPER__ = true;
        
        // function 
        QQuickWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.children = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.property = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.window = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.update = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.show = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.close = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.move = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.event = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
        QQuickWidget.prototype.mousePressEvent.__SUPER__ = true;
        
        // function 
        QQuickWidget.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
        QQuickWidget.prototype.mouseReleaseEvent.__SUPER__ = true;
        
        // function 
        QQuickWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QQuickWidget.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QQuickWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QQuickWidget.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QQuickWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QQuickWidget.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        QQuickWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
      // function 
      QQuickWidget.prototype.actionEvent = function() 
        
      {
        //print("JS: QQuickWidget.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QQuickWidget);
  }

  
  else {
    
        print("QQuickWidget.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QQuickWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.create = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.engine = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.engine");
          
              return this.__PROXY__.engine(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.rootObject = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.rootObject");
          
              return this.__PROXY__.rootObject(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.resizeMode = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.resizeMode");
          
              return this.__PROXY__.resizeMode(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setResizeMode = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setResizeMode");
          
              return this.__PROXY__.setResizeMode(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.initialSize = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.initialSize");
          
              return this.__PROXY__.initialSize(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.grabFramebuffer = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.grabFramebuffer");
          
              return this.__PROXY__.grabFramebuffer(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setClearColor = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setClearColor");
          
              return this.__PROXY__.setClearColor(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.setSource = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.setSource");
          
              return this.__PROXY__.setSource(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.continueExecute = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.continueExecute");
          
              return this.__PROXY__.continueExecute(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.createFramebufferObject = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.createFramebufferObject");
          
              return this.__PROXY__.createFramebufferObject(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.destroyFramebufferObject = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.destroyFramebufferObject");
          
              return this.__PROXY__.destroyFramebufferObject(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.triggerUpdate = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.triggerUpdate");
          
              return this.__PROXY__.triggerUpdate(...args);
            
        };
        
        // function 
        QQuickWidget.prototype.propagateFocusObjectChanged = function(...args) 
          
        {
          //print("JS: QQuickWidget.prototype.propagateFocusObjectChanged");
          
              return this.__PROXY__.propagateFocusObjectChanged(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QQuickWidget.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'status', {
              get: function() {
                  
                      return this.__PROXY__.status;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickWidget.prototype, 'source', {
              get: function() {
                  
                      return this.__PROXY__.source;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSource(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QQuickWidget.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QQuickWidget.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QQuickWidget.prototype, 'statusChanged', {
            get: function() { return this.__PROXY__.statusChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickWidget.prototype, 'statusChanged(QQuickWidget::Status)', {
              get: function() { return this.__PROXY__.statusChanged; },
              configurable: true
          });
        QQuickWidget.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QQuickWidget.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QQuickWidget.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QQuickWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QQuickWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QQuickWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      