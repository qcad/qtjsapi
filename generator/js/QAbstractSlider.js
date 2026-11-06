
      // auto generated
      //var self;

      // class constructor:
      function QAbstractSlider() {
        

        // should be QAbstractSlider_BaseJs.call(this, engine):
        //QAbstractSlider.prototype = new QAbstractSlider_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractSlider.getIdStatic()))) {

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
            qWarning("QAbstractSlider.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QAbstractSlider_Wrapper(
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

      

        //copyProperties(this, wrapper, QAbstractSlider);
  }

  
  else {
    
        print("QAbstractSlider(): wrong number / type of arguments");
      
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

      //QAbstractSlider.prototype = new QAbstractSlider_BaseJs(engine);
      //QAbstractSlider.prototype = new QAbstractSlider_Wrapper(engine);
      QAbstractSlider.prototype = new Object();


      QAbstractSlider.prototype.toString = function() {
          //return "QAbstractSlider [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractSlider [JS]";
        };
      QAbstractSlider.getObjectType = function() {
        return RJSType_QAbstractSlider.getIdStatic();
      };

      QAbstractSlider.prototype.getObjectType = function() {
        return RJSType_QAbstractSlider.getIdStatic();
      };

      QAbstractSlider.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractSlider.getIdStatic()) {
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
      
  // enum: SliderAction
QAbstractSlider.SliderNoAction = QAbstractSlider_Wrapper.SliderNoAction;
QAbstractSlider.SliderSingleStepAdd = QAbstractSlider_Wrapper.SliderSingleStepAdd;
QAbstractSlider.SliderSingleStepSub = QAbstractSlider_Wrapper.SliderSingleStepSub;
QAbstractSlider.SliderPageStepAdd = QAbstractSlider_Wrapper.SliderPageStepAdd;
QAbstractSlider.SliderPageStepSub = QAbstractSlider_Wrapper.SliderPageStepSub;
QAbstractSlider.SliderToMinimum = QAbstractSlider_Wrapper.SliderToMinimum;
QAbstractSlider.SliderToMaximum = QAbstractSlider_Wrapper.SliderToMaximum;
QAbstractSlider.SliderMove = QAbstractSlider_Wrapper.SliderMove;


      // functions:
      
        // function 
        QAbstractSlider.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.findChild = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.children = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.property = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.parent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.devType = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isModal = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.window = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setFont = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setMask = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.mask = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.grab = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.update = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.repaint = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.show = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.hide = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.close = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.raise = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.lower = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.move = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.resize = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.windowState = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.layout = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setParent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.scroll = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.addAction = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.addActions = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.actions = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.windowType = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.childAt = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.metric = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.redirected = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.create = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.destroy = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setMinimum = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setMinimum");
          
              return this.__PROXY__.setMinimum(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setMaximum = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setMaximum");
          
              return this.__PROXY__.setMaximum(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setSingleStep = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setSingleStep");
          
              return this.__PROXY__.setSingleStep(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setPageStep = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setPageStep");
          
              return this.__PROXY__.setPageStep(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setTracking = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setTracking");
          
              return this.__PROXY__.setTracking(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.hasTracking = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.hasTracking");
          
              return this.__PROXY__.hasTracking(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setSliderDown = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setSliderDown");
          
              return this.__PROXY__.setSliderDown(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.isSliderDown = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.isSliderDown");
          
              return this.__PROXY__.isSliderDown(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setSliderPosition = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setSliderPosition");
          
              return this.__PROXY__.setSliderPosition(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setInvertedAppearance = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setInvertedAppearance");
          
              return this.__PROXY__.setInvertedAppearance(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setInvertedControls = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setInvertedControls");
          
              return this.__PROXY__.setInvertedControls(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.triggerAction = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.triggerAction");
          
              return this.__PROXY__.triggerAction(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setValue = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setValue");
          
              return this.__PROXY__.setValue(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setOrientation = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setOrientation");
          
              return this.__PROXY__.setOrientation(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setRange = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setRange");
          
              return this.__PROXY__.setRange(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.event = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.setRepeatAction = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.setRepeatAction");
          
              return this.__PROXY__.setRepeatAction(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.repeatAction = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.repeatAction");
          
              return this.__PROXY__.repeatAction(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.sliderChange = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.sliderChange");
          
              return this.__PROXY__.sliderChange(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.timerEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.timerEvent");
          
              return this.__PROXY__.timerEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QAbstractSlider.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QAbstractSlider.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QAbstractSlider.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'maximum', {
              get: function() {
                  
                      return this.__PROXY__.maximum;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximum(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'minimum', {
              get: function() {
                  
                      return this.__PROXY__.minimum;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimum(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'singleStep', {
              get: function() {
                  
                      return this.__PROXY__.singleStep;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSingleStep(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'pageStep', {
              get: function() {
                  
                      return this.__PROXY__.pageStep;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPageStep(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'value', {
              get: function() {
                  
                      return this.__PROXY__.value;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setValue(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'sliderPosition', {
              get: function() {
                  
                      return this.__PROXY__.sliderPosition;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSliderPosition(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'tracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'orientation', {
              get: function() {
                  
                      return this.__PROXY__.orientation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOrientation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'invertedAppearance', {
              get: function() {
                  
                      return this.__PROXY__.invertedAppearance;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInvertedAppearance(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'invertedControls', {
              get: function() {
                  
                      return this.__PROXY__.invertedControls;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInvertedControls(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSlider.prototype, 'sliderDown', {
              get: function() {
                  
                      return this.__PROXY__.isSliderDown();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSliderDown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QAbstractSlider.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractSlider.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractSlider.prototype, 'valueChanged', {
            get: function() { return this.__PROXY__.valueChanged; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractSlider.prototype, 'valueChanged(int)', {
              get: function() { return this.__PROXY__.valueChanged; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractSlider.prototype, 'sliderPressed', {
            get: function() { return this.__PROXY__.sliderPressed; },
            configurable: true
        });
        
        Object.defineProperty(QAbstractSlider.prototype, 'sliderMoved', {
            get: function() { return this.__PROXY__.sliderMoved; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractSlider.prototype, 'sliderMoved(int)', {
              get: function() { return this.__PROXY__.sliderMoved; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractSlider.prototype, 'sliderReleased', {
            get: function() { return this.__PROXY__.sliderReleased; },
            configurable: true
        });
        
        Object.defineProperty(QAbstractSlider.prototype, 'rangeChanged', {
            get: function() { return this.__PROXY__.rangeChanged; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractSlider.prototype, 'rangeChanged(int,int)', {
              get: function() { return this.__PROXY__.rangeChanged; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractSlider.prototype, 'actionTriggered', {
            get: function() { return this.__PROXY__.actionTriggered; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractSlider.prototype, 'actionTriggered(int)', {
              get: function() { return this.__PROXY__.actionTriggered; },
              configurable: true
          });
        QAbstractSlider.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QAbstractSlider.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QAbstractSlider.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractSlider.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractSlider.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QAbstractSlider.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      