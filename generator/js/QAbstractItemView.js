
      // auto generated
      //var self;

      // class constructor:
      function QAbstractItemView() {
        

        // should be QAbstractItemView_BaseJs.call(this, engine):
        //QAbstractItemView.prototype = new QAbstractItemView_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractItemView.getIdStatic()))) {

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
            qWarning("QAbstractItemView.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QAbstractItemView.js: No constructor found for class QAbstractItemView");
            
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

      //QAbstractItemView.prototype = new QAbstractItemView_BaseJs(engine);
      //QAbstractItemView.prototype = new QAbstractItemView_Wrapper(engine);
      QAbstractItemView.prototype = new Object();


      QAbstractItemView.prototype.toString = function() {
          //return "QAbstractItemView [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractItemView [JS]";
        };
      QAbstractItemView.getObjectType = function() {
        return RJSType_QAbstractItemView.getIdStatic();
      };

      QAbstractItemView.prototype.getObjectType = function() {
        return RJSType_QAbstractItemView.getIdStatic();
      };

      QAbstractItemView.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractItemView.getIdStatic()) {
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
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QAbstractItemView.NoFrame = QAbstractItemView_Wrapper.NoFrame;
QAbstractItemView.Box = QAbstractItemView_Wrapper.Box;
QAbstractItemView.Panel = QAbstractItemView_Wrapper.Panel;
QAbstractItemView.WinPanel = QAbstractItemView_Wrapper.WinPanel;
QAbstractItemView.HLine = QAbstractItemView_Wrapper.HLine;
QAbstractItemView.VLine = QAbstractItemView_Wrapper.VLine;
QAbstractItemView.StyledPanel = QAbstractItemView_Wrapper.StyledPanel;

  // enum: Shadow
QAbstractItemView.Plain = QAbstractItemView_Wrapper.Plain;
QAbstractItemView.Raised = QAbstractItemView_Wrapper.Raised;
QAbstractItemView.Sunken = QAbstractItemView_Wrapper.Sunken;

  // enum: StyleMask
QAbstractItemView.Shadow_Mask = QAbstractItemView_Wrapper.Shadow_Mask;
QAbstractItemView.Shape_Mask = QAbstractItemView_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QAbstractItemView.AdjustIgnored = QAbstractItemView_Wrapper.AdjustIgnored;
QAbstractItemView.AdjustToContentsOnFirstShow = QAbstractItemView_Wrapper.AdjustToContentsOnFirstShow;
QAbstractItemView.AdjustToContents = QAbstractItemView_Wrapper.AdjustToContents;

  // enum: SelectionMode
QAbstractItemView.NoSelection = QAbstractItemView_Wrapper.NoSelection;
QAbstractItemView.SingleSelection = QAbstractItemView_Wrapper.SingleSelection;
QAbstractItemView.MultiSelection = QAbstractItemView_Wrapper.MultiSelection;
QAbstractItemView.ExtendedSelection = QAbstractItemView_Wrapper.ExtendedSelection;
QAbstractItemView.ContiguousSelection = QAbstractItemView_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
QAbstractItemView.SelectItems = QAbstractItemView_Wrapper.SelectItems;
QAbstractItemView.SelectRows = QAbstractItemView_Wrapper.SelectRows;
QAbstractItemView.SelectColumns = QAbstractItemView_Wrapper.SelectColumns;

  // enum: ScrollHint
QAbstractItemView.EnsureVisible = QAbstractItemView_Wrapper.EnsureVisible;
QAbstractItemView.PositionAtTop = QAbstractItemView_Wrapper.PositionAtTop;
QAbstractItemView.PositionAtBottom = QAbstractItemView_Wrapper.PositionAtBottom;
QAbstractItemView.PositionAtCenter = QAbstractItemView_Wrapper.PositionAtCenter;

  // enum: EditTrigger
QAbstractItemView.NoEditTriggers = QAbstractItemView_Wrapper.NoEditTriggers;
QAbstractItemView.CurrentChanged = QAbstractItemView_Wrapper.CurrentChanged;
QAbstractItemView.DoubleClicked = QAbstractItemView_Wrapper.DoubleClicked;
QAbstractItemView.SelectedClicked = QAbstractItemView_Wrapper.SelectedClicked;
QAbstractItemView.EditKeyPressed = QAbstractItemView_Wrapper.EditKeyPressed;
QAbstractItemView.AnyKeyPressed = QAbstractItemView_Wrapper.AnyKeyPressed;
QAbstractItemView.AllEditTriggers = QAbstractItemView_Wrapper.AllEditTriggers;

  // enum: ScrollMode
QAbstractItemView.ScrollPerItem = QAbstractItemView_Wrapper.ScrollPerItem;
QAbstractItemView.ScrollPerPixel = QAbstractItemView_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
QAbstractItemView.NoDragDrop = QAbstractItemView_Wrapper.NoDragDrop;
QAbstractItemView.DragOnly = QAbstractItemView_Wrapper.DragOnly;
QAbstractItemView.DropOnly = QAbstractItemView_Wrapper.DropOnly;
QAbstractItemView.DragDrop = QAbstractItemView_Wrapper.DragDrop;
QAbstractItemView.InternalMove = QAbstractItemView_Wrapper.InternalMove;


      // functions:
      
        // function 
        QAbstractItemView.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.findChild = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.children = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.property = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.parent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.paintingActive = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.paintingActive");
          
              return this.__PROXY__.paintingActive(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.paintEngine = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.paintEngine");
          
              return this.__PROXY__.paintEngine(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.widthMM = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.widthMM");
          
              return this.__PROXY__.widthMM(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.heightMM = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.heightMM");
          
              return this.__PROXY__.heightMM(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.logicalDpiX = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.logicalDpiX");
          
              return this.__PROXY__.logicalDpiX(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.logicalDpiY = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.logicalDpiY");
          
              return this.__PROXY__.logicalDpiY(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.physicalDpiX = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.physicalDpiX");
          
              return this.__PROXY__.physicalDpiX(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.physicalDpiY = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.physicalDpiY");
          
              return this.__PROXY__.physicalDpiY(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.devicePixelRatio");
          
              return this.__PROXY__.devicePixelRatio(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.devicePixelRatioF = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.devicePixelRatioF");
          
              return this.__PROXY__.devicePixelRatioF(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.colorCount = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.colorCount");
          
              return this.__PROXY__.colorCount(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.depth = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.depth");
          
              return this.__PROXY__.depth(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.qt_paint_device_metric = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.qt_paint_device_metric");
          
              return this.__PROXY__.qt_paint_device_metric(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.devType = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isModal = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.window = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setFont = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setMask = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.mask = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.grab = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.repaint = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.show = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.hide = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.close = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.raise = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.lower = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.move = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.resize = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.windowState = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.layout = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setParent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.scroll = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.addAction = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.addActions = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.actions = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.windowType = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.childAt = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.event = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.metric = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.redirected = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.create = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.destroy = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.viewport = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setViewport = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setModel = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setModel");
          
              return this.__PROXY__.setModel(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.model = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setSelectionModel = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setSelectionModel");
          
              return this.__PROXY__.setSelectionModel(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.selectionModel = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.selectionModel");
          
              return this.__PROXY__.selectionModel(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setItemDelegate = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setItemDelegate");
          
              return this.__PROXY__.setItemDelegate(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setSelectionMode = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setSelectionMode");
          
              return this.__PROXY__.setSelectionMode(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setSelectionBehavior = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setSelectionBehavior");
          
              return this.__PROXY__.setSelectionBehavior(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.currentIndex = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.currentIndex");
          
              return this.__PROXY__.currentIndex(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.rootIndex = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.rootIndex");
          
              return this.__PROXY__.rootIndex(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setEditTriggers = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setEditTriggers");
          
              return this.__PROXY__.setEditTriggers(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setVerticalScrollMode");
          
              return this.__PROXY__.setVerticalScrollMode(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.resetVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.resetVerticalScrollMode");
          
              return this.__PROXY__.resetVerticalScrollMode(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setHorizontalScrollMode");
          
              return this.__PROXY__.setHorizontalScrollMode(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.resetHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.resetHorizontalScrollMode");
          
              return this.__PROXY__.resetHorizontalScrollMode(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setAutoScroll = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setAutoScroll");
          
              return this.__PROXY__.setAutoScroll(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.hasAutoScroll = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.hasAutoScroll");
          
              return this.__PROXY__.hasAutoScroll(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setAutoScrollMargin = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setAutoScrollMargin");
          
              return this.__PROXY__.setAutoScrollMargin(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setTabKeyNavigation = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setTabKeyNavigation");
          
              return this.__PROXY__.setTabKeyNavigation(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setDropIndicatorShown = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setDropIndicatorShown");
          
              return this.__PROXY__.setDropIndicatorShown(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setDragEnabled");
          
              return this.__PROXY__.setDragEnabled(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setDragDropOverwriteMode = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setDragDropOverwriteMode");
          
              return this.__PROXY__.setDragDropOverwriteMode(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setDragDropMode = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setDragDropMode");
          
              return this.__PROXY__.setDragDropMode(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setDefaultDropAction = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setDefaultDropAction");
          
              return this.__PROXY__.setDefaultDropAction(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setAlternatingRowColors = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setAlternatingRowColors");
          
              return this.__PROXY__.setAlternatingRowColors(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setTextElideMode = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setTextElideMode");
          
              return this.__PROXY__.setTextElideMode(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.keyboardSearch = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.keyboardSearch");
          
              return this.__PROXY__.keyboardSearch(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.visualRect = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.visualRect");
          
              return this.__PROXY__.visualRect(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.scrollTo = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.scrollTo");
          
              return this.__PROXY__.scrollTo(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.indexAt = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.indexAt");
          
              return this.__PROXY__.indexAt(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.isPersistentEditorOpen = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.isPersistentEditorOpen");
          
              return this.__PROXY__.isPersistentEditorOpen(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setIndexWidget = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setIndexWidget");
          
              return this.__PROXY__.setIndexWidget(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.indexWidget = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.indexWidget");
          
              return this.__PROXY__.indexWidget(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.reset = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setRootIndex = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setRootIndex");
          
              return this.__PROXY__.setRootIndex(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.doItemsLayout = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.doItemsLayout");
          
              return this.__PROXY__.doItemsLayout(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.edit = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.edit");
          
              return this.__PROXY__.edit(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.clearSelection");
          
              return this.__PROXY__.clearSelection(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.scrollToTop = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.scrollToTop");
          
              return this.__PROXY__.scrollToTop(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.scrollToBottom = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.scrollToBottom");
          
              return this.__PROXY__.scrollToBottom(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.update = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QAbstractItemView.prototype.currentChanged = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.currentChanged");
          
              return this.__PROXY__.currentChangedSuper(...args);
            
        };
        QAbstractItemView.prototype.currentChanged.__SUPER__ = true;
        
        // function 
        QAbstractItemView.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QAbstractItemView.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QAbstractItemView.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QAbstractItemView.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        QAbstractItemView.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QAbstractItemView.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QAbstractItemView.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'autoScrollMargin', {
              get: function() {
                  
                      return this.__PROXY__.autoScrollMargin;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoScrollMargin(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'editTriggers', {
              get: function() {
                  
                      return this.__PROXY__.editTriggers;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditTriggers(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'tabKeyNavigation', {
              get: function() {
                  
                      return this.__PROXY__.tabKeyNavigation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabKeyNavigation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'showDropIndicator', {
              get: function() {
                  
                      return this.__PROXY__.showDropIndicator;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDropIndicatorShown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'dragEnabled', {
              get: function() {
                  
                      return this.__PROXY__.dragEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'dragDropOverwriteMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropOverwriteMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropOverwriteMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'dragDropMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'defaultDropAction', {
              get: function() {
                  
                      return this.__PROXY__.defaultDropAction;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultDropAction(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'alternatingRowColors', {
              get: function() {
                  
                      return this.__PROXY__.alternatingRowColors;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlternatingRowColors(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'selectionMode', {
              get: function() {
                  
                      return this.__PROXY__.selectionMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'selectionBehavior', {
              get: function() {
                  
                      return this.__PROXY__.selectionBehavior;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionBehavior(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'textElideMode', {
              get: function() {
                  
                      return this.__PROXY__.textElideMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextElideMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'verticalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.verticalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVerticalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractItemView.prototype, 'horizontalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.horizontalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHorizontalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QAbstractItemView.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractItemView.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractItemView.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractItemView.prototype, 'pressed(QModelIndex)', {
              get: function() { return this.__PROXY__.pressed; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractItemView.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractItemView.prototype, 'clicked(QModelIndex)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractItemView.prototype, 'doubleClicked', {
            get: function() { return this.__PROXY__.doubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractItemView.prototype, 'doubleClicked(QModelIndex)', {
              get: function() { return this.__PROXY__.doubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractItemView.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractItemView.prototype, 'activated(QModelIndex)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractItemView.prototype, 'entered', {
            get: function() { return this.__PROXY__.entered; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractItemView.prototype, 'entered(QModelIndex)', {
              get: function() { return this.__PROXY__.entered; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractItemView.prototype, 'viewportEntered', {
            get: function() { return this.__PROXY__.viewportEntered; },
            configurable: true
        });
        
        Object.defineProperty(QAbstractItemView.prototype, 'iconSizeChanged', {
            get: function() { return this.__PROXY__.iconSizeChanged; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractItemView.prototype, 'iconSizeChanged(QSize)', {
              get: function() { return this.__PROXY__.iconSizeChanged; },
              configurable: true
          });
        QAbstractItemView.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QAbstractItemView.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QAbstractItemView.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractItemView.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractItemView.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QAbstractItemView.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      