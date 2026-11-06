
      // auto generated
      //var self;

      // class constructor:
      function QFileDialog() {
        

        // should be QFileDialog_BaseJs.call(this, engine):
        //QFileDialog.prototype = new QFileDialog_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFileDialog.getIdStatic()))) {

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
            qWarning("QFileDialog.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QFileDialog_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QFileDialog_Wrapper(
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

      

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog(): wrong number / type of arguments");
      
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

      //QFileDialog.prototype = new QFileDialog_BaseJs(engine);
      //QFileDialog.prototype = new QFileDialog_Wrapper(engine);
      QFileDialog.prototype = new Object();


      QFileDialog.prototype.toString = function() {
          //return "QFileDialog [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFileDialog [JS]";
        };
      QFileDialog.getObjectType = function() {
        return RJSType_QFileDialog.getIdStatic();
      };

      QFileDialog.prototype.getObjectType = function() {
        return RJSType_QFileDialog.getIdStatic();
      };

      QFileDialog.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFileDialog.getIdStatic()) {
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
QFileDialog.Rejected = QFileDialog_Wrapper.Rejected;
QFileDialog.Accepted = QFileDialog_Wrapper.Accepted;

  // enum: ViewMode
QFileDialog.Detail = QFileDialog_Wrapper.Detail;
QFileDialog.List = QFileDialog_Wrapper.List;

  // enum: FileMode
QFileDialog.AnyFile = QFileDialog_Wrapper.AnyFile;
QFileDialog.ExistingFile = QFileDialog_Wrapper.ExistingFile;
QFileDialog.Directory = QFileDialog_Wrapper.Directory;
QFileDialog.ExistingFiles = QFileDialog_Wrapper.ExistingFiles;

  // enum: AcceptMode
QFileDialog.AcceptOpen = QFileDialog_Wrapper.AcceptOpen;
QFileDialog.AcceptSave = QFileDialog_Wrapper.AcceptSave;

  // enum: DialogLabel
QFileDialog.LookIn = QFileDialog_Wrapper.LookIn;
QFileDialog.FileName = QFileDialog_Wrapper.FileName;
QFileDialog.FileType = QFileDialog_Wrapper.FileType;
QFileDialog.Accept = QFileDialog_Wrapper.Accept;
QFileDialog.Reject = QFileDialog_Wrapper.Reject;

  // enum: Option
QFileDialog.ShowDirsOnly = QFileDialog_Wrapper.ShowDirsOnly;
QFileDialog.DontResolveSymlinks = QFileDialog_Wrapper.DontResolveSymlinks;
QFileDialog.DontConfirmOverwrite = QFileDialog_Wrapper.DontConfirmOverwrite;
QFileDialog.DontUseNativeDialog = QFileDialog_Wrapper.DontUseNativeDialog;
QFileDialog.ReadOnly = QFileDialog_Wrapper.ReadOnly;
QFileDialog.HideNameFilterDetails = QFileDialog_Wrapper.HideNameFilterDetails;
QFileDialog.DontUseCustomDirectoryIcons = QFileDialog_Wrapper.DontUseCustomDirectoryIcons;


      // functions:
      
        // function 
        QFileDialog.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QFileDialog.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QFileDialog.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QFileDialog.prototype.findChild = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QFileDialog.prototype.children = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QFileDialog.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QFileDialog.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QFileDialog.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QFileDialog.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QFileDialog.prototype.property = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QFileDialog.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QFileDialog.prototype.parent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QFileDialog.prototype.devType = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QFileDialog.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isModal = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QFileDialog.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QFileDialog.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QFileDialog.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QFileDialog.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QFileDialog.prototype.window = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QFileDialog.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QFileDialog.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QFileDialog.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QFileDialog.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setFont = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QFileDialog.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QFileDialog.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QFileDialog.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QFileDialog.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QFileDialog.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setMask = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QFileDialog.prototype.mask = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QFileDialog.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QFileDialog.prototype.grab = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QFileDialog.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QFileDialog.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QFileDialog.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QFileDialog.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QFileDialog.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QFileDialog.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QFileDialog.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QFileDialog.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QFileDialog.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QFileDialog.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QFileDialog.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QFileDialog.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QFileDialog.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QFileDialog.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QFileDialog.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QFileDialog.prototype.update = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QFileDialog.prototype.repaint = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QFileDialog.prototype.show = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QFileDialog.prototype.hide = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QFileDialog.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QFileDialog.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QFileDialog.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QFileDialog.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QFileDialog.prototype.close = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QFileDialog.prototype.raise = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QFileDialog.prototype.lower = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QFileDialog.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QFileDialog.prototype.move = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QFileDialog.prototype.resize = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QFileDialog.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QFileDialog.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QFileDialog.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QFileDialog.prototype.windowState = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QFileDialog.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QFileDialog.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QFileDialog.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QFileDialog.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QFileDialog.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QFileDialog.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QFileDialog.prototype.layout = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QFileDialog.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setParent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.scroll = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QFileDialog.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QFileDialog.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QFileDialog.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QFileDialog.prototype.addAction = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QFileDialog.prototype.addActions = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QFileDialog.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QFileDialog.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QFileDialog.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QFileDialog.prototype.actions = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QFileDialog.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QFileDialog.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QFileDialog.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QFileDialog.prototype.windowType = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QFileDialog.prototype.childAt = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QFileDialog.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QFileDialog.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QFileDialog.prototype.event = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QFileDialog.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.metric = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QFileDialog.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QFileDialog.prototype.redirected = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QFileDialog.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QFileDialog.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QFileDialog.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QFileDialog.prototype.create = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QFileDialog.prototype.destroy = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QFileDialog.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QFileDialog.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QFileDialog.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QFileDialog.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QFileDialog.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QFileDialog.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QFileDialog.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QFileDialog.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QFileDialog.prototype.result = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.result");
          
              return this.__PROXY__.result(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setSizeGripEnabled");
          
              return this.__PROXY__.setSizeGripEnabled(...args);
            
        };
    
        // function 
        QFileDialog.prototype.isSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.isSizeGripEnabled");
          
              return this.__PROXY__.isSizeGripEnabled(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setModal = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setModal");
          
              return this.__PROXY__.setModal(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setResult = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setResult");
          
              return this.__PROXY__.setResult(...args);
            
        };
    
        // function 
        QFileDialog.prototype.exec = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.exec");
          
              return this.__PROXY__.exec(...args);
            
        };
    
        // function 
        QFileDialog.prototype.reject = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.reject");
          
              return this.__PROXY__.reject(...args);
            
        };
    
        // function 
        QFileDialog.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    
        // function 
        QFileDialog.prototype.adjustPosition = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.adjustPosition");
          
              return this.__PROXY__.adjustPosition(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setDirectory = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setDirectory");
          
              return this.__PROXY__.setDirectory(...args);
            
        };
    
        // function 
        QFileDialog.prototype.directory = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.directory");
          
              return this.__PROXY__.directory(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setDirectoryUrl = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setDirectoryUrl");
          
              return this.__PROXY__.setDirectoryUrl(...args);
            
        };
    
        // function 
        QFileDialog.prototype.directoryUrl = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.directoryUrl");
          
              return this.__PROXY__.directoryUrl(...args);
            
        };
    
        // function 
        QFileDialog.prototype.selectFile = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.selectFile");
          
              return this.__PROXY__.selectFile(...args);
            
        };
    
        // function 
        QFileDialog.prototype.selectedFiles = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.selectedFiles");
          
              return this.__PROXY__.selectedFiles(...args);
            
        };
    
        // function 
        QFileDialog.prototype.selectUrl = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.selectUrl");
          
              return this.__PROXY__.selectUrl(...args);
            
        };
    
        // function 
        QFileDialog.prototype.selectedUrls = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.selectedUrls");
          
              return this.__PROXY__.selectedUrls(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setNameFilter = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setNameFilter");
          
              return this.__PROXY__.setNameFilter(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setNameFilters = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setNameFilters");
          
              return this.__PROXY__.setNameFilters(...args);
            
        };
    
        // function 
        QFileDialog.prototype.nameFilters = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.nameFilters");
          
              return this.__PROXY__.nameFilters(...args);
            
        };
    
        // function 
        QFileDialog.prototype.selectNameFilter = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.selectNameFilter");
          
              return this.__PROXY__.selectNameFilter(...args);
            
        };
    
        // function 
        QFileDialog.prototype.selectedMimeTypeFilter = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.selectedMimeTypeFilter");
          
              return this.__PROXY__.selectedMimeTypeFilter(...args);
            
        };
    
        // function 
        QFileDialog.prototype.selectedNameFilter = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.selectedNameFilter");
          
              return this.__PROXY__.selectedNameFilter(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setMimeTypeFilters = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setMimeTypeFilters");
          
              return this.__PROXY__.setMimeTypeFilters(...args);
            
        };
    
        // function 
        QFileDialog.prototype.mimeTypeFilters = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.mimeTypeFilters");
          
              return this.__PROXY__.mimeTypeFilters(...args);
            
        };
    
        // function 
        QFileDialog.prototype.selectMimeTypeFilter = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.selectMimeTypeFilter");
          
              return this.__PROXY__.selectMimeTypeFilter(...args);
            
        };
    
        // function 
        QFileDialog.prototype.filter = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.filter");
          
              return this.__PROXY__.filter(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setFilter = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setFilter");
          
              return this.__PROXY__.setFilter(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setViewMode = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setViewMode");
          
              return this.__PROXY__.setViewMode(...args);
            
        };
    
        // function 
        QFileDialog.prototype.viewMode = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.viewMode");
          
              return this.__PROXY__.viewMode(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setFileMode = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setFileMode");
          
              return this.__PROXY__.setFileMode(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setAcceptMode = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setAcceptMode");
          
              return this.__PROXY__.setAcceptMode(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setSidebarUrls = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setSidebarUrls");
          
              return this.__PROXY__.setSidebarUrls(...args);
            
        };
    
        // function 
        QFileDialog.prototype.sidebarUrls = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.sidebarUrls");
          
              return this.__PROXY__.sidebarUrls(...args);
            
        };
    
        // function 
        QFileDialog.prototype.saveState = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.saveState");
          
              return this.__PROXY__.saveState(...args);
            
        };
    
        // function 
        QFileDialog.prototype.restoreState = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.restoreState");
          
              return this.__PROXY__.restoreState(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setDefaultSuffix = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setDefaultSuffix");
          
              return this.__PROXY__.setDefaultSuffix(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setHistory = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setHistory");
          
              return this.__PROXY__.setHistory(...args);
            
        };
    
        // function 
        QFileDialog.prototype.history = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.history");
          
              return this.__PROXY__.history(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setLabelText = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setLabelText");
          
              return this.__PROXY__.setLabelText(...args);
            
        };
    
        // function 
        QFileDialog.prototype.labelText = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.labelText");
          
              return this.__PROXY__.labelText(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setSupportedSchemes = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setSupportedSchemes");
          
              return this.__PROXY__.setSupportedSchemes(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setOption = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setOption");
          
              return this.__PROXY__.setOption(...args);
            
        };
    
        // function 
        QFileDialog.prototype.testOption = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.testOption");
          
              return this.__PROXY__.testOption(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setOptions = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setOptions");
          
              return this.__PROXY__.setOptions(...args);
            
        };
    
        // function 
        QFileDialog.prototype.open = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.open");
          
              return this.__PROXY__.open(...args);
            
        };
    
        // function 
        QFileDialog.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QFileDialog.prototype.getOpenFileName = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.getOpenFileName");
          
              return this.__PROXY__.getOpenFileName(...args);
            
        };
    
        // function 
        QFileDialog.prototype.getOpenFileUrl = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.getOpenFileUrl");
          
              return this.__PROXY__.getOpenFileUrl(...args);
            
        };
    
        // function 
        QFileDialog.prototype.getSaveFileName = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.getSaveFileName");
          
              return this.__PROXY__.getSaveFileName(...args);
            
        };
    
        // function 
        QFileDialog.prototype.getSaveFileUrl = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.getSaveFileUrl");
          
              return this.__PROXY__.getSaveFileUrl(...args);
            
        };
    
        // function 
        QFileDialog.prototype.getExistingDirectory = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.getExistingDirectory");
          
              return this.__PROXY__.getExistingDirectory(...args);
            
        };
    
        // function 
        QFileDialog.prototype.getExistingDirectoryUrl = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.getExistingDirectoryUrl");
          
              return this.__PROXY__.getExistingDirectoryUrl(...args);
            
        };
    
        // function 
        QFileDialog.prototype.getOpenFileNames = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.getOpenFileNames");
          
              return this.__PROXY__.getOpenFileNames(...args);
            
        };
    
        // function 
        QFileDialog.prototype.getOpenFileUrls = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.getOpenFileUrls");
          
              return this.__PROXY__.getOpenFileUrls(...args);
            
        };
    
        // function 
        QFileDialog.prototype.saveFileContent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.saveFileContent");
          
              return this.__PROXY__.saveFileContent(...args);
            
        };
    
        // function 
        QFileDialog.prototype.done = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.done");
          
              return this.__PROXY__.done(...args);
            
        };
    
        // function 
        QFileDialog.prototype.accept = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.accept");
          
              return this.__PROXY__.accept(...args);
            
        };
    
        // function 
        QFileDialog.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QFileDialog.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    

      // static functions:
      

        // static function 
        QFileDialog.getOpenFileName = function() 
          
        {
          //print("JS: QFileDialog.getOpenFileName");
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.getOpenFileName(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.getOpenFileName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.getOpenFileUrl = function() 
          
        {
          //print("JS: QFileDialog.getOpenFileUrl");
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.getOpenFileUrl(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.getOpenFileUrl(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.getSaveFileName = function() 
          
        {
          //print("JS: QFileDialog.getSaveFileName");
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.getSaveFileName(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.getSaveFileName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.getSaveFileUrl = function() 
          
        {
          //print("JS: QFileDialog.getSaveFileUrl");
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.getSaveFileUrl(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.getSaveFileUrl(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.getExistingDirectory = function() 
          
        {
          //print("JS: QFileDialog.getExistingDirectory");
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.getExistingDirectory(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.getExistingDirectory(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.getExistingDirectoryUrl = function() 
          
        {
          //print("JS: QFileDialog.getExistingDirectoryUrl");
          
      if (arguments.length >= 0 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.getExistingDirectoryUrl(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.getExistingDirectoryUrl(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.getOpenFileNames = function() 
          
        {
          //print("JS: QFileDialog.getOpenFileNames");
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.getOpenFileNames(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.getOpenFileNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.getOpenFileUrls = function() 
          
        {
          //print("JS: QFileDialog.getOpenFileUrls");
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.getOpenFileUrls(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.getOpenFileUrls(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.saveFileContent = function() 
          
        {
          //print("JS: QFileDialog.saveFileContent");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.saveFileContent(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.saveFileContent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(QFileDialog.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'fileMode', {
              get: function() {
                  
                      return this.__PROXY__.fileMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFileMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'acceptMode', {
              get: function() {
                  
                      return this.__PROXY__.acceptMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'defaultSuffix', {
              get: function() {
                  
                      return this.__PROXY__.defaultSuffix;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultSuffix(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'options', {
              get: function() {
                  
                      return this.__PROXY__.options;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOptions(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileDialog.prototype, 'supportedSchemes', {
              get: function() {
                  
                      return this.__PROXY__.supportedSchemes;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSupportedSchemes(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QFileDialog.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QFileDialog.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QFileDialog.prototype, 'finished', {
            get: function() { return this.__PROXY__.finished; },
            configurable: true
        });
        
          Object.defineProperty(QFileDialog.prototype, 'finished(int)', {
              get: function() { return this.__PROXY__.finished; },
              configurable: true
          });
        
        Object.defineProperty(QFileDialog.prototype, 'accepted', {
            get: function() { return this.__PROXY__.accepted; },
            configurable: true
        });
        
        Object.defineProperty(QFileDialog.prototype, 'rejected', {
            get: function() { return this.__PROXY__.rejected; },
            configurable: true
        });
        
        Object.defineProperty(QFileDialog.prototype, 'fileSelected', {
            get: function() { return this.__PROXY__.fileSelected; },
            configurable: true
        });
        
          Object.defineProperty(QFileDialog.prototype, 'fileSelected(QString)', {
              get: function() { return this.__PROXY__.fileSelected; },
              configurable: true
          });
        
        Object.defineProperty(QFileDialog.prototype, 'filesSelected', {
            get: function() { return this.__PROXY__.filesSelected; },
            configurable: true
        });
        
          Object.defineProperty(QFileDialog.prototype, 'filesSelected(QStringList)', {
              get: function() { return this.__PROXY__.filesSelected; },
              configurable: true
          });
        
        Object.defineProperty(QFileDialog.prototype, 'currentChanged', {
            get: function() { return this.__PROXY__.currentChanged; },
            configurable: true
        });
        
          Object.defineProperty(QFileDialog.prototype, 'currentChanged(QString)', {
              get: function() { return this.__PROXY__.currentChanged; },
              configurable: true
          });
        
        Object.defineProperty(QFileDialog.prototype, 'directoryEntered', {
            get: function() { return this.__PROXY__.directoryEntered; },
            configurable: true
        });
        
          Object.defineProperty(QFileDialog.prototype, 'directoryEntered(QString)', {
              get: function() { return this.__PROXY__.directoryEntered; },
              configurable: true
          });
        
        Object.defineProperty(QFileDialog.prototype, 'urlSelected', {
            get: function() { return this.__PROXY__.urlSelected; },
            configurable: true
        });
        
          Object.defineProperty(QFileDialog.prototype, 'urlSelected(QUrl)', {
              get: function() { return this.__PROXY__.urlSelected; },
              configurable: true
          });
        
        Object.defineProperty(QFileDialog.prototype, 'urlsSelected', {
            get: function() { return this.__PROXY__.urlsSelected; },
            configurable: true
        });
        
          Object.defineProperty(QFileDialog.prototype, 'urlsSelected(QList<QUrl>)', {
              get: function() { return this.__PROXY__.urlsSelected; },
              configurable: true
          });
        
        Object.defineProperty(QFileDialog.prototype, 'currentUrlChanged', {
            get: function() { return this.__PROXY__.currentUrlChanged; },
            configurable: true
        });
        
          Object.defineProperty(QFileDialog.prototype, 'currentUrlChanged(QUrl)', {
              get: function() { return this.__PROXY__.currentUrlChanged; },
              configurable: true
          });
        
        Object.defineProperty(QFileDialog.prototype, 'directoryUrlEntered', {
            get: function() { return this.__PROXY__.directoryUrlEntered; },
            configurable: true
        });
        
          Object.defineProperty(QFileDialog.prototype, 'directoryUrlEntered(QUrl)', {
              get: function() { return this.__PROXY__.directoryUrlEntered; },
              configurable: true
          });
        
        Object.defineProperty(QFileDialog.prototype, 'filterSelected', {
            get: function() { return this.__PROXY__.filterSelected; },
            configurable: true
        });
        
          Object.defineProperty(QFileDialog.prototype, 'filterSelected(QString)', {
              get: function() { return this.__PROXY__.filterSelected; },
              configurable: true
          });
        QFileDialog.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QFileDialog.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QFileDialog.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFileDialog.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFileDialog.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QFileDialog.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      