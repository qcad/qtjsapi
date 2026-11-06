
      // auto generated
      //var self;

      // class constructor:
      function QListWidget() {
        

        // should be QListWidget_BaseJs.call(this, engine):
        //QListWidget.prototype = new QListWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QListWidget.getIdStatic()))) {

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
            qWarning("QListWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QListWidget.js: No constructor found for class QListWidget");
            
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

      //QListWidget.prototype = new QListWidget_BaseJs(engine);
      //QListWidget.prototype = new QListWidget_Wrapper(engine);
      QListWidget.prototype = new Object();


      QListWidget.prototype.toString = function() {
          //return "QListWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QListWidget [JS]";
        };
      QListWidget.getObjectType = function() {
        return RJSType_QListWidget.getIdStatic();
      };

      QListWidget.prototype.getObjectType = function() {
        return RJSType_QListWidget.getIdStatic();
      };

      QListWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QListWidget.getIdStatic()) {
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
        
          if (t===RJSType_QListView.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QListWidget.NoFrame = QListWidget_Wrapper.NoFrame;
QListWidget.Box = QListWidget_Wrapper.Box;
QListWidget.Panel = QListWidget_Wrapper.Panel;
QListWidget.WinPanel = QListWidget_Wrapper.WinPanel;
QListWidget.HLine = QListWidget_Wrapper.HLine;
QListWidget.VLine = QListWidget_Wrapper.VLine;
QListWidget.StyledPanel = QListWidget_Wrapper.StyledPanel;

  // enum: Shadow
QListWidget.Plain = QListWidget_Wrapper.Plain;
QListWidget.Raised = QListWidget_Wrapper.Raised;
QListWidget.Sunken = QListWidget_Wrapper.Sunken;

  // enum: StyleMask
QListWidget.Shadow_Mask = QListWidget_Wrapper.Shadow_Mask;
QListWidget.Shape_Mask = QListWidget_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QListWidget.AdjustIgnored = QListWidget_Wrapper.AdjustIgnored;
QListWidget.AdjustToContentsOnFirstShow = QListWidget_Wrapper.AdjustToContentsOnFirstShow;
QListWidget.AdjustToContents = QListWidget_Wrapper.AdjustToContents;

  // enum: SelectionMode
QListWidget.NoSelection = QListWidget_Wrapper.NoSelection;
QListWidget.SingleSelection = QListWidget_Wrapper.SingleSelection;
QListWidget.MultiSelection = QListWidget_Wrapper.MultiSelection;
QListWidget.ExtendedSelection = QListWidget_Wrapper.ExtendedSelection;
QListWidget.ContiguousSelection = QListWidget_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
QListWidget.SelectItems = QListWidget_Wrapper.SelectItems;
QListWidget.SelectRows = QListWidget_Wrapper.SelectRows;
QListWidget.SelectColumns = QListWidget_Wrapper.SelectColumns;

  // enum: ScrollHint
QListWidget.EnsureVisible = QListWidget_Wrapper.EnsureVisible;
QListWidget.PositionAtTop = QListWidget_Wrapper.PositionAtTop;
QListWidget.PositionAtBottom = QListWidget_Wrapper.PositionAtBottom;
QListWidget.PositionAtCenter = QListWidget_Wrapper.PositionAtCenter;

  // enum: EditTrigger
QListWidget.NoEditTriggers = QListWidget_Wrapper.NoEditTriggers;
QListWidget.CurrentChanged = QListWidget_Wrapper.CurrentChanged;
QListWidget.DoubleClicked = QListWidget_Wrapper.DoubleClicked;
QListWidget.SelectedClicked = QListWidget_Wrapper.SelectedClicked;
QListWidget.EditKeyPressed = QListWidget_Wrapper.EditKeyPressed;
QListWidget.AnyKeyPressed = QListWidget_Wrapper.AnyKeyPressed;
QListWidget.AllEditTriggers = QListWidget_Wrapper.AllEditTriggers;

  // enum: ScrollMode
QListWidget.ScrollPerItem = QListWidget_Wrapper.ScrollPerItem;
QListWidget.ScrollPerPixel = QListWidget_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
QListWidget.NoDragDrop = QListWidget_Wrapper.NoDragDrop;
QListWidget.DragOnly = QListWidget_Wrapper.DragOnly;
QListWidget.DropOnly = QListWidget_Wrapper.DropOnly;
QListWidget.DragDrop = QListWidget_Wrapper.DragDrop;
QListWidget.InternalMove = QListWidget_Wrapper.InternalMove;

  // enum: Movement
QListWidget.Static = QListWidget_Wrapper.Static;
QListWidget.Free = QListWidget_Wrapper.Free;
QListWidget.Snap = QListWidget_Wrapper.Snap;

  // enum: Flow
QListWidget.LeftToRight = QListWidget_Wrapper.LeftToRight;
QListWidget.TopToBottom = QListWidget_Wrapper.TopToBottom;

  // enum: ResizeMode
QListWidget.Fixed = QListWidget_Wrapper.Fixed;
QListWidget.Adjust = QListWidget_Wrapper.Adjust;

  // enum: LayoutMode
QListWidget.SinglePass = QListWidget_Wrapper.SinglePass;
QListWidget.Batched = QListWidget_Wrapper.Batched;

  // enum: ViewMode
QListWidget.ListMode = QListWidget_Wrapper.ListMode;
QListWidget.IconMode = QListWidget_Wrapper.IconMode;


      // functions:
      
        // function 
        QListWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QListWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QListWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QListWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QListWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QListWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QListWidget.prototype.children = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QListWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QListWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QListWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QListWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QListWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QListWidget.prototype.property = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QListWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QListWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QListWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QListWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QListWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QListWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QListWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QListWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QListWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QListWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QListWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QListWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QListWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QListWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QListWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QListWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QListWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QListWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QListWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QListWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QListWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QListWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QListWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QListWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QListWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QListWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QListWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QListWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QListWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QListWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QListWidget.prototype.window = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QListWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QListWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QListWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QListWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QListWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QListWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QListWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QListWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QListWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QListWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QListWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QListWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QListWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QListWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QListWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QListWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QListWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QListWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QListWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QListWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QListWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QListWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QListWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QListWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QListWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QListWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QListWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QListWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QListWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QListWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QListWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QListWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QListWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QListWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QListWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QListWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QListWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QListWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QListWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QListWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QListWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QListWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QListWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QListWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QListWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QListWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QListWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QListWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QListWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QListWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QListWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QListWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QListWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QListWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QListWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QListWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QListWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QListWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QListWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QListWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QListWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QListWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QListWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QListWidget.prototype.show = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QListWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QListWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QListWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QListWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QListWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QListWidget.prototype.close = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QListWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QListWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QListWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QListWidget.prototype.move = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QListWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QListWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QListWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QListWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QListWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QListWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QListWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QListWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QListWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QListWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QListWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QListWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QListWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QListWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QListWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QListWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QListWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QListWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QListWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QListWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QListWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QListWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QListWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QListWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QListWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QListWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QListWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QListWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QListWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QListWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QListWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QListWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QListWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QListWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QListWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QListWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QListWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QListWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QListWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QListWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QListWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QListWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QListWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QListWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QListWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QListWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QListWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QListWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QListWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QListWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QListWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QListWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QListWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QListWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QListWidget.prototype.create = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QListWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QListWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QListWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QListWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QListWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QListWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QListWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QListWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QListWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QListWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QListWidget.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
        
        // function 
        QListWidget.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
        
        // function 
        QListWidget.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
        
        // function 
        QListWidget.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
        
        // function 
        QListWidget.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
        
        // function 
        QListWidget.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
        
        // function 
        QListWidget.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
        
        // function 
        QListWidget.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
        
        // function 
        QListWidget.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        
        // function 
        QListWidget.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
        
        // function 
        QListWidget.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
        
        // function 
        QListWidget.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
        
        // function 
        QListWidget.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
        
        // function 
        QListWidget.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
        
        // function 
        QListWidget.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
        
        // function 
        QListWidget.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
        
        // function 
        QListWidget.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
        
        // function 
        QListWidget.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
        
        // function 
        QListWidget.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
        
        // function 
        QListWidget.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
        
        // function 
        QListWidget.prototype.viewport = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
        
        // function 
        QListWidget.prototype.setViewport = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
        
        // function 
        QListWidget.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
        
        // function 
        QListWidget.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
        
        // function 
        QListWidget.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
        
        // function 
        QListWidget.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
        
        // function 
        QListWidget.prototype.model = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
        
        // function 
        QListWidget.prototype.setSelectionModel = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setSelectionModel");
          
              return this.__PROXY__.setSelectionModel(...args);
            
        };
        
        // function 
        QListWidget.prototype.selectionModel = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.selectionModel");
          
              return this.__PROXY__.selectionModel(...args);
            
        };
        
        // function 
        QListWidget.prototype.setItemDelegate = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setItemDelegate");
          
              return this.__PROXY__.setItemDelegate(...args);
            
        };
        
        // function 
        QListWidget.prototype.setSelectionMode = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setSelectionMode");
          
              return this.__PROXY__.setSelectionMode(...args);
            
        };
        
        // function 
        QListWidget.prototype.setSelectionBehavior = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setSelectionBehavior");
          
              return this.__PROXY__.setSelectionBehavior(...args);
            
        };
        
        // function 
        QListWidget.prototype.currentIndex = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.currentIndex");
          
              return this.__PROXY__.currentIndex(...args);
            
        };
        
        // function 
        QListWidget.prototype.rootIndex = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.rootIndex");
          
              return this.__PROXY__.rootIndex(...args);
            
        };
        
        // function 
        QListWidget.prototype.setEditTriggers = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setEditTriggers");
          
              return this.__PROXY__.setEditTriggers(...args);
            
        };
        
        // function 
        QListWidget.prototype.setVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setVerticalScrollMode");
          
              return this.__PROXY__.setVerticalScrollMode(...args);
            
        };
        
        // function 
        QListWidget.prototype.resetVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.resetVerticalScrollMode");
          
              return this.__PROXY__.resetVerticalScrollMode(...args);
            
        };
        
        // function 
        QListWidget.prototype.setHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setHorizontalScrollMode");
          
              return this.__PROXY__.setHorizontalScrollMode(...args);
            
        };
        
        // function 
        QListWidget.prototype.resetHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.resetHorizontalScrollMode");
          
              return this.__PROXY__.resetHorizontalScrollMode(...args);
            
        };
        
        // function 
        QListWidget.prototype.setAutoScroll = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setAutoScroll");
          
              return this.__PROXY__.setAutoScroll(...args);
            
        };
        
        // function 
        QListWidget.prototype.hasAutoScroll = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.hasAutoScroll");
          
              return this.__PROXY__.hasAutoScroll(...args);
            
        };
        
        // function 
        QListWidget.prototype.setAutoScrollMargin = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setAutoScrollMargin");
          
              return this.__PROXY__.setAutoScrollMargin(...args);
            
        };
        
        // function 
        QListWidget.prototype.setTabKeyNavigation = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setTabKeyNavigation");
          
              return this.__PROXY__.setTabKeyNavigation(...args);
            
        };
        
        // function 
        QListWidget.prototype.setDropIndicatorShown = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setDropIndicatorShown");
          
              return this.__PROXY__.setDropIndicatorShown(...args);
            
        };
        
        // function 
        QListWidget.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setDragEnabled");
          
              return this.__PROXY__.setDragEnabled(...args);
            
        };
        
        // function 
        QListWidget.prototype.setDragDropOverwriteMode = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setDragDropOverwriteMode");
          
              return this.__PROXY__.setDragDropOverwriteMode(...args);
            
        };
        
        // function 
        QListWidget.prototype.setDragDropMode = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setDragDropMode");
          
              return this.__PROXY__.setDragDropMode(...args);
            
        };
        
        // function 
        QListWidget.prototype.setDefaultDropAction = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setDefaultDropAction");
          
              return this.__PROXY__.setDefaultDropAction(...args);
            
        };
        
        // function 
        QListWidget.prototype.setAlternatingRowColors = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setAlternatingRowColors");
          
              return this.__PROXY__.setAlternatingRowColors(...args);
            
        };
        
        // function 
        QListWidget.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
        
        // function 
        QListWidget.prototype.setTextElideMode = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setTextElideMode");
          
              return this.__PROXY__.setTextElideMode(...args);
            
        };
        
        // function 
        QListWidget.prototype.keyboardSearch = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.keyboardSearch");
          
              return this.__PROXY__.keyboardSearch(...args);
            
        };
        
        // function 
        QListWidget.prototype.setIndexWidget = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setIndexWidget");
          
              return this.__PROXY__.setIndexWidget(...args);
            
        };
        
        // function 
        QListWidget.prototype.indexWidget = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.indexWidget");
          
              return this.__PROXY__.indexWidget(...args);
            
        };
        
        // function 
        QListWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QListWidget.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
        
        // function 
        QListWidget.prototype.edit = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.edit");
          
              return this.__PROXY__.edit(...args);
            
        };
        
        // function 
        QListWidget.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.clearSelection");
          
              return this.__PROXY__.clearSelection(...args);
            
        };
        
        // function 
        QListWidget.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
        
        // function 
        QListWidget.prototype.scrollToTop = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.scrollToTop");
          
              return this.__PROXY__.scrollToTop(...args);
            
        };
        
        // function 
        QListWidget.prototype.scrollToBottom = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.scrollToBottom");
          
              return this.__PROXY__.scrollToBottom(...args);
            
        };
        
        // function 
        QListWidget.prototype.update = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QListWidget.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
        
        // function 
        QListWidget.prototype.setMovement = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setMovement");
          
              return this.__PROXY__.setMovement(...args);
            
        };
        
        // function 
        QListWidget.prototype.setFlow = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setFlow");
          
              return this.__PROXY__.setFlow(...args);
            
        };
        
        // function 
        QListWidget.prototype.setWrapping = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setWrapping");
          
              return this.__PROXY__.setWrapping(...args);
            
        };
        
        // function 
        QListWidget.prototype.setResizeMode = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setResizeMode");
          
              return this.__PROXY__.setResizeMode(...args);
            
        };
        
        // function 
        QListWidget.prototype.setLayoutMode = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setLayoutMode");
          
              return this.__PROXY__.setLayoutMode(...args);
            
        };
        
        // function 
        QListWidget.prototype.setSpacing = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setSpacing");
          
              return this.__PROXY__.setSpacing(...args);
            
        };
        
        // function 
        QListWidget.prototype.setBatchSize = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setBatchSize");
          
              return this.__PROXY__.setBatchSize(...args);
            
        };
        
        // function 
        QListWidget.prototype.setGridSize = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setGridSize");
          
              return this.__PROXY__.setGridSize(...args);
            
        };
        
        // function 
        QListWidget.prototype.setViewMode = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setViewMode");
          
              return this.__PROXY__.setViewMode(...args);
            
        };
        
        // function 
        QListWidget.prototype.clearPropertyFlags = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.clearPropertyFlags");
          
              return this.__PROXY__.clearPropertyFlags(...args);
            
        };
        
        // function 
        QListWidget.prototype.isRowHidden = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isRowHidden");
          
              return this.__PROXY__.isRowHidden(...args);
            
        };
        
        // function 
        QListWidget.prototype.setRowHidden = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setRowHidden");
          
              return this.__PROXY__.setRowHidden(...args);
            
        };
        
        // function 
        QListWidget.prototype.setModelColumn = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setModelColumn");
          
              return this.__PROXY__.setModelColumn(...args);
            
        };
        
        // function 
        QListWidget.prototype.setUniformItemSizes = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setUniformItemSizes");
          
              return this.__PROXY__.setUniformItemSizes(...args);
            
        };
        
        // function 
        QListWidget.prototype.setWordWrap = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setWordWrap");
          
              return this.__PROXY__.setWordWrap(...args);
            
        };
        
        // function 
        QListWidget.prototype.setSelectionRectVisible = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setSelectionRectVisible");
          
              return this.__PROXY__.setSelectionRectVisible(...args);
            
        };
        
        // function 
        QListWidget.prototype.isSelectionRectVisible = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isSelectionRectVisible");
          
              return this.__PROXY__.isSelectionRectVisible(...args);
            
        };
        
        // function 
        QListWidget.prototype.setItemAlignment = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setItemAlignment");
          
              return this.__PROXY__.setItemAlignment(...args);
            
        };
        
        // function 
        QListWidget.prototype.visualRect = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.visualRect");
          
              return this.__PROXY__.visualRect(...args);
            
        };
        
        // function 
        QListWidget.prototype.scrollTo = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.scrollTo");
          
              return this.__PROXY__.scrollTo(...args);
            
        };
        
        // function 
        QListWidget.prototype.indexAt = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.indexAt");
          
              return this.__PROXY__.indexAt(...args);
            
        };
        
        // function 
        QListWidget.prototype.doItemsLayout = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.doItemsLayout");
          
              return this.__PROXY__.doItemsLayout(...args);
            
        };
        
        // function 
        QListWidget.prototype.reset = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
        
        // function 
        QListWidget.prototype.setRootIndex = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setRootIndex");
          
              return this.__PROXY__.setRootIndex(...args);
            
        };
        
        // function 
        QListWidget.prototype.visualIndex = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.visualIndex");
          
              return this.__PROXY__.visualIndex(...args);
            
        };
        
        // function 
        QListWidget.prototype.item = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.item");
          
              return this.__PROXY__.item(...args);
            
        };
        
        // function 
        QListWidget.prototype.row = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.row");
          
              return this.__PROXY__.row(...args);
            
        };
        
        // function 
        QListWidget.prototype.insertItem = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.insertItem");
          
              return this.__PROXY__.insertItem(...args);
            
        };
        
        // function 
        QListWidget.prototype.insertItems = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.insertItems");
          
              return this.__PROXY__.insertItems(...args);
            
        };
        
        // function 
        QListWidget.prototype.addItem = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.addItem");
          
              return this.__PROXY__.addItem(...args);
            
        };
        
        // function 
        QListWidget.prototype.addItems = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.addItems");
          
              return this.__PROXY__.addItems(...args);
            
        };
        
        // function 
        QListWidget.prototype.takeItem = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.takeItem");
          
              return this.__PROXY__.takeItem(...args);
            
        };
        
        // function 
        QListWidget.prototype.currentItem = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.currentItem");
          
              return this.__PROXY__.currentItem(...args);
            
        };
        
        // function 
        QListWidget.prototype.setCurrentItem = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setCurrentItem");
          
              return this.__PROXY__.setCurrentItem(...args);
            
        };
        
        // function 
        QListWidget.prototype.setCurrentRow = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setCurrentRow");
          
              return this.__PROXY__.setCurrentRow(...args);
            
        };
        
        // function 
        QListWidget.prototype.itemAt = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.itemAt");
          
              return this.__PROXY__.itemAt(...args);
            
        };
        
        // function 
        QListWidget.prototype.visualItemRect = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.visualItemRect");
          
              return this.__PROXY__.visualItemRect(...args);
            
        };
        
        // function 
        QListWidget.prototype.sortItems = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.sortItems");
          
              return this.__PROXY__.sortItems(...args);
            
        };
        
        // function 
        QListWidget.prototype.setSortingEnabled = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setSortingEnabled");
          
              return this.__PROXY__.setSortingEnabled(...args);
            
        };
        
        // function 
        QListWidget.prototype.isSortingEnabled = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isSortingEnabled");
          
              return this.__PROXY__.isSortingEnabled(...args);
            
        };
        
        // function 
        QListWidget.prototype.editItem = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.editItem");
          
              return this.__PROXY__.editItem(...args);
            
        };
        
        // function 
        QListWidget.prototype.openPersistentEditor = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.openPersistentEditor");
          
              return this.__PROXY__.openPersistentEditor(...args);
            
        };
        
        // function 
        QListWidget.prototype.closePersistentEditor = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.closePersistentEditor");
          
              return this.__PROXY__.closePersistentEditor(...args);
            
        };
        
        // function 
        QListWidget.prototype.isPersistentEditorOpen = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.isPersistentEditorOpen");
          
              return this.__PROXY__.isPersistentEditorOpen(...args);
            
        };
        
        // function 
        QListWidget.prototype.itemWidget = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.itemWidget");
          
              return this.__PROXY__.itemWidget(...args);
            
        };
        
        // function 
        QListWidget.prototype.setItemWidget = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setItemWidget");
          
              return this.__PROXY__.setItemWidget(...args);
            
        };
        
        // function 
        QListWidget.prototype.removeItemWidget = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.removeItemWidget");
          
              return this.__PROXY__.removeItemWidget(...args);
            
        };
        
        // function 
        QListWidget.prototype.selectedItems = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.selectedItems");
          
              return this.__PROXY__.selectedItems(...args);
            
        };
        
        // function 
        QListWidget.prototype.findItems = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.findItems");
          
              return this.__PROXY__.findItems(...args);
            
        };
        
        // function 
        QListWidget.prototype.items = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.items");
          
              return this.__PROXY__.items(...args);
            
        };
        
        // function 
        QListWidget.prototype.indexFromItem = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.indexFromItem");
          
              return this.__PROXY__.indexFromItem(...args);
            
        };
        
        // function 
        QListWidget.prototype.itemFromIndex = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.itemFromIndex");
          
              return this.__PROXY__.itemFromIndex(...args);
            
        };
        
        // function 
        QListWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QListWidget.prototype.scrollToItem = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.scrollToItem");
          
              return this.__PROXY__.scrollToItem(...args);
            
        };
        
        // function 
        QListWidget.prototype.clear = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        QListWidget.prototype.event = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QListWidget.prototype.mimeTypes = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.mimeTypes");
          
              return this.__PROXY__.mimeTypes(...args);
            
        };
        
        // function 
        QListWidget.prototype.mimeData = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.mimeData");
          
              return this.__PROXY__.mimeData(...args);
            
        };
        
        // function 
        QListWidget.prototype.dropMimeData = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.dropMimeData");
          
              return this.__PROXY__.dropMimeData(...args);
            
        };
        
        // function 
        QListWidget.prototype.supportedDropActions = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.supportedDropActions");
          
              return this.__PROXY__.supportedDropActions(...args);
            
        };
        
        // function 
        QListWidget.prototype.setModel = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.setModel");
          
              return this.__PROXY__.setModel(...args);
            
        };
        
        // function 
        QListWidget.prototype.sortOrder = function(...args) 
          
        {
          //print("JS: QListWidget.prototype.sortOrder");
          
              return this.__PROXY__.sortOrder(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QListWidget.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'autoScrollMargin', {
              get: function() {
                  
                      return this.__PROXY__.autoScrollMargin;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoScrollMargin(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'editTriggers', {
              get: function() {
                  
                      return this.__PROXY__.editTriggers;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditTriggers(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'tabKeyNavigation', {
              get: function() {
                  
                      return this.__PROXY__.tabKeyNavigation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabKeyNavigation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'showDropIndicator', {
              get: function() {
                  
                      return this.__PROXY__.showDropIndicator;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDropIndicatorShown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'dragEnabled', {
              get: function() {
                  
                      return this.__PROXY__.dragEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'dragDropOverwriteMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropOverwriteMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropOverwriteMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'dragDropMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'defaultDropAction', {
              get: function() {
                  
                      return this.__PROXY__.defaultDropAction;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultDropAction(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'alternatingRowColors', {
              get: function() {
                  
                      return this.__PROXY__.alternatingRowColors;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlternatingRowColors(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'selectionMode', {
              get: function() {
                  
                      return this.__PROXY__.selectionMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'selectionBehavior', {
              get: function() {
                  
                      return this.__PROXY__.selectionBehavior;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionBehavior(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'textElideMode', {
              get: function() {
                  
                      return this.__PROXY__.textElideMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextElideMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'verticalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.verticalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVerticalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'horizontalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.horizontalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHorizontalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'flow', {
              get: function() {
                  
                      return this.__PROXY__.flow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFlow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'isWrapping', {
              get: function() {
                  
                      return this.__PROXY__.isWrapping;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWrapping(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'resizeMode', {
              get: function() {
                  
                      return this.__PROXY__.resizeMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setResizeMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'layoutMode', {
              get: function() {
                  
                      return this.__PROXY__.layoutMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'spacing', {
              get: function() {
                  
                      return this.__PROXY__.spacing;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSpacing(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'gridSize', {
              get: function() {
                  
                      return this.__PROXY__.gridSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGridSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'viewMode', {
              get: function() {
                  
                      return this.__PROXY__.viewMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setViewMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'modelColumn', {
              get: function() {
                  
                      return this.__PROXY__.modelColumn;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModelColumn(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'uniformItemSizes', {
              get: function() {
                  
                      return this.__PROXY__.uniformItemSizes;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUniformItemSizes(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'batchSize', {
              get: function() {
                  
                      return this.__PROXY__.batchSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBatchSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'wordWrap', {
              get: function() {
                  
                      return this.__PROXY__.wordWrap;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWordWrap(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'selectionRectVisible', {
              get: function() {
                  
                      return this.__PROXY__.isSelectionRectVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionRectVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'itemAlignment', {
              get: function() {
                  
                      return this.__PROXY__.itemAlignment;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setItemAlignment(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'movement', {
              get: function() {
                  
                      return this.__PROXY__.movement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMovement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'count', {
              get: function() {
                  
                      return this.__PROXY__.count;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'currentRow', {
              get: function() {
                  
                      return this.__PROXY__.currentRow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentRow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListWidget.prototype, 'sortingEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isSortingEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSortingEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QListWidget.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QListWidget.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QListWidget.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
          Object.defineProperty(QListWidget.prototype, 'pressed(QModelIndex)', {
              get: function() { return this.__PROXY__.pressed; },
              configurable: true
          });
        
        Object.defineProperty(QListWidget.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(QListWidget.prototype, 'clicked(QModelIndex)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(QListWidget.prototype, 'doubleClicked', {
            get: function() { return this.__PROXY__.doubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(QListWidget.prototype, 'doubleClicked(QModelIndex)', {
              get: function() { return this.__PROXY__.doubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(QListWidget.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(QListWidget.prototype, 'activated(QModelIndex)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(QListWidget.prototype, 'entered', {
            get: function() { return this.__PROXY__.entered; },
            configurable: true
        });
        
          Object.defineProperty(QListWidget.prototype, 'entered(QModelIndex)', {
              get: function() { return this.__PROXY__.entered; },
              configurable: true
          });
        
        Object.defineProperty(QListWidget.prototype, 'itemPressed', {
            get: function() { return this.__PROXY__.itemPressed; },
            configurable: true
        });
        
          Object.defineProperty(QListWidget.prototype, 'itemPressed(QListWidgetItem*)', {
              get: function() { return this.__PROXY__.itemPressed; },
              configurable: true
          });
        
        Object.defineProperty(QListWidget.prototype, 'itemClicked', {
            get: function() { return this.__PROXY__.itemClicked; },
            configurable: true
        });
        
          Object.defineProperty(QListWidget.prototype, 'itemClicked(QListWidgetItem*)', {
              get: function() { return this.__PROXY__.itemClicked; },
              configurable: true
          });
        
        Object.defineProperty(QListWidget.prototype, 'itemDoubleClicked', {
            get: function() { return this.__PROXY__.itemDoubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(QListWidget.prototype, 'itemDoubleClicked(QListWidgetItem*)', {
              get: function() { return this.__PROXY__.itemDoubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(QListWidget.prototype, 'itemActivated', {
            get: function() { return this.__PROXY__.itemActivated; },
            configurable: true
        });
        
          Object.defineProperty(QListWidget.prototype, 'itemActivated(QListWidgetItem*)', {
              get: function() { return this.__PROXY__.itemActivated; },
              configurable: true
          });
        
        Object.defineProperty(QListWidget.prototype, 'itemEntered', {
            get: function() { return this.__PROXY__.itemEntered; },
            configurable: true
        });
        
          Object.defineProperty(QListWidget.prototype, 'itemEntered(QListWidgetItem*)', {
              get: function() { return this.__PROXY__.itemEntered; },
              configurable: true
          });
        
        Object.defineProperty(QListWidget.prototype, 'itemChanged', {
            get: function() { return this.__PROXY__.itemChanged; },
            configurable: true
        });
        
          Object.defineProperty(QListWidget.prototype, 'itemChanged(QListWidgetItem*)', {
              get: function() { return this.__PROXY__.itemChanged; },
              configurable: true
          });
        
        Object.defineProperty(QListWidget.prototype, 'currentItemChanged', {
            get: function() { return this.__PROXY__.currentItemChanged; },
            configurable: true
        });
        
          Object.defineProperty(QListWidget.prototype, 'currentItemChanged(QListWidgetItem*,QListWidgetItem*)', {
              get: function() { return this.__PROXY__.currentItemChanged; },
              configurable: true
          });
        
        Object.defineProperty(QListWidget.prototype, 'currentTextChanged', {
            get: function() { return this.__PROXY__.currentTextChanged; },
            configurable: true
        });
        
          Object.defineProperty(QListWidget.prototype, 'currentTextChanged(QString)', {
              get: function() { return this.__PROXY__.currentTextChanged; },
              configurable: true
          });
        
        Object.defineProperty(QListWidget.prototype, 'currentRowChanged', {
            get: function() { return this.__PROXY__.currentRowChanged; },
            configurable: true
        });
        
          Object.defineProperty(QListWidget.prototype, 'currentRowChanged(int)', {
              get: function() { return this.__PROXY__.currentRowChanged; },
              configurable: true
          });
        
        Object.defineProperty(QListWidget.prototype, 'itemSelectionChanged', {
            get: function() { return this.__PROXY__.itemSelectionChanged; },
            configurable: true
        });
        QListWidget.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QListWidget.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QListWidget.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QListWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QListWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QListWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      