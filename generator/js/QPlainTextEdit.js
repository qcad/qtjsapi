
      // auto generated
      //var self;

      // class constructor:
      function QPlainTextEdit() {
        

        // should be QPlainTextEdit_BaseJs.call(this, engine):
        //QPlainTextEdit.prototype = new QPlainTextEdit_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPlainTextEdit.getIdStatic()))) {

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
            qWarning("QPlainTextEdit.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QPlainTextEdit_Wrapper(
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

      

        //copyProperties(this, wrapper, QPlainTextEdit);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QPlainTextEdit_Wrapper(
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

      

        //copyProperties(this, wrapper, QPlainTextEdit);
  }

  
  else {
    
        print("QPlainTextEdit(): wrong number / type of arguments");
      
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

      //QPlainTextEdit.prototype = new QPlainTextEdit_BaseJs(engine);
      //QPlainTextEdit.prototype = new QPlainTextEdit_Wrapper(engine);
      QPlainTextEdit.prototype = new Object();


      QPlainTextEdit.prototype.toString = function() {
          //return "QPlainTextEdit [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPlainTextEdit [JS]";
        };
      QPlainTextEdit.getObjectType = function() {
        return RJSType_QPlainTextEdit.getIdStatic();
      };

      QPlainTextEdit.prototype.getObjectType = function() {
        return RJSType_QPlainTextEdit.getIdStatic();
      };

      QPlainTextEdit.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPlainTextEdit.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractScrollArea.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QPlainTextEdit.NoFrame = QPlainTextEdit_Wrapper.NoFrame;
QPlainTextEdit.Box = QPlainTextEdit_Wrapper.Box;
QPlainTextEdit.Panel = QPlainTextEdit_Wrapper.Panel;
QPlainTextEdit.WinPanel = QPlainTextEdit_Wrapper.WinPanel;
QPlainTextEdit.HLine = QPlainTextEdit_Wrapper.HLine;
QPlainTextEdit.VLine = QPlainTextEdit_Wrapper.VLine;
QPlainTextEdit.StyledPanel = QPlainTextEdit_Wrapper.StyledPanel;

  // enum: Shadow
QPlainTextEdit.Plain = QPlainTextEdit_Wrapper.Plain;
QPlainTextEdit.Raised = QPlainTextEdit_Wrapper.Raised;
QPlainTextEdit.Sunken = QPlainTextEdit_Wrapper.Sunken;

  // enum: StyleMask
QPlainTextEdit.Shadow_Mask = QPlainTextEdit_Wrapper.Shadow_Mask;
QPlainTextEdit.Shape_Mask = QPlainTextEdit_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QPlainTextEdit.AdjustIgnored = QPlainTextEdit_Wrapper.AdjustIgnored;
QPlainTextEdit.AdjustToContentsOnFirstShow = QPlainTextEdit_Wrapper.AdjustToContentsOnFirstShow;
QPlainTextEdit.AdjustToContents = QPlainTextEdit_Wrapper.AdjustToContents;

  // enum: LineWrapMode
QPlainTextEdit.NoWrap = QPlainTextEdit_Wrapper.NoWrap;
QPlainTextEdit.WidgetWidth = QPlainTextEdit_Wrapper.WidgetWidth;


      // functions:
      
        // function 
        QPlainTextEdit.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.findChild = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.children = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.property = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.parent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.devType = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isModal = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.window = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setFont = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setMask = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.mask = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.grab = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.update = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.repaint = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.show = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.hide = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.close = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.raise = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.lower = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.move = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.resize = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.windowState = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.layout = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setParent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.scroll = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.addAction = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.addActions = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.actions = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.windowType = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.childAt = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.metric = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.redirected = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.create = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.destroy = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.viewport = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setViewport = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setDocument = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setDocument");
          
              return this.__PROXY__.setDocument(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.document = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.document");
          
              return this.__PROXY__.document(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setPlaceholderText = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setPlaceholderText");
          
              return this.__PROXY__.setPlaceholderText(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setTextCursor = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setTextCursor");
          
              return this.__PROXY__.setTextCursor(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.textCursor = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.textCursor");
          
              return this.__PROXY__.textCursor(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isReadOnly = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isReadOnly");
          
              return this.__PROXY__.isReadOnly(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setReadOnly = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setReadOnly");
          
              return this.__PROXY__.setReadOnly(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setTextInteractionFlags = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setTextInteractionFlags");
          
              return this.__PROXY__.setTextInteractionFlags(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.mergeCurrentCharFormat = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.mergeCurrentCharFormat");
          
              return this.__PROXY__.mergeCurrentCharFormat(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setCurrentCharFormat = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setCurrentCharFormat");
          
              return this.__PROXY__.setCurrentCharFormat(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.currentCharFormat = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.currentCharFormat");
          
              return this.__PROXY__.currentCharFormat(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setTabChangesFocus = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setTabChangesFocus");
          
              return this.__PROXY__.setTabChangesFocus(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setDocumentTitle = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setDocumentTitle");
          
              return this.__PROXY__.setDocumentTitle(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.isUndoRedoEnabled = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.isUndoRedoEnabled");
          
              return this.__PROXY__.isUndoRedoEnabled(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setUndoRedoEnabled = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setUndoRedoEnabled");
          
              return this.__PROXY__.setUndoRedoEnabled(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setMaximumBlockCount = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setMaximumBlockCount");
          
              return this.__PROXY__.setMaximumBlockCount(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setLineWrapMode = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setLineWrapMode");
          
              return this.__PROXY__.setLineWrapMode(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.wordWrapMode = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.wordWrapMode");
          
              return this.__PROXY__.wordWrapMode(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setWordWrapMode = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setWordWrapMode");
          
              return this.__PROXY__.setWordWrapMode(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setBackgroundVisible = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setBackgroundVisible");
          
              return this.__PROXY__.setBackgroundVisible(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setCenterOnScroll = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setCenterOnScroll");
          
              return this.__PROXY__.setCenterOnScroll(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.find = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.find");
          
              return this.__PROXY__.find(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.toPlainText = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.toPlainText");
          
              return this.__PROXY__.toPlainText(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.ensureCursorVisible = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.ensureCursorVisible");
          
              return this.__PROXY__.ensureCursorVisible(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.loadResource = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.loadResource");
          
              return this.__PROXY__.loadResource(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.createStandardContextMenu = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.createStandardContextMenu");
          
              return this.__PROXY__.createStandardContextMenu(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.cursorForPosition = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.cursorForPosition");
          
              return this.__PROXY__.cursorForPosition(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.cursorRect = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.cursorRect");
          
              return this.__PROXY__.cursorRect(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.anchorAt = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.anchorAt");
          
              return this.__PROXY__.anchorAt(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setOverwriteMode = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setOverwriteMode");
          
              return this.__PROXY__.setOverwriteMode(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setTabStopDistance = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setTabStopDistance");
          
              return this.__PROXY__.setTabStopDistance(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setCursorWidth = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setCursorWidth");
          
              return this.__PROXY__.setCursorWidth(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.moveCursor = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.moveCursor");
          
              return this.__PROXY__.moveCursor(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.canPaste = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.canPaste");
          
              return this.__PROXY__.canPaste(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.print = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.print");
          
              return this.__PROXY__.print(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.setPlainText = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.setPlainText");
          
              return this.__PROXY__.setPlainText(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.cut = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.cut");
          
              return this.__PROXY__.cut(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.copy = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.copy");
          
              return this.__PROXY__.copy(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.paste = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.paste");
          
              return this.__PROXY__.paste(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.undo = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.undo");
          
              return this.__PROXY__.undo(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.redo = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.redo");
          
              return this.__PROXY__.redo(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.clear = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.insertPlainText = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.insertPlainText");
          
              return this.__PROXY__.insertPlainText(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.appendPlainText = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.appendPlainText");
          
              return this.__PROXY__.appendPlainText(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.appendHtml = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.appendHtml");
          
              return this.__PROXY__.appendHtml(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.centerCursor = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.centerCursor");
          
              return this.__PROXY__.centerCursor(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.zoomIn = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.zoomIn");
          
              return this.__PROXY__.zoomIn(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.zoomOut = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.zoomOut");
          
              return this.__PROXY__.zoomOut(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.event = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.timerEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.timerEvent");
          
              return this.__PROXY__.timerEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.createMimeDataFromSelection = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.createMimeDataFromSelection");
          
              return this.__PROXY__.createMimeDataFromSelection(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.canInsertFromMimeData = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.canInsertFromMimeData");
          
              return this.__PROXY__.canInsertFromMimeData(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.insertFromMimeData = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.insertFromMimeData");
          
              return this.__PROXY__.insertFromMimeData(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBy(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.doSetTextCursor = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.doSetTextCursor");
          
              return this.__PROXY__.doSetTextCursor(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.firstVisibleBlock = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.firstVisibleBlock");
          
              return this.__PROXY__.firstVisibleBlock(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.contentOffset = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.contentOffset");
          
              return this.__PROXY__.contentOffset(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.blockBoundingRect = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.blockBoundingRect");
          
              return this.__PROXY__.blockBoundingRect(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.blockBoundingGeometry = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.blockBoundingGeometry");
          
              return this.__PROXY__.blockBoundingGeometry(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.getPaintContext = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.getPaintContext");
          
              return this.__PROXY__.getPaintContext(...args);
            
        };
    
        // function 
        QPlainTextEdit.prototype.zoomInF = function(...args) 
          
        {
          //print("JS: QPlainTextEdit.prototype.zoomInF");
          
              return this.__PROXY__.zoomInF(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QPlainTextEdit.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'tabChangesFocus', {
              get: function() {
                  
                      return this.__PROXY__.tabChangesFocus;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabChangesFocus(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'documentTitle', {
              get: function() {
                  
                      return this.__PROXY__.documentTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDocumentTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'undoRedoEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isUndoRedoEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUndoRedoEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'lineWrapMode', {
              get: function() {
                  
                      return this.__PROXY__.lineWrapMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWrapMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'readOnly', {
              get: function() {
                  
                      return this.__PROXY__.isReadOnly();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setReadOnly(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'plainText', {
              get: function() {
                  
                      return this.__PROXY__.toPlainText();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlainText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'overwriteMode', {
              get: function() {
                  
                      return this.__PROXY__.overwriteMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOverwriteMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'tabStopDistance', {
              get: function() {
                  
                      return this.__PROXY__.tabStopDistance;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabStopDistance(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'cursorWidth', {
              get: function() {
                  
                      return this.__PROXY__.cursorWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursorWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'textInteractionFlags', {
              get: function() {
                  
                      return this.__PROXY__.textInteractionFlags;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextInteractionFlags(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'blockCount', {
              get: function() {
                  
                      return this.__PROXY__.blockCount;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'maximumBlockCount', {
              get: function() {
                  
                      return this.__PROXY__.maximumBlockCount;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumBlockCount(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'backgroundVisible', {
              get: function() {
                  
                      return this.__PROXY__.backgroundVisible;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBackgroundVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'centerOnScroll', {
              get: function() {
                  
                      return this.__PROXY__.centerOnScroll;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCenterOnScroll(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'placeholderText', {
              get: function() {
                  
                      return this.__PROXY__.placeholderText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlaceholderText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QPlainTextEdit.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QPlainTextEdit.prototype, 'textChanged', {
            get: function() { return this.__PROXY__.textChanged; },
            configurable: true
        });
        
        Object.defineProperty(QPlainTextEdit.prototype, 'undoAvailable', {
            get: function() { return this.__PROXY__.undoAvailable; },
            configurable: true
        });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'undoAvailable(bool)', {
              get: function() { return this.__PROXY__.undoAvailable; },
              configurable: true
          });
        
        Object.defineProperty(QPlainTextEdit.prototype, 'redoAvailable', {
            get: function() { return this.__PROXY__.redoAvailable; },
            configurable: true
        });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'redoAvailable(bool)', {
              get: function() { return this.__PROXY__.redoAvailable; },
              configurable: true
          });
        
        Object.defineProperty(QPlainTextEdit.prototype, 'copyAvailable', {
            get: function() { return this.__PROXY__.copyAvailable; },
            configurable: true
        });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'copyAvailable(bool)', {
              get: function() { return this.__PROXY__.copyAvailable; },
              configurable: true
          });
        
        Object.defineProperty(QPlainTextEdit.prototype, 'selectionChanged', {
            get: function() { return this.__PROXY__.selectionChanged; },
            configurable: true
        });
        
        Object.defineProperty(QPlainTextEdit.prototype, 'cursorPositionChanged', {
            get: function() { return this.__PROXY__.cursorPositionChanged; },
            configurable: true
        });
        
        Object.defineProperty(QPlainTextEdit.prototype, 'updateRequest', {
            get: function() { return this.__PROXY__.updateRequest; },
            configurable: true
        });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'updateRequest(QRect,int)', {
              get: function() { return this.__PROXY__.updateRequest; },
              configurable: true
          });
        
        Object.defineProperty(QPlainTextEdit.prototype, 'blockCountChanged', {
            get: function() { return this.__PROXY__.blockCountChanged; },
            configurable: true
        });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'blockCountChanged(int)', {
              get: function() { return this.__PROXY__.blockCountChanged; },
              configurable: true
          });
        
        Object.defineProperty(QPlainTextEdit.prototype, 'modificationChanged', {
            get: function() { return this.__PROXY__.modificationChanged; },
            configurable: true
        });
        
          Object.defineProperty(QPlainTextEdit.prototype, 'modificationChanged(bool)', {
              get: function() { return this.__PROXY__.modificationChanged; },
              configurable: true
          });
        QPlainTextEdit.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QPlainTextEdit.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QPlainTextEdit.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPlainTextEdit.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPlainTextEdit.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QPlainTextEdit.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      