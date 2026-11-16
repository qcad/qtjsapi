
      // auto generated
      //var self;

      // class constructor:
      function QPushButton() {
        

        // should be QPushButton_BaseJs.call(this, engine):
        //QPushButton.prototype = new QPushButton_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPushButton.getIdStatic()))) {

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
            qWarning("QPushButton.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QPushButton_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPushButton);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QPushButton_Wrapper(
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

      

        //copyProperties(this, wrapper, QPushButton);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QPushButton_Wrapper(
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

      

        //copyProperties(this, wrapper, QPushButton);
  }

  
  else {
    
        print("QPushButton(): wrong number / type of arguments");
      
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

      //QPushButton.prototype = new QPushButton_BaseJs(engine);
      //QPushButton.prototype = new QPushButton_Wrapper(engine);
      QPushButton.prototype = new Object();


      QPushButton.prototype.toString = function() {
          //return "QPushButton [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPushButton [JS]";
        };
      QPushButton.getObjectType = function() {
        return RJSType_QPushButton.getIdStatic();
      };

      QPushButton.prototype.getObjectType = function() {
        return RJSType_QPushButton.getIdStatic();
      };

      QPushButton.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPushButton.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractButton.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QPushButton.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QPushButton.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QPushButton.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QPushButton.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QPushButton.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QPushButton.prototype.findChild = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QPushButton.prototype.children = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QPushButton.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QPushButton.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QPushButton.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QPushButton.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QPushButton.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QPushButton.prototype.property = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QPushButton.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QPushButton.prototype.parent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QPushButton.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QPushButton.prototype.devType = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QPushButton.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QPushButton.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QPushButton.prototype.isModal = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QPushButton.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QPushButton.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QPushButton.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QPushButton.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QPushButton.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QPushButton.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QPushButton.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QPushButton.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QPushButton.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QPushButton.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QPushButton.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QPushButton.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QPushButton.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QPushButton.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QPushButton.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QPushButton.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QPushButton.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QPushButton.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QPushButton.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QPushButton.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QPushButton.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QPushButton.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QPushButton.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QPushButton.prototype.window = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QPushButton.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QPushButton.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QPushButton.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QPushButton.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QPushButton.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QPushButton.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QPushButton.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QPushButton.prototype.setFont = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QPushButton.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QPushButton.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QPushButton.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QPushButton.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QPushButton.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QPushButton.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QPushButton.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QPushButton.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QPushButton.prototype.setMask = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QPushButton.prototype.mask = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QPushButton.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QPushButton.prototype.grab = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QPushButton.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QPushButton.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QPushButton.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QPushButton.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QPushButton.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QPushButton.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QPushButton.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QPushButton.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QPushButton.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QPushButton.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QPushButton.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QPushButton.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QPushButton.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QPushButton.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QPushButton.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QPushButton.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QPushButton.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QPushButton.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QPushButton.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QPushButton.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QPushButton.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QPushButton.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QPushButton.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QPushButton.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QPushButton.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QPushButton.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QPushButton.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QPushButton.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QPushButton.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QPushButton.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QPushButton.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QPushButton.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QPushButton.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QPushButton.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QPushButton.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QPushButton.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QPushButton.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QPushButton.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QPushButton.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QPushButton.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QPushButton.prototype.update = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QPushButton.prototype.repaint = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QPushButton.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QPushButton.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QPushButton.prototype.show = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QPushButton.prototype.hide = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QPushButton.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QPushButton.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QPushButton.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QPushButton.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QPushButton.prototype.close = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QPushButton.prototype.raise = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QPushButton.prototype.lower = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QPushButton.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QPushButton.prototype.move = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QPushButton.prototype.resize = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QPushButton.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QPushButton.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QPushButton.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QPushButton.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QPushButton.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QPushButton.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QPushButton.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QPushButton.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QPushButton.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QPushButton.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QPushButton.prototype.windowState = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QPushButton.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QPushButton.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QPushButton.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QPushButton.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QPushButton.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QPushButton.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QPushButton.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QPushButton.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QPushButton.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QPushButton.prototype.layout = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QPushButton.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QPushButton.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QPushButton.prototype.setParent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QPushButton.prototype.scroll = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QPushButton.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QPushButton.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QPushButton.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QPushButton.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QPushButton.prototype.addAction = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QPushButton.prototype.addActions = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QPushButton.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QPushButton.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QPushButton.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QPushButton.prototype.actions = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QPushButton.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QPushButton.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QPushButton.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QPushButton.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QPushButton.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QPushButton.prototype.windowType = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QPushButton.prototype.childAt = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QPushButton.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QPushButton.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QPushButton.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QPushButton.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QPushButton.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QPushButton.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.metric = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QPushButton.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QPushButton.prototype.redirected = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QPushButton.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QPushButton.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QPushButton.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QPushButton.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QPushButton.prototype.create = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QPushButton.prototype.destroy = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QPushButton.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QPushButton.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QPushButton.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QPushButton.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QPushButton.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QPushButton.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QPushButton.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QPushButton.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QPushButton.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QPushButton.prototype.setText = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
        
        // function 
        QPushButton.prototype.setIcon = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setIcon");
          
              return this.__PROXY__.setIcon(...args);
            
        };
        
        // function 
        QPushButton.prototype.setShortcut = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setShortcut");
          
              return this.__PROXY__.setShortcut(...args);
            
        };
        
        // function 
        QPushButton.prototype.setCheckable = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setCheckable");
          
              return this.__PROXY__.setCheckable(...args);
            
        };
        
        // function 
        QPushButton.prototype.isCheckable = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isCheckable");
          
              return this.__PROXY__.isCheckable(...args);
            
        };
        
        // function 
        QPushButton.prototype.isChecked = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isChecked");
          
              return this.__PROXY__.isChecked(...args);
            
        };
        
        // function 
        QPushButton.prototype.setDown = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setDown");
          
              return this.__PROXY__.setDown(...args);
            
        };
        
        // function 
        QPushButton.prototype.isDown = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isDown");
          
              return this.__PROXY__.isDown(...args);
            
        };
        
        // function 
        QPushButton.prototype.setAutoRepeat = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setAutoRepeat");
          
              return this.__PROXY__.setAutoRepeat(...args);
            
        };
        
        // function 
        QPushButton.prototype.setAutoRepeatDelay = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setAutoRepeatDelay");
          
              return this.__PROXY__.setAutoRepeatDelay(...args);
            
        };
        
        // function 
        QPushButton.prototype.setAutoRepeatInterval = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setAutoRepeatInterval");
          
              return this.__PROXY__.setAutoRepeatInterval(...args);
            
        };
        
        // function 
        QPushButton.prototype.setAutoExclusive = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setAutoExclusive");
          
              return this.__PROXY__.setAutoExclusive(...args);
            
        };
        
        // function 
        QPushButton.prototype.group = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.group");
          
              return this.__PROXY__.group(...args);
            
        };
        
        // function 
        QPushButton.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
        
        // function 
        QPushButton.prototype.animateClick = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.animateClick");
          
              return this.__PROXY__.animateClick(...args);
            
        };
        
        // function 
        QPushButton.prototype.click = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.click");
          
              return this.__PROXY__.click(...args);
            
        };
        
        // function 
        QPushButton.prototype.toggle = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.toggle");
          
              return this.__PROXY__.toggle(...args);
            
        };
        
        // function 
        QPushButton.prototype.setChecked = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setChecked");
          
              return this.__PROXY__.setChecked(...args);
            
        };
        
        // function 
        QPushButton.prototype.setAutoDefault = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setAutoDefault");
          
              return this.__PROXY__.setAutoDefault(...args);
            
        };
        
        // function 
        QPushButton.prototype.isDefault = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isDefault");
          
              return this.__PROXY__.isDefault(...args);
            
        };
        
        // function 
        QPushButton.prototype.setDefault = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setDefault");
          
              return this.__PROXY__.setDefault(...args);
            
        };
        
        // function 
        QPushButton.prototype.setMenu = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setMenu");
          
              return this.__PROXY__.setMenu(...args);
            
        };
        
        // function 
        QPushButton.prototype.menu = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.menu");
          
              return this.__PROXY__.menu(...args);
            
        };
        
        // function 
        QPushButton.prototype.setFlat = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.setFlat");
          
              return this.__PROXY__.setFlat(...args);
            
        };
        
        // function 
        QPushButton.prototype.isFlat = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.isFlat");
          
              return this.__PROXY__.isFlat(...args);
            
        };
        
        // function 
        QPushButton.prototype.showMenu = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.showMenu");
          
              return this.__PROXY__.showMenu(...args);
            
        };
        
        // function 
        QPushButton.prototype.event = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QPushButton.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QPushButton.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QPushButton.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QPushButton.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QPushButton.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QPushButton.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        
        // function 
        QPushButton.prototype.hitButton = function(...args) 
          
        {
          //print("JS: QPushButton.prototype.hitButton");
          
              return this.__PROXY__.hitButton(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QPushButton.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'icon', {
              get: function() {
                  
                      return this.__PROXY__.icon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'shortcut', {
              get: function() {
                  
                      return this.__PROXY__.shortcut;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setShortcut(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'checkable', {
              get: function() {
                  
                      return this.__PROXY__.isCheckable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCheckable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'checked', {
              get: function() {
                  
                      return this.__PROXY__.isChecked();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setChecked(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'autoRepeat', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeat;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeat(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'autoExclusive', {
              get: function() {
                  
                      return this.__PROXY__.autoExclusive;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoExclusive(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'autoRepeatDelay', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeatDelay;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeatDelay(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'autoRepeatInterval', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeatInterval;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeatInterval(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'down', {
              get: function() {
                  
                      return this.__PROXY__.isDown();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'text', {
              get: function() {
                  
                      return this.__PROXY__.text;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'autoDefault', {
              get: function() {
                  
                      return this.__PROXY__.autoDefault;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoDefault(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'default', {
              get: function() {
                  
                      return this.__PROXY__.isDefault();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefault(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPushButton.prototype, 'flat', {
              get: function() {
                  
                      return this.__PROXY__.isFlat();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFlat(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QPushButton.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QPushButton.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QPushButton.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
        Object.defineProperty(QPushButton.prototype, 'released', {
            get: function() { return this.__PROXY__.released; },
            configurable: true
        });
        
        Object.defineProperty(QPushButton.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(QPushButton.prototype, 'clicked(bool)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(QPushButton.prototype, 'toggled', {
            get: function() { return this.__PROXY__.toggled; },
            configurable: true
        });
        
          Object.defineProperty(QPushButton.prototype, 'toggled(bool)', {
              get: function() { return this.__PROXY__.toggled; },
              configurable: true
          });
        QPushButton.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QPushButton.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QPushButton.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPushButton.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPushButton.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QPushButton.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      