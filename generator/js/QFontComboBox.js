
      // auto generated
      //var self;

      // class constructor:
      function QFontComboBox() {
        

        // should be QFontComboBox_BaseJs.call(this, engine):
        //QFontComboBox.prototype = new QFontComboBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFontComboBox.getIdStatic()))) {

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
            qWarning("QFontComboBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QFontComboBox_Wrapper(
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

      

        //copyProperties(this, wrapper, QFontComboBox);
  }

  
  else {
    
        print("QFontComboBox(): wrong number / type of arguments");
      
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

      //QFontComboBox.prototype = new QFontComboBox_BaseJs(engine);
      //QFontComboBox.prototype = new QFontComboBox_Wrapper(engine);
      QFontComboBox.prototype = new Object();


      QFontComboBox.prototype.toString = function() {
          //return "QFontComboBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFontComboBox [JS]";
        };
      QFontComboBox.getObjectType = function() {
        return RJSType_QFontComboBox.getIdStatic();
      };

      QFontComboBox.prototype.getObjectType = function() {
        return RJSType_QFontComboBox.getIdStatic();
      };

      QFontComboBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFontComboBox.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QComboBox.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: InsertPolicy
QFontComboBox.NoInsert = QFontComboBox_Wrapper.NoInsert;
QFontComboBox.InsertAtTop = QFontComboBox_Wrapper.InsertAtTop;
QFontComboBox.InsertAtCurrent = QFontComboBox_Wrapper.InsertAtCurrent;
QFontComboBox.InsertAtBottom = QFontComboBox_Wrapper.InsertAtBottom;
QFontComboBox.InsertAfterCurrent = QFontComboBox_Wrapper.InsertAfterCurrent;
QFontComboBox.InsertBeforeCurrent = QFontComboBox_Wrapper.InsertBeforeCurrent;
QFontComboBox.InsertAlphabetically = QFontComboBox_Wrapper.InsertAlphabetically;

  // enum: SizeAdjustPolicy
QFontComboBox.AdjustToContents = QFontComboBox_Wrapper.AdjustToContents;
QFontComboBox.AdjustToContentsOnFirstShow = QFontComboBox_Wrapper.AdjustToContentsOnFirstShow;
QFontComboBox.AdjustToMinimumContentsLengthWithIcon = QFontComboBox_Wrapper.AdjustToMinimumContentsLengthWithIcon;

  // enum: FontFilter
QFontComboBox.AllFonts = QFontComboBox_Wrapper.AllFonts;
QFontComboBox.ScalableFonts = QFontComboBox_Wrapper.ScalableFonts;
QFontComboBox.NonScalableFonts = QFontComboBox_Wrapper.NonScalableFonts;
QFontComboBox.MonospacedFonts = QFontComboBox_Wrapper.MonospacedFonts;
QFontComboBox.ProportionalFonts = QFontComboBox_Wrapper.ProportionalFonts;


      // functions:
      
        // function 
        QFontComboBox.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.findChild = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.children = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.property = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.parent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.devType = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isModal = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.window = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setFont = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setMask = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.mask = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.grab = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.update = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.repaint = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.show = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.hide = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.close = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.raise = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.lower = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.move = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.resize = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.windowState = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.layout = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setParent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.scroll = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.addAction = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.addActions = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.actions = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.windowType = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.childAt = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.event = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.metric = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.redirected = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.create = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.destroy = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setMaxVisibleItems = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setMaxVisibleItems");
          
              return this.__PROXY__.setMaxVisibleItems(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setMaxCount = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setMaxCount");
          
              return this.__PROXY__.setMaxCount(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setDuplicatesEnabled = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setDuplicatesEnabled");
          
              return this.__PROXY__.setDuplicatesEnabled(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setFrame = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setFrame");
          
              return this.__PROXY__.setFrame(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.hasFrame = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.hasFrame");
          
              return this.__PROXY__.hasFrame(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.findText = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.findText");
          
              return this.__PROXY__.findText(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.findData = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.findData");
          
              return this.__PROXY__.findData(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setInsertPolicy = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setInsertPolicy");
          
              return this.__PROXY__.setInsertPolicy(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setMinimumContentsLength = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setMinimumContentsLength");
          
              return this.__PROXY__.setMinimumContentsLength(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setPlaceholderText = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setPlaceholderText");
          
              return this.__PROXY__.setPlaceholderText(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.isEditable = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.isEditable");
          
              return this.__PROXY__.isEditable(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setEditable = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setEditable");
          
              return this.__PROXY__.setEditable(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setLineEdit = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setLineEdit");
          
              return this.__PROXY__.setLineEdit(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.lineEdit = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.lineEdit");
          
              return this.__PROXY__.lineEdit(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setValidator = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setValidator");
          
              return this.__PROXY__.setValidator(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setCompleter = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setCompleter");
          
              return this.__PROXY__.setCompleter(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.completer = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.completer");
          
              return this.__PROXY__.completer(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.model = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setModelColumn = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setModelColumn");
          
              return this.__PROXY__.setModelColumn(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.itemText = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.itemText");
          
              return this.__PROXY__.itemText(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.itemIcon = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.itemIcon");
          
              return this.__PROXY__.itemIcon(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.itemData = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.itemData");
          
              return this.__PROXY__.itemData(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.addItem = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.addItem");
          
              return this.__PROXY__.addItem(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.addItems = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.addItems");
          
              return this.__PROXY__.addItems(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.insertItem = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.insertItem");
          
              return this.__PROXY__.insertItem(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.insertItems = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.insertItems");
          
              return this.__PROXY__.insertItems(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.insertSeparator = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.insertSeparator");
          
              return this.__PROXY__.insertSeparator(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.removeItem = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.removeItem");
          
              return this.__PROXY__.removeItem(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setItemText = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setItemText");
          
              return this.__PROXY__.setItemText(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setItemIcon = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setItemIcon");
          
              return this.__PROXY__.setItemIcon(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setItemData = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setItemData");
          
              return this.__PROXY__.setItemData(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.view = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.view");
          
              return this.__PROXY__.view(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.showPopup = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.showPopup");
          
              return this.__PROXY__.showPopup(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.hidePopup = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.hidePopup");
          
              return this.__PROXY__.hidePopup(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.clear = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.clearEditText = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.clearEditText");
          
              return this.__PROXY__.clearEditText(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setEditText = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setEditText");
          
              return this.__PROXY__.setEditText(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setCurrentText = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setCurrentText");
          
              return this.__PROXY__.setCurrentText(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setWritingSystem = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setWritingSystem");
          
              return this.__PROXY__.setWritingSystem(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.writingSystem = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.writingSystem");
          
              return this.__PROXY__.writingSystem(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setFontFilters = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setFontFilters");
          
              return this.__PROXY__.setFontFilters(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.fontFilters = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.fontFilters");
          
              return this.__PROXY__.fontFilters(...args);
            
        };
        
        // function 
        QFontComboBox.prototype.setCurrentFont = function(...args) 
          
        {
          //print("JS: QFontComboBox.prototype.setCurrentFont");
          
              return this.__PROXY__.setCurrentFont(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QFontComboBox.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'count', {
              get: function() {
                  
                      return this.__PROXY__.count;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'currentData', {
              get: function() {
                  
                      return this.__PROXY__.currentData;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'currentIndex', {
              get: function() {
                  
                      return this.__PROXY__.currentIndex;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentIndex(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'currentText', {
              get: function() {
                  
                      return this.__PROXY__.currentText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'duplicatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.duplicatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDuplicatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'editable', {
              get: function() {
                  
                      return this.__PROXY__.isEditable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'frame', {
              get: function() {
                  
                      return this.__PROXY__.hasFrame();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrame(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'insertPolicy', {
              get: function() {
                  
                      return this.__PROXY__.insertPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInsertPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'maxCount', {
              get: function() {
                  
                      return this.__PROXY__.maxCount;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxCount(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'maxVisibleItems', {
              get: function() {
                  
                      return this.__PROXY__.maxVisibleItems;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxVisibleItems(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'minimumContentsLength', {
              get: function() {
                  
                      return this.__PROXY__.minimumContentsLength;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumContentsLength(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'modelColumn', {
              get: function() {
                  
                      return this.__PROXY__.modelColumn;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModelColumn(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'placeholderText', {
              get: function() {
                  
                      return this.__PROXY__.placeholderText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlaceholderText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'sizeAdjustPolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizeAdjustPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeAdjustPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFontComboBox.prototype, 'currentFont', {
              get: function() {
                  
                      return this.__PROXY__.currentFont;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QFontComboBox.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QFontComboBox.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QFontComboBox.prototype, 'editTextChanged', {
            get: function() { return this.__PROXY__.editTextChanged; },
            configurable: true
        });
        
          Object.defineProperty(QFontComboBox.prototype, 'editTextChanged(QString)', {
              get: function() { return this.__PROXY__.editTextChanged; },
              configurable: true
          });
        
        Object.defineProperty(QFontComboBox.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(QFontComboBox.prototype, 'activated(int)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(QFontComboBox.prototype, 'textActivated', {
            get: function() { return this.__PROXY__.textActivated; },
            configurable: true
        });
        
          Object.defineProperty(QFontComboBox.prototype, 'textActivated(QString)', {
              get: function() { return this.__PROXY__.textActivated; },
              configurable: true
          });
        
        Object.defineProperty(QFontComboBox.prototype, 'highlighted', {
            get: function() { return this.__PROXY__.highlighted; },
            configurable: true
        });
        
          Object.defineProperty(QFontComboBox.prototype, 'highlighted(int)', {
              get: function() { return this.__PROXY__.highlighted; },
              configurable: true
          });
        
        Object.defineProperty(QFontComboBox.prototype, 'textHighlighted', {
            get: function() { return this.__PROXY__.textHighlighted; },
            configurable: true
        });
        
          Object.defineProperty(QFontComboBox.prototype, 'textHighlighted(QString)', {
              get: function() { return this.__PROXY__.textHighlighted; },
              configurable: true
          });
        
        Object.defineProperty(QFontComboBox.prototype, 'currentIndexChanged', {
            get: function() { return this.__PROXY__.currentIndexChanged; },
            configurable: true
        });
        
          Object.defineProperty(QFontComboBox.prototype, 'currentIndexChanged(int)', {
              get: function() { return this.__PROXY__.currentIndexChanged; },
              configurable: true
          });
        
        Object.defineProperty(QFontComboBox.prototype, 'currentTextChanged', {
            get: function() { return this.__PROXY__.currentTextChanged; },
            configurable: true
        });
        
          Object.defineProperty(QFontComboBox.prototype, 'currentTextChanged(QString)', {
              get: function() { return this.__PROXY__.currentTextChanged; },
              configurable: true
          });
        
        Object.defineProperty(QFontComboBox.prototype, 'currentFontChanged', {
            get: function() { return this.__PROXY__.currentFontChanged; },
            configurable: true
        });
        
          Object.defineProperty(QFontComboBox.prototype, 'currentFontChanged(QFont)', {
              get: function() { return this.__PROXY__.currentFontChanged; },
              configurable: true
          });
        QFontComboBox.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QFontComboBox.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QFontComboBox.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFontComboBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFontComboBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QFontComboBox.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      