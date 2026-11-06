
      // auto generated
      //var self;

      // class constructor:
      function QSlider() {
        

        // should be QSlider_BaseJs.call(this, engine):
        //QSlider.prototype = new QSlider_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSlider.getIdStatic()))) {

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
            qWarning("QSlider.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSlider_Wrapper(
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

      

        //copyProperties(this, wrapper, QSlider);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSlider_Wrapper(
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

      

        //copyProperties(this, wrapper, QSlider);
  }

  
  else {
    
        print("QSlider(): wrong number / type of arguments");
      
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

      //QSlider.prototype = new QSlider_BaseJs(engine);
      //QSlider.prototype = new QSlider_Wrapper(engine);
      QSlider.prototype = new Object();


      QSlider.prototype.toString = function() {
          //return "QSlider [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSlider [JS]";
        };
      QSlider.getObjectType = function() {
        return RJSType_QSlider.getIdStatic();
      };

      QSlider.prototype.getObjectType = function() {
        return RJSType_QSlider.getIdStatic();
      };

      QSlider.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSlider.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractSlider.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: SliderAction
QSlider.SliderNoAction = QSlider_Wrapper.SliderNoAction;
QSlider.SliderSingleStepAdd = QSlider_Wrapper.SliderSingleStepAdd;
QSlider.SliderSingleStepSub = QSlider_Wrapper.SliderSingleStepSub;
QSlider.SliderPageStepAdd = QSlider_Wrapper.SliderPageStepAdd;
QSlider.SliderPageStepSub = QSlider_Wrapper.SliderPageStepSub;
QSlider.SliderToMinimum = QSlider_Wrapper.SliderToMinimum;
QSlider.SliderToMaximum = QSlider_Wrapper.SliderToMaximum;
QSlider.SliderMove = QSlider_Wrapper.SliderMove;

  // enum: TickPosition
QSlider.NoTicks = QSlider_Wrapper.NoTicks;
QSlider.TicksAbove = QSlider_Wrapper.TicksAbove;
QSlider.TicksLeft = QSlider_Wrapper.TicksLeft;
QSlider.TicksBelow = QSlider_Wrapper.TicksBelow;
QSlider.TicksRight = QSlider_Wrapper.TicksRight;
QSlider.TicksBothSides = QSlider_Wrapper.TicksBothSides;


      // functions:
      
        // function 
        QSlider.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QSlider.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QSlider.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QSlider.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QSlider.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QSlider.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QSlider.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QSlider.prototype.findChild = function(...args) 
          
        {
          //print("JS: QSlider.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QSlider.prototype.children = function(...args) 
          
        {
          //print("JS: QSlider.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QSlider.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QSlider.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QSlider.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QSlider.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QSlider.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QSlider.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QSlider.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QSlider.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QSlider.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QSlider.prototype.property = function(...args) 
          
        {
          //print("JS: QSlider.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QSlider.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QSlider.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QSlider.prototype.parent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QSlider.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QSlider.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QSlider.prototype.devType = function(...args) 
          
        {
          //print("JS: QSlider.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QSlider.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QSlider.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QSlider.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QSlider.prototype.isModal = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QSlider.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QSlider.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QSlider.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QSlider.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QSlider.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QSlider.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QSlider.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QSlider.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QSlider.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QSlider.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QSlider.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QSlider.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QSlider.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QSlider.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QSlider.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QSlider.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QSlider.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QSlider.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QSlider.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QSlider.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QSlider.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QSlider.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QSlider.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QSlider.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QSlider.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QSlider.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QSlider.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QSlider.prototype.window = function(...args) 
          
        {
          //print("JS: QSlider.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QSlider.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QSlider.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QSlider.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QSlider.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QSlider.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QSlider.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QSlider.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QSlider.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QSlider.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QSlider.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QSlider.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QSlider.prototype.setFont = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QSlider.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QSlider.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QSlider.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QSlider.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QSlider.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QSlider.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QSlider.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QSlider.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QSlider.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QSlider.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QSlider.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QSlider.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QSlider.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QSlider.prototype.setMask = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QSlider.prototype.mask = function(...args) 
          
        {
          //print("JS: QSlider.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QSlider.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QSlider.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QSlider.prototype.grab = function(...args) 
          
        {
          //print("JS: QSlider.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QSlider.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QSlider.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QSlider.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QSlider.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QSlider.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QSlider.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QSlider.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QSlider.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QSlider.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QSlider.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QSlider.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QSlider.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QSlider.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QSlider.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QSlider.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QSlider.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QSlider.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QSlider.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QSlider.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QSlider.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QSlider.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QSlider.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QSlider.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QSlider.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QSlider.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QSlider.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QSlider.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QSlider.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QSlider.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QSlider.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QSlider.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QSlider.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QSlider.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QSlider.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QSlider.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QSlider.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QSlider.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QSlider.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QSlider.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QSlider.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QSlider.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QSlider.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QSlider.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QSlider.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QSlider.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QSlider.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QSlider.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QSlider.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QSlider.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QSlider.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QSlider.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QSlider.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QSlider.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QSlider.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QSlider.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QSlider.prototype.update = function(...args) 
          
        {
          //print("JS: QSlider.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QSlider.prototype.repaint = function(...args) 
          
        {
          //print("JS: QSlider.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QSlider.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QSlider.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QSlider.prototype.show = function(...args) 
          
        {
          //print("JS: QSlider.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QSlider.prototype.hide = function(...args) 
          
        {
          //print("JS: QSlider.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QSlider.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QSlider.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QSlider.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QSlider.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QSlider.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QSlider.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QSlider.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QSlider.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QSlider.prototype.close = function(...args) 
          
        {
          //print("JS: QSlider.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QSlider.prototype.raise = function(...args) 
          
        {
          //print("JS: QSlider.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QSlider.prototype.lower = function(...args) 
          
        {
          //print("JS: QSlider.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QSlider.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QSlider.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QSlider.prototype.move = function(...args) 
          
        {
          //print("JS: QSlider.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QSlider.prototype.resize = function(...args) 
          
        {
          //print("JS: QSlider.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QSlider.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QSlider.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QSlider.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QSlider.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QSlider.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QSlider.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QSlider.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QSlider.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QSlider.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QSlider.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QSlider.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QSlider.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QSlider.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QSlider.prototype.windowState = function(...args) 
          
        {
          //print("JS: QSlider.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QSlider.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QSlider.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QSlider.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QSlider.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QSlider.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QSlider.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QSlider.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QSlider.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QSlider.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QSlider.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QSlider.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QSlider.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QSlider.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QSlider.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QSlider.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QSlider.prototype.layout = function(...args) 
          
        {
          //print("JS: QSlider.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QSlider.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QSlider.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QSlider.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QSlider.prototype.setParent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QSlider.prototype.scroll = function(...args) 
          
        {
          //print("JS: QSlider.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QSlider.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QSlider.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QSlider.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QSlider.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QSlider.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QSlider.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QSlider.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QSlider.prototype.addAction = function(...args) 
          
        {
          //print("JS: QSlider.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QSlider.prototype.addActions = function(...args) 
          
        {
          //print("JS: QSlider.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QSlider.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QSlider.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QSlider.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QSlider.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QSlider.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QSlider.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QSlider.prototype.actions = function(...args) 
          
        {
          //print("JS: QSlider.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QSlider.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QSlider.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QSlider.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QSlider.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QSlider.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QSlider.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QSlider.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QSlider.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QSlider.prototype.windowType = function(...args) 
          
        {
          //print("JS: QSlider.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QSlider.prototype.childAt = function(...args) 
          
        {
          //print("JS: QSlider.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QSlider.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QSlider.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QSlider.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QSlider.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QSlider.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QSlider.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QSlider.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QSlider.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.metric = function(...args) 
          
        {
          //print("JS: QSlider.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QSlider.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QSlider.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QSlider.prototype.redirected = function(...args) 
          
        {
          //print("JS: QSlider.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QSlider.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QSlider.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QSlider.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QSlider.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QSlider.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QSlider.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QSlider.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QSlider.prototype.create = function(...args) 
          
        {
          //print("JS: QSlider.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QSlider.prototype.destroy = function(...args) 
          
        {
          //print("JS: QSlider.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QSlider.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QSlider.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QSlider.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QSlider.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QSlider.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QSlider.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QSlider.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QSlider.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QSlider.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QSlider.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QSlider.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QSlider.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QSlider.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QSlider.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QSlider.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QSlider.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QSlider.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QSlider.prototype.setMinimum = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setMinimum");
          
              return this.__PROXY__.setMinimum(...args);
            
        };
    
        // function 
        QSlider.prototype.setMaximum = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setMaximum");
          
              return this.__PROXY__.setMaximum(...args);
            
        };
    
        // function 
        QSlider.prototype.setSingleStep = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setSingleStep");
          
              return this.__PROXY__.setSingleStep(...args);
            
        };
    
        // function 
        QSlider.prototype.setPageStep = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setPageStep");
          
              return this.__PROXY__.setPageStep(...args);
            
        };
    
        // function 
        QSlider.prototype.setTracking = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setTracking");
          
              return this.__PROXY__.setTracking(...args);
            
        };
    
        // function 
        QSlider.prototype.hasTracking = function(...args) 
          
        {
          //print("JS: QSlider.prototype.hasTracking");
          
              return this.__PROXY__.hasTracking(...args);
            
        };
    
        // function 
        QSlider.prototype.setSliderDown = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setSliderDown");
          
              return this.__PROXY__.setSliderDown(...args);
            
        };
    
        // function 
        QSlider.prototype.isSliderDown = function(...args) 
          
        {
          //print("JS: QSlider.prototype.isSliderDown");
          
              return this.__PROXY__.isSliderDown(...args);
            
        };
    
        // function 
        QSlider.prototype.setSliderPosition = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setSliderPosition");
          
              return this.__PROXY__.setSliderPosition(...args);
            
        };
    
        // function 
        QSlider.prototype.setInvertedAppearance = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setInvertedAppearance");
          
              return this.__PROXY__.setInvertedAppearance(...args);
            
        };
    
        // function 
        QSlider.prototype.setInvertedControls = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setInvertedControls");
          
              return this.__PROXY__.setInvertedControls(...args);
            
        };
    
        // function 
        QSlider.prototype.triggerAction = function(...args) 
          
        {
          //print("JS: QSlider.prototype.triggerAction");
          
              return this.__PROXY__.triggerAction(...args);
            
        };
    
        // function 
        QSlider.prototype.setValue = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setValue");
          
              return this.__PROXY__.setValue(...args);
            
        };
    
        // function 
        QSlider.prototype.setOrientation = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setOrientation");
          
              return this.__PROXY__.setOrientation(...args);
            
        };
    
        // function 
        QSlider.prototype.setRange = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setRange");
          
              return this.__PROXY__.setRange(...args);
            
        };
    
        // function 
        QSlider.prototype.setRepeatAction = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setRepeatAction");
          
              return this.__PROXY__.setRepeatAction(...args);
            
        };
    
        // function 
        QSlider.prototype.repeatAction = function(...args) 
          
        {
          //print("JS: QSlider.prototype.repeatAction");
          
              return this.__PROXY__.repeatAction(...args);
            
        };
    
        // function 
        QSlider.prototype.sliderChange = function(...args) 
          
        {
          //print("JS: QSlider.prototype.sliderChange");
          
              return this.__PROXY__.sliderChange(...args);
            
        };
    
        // function 
        QSlider.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.timerEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.timerEvent");
          
              return this.__PROXY__.timerEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.setTickPosition = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setTickPosition");
          
              return this.__PROXY__.setTickPosition(...args);
            
        };
    
        // function 
        QSlider.prototype.tickPosition = function(...args) 
          
        {
          //print("JS: QSlider.prototype.tickPosition");
          
              return this.__PROXY__.tickPosition(...args);
            
        };
    
        // function 
        QSlider.prototype.setTickInterval = function(...args) 
          
        {
          //print("JS: QSlider.prototype.setTickInterval");
          
              return this.__PROXY__.setTickInterval(...args);
            
        };
    
        // function 
        QSlider.prototype.event = function(...args) 
          
        {
          //print("JS: QSlider.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QSlider.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QSlider.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
    
        // function 
        QSlider.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QSlider.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QSlider.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QSlider.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        QSlider.prototype.qt_qsliderStyleOption = function(...args) 
          
        {
          //print("JS: QSlider.prototype.qt_qsliderStyleOption");
          
              return this.__PROXY__.qt_qsliderStyleOption(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QSlider.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'maximum', {
              get: function() {
                  
                      return this.__PROXY__.maximum;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximum(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'minimum', {
              get: function() {
                  
                      return this.__PROXY__.minimum;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimum(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'singleStep', {
              get: function() {
                  
                      return this.__PROXY__.singleStep;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSingleStep(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'pageStep', {
              get: function() {
                  
                      return this.__PROXY__.pageStep;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPageStep(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'value', {
              get: function() {
                  
                      return this.__PROXY__.value;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setValue(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'sliderPosition', {
              get: function() {
                  
                      return this.__PROXY__.sliderPosition;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSliderPosition(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'tracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'orientation', {
              get: function() {
                  
                      return this.__PROXY__.orientation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOrientation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'invertedAppearance', {
              get: function() {
                  
                      return this.__PROXY__.invertedAppearance;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInvertedAppearance(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'invertedControls', {
              get: function() {
                  
                      return this.__PROXY__.invertedControls;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInvertedControls(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'sliderDown', {
              get: function() {
                  
                      return this.__PROXY__.isSliderDown();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSliderDown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSlider.prototype, 'tickInterval', {
              get: function() {
                  
                      return this.__PROXY__.tickInterval;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTickInterval(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QSlider.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QSlider.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QSlider.prototype, 'valueChanged', {
            get: function() { return this.__PROXY__.valueChanged; },
            configurable: true
        });
        
          Object.defineProperty(QSlider.prototype, 'valueChanged(int)', {
              get: function() { return this.__PROXY__.valueChanged; },
              configurable: true
          });
        
        Object.defineProperty(QSlider.prototype, 'sliderPressed', {
            get: function() { return this.__PROXY__.sliderPressed; },
            configurable: true
        });
        
        Object.defineProperty(QSlider.prototype, 'sliderMoved', {
            get: function() { return this.__PROXY__.sliderMoved; },
            configurable: true
        });
        
          Object.defineProperty(QSlider.prototype, 'sliderMoved(int)', {
              get: function() { return this.__PROXY__.sliderMoved; },
              configurable: true
          });
        
        Object.defineProperty(QSlider.prototype, 'sliderReleased', {
            get: function() { return this.__PROXY__.sliderReleased; },
            configurable: true
        });
        
        Object.defineProperty(QSlider.prototype, 'rangeChanged', {
            get: function() { return this.__PROXY__.rangeChanged; },
            configurable: true
        });
        
          Object.defineProperty(QSlider.prototype, 'rangeChanged(int,int)', {
              get: function() { return this.__PROXY__.rangeChanged; },
              configurable: true
          });
        
        Object.defineProperty(QSlider.prototype, 'actionTriggered', {
            get: function() { return this.__PROXY__.actionTriggered; },
            configurable: true
        });
        
          Object.defineProperty(QSlider.prototype, 'actionTriggered(int)', {
              get: function() { return this.__PROXY__.actionTriggered; },
              configurable: true
          });
        QSlider.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSlider.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSlider.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSlider.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSlider.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSlider.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      