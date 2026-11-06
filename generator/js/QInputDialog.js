
      // auto generated
      //var self;

      // class constructor:
      function QInputDialog() {
        

        // should be QInputDialog_BaseJs.call(this, engine):
        //QInputDialog.prototype = new QInputDialog_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QInputDialog.getIdStatic()))) {

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
            qWarning("QInputDialog.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QInputDialog_Wrapper(
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

      

        //copyProperties(this, wrapper, QInputDialog);
  }

  
  else {
    
        print("QInputDialog(): wrong number / type of arguments");
      
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

      //QInputDialog.prototype = new QInputDialog_BaseJs(engine);
      //QInputDialog.prototype = new QInputDialog_Wrapper(engine);
      QInputDialog.prototype = new Object();


      QInputDialog.prototype.toString = function() {
          //return "QInputDialog [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QInputDialog [JS]";
        };
      QInputDialog.getObjectType = function() {
        return RJSType_QInputDialog.getIdStatic();
      };

      QInputDialog.prototype.getObjectType = function() {
        return RJSType_QInputDialog.getIdStatic();
      };

      QInputDialog.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QInputDialog.getIdStatic()) {
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
QInputDialog.Rejected = QInputDialog_Wrapper.Rejected;
QInputDialog.Accepted = QInputDialog_Wrapper.Accepted;

  // enum: InputDialogOption
QInputDialog.NoButtons = QInputDialog_Wrapper.NoButtons;
QInputDialog.UseListViewForComboBoxItems = QInputDialog_Wrapper.UseListViewForComboBoxItems;
QInputDialog.UsePlainTextEditForTextInput = QInputDialog_Wrapper.UsePlainTextEditForTextInput;

  // enum: InputMode
QInputDialog.TextInput = QInputDialog_Wrapper.TextInput;
QInputDialog.IntInput = QInputDialog_Wrapper.IntInput;
QInputDialog.DoubleInput = QInputDialog_Wrapper.DoubleInput;


      // functions:
      
        // function 
        QInputDialog.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QInputDialog.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QInputDialog.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QInputDialog.prototype.findChild = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QInputDialog.prototype.children = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QInputDialog.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QInputDialog.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QInputDialog.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QInputDialog.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QInputDialog.prototype.property = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QInputDialog.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QInputDialog.prototype.parent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QInputDialog.prototype.devType = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QInputDialog.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isModal = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QInputDialog.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QInputDialog.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QInputDialog.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QInputDialog.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QInputDialog.prototype.window = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QInputDialog.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QInputDialog.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QInputDialog.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QInputDialog.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setFont = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QInputDialog.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QInputDialog.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QInputDialog.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QInputDialog.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QInputDialog.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setMask = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QInputDialog.prototype.mask = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QInputDialog.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QInputDialog.prototype.grab = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QInputDialog.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QInputDialog.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QInputDialog.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QInputDialog.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QInputDialog.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QInputDialog.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QInputDialog.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QInputDialog.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QInputDialog.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QInputDialog.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QInputDialog.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QInputDialog.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QInputDialog.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QInputDialog.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QInputDialog.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QInputDialog.prototype.update = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QInputDialog.prototype.repaint = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QInputDialog.prototype.show = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QInputDialog.prototype.hide = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QInputDialog.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QInputDialog.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QInputDialog.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QInputDialog.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QInputDialog.prototype.close = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QInputDialog.prototype.raise = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QInputDialog.prototype.lower = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QInputDialog.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QInputDialog.prototype.move = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QInputDialog.prototype.resize = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QInputDialog.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QInputDialog.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QInputDialog.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QInputDialog.prototype.windowState = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QInputDialog.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QInputDialog.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QInputDialog.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QInputDialog.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QInputDialog.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QInputDialog.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QInputDialog.prototype.layout = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QInputDialog.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setParent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.scroll = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QInputDialog.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QInputDialog.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QInputDialog.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QInputDialog.prototype.addAction = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QInputDialog.prototype.addActions = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QInputDialog.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QInputDialog.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QInputDialog.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QInputDialog.prototype.actions = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QInputDialog.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QInputDialog.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QInputDialog.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QInputDialog.prototype.windowType = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QInputDialog.prototype.childAt = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QInputDialog.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QInputDialog.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QInputDialog.prototype.event = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QInputDialog.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.metric = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QInputDialog.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QInputDialog.prototype.redirected = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QInputDialog.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QInputDialog.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QInputDialog.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QInputDialog.prototype.create = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QInputDialog.prototype.destroy = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QInputDialog.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QInputDialog.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QInputDialog.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QInputDialog.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QInputDialog.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QInputDialog.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QInputDialog.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QInputDialog.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QInputDialog.prototype.result = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.result");
          
              return this.__PROXY__.result(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setSizeGripEnabled");
          
              return this.__PROXY__.setSizeGripEnabled(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isSizeGripEnabled");
          
              return this.__PROXY__.isSizeGripEnabled(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setModal = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setModal");
          
              return this.__PROXY__.setModal(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setResult = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setResult");
          
              return this.__PROXY__.setResult(...args);
            
        };
    
        // function 
        QInputDialog.prototype.exec = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.exec");
          
              return this.__PROXY__.exec(...args);
            
        };
    
        // function 
        QInputDialog.prototype.accept = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.accept");
          
              return this.__PROXY__.accept(...args);
            
        };
    
        // function 
        QInputDialog.prototype.reject = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.reject");
          
              return this.__PROXY__.reject(...args);
            
        };
    
        // function 
        QInputDialog.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
    
        // function 
        QInputDialog.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    
        // function 
        QInputDialog.prototype.adjustPosition = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.adjustPosition");
          
              return this.__PROXY__.adjustPosition(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setInputMode = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setInputMode");
          
              return this.__PROXY__.setInputMode(...args);
            
        };
    
        // function 
        QInputDialog.prototype.inputMode = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.inputMode");
          
              return this.__PROXY__.inputMode(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setLabelText = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setLabelText");
          
              return this.__PROXY__.setLabelText(...args);
            
        };
    
        // function 
        QInputDialog.prototype.labelText = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.labelText");
          
              return this.__PROXY__.labelText(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setOption = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setOption");
          
              return this.__PROXY__.setOption(...args);
            
        };
    
        // function 
        QInputDialog.prototype.testOption = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.testOption");
          
              return this.__PROXY__.testOption(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setOptions = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setOptions");
          
              return this.__PROXY__.setOptions(...args);
            
        };
    
        // function 
        QInputDialog.prototype.options = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.options");
          
              return this.__PROXY__.options(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setTextValue = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setTextValue");
          
              return this.__PROXY__.setTextValue(...args);
            
        };
    
        // function 
        QInputDialog.prototype.textValue = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.textValue");
          
              return this.__PROXY__.textValue(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setTextEchoMode = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setTextEchoMode");
          
              return this.__PROXY__.setTextEchoMode(...args);
            
        };
    
        // function 
        QInputDialog.prototype.textEchoMode = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.textEchoMode");
          
              return this.__PROXY__.textEchoMode(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setComboBoxEditable = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setComboBoxEditable");
          
              return this.__PROXY__.setComboBoxEditable(...args);
            
        };
    
        // function 
        QInputDialog.prototype.isComboBoxEditable = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.isComboBoxEditable");
          
              return this.__PROXY__.isComboBoxEditable(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setComboBoxItems = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setComboBoxItems");
          
              return this.__PROXY__.setComboBoxItems(...args);
            
        };
    
        // function 
        QInputDialog.prototype.comboBoxItems = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.comboBoxItems");
          
              return this.__PROXY__.comboBoxItems(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setIntValue = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setIntValue");
          
              return this.__PROXY__.setIntValue(...args);
            
        };
    
        // function 
        QInputDialog.prototype.intValue = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.intValue");
          
              return this.__PROXY__.intValue(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setIntMinimum = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setIntMinimum");
          
              return this.__PROXY__.setIntMinimum(...args);
            
        };
    
        // function 
        QInputDialog.prototype.intMinimum = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.intMinimum");
          
              return this.__PROXY__.intMinimum(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setIntMaximum = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setIntMaximum");
          
              return this.__PROXY__.setIntMaximum(...args);
            
        };
    
        // function 
        QInputDialog.prototype.intMaximum = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.intMaximum");
          
              return this.__PROXY__.intMaximum(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setIntRange = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setIntRange");
          
              return this.__PROXY__.setIntRange(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setIntStep = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setIntStep");
          
              return this.__PROXY__.setIntStep(...args);
            
        };
    
        // function 
        QInputDialog.prototype.intStep = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.intStep");
          
              return this.__PROXY__.intStep(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setDoubleValue = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setDoubleValue");
          
              return this.__PROXY__.setDoubleValue(...args);
            
        };
    
        // function 
        QInputDialog.prototype.doubleValue = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.doubleValue");
          
              return this.__PROXY__.doubleValue(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setDoubleMinimum = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setDoubleMinimum");
          
              return this.__PROXY__.setDoubleMinimum(...args);
            
        };
    
        // function 
        QInputDialog.prototype.doubleMinimum = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.doubleMinimum");
          
              return this.__PROXY__.doubleMinimum(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setDoubleMaximum = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setDoubleMaximum");
          
              return this.__PROXY__.setDoubleMaximum(...args);
            
        };
    
        // function 
        QInputDialog.prototype.doubleMaximum = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.doubleMaximum");
          
              return this.__PROXY__.doubleMaximum(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setDoubleRange = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setDoubleRange");
          
              return this.__PROXY__.setDoubleRange(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setDoubleDecimals = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setDoubleDecimals");
          
              return this.__PROXY__.setDoubleDecimals(...args);
            
        };
    
        // function 
        QInputDialog.prototype.doubleDecimals = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.doubleDecimals");
          
              return this.__PROXY__.doubleDecimals(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setOkButtonText = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setOkButtonText");
          
              return this.__PROXY__.setOkButtonText(...args);
            
        };
    
        // function 
        QInputDialog.prototype.okButtonText = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.okButtonText");
          
              return this.__PROXY__.okButtonText(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setCancelButtonText = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setCancelButtonText");
          
              return this.__PROXY__.setCancelButtonText(...args);
            
        };
    
        // function 
        QInputDialog.prototype.cancelButtonText = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.cancelButtonText");
          
              return this.__PROXY__.cancelButtonText(...args);
            
        };
    
        // function 
        QInputDialog.prototype.open = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.open");
          
              return this.__PROXY__.open(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QInputDialog.prototype.getMultiLineText = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.getMultiLineText");
          
              return this.__PROXY__.getMultiLineText(...args);
            
        };
    
        // function 
        QInputDialog.prototype.getItem = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.getItem");
          
              return this.__PROXY__.getItem(...args);
            
        };
    
        // function 
        QInputDialog.prototype.getInt = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.getInt");
          
              return this.__PROXY__.getInt(...args);
            
        };
    
        // function 
        QInputDialog.prototype.getDouble = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.getDouble");
          
              return this.__PROXY__.getDouble(...args);
            
        };
    
        // function 
        QInputDialog.prototype.setDoubleStep = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.setDoubleStep");
          
              return this.__PROXY__.setDoubleStep(...args);
            
        };
    
        // function 
        QInputDialog.prototype.doubleStep = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.doubleStep");
          
              return this.__PROXY__.doubleStep(...args);
            
        };
    
        // function 
        QInputDialog.prototype.done = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.done");
          
              return this.__PROXY__.done(...args);
            
        };
    
        // function 
        QInputDialog.prototype.getText = function(...args) 
          
        {
          //print("JS: QInputDialog.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
    

      // static functions:
      

        // static function 
        QInputDialog.getMultiLineText = function() 
          
        {
          //print("JS: QInputDialog.getMultiLineText");
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QInputDialog_WrapperSingletonInstance.getMultiLineText(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QInputDialog);
  }

  
  else {
    
        print("QInputDialog.getMultiLineText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QInputDialog.getItem = function() 
          
        {
          //print("JS: QInputDialog.getItem");
          
      if (arguments.length >= 4 &&
          arguments.length <= 6) {
    
                // calling static wrapper:
                return QInputDialog_WrapperSingletonInstance.getItem(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, QInputDialog);
  }

  
  else {
    
        print("QInputDialog.getItem(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QInputDialog.getInt = function() 
          
        {
          //print("JS: QInputDialog.getInt");
          
      if (arguments.length >= 3 &&
          arguments.length <= 7) {
    
                // calling static wrapper:
                return QInputDialog_WrapperSingletonInstance.getInt(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]
                );
              

        //copyProperties(this, wrapper, QInputDialog);
  }

  
  else {
    
        print("QInputDialog.getInt(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QInputDialog.getDouble = function() 
          
        {
          //print("JS: QInputDialog.getDouble");
          
      if (arguments.length >= 3 &&
          arguments.length <= 7) {
    
                // calling static wrapper:
                return QInputDialog_WrapperSingletonInstance.getDouble(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]
                );
              

        //copyProperties(this, wrapper, QInputDialog);
  }

  
  else {
    
        print("QInputDialog.getDouble(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QInputDialog.getText = function() 
          
        {
          //print("JS: QInputDialog.getText");
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return QInputDialog_WrapperSingletonInstance.getText(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QInputDialog);
  }

  
  else {
    
        print("QInputDialog.getText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(QInputDialog.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDialog.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QInputDialog.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QInputDialog.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QInputDialog.prototype, 'finished', {
            get: function() { return this.__PROXY__.finished; },
            configurable: true
        });
        
          Object.defineProperty(QInputDialog.prototype, 'finished(int)', {
              get: function() { return this.__PROXY__.finished; },
              configurable: true
          });
        
        Object.defineProperty(QInputDialog.prototype, 'accepted', {
            get: function() { return this.__PROXY__.accepted; },
            configurable: true
        });
        
        Object.defineProperty(QInputDialog.prototype, 'rejected', {
            get: function() { return this.__PROXY__.rejected; },
            configurable: true
        });
        
        Object.defineProperty(QInputDialog.prototype, 'textValueChanged', {
            get: function() { return this.__PROXY__.textValueChanged; },
            configurable: true
        });
        
          Object.defineProperty(QInputDialog.prototype, 'textValueChanged(QString)', {
              get: function() { return this.__PROXY__.textValueChanged; },
              configurable: true
          });
        
        Object.defineProperty(QInputDialog.prototype, 'textValueSelected', {
            get: function() { return this.__PROXY__.textValueSelected; },
            configurable: true
        });
        
          Object.defineProperty(QInputDialog.prototype, 'textValueSelected(QString)', {
              get: function() { return this.__PROXY__.textValueSelected; },
              configurable: true
          });
        
        Object.defineProperty(QInputDialog.prototype, 'intValueChanged', {
            get: function() { return this.__PROXY__.intValueChanged; },
            configurable: true
        });
        
          Object.defineProperty(QInputDialog.prototype, 'intValueChanged(int)', {
              get: function() { return this.__PROXY__.intValueChanged; },
              configurable: true
          });
        
        Object.defineProperty(QInputDialog.prototype, 'intValueSelected', {
            get: function() { return this.__PROXY__.intValueSelected; },
            configurable: true
        });
        
          Object.defineProperty(QInputDialog.prototype, 'intValueSelected(int)', {
              get: function() { return this.__PROXY__.intValueSelected; },
              configurable: true
          });
        
        Object.defineProperty(QInputDialog.prototype, 'doubleValueChanged', {
            get: function() { return this.__PROXY__.doubleValueChanged; },
            configurable: true
        });
        
          Object.defineProperty(QInputDialog.prototype, 'doubleValueChanged(double)', {
              get: function() { return this.__PROXY__.doubleValueChanged; },
              configurable: true
          });
        
        Object.defineProperty(QInputDialog.prototype, 'doubleValueSelected', {
            get: function() { return this.__PROXY__.doubleValueSelected; },
            configurable: true
        });
        
          Object.defineProperty(QInputDialog.prototype, 'doubleValueSelected(double)', {
              get: function() { return this.__PROXY__.doubleValueSelected; },
              configurable: true
          });
        QInputDialog.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QInputDialog.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QInputDialog.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QInputDialog.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QInputDialog.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QInputDialog.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      