
      // auto generated
      //var self;

      // class constructor:
      function QAbstractPrintDialog() {
        

        // should be QAbstractPrintDialog_BaseJs.call(this, engine):
        //QAbstractPrintDialog.prototype = new QAbstractPrintDialog_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractPrintDialog.getIdStatic()))) {

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
            qWarning("QAbstractPrintDialog.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QAbstractPrintDialog_Wrapper(
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

      

        //copyProperties(this, wrapper, QAbstractPrintDialog);
  }

  
  else {
    
        print("QAbstractPrintDialog(): wrong number / type of arguments");
      
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

      //QAbstractPrintDialog.prototype = new QAbstractPrintDialog_BaseJs(engine);
      //QAbstractPrintDialog.prototype = new QAbstractPrintDialog_Wrapper(engine);
      QAbstractPrintDialog.prototype = new Object();


      QAbstractPrintDialog.prototype.toString = function() {
          //return "QAbstractPrintDialog [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractPrintDialog [JS]";
        };
      QAbstractPrintDialog.getObjectType = function() {
        return RJSType_QAbstractPrintDialog.getIdStatic();
      };

      QAbstractPrintDialog.prototype.getObjectType = function() {
        return RJSType_QAbstractPrintDialog.getIdStatic();
      };

      QAbstractPrintDialog.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractPrintDialog.getIdStatic()) {
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
QAbstractPrintDialog.Rejected = QAbstractPrintDialog_Wrapper.Rejected;
QAbstractPrintDialog.Accepted = QAbstractPrintDialog_Wrapper.Accepted;

  // enum: PrintRange
QAbstractPrintDialog.AllPages = QAbstractPrintDialog_Wrapper.AllPages;
QAbstractPrintDialog.Selection = QAbstractPrintDialog_Wrapper.Selection;
QAbstractPrintDialog.PageRange = QAbstractPrintDialog_Wrapper.PageRange;
QAbstractPrintDialog.CurrentPage = QAbstractPrintDialog_Wrapper.CurrentPage;

  // enum: PrintDialogOption
QAbstractPrintDialog.PrintToFile = QAbstractPrintDialog_Wrapper.PrintToFile;
QAbstractPrintDialog.PrintSelection = QAbstractPrintDialog_Wrapper.PrintSelection;
QAbstractPrintDialog.PrintPageRange = QAbstractPrintDialog_Wrapper.PrintPageRange;
QAbstractPrintDialog.PrintShowPageSize = QAbstractPrintDialog_Wrapper.PrintShowPageSize;
QAbstractPrintDialog.PrintCollateCopies = QAbstractPrintDialog_Wrapper.PrintCollateCopies;
QAbstractPrintDialog.PrintCurrentPage = QAbstractPrintDialog_Wrapper.PrintCurrentPage;


      // functions:
      
        // function 
        QAbstractPrintDialog.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.findChild = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.children = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.property = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.parent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.devType = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isModal = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.window = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setFont = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setMask = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.mask = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.grab = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.update = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.repaint = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.show = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.hide = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.close = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.raise = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.lower = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.move = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.resize = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.windowState = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.layout = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setParent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.scroll = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.addAction = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.addActions = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.actions = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.windowType = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.childAt = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.event = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
      // function 
      QAbstractPrintDialog.prototype.actionEvent = function() 
        
      {
        //print("JS: QAbstractPrintDialog.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QAbstractPrintDialog);
  }

  
  else {
    
        print("QAbstractPrintDialog.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QAbstractPrintDialog.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.metric = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.redirected = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.create = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.destroy = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.result = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.result");
          
              return this.__PROXY__.result(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setSizeGripEnabled");
          
              return this.__PROXY__.setSizeGripEnabled(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.isSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.isSizeGripEnabled");
          
              return this.__PROXY__.isSizeGripEnabled(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setModal = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setModal");
          
              return this.__PROXY__.setModal(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setResult = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setResult");
          
              return this.__PROXY__.setResult(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.open = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.open");
          
              return this.__PROXY__.open(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.exec = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.exec");
          
              return this.__PROXY__.exec(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.done = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.done");
          
              return this.__PROXY__.done(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.accept = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.accept");
          
              return this.__PROXY__.accept(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.reject = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.reject");
          
              return this.__PROXY__.reject(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.adjustPosition = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.adjustPosition");
          
              return this.__PROXY__.adjustPosition(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setOptionTabs = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setOptionTabs");
          
              return this.__PROXY__.setOptionTabs(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setPrintRange = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setPrintRange");
          
              return this.__PROXY__.setPrintRange(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.printRange = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.printRange");
          
              return this.__PROXY__.printRange(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setMinMax = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setMinMax");
          
              return this.__PROXY__.setMinMax(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.minPage = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.minPage");
          
              return this.__PROXY__.minPage(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.maxPage = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.maxPage");
          
              return this.__PROXY__.maxPage(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.setFromTo = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.setFromTo");
          
              return this.__PROXY__.setFromTo(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.fromPage = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.fromPage");
          
              return this.__PROXY__.fromPage(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.toPage = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.toPage");
          
              return this.__PROXY__.toPage(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.printer = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.printer");
          
              return this.__PROXY__.printer(...args);
            
        };
    
        // function 
        QAbstractPrintDialog.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QAbstractPrintDialog.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QAbstractPrintDialog.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractPrintDialog.prototype, 'finished', {
            get: function() { return this.__PROXY__.finished; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractPrintDialog.prototype, 'finished(int)', {
              get: function() { return this.__PROXY__.finished; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractPrintDialog.prototype, 'accepted', {
            get: function() { return this.__PROXY__.accepted; },
            configurable: true
        });
        
        Object.defineProperty(QAbstractPrintDialog.prototype, 'rejected', {
            get: function() { return this.__PROXY__.rejected; },
            configurable: true
        });
        QAbstractPrintDialog.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QAbstractPrintDialog.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QAbstractPrintDialog.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractPrintDialog.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractPrintDialog.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QAbstractPrintDialog.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      