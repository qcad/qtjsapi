
      // auto generated
      //var self;

      // class constructor:
      function QDoubleSpinBox() {
        

        // should be QDoubleSpinBox_BaseJs.call(this, engine):
        //QDoubleSpinBox.prototype = new QDoubleSpinBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDoubleSpinBox.getIdStatic()))) {

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
            qWarning("QDoubleSpinBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QDoubleSpinBox_Wrapper(
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

      

        //copyProperties(this, wrapper, QDoubleSpinBox);
  }

  
  else {
    
        print("QDoubleSpinBox(): wrong number / type of arguments");
      
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

      //QDoubleSpinBox.prototype = new QDoubleSpinBox_BaseJs(engine);
      //QDoubleSpinBox.prototype = new QDoubleSpinBox_Wrapper(engine);
      QDoubleSpinBox.prototype = new Object();


      QDoubleSpinBox.prototype.toString = function() {
          //return "QDoubleSpinBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDoubleSpinBox [JS]";
        };
      QDoubleSpinBox.getObjectType = function() {
        return RJSType_QDoubleSpinBox.getIdStatic();
      };

      QDoubleSpinBox.prototype.getObjectType = function() {
        return RJSType_QDoubleSpinBox.getIdStatic();
      };

      QDoubleSpinBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDoubleSpinBox.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractSpinBox.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QDoubleSpinBox.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.eventFilter");
          
              return this.__PROXY__.eventFilterSuper(...args);
            
        };
        QDoubleSpinBox.prototype.eventFilter.__SUPER__ = true;
        
        // function 
        QDoubleSpinBox.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.findChild = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.children = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.property = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.parent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.devType = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.isModal = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.window = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setFont = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setMask = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.mask = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.grab = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.update = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.repaint = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.show = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.hide = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.close = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.raise = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.lower = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.move = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.resize = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.windowState = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.layout = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setParent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.scroll = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.addAction = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.addActions = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.actions = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.windowType = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.childAt = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.event = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
      // function 
      QDoubleSpinBox.prototype.actionEvent = function() 
        
      {
        //print("JS: QDoubleSpinBox.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDoubleSpinBox);
  }

  
  else {
    
        print("QDoubleSpinBox.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QDoubleSpinBox.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.metric = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.redirected = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.create = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.destroy = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.stepUp = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.stepUp");
          
              return this.__PROXY__.stepUp(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.stepDown = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.stepDown");
          
              return this.__PROXY__.stepDown(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.clear = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QDoubleSpinBox.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        QDoubleSpinBox.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEventSuper(...args);
            
        };
        QDoubleSpinBox.prototype.keyPressEvent.__SUPER__ = true;
        
        // function 
        QDoubleSpinBox.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEventSuper(...args);
            
        };
        QDoubleSpinBox.prototype.keyReleaseEvent.__SUPER__ = true;
        
        // function 
        QDoubleSpinBox.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEventSuper(...args);
            
        };
        QDoubleSpinBox.prototype.wheelEvent.__SUPER__ = true;
        
        // function 
        QDoubleSpinBox.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEventSuper(...args);
            
        };
        QDoubleSpinBox.prototype.focusInEvent.__SUPER__ = true;
        
        // function 
        QDoubleSpinBox.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEventSuper(...args);
            
        };
        QDoubleSpinBox.prototype.focusOutEvent.__SUPER__ = true;
        
        // function 
        QDoubleSpinBox.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEventSuper(...args);
            
        };
        QDoubleSpinBox.prototype.contextMenuEvent.__SUPER__ = true;
        
        // function 
        QDoubleSpinBox.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.changeEvent");
          
              return this.__PROXY__.changeEventSuper(...args);
            
        };
        QDoubleSpinBox.prototype.changeEvent.__SUPER__ = true;
        
        // function 
        QDoubleSpinBox.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
        QDoubleSpinBox.prototype.mousePressEvent.__SUPER__ = true;
        
        // function 
        QDoubleSpinBox.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
        QDoubleSpinBox.prototype.mouseReleaseEvent.__SUPER__ = true;
        
        // function 
        QDoubleSpinBox.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QDoubleSpinBox.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QDoubleSpinBox.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QDoubleSpinBox.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QDoubleSpinBox.prototype.setPrefix = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setPrefix");
          
              return this.__PROXY__.setPrefix(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.suffix = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.suffix");
          
              return this.__PROXY__.suffix(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setSuffix = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setSuffix");
          
              return this.__PROXY__.setSuffix(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setSingleStep = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setSingleStep");
          
              return this.__PROXY__.setSingleStep(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setMinimum = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setMinimum");
          
              return this.__PROXY__.setMinimum(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setMaximum = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setMaximum");
          
              return this.__PROXY__.setMaximum(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setRange = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setRange");
          
              return this.__PROXY__.setRange(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setStepType = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setStepType");
          
              return this.__PROXY__.setStepType(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setDecimals = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setDecimals");
          
              return this.__PROXY__.setDecimals(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.validate = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.validate");
          
              return this.__PROXY__.validate(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.valueFromText = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.valueFromText");
          
              return this.__PROXY__.valueFromText(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.textFromValue = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.textFromValue");
          
              return this.__PROXY__.textFromValue(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.fixup = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.fixup");
          
              return this.__PROXY__.fixup(...args);
            
        };
        
        // function 
        QDoubleSpinBox.prototype.setValue = function(...args) 
          
        {
          //print("JS: QDoubleSpinBox.prototype.setValue");
          
              return this.__PROXY__.setValue(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QDoubleSpinBox.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'prefix', {
              get: function() {
                  
                      return this.__PROXY__.prefix;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPrefix(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'cleanText', {
              get: function() {
                  
                      return this.__PROXY__.cleanText;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'minimum', {
              get: function() {
                  
                      return this.__PROXY__.minimum;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimum(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'maximum', {
              get: function() {
                  
                      return this.__PROXY__.maximum;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximum(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'singleStep', {
              get: function() {
                  
                      return this.__PROXY__.singleStep;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSingleStep(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'stepType', {
              get: function() {
                  
                      return this.__PROXY__.stepType;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStepType(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'value', {
              get: function() {
                  
                      return this.__PROXY__.value;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setValue(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'decimals', {
              get: function() {
                  
                      return this.__PROXY__.decimals;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDecimals(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QDoubleSpinBox.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QDoubleSpinBox.prototype, 'valueChanged', {
            get: function() { return this.__PROXY__.valueChanged; },
            configurable: true
        });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'valueChanged(double)', {
              get: function() { return this.__PROXY__.valueChanged; },
              configurable: true
          });
        
        Object.defineProperty(QDoubleSpinBox.prototype, 'textChanged', {
            get: function() { return this.__PROXY__.textChanged; },
            configurable: true
        });
        
          Object.defineProperty(QDoubleSpinBox.prototype, 'textChanged(QString)', {
              get: function() { return this.__PROXY__.textChanged; },
              configurable: true
          });
        QDoubleSpinBox.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QDoubleSpinBox.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QDoubleSpinBox.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDoubleSpinBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDoubleSpinBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDoubleSpinBox.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      