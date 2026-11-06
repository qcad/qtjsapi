
      // auto generated
      //var self;

      // class constructor:
      function QSplitter() {
        

        // should be QSplitter_BaseJs.call(this, engine):
        //QSplitter.prototype = new QSplitter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSplitter.getIdStatic()))) {

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
            qWarning("QSplitter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSplitter_Wrapper(
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

      

        //copyProperties(this, wrapper, QSplitter);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSplitter_Wrapper(
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

      

        //copyProperties(this, wrapper, QSplitter);
  }

  
  else {
    
        print("QSplitter(): wrong number / type of arguments");
      
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

      //QSplitter.prototype = new QSplitter_BaseJs(engine);
      //QSplitter.prototype = new QSplitter_Wrapper(engine);
      QSplitter.prototype = new Object();


      QSplitter.prototype.toString = function() {
          //return "QSplitter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSplitter [JS]";
        };
      QSplitter.getObjectType = function() {
        return RJSType_QSplitter.getIdStatic();
      };

      QSplitter.prototype.getObjectType = function() {
        return RJSType_QSplitter.getIdStatic();
      };

      QSplitter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSplitter.getIdStatic()) {
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
QSplitter.NoFrame = QSplitter_Wrapper.NoFrame;
QSplitter.Box = QSplitter_Wrapper.Box;
QSplitter.Panel = QSplitter_Wrapper.Panel;
QSplitter.WinPanel = QSplitter_Wrapper.WinPanel;
QSplitter.HLine = QSplitter_Wrapper.HLine;
QSplitter.VLine = QSplitter_Wrapper.VLine;
QSplitter.StyledPanel = QSplitter_Wrapper.StyledPanel;

  // enum: Shadow
QSplitter.Plain = QSplitter_Wrapper.Plain;
QSplitter.Raised = QSplitter_Wrapper.Raised;
QSplitter.Sunken = QSplitter_Wrapper.Sunken;

  // enum: StyleMask
QSplitter.Shadow_Mask = QSplitter_Wrapper.Shadow_Mask;
QSplitter.Shape_Mask = QSplitter_Wrapper.Shape_Mask;


      // functions:
      
        // function 
        QSplitter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QSplitter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QSplitter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QSplitter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QSplitter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QSplitter.prototype.findChild = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QSplitter.prototype.children = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QSplitter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QSplitter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QSplitter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QSplitter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QSplitter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QSplitter.prototype.property = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QSplitter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QSplitter.prototype.parent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QSplitter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QSplitter.prototype.devType = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QSplitter.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QSplitter.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QSplitter.prototype.isModal = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QSplitter.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QSplitter.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QSplitter.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QSplitter.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QSplitter.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QSplitter.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QSplitter.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QSplitter.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QSplitter.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QSplitter.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QSplitter.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QSplitter.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QSplitter.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QSplitter.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QSplitter.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QSplitter.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QSplitter.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QSplitter.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QSplitter.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QSplitter.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QSplitter.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QSplitter.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QSplitter.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QSplitter.prototype.window = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QSplitter.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QSplitter.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QSplitter.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QSplitter.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QSplitter.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QSplitter.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QSplitter.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QSplitter.prototype.setFont = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QSplitter.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QSplitter.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QSplitter.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QSplitter.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QSplitter.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QSplitter.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QSplitter.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QSplitter.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QSplitter.prototype.setMask = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QSplitter.prototype.mask = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QSplitter.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QSplitter.prototype.grab = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QSplitter.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QSplitter.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QSplitter.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QSplitter.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QSplitter.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QSplitter.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QSplitter.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QSplitter.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QSplitter.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QSplitter.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QSplitter.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QSplitter.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QSplitter.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QSplitter.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QSplitter.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QSplitter.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QSplitter.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QSplitter.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QSplitter.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QSplitter.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QSplitter.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QSplitter.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QSplitter.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QSplitter.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QSplitter.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QSplitter.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QSplitter.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QSplitter.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QSplitter.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QSplitter.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QSplitter.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QSplitter.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QSplitter.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QSplitter.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QSplitter.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QSplitter.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QSplitter.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QSplitter.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QSplitter.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QSplitter.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QSplitter.prototype.update = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QSplitter.prototype.repaint = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QSplitter.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QSplitter.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QSplitter.prototype.show = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QSplitter.prototype.hide = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QSplitter.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QSplitter.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QSplitter.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QSplitter.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QSplitter.prototype.close = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QSplitter.prototype.raise = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QSplitter.prototype.lower = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QSplitter.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QSplitter.prototype.move = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QSplitter.prototype.resize = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QSplitter.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QSplitter.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QSplitter.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QSplitter.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QSplitter.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QSplitter.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QSplitter.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QSplitter.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QSplitter.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QSplitter.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QSplitter.prototype.windowState = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QSplitter.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QSplitter.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QSplitter.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QSplitter.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QSplitter.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QSplitter.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QSplitter.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QSplitter.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QSplitter.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QSplitter.prototype.layout = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QSplitter.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QSplitter.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QSplitter.prototype.setParent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QSplitter.prototype.scroll = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QSplitter.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QSplitter.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QSplitter.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QSplitter.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QSplitter.prototype.addAction = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QSplitter.prototype.addActions = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QSplitter.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QSplitter.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QSplitter.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QSplitter.prototype.actions = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QSplitter.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QSplitter.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QSplitter.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QSplitter.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QSplitter.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QSplitter.prototype.windowType = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QSplitter.prototype.childAt = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QSplitter.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QSplitter.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QSplitter.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QSplitter.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QSplitter.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QSplitter.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.metric = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QSplitter.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QSplitter.prototype.redirected = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QSplitter.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QSplitter.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QSplitter.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QSplitter.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QSplitter.prototype.create = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QSplitter.prototype.destroy = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QSplitter.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QSplitter.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QSplitter.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QSplitter.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QSplitter.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QSplitter.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QSplitter.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QSplitter.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QSplitter.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QSplitter.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
        
        // function 
        QSplitter.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
        
        // function 
        QSplitter.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
        
        // function 
        QSplitter.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
        
        // function 
        QSplitter.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
        
        // function 
        QSplitter.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
        
        // function 
        QSplitter.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
        
        // function 
        QSplitter.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
        
        // function 
        QSplitter.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        
        // function 
        QSplitter.prototype.addWidget = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.addWidget");
          
              return this.__PROXY__.addWidget(...args);
            
        };
        
        // function 
        QSplitter.prototype.insertWidget = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.insertWidget");
          
              return this.__PROXY__.insertWidget(...args);
            
        };
        
        // function 
        QSplitter.prototype.replaceWidget = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.replaceWidget");
          
              return this.__PROXY__.replaceWidget(...args);
            
        };
        
        // function 
        QSplitter.prototype.setOrientation = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setOrientation");
          
              return this.__PROXY__.setOrientation(...args);
            
        };
        
        // function 
        QSplitter.prototype.orientation = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.orientation");
          
              return this.__PROXY__.orientation(...args);
            
        };
        
        // function 
        QSplitter.prototype.setChildrenCollapsible = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setChildrenCollapsible");
          
              return this.__PROXY__.setChildrenCollapsible(...args);
            
        };
        
        // function 
        QSplitter.prototype.setCollapsible = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setCollapsible");
          
              return this.__PROXY__.setCollapsible(...args);
            
        };
        
        // function 
        QSplitter.prototype.isCollapsible = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.isCollapsible");
          
              return this.__PROXY__.isCollapsible(...args);
            
        };
        
        // function 
        QSplitter.prototype.setOpaqueResize = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setOpaqueResize");
          
              return this.__PROXY__.setOpaqueResize(...args);
            
        };
        
        // function 
        QSplitter.prototype.refresh = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.refresh");
          
              return this.__PROXY__.refresh(...args);
            
        };
        
        // function 
        QSplitter.prototype.sizes = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.sizes");
          
              return this.__PROXY__.sizes(...args);
            
        };
        
        // function 
        QSplitter.prototype.setSizes = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setSizes");
          
              return this.__PROXY__.setSizes(...args);
            
        };
        
        // function 
        QSplitter.prototype.saveState = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.saveState");
          
              return this.__PROXY__.saveState(...args);
            
        };
        
        // function 
        QSplitter.prototype.restoreState = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.restoreState");
          
              return this.__PROXY__.restoreState(...args);
            
        };
        
        // function 
        QSplitter.prototype.setHandleWidth = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setHandleWidth");
          
              return this.__PROXY__.setHandleWidth(...args);
            
        };
        
        // function 
        QSplitter.prototype.indexOf = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.indexOf");
          
              return this.__PROXY__.indexOf(...args);
            
        };
        
        // function 
        QSplitter.prototype.widget = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
        
        // function 
        QSplitter.prototype.count = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.count");
          
              return this.__PROXY__.count(...args);
            
        };
        
        // function 
        QSplitter.prototype.handle = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.handle");
          
              return this.__PROXY__.handle(...args);
            
        };
        
        // function 
        QSplitter.prototype.setStretchFactor = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setStretchFactor");
          
              return this.__PROXY__.setStretchFactor(...args);
            
        };
        
        // function 
        QSplitter.prototype.createHandle = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.createHandle");
          
              return this.__PROXY__.createHandle(...args);
            
        };
        
        // function 
        QSplitter.prototype.childEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.childEvent");
          
              return this.__PROXY__.childEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.event = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QSplitter.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QSplitter.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        QSplitter.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QSplitter.prototype.moveSplitter = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.moveSplitter");
          
              return this.__PROXY__.moveSplitter(...args);
            
        };
        
        // function 
        QSplitter.prototype.setRubberBand = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.setRubberBand");
          
              return this.__PROXY__.setRubberBand(...args);
            
        };
        
        // function 
        QSplitter.prototype.closestLegalPosition = function(...args) 
          
        {
          //print("JS: QSplitter.prototype.closestLegalPosition");
          
              return this.__PROXY__.closestLegalPosition(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QSplitter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'opaqueResize', {
              get: function() {
                  
                      return this.__PROXY__.opaqueResize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOpaqueResize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'handleWidth', {
              get: function() {
                  
                      return this.__PROXY__.handleWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHandleWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitter.prototype, 'childrenCollapsible', {
              get: function() {
                  
                      return this.__PROXY__.childrenCollapsible;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setChildrenCollapsible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QSplitter.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QSplitter.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QSplitter.prototype, 'splitterMoved', {
            get: function() { return this.__PROXY__.splitterMoved; },
            configurable: true
        });
        
          Object.defineProperty(QSplitter.prototype, 'splitterMoved(int,int)', {
              get: function() { return this.__PROXY__.splitterMoved; },
              configurable: true
          });
        QSplitter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSplitter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSplitter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSplitter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSplitter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSplitter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      