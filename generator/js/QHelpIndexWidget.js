
      // auto generated
      //var self;

      // class constructor:
      function QHelpIndexWidget() {
        

        // should be QHelpIndexWidget_BaseJs.call(this, engine):
        //QHelpIndexWidget.prototype = new QHelpIndexWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHelpIndexWidget.getIdStatic()))) {

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
            qWarning("QHelpIndexWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QHelpIndexWidget.js: No constructor found for class QHelpIndexWidget");
            
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

      //QHelpIndexWidget.prototype = new QHelpIndexWidget_BaseJs(engine);
      //QHelpIndexWidget.prototype = new QHelpIndexWidget_Wrapper(engine);
      QHelpIndexWidget.prototype = new Object();


      QHelpIndexWidget.prototype.toString = function() {
          //return "QHelpIndexWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHelpIndexWidget [JS]";
        };
      QHelpIndexWidget.getObjectType = function() {
        return RJSType_QHelpIndexWidget.getIdStatic();
      };

      QHelpIndexWidget.prototype.getObjectType = function() {
        return RJSType_QHelpIndexWidget.getIdStatic();
      };

      QHelpIndexWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHelpIndexWidget.getIdStatic()) {
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
QHelpIndexWidget.NoFrame = QHelpIndexWidget_Wrapper.NoFrame;
QHelpIndexWidget.Box = QHelpIndexWidget_Wrapper.Box;
QHelpIndexWidget.Panel = QHelpIndexWidget_Wrapper.Panel;
QHelpIndexWidget.WinPanel = QHelpIndexWidget_Wrapper.WinPanel;
QHelpIndexWidget.HLine = QHelpIndexWidget_Wrapper.HLine;
QHelpIndexWidget.VLine = QHelpIndexWidget_Wrapper.VLine;
QHelpIndexWidget.StyledPanel = QHelpIndexWidget_Wrapper.StyledPanel;

  // enum: Shadow
QHelpIndexWidget.Plain = QHelpIndexWidget_Wrapper.Plain;
QHelpIndexWidget.Raised = QHelpIndexWidget_Wrapper.Raised;
QHelpIndexWidget.Sunken = QHelpIndexWidget_Wrapper.Sunken;

  // enum: StyleMask
QHelpIndexWidget.Shadow_Mask = QHelpIndexWidget_Wrapper.Shadow_Mask;
QHelpIndexWidget.Shape_Mask = QHelpIndexWidget_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QHelpIndexWidget.AdjustIgnored = QHelpIndexWidget_Wrapper.AdjustIgnored;
QHelpIndexWidget.AdjustToContentsOnFirstShow = QHelpIndexWidget_Wrapper.AdjustToContentsOnFirstShow;
QHelpIndexWidget.AdjustToContents = QHelpIndexWidget_Wrapper.AdjustToContents;

  // enum: SelectionMode
QHelpIndexWidget.NoSelection = QHelpIndexWidget_Wrapper.NoSelection;
QHelpIndexWidget.SingleSelection = QHelpIndexWidget_Wrapper.SingleSelection;
QHelpIndexWidget.MultiSelection = QHelpIndexWidget_Wrapper.MultiSelection;
QHelpIndexWidget.ExtendedSelection = QHelpIndexWidget_Wrapper.ExtendedSelection;
QHelpIndexWidget.ContiguousSelection = QHelpIndexWidget_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
QHelpIndexWidget.SelectItems = QHelpIndexWidget_Wrapper.SelectItems;
QHelpIndexWidget.SelectRows = QHelpIndexWidget_Wrapper.SelectRows;
QHelpIndexWidget.SelectColumns = QHelpIndexWidget_Wrapper.SelectColumns;

  // enum: ScrollHint
QHelpIndexWidget.EnsureVisible = QHelpIndexWidget_Wrapper.EnsureVisible;
QHelpIndexWidget.PositionAtTop = QHelpIndexWidget_Wrapper.PositionAtTop;
QHelpIndexWidget.PositionAtBottom = QHelpIndexWidget_Wrapper.PositionAtBottom;
QHelpIndexWidget.PositionAtCenter = QHelpIndexWidget_Wrapper.PositionAtCenter;

  // enum: EditTrigger
QHelpIndexWidget.NoEditTriggers = QHelpIndexWidget_Wrapper.NoEditTriggers;
QHelpIndexWidget.CurrentChanged = QHelpIndexWidget_Wrapper.CurrentChanged;
QHelpIndexWidget.DoubleClicked = QHelpIndexWidget_Wrapper.DoubleClicked;
QHelpIndexWidget.SelectedClicked = QHelpIndexWidget_Wrapper.SelectedClicked;
QHelpIndexWidget.EditKeyPressed = QHelpIndexWidget_Wrapper.EditKeyPressed;
QHelpIndexWidget.AnyKeyPressed = QHelpIndexWidget_Wrapper.AnyKeyPressed;
QHelpIndexWidget.AllEditTriggers = QHelpIndexWidget_Wrapper.AllEditTriggers;

  // enum: ScrollMode
QHelpIndexWidget.ScrollPerItem = QHelpIndexWidget_Wrapper.ScrollPerItem;
QHelpIndexWidget.ScrollPerPixel = QHelpIndexWidget_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
QHelpIndexWidget.NoDragDrop = QHelpIndexWidget_Wrapper.NoDragDrop;
QHelpIndexWidget.DragOnly = QHelpIndexWidget_Wrapper.DragOnly;
QHelpIndexWidget.DropOnly = QHelpIndexWidget_Wrapper.DropOnly;
QHelpIndexWidget.DragDrop = QHelpIndexWidget_Wrapper.DragDrop;
QHelpIndexWidget.InternalMove = QHelpIndexWidget_Wrapper.InternalMove;

  // enum: Movement
QHelpIndexWidget.Static = QHelpIndexWidget_Wrapper.Static;
QHelpIndexWidget.Free = QHelpIndexWidget_Wrapper.Free;
QHelpIndexWidget.Snap = QHelpIndexWidget_Wrapper.Snap;

  // enum: Flow
QHelpIndexWidget.LeftToRight = QHelpIndexWidget_Wrapper.LeftToRight;
QHelpIndexWidget.TopToBottom = QHelpIndexWidget_Wrapper.TopToBottom;

  // enum: ResizeMode
QHelpIndexWidget.Fixed = QHelpIndexWidget_Wrapper.Fixed;
QHelpIndexWidget.Adjust = QHelpIndexWidget_Wrapper.Adjust;

  // enum: LayoutMode
QHelpIndexWidget.SinglePass = QHelpIndexWidget_Wrapper.SinglePass;
QHelpIndexWidget.Batched = QHelpIndexWidget_Wrapper.Batched;

  // enum: ViewMode
QHelpIndexWidget.ListMode = QHelpIndexWidget_Wrapper.ListMode;
QHelpIndexWidget.IconMode = QHelpIndexWidget_Wrapper.IconMode;


      // functions:
      
        // function 
        QHelpIndexWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.children = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.property = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.window = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.show = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.close = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.move = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.event = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.create = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.viewport = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setViewport = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setModel = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setModel");
          
              return this.__PROXY__.setModel(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.model = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setSelectionModel = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setSelectionModel");
          
              return this.__PROXY__.setSelectionModel(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.selectionModel = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.selectionModel");
          
              return this.__PROXY__.selectionModel(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setItemDelegate = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setItemDelegate");
          
              return this.__PROXY__.setItemDelegate(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setSelectionMode = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setSelectionMode");
          
              return this.__PROXY__.setSelectionMode(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setSelectionBehavior = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setSelectionBehavior");
          
              return this.__PROXY__.setSelectionBehavior(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.currentIndex = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.currentIndex");
          
              return this.__PROXY__.currentIndex(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.rootIndex = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.rootIndex");
          
              return this.__PROXY__.rootIndex(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setEditTriggers = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setEditTriggers");
          
              return this.__PROXY__.setEditTriggers(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setVerticalScrollMode");
          
              return this.__PROXY__.setVerticalScrollMode(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.resetVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.resetVerticalScrollMode");
          
              return this.__PROXY__.resetVerticalScrollMode(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setHorizontalScrollMode");
          
              return this.__PROXY__.setHorizontalScrollMode(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.resetHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.resetHorizontalScrollMode");
          
              return this.__PROXY__.resetHorizontalScrollMode(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setAutoScroll = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setAutoScroll");
          
              return this.__PROXY__.setAutoScroll(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.hasAutoScroll = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.hasAutoScroll");
          
              return this.__PROXY__.hasAutoScroll(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setAutoScrollMargin = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setAutoScrollMargin");
          
              return this.__PROXY__.setAutoScrollMargin(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setTabKeyNavigation = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setTabKeyNavigation");
          
              return this.__PROXY__.setTabKeyNavigation(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setDropIndicatorShown = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setDropIndicatorShown");
          
              return this.__PROXY__.setDropIndicatorShown(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setDragEnabled");
          
              return this.__PROXY__.setDragEnabled(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setDragDropOverwriteMode = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setDragDropOverwriteMode");
          
              return this.__PROXY__.setDragDropOverwriteMode(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setDragDropMode = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setDragDropMode");
          
              return this.__PROXY__.setDragDropMode(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setDefaultDropAction = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setDefaultDropAction");
          
              return this.__PROXY__.setDefaultDropAction(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setAlternatingRowColors = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setAlternatingRowColors");
          
              return this.__PROXY__.setAlternatingRowColors(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setTextElideMode = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setTextElideMode");
          
              return this.__PROXY__.setTextElideMode(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.keyboardSearch = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.keyboardSearch");
          
              return this.__PROXY__.keyboardSearch(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isPersistentEditorOpen = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isPersistentEditorOpen");
          
              return this.__PROXY__.isPersistentEditorOpen(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setIndexWidget = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setIndexWidget");
          
              return this.__PROXY__.setIndexWidget(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.indexWidget = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.indexWidget");
          
              return this.__PROXY__.indexWidget(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.edit = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.edit");
          
              return this.__PROXY__.edit(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.clearSelection");
          
              return this.__PROXY__.clearSelection(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.scrollToTop = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.scrollToTop");
          
              return this.__PROXY__.scrollToTop(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.scrollToBottom = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.scrollToBottom");
          
              return this.__PROXY__.scrollToBottom(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.update = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setMovement = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setMovement");
          
              return this.__PROXY__.setMovement(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setFlow = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setFlow");
          
              return this.__PROXY__.setFlow(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setWrapping = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setWrapping");
          
              return this.__PROXY__.setWrapping(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setResizeMode = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setResizeMode");
          
              return this.__PROXY__.setResizeMode(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setLayoutMode = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setLayoutMode");
          
              return this.__PROXY__.setLayoutMode(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setSpacing = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setSpacing");
          
              return this.__PROXY__.setSpacing(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setBatchSize = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setBatchSize");
          
              return this.__PROXY__.setBatchSize(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setGridSize = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setGridSize");
          
              return this.__PROXY__.setGridSize(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setViewMode = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setViewMode");
          
              return this.__PROXY__.setViewMode(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.clearPropertyFlags = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.clearPropertyFlags");
          
              return this.__PROXY__.clearPropertyFlags(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isRowHidden = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isRowHidden");
          
              return this.__PROXY__.isRowHidden(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setRowHidden = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setRowHidden");
          
              return this.__PROXY__.setRowHidden(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setModelColumn = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setModelColumn");
          
              return this.__PROXY__.setModelColumn(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setUniformItemSizes = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setUniformItemSizes");
          
              return this.__PROXY__.setUniformItemSizes(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setWordWrap = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setWordWrap");
          
              return this.__PROXY__.setWordWrap(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setSelectionRectVisible = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setSelectionRectVisible");
          
              return this.__PROXY__.setSelectionRectVisible(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.isSelectionRectVisible = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.isSelectionRectVisible");
          
              return this.__PROXY__.isSelectionRectVisible(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setItemAlignment = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setItemAlignment");
          
              return this.__PROXY__.setItemAlignment(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.visualRect = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.visualRect");
          
              return this.__PROXY__.visualRect(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.scrollTo = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.scrollTo");
          
              return this.__PROXY__.scrollTo(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.indexAt = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.indexAt");
          
              return this.__PROXY__.indexAt(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.doItemsLayout = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.doItemsLayout");
          
              return this.__PROXY__.doItemsLayout(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.reset = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.setRootIndex = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.setRootIndex");
          
              return this.__PROXY__.setRootIndex(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.visualIndex = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.visualIndex");
          
              return this.__PROXY__.visualIndex(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.filterIndices = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.filterIndices");
          
              return this.__PROXY__.filterIndices(...args);
            
        };
    
        // function 
        QHelpIndexWidget.prototype.activateCurrentItem = function(...args) 
          
        {
          //print("JS: QHelpIndexWidget.prototype.activateCurrentItem");
          
              return this.__PROXY__.activateCurrentItem(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QHelpIndexWidget.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'autoScrollMargin', {
              get: function() {
                  
                      return this.__PROXY__.autoScrollMargin;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoScrollMargin(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'editTriggers', {
              get: function() {
                  
                      return this.__PROXY__.editTriggers;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditTriggers(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'tabKeyNavigation', {
              get: function() {
                  
                      return this.__PROXY__.tabKeyNavigation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabKeyNavigation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'showDropIndicator', {
              get: function() {
                  
                      return this.__PROXY__.showDropIndicator;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDropIndicatorShown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'dragEnabled', {
              get: function() {
                  
                      return this.__PROXY__.dragEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'dragDropOverwriteMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropOverwriteMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropOverwriteMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'dragDropMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'defaultDropAction', {
              get: function() {
                  
                      return this.__PROXY__.defaultDropAction;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultDropAction(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'alternatingRowColors', {
              get: function() {
                  
                      return this.__PROXY__.alternatingRowColors;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlternatingRowColors(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'selectionMode', {
              get: function() {
                  
                      return this.__PROXY__.selectionMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'selectionBehavior', {
              get: function() {
                  
                      return this.__PROXY__.selectionBehavior;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionBehavior(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'textElideMode', {
              get: function() {
                  
                      return this.__PROXY__.textElideMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextElideMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'verticalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.verticalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVerticalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'horizontalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.horizontalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHorizontalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'flow', {
              get: function() {
                  
                      return this.__PROXY__.flow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFlow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'isWrapping', {
              get: function() {
                  
                      return this.__PROXY__.isWrapping;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWrapping(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'resizeMode', {
              get: function() {
                  
                      return this.__PROXY__.resizeMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setResizeMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'layoutMode', {
              get: function() {
                  
                      return this.__PROXY__.layoutMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'spacing', {
              get: function() {
                  
                      return this.__PROXY__.spacing;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSpacing(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'gridSize', {
              get: function() {
                  
                      return this.__PROXY__.gridSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGridSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'viewMode', {
              get: function() {
                  
                      return this.__PROXY__.viewMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setViewMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'modelColumn', {
              get: function() {
                  
                      return this.__PROXY__.modelColumn;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModelColumn(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'uniformItemSizes', {
              get: function() {
                  
                      return this.__PROXY__.uniformItemSizes;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUniformItemSizes(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'batchSize', {
              get: function() {
                  
                      return this.__PROXY__.batchSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBatchSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'wordWrap', {
              get: function() {
                  
                      return this.__PROXY__.wordWrap;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWordWrap(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'selectionRectVisible', {
              get: function() {
                  
                      return this.__PROXY__.isSelectionRectVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionRectVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'itemAlignment', {
              get: function() {
                  
                      return this.__PROXY__.itemAlignment;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setItemAlignment(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'movement', {
              get: function() {
                  
                      return this.__PROXY__.movement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMovement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QHelpIndexWidget.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QHelpIndexWidget.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'pressed(QModelIndex)', {
              get: function() { return this.__PROXY__.pressed; },
              configurable: true
          });
        
        Object.defineProperty(QHelpIndexWidget.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'clicked(QModelIndex)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(QHelpIndexWidget.prototype, 'doubleClicked', {
            get: function() { return this.__PROXY__.doubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'doubleClicked(QModelIndex)', {
              get: function() { return this.__PROXY__.doubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(QHelpIndexWidget.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'activated(QModelIndex)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(QHelpIndexWidget.prototype, 'entered', {
            get: function() { return this.__PROXY__.entered; },
            configurable: true
        });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'entered(QModelIndex)', {
              get: function() { return this.__PROXY__.entered; },
              configurable: true
          });
        
        Object.defineProperty(QHelpIndexWidget.prototype, 'documentActivated', {
            get: function() { return this.__PROXY__.documentActivated; },
            configurable: true
        });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'documentActivated(QHelpLink,QString)', {
              get: function() { return this.__PROXY__.documentActivated; },
              configurable: true
          });
        
        Object.defineProperty(QHelpIndexWidget.prototype, 'documentsActivated', {
            get: function() { return this.__PROXY__.documentsActivated; },
            configurable: true
        });
        
          Object.defineProperty(QHelpIndexWidget.prototype, 'documentsActivated(QList<QHelpLink>,QString)', {
              get: function() { return this.__PROXY__.documentsActivated; },
              configurable: true
          });
        QHelpIndexWidget.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QHelpIndexWidget.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QHelpIndexWidget.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHelpIndexWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHelpIndexWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QHelpIndexWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      