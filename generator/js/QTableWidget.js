
      // auto generated
      //var self;

      // class constructor:
      function QTableWidget() {
        

        // should be QTableWidget_BaseJs.call(this, engine):
        //QTableWidget.prototype = new QTableWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTableWidget.getIdStatic()))) {

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
            qWarning("QTableWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QTableWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTableWidget);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTableWidget_Wrapper(
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

      

        //copyProperties(this, wrapper, QTableWidget);
  }

  
  else {
    
        print("QTableWidget(): wrong number / type of arguments");
      
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

      //QTableWidget.prototype = new QTableWidget_BaseJs(engine);
      //QTableWidget.prototype = new QTableWidget_Wrapper(engine);
      QTableWidget.prototype = new Object();


      QTableWidget.prototype.toString = function() {
          //return "QTableWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTableWidget [JS]";
        };
      QTableWidget.getObjectType = function() {
        return RJSType_QTableWidget.getIdStatic();
      };

      QTableWidget.prototype.getObjectType = function() {
        return RJSType_QTableWidget.getIdStatic();
      };

      QTableWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTableWidget.getIdStatic()) {
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
        
          if (t===RJSType_QAbstractItemView.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QTableView.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QTableWidget.NoFrame = QTableWidget_Wrapper.NoFrame;
QTableWidget.Box = QTableWidget_Wrapper.Box;
QTableWidget.Panel = QTableWidget_Wrapper.Panel;
QTableWidget.WinPanel = QTableWidget_Wrapper.WinPanel;
QTableWidget.HLine = QTableWidget_Wrapper.HLine;
QTableWidget.VLine = QTableWidget_Wrapper.VLine;
QTableWidget.StyledPanel = QTableWidget_Wrapper.StyledPanel;

  // enum: Shadow
QTableWidget.Plain = QTableWidget_Wrapper.Plain;
QTableWidget.Raised = QTableWidget_Wrapper.Raised;
QTableWidget.Sunken = QTableWidget_Wrapper.Sunken;

  // enum: StyleMask
QTableWidget.Shadow_Mask = QTableWidget_Wrapper.Shadow_Mask;
QTableWidget.Shape_Mask = QTableWidget_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QTableWidget.AdjustIgnored = QTableWidget_Wrapper.AdjustIgnored;
QTableWidget.AdjustToContentsOnFirstShow = QTableWidget_Wrapper.AdjustToContentsOnFirstShow;
QTableWidget.AdjustToContents = QTableWidget_Wrapper.AdjustToContents;

  // enum: SelectionMode
QTableWidget.NoSelection = QTableWidget_Wrapper.NoSelection;
QTableWidget.SingleSelection = QTableWidget_Wrapper.SingleSelection;
QTableWidget.MultiSelection = QTableWidget_Wrapper.MultiSelection;
QTableWidget.ExtendedSelection = QTableWidget_Wrapper.ExtendedSelection;
QTableWidget.ContiguousSelection = QTableWidget_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
QTableWidget.SelectItems = QTableWidget_Wrapper.SelectItems;
QTableWidget.SelectRows = QTableWidget_Wrapper.SelectRows;
QTableWidget.SelectColumns = QTableWidget_Wrapper.SelectColumns;

  // enum: ScrollHint
QTableWidget.EnsureVisible = QTableWidget_Wrapper.EnsureVisible;
QTableWidget.PositionAtTop = QTableWidget_Wrapper.PositionAtTop;
QTableWidget.PositionAtBottom = QTableWidget_Wrapper.PositionAtBottom;
QTableWidget.PositionAtCenter = QTableWidget_Wrapper.PositionAtCenter;

  // enum: EditTrigger
QTableWidget.NoEditTriggers = QTableWidget_Wrapper.NoEditTriggers;
QTableWidget.CurrentChanged = QTableWidget_Wrapper.CurrentChanged;
QTableWidget.DoubleClicked = QTableWidget_Wrapper.DoubleClicked;
QTableWidget.SelectedClicked = QTableWidget_Wrapper.SelectedClicked;
QTableWidget.EditKeyPressed = QTableWidget_Wrapper.EditKeyPressed;
QTableWidget.AnyKeyPressed = QTableWidget_Wrapper.AnyKeyPressed;
QTableWidget.AllEditTriggers = QTableWidget_Wrapper.AllEditTriggers;

  // enum: ScrollMode
QTableWidget.ScrollPerItem = QTableWidget_Wrapper.ScrollPerItem;
QTableWidget.ScrollPerPixel = QTableWidget_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
QTableWidget.NoDragDrop = QTableWidget_Wrapper.NoDragDrop;
QTableWidget.DragOnly = QTableWidget_Wrapper.DragOnly;
QTableWidget.DropOnly = QTableWidget_Wrapper.DropOnly;
QTableWidget.DragDrop = QTableWidget_Wrapper.DragDrop;
QTableWidget.InternalMove = QTableWidget_Wrapper.InternalMove;


      // functions:
      
        // function 
        QTableWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QTableWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QTableWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QTableWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QTableWidget.prototype.children = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QTableWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QTableWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QTableWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QTableWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QTableWidget.prototype.property = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QTableWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QTableWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QTableWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QTableWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QTableWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QTableWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QTableWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QTableWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QTableWidget.prototype.window = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QTableWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QTableWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QTableWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QTableWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QTableWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QTableWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QTableWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QTableWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QTableWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QTableWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QTableWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QTableWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QTableWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QTableWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QTableWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QTableWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QTableWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QTableWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QTableWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QTableWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QTableWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QTableWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QTableWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QTableWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QTableWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QTableWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QTableWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QTableWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QTableWidget.prototype.show = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QTableWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QTableWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QTableWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QTableWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QTableWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QTableWidget.prototype.close = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QTableWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QTableWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QTableWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QTableWidget.prototype.move = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QTableWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QTableWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QTableWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QTableWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QTableWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QTableWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QTableWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QTableWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QTableWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QTableWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QTableWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QTableWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QTableWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QTableWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QTableWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QTableWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QTableWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QTableWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QTableWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QTableWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QTableWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QTableWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QTableWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QTableWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QTableWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QTableWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QTableWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QTableWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QTableWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QTableWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
      // function 
      QTableWidget.prototype.actionEvent = function() 
        
      {
        //print("JS: QTableWidget.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QTableWidget);
  }

  
  else {
    
        print("QTableWidget.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QTableWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QTableWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QTableWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QTableWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QTableWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QTableWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QTableWidget.prototype.create = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QTableWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QTableWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QTableWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QTableWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QTableWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QTableWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QTableWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QTableWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QTableWidget.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
    
        // function 
        QTableWidget.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
    
        // function 
        QTableWidget.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        QTableWidget.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
    
        // function 
        QTableWidget.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
    
        // function 
        QTableWidget.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        QTableWidget.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
    
        // function 
        QTableWidget.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
    
        // function 
        QTableWidget.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
    
        // function 
        QTableWidget.prototype.viewport = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setViewport = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
    
        // function 
        QTableWidget.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
    
        // function 
        QTableWidget.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setViewportMargins = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setViewportMargins");
          
              return this.__PROXY__.setViewportMarginsSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.viewportMargins = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.viewportMargins");
          
              return this.__PROXY__.viewportMarginsSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.event = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.event");
          
              return this.__PROXY__.eventSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.viewportEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.viewportEvent");
          
              return this.__PROXY__.viewportEventSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEventSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEventSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEventSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEventSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.model = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
    
        // function 
        QTableWidget.prototype.selectionModel = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.selectionModel");
          
              return this.__PROXY__.selectionModel(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setItemDelegate = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setItemDelegate");
          
              return this.__PROXY__.setItemDelegate(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setSelectionMode = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setSelectionMode");
          
              return this.__PROXY__.setSelectionMode(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setSelectionBehavior = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setSelectionBehavior");
          
              return this.__PROXY__.setSelectionBehavior(...args);
            
        };
    
        // function 
        QTableWidget.prototype.currentIndex = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.currentIndex");
          
              return this.__PROXY__.currentIndex(...args);
            
        };
    
        // function 
        QTableWidget.prototype.rootIndex = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.rootIndex");
          
              return this.__PROXY__.rootIndex(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setEditTriggers = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setEditTriggers");
          
              return this.__PROXY__.setEditTriggers(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setVerticalScrollMode");
          
              return this.__PROXY__.setVerticalScrollMode(...args);
            
        };
    
        // function 
        QTableWidget.prototype.resetVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.resetVerticalScrollMode");
          
              return this.__PROXY__.resetVerticalScrollMode(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setHorizontalScrollMode");
          
              return this.__PROXY__.setHorizontalScrollMode(...args);
            
        };
    
        // function 
        QTableWidget.prototype.resetHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.resetHorizontalScrollMode");
          
              return this.__PROXY__.resetHorizontalScrollMode(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setAutoScroll = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setAutoScroll");
          
              return this.__PROXY__.setAutoScroll(...args);
            
        };
    
        // function 
        QTableWidget.prototype.hasAutoScroll = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.hasAutoScroll");
          
              return this.__PROXY__.hasAutoScroll(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setAutoScrollMargin = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setAutoScrollMargin");
          
              return this.__PROXY__.setAutoScrollMargin(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setTabKeyNavigation = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setTabKeyNavigation");
          
              return this.__PROXY__.setTabKeyNavigation(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setDropIndicatorShown = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setDropIndicatorShown");
          
              return this.__PROXY__.setDropIndicatorShown(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setDragEnabled");
          
              return this.__PROXY__.setDragEnabled(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setDragDropOverwriteMode = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setDragDropOverwriteMode");
          
              return this.__PROXY__.setDragDropOverwriteMode(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setDragDropMode = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setDragDropMode");
          
              return this.__PROXY__.setDragDropMode(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setDefaultDropAction = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setDefaultDropAction");
          
              return this.__PROXY__.setDefaultDropAction(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setAlternatingRowColors = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setAlternatingRowColors");
          
              return this.__PROXY__.setAlternatingRowColors(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setTextElideMode = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setTextElideMode");
          
              return this.__PROXY__.setTextElideMode(...args);
            
        };
    
        // function 
        QTableWidget.prototype.keyboardSearch = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.keyboardSearch");
          
              return this.__PROXY__.keyboardSearch(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setIndexWidget = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setIndexWidget");
          
              return this.__PROXY__.setIndexWidget(...args);
            
        };
    
        // function 
        QTableWidget.prototype.indexWidget = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.indexWidget");
          
              return this.__PROXY__.indexWidget(...args);
            
        };
    
        // function 
        QTableWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QTableWidget.prototype.reset = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
    
        // function 
        QTableWidget.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
    
        // function 
        QTableWidget.prototype.edit = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.edit");
          
              return this.__PROXY__.edit(...args);
            
        };
    
        // function 
        QTableWidget.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.clearSelection");
          
              return this.__PROXY__.clearSelection(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
    
        // function 
        QTableWidget.prototype.scrollToTop = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.scrollToTop");
          
              return this.__PROXY__.scrollToTop(...args);
            
        };
    
        // function 
        QTableWidget.prototype.scrollToBottom = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.scrollToBottom");
          
              return this.__PROXY__.scrollToBottom(...args);
            
        };
    
        // function 
        QTableWidget.prototype.update = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QTableWidget.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setRootIndex = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setRootIndex");
          
              return this.__PROXY__.setRootIndex(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setSelectionModel = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setSelectionModel");
          
              return this.__PROXY__.setSelectionModel(...args);
            
        };
    
        // function 
        QTableWidget.prototype.doItemsLayout = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.doItemsLayout");
          
              return this.__PROXY__.doItemsLayout(...args);
            
        };
    
        // function 
        QTableWidget.prototype.horizontalHeader = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.horizontalHeader");
          
              return this.__PROXY__.horizontalHeader(...args);
            
        };
    
        // function 
        QTableWidget.prototype.verticalHeader = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.verticalHeader");
          
              return this.__PROXY__.verticalHeader(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setHorizontalHeader = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setHorizontalHeader");
          
              return this.__PROXY__.setHorizontalHeader(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setVerticalHeader = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setVerticalHeader");
          
              return this.__PROXY__.setVerticalHeader(...args);
            
        };
    
        // function 
        QTableWidget.prototype.rowViewportPosition = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.rowViewportPosition");
          
              return this.__PROXY__.rowViewportPosition(...args);
            
        };
    
        // function 
        QTableWidget.prototype.rowAt = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.rowAt");
          
              return this.__PROXY__.rowAt(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setRowHeight = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setRowHeight");
          
              return this.__PROXY__.setRowHeight(...args);
            
        };
    
        // function 
        QTableWidget.prototype.rowHeight = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.rowHeight");
          
              return this.__PROXY__.rowHeight(...args);
            
        };
    
        // function 
        QTableWidget.prototype.columnViewportPosition = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.columnViewportPosition");
          
              return this.__PROXY__.columnViewportPosition(...args);
            
        };
    
        // function 
        QTableWidget.prototype.columnAt = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.columnAt");
          
              return this.__PROXY__.columnAt(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setColumnWidth = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setColumnWidth");
          
              return this.__PROXY__.setColumnWidth(...args);
            
        };
    
        // function 
        QTableWidget.prototype.columnWidth = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.columnWidth");
          
              return this.__PROXY__.columnWidth(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isRowHidden = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isRowHidden");
          
              return this.__PROXY__.isRowHidden(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setRowHidden = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setRowHidden");
          
              return this.__PROXY__.setRowHidden(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isColumnHidden = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isColumnHidden");
          
              return this.__PROXY__.isColumnHidden(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setColumnHidden = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setColumnHidden");
          
              return this.__PROXY__.setColumnHidden(...args);
            
        };
    
        // function 
        QTableWidget.prototype.showGrid = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.showGrid");
          
              return this.__PROXY__.showGrid(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setGridStyle = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setGridStyle");
          
              return this.__PROXY__.setGridStyle(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setWordWrap = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setWordWrap");
          
              return this.__PROXY__.setWordWrap(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setCornerButtonEnabled = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setCornerButtonEnabled");
          
              return this.__PROXY__.setCornerButtonEnabled(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isCornerButtonEnabled = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isCornerButtonEnabled");
          
              return this.__PROXY__.isCornerButtonEnabled(...args);
            
        };
    
        // function 
        QTableWidget.prototype.visualRect = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.visualRect");
          
              return this.__PROXY__.visualRect(...args);
            
        };
    
        // function 
        QTableWidget.prototype.scrollTo = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.scrollTo");
          
              return this.__PROXY__.scrollTo(...args);
            
        };
    
        // function 
        QTableWidget.prototype.indexAt = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.indexAt");
          
              return this.__PROXY__.indexAt(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setSpan = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setSpan");
          
              return this.__PROXY__.setSpan(...args);
            
        };
    
        // function 
        QTableWidget.prototype.rowSpan = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.rowSpan");
          
              return this.__PROXY__.rowSpan(...args);
            
        };
    
        // function 
        QTableWidget.prototype.columnSpan = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.columnSpan");
          
              return this.__PROXY__.columnSpan(...args);
            
        };
    
        // function 
        QTableWidget.prototype.clearSpans = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.clearSpans");
          
              return this.__PROXY__.clearSpans(...args);
            
        };
    
        // function 
        QTableWidget.prototype.selectRow = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.selectRow");
          
              return this.__PROXY__.selectRow(...args);
            
        };
    
        // function 
        QTableWidget.prototype.selectColumn = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.selectColumn");
          
              return this.__PROXY__.selectColumn(...args);
            
        };
    
        // function 
        QTableWidget.prototype.hideRow = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.hideRow");
          
              return this.__PROXY__.hideRow(...args);
            
        };
    
        // function 
        QTableWidget.prototype.hideColumn = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.hideColumn");
          
              return this.__PROXY__.hideColumn(...args);
            
        };
    
        // function 
        QTableWidget.prototype.showRow = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.showRow");
          
              return this.__PROXY__.showRow(...args);
            
        };
    
        // function 
        QTableWidget.prototype.showColumn = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.showColumn");
          
              return this.__PROXY__.showColumn(...args);
            
        };
    
        // function 
        QTableWidget.prototype.resizeRowToContents = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.resizeRowToContents");
          
              return this.__PROXY__.resizeRowToContents(...args);
            
        };
    
        // function 
        QTableWidget.prototype.resizeRowsToContents = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.resizeRowsToContents");
          
              return this.__PROXY__.resizeRowsToContents(...args);
            
        };
    
        // function 
        QTableWidget.prototype.resizeColumnToContents = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.resizeColumnToContents");
          
              return this.__PROXY__.resizeColumnToContents(...args);
            
        };
    
        // function 
        QTableWidget.prototype.resizeColumnsToContents = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.resizeColumnsToContents");
          
              return this.__PROXY__.resizeColumnsToContents(...args);
            
        };
    
        // function 
        QTableWidget.prototype.sortByColumn = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.sortByColumn");
          
              return this.__PROXY__.sortByColumn(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setShowGrid = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setShowGrid");
          
              return this.__PROXY__.setShowGrid(...args);
            
        };
    
        // function 
        QTableWidget.prototype.rowMoved = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.rowMoved");
          
              return this.__PROXY__.rowMovedSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.columnMoved = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.columnMoved");
          
              return this.__PROXY__.columnMovedSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.rowResized = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.rowResized");
          
              return this.__PROXY__.rowResizedSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.columnResized = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.columnResized");
          
              return this.__PROXY__.columnResizedSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.rowCountChanged = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.rowCountChanged");
          
              return this.__PROXY__.rowCountChangedSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.columnCountChanged = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.columnCountChanged");
          
              return this.__PROXY__.columnCountChangedSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBySuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.horizontalOffset = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.horizontalOffset");
          
              return this.__PROXY__.horizontalOffsetSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.verticalOffset = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.verticalOffset");
          
              return this.__PROXY__.verticalOffsetSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setSelection = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setSelection");
          
              return this.__PROXY__.setSelectionSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.visualRegionForSelection = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.visualRegionForSelection");
          
              return this.__PROXY__.visualRegionForSelectionSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.updateGeometries = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.updateGeometries");
          
              return this.__PROXY__.updateGeometriesSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.viewportSizeHint = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.viewportSizeHint");
          
              return this.__PROXY__.viewportSizeHintSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.verticalScrollbarAction = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.verticalScrollbarAction");
          
              return this.__PROXY__.verticalScrollbarActionSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.horizontalScrollbarAction = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.horizontalScrollbarAction");
          
              return this.__PROXY__.horizontalScrollbarActionSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isIndexHidden = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isIndexHidden");
          
              return this.__PROXY__.isIndexHiddenSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.selectionChanged = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.selectionChanged");
          
              return this.__PROXY__.selectionChangedSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.currentChanged = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.currentChanged");
          
              return this.__PROXY__.currentChangedSuper(...args);
            
        };
    
        // function 
        QTableWidget.prototype.visualIndex = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.visualIndex");
          
              return this.__PROXY__.visualIndex(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setRowCount = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setRowCount");
          
              return this.__PROXY__.setRowCount(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setColumnCount = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setColumnCount");
          
              return this.__PROXY__.setColumnCount(...args);
            
        };
    
        // function 
        QTableWidget.prototype.row = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.row");
          
              return this.__PROXY__.row(...args);
            
        };
    
        // function 
        QTableWidget.prototype.column = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.column");
          
              return this.__PROXY__.column(...args);
            
        };
    
        // function 
        QTableWidget.prototype.item = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.item");
          
              return this.__PROXY__.item(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setItem = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setItem");
          
              return this.__PROXY__.setItem(...args);
            
        };
    
        // function 
        QTableWidget.prototype.takeItem = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.takeItem");
          
              return this.__PROXY__.takeItem(...args);
            
        };
    
        // function 
        QTableWidget.prototype.indexFromItem = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.indexFromItem");
          
              return this.__PROXY__.indexFromItem(...args);
            
        };
    
        // function 
        QTableWidget.prototype.itemFromIndex = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.itemFromIndex");
          
              return this.__PROXY__.itemFromIndex(...args);
            
        };
    
        // function 
        QTableWidget.prototype.verticalHeaderItem = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.verticalHeaderItem");
          
              return this.__PROXY__.verticalHeaderItem(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setVerticalHeaderItem = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setVerticalHeaderItem");
          
              return this.__PROXY__.setVerticalHeaderItem(...args);
            
        };
    
        // function 
        QTableWidget.prototype.takeVerticalHeaderItem = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.takeVerticalHeaderItem");
          
              return this.__PROXY__.takeVerticalHeaderItem(...args);
            
        };
    
        // function 
        QTableWidget.prototype.horizontalHeaderItem = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.horizontalHeaderItem");
          
              return this.__PROXY__.horizontalHeaderItem(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setHorizontalHeaderItem = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setHorizontalHeaderItem");
          
              return this.__PROXY__.setHorizontalHeaderItem(...args);
            
        };
    
        // function 
        QTableWidget.prototype.takeHorizontalHeaderItem = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.takeHorizontalHeaderItem");
          
              return this.__PROXY__.takeHorizontalHeaderItem(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setVerticalHeaderLabels = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setVerticalHeaderLabels");
          
              return this.__PROXY__.setVerticalHeaderLabels(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setHorizontalHeaderLabels = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setHorizontalHeaderLabels");
          
              return this.__PROXY__.setHorizontalHeaderLabels(...args);
            
        };
    
        // function 
        QTableWidget.prototype.currentRow = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.currentRow");
          
              return this.__PROXY__.currentRow(...args);
            
        };
    
        // function 
        QTableWidget.prototype.currentColumn = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.currentColumn");
          
              return this.__PROXY__.currentColumn(...args);
            
        };
    
        // function 
        QTableWidget.prototype.currentItem = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.currentItem");
          
              return this.__PROXY__.currentItem(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setCurrentItem = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setCurrentItem");
          
              return this.__PROXY__.setCurrentItem(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setCurrentCell = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setCurrentCell");
          
              return this.__PROXY__.setCurrentCell(...args);
            
        };
    
        // function 
        QTableWidget.prototype.sortItems = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.sortItems");
          
              return this.__PROXY__.sortItems(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setSortingEnabled = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setSortingEnabled");
          
              return this.__PROXY__.setSortingEnabled(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isSortingEnabled = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isSortingEnabled");
          
              return this.__PROXY__.isSortingEnabled(...args);
            
        };
    
        // function 
        QTableWidget.prototype.editItem = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.editItem");
          
              return this.__PROXY__.editItem(...args);
            
        };
    
        // function 
        QTableWidget.prototype.openPersistentEditor = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.openPersistentEditor");
          
              return this.__PROXY__.openPersistentEditor(...args);
            
        };
    
        // function 
        QTableWidget.prototype.closePersistentEditor = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.closePersistentEditor");
          
              return this.__PROXY__.closePersistentEditor(...args);
            
        };
    
        // function 
        QTableWidget.prototype.isPersistentEditorOpen = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.isPersistentEditorOpen");
          
              return this.__PROXY__.isPersistentEditorOpen(...args);
            
        };
    
        // function 
        QTableWidget.prototype.cellWidget = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.cellWidget");
          
              return this.__PROXY__.cellWidget(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setCellWidget = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setCellWidget");
          
              return this.__PROXY__.setCellWidget(...args);
            
        };
    
        // function 
        QTableWidget.prototype.removeCellWidget = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.removeCellWidget");
          
              return this.__PROXY__.removeCellWidget(...args);
            
        };
    
        // function 
        QTableWidget.prototype.selectedItems = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.selectedItems");
          
              return this.__PROXY__.selectedItems(...args);
            
        };
    
        // function 
        QTableWidget.prototype.visualRow = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.visualRow");
          
              return this.__PROXY__.visualRow(...args);
            
        };
    
        // function 
        QTableWidget.prototype.visualColumn = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.visualColumn");
          
              return this.__PROXY__.visualColumn(...args);
            
        };
    
        // function 
        QTableWidget.prototype.itemAt = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.itemAt");
          
              return this.__PROXY__.itemAt(...args);
            
        };
    
        // function 
        QTableWidget.prototype.visualItemRect = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.visualItemRect");
          
              return this.__PROXY__.visualItemRect(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setItemPrototype = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setItemPrototype");
          
              return this.__PROXY__.setItemPrototype(...args);
            
        };
    
        // function 
        QTableWidget.prototype.scrollToItem = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.scrollToItem");
          
              return this.__PROXY__.scrollToItem(...args);
            
        };
    
        // function 
        QTableWidget.prototype.insertRow = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.insertRow");
          
              return this.__PROXY__.insertRow(...args);
            
        };
    
        // function 
        QTableWidget.prototype.insertColumn = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.insertColumn");
          
              return this.__PROXY__.insertColumn(...args);
            
        };
    
        // function 
        QTableWidget.prototype.removeRow = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.removeRow");
          
              return this.__PROXY__.removeRow(...args);
            
        };
    
        // function 
        QTableWidget.prototype.removeColumn = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.removeColumn");
          
              return this.__PROXY__.removeColumn(...args);
            
        };
    
        // function 
        QTableWidget.prototype.clear = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QTableWidget.prototype.clearContents = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.clearContents");
          
              return this.__PROXY__.clearContents(...args);
            
        };
    
        // function 
        QTableWidget.prototype.setModel = function(...args) 
          
        {
          //print("JS: QTableWidget.prototype.setModel");
          
              return this.__PROXY__.setModel(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QTableWidget.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'autoScrollMargin', {
              get: function() {
                  
                      return this.__PROXY__.autoScrollMargin;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoScrollMargin(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'editTriggers', {
              get: function() {
                  
                      return this.__PROXY__.editTriggers;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditTriggers(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'tabKeyNavigation', {
              get: function() {
                  
                      return this.__PROXY__.tabKeyNavigation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabKeyNavigation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'showDropIndicator', {
              get: function() {
                  
                      return this.__PROXY__.showDropIndicator;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDropIndicatorShown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'dragEnabled', {
              get: function() {
                  
                      return this.__PROXY__.dragEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'dragDropOverwriteMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropOverwriteMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropOverwriteMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'dragDropMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'defaultDropAction', {
              get: function() {
                  
                      return this.__PROXY__.defaultDropAction;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultDropAction(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'alternatingRowColors', {
              get: function() {
                  
                      return this.__PROXY__.alternatingRowColors;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlternatingRowColors(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'selectionMode', {
              get: function() {
                  
                      return this.__PROXY__.selectionMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'selectionBehavior', {
              get: function() {
                  
                      return this.__PROXY__.selectionBehavior;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionBehavior(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'textElideMode', {
              get: function() {
                  
                      return this.__PROXY__.textElideMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextElideMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'verticalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.verticalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVerticalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'horizontalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.horizontalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHorizontalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'gridStyle', {
              get: function() {
                  
                      return this.__PROXY__.gridStyle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGridStyle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'sortingEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isSortingEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSortingEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'wordWrap', {
              get: function() {
                  
                      return this.__PROXY__.wordWrap;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWordWrap(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'cornerButtonEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isCornerButtonEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCornerButtonEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'columnCount', {
              get: function() {
                  
                      return this.__PROXY__.columnCount;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setColumnCount(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableWidget.prototype, 'rowCount', {
              get: function() {
                  
                      return this.__PROXY__.rowCount;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setRowCount(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'pressed(QModelIndex)', {
              get: function() { return this.__PROXY__.pressed; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'clicked(QModelIndex)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'doubleClicked', {
            get: function() { return this.__PROXY__.doubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'doubleClicked(QModelIndex)', {
              get: function() { return this.__PROXY__.doubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'activated(QModelIndex)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'entered', {
            get: function() { return this.__PROXY__.entered; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'entered(QModelIndex)', {
              get: function() { return this.__PROXY__.entered; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'viewportEntered', {
            get: function() { return this.__PROXY__.viewportEntered; },
            configurable: true
        });
        
        Object.defineProperty(QTableWidget.prototype, 'iconSizeChanged', {
            get: function() { return this.__PROXY__.iconSizeChanged; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'iconSizeChanged(QSize)', {
              get: function() { return this.__PROXY__.iconSizeChanged; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'itemPressed', {
            get: function() { return this.__PROXY__.itemPressed; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'itemPressed(QTableWidgetItem*)', {
              get: function() { return this.__PROXY__.itemPressed; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'itemClicked', {
            get: function() { return this.__PROXY__.itemClicked; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'itemClicked(QTableWidgetItem*)', {
              get: function() { return this.__PROXY__.itemClicked; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'itemDoubleClicked', {
            get: function() { return this.__PROXY__.itemDoubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'itemDoubleClicked(QTableWidgetItem*)', {
              get: function() { return this.__PROXY__.itemDoubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'itemActivated', {
            get: function() { return this.__PROXY__.itemActivated; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'itemActivated(QTableWidgetItem*)', {
              get: function() { return this.__PROXY__.itemActivated; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'itemEntered', {
            get: function() { return this.__PROXY__.itemEntered; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'itemEntered(QTableWidgetItem*)', {
              get: function() { return this.__PROXY__.itemEntered; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'itemChanged', {
            get: function() { return this.__PROXY__.itemChanged; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'itemChanged(QTableWidgetItem*)', {
              get: function() { return this.__PROXY__.itemChanged; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'currentItemChanged', {
            get: function() { return this.__PROXY__.currentItemChanged; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'currentItemChanged(QTableWidgetItem*,QTableWidgetItem*)', {
              get: function() { return this.__PROXY__.currentItemChanged; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'itemSelectionChanged', {
            get: function() { return this.__PROXY__.itemSelectionChanged; },
            configurable: true
        });
        
        Object.defineProperty(QTableWidget.prototype, 'cellPressed', {
            get: function() { return this.__PROXY__.cellPressed; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'cellPressed(int,int)', {
              get: function() { return this.__PROXY__.cellPressed; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'cellClicked', {
            get: function() { return this.__PROXY__.cellClicked; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'cellClicked(int,int)', {
              get: function() { return this.__PROXY__.cellClicked; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'cellDoubleClicked', {
            get: function() { return this.__PROXY__.cellDoubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'cellDoubleClicked(int,int)', {
              get: function() { return this.__PROXY__.cellDoubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'cellActivated', {
            get: function() { return this.__PROXY__.cellActivated; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'cellActivated(int,int)', {
              get: function() { return this.__PROXY__.cellActivated; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'cellEntered', {
            get: function() { return this.__PROXY__.cellEntered; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'cellEntered(int,int)', {
              get: function() { return this.__PROXY__.cellEntered; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'cellChanged', {
            get: function() { return this.__PROXY__.cellChanged; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'cellChanged(int,int)', {
              get: function() { return this.__PROXY__.cellChanged; },
              configurable: true
          });
        
        Object.defineProperty(QTableWidget.prototype, 'currentCellChanged', {
            get: function() { return this.__PROXY__.currentCellChanged; },
            configurable: true
        });
        
          Object.defineProperty(QTableWidget.prototype, 'currentCellChanged(int,int,int,int)', {
              get: function() { return this.__PROXY__.currentCellChanged; },
              configurable: true
          });
        QTableWidget.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTableWidget.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTableWidget.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTableWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTableWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTableWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      