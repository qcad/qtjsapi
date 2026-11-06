
      // auto generated
      //var self;

      // class constructor:
      function QDialog() {
        

        // should be QDialog_BaseJs.call(this, engine):
        //QDialog.prototype = new QDialog_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDialog.getIdStatic()))) {

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
            qWarning("QDialog.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QDialog_Wrapper(
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

      

        //copyProperties(this, wrapper, QDialog);
  }

  
  else {
    
        print("QDialog(): wrong number / type of arguments");
      
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

      //QDialog.prototype = new QDialog_BaseJs(engine);
      //QDialog.prototype = new QDialog_Wrapper(engine);
      QDialog.prototype = new Object();


      QDialog.prototype.toString = function() {
          //return "QDialog [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDialog [JS]";
        };
      QDialog.getObjectType = function() {
        return RJSType_QDialog.getIdStatic();
      };

      QDialog.prototype.getObjectType = function() {
        return RJSType_QDialog.getIdStatic();
      };

      QDialog.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDialog.getIdStatic()) {
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
      
  // enum: DialogCode
QDialog.Rejected = QDialog_Wrapper.Rejected;
QDialog.Accepted = QDialog_Wrapper.Accepted;


      // functions:
      
        // function 
        QDialog.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QDialog.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QDialog.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QDialog.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QDialog.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QDialog.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QDialog.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QDialog.prototype.findChild = function(...args) 
          
        {
          //print("JS: QDialog.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QDialog.prototype.children = function(...args) 
          
        {
          //print("JS: QDialog.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QDialog.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QDialog.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QDialog.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QDialog.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QDialog.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QDialog.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QDialog.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QDialog.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QDialog.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QDialog.prototype.property = function(...args) 
          
        {
          //print("JS: QDialog.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QDialog.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QDialog.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QDialog.prototype.parent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QDialog.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QDialog.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QDialog.prototype.devType = function(...args) 
          
        {
          //print("JS: QDialog.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QDialog.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QDialog.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QDialog.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QDialog.prototype.isModal = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QDialog.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QDialog.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QDialog.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QDialog.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QDialog.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QDialog.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QDialog.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QDialog.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QDialog.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QDialog.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QDialog.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QDialog.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QDialog.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QDialog.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QDialog.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QDialog.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QDialog.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QDialog.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QDialog.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QDialog.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QDialog.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QDialog.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QDialog.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QDialog.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QDialog.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QDialog.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QDialog.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QDialog.prototype.window = function(...args) 
          
        {
          //print("JS: QDialog.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QDialog.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QDialog.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QDialog.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QDialog.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QDialog.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QDialog.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QDialog.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QDialog.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QDialog.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QDialog.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QDialog.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QDialog.prototype.setFont = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QDialog.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QDialog.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QDialog.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QDialog.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QDialog.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QDialog.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QDialog.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QDialog.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QDialog.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QDialog.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QDialog.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QDialog.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QDialog.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QDialog.prototype.setMask = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QDialog.prototype.mask = function(...args) 
          
        {
          //print("JS: QDialog.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QDialog.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QDialog.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QDialog.prototype.grab = function(...args) 
          
        {
          //print("JS: QDialog.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QDialog.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QDialog.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QDialog.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QDialog.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QDialog.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QDialog.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QDialog.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QDialog.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QDialog.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QDialog.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QDialog.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QDialog.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QDialog.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QDialog.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QDialog.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QDialog.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QDialog.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QDialog.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QDialog.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QDialog.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QDialog.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QDialog.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QDialog.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QDialog.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QDialog.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QDialog.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QDialog.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QDialog.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QDialog.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QDialog.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QDialog.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QDialog.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QDialog.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QDialog.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QDialog.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QDialog.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QDialog.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QDialog.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QDialog.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QDialog.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QDialog.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QDialog.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QDialog.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QDialog.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QDialog.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QDialog.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QDialog.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QDialog.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QDialog.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QDialog.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QDialog.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QDialog.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QDialog.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QDialog.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QDialog.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QDialog.prototype.update = function(...args) 
          
        {
          //print("JS: QDialog.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QDialog.prototype.repaint = function(...args) 
          
        {
          //print("JS: QDialog.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QDialog.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QDialog.prototype.show = function(...args) 
          
        {
          //print("JS: QDialog.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QDialog.prototype.hide = function(...args) 
          
        {
          //print("JS: QDialog.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QDialog.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QDialog.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QDialog.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QDialog.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QDialog.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QDialog.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QDialog.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QDialog.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QDialog.prototype.close = function(...args) 
          
        {
          //print("JS: QDialog.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QDialog.prototype.raise = function(...args) 
          
        {
          //print("JS: QDialog.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QDialog.prototype.lower = function(...args) 
          
        {
          //print("JS: QDialog.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QDialog.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QDialog.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QDialog.prototype.move = function(...args) 
          
        {
          //print("JS: QDialog.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QDialog.prototype.resize = function(...args) 
          
        {
          //print("JS: QDialog.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QDialog.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QDialog.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QDialog.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QDialog.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QDialog.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QDialog.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QDialog.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QDialog.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QDialog.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QDialog.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QDialog.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QDialog.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QDialog.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QDialog.prototype.windowState = function(...args) 
          
        {
          //print("JS: QDialog.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QDialog.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QDialog.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QDialog.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QDialog.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QDialog.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QDialog.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QDialog.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QDialog.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QDialog.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QDialog.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QDialog.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QDialog.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QDialog.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QDialog.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QDialog.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QDialog.prototype.layout = function(...args) 
          
        {
          //print("JS: QDialog.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QDialog.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QDialog.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QDialog.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QDialog.prototype.setParent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QDialog.prototype.scroll = function(...args) 
          
        {
          //print("JS: QDialog.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QDialog.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QDialog.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QDialog.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QDialog.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QDialog.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QDialog.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QDialog.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QDialog.prototype.addAction = function(...args) 
          
        {
          //print("JS: QDialog.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QDialog.prototype.addActions = function(...args) 
          
        {
          //print("JS: QDialog.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QDialog.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QDialog.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QDialog.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QDialog.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QDialog.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QDialog.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QDialog.prototype.actions = function(...args) 
          
        {
          //print("JS: QDialog.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QDialog.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QDialog.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QDialog.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QDialog.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QDialog.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QDialog.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QDialog.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QDialog.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QDialog.prototype.windowType = function(...args) 
          
        {
          //print("JS: QDialog.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QDialog.prototype.childAt = function(...args) 
          
        {
          //print("JS: QDialog.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QDialog.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QDialog.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QDialog.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QDialog.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QDialog.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QDialog.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QDialog.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QDialog.prototype.event = function(...args) 
          
        {
          //print("JS: QDialog.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QDialog.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.metric = function(...args) 
          
        {
          //print("JS: QDialog.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QDialog.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QDialog.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QDialog.prototype.redirected = function(...args) 
          
        {
          //print("JS: QDialog.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QDialog.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QDialog.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QDialog.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QDialog.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QDialog.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QDialog.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QDialog.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QDialog.prototype.create = function(...args) 
          
        {
          //print("JS: QDialog.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QDialog.prototype.destroy = function(...args) 
          
        {
          //print("JS: QDialog.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QDialog.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QDialog.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QDialog.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QDialog.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QDialog.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QDialog.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QDialog.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QDialog.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QDialog.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QDialog.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QDialog.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QDialog.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QDialog.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QDialog.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QDialog.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QDialog.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QDialog.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QDialog.prototype.result = function(...args) 
          
        {
          //print("JS: QDialog.prototype.result");
          
              return this.__PROXY__.result(...args);
            
        };
        
        // function 
        QDialog.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QDialog.prototype.setSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setSizeGripEnabled");
          
              return this.__PROXY__.setSizeGripEnabled(...args);
            
        };
        
        // function 
        QDialog.prototype.isSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QDialog.prototype.isSizeGripEnabled");
          
              return this.__PROXY__.isSizeGripEnabled(...args);
            
        };
        
        // function 
        QDialog.prototype.setModal = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setModal");
          
              return this.__PROXY__.setModal(...args);
            
        };
        
        // function 
        QDialog.prototype.setResult = function(...args) 
          
        {
          //print("JS: QDialog.prototype.setResult");
          
              return this.__PROXY__.setResult(...args);
            
        };
        
        // function 
        QDialog.prototype.open = function(...args) 
          
        {
          //print("JS: QDialog.prototype.open");
          
              return this.__PROXY__.open(...args);
            
        };
        
        // function 
        QDialog.prototype.exec = function(...args) 
          
        {
          //print("JS: QDialog.prototype.exec");
          
              return this.__PROXY__.exec(...args);
            
        };
        
        // function 
        QDialog.prototype.done = function(...args) 
          
        {
          //print("JS: QDialog.prototype.done");
          
              return this.__PROXY__.done(...args);
            
        };
        
        // function 
        QDialog.prototype.accept = function(...args) 
          
        {
          //print("JS: QDialog.prototype.accept");
          
              return this.__PROXY__.accept(...args);
            
        };
        
        // function 
        QDialog.prototype.reject = function(...args) 
          
        {
          //print("JS: QDialog.prototype.reject");
          
              return this.__PROXY__.reject(...args);
            
        };
        
        // function 
        QDialog.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QDialog.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        QDialog.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QDialog.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
        
        // function 
        QDialog.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QDialog.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
        
        // function 
        QDialog.prototype.adjustPosition = function(...args) 
          
        {
          //print("JS: QDialog.prototype.adjustPosition");
          
              return this.__PROXY__.adjustPosition(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QDialog.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialog.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QDialog.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QDialog.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QDialog.prototype, 'finished', {
            get: function() { return this.__PROXY__.finished; },
            configurable: true
        });
        
          Object.defineProperty(QDialog.prototype, 'finished(int)', {
              get: function() { return this.__PROXY__.finished; },
              configurable: true
          });
        
        Object.defineProperty(QDialog.prototype, 'accepted', {
            get: function() { return this.__PROXY__.accepted; },
            configurable: true
        });
        
        Object.defineProperty(QDialog.prototype, 'rejected', {
            get: function() { return this.__PROXY__.rejected; },
            configurable: true
        });
        QDialog.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QDialog.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QDialog.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDialog.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDialog.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDialog.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      