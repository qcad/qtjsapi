
      // auto generated
      //var self;

      // class constructor:
      function QHelpContentWidget() {
        

        // should be QHelpContentWidget_BaseJs.call(this, engine):
        //QHelpContentWidget.prototype = new QHelpContentWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHelpContentWidget.getIdStatic()))) {

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
            qWarning("QHelpContentWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QHelpContentWidget.js: No constructor found for class QHelpContentWidget");
            
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

      //QHelpContentWidget.prototype = new QHelpContentWidget_BaseJs(engine);
      //QHelpContentWidget.prototype = new QHelpContentWidget_Wrapper(engine);
      QHelpContentWidget.prototype = new Object();


      QHelpContentWidget.prototype.toString = function() {
          //return "QHelpContentWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHelpContentWidget [JS]";
        };
      QHelpContentWidget.getObjectType = function() {
        return RJSType_QHelpContentWidget.getIdStatic();
      };

      QHelpContentWidget.prototype.getObjectType = function() {
        return RJSType_QHelpContentWidget.getIdStatic();
      };

      QHelpContentWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHelpContentWidget.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QPaintDevice.getIdStatic()) {
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
        
          if (t===RJSType_QTreeView.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QHelpContentWidget.NoFrame = QHelpContentWidget_Wrapper.NoFrame;
QHelpContentWidget.Box = QHelpContentWidget_Wrapper.Box;
QHelpContentWidget.Panel = QHelpContentWidget_Wrapper.Panel;
QHelpContentWidget.WinPanel = QHelpContentWidget_Wrapper.WinPanel;
QHelpContentWidget.HLine = QHelpContentWidget_Wrapper.HLine;
QHelpContentWidget.VLine = QHelpContentWidget_Wrapper.VLine;
QHelpContentWidget.StyledPanel = QHelpContentWidget_Wrapper.StyledPanel;

  // enum: Shadow
QHelpContentWidget.Plain = QHelpContentWidget_Wrapper.Plain;
QHelpContentWidget.Raised = QHelpContentWidget_Wrapper.Raised;
QHelpContentWidget.Sunken = QHelpContentWidget_Wrapper.Sunken;

  // enum: StyleMask
QHelpContentWidget.Shadow_Mask = QHelpContentWidget_Wrapper.Shadow_Mask;
QHelpContentWidget.Shape_Mask = QHelpContentWidget_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QHelpContentWidget.AdjustIgnored = QHelpContentWidget_Wrapper.AdjustIgnored;
QHelpContentWidget.AdjustToContentsOnFirstShow = QHelpContentWidget_Wrapper.AdjustToContentsOnFirstShow;
QHelpContentWidget.AdjustToContents = QHelpContentWidget_Wrapper.AdjustToContents;

  // enum: SelectionMode
QHelpContentWidget.NoSelection = QHelpContentWidget_Wrapper.NoSelection;
QHelpContentWidget.SingleSelection = QHelpContentWidget_Wrapper.SingleSelection;
QHelpContentWidget.MultiSelection = QHelpContentWidget_Wrapper.MultiSelection;
QHelpContentWidget.ExtendedSelection = QHelpContentWidget_Wrapper.ExtendedSelection;
QHelpContentWidget.ContiguousSelection = QHelpContentWidget_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
QHelpContentWidget.SelectItems = QHelpContentWidget_Wrapper.SelectItems;
QHelpContentWidget.SelectRows = QHelpContentWidget_Wrapper.SelectRows;
QHelpContentWidget.SelectColumns = QHelpContentWidget_Wrapper.SelectColumns;

  // enum: ScrollHint
QHelpContentWidget.EnsureVisible = QHelpContentWidget_Wrapper.EnsureVisible;
QHelpContentWidget.PositionAtTop = QHelpContentWidget_Wrapper.PositionAtTop;
QHelpContentWidget.PositionAtBottom = QHelpContentWidget_Wrapper.PositionAtBottom;
QHelpContentWidget.PositionAtCenter = QHelpContentWidget_Wrapper.PositionAtCenter;

  // enum: EditTrigger
QHelpContentWidget.NoEditTriggers = QHelpContentWidget_Wrapper.NoEditTriggers;
QHelpContentWidget.CurrentChanged = QHelpContentWidget_Wrapper.CurrentChanged;
QHelpContentWidget.DoubleClicked = QHelpContentWidget_Wrapper.DoubleClicked;
QHelpContentWidget.SelectedClicked = QHelpContentWidget_Wrapper.SelectedClicked;
QHelpContentWidget.EditKeyPressed = QHelpContentWidget_Wrapper.EditKeyPressed;
QHelpContentWidget.AnyKeyPressed = QHelpContentWidget_Wrapper.AnyKeyPressed;
QHelpContentWidget.AllEditTriggers = QHelpContentWidget_Wrapper.AllEditTriggers;

  // enum: ScrollMode
QHelpContentWidget.ScrollPerItem = QHelpContentWidget_Wrapper.ScrollPerItem;
QHelpContentWidget.ScrollPerPixel = QHelpContentWidget_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
QHelpContentWidget.NoDragDrop = QHelpContentWidget_Wrapper.NoDragDrop;
QHelpContentWidget.DragOnly = QHelpContentWidget_Wrapper.DragOnly;
QHelpContentWidget.DropOnly = QHelpContentWidget_Wrapper.DropOnly;
QHelpContentWidget.DragDrop = QHelpContentWidget_Wrapper.DragDrop;
QHelpContentWidget.InternalMove = QHelpContentWidget_Wrapper.InternalMove;


      // functions:
      
        // function 
        QHelpContentWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.children = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.property = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.paintingActive = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.paintingActive");
          
              return this.__PROXY__.paintingActive(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.paintEngine = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.paintEngine");
          
              return this.__PROXY__.paintEngine(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.widthMM = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.widthMM");
          
              return this.__PROXY__.widthMM(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.heightMM = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.heightMM");
          
              return this.__PROXY__.heightMM(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.logicalDpiX = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.logicalDpiX");
          
              return this.__PROXY__.logicalDpiX(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.logicalDpiY = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.logicalDpiY");
          
              return this.__PROXY__.logicalDpiY(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.physicalDpiX = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.physicalDpiX");
          
              return this.__PROXY__.physicalDpiX(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.physicalDpiY = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.physicalDpiY");
          
              return this.__PROXY__.physicalDpiY(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.devicePixelRatio");
          
              return this.__PROXY__.devicePixelRatio(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.devicePixelRatioF = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.devicePixelRatioF");
          
              return this.__PROXY__.devicePixelRatioF(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.colorCount = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.colorCount");
          
              return this.__PROXY__.colorCount(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.depth = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.depth");
          
              return this.__PROXY__.depth(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.qt_paint_device_metric = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.qt_paint_device_metric");
          
              return this.__PROXY__.qt_paint_device_metric(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.window = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.show = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.close = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.move = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.event = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.create = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.viewport = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setViewport = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setModel = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setModel");
          
              return this.__PROXY__.setModel(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.model = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setSelectionModel = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setSelectionModel");
          
              return this.__PROXY__.setSelectionModel(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.selectionModel = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.selectionModel");
          
              return this.__PROXY__.selectionModel(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setItemDelegate = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setItemDelegate");
          
              return this.__PROXY__.setItemDelegate(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setSelectionMode = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setSelectionMode");
          
              return this.__PROXY__.setSelectionMode(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setSelectionBehavior = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setSelectionBehavior");
          
              return this.__PROXY__.setSelectionBehavior(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.currentIndex = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.currentIndex");
          
              return this.__PROXY__.currentIndex(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.rootIndex = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.rootIndex");
          
              return this.__PROXY__.rootIndex(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setEditTriggers = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setEditTriggers");
          
              return this.__PROXY__.setEditTriggers(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setVerticalScrollMode");
          
              return this.__PROXY__.setVerticalScrollMode(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.resetVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.resetVerticalScrollMode");
          
              return this.__PROXY__.resetVerticalScrollMode(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setHorizontalScrollMode");
          
              return this.__PROXY__.setHorizontalScrollMode(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.resetHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.resetHorizontalScrollMode");
          
              return this.__PROXY__.resetHorizontalScrollMode(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setAutoScroll = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setAutoScroll");
          
              return this.__PROXY__.setAutoScroll(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.hasAutoScroll = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.hasAutoScroll");
          
              return this.__PROXY__.hasAutoScroll(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setAutoScrollMargin = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setAutoScrollMargin");
          
              return this.__PROXY__.setAutoScrollMargin(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setTabKeyNavigation = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setTabKeyNavigation");
          
              return this.__PROXY__.setTabKeyNavigation(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setDropIndicatorShown = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setDropIndicatorShown");
          
              return this.__PROXY__.setDropIndicatorShown(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setDragEnabled");
          
              return this.__PROXY__.setDragEnabled(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setDragDropOverwriteMode = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setDragDropOverwriteMode");
          
              return this.__PROXY__.setDragDropOverwriteMode(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setDragDropMode = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setDragDropMode");
          
              return this.__PROXY__.setDragDropMode(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setDefaultDropAction = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setDefaultDropAction");
          
              return this.__PROXY__.setDefaultDropAction(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setAlternatingRowColors = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setAlternatingRowColors");
          
              return this.__PROXY__.setAlternatingRowColors(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setTextElideMode = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setTextElideMode");
          
              return this.__PROXY__.setTextElideMode(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isPersistentEditorOpen = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isPersistentEditorOpen");
          
              return this.__PROXY__.isPersistentEditorOpen(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setIndexWidget = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setIndexWidget");
          
              return this.__PROXY__.setIndexWidget(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.indexWidget = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.indexWidget");
          
              return this.__PROXY__.indexWidget(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.edit = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.edit");
          
              return this.__PROXY__.edit(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.clearSelection");
          
              return this.__PROXY__.clearSelection(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.scrollToTop = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.scrollToTop");
          
              return this.__PROXY__.scrollToTop(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.scrollToBottom = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.scrollToBottom");
          
              return this.__PROXY__.scrollToBottom(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.update = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setRootIndex = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setRootIndex");
          
              return this.__PROXY__.setRootIndex(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.header = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.header");
          
              return this.__PROXY__.header(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setHeader = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setHeader");
          
              return this.__PROXY__.setHeader(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.autoExpandDelay = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.autoExpandDelay");
          
              return this.__PROXY__.autoExpandDelay(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setAutoExpandDelay = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setAutoExpandDelay");
          
              return this.__PROXY__.setAutoExpandDelay(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setIndentation = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setIndentation");
          
              return this.__PROXY__.setIndentation(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.resetIndentation = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.resetIndentation");
          
              return this.__PROXY__.resetIndentation(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setRootIsDecorated = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setRootIsDecorated");
          
              return this.__PROXY__.setRootIsDecorated(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setUniformRowHeights = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setUniformRowHeights");
          
              return this.__PROXY__.setUniformRowHeights(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setItemsExpandable = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setItemsExpandable");
          
              return this.__PROXY__.setItemsExpandable(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setExpandsOnDoubleClick = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setExpandsOnDoubleClick");
          
              return this.__PROXY__.setExpandsOnDoubleClick(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.columnViewportPosition = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.columnViewportPosition");
          
              return this.__PROXY__.columnViewportPosition(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.columnWidth = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.columnWidth");
          
              return this.__PROXY__.columnWidth(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setColumnWidth = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setColumnWidth");
          
              return this.__PROXY__.setColumnWidth(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.columnAt = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.columnAt");
          
              return this.__PROXY__.columnAt(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isColumnHidden = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isColumnHidden");
          
              return this.__PROXY__.isColumnHidden(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setColumnHidden = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setColumnHidden");
          
              return this.__PROXY__.setColumnHidden(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isHeaderHidden = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isHeaderHidden");
          
              return this.__PROXY__.isHeaderHidden(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setHeaderHidden = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setHeaderHidden");
          
              return this.__PROXY__.setHeaderHidden(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isRowHidden = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isRowHidden");
          
              return this.__PROXY__.isRowHidden(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setRowHidden = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setRowHidden");
          
              return this.__PROXY__.setRowHidden(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isFirstColumnSpanned = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isFirstColumnSpanned");
          
              return this.__PROXY__.isFirstColumnSpanned(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setFirstColumnSpanned = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setFirstColumnSpanned");
          
              return this.__PROXY__.setFirstColumnSpanned(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isExpanded = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isExpanded");
          
              return this.__PROXY__.isExpanded(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setExpanded = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setExpanded");
          
              return this.__PROXY__.setExpanded(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setSortingEnabled = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setSortingEnabled");
          
              return this.__PROXY__.setSortingEnabled(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isSortingEnabled = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isSortingEnabled");
          
              return this.__PROXY__.isSortingEnabled(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setAnimated = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setAnimated");
          
              return this.__PROXY__.setAnimated(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isAnimated = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isAnimated");
          
              return this.__PROXY__.isAnimated(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setAllColumnsShowFocus = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setAllColumnsShowFocus");
          
              return this.__PROXY__.setAllColumnsShowFocus(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setWordWrap = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setWordWrap");
          
              return this.__PROXY__.setWordWrap(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setTreePosition = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setTreePosition");
          
              return this.__PROXY__.setTreePosition(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.treePosition = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.treePosition");
          
              return this.__PROXY__.treePosition(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.keyboardSearch = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.keyboardSearch");
          
              return this.__PROXY__.keyboardSearch(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.visualRect = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.visualRect");
          
              return this.__PROXY__.visualRect(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.scrollTo = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.scrollTo");
          
              return this.__PROXY__.scrollTo(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.indexAt = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.indexAt");
          
              return this.__PROXY__.indexAt(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.indexAbove = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.indexAbove");
          
              return this.__PROXY__.indexAbove(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.indexBelow = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.indexBelow");
          
              return this.__PROXY__.indexBelow(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.doItemsLayout = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.doItemsLayout");
          
              return this.__PROXY__.doItemsLayout(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.reset = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.dataChanged = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.dataChanged");
          
              return this.__PROXY__.dataChanged(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.hideColumn = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.hideColumn");
          
              return this.__PROXY__.hideColumn(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.showColumn = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.showColumn");
          
              return this.__PROXY__.showColumn(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.expand = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.expand");
          
              return this.__PROXY__.expand(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.collapse = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.collapse");
          
              return this.__PROXY__.collapse(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.resizeColumnToContents = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.resizeColumnToContents");
          
              return this.__PROXY__.resizeColumnToContents(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.sortByColumn = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.sortByColumn");
          
              return this.__PROXY__.sortByColumn(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.expandAll = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.expandAll");
          
              return this.__PROXY__.expandAll(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.expandRecursively = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.expandRecursively");
          
              return this.__PROXY__.expandRecursively(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.collapseAll = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.collapseAll");
          
              return this.__PROXY__.collapseAll(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.expandToDepth = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.expandToDepth");
          
              return this.__PROXY__.expandToDepth(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.columnResized = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.columnResized");
          
              return this.__PROXY__.columnResized(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.columnCountChanged = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.columnCountChanged");
          
              return this.__PROXY__.columnCountChanged(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.columnMoved = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.columnMoved");
          
              return this.__PROXY__.columnMoved(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.reexpand = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.reexpand");
          
              return this.__PROXY__.reexpand(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.rowsRemoved = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.rowsRemoved");
          
              return this.__PROXY__.rowsRemoved(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.verticalScrollbarValueChanged = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.verticalScrollbarValueChanged");
          
              return this.__PROXY__.verticalScrollbarValueChanged(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBy(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.rowsInserted = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.rowsInserted");
          
              return this.__PROXY__.rowsInserted(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.rowsAboutToBeRemoved = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.rowsAboutToBeRemoved");
          
              return this.__PROXY__.rowsAboutToBeRemoved(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.moveCursor = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.moveCursor");
          
              return this.__PROXY__.moveCursor(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.horizontalOffset = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.horizontalOffset");
          
              return this.__PROXY__.horizontalOffset(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.verticalOffset = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.verticalOffset");
          
              return this.__PROXY__.verticalOffset(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.setSelection = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.setSelection");
          
              return this.__PROXY__.setSelection(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.visualRegionForSelection = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.visualRegionForSelection");
          
              return this.__PROXY__.visualRegionForSelection(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.selectedIndexes = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.selectedIndexes");
          
              return this.__PROXY__.selectedIndexes(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.timerEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.timerEvent");
          
              return this.__PROXY__.timerEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.drawTree = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.drawTree");
          
              return this.__PROXY__.drawTree(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.drawRow = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.drawRow");
          
              return this.__PROXY__.drawRow(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.drawBranches = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.drawBranches");
          
              return this.__PROXY__.drawBranches(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.viewportEvent = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.viewportEvent");
          
              return this.__PROXY__.viewportEvent(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.updateGeometries = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.updateGeometries");
          
              return this.__PROXY__.updateGeometries(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.viewportSizeHint = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.viewportSizeHint");
          
              return this.__PROXY__.viewportSizeHint(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.indexRowSizeHint = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.indexRowSizeHint");
          
              return this.__PROXY__.indexRowSizeHint(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.rowHeight = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.rowHeight");
          
              return this.__PROXY__.rowHeight(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.horizontalScrollbarAction = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.horizontalScrollbarAction");
          
              return this.__PROXY__.horizontalScrollbarAction(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.isIndexHidden = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.isIndexHidden");
          
              return this.__PROXY__.isIndexHidden(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.selectionChanged = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.selectionChanged");
          
              return this.__PROXY__.selectionChanged(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.currentChanged = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.currentChanged");
          
              return this.__PROXY__.currentChanged(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.visualIndex = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.visualIndex");
          
              return this.__PROXY__.visualIndex(...args);
            
        };
    
        // function 
        QHelpContentWidget.prototype.indexOf = function(...args) 
          
        {
          //print("JS: QHelpContentWidget.prototype.indexOf");
          
              return this.__PROXY__.indexOf(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QHelpContentWidget.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'autoScrollMargin', {
              get: function() {
                  
                      return this.__PROXY__.autoScrollMargin;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoScrollMargin(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'editTriggers', {
              get: function() {
                  
                      return this.__PROXY__.editTriggers;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditTriggers(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'tabKeyNavigation', {
              get: function() {
                  
                      return this.__PROXY__.tabKeyNavigation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabKeyNavigation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'showDropIndicator', {
              get: function() {
                  
                      return this.__PROXY__.showDropIndicator;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDropIndicatorShown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'dragEnabled', {
              get: function() {
                  
                      return this.__PROXY__.dragEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'dragDropOverwriteMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropOverwriteMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropOverwriteMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'dragDropMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'defaultDropAction', {
              get: function() {
                  
                      return this.__PROXY__.defaultDropAction;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultDropAction(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'alternatingRowColors', {
              get: function() {
                  
                      return this.__PROXY__.alternatingRowColors;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlternatingRowColors(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'selectionMode', {
              get: function() {
                  
                      return this.__PROXY__.selectionMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'selectionBehavior', {
              get: function() {
                  
                      return this.__PROXY__.selectionBehavior;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionBehavior(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'textElideMode', {
              get: function() {
                  
                      return this.__PROXY__.textElideMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextElideMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'verticalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.verticalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVerticalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'horizontalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.horizontalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHorizontalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'indentation', {
              get: function() {
                  
                      return this.__PROXY__.indentation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIndentation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'rootIsDecorated', {
              get: function() {
                  
                      return this.__PROXY__.rootIsDecorated;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setRootIsDecorated(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'uniformRowHeights', {
              get: function() {
                  
                      return this.__PROXY__.uniformRowHeights;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUniformRowHeights(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'itemsExpandable', {
              get: function() {
                  
                      return this.__PROXY__.itemsExpandable;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setItemsExpandable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'sortingEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isSortingEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSortingEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'animated', {
              get: function() {
                  
                      return this.__PROXY__.isAnimated();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAnimated(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'allColumnsShowFocus', {
              get: function() {
                  
                      return this.__PROXY__.allColumnsShowFocus;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAllColumnsShowFocus(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'wordWrap', {
              get: function() {
                  
                      return this.__PROXY__.wordWrap;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWordWrap(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'headerHidden', {
              get: function() {
                  
                      return this.__PROXY__.isHeaderHidden();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHeaderHidden(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'expandsOnDoubleClick', {
              get: function() {
                  
                      return this.__PROXY__.expandsOnDoubleClick;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setExpandsOnDoubleClick(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QHelpContentWidget.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QHelpContentWidget.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'pressed(QModelIndex)', {
              get: function() { return this.__PROXY__.pressed; },
              configurable: true
          });
        
        Object.defineProperty(QHelpContentWidget.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'clicked(QModelIndex)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(QHelpContentWidget.prototype, 'doubleClicked', {
            get: function() { return this.__PROXY__.doubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'doubleClicked(QModelIndex)', {
              get: function() { return this.__PROXY__.doubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(QHelpContentWidget.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'activated(QModelIndex)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(QHelpContentWidget.prototype, 'entered', {
            get: function() { return this.__PROXY__.entered; },
            configurable: true
        });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'entered(QModelIndex)', {
              get: function() { return this.__PROXY__.entered; },
              configurable: true
          });
        
        Object.defineProperty(QHelpContentWidget.prototype, 'expanded', {
            get: function() { return this.__PROXY__.expanded; },
            configurable: true
        });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'expanded(QModelIndex)', {
              get: function() { return this.__PROXY__.expanded; },
              configurable: true
          });
        
        Object.defineProperty(QHelpContentWidget.prototype, 'collapsed', {
            get: function() { return this.__PROXY__.collapsed; },
            configurable: true
        });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'collapsed(QModelIndex)', {
              get: function() { return this.__PROXY__.collapsed; },
              configurable: true
          });
        
        Object.defineProperty(QHelpContentWidget.prototype, 'linkActivated', {
            get: function() { return this.__PROXY__.linkActivated; },
            configurable: true
        });
        
          Object.defineProperty(QHelpContentWidget.prototype, 'linkActivated(QUrl)', {
              get: function() { return this.__PROXY__.linkActivated; },
              configurable: true
          });
        QHelpContentWidget.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QHelpContentWidget.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QHelpContentWidget.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHelpContentWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHelpContentWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QHelpContentWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      