
      // auto generated
      //var self;

      // class constructor:
      function QProgressDialog() {
        

        // should be QProgressDialog_BaseJs.call(this, engine):
        //QProgressDialog.prototype = new QProgressDialog_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QProgressDialog.getIdStatic()))) {

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
            qWarning("QProgressDialog.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 4 &&
          arguments.length <= 6) {
    
            self = this;
            wrapper = new QProgressDialog_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QProgressDialog);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QProgressDialog_Wrapper(
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

      

        //copyProperties(this, wrapper, QProgressDialog);
  }

  
  else {
    
        print("QProgressDialog(): wrong number / type of arguments");
      
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

      //QProgressDialog.prototype = new QProgressDialog_BaseJs(engine);
      //QProgressDialog.prototype = new QProgressDialog_Wrapper(engine);
      QProgressDialog.prototype = new Object();


      QProgressDialog.prototype.toString = function() {
          //return "QProgressDialog [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QProgressDialog [JS]";
        };
      QProgressDialog.getObjectType = function() {
        return RJSType_QProgressDialog.getIdStatic();
      };

      QProgressDialog.prototype.getObjectType = function() {
        return RJSType_QProgressDialog.getIdStatic();
      };

      QProgressDialog.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QProgressDialog.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QDialog.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: DialogCode
QProgressDialog.Rejected = QProgressDialog_Wrapper.Rejected;
QProgressDialog.Accepted = QProgressDialog_Wrapper.Accepted;


      // functions:
      
        // function 
        QProgressDialog.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.findChild = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.children = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.property = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.parent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.devType = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isModal = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.window = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setFont = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setMask = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.mask = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.grab = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.update = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.repaint = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.show = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.hide = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.close = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.raise = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.lower = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.move = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.resize = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.windowState = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.layout = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setParent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.scroll = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.addAction = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.addActions = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.actions = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.windowType = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.childAt = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.event = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
      // function 
      QProgressDialog.prototype.actionEvent = function() 
        
      {
        //print("JS: QProgressDialog.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QProgressDialog);
  }

  
  else {
    
        print("QProgressDialog.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QProgressDialog.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.metric = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.redirected = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.create = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.destroy = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.result = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.result");
          
              return this.__PROXY__.result(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setSizeGripEnabled");
          
              return this.__PROXY__.setSizeGripEnabled(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.isSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.isSizeGripEnabled");
          
              return this.__PROXY__.isSizeGripEnabled(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setModal = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setModal");
          
              return this.__PROXY__.setModal(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setResult = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setResult");
          
              return this.__PROXY__.setResult(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.exec = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.exec");
          
              return this.__PROXY__.exec(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.done = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.done");
          
              return this.__PROXY__.done(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.accept = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.accept");
          
              return this.__PROXY__.accept(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.reject = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.reject");
          
              return this.__PROXY__.reject(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.adjustPosition = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.adjustPosition");
          
              return this.__PROXY__.adjustPosition(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setLabel = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setLabel");
          
              return this.__PROXY__.setLabel(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setCancelButton = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setCancelButton");
          
              return this.__PROXY__.setCancelButton(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setBar = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setBar");
          
              return this.__PROXY__.setBar(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setAutoReset = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setAutoReset");
          
              return this.__PROXY__.setAutoReset(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setAutoClose = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setAutoClose");
          
              return this.__PROXY__.setAutoClose(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.open = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.open");
          
              return this.__PROXY__.open(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.cancel = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.cancel");
          
              return this.__PROXY__.cancel(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.reset = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setMaximum = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setMaximum");
          
              return this.__PROXY__.setMaximum(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setMinimum = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setMinimum");
          
              return this.__PROXY__.setMinimum(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setRange = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setRange");
          
              return this.__PROXY__.setRange(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setValue = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setValue");
          
              return this.__PROXY__.setValue(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setLabelText = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setLabelText");
          
              return this.__PROXY__.setLabelText(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setCancelButtonText = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setCancelButtonText");
          
              return this.__PROXY__.setCancelButtonText(...args);
            
        };
    
        // function 
        QProgressDialog.prototype.setMinimumDuration = function(...args) 
          
        {
          //print("JS: QProgressDialog.prototype.setMinimumDuration");
          
              return this.__PROXY__.setMinimumDuration(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QProgressDialog.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'wasCanceled', {
              get: function() {
                  
                      return this.__PROXY__.wasCanceled;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'minimum', {
              get: function() {
                  
                      return this.__PROXY__.minimum;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimum(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'maximum', {
              get: function() {
                  
                      return this.__PROXY__.maximum;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximum(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'value', {
              get: function() {
                  
                      return this.__PROXY__.value;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setValue(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'autoReset', {
              get: function() {
                  
                      return this.__PROXY__.autoReset;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoReset(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'autoClose', {
              get: function() {
                  
                      return this.__PROXY__.autoClose;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoClose(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'minimumDuration', {
              get: function() {
                  
                      return this.__PROXY__.minimumDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressDialog.prototype, 'labelText', {
              get: function() {
                  
                      return this.__PROXY__.labelText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLabelText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QProgressDialog.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QProgressDialog.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QProgressDialog.prototype, 'finished', {
            get: function() { return this.__PROXY__.finished; },
            configurable: true
        });
        
          Object.defineProperty(QProgressDialog.prototype, 'finished(int)', {
              get: function() { return this.__PROXY__.finished; },
              configurable: true
          });
        
        Object.defineProperty(QProgressDialog.prototype, 'accepted', {
            get: function() { return this.__PROXY__.accepted; },
            configurable: true
        });
        
        Object.defineProperty(QProgressDialog.prototype, 'rejected', {
            get: function() { return this.__PROXY__.rejected; },
            configurable: true
        });
        
        Object.defineProperty(QProgressDialog.prototype, 'canceled', {
            get: function() { return this.__PROXY__.canceled; },
            configurable: true
        });
        QProgressDialog.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QProgressDialog.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QProgressDialog.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QProgressDialog.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QProgressDialog.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QProgressDialog.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      