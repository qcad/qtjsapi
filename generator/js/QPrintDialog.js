
      // auto generated
      //var self;

      // class constructor:
      function QPrintDialog() {
        

        // should be QPrintDialog_BaseJs.call(this, engine):
        //QPrintDialog.prototype = new QPrintDialog_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPrintDialog.getIdStatic()))) {

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
            qWarning("QPrintDialog.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QPrintDialog_Wrapper(
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

      

        //copyProperties(this, wrapper, QPrintDialog);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QPrintDialog_Wrapper(
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

      

        //copyProperties(this, wrapper, QPrintDialog);
  }

  
  else {
    
        print("QPrintDialog(): wrong number / type of arguments");
      
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

      //QPrintDialog.prototype = new QPrintDialog_BaseJs(engine);
      //QPrintDialog.prototype = new QPrintDialog_Wrapper(engine);
      QPrintDialog.prototype = new Object();


      QPrintDialog.prototype.toString = function() {
          //return "QPrintDialog [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPrintDialog [JS]";
        };
      QPrintDialog.getObjectType = function() {
        return RJSType_QPrintDialog.getIdStatic();
      };

      QPrintDialog.prototype.getObjectType = function() {
        return RJSType_QPrintDialog.getIdStatic();
      };

      QPrintDialog.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPrintDialog.getIdStatic()) {
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
        
          if (t===RJSType_QAbstractPrintDialog.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: DialogCode
QPrintDialog.Rejected = QPrintDialog_Wrapper.Rejected;
QPrintDialog.Accepted = QPrintDialog_Wrapper.Accepted;

  // enum: PrintRange
QPrintDialog.AllPages = QPrintDialog_Wrapper.AllPages;
QPrintDialog.Selection = QPrintDialog_Wrapper.Selection;
QPrintDialog.PageRange = QPrintDialog_Wrapper.PageRange;
QPrintDialog.CurrentPage = QPrintDialog_Wrapper.CurrentPage;

  // enum: PrintDialogOption
QPrintDialog.PrintToFile = QPrintDialog_Wrapper.PrintToFile;
QPrintDialog.PrintSelection = QPrintDialog_Wrapper.PrintSelection;
QPrintDialog.PrintPageRange = QPrintDialog_Wrapper.PrintPageRange;
QPrintDialog.PrintShowPageSize = QPrintDialog_Wrapper.PrintShowPageSize;
QPrintDialog.PrintCollateCopies = QPrintDialog_Wrapper.PrintCollateCopies;
QPrintDialog.PrintCurrentPage = QPrintDialog_Wrapper.PrintCurrentPage;


      // functions:
      
        // function 
        QPrintDialog.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.findChild = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.children = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.property = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.parent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.devType = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isModal = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.window = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setFont = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setMask = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.mask = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.grab = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.update = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.repaint = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.show = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.hide = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.close = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.raise = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.lower = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.move = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.resize = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.windowState = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.layout = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setParent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.scroll = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.addAction = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.addActions = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.actions = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.windowType = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.childAt = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.event = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
      // function 
      QPrintDialog.prototype.actionEvent = function() 
        
      {
        //print("JS: QPrintDialog.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QPrintDialog);
  }

  
  else {
    
        print("QPrintDialog.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QPrintDialog.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.metric = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.redirected = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.create = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.destroy = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.result = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.result");
          
              return this.__PROXY__.result(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setSizeGripEnabled");
          
              return this.__PROXY__.setSizeGripEnabled(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.isSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.isSizeGripEnabled");
          
              return this.__PROXY__.isSizeGripEnabled(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setModal = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setModal");
          
              return this.__PROXY__.setModal(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setResult = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setResult");
          
              return this.__PROXY__.setResult(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.reject = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.reject");
          
              return this.__PROXY__.reject(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.adjustPosition = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.adjustPosition");
          
              return this.__PROXY__.adjustPosition(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setOptionTabs = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setOptionTabs");
          
              return this.__PROXY__.setOptionTabs(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setPrintRange = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setPrintRange");
          
              return this.__PROXY__.setPrintRange(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.printRange = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.printRange");
          
              return this.__PROXY__.printRange(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setMinMax = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setMinMax");
          
              return this.__PROXY__.setMinMax(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.minPage = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.minPage");
          
              return this.__PROXY__.minPage(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.maxPage = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.maxPage");
          
              return this.__PROXY__.maxPage(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setFromTo = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setFromTo");
          
              return this.__PROXY__.setFromTo(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.fromPage = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.fromPage");
          
              return this.__PROXY__.fromPage(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.toPage = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.toPage");
          
              return this.__PROXY__.toPage(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.exec = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.exec");
          
              return this.__PROXY__.exec(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.accept = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.accept");
          
              return this.__PROXY__.accept(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.done = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.done");
          
              return this.__PROXY__.done(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setOption = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setOption");
          
              return this.__PROXY__.setOption(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.testOption = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.testOption");
          
              return this.__PROXY__.testOption(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setOptions = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setOptions");
          
              return this.__PROXY__.setOptions(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.open = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.open");
          
              return this.__PROXY__.open(...args);
            
        };
    
        // function 
        QPrintDialog.prototype.printer = function(...args) 
          
        {
          //print("JS: QPrintDialog.prototype.printer");
          
              return this.__PROXY__.printer(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QPrintDialog.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPrintDialog.prototype, 'options', {
              get: function() {
                  
                      return this.__PROXY__.options;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOptions(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QPrintDialog.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QPrintDialog.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QPrintDialog.prototype, 'finished', {
            get: function() { return this.__PROXY__.finished; },
            configurable: true
        });
        
          Object.defineProperty(QPrintDialog.prototype, 'finished(int)', {
              get: function() { return this.__PROXY__.finished; },
              configurable: true
          });
        
        Object.defineProperty(QPrintDialog.prototype, 'rejected', {
            get: function() { return this.__PROXY__.rejected; },
            configurable: true
        });
        
        Object.defineProperty(QPrintDialog.prototype, 'accepted', {
            get: function() { return this.__PROXY__.accepted; },
            configurable: true
        });
        
          Object.defineProperty(QPrintDialog.prototype, 'accepted(QPrinter*)', {
              get: function() { return this.__PROXY__.accepted; },
              configurable: true
          });
        QPrintDialog.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QPrintDialog.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QPrintDialog.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPrintDialog.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPrintDialog.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QPrintDialog.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      