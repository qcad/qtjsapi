
      // auto generated
      //var self;

      // class constructor:
      function QColorDialog() {
        

        // should be QColorDialog_BaseJs.call(this, engine):
        //QColorDialog.prototype = new QColorDialog_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QColorDialog.getIdStatic()))) {

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
            qWarning("QColorDialog.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QColorDialog_Wrapper(
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

      

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QColorDialog_Wrapper(
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

      

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog(): wrong number / type of arguments");
      
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

      //QColorDialog.prototype = new QColorDialog_BaseJs(engine);
      //QColorDialog.prototype = new QColorDialog_Wrapper(engine);
      QColorDialog.prototype = new Object();


      QColorDialog.prototype.toString = function() {
          //return "QColorDialog [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QColorDialog [JS]";
        };
      QColorDialog.getObjectType = function() {
        return RJSType_QColorDialog.getIdStatic();
      };

      QColorDialog.prototype.getObjectType = function() {
        return RJSType_QColorDialog.getIdStatic();
      };

      QColorDialog.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QColorDialog.getIdStatic()) {
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
QColorDialog.Rejected = QColorDialog_Wrapper.Rejected;
QColorDialog.Accepted = QColorDialog_Wrapper.Accepted;

  // enum: ColorDialogOption
QColorDialog.ShowAlphaChannel = QColorDialog_Wrapper.ShowAlphaChannel;
QColorDialog.NoButtons = QColorDialog_Wrapper.NoButtons;
QColorDialog.DontUseNativeDialog = QColorDialog_Wrapper.DontUseNativeDialog;


      // functions:
      
        // function 
        QColorDialog.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QColorDialog.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QColorDialog.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QColorDialog.prototype.findChild = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QColorDialog.prototype.children = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QColorDialog.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QColorDialog.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QColorDialog.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QColorDialog.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QColorDialog.prototype.property = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QColorDialog.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QColorDialog.prototype.parent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QColorDialog.prototype.devType = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QColorDialog.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isModal = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QColorDialog.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QColorDialog.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QColorDialog.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QColorDialog.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QColorDialog.prototype.window = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QColorDialog.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QColorDialog.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QColorDialog.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QColorDialog.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setFont = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QColorDialog.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QColorDialog.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QColorDialog.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QColorDialog.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QColorDialog.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setMask = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QColorDialog.prototype.mask = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QColorDialog.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QColorDialog.prototype.grab = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QColorDialog.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QColorDialog.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QColorDialog.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QColorDialog.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QColorDialog.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QColorDialog.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QColorDialog.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QColorDialog.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QColorDialog.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QColorDialog.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QColorDialog.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QColorDialog.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QColorDialog.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QColorDialog.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QColorDialog.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QColorDialog.prototype.update = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QColorDialog.prototype.repaint = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QColorDialog.prototype.show = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QColorDialog.prototype.hide = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QColorDialog.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QColorDialog.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QColorDialog.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QColorDialog.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QColorDialog.prototype.close = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QColorDialog.prototype.raise = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QColorDialog.prototype.lower = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QColorDialog.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QColorDialog.prototype.move = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QColorDialog.prototype.resize = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QColorDialog.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QColorDialog.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QColorDialog.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QColorDialog.prototype.windowState = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QColorDialog.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QColorDialog.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QColorDialog.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QColorDialog.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QColorDialog.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QColorDialog.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QColorDialog.prototype.layout = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QColorDialog.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setParent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.scroll = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QColorDialog.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QColorDialog.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QColorDialog.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QColorDialog.prototype.addAction = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QColorDialog.prototype.addActions = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QColorDialog.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QColorDialog.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QColorDialog.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QColorDialog.prototype.actions = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QColorDialog.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QColorDialog.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QColorDialog.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QColorDialog.prototype.windowType = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QColorDialog.prototype.childAt = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QColorDialog.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QColorDialog.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QColorDialog.prototype.event = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QColorDialog.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.metric = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QColorDialog.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QColorDialog.prototype.redirected = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QColorDialog.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QColorDialog.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QColorDialog.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QColorDialog.prototype.create = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QColorDialog.prototype.destroy = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QColorDialog.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QColorDialog.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QColorDialog.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QColorDialog.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QColorDialog.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QColorDialog.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QColorDialog.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QColorDialog.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QColorDialog.prototype.result = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.result");
          
              return this.__PROXY__.result(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setSizeGripEnabled");
          
              return this.__PROXY__.setSizeGripEnabled(...args);
            
        };
        
        // function 
        QColorDialog.prototype.isSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.isSizeGripEnabled");
          
              return this.__PROXY__.isSizeGripEnabled(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setModal = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setModal");
          
              return this.__PROXY__.setModal(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setResult = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setResult");
          
              return this.__PROXY__.setResult(...args);
            
        };
        
        // function 
        QColorDialog.prototype.exec = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.exec");
          
              return this.__PROXY__.exec(...args);
            
        };
        
        // function 
        QColorDialog.prototype.accept = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.accept");
          
              return this.__PROXY__.accept(...args);
            
        };
        
        // function 
        QColorDialog.prototype.reject = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.reject");
          
              return this.__PROXY__.reject(...args);
            
        };
        
        // function 
        QColorDialog.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
        
        // function 
        QColorDialog.prototype.adjustPosition = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.adjustPosition");
          
              return this.__PROXY__.adjustPosition(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setCurrentColor = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setCurrentColor");
          
              return this.__PROXY__.setCurrentColor(...args);
            
        };
        
        // function 
        QColorDialog.prototype.currentColor = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.currentColor");
          
              return this.__PROXY__.currentColor(...args);
            
        };
        
        // function 
        QColorDialog.prototype.selectedColor = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.selectedColor");
          
              return this.__PROXY__.selectedColor(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setOption = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setOption");
          
              return this.__PROXY__.setOption(...args);
            
        };
        
        // function 
        QColorDialog.prototype.testOption = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.testOption");
          
              return this.__PROXY__.testOption(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setOptions = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setOptions");
          
              return this.__PROXY__.setOptions(...args);
            
        };
        
        // function 
        QColorDialog.prototype.options = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.options");
          
              return this.__PROXY__.options(...args);
            
        };
        
        // function 
        QColorDialog.prototype.open = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.open");
          
              return this.__PROXY__.open(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QColorDialog.prototype.getColor = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.getColor");
          
              return this.__PROXY__.getColor(...args);
            
        };
        
        // function 
        QColorDialog.prototype.customCount = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.customCount");
          
              return this.__PROXY__.customCount(...args);
            
        };
        
        // function 
        QColorDialog.prototype.customColor = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.customColor");
          
              return this.__PROXY__.customColor(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setCustomColor = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setCustomColor");
          
              return this.__PROXY__.setCustomColor(...args);
            
        };
        
        // function 
        QColorDialog.prototype.standardColor = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.standardColor");
          
              return this.__PROXY__.standardColor(...args);
            
        };
        
        // function 
        QColorDialog.prototype.setStandardColor = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.setStandardColor");
          
              return this.__PROXY__.setStandardColor(...args);
            
        };
        
        // function 
        QColorDialog.prototype.done = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.done");
          
              return this.__PROXY__.done(...args);
            
        };
        
        // function 
        QColorDialog.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QColorDialog.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
        

      // static functions:
      

        // static function 
        QColorDialog.getColor = function() 
          
        {
          //print("JS: QColorDialog.getColor");
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QColorDialog_WrapperSingletonInstance.getColor(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog.getColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColorDialog.customCount = function() 
          
        {
          //print("JS: QColorDialog.customCount");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QColorDialog_WrapperSingletonInstance.customCount(
                  
                );
              

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog.customCount(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColorDialog.customColor = function() 
          
        {
          //print("JS: QColorDialog.customColor");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QColorDialog_WrapperSingletonInstance.customColor(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog.customColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColorDialog.setCustomColor = function() 
          
        {
          //print("JS: QColorDialog.setCustomColor");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QColorDialog_WrapperSingletonInstance.setCustomColor(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog.setCustomColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColorDialog.standardColor = function() 
          
        {
          //print("JS: QColorDialog.standardColor");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QColorDialog_WrapperSingletonInstance.standardColor(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog.standardColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColorDialog.setStandardColor = function() 
          
        {
          //print("JS: QColorDialog.setStandardColor");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QColorDialog_WrapperSingletonInstance.setStandardColor(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog.setStandardColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(QColorDialog.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QColorDialog.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QColorDialog.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QColorDialog.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QColorDialog.prototype, 'finished', {
            get: function() { return this.__PROXY__.finished; },
            configurable: true
        });
        
          Object.defineProperty(QColorDialog.prototype, 'finished(int)', {
              get: function() { return this.__PROXY__.finished; },
              configurable: true
          });
        
        Object.defineProperty(QColorDialog.prototype, 'accepted', {
            get: function() { return this.__PROXY__.accepted; },
            configurable: true
        });
        
        Object.defineProperty(QColorDialog.prototype, 'rejected', {
            get: function() { return this.__PROXY__.rejected; },
            configurable: true
        });
        
        Object.defineProperty(QColorDialog.prototype, 'currentColorChanged', {
            get: function() { return this.__PROXY__.currentColorChanged; },
            configurable: true
        });
        
          Object.defineProperty(QColorDialog.prototype, 'currentColorChanged(QColor)', {
              get: function() { return this.__PROXY__.currentColorChanged; },
              configurable: true
          });
        
        Object.defineProperty(QColorDialog.prototype, 'colorSelected', {
            get: function() { return this.__PROXY__.colorSelected; },
            configurable: true
        });
        
          Object.defineProperty(QColorDialog.prototype, 'colorSelected(QColor)', {
              get: function() { return this.__PROXY__.colorSelected; },
              configurable: true
          });
        QColorDialog.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QColorDialog.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QColorDialog.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QColorDialog.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QColorDialog.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QColorDialog.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      