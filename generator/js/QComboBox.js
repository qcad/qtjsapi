
      // auto generated
      //var self;

      // class constructor:
      function QComboBox() {
        

        // should be QComboBox_BaseJs.call(this, engine):
        //QComboBox.prototype = new QComboBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QComboBox.getIdStatic()))) {

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
            qWarning("QComboBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QComboBox_Wrapper(
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

      

        //copyProperties(this, wrapper, QComboBox);
  }

  
  else {
    
        print("QComboBox(): wrong number / type of arguments");
      
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

      //QComboBox.prototype = new QComboBox_BaseJs(engine);
      //QComboBox.prototype = new QComboBox_Wrapper(engine);
      QComboBox.prototype = new Object();


      QComboBox.prototype.toString = function() {
          //return "QComboBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QComboBox [JS]";
        };
      QComboBox.getObjectType = function() {
        return RJSType_QComboBox.getIdStatic();
      };

      QComboBox.prototype.getObjectType = function() {
        return RJSType_QComboBox.getIdStatic();
      };

      QComboBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QComboBox.getIdStatic()) {
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
      
  // enum: InsertPolicy
QComboBox.NoInsert = QComboBox_Wrapper.NoInsert;
QComboBox.InsertAtTop = QComboBox_Wrapper.InsertAtTop;
QComboBox.InsertAtCurrent = QComboBox_Wrapper.InsertAtCurrent;
QComboBox.InsertAtBottom = QComboBox_Wrapper.InsertAtBottom;
QComboBox.InsertAfterCurrent = QComboBox_Wrapper.InsertAfterCurrent;
QComboBox.InsertBeforeCurrent = QComboBox_Wrapper.InsertBeforeCurrent;
QComboBox.InsertAlphabetically = QComboBox_Wrapper.InsertAlphabetically;

  // enum: SizeAdjustPolicy
QComboBox.AdjustToContents = QComboBox_Wrapper.AdjustToContents;
QComboBox.AdjustToContentsOnFirstShow = QComboBox_Wrapper.AdjustToContentsOnFirstShow;
QComboBox.AdjustToMinimumContentsLengthWithIcon = QComboBox_Wrapper.AdjustToMinimumContentsLengthWithIcon;


      // functions:
      
        // function 
        QComboBox.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QComboBox.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QComboBox.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QComboBox.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QComboBox.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QComboBox.prototype.findChild = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QComboBox.prototype.children = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QComboBox.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QComboBox.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QComboBox.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QComboBox.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QComboBox.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QComboBox.prototype.property = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QComboBox.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QComboBox.prototype.parent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QComboBox.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QComboBox.prototype.devType = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QComboBox.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QComboBox.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QComboBox.prototype.isModal = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QComboBox.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QComboBox.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QComboBox.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QComboBox.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QComboBox.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QComboBox.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QComboBox.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QComboBox.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QComboBox.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QComboBox.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QComboBox.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QComboBox.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QComboBox.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QComboBox.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QComboBox.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QComboBox.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QComboBox.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QComboBox.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QComboBox.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QComboBox.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QComboBox.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QComboBox.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QComboBox.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QComboBox.prototype.window = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QComboBox.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QComboBox.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QComboBox.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QComboBox.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QComboBox.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QComboBox.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QComboBox.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QComboBox.prototype.setFont = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QComboBox.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QComboBox.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QComboBox.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QComboBox.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QComboBox.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QComboBox.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QComboBox.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QComboBox.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QComboBox.prototype.setMask = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QComboBox.prototype.mask = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QComboBox.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QComboBox.prototype.grab = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QComboBox.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QComboBox.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QComboBox.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QComboBox.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QComboBox.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QComboBox.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QComboBox.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QComboBox.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QComboBox.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QComboBox.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QComboBox.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QComboBox.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QComboBox.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QComboBox.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QComboBox.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QComboBox.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QComboBox.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QComboBox.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QComboBox.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QComboBox.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QComboBox.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QComboBox.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QComboBox.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QComboBox.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QComboBox.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QComboBox.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QComboBox.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QComboBox.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QComboBox.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QComboBox.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QComboBox.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QComboBox.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QComboBox.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QComboBox.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QComboBox.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QComboBox.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QComboBox.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QComboBox.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QComboBox.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QComboBox.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QComboBox.prototype.update = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QComboBox.prototype.repaint = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QComboBox.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QComboBox.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QComboBox.prototype.show = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QComboBox.prototype.hide = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QComboBox.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QComboBox.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QComboBox.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QComboBox.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QComboBox.prototype.close = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QComboBox.prototype.raise = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QComboBox.prototype.lower = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QComboBox.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QComboBox.prototype.move = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QComboBox.prototype.resize = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QComboBox.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QComboBox.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QComboBox.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QComboBox.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QComboBox.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QComboBox.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QComboBox.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QComboBox.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QComboBox.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QComboBox.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QComboBox.prototype.windowState = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QComboBox.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QComboBox.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QComboBox.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QComboBox.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QComboBox.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QComboBox.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QComboBox.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QComboBox.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QComboBox.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QComboBox.prototype.layout = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QComboBox.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QComboBox.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QComboBox.prototype.setParent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QComboBox.prototype.scroll = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QComboBox.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QComboBox.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QComboBox.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QComboBox.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QComboBox.prototype.addAction = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QComboBox.prototype.addActions = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QComboBox.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QComboBox.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QComboBox.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QComboBox.prototype.actions = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QComboBox.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QComboBox.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QComboBox.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QComboBox.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QComboBox.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QComboBox.prototype.windowType = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QComboBox.prototype.childAt = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QComboBox.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QComboBox.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QComboBox.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QComboBox.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QComboBox.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QComboBox.prototype.event = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QComboBox.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.metric = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QComboBox.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QComboBox.prototype.redirected = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QComboBox.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QComboBox.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QComboBox.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QComboBox.prototype.create = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QComboBox.prototype.destroy = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QComboBox.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QComboBox.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QComboBox.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QComboBox.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QComboBox.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QComboBox.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QComboBox.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QComboBox.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QComboBox.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QComboBox.prototype.setMaxVisibleItems = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setMaxVisibleItems");
          
              return this.__PROXY__.setMaxVisibleItems(...args);
            
        };
    
        // function 
        QComboBox.prototype.setMaxCount = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setMaxCount");
          
              return this.__PROXY__.setMaxCount(...args);
            
        };
    
        // function 
        QComboBox.prototype.setDuplicatesEnabled = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setDuplicatesEnabled");
          
              return this.__PROXY__.setDuplicatesEnabled(...args);
            
        };
    
        // function 
        QComboBox.prototype.setFrame = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setFrame");
          
              return this.__PROXY__.setFrame(...args);
            
        };
    
        // function 
        QComboBox.prototype.hasFrame = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.hasFrame");
          
              return this.__PROXY__.hasFrame(...args);
            
        };
    
        // function 
        QComboBox.prototype.findText = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.findText");
          
              return this.__PROXY__.findText(...args);
            
        };
    
        // function 
        QComboBox.prototype.findData = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.findData");
          
              return this.__PROXY__.findData(...args);
            
        };
    
        // function 
        QComboBox.prototype.setInsertPolicy = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setInsertPolicy");
          
              return this.__PROXY__.setInsertPolicy(...args);
            
        };
    
        // function 
        QComboBox.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
    
        // function 
        QComboBox.prototype.setMinimumContentsLength = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setMinimumContentsLength");
          
              return this.__PROXY__.setMinimumContentsLength(...args);
            
        };
    
        // function 
        QComboBox.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        QComboBox.prototype.setPlaceholderText = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setPlaceholderText");
          
              return this.__PROXY__.setPlaceholderText(...args);
            
        };
    
        // function 
        QComboBox.prototype.isEditable = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.isEditable");
          
              return this.__PROXY__.isEditable(...args);
            
        };
    
        // function 
        QComboBox.prototype.setEditable = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setEditable");
          
              return this.__PROXY__.setEditable(...args);
            
        };
    
        // function 
        QComboBox.prototype.setLineEdit = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setLineEdit");
          
              return this.__PROXY__.setLineEdit(...args);
            
        };
    
        // function 
        QComboBox.prototype.lineEdit = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.lineEdit");
          
              return this.__PROXY__.lineEdit(...args);
            
        };
    
        // function 
        QComboBox.prototype.setValidator = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setValidator");
          
              return this.__PROXY__.setValidator(...args);
            
        };
    
        // function 
        QComboBox.prototype.setCompleter = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setCompleter");
          
              return this.__PROXY__.setCompleter(...args);
            
        };
    
        // function 
        QComboBox.prototype.completer = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.completer");
          
              return this.__PROXY__.completer(...args);
            
        };
    
        // function 
        QComboBox.prototype.model = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
    
        // function 
        QComboBox.prototype.setModelColumn = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setModelColumn");
          
              return this.__PROXY__.setModelColumn(...args);
            
        };
    
        // function 
        QComboBox.prototype.itemText = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.itemText");
          
              return this.__PROXY__.itemText(...args);
            
        };
    
        // function 
        QComboBox.prototype.itemIcon = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.itemIcon");
          
              return this.__PROXY__.itemIcon(...args);
            
        };
    
        // function 
        QComboBox.prototype.itemData = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.itemData");
          
              return this.__PROXY__.itemData(...args);
            
        };
    
        // function 
        QComboBox.prototype.addItem = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.addItem");
          
              return this.__PROXY__.addItem(...args);
            
        };
    
        // function 
        QComboBox.prototype.addItems = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.addItems");
          
              return this.__PROXY__.addItems(...args);
            
        };
    
        // function 
        QComboBox.prototype.insertItem = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.insertItem");
          
              return this.__PROXY__.insertItem(...args);
            
        };
    
        // function 
        QComboBox.prototype.insertItems = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.insertItems");
          
              return this.__PROXY__.insertItems(...args);
            
        };
    
        // function 
        QComboBox.prototype.insertSeparator = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.insertSeparator");
          
              return this.__PROXY__.insertSeparator(...args);
            
        };
    
        // function 
        QComboBox.prototype.removeItem = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.removeItem");
          
              return this.__PROXY__.removeItem(...args);
            
        };
    
        // function 
        QComboBox.prototype.setItemText = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setItemText");
          
              return this.__PROXY__.setItemText(...args);
            
        };
    
        // function 
        QComboBox.prototype.setItemIcon = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setItemIcon");
          
              return this.__PROXY__.setItemIcon(...args);
            
        };
    
        // function 
        QComboBox.prototype.setItemData = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setItemData");
          
              return this.__PROXY__.setItemData(...args);
            
        };
    
        // function 
        QComboBox.prototype.view = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.view");
          
              return this.__PROXY__.view(...args);
            
        };
    
        // function 
        QComboBox.prototype.showPopup = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.showPopup");
          
              return this.__PROXY__.showPopup(...args);
            
        };
    
        // function 
        QComboBox.prototype.hidePopup = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.hidePopup");
          
              return this.__PROXY__.hidePopup(...args);
            
        };
    
        // function 
        QComboBox.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QComboBox.prototype.clear = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QComboBox.prototype.clearEditText = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.clearEditText");
          
              return this.__PROXY__.clearEditText(...args);
            
        };
    
        // function 
        QComboBox.prototype.setEditText = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setEditText");
          
              return this.__PROXY__.setEditText(...args);
            
        };
    
        // function 
        QComboBox.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
    
        // function 
        QComboBox.prototype.setCurrentText = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.setCurrentText");
          
              return this.__PROXY__.setCurrentText(...args);
            
        };
    
        // function 
        QComboBox.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        QComboBox.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QComboBox.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QComboBox.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QComboBox.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QComboBox.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'count', {
              get: function() {
                  
                      return this.__PROXY__.count;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'currentData', {
              get: function() {
                  
                      return this.__PROXY__.currentData;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'currentIndex', {
              get: function() {
                  
                      return this.__PROXY__.currentIndex;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentIndex(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'currentText', {
              get: function() {
                  
                      return this.__PROXY__.currentText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'duplicatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.duplicatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDuplicatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'editable', {
              get: function() {
                  
                      return this.__PROXY__.isEditable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'frame', {
              get: function() {
                  
                      return this.__PROXY__.hasFrame();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrame(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'insertPolicy', {
              get: function() {
                  
                      return this.__PROXY__.insertPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInsertPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'maxCount', {
              get: function() {
                  
                      return this.__PROXY__.maxCount;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxCount(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'maxVisibleItems', {
              get: function() {
                  
                      return this.__PROXY__.maxVisibleItems;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxVisibleItems(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'minimumContentsLength', {
              get: function() {
                  
                      return this.__PROXY__.minimumContentsLength;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumContentsLength(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'modelColumn', {
              get: function() {
                  
                      return this.__PROXY__.modelColumn;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModelColumn(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'placeholderText', {
              get: function() {
                  
                      return this.__PROXY__.placeholderText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlaceholderText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QComboBox.prototype, 'sizeAdjustPolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizeAdjustPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeAdjustPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QComboBox.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QComboBox.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QComboBox.prototype, 'editTextChanged', {
            get: function() { return this.__PROXY__.editTextChanged; },
            configurable: true
        });
        
          Object.defineProperty(QComboBox.prototype, 'editTextChanged(QString)', {
              get: function() { return this.__PROXY__.editTextChanged; },
              configurable: true
          });
        
        Object.defineProperty(QComboBox.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(QComboBox.prototype, 'activated(int)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(QComboBox.prototype, 'textActivated', {
            get: function() { return this.__PROXY__.textActivated; },
            configurable: true
        });
        
          Object.defineProperty(QComboBox.prototype, 'textActivated(QString)', {
              get: function() { return this.__PROXY__.textActivated; },
              configurable: true
          });
        
        Object.defineProperty(QComboBox.prototype, 'highlighted', {
            get: function() { return this.__PROXY__.highlighted; },
            configurable: true
        });
        
          Object.defineProperty(QComboBox.prototype, 'highlighted(int)', {
              get: function() { return this.__PROXY__.highlighted; },
              configurable: true
          });
        
        Object.defineProperty(QComboBox.prototype, 'textHighlighted', {
            get: function() { return this.__PROXY__.textHighlighted; },
            configurable: true
        });
        
          Object.defineProperty(QComboBox.prototype, 'textHighlighted(QString)', {
              get: function() { return this.__PROXY__.textHighlighted; },
              configurable: true
          });
        
        Object.defineProperty(QComboBox.prototype, 'currentIndexChanged', {
            get: function() { return this.__PROXY__.currentIndexChanged; },
            configurable: true
        });
        
          Object.defineProperty(QComboBox.prototype, 'currentIndexChanged(int)', {
              get: function() { return this.__PROXY__.currentIndexChanged; },
              configurable: true
          });
        
        Object.defineProperty(QComboBox.prototype, 'currentTextChanged', {
            get: function() { return this.__PROXY__.currentTextChanged; },
            configurable: true
        });
        
          Object.defineProperty(QComboBox.prototype, 'currentTextChanged(QString)', {
              get: function() { return this.__PROXY__.currentTextChanged; },
              configurable: true
          });
        QComboBox.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QComboBox.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QComboBox.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QComboBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QComboBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QComboBox.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      