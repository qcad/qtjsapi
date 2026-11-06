
      // auto generated
      //var self;

      // class constructor:
      function QScrollBar() {
        

        // should be QScrollBar_BaseJs.call(this, engine):
        //QScrollBar.prototype = new QScrollBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QScrollBar.getIdStatic()))) {

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
            qWarning("QScrollBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QScrollBar_Wrapper(
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

      

        //copyProperties(this, wrapper, QScrollBar);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QScrollBar_Wrapper(
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

      

        //copyProperties(this, wrapper, QScrollBar);
  }

  
  else {
    
        print("QScrollBar(): wrong number / type of arguments");
      
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

      //QScrollBar.prototype = new QScrollBar_BaseJs(engine);
      //QScrollBar.prototype = new QScrollBar_Wrapper(engine);
      QScrollBar.prototype = new Object();


      QScrollBar.prototype.toString = function() {
          //return "QScrollBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QScrollBar [JS]";
        };
      QScrollBar.getObjectType = function() {
        return RJSType_QScrollBar.getIdStatic();
      };

      QScrollBar.prototype.getObjectType = function() {
        return RJSType_QScrollBar.getIdStatic();
      };

      QScrollBar.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QScrollBar.getIdStatic()) {
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
QScrollBar.SliderNoAction = QScrollBar_Wrapper.SliderNoAction;
QScrollBar.SliderSingleStepAdd = QScrollBar_Wrapper.SliderSingleStepAdd;
QScrollBar.SliderSingleStepSub = QScrollBar_Wrapper.SliderSingleStepSub;
QScrollBar.SliderPageStepAdd = QScrollBar_Wrapper.SliderPageStepAdd;
QScrollBar.SliderPageStepSub = QScrollBar_Wrapper.SliderPageStepSub;
QScrollBar.SliderToMinimum = QScrollBar_Wrapper.SliderToMinimum;
QScrollBar.SliderToMaximum = QScrollBar_Wrapper.SliderToMaximum;
QScrollBar.SliderMove = QScrollBar_Wrapper.SliderMove;


      // functions:
      
        // function 
        QScrollBar.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QScrollBar.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QScrollBar.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QScrollBar.prototype.findChild = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QScrollBar.prototype.children = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QScrollBar.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QScrollBar.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QScrollBar.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QScrollBar.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QScrollBar.prototype.property = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QScrollBar.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QScrollBar.prototype.parent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QScrollBar.prototype.devType = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QScrollBar.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isModal = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QScrollBar.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QScrollBar.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QScrollBar.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QScrollBar.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QScrollBar.prototype.window = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QScrollBar.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QScrollBar.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QScrollBar.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QScrollBar.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setFont = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QScrollBar.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QScrollBar.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QScrollBar.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QScrollBar.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QScrollBar.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setMask = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QScrollBar.prototype.mask = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QScrollBar.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QScrollBar.prototype.grab = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QScrollBar.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QScrollBar.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QScrollBar.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QScrollBar.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QScrollBar.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QScrollBar.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QScrollBar.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QScrollBar.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QScrollBar.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QScrollBar.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QScrollBar.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QScrollBar.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QScrollBar.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QScrollBar.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QScrollBar.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QScrollBar.prototype.update = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QScrollBar.prototype.repaint = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QScrollBar.prototype.show = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QScrollBar.prototype.hide = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QScrollBar.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QScrollBar.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QScrollBar.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QScrollBar.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QScrollBar.prototype.close = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QScrollBar.prototype.raise = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QScrollBar.prototype.lower = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QScrollBar.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QScrollBar.prototype.move = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QScrollBar.prototype.resize = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QScrollBar.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QScrollBar.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QScrollBar.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QScrollBar.prototype.windowState = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QScrollBar.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QScrollBar.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QScrollBar.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QScrollBar.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QScrollBar.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QScrollBar.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QScrollBar.prototype.layout = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QScrollBar.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setParent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.scroll = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QScrollBar.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QScrollBar.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QScrollBar.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QScrollBar.prototype.addAction = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QScrollBar.prototype.addActions = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QScrollBar.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QScrollBar.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QScrollBar.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QScrollBar.prototype.actions = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QScrollBar.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QScrollBar.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QScrollBar.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QScrollBar.prototype.windowType = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QScrollBar.prototype.childAt = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QScrollBar.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QScrollBar.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QScrollBar.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.metric = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QScrollBar.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QScrollBar.prototype.redirected = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QScrollBar.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QScrollBar.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QScrollBar.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QScrollBar.prototype.create = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QScrollBar.prototype.destroy = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QScrollBar.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QScrollBar.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QScrollBar.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QScrollBar.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QScrollBar.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QScrollBar.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QScrollBar.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QScrollBar.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setMinimum = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setMinimum");
          
              return this.__PROXY__.setMinimum(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setMaximum = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setMaximum");
          
              return this.__PROXY__.setMaximum(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setSingleStep = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setSingleStep");
          
              return this.__PROXY__.setSingleStep(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setPageStep = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setPageStep");
          
              return this.__PROXY__.setPageStep(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setTracking = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setTracking");
          
              return this.__PROXY__.setTracking(...args);
            
        };
    
        // function 
        QScrollBar.prototype.hasTracking = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.hasTracking");
          
              return this.__PROXY__.hasTracking(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setSliderDown = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setSliderDown");
          
              return this.__PROXY__.setSliderDown(...args);
            
        };
    
        // function 
        QScrollBar.prototype.isSliderDown = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.isSliderDown");
          
              return this.__PROXY__.isSliderDown(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setSliderPosition = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setSliderPosition");
          
              return this.__PROXY__.setSliderPosition(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setInvertedAppearance = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setInvertedAppearance");
          
              return this.__PROXY__.setInvertedAppearance(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setInvertedControls = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setInvertedControls");
          
              return this.__PROXY__.setInvertedControls(...args);
            
        };
    
        // function 
        QScrollBar.prototype.triggerAction = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.triggerAction");
          
              return this.__PROXY__.triggerAction(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setValue = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setValue");
          
              return this.__PROXY__.setValue(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setOrientation = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setOrientation");
          
              return this.__PROXY__.setOrientation(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setRange = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setRange");
          
              return this.__PROXY__.setRange(...args);
            
        };
    
        // function 
        QScrollBar.prototype.setRepeatAction = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.setRepeatAction");
          
              return this.__PROXY__.setRepeatAction(...args);
            
        };
    
        // function 
        QScrollBar.prototype.repeatAction = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.repeatAction");
          
              return this.__PROXY__.repeatAction(...args);
            
        };
    
        // function 
        QScrollBar.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.timerEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.timerEvent");
          
              return this.__PROXY__.timerEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.event = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QScrollBar.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QScrollBar.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QScrollBar.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.sliderChange = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.sliderChange");
          
              return this.__PROXY__.sliderChange(...args);
            
        };
    
        // function 
        QScrollBar.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
    
        // function 
        QScrollBar.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        QScrollBar.prototype.qt_qscrollbarStyleOption = function(...args) 
          
        {
          //print("JS: QScrollBar.prototype.qt_qscrollbarStyleOption");
          
              return this.__PROXY__.qt_qscrollbarStyleOption(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QScrollBar.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'maximum', {
              get: function() {
                  
                      return this.__PROXY__.maximum;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximum(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'minimum', {
              get: function() {
                  
                      return this.__PROXY__.minimum;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimum(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'singleStep', {
              get: function() {
                  
                      return this.__PROXY__.singleStep;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSingleStep(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'pageStep', {
              get: function() {
                  
                      return this.__PROXY__.pageStep;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPageStep(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'value', {
              get: function() {
                  
                      return this.__PROXY__.value;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setValue(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'sliderPosition', {
              get: function() {
                  
                      return this.__PROXY__.sliderPosition;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSliderPosition(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'tracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'orientation', {
              get: function() {
                  
                      return this.__PROXY__.orientation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOrientation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'invertedAppearance', {
              get: function() {
                  
                      return this.__PROXY__.invertedAppearance;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInvertedAppearance(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'invertedControls', {
              get: function() {
                  
                      return this.__PROXY__.invertedControls;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInvertedControls(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollBar.prototype, 'sliderDown', {
              get: function() {
                  
                      return this.__PROXY__.isSliderDown();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSliderDown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QScrollBar.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QScrollBar.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QScrollBar.prototype, 'valueChanged', {
            get: function() { return this.__PROXY__.valueChanged; },
            configurable: true
        });
        
          Object.defineProperty(QScrollBar.prototype, 'valueChanged(int)', {
              get: function() { return this.__PROXY__.valueChanged; },
              configurable: true
          });
        
        Object.defineProperty(QScrollBar.prototype, 'sliderPressed', {
            get: function() { return this.__PROXY__.sliderPressed; },
            configurable: true
        });
        
        Object.defineProperty(QScrollBar.prototype, 'sliderMoved', {
            get: function() { return this.__PROXY__.sliderMoved; },
            configurable: true
        });
        
          Object.defineProperty(QScrollBar.prototype, 'sliderMoved(int)', {
              get: function() { return this.__PROXY__.sliderMoved; },
              configurable: true
          });
        
        Object.defineProperty(QScrollBar.prototype, 'sliderReleased', {
            get: function() { return this.__PROXY__.sliderReleased; },
            configurable: true
        });
        
        Object.defineProperty(QScrollBar.prototype, 'rangeChanged', {
            get: function() { return this.__PROXY__.rangeChanged; },
            configurable: true
        });
        
          Object.defineProperty(QScrollBar.prototype, 'rangeChanged(int,int)', {
              get: function() { return this.__PROXY__.rangeChanged; },
              configurable: true
          });
        
        Object.defineProperty(QScrollBar.prototype, 'actionTriggered', {
            get: function() { return this.__PROXY__.actionTriggered; },
            configurable: true
        });
        
          Object.defineProperty(QScrollBar.prototype, 'actionTriggered(int)', {
              get: function() { return this.__PROXY__.actionTriggered; },
              configurable: true
          });
        QScrollBar.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QScrollBar.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QScrollBar.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QScrollBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QScrollBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QScrollBar.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      