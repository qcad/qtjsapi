
      // auto generated
      //var self;

      // class constructor:
      function QAbstractScrollArea() {
        

        // should be QAbstractScrollArea_BaseJs.call(this, engine):
        //QAbstractScrollArea.prototype = new QAbstractScrollArea_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractScrollArea.getIdStatic()))) {

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
            qWarning("QAbstractScrollArea.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QAbstractScrollArea_Wrapper(
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

      

        //copyProperties(this, wrapper, QAbstractScrollArea);
  }

  
  else {
    
        print("QAbstractScrollArea(): wrong number / type of arguments");
      
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

      //QAbstractScrollArea.prototype = new QAbstractScrollArea_BaseJs(engine);
      //QAbstractScrollArea.prototype = new QAbstractScrollArea_Wrapper(engine);
      QAbstractScrollArea.prototype = new Object();


      QAbstractScrollArea.prototype.toString = function() {
          //return "QAbstractScrollArea [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractScrollArea [JS]";
        };
      QAbstractScrollArea.getObjectType = function() {
        return RJSType_QAbstractScrollArea.getIdStatic();
      };

      QAbstractScrollArea.prototype.getObjectType = function() {
        return RJSType_QAbstractScrollArea.getIdStatic();
      };

      QAbstractScrollArea.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractScrollArea.getIdStatic()) {
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
QAbstractScrollArea.NoFrame = QAbstractScrollArea_Wrapper.NoFrame;
QAbstractScrollArea.Box = QAbstractScrollArea_Wrapper.Box;
QAbstractScrollArea.Panel = QAbstractScrollArea_Wrapper.Panel;
QAbstractScrollArea.WinPanel = QAbstractScrollArea_Wrapper.WinPanel;
QAbstractScrollArea.HLine = QAbstractScrollArea_Wrapper.HLine;
QAbstractScrollArea.VLine = QAbstractScrollArea_Wrapper.VLine;
QAbstractScrollArea.StyledPanel = QAbstractScrollArea_Wrapper.StyledPanel;

  // enum: Shadow
QAbstractScrollArea.Plain = QAbstractScrollArea_Wrapper.Plain;
QAbstractScrollArea.Raised = QAbstractScrollArea_Wrapper.Raised;
QAbstractScrollArea.Sunken = QAbstractScrollArea_Wrapper.Sunken;

  // enum: StyleMask
QAbstractScrollArea.Shadow_Mask = QAbstractScrollArea_Wrapper.Shadow_Mask;
QAbstractScrollArea.Shape_Mask = QAbstractScrollArea_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QAbstractScrollArea.AdjustIgnored = QAbstractScrollArea_Wrapper.AdjustIgnored;
QAbstractScrollArea.AdjustToContentsOnFirstShow = QAbstractScrollArea_Wrapper.AdjustToContentsOnFirstShow;
QAbstractScrollArea.AdjustToContents = QAbstractScrollArea_Wrapper.AdjustToContents;


      // functions:
      
        // function 
        QAbstractScrollArea.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.findChild = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.children = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.property = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.parent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.devType = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.isModal = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.window = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setFont = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setMask = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.mask = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.grab = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.update = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.repaint = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.show = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.hide = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.close = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.raise = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.lower = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.move = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.resize = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.windowState = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.layout = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setParent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.scroll = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.addAction = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.addActions = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.actions = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.windowType = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.childAt = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
      // function 
      QAbstractScrollArea.prototype.actionEvent = function() 
        
      {
        //print("JS: QAbstractScrollArea.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QAbstractScrollArea);
  }

  
  else {
    
        print("QAbstractScrollArea.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QAbstractScrollArea.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.metric = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.redirected = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.create = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.destroy = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.viewport = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setViewport = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.setViewportMargins = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.setViewportMargins");
          
              return this.__PROXY__.setViewportMarginsSuper(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.viewportMargins = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.viewportMargins");
          
              return this.__PROXY__.viewportMarginsSuper(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.event = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.event");
          
              return this.__PROXY__.eventSuper(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.viewportEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.viewportEvent");
          
              return this.__PROXY__.viewportEventSuper(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEventSuper(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEventSuper(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEventSuper(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEventSuper(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBySuper(...args);
            
        };
    
        // function 
        QAbstractScrollArea.prototype.viewportSizeHint = function(...args) 
          
        {
          //print("JS: QAbstractScrollArea.prototype.viewportSizeHint");
          
              return this.__PROXY__.viewportSizeHintSuper(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QAbstractScrollArea.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QAbstractScrollArea.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractScrollArea.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        QAbstractScrollArea.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QAbstractScrollArea.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QAbstractScrollArea.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractScrollArea.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractScrollArea.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QAbstractScrollArea.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      