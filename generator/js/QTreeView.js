
      // auto generated
      //var self;

      // class constructor:
      function QTreeView() {
        

        // should be QTreeView_BaseJs.call(this, engine):
        //QTreeView.prototype = new QTreeView_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTreeView.getIdStatic()))) {

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
            qWarning("QTreeView.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTreeView_Wrapper(
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

      

        //copyProperties(this, wrapper, QTreeView);
  }

  
  else {
    
        print("QTreeView(): wrong number / type of arguments");
      
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

      //QTreeView.prototype = new QTreeView_BaseJs(engine);
      //QTreeView.prototype = new QTreeView_Wrapper(engine);
      QTreeView.prototype = new Object();


      QTreeView.prototype.toString = function() {
          //return "QTreeView [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTreeView [JS]";
        };
      QTreeView.getObjectType = function() {
        return RJSType_QTreeView.getIdStatic();
      };

      QTreeView.prototype.getObjectType = function() {
        return RJSType_QTreeView.getIdStatic();
      };

      QTreeView.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTreeView.getIdStatic()) {
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
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QTreeView.NoFrame = QTreeView_Wrapper.NoFrame;
QTreeView.Box = QTreeView_Wrapper.Box;
QTreeView.Panel = QTreeView_Wrapper.Panel;
QTreeView.WinPanel = QTreeView_Wrapper.WinPanel;
QTreeView.HLine = QTreeView_Wrapper.HLine;
QTreeView.VLine = QTreeView_Wrapper.VLine;
QTreeView.StyledPanel = QTreeView_Wrapper.StyledPanel;

  // enum: Shadow
QTreeView.Plain = QTreeView_Wrapper.Plain;
QTreeView.Raised = QTreeView_Wrapper.Raised;
QTreeView.Sunken = QTreeView_Wrapper.Sunken;

  // enum: StyleMask
QTreeView.Shadow_Mask = QTreeView_Wrapper.Shadow_Mask;
QTreeView.Shape_Mask = QTreeView_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QTreeView.AdjustIgnored = QTreeView_Wrapper.AdjustIgnored;
QTreeView.AdjustToContentsOnFirstShow = QTreeView_Wrapper.AdjustToContentsOnFirstShow;
QTreeView.AdjustToContents = QTreeView_Wrapper.AdjustToContents;

  // enum: SelectionMode
QTreeView.NoSelection = QTreeView_Wrapper.NoSelection;
QTreeView.SingleSelection = QTreeView_Wrapper.SingleSelection;
QTreeView.MultiSelection = QTreeView_Wrapper.MultiSelection;
QTreeView.ExtendedSelection = QTreeView_Wrapper.ExtendedSelection;
QTreeView.ContiguousSelection = QTreeView_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
QTreeView.SelectItems = QTreeView_Wrapper.SelectItems;
QTreeView.SelectRows = QTreeView_Wrapper.SelectRows;
QTreeView.SelectColumns = QTreeView_Wrapper.SelectColumns;

  // enum: ScrollHint
QTreeView.EnsureVisible = QTreeView_Wrapper.EnsureVisible;
QTreeView.PositionAtTop = QTreeView_Wrapper.PositionAtTop;
QTreeView.PositionAtBottom = QTreeView_Wrapper.PositionAtBottom;
QTreeView.PositionAtCenter = QTreeView_Wrapper.PositionAtCenter;

  // enum: EditTrigger
QTreeView.NoEditTriggers = QTreeView_Wrapper.NoEditTriggers;
QTreeView.CurrentChanged = QTreeView_Wrapper.CurrentChanged;
QTreeView.DoubleClicked = QTreeView_Wrapper.DoubleClicked;
QTreeView.SelectedClicked = QTreeView_Wrapper.SelectedClicked;
QTreeView.EditKeyPressed = QTreeView_Wrapper.EditKeyPressed;
QTreeView.AnyKeyPressed = QTreeView_Wrapper.AnyKeyPressed;
QTreeView.AllEditTriggers = QTreeView_Wrapper.AllEditTriggers;

  // enum: ScrollMode
QTreeView.ScrollPerItem = QTreeView_Wrapper.ScrollPerItem;
QTreeView.ScrollPerPixel = QTreeView_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
QTreeView.NoDragDrop = QTreeView_Wrapper.NoDragDrop;
QTreeView.DragOnly = QTreeView_Wrapper.DragOnly;
QTreeView.DropOnly = QTreeView_Wrapper.DropOnly;
QTreeView.DragDrop = QTreeView_Wrapper.DragDrop;
QTreeView.InternalMove = QTreeView_Wrapper.InternalMove;


      // functions:
      
        // function 
        QTreeView.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QTreeView.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QTreeView.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QTreeView.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QTreeView.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QTreeView.prototype.findChild = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QTreeView.prototype.children = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QTreeView.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QTreeView.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QTreeView.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QTreeView.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QTreeView.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QTreeView.prototype.property = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QTreeView.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QTreeView.prototype.parent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QTreeView.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QTreeView.prototype.paintingActive = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.paintingActive");
          
              return this.__PROXY__.paintingActive(...args);
            
        };
        
        // function 
        QTreeView.prototype.paintEngine = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.paintEngine");
          
              return this.__PROXY__.paintEngine(...args);
            
        };
        
        // function 
        QTreeView.prototype.widthMM = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.widthMM");
          
              return this.__PROXY__.widthMM(...args);
            
        };
        
        // function 
        QTreeView.prototype.heightMM = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.heightMM");
          
              return this.__PROXY__.heightMM(...args);
            
        };
        
        // function 
        QTreeView.prototype.logicalDpiX = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.logicalDpiX");
          
              return this.__PROXY__.logicalDpiX(...args);
            
        };
        
        // function 
        QTreeView.prototype.logicalDpiY = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.logicalDpiY");
          
              return this.__PROXY__.logicalDpiY(...args);
            
        };
        
        // function 
        QTreeView.prototype.physicalDpiX = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.physicalDpiX");
          
              return this.__PROXY__.physicalDpiX(...args);
            
        };
        
        // function 
        QTreeView.prototype.physicalDpiY = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.physicalDpiY");
          
              return this.__PROXY__.physicalDpiY(...args);
            
        };
        
        // function 
        QTreeView.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.devicePixelRatio");
          
              return this.__PROXY__.devicePixelRatio(...args);
            
        };
        
        // function 
        QTreeView.prototype.devicePixelRatioF = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.devicePixelRatioF");
          
              return this.__PROXY__.devicePixelRatioF(...args);
            
        };
        
        // function 
        QTreeView.prototype.colorCount = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.colorCount");
          
              return this.__PROXY__.colorCount(...args);
            
        };
        
        // function 
        QTreeView.prototype.depth = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.depth");
          
              return this.__PROXY__.depth(...args);
            
        };
        
        // function 
        QTreeView.prototype.qt_paint_device_metric = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.qt_paint_device_metric");
          
              return this.__PROXY__.qt_paint_device_metric(...args);
            
        };
        
        // function 
        QTreeView.prototype.devType = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QTreeView.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QTreeView.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QTreeView.prototype.isModal = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QTreeView.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QTreeView.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QTreeView.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QTreeView.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QTreeView.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QTreeView.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QTreeView.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QTreeView.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QTreeView.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QTreeView.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QTreeView.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QTreeView.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QTreeView.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QTreeView.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QTreeView.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QTreeView.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QTreeView.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QTreeView.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QTreeView.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QTreeView.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QTreeView.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QTreeView.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QTreeView.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QTreeView.prototype.window = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QTreeView.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QTreeView.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QTreeView.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QTreeView.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QTreeView.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QTreeView.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QTreeView.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QTreeView.prototype.setFont = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QTreeView.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QTreeView.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QTreeView.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QTreeView.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QTreeView.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QTreeView.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QTreeView.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QTreeView.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QTreeView.prototype.setMask = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QTreeView.prototype.mask = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QTreeView.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QTreeView.prototype.grab = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QTreeView.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QTreeView.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QTreeView.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QTreeView.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QTreeView.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QTreeView.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QTreeView.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QTreeView.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QTreeView.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QTreeView.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QTreeView.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QTreeView.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QTreeView.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QTreeView.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QTreeView.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QTreeView.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QTreeView.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QTreeView.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QTreeView.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QTreeView.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QTreeView.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QTreeView.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QTreeView.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QTreeView.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QTreeView.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QTreeView.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QTreeView.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QTreeView.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QTreeView.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QTreeView.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QTreeView.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QTreeView.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QTreeView.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QTreeView.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QTreeView.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QTreeView.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QTreeView.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QTreeView.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QTreeView.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QTreeView.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QTreeView.prototype.repaint = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QTreeView.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QTreeView.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QTreeView.prototype.show = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QTreeView.prototype.hide = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QTreeView.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QTreeView.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QTreeView.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QTreeView.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QTreeView.prototype.close = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QTreeView.prototype.raise = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QTreeView.prototype.lower = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QTreeView.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QTreeView.prototype.move = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QTreeView.prototype.resize = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QTreeView.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QTreeView.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QTreeView.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QTreeView.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QTreeView.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QTreeView.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QTreeView.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QTreeView.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QTreeView.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QTreeView.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QTreeView.prototype.windowState = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QTreeView.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QTreeView.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QTreeView.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QTreeView.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QTreeView.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QTreeView.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QTreeView.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QTreeView.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QTreeView.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QTreeView.prototype.layout = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QTreeView.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QTreeView.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QTreeView.prototype.setParent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QTreeView.prototype.scroll = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QTreeView.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QTreeView.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QTreeView.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QTreeView.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QTreeView.prototype.addAction = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QTreeView.prototype.addActions = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QTreeView.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QTreeView.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QTreeView.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QTreeView.prototype.actions = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QTreeView.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QTreeView.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QTreeView.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QTreeView.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QTreeView.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QTreeView.prototype.windowType = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QTreeView.prototype.childAt = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QTreeView.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QTreeView.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QTreeView.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QTreeView.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QTreeView.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QTreeView.prototype.event = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QTreeView.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.metric = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QTreeView.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QTreeView.prototype.redirected = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QTreeView.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QTreeView.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QTreeView.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QTreeView.prototype.create = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QTreeView.prototype.destroy = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QTreeView.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QTreeView.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QTreeView.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QTreeView.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QTreeView.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QTreeView.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QTreeView.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QTreeView.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QTreeView.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QTreeView.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
        
        // function 
        QTreeView.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
        
        // function 
        QTreeView.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
        
        // function 
        QTreeView.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
        
        // function 
        QTreeView.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
        
        // function 
        QTreeView.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
        
        // function 
        QTreeView.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
        
        // function 
        QTreeView.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
        
        // function 
        QTreeView.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        
        // function 
        QTreeView.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
        
        // function 
        QTreeView.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
        
        // function 
        QTreeView.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
        
        // function 
        QTreeView.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
        
        // function 
        QTreeView.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
        
        // function 
        QTreeView.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
        
        // function 
        QTreeView.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
        
        // function 
        QTreeView.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
        
        // function 
        QTreeView.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
        
        // function 
        QTreeView.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
        
        // function 
        QTreeView.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
        
        // function 
        QTreeView.prototype.viewport = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
        
        // function 
        QTreeView.prototype.setViewport = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
        
        // function 
        QTreeView.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
        
        // function 
        QTreeView.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
        
        // function 
        QTreeView.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
        
        // function 
        QTreeView.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
        
        // function 
        QTreeView.prototype.setModel = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setModel");
          
              return this.__PROXY__.setModel(...args);
            
        };
        
        // function 
        QTreeView.prototype.model = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
        
        // function 
        QTreeView.prototype.setSelectionModel = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setSelectionModel");
          
              return this.__PROXY__.setSelectionModel(...args);
            
        };
        
        // function 
        QTreeView.prototype.selectionModel = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.selectionModel");
          
              return this.__PROXY__.selectionModel(...args);
            
        };
        
        // function 
        QTreeView.prototype.setItemDelegate = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setItemDelegate");
          
              return this.__PROXY__.setItemDelegate(...args);
            
        };
        
        // function 
        QTreeView.prototype.setSelectionMode = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setSelectionMode");
          
              return this.__PROXY__.setSelectionMode(...args);
            
        };
        
        // function 
        QTreeView.prototype.setSelectionBehavior = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setSelectionBehavior");
          
              return this.__PROXY__.setSelectionBehavior(...args);
            
        };
        
        // function 
        QTreeView.prototype.currentIndex = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.currentIndex");
          
              return this.__PROXY__.currentIndex(...args);
            
        };
        
        // function 
        QTreeView.prototype.rootIndex = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.rootIndex");
          
              return this.__PROXY__.rootIndex(...args);
            
        };
        
        // function 
        QTreeView.prototype.setEditTriggers = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setEditTriggers");
          
              return this.__PROXY__.setEditTriggers(...args);
            
        };
        
        // function 
        QTreeView.prototype.setVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setVerticalScrollMode");
          
              return this.__PROXY__.setVerticalScrollMode(...args);
            
        };
        
        // function 
        QTreeView.prototype.resetVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.resetVerticalScrollMode");
          
              return this.__PROXY__.resetVerticalScrollMode(...args);
            
        };
        
        // function 
        QTreeView.prototype.setHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setHorizontalScrollMode");
          
              return this.__PROXY__.setHorizontalScrollMode(...args);
            
        };
        
        // function 
        QTreeView.prototype.resetHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.resetHorizontalScrollMode");
          
              return this.__PROXY__.resetHorizontalScrollMode(...args);
            
        };
        
        // function 
        QTreeView.prototype.setAutoScroll = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setAutoScroll");
          
              return this.__PROXY__.setAutoScroll(...args);
            
        };
        
        // function 
        QTreeView.prototype.hasAutoScroll = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.hasAutoScroll");
          
              return this.__PROXY__.hasAutoScroll(...args);
            
        };
        
        // function 
        QTreeView.prototype.setAutoScrollMargin = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setAutoScrollMargin");
          
              return this.__PROXY__.setAutoScrollMargin(...args);
            
        };
        
        // function 
        QTreeView.prototype.setTabKeyNavigation = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setTabKeyNavigation");
          
              return this.__PROXY__.setTabKeyNavigation(...args);
            
        };
        
        // function 
        QTreeView.prototype.setDropIndicatorShown = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setDropIndicatorShown");
          
              return this.__PROXY__.setDropIndicatorShown(...args);
            
        };
        
        // function 
        QTreeView.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setDragEnabled");
          
              return this.__PROXY__.setDragEnabled(...args);
            
        };
        
        // function 
        QTreeView.prototype.setDragDropOverwriteMode = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setDragDropOverwriteMode");
          
              return this.__PROXY__.setDragDropOverwriteMode(...args);
            
        };
        
        // function 
        QTreeView.prototype.setDragDropMode = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setDragDropMode");
          
              return this.__PROXY__.setDragDropMode(...args);
            
        };
        
        // function 
        QTreeView.prototype.setDefaultDropAction = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setDefaultDropAction");
          
              return this.__PROXY__.setDefaultDropAction(...args);
            
        };
        
        // function 
        QTreeView.prototype.setAlternatingRowColors = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setAlternatingRowColors");
          
              return this.__PROXY__.setAlternatingRowColors(...args);
            
        };
        
        // function 
        QTreeView.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
        
        // function 
        QTreeView.prototype.setTextElideMode = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setTextElideMode");
          
              return this.__PROXY__.setTextElideMode(...args);
            
        };
        
        // function 
        QTreeView.prototype.isPersistentEditorOpen = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isPersistentEditorOpen");
          
              return this.__PROXY__.isPersistentEditorOpen(...args);
            
        };
        
        // function 
        QTreeView.prototype.setIndexWidget = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setIndexWidget");
          
              return this.__PROXY__.setIndexWidget(...args);
            
        };
        
        // function 
        QTreeView.prototype.indexWidget = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.indexWidget");
          
              return this.__PROXY__.indexWidget(...args);
            
        };
        
        // function 
        QTreeView.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QTreeView.prototype.edit = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.edit");
          
              return this.__PROXY__.edit(...args);
            
        };
        
        // function 
        QTreeView.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.clearSelection");
          
              return this.__PROXY__.clearSelection(...args);
            
        };
        
        // function 
        QTreeView.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
        
        // function 
        QTreeView.prototype.scrollToTop = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.scrollToTop");
          
              return this.__PROXY__.scrollToTop(...args);
            
        };
        
        // function 
        QTreeView.prototype.scrollToBottom = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.scrollToBottom");
          
              return this.__PROXY__.scrollToBottom(...args);
            
        };
        
        // function 
        QTreeView.prototype.update = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QTreeView.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
        
        // function 
        QTreeView.prototype.setRootIndex = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setRootIndex");
          
              return this.__PROXY__.setRootIndex(...args);
            
        };
        
        // function 
        QTreeView.prototype.header = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.header");
          
              return this.__PROXY__.header(...args);
            
        };
        
        // function 
        QTreeView.prototype.setHeader = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setHeader");
          
              return this.__PROXY__.setHeader(...args);
            
        };
        
        // function 
        QTreeView.prototype.autoExpandDelay = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.autoExpandDelay");
          
              return this.__PROXY__.autoExpandDelay(...args);
            
        };
        
        // function 
        QTreeView.prototype.setAutoExpandDelay = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setAutoExpandDelay");
          
              return this.__PROXY__.setAutoExpandDelay(...args);
            
        };
        
        // function 
        QTreeView.prototype.setIndentation = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setIndentation");
          
              return this.__PROXY__.setIndentation(...args);
            
        };
        
        // function 
        QTreeView.prototype.resetIndentation = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.resetIndentation");
          
              return this.__PROXY__.resetIndentation(...args);
            
        };
        
        // function 
        QTreeView.prototype.setRootIsDecorated = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setRootIsDecorated");
          
              return this.__PROXY__.setRootIsDecorated(...args);
            
        };
        
        // function 
        QTreeView.prototype.setUniformRowHeights = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setUniformRowHeights");
          
              return this.__PROXY__.setUniformRowHeights(...args);
            
        };
        
        // function 
        QTreeView.prototype.setItemsExpandable = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setItemsExpandable");
          
              return this.__PROXY__.setItemsExpandable(...args);
            
        };
        
        // function 
        QTreeView.prototype.setExpandsOnDoubleClick = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setExpandsOnDoubleClick");
          
              return this.__PROXY__.setExpandsOnDoubleClick(...args);
            
        };
        
        // function 
        QTreeView.prototype.columnViewportPosition = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.columnViewportPosition");
          
              return this.__PROXY__.columnViewportPosition(...args);
            
        };
        
        // function 
        QTreeView.prototype.columnWidth = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.columnWidth");
          
              return this.__PROXY__.columnWidth(...args);
            
        };
        
        // function 
        QTreeView.prototype.setColumnWidth = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setColumnWidth");
          
              return this.__PROXY__.setColumnWidth(...args);
            
        };
        
        // function 
        QTreeView.prototype.columnAt = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.columnAt");
          
              return this.__PROXY__.columnAt(...args);
            
        };
        
        // function 
        QTreeView.prototype.isColumnHidden = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isColumnHidden");
          
              return this.__PROXY__.isColumnHidden(...args);
            
        };
        
        // function 
        QTreeView.prototype.setColumnHidden = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setColumnHidden");
          
              return this.__PROXY__.setColumnHidden(...args);
            
        };
        
        // function 
        QTreeView.prototype.isHeaderHidden = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isHeaderHidden");
          
              return this.__PROXY__.isHeaderHidden(...args);
            
        };
        
        // function 
        QTreeView.prototype.setHeaderHidden = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setHeaderHidden");
          
              return this.__PROXY__.setHeaderHidden(...args);
            
        };
        
        // function 
        QTreeView.prototype.isRowHidden = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isRowHidden");
          
              return this.__PROXY__.isRowHidden(...args);
            
        };
        
        // function 
        QTreeView.prototype.setRowHidden = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setRowHidden");
          
              return this.__PROXY__.setRowHidden(...args);
            
        };
        
        // function 
        QTreeView.prototype.isFirstColumnSpanned = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isFirstColumnSpanned");
          
              return this.__PROXY__.isFirstColumnSpanned(...args);
            
        };
        
        // function 
        QTreeView.prototype.setFirstColumnSpanned = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setFirstColumnSpanned");
          
              return this.__PROXY__.setFirstColumnSpanned(...args);
            
        };
        
        // function 
        QTreeView.prototype.isExpanded = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isExpanded");
          
              return this.__PROXY__.isExpanded(...args);
            
        };
        
        // function 
        QTreeView.prototype.setExpanded = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setExpanded");
          
              return this.__PROXY__.setExpanded(...args);
            
        };
        
        // function 
        QTreeView.prototype.setSortingEnabled = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setSortingEnabled");
          
              return this.__PROXY__.setSortingEnabled(...args);
            
        };
        
        // function 
        QTreeView.prototype.isSortingEnabled = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isSortingEnabled");
          
              return this.__PROXY__.isSortingEnabled(...args);
            
        };
        
        // function 
        QTreeView.prototype.setAnimated = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setAnimated");
          
              return this.__PROXY__.setAnimated(...args);
            
        };
        
        // function 
        QTreeView.prototype.isAnimated = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isAnimated");
          
              return this.__PROXY__.isAnimated(...args);
            
        };
        
        // function 
        QTreeView.prototype.setAllColumnsShowFocus = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setAllColumnsShowFocus");
          
              return this.__PROXY__.setAllColumnsShowFocus(...args);
            
        };
        
        // function 
        QTreeView.prototype.setWordWrap = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setWordWrap");
          
              return this.__PROXY__.setWordWrap(...args);
            
        };
        
        // function 
        QTreeView.prototype.setTreePosition = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setTreePosition");
          
              return this.__PROXY__.setTreePosition(...args);
            
        };
        
        // function 
        QTreeView.prototype.treePosition = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.treePosition");
          
              return this.__PROXY__.treePosition(...args);
            
        };
        
        // function 
        QTreeView.prototype.keyboardSearch = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.keyboardSearch");
          
              return this.__PROXY__.keyboardSearch(...args);
            
        };
        
        // function 
        QTreeView.prototype.visualRect = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.visualRect");
          
              return this.__PROXY__.visualRect(...args);
            
        };
        
        // function 
        QTreeView.prototype.scrollTo = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.scrollTo");
          
              return this.__PROXY__.scrollTo(...args);
            
        };
        
        // function 
        QTreeView.prototype.indexAt = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.indexAt");
          
              return this.__PROXY__.indexAt(...args);
            
        };
        
        // function 
        QTreeView.prototype.indexAbove = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.indexAbove");
          
              return this.__PROXY__.indexAbove(...args);
            
        };
        
        // function 
        QTreeView.prototype.indexBelow = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.indexBelow");
          
              return this.__PROXY__.indexBelow(...args);
            
        };
        
        // function 
        QTreeView.prototype.doItemsLayout = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.doItemsLayout");
          
              return this.__PROXY__.doItemsLayout(...args);
            
        };
        
        // function 
        QTreeView.prototype.reset = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
        
        // function 
        QTreeView.prototype.dataChanged = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.dataChanged");
          
              return this.__PROXY__.dataChanged(...args);
            
        };
        
        // function 
        QTreeView.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
        
        // function 
        QTreeView.prototype.hideColumn = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.hideColumn");
          
              return this.__PROXY__.hideColumn(...args);
            
        };
        
        // function 
        QTreeView.prototype.showColumn = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.showColumn");
          
              return this.__PROXY__.showColumn(...args);
            
        };
        
        // function 
        QTreeView.prototype.expand = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.expand");
          
              return this.__PROXY__.expand(...args);
            
        };
        
        // function 
        QTreeView.prototype.collapse = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.collapse");
          
              return this.__PROXY__.collapse(...args);
            
        };
        
        // function 
        QTreeView.prototype.resizeColumnToContents = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.resizeColumnToContents");
          
              return this.__PROXY__.resizeColumnToContents(...args);
            
        };
        
        // function 
        QTreeView.prototype.sortByColumn = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.sortByColumn");
          
              return this.__PROXY__.sortByColumn(...args);
            
        };
        
        // function 
        QTreeView.prototype.expandAll = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.expandAll");
          
              return this.__PROXY__.expandAll(...args);
            
        };
        
        // function 
        QTreeView.prototype.expandRecursively = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.expandRecursively");
          
              return this.__PROXY__.expandRecursively(...args);
            
        };
        
        // function 
        QTreeView.prototype.collapseAll = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.collapseAll");
          
              return this.__PROXY__.collapseAll(...args);
            
        };
        
        // function 
        QTreeView.prototype.expandToDepth = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.expandToDepth");
          
              return this.__PROXY__.expandToDepth(...args);
            
        };
        
        // function 
        QTreeView.prototype.columnResized = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.columnResized");
          
              return this.__PROXY__.columnResized(...args);
            
        };
        
        // function 
        QTreeView.prototype.columnCountChanged = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.columnCountChanged");
          
              return this.__PROXY__.columnCountChanged(...args);
            
        };
        
        // function 
        QTreeView.prototype.columnMoved = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.columnMoved");
          
              return this.__PROXY__.columnMoved(...args);
            
        };
        
        // function 
        QTreeView.prototype.reexpand = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.reexpand");
          
              return this.__PROXY__.reexpand(...args);
            
        };
        
        // function 
        QTreeView.prototype.rowsRemoved = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.rowsRemoved");
          
              return this.__PROXY__.rowsRemoved(...args);
            
        };
        
        // function 
        QTreeView.prototype.verticalScrollbarValueChanged = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.verticalScrollbarValueChanged");
          
              return this.__PROXY__.verticalScrollbarValueChanged(...args);
            
        };
        
        // function 
        QTreeView.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBy(...args);
            
        };
        
        // function 
        QTreeView.prototype.rowsInserted = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.rowsInserted");
          
              return this.__PROXY__.rowsInserted(...args);
            
        };
        
        // function 
        QTreeView.prototype.rowsAboutToBeRemoved = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.rowsAboutToBeRemoved");
          
              return this.__PROXY__.rowsAboutToBeRemoved(...args);
            
        };
        
        // function 
        QTreeView.prototype.moveCursor = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.moveCursor");
          
              return this.__PROXY__.moveCursor(...args);
            
        };
        
        // function 
        QTreeView.prototype.horizontalOffset = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.horizontalOffset");
          
              return this.__PROXY__.horizontalOffset(...args);
            
        };
        
        // function 
        QTreeView.prototype.verticalOffset = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.verticalOffset");
          
              return this.__PROXY__.verticalOffset(...args);
            
        };
        
        // function 
        QTreeView.prototype.setSelection = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.setSelection");
          
              return this.__PROXY__.setSelection(...args);
            
        };
        
        // function 
        QTreeView.prototype.visualRegionForSelection = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.visualRegionForSelection");
          
              return this.__PROXY__.visualRegionForSelection(...args);
            
        };
        
        // function 
        QTreeView.prototype.selectedIndexes = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.selectedIndexes");
          
              return this.__PROXY__.selectedIndexes(...args);
            
        };
        
        // function 
        QTreeView.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.timerEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.timerEvent");
          
              return this.__PROXY__.timerEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QTreeView.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QTreeView.prototype.drawTree = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.drawTree");
          
              return this.__PROXY__.drawTree(...args);
            
        };
        
        // function 
        QTreeView.prototype.drawRow = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.drawRow");
          
              return this.__PROXY__.drawRow(...args);
            
        };
        
        // function 
        QTreeView.prototype.drawBranches = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.drawBranches");
          
              return this.__PROXY__.drawBranches(...args);
            
        };
        
        // function 
        QTreeView.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QTreeView.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QTreeView.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.viewportEvent = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.viewportEvent");
          
              return this.__PROXY__.viewportEvent(...args);
            
        };
        
        // function 
        QTreeView.prototype.updateGeometries = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.updateGeometries");
          
              return this.__PROXY__.updateGeometries(...args);
            
        };
        
        // function 
        QTreeView.prototype.viewportSizeHint = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.viewportSizeHint");
          
              return this.__PROXY__.viewportSizeHint(...args);
            
        };
        
        // function 
        QTreeView.prototype.indexRowSizeHint = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.indexRowSizeHint");
          
              return this.__PROXY__.indexRowSizeHint(...args);
            
        };
        
        // function 
        QTreeView.prototype.rowHeight = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.rowHeight");
          
              return this.__PROXY__.rowHeight(...args);
            
        };
        
        // function 
        QTreeView.prototype.horizontalScrollbarAction = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.horizontalScrollbarAction");
          
              return this.__PROXY__.horizontalScrollbarAction(...args);
            
        };
        
        // function 
        QTreeView.prototype.isIndexHidden = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.isIndexHidden");
          
              return this.__PROXY__.isIndexHidden(...args);
            
        };
        
        // function 
        QTreeView.prototype.selectionChanged = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.selectionChanged");
          
              return this.__PROXY__.selectionChanged(...args);
            
        };
        
        // function 
        QTreeView.prototype.currentChanged = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.currentChanged");
          
              return this.__PROXY__.currentChanged(...args);
            
        };
        
        // function 
        QTreeView.prototype.visualIndex = function(...args) 
          
        {
          //print("JS: QTreeView.prototype.visualIndex");
          
              return this.__PROXY__.visualIndex(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QTreeView.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'autoScrollMargin', {
              get: function() {
                  
                      return this.__PROXY__.autoScrollMargin;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoScrollMargin(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'editTriggers', {
              get: function() {
                  
                      return this.__PROXY__.editTriggers;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditTriggers(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'tabKeyNavigation', {
              get: function() {
                  
                      return this.__PROXY__.tabKeyNavigation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabKeyNavigation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'showDropIndicator', {
              get: function() {
                  
                      return this.__PROXY__.showDropIndicator;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDropIndicatorShown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'dragEnabled', {
              get: function() {
                  
                      return this.__PROXY__.dragEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'dragDropOverwriteMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropOverwriteMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropOverwriteMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'dragDropMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'defaultDropAction', {
              get: function() {
                  
                      return this.__PROXY__.defaultDropAction;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultDropAction(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'alternatingRowColors', {
              get: function() {
                  
                      return this.__PROXY__.alternatingRowColors;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlternatingRowColors(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'selectionMode', {
              get: function() {
                  
                      return this.__PROXY__.selectionMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'selectionBehavior', {
              get: function() {
                  
                      return this.__PROXY__.selectionBehavior;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionBehavior(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'textElideMode', {
              get: function() {
                  
                      return this.__PROXY__.textElideMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextElideMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'verticalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.verticalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVerticalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'horizontalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.horizontalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHorizontalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'indentation', {
              get: function() {
                  
                      return this.__PROXY__.indentation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIndentation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'rootIsDecorated', {
              get: function() {
                  
                      return this.__PROXY__.rootIsDecorated;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setRootIsDecorated(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'uniformRowHeights', {
              get: function() {
                  
                      return this.__PROXY__.uniformRowHeights;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUniformRowHeights(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'itemsExpandable', {
              get: function() {
                  
                      return this.__PROXY__.itemsExpandable;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setItemsExpandable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'sortingEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isSortingEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSortingEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'animated', {
              get: function() {
                  
                      return this.__PROXY__.isAnimated();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAnimated(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'allColumnsShowFocus', {
              get: function() {
                  
                      return this.__PROXY__.allColumnsShowFocus;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAllColumnsShowFocus(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'wordWrap', {
              get: function() {
                  
                      return this.__PROXY__.wordWrap;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWordWrap(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'headerHidden', {
              get: function() {
                  
                      return this.__PROXY__.isHeaderHidden();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHeaderHidden(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTreeView.prototype, 'expandsOnDoubleClick', {
              get: function() {
                  
                      return this.__PROXY__.expandsOnDoubleClick;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setExpandsOnDoubleClick(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QTreeView.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QTreeView.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QTreeView.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
          Object.defineProperty(QTreeView.prototype, 'pressed(QModelIndex)', {
              get: function() { return this.__PROXY__.pressed; },
              configurable: true
          });
        
        Object.defineProperty(QTreeView.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(QTreeView.prototype, 'clicked(QModelIndex)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(QTreeView.prototype, 'doubleClicked', {
            get: function() { return this.__PROXY__.doubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(QTreeView.prototype, 'doubleClicked(QModelIndex)', {
              get: function() { return this.__PROXY__.doubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(QTreeView.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(QTreeView.prototype, 'activated(QModelIndex)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(QTreeView.prototype, 'entered', {
            get: function() { return this.__PROXY__.entered; },
            configurable: true
        });
        
          Object.defineProperty(QTreeView.prototype, 'entered(QModelIndex)', {
              get: function() { return this.__PROXY__.entered; },
              configurable: true
          });
        
        Object.defineProperty(QTreeView.prototype, 'expanded', {
            get: function() { return this.__PROXY__.expanded; },
            configurable: true
        });
        
          Object.defineProperty(QTreeView.prototype, 'expanded(QModelIndex)', {
              get: function() { return this.__PROXY__.expanded; },
              configurable: true
          });
        
        Object.defineProperty(QTreeView.prototype, 'collapsed', {
            get: function() { return this.__PROXY__.collapsed; },
            configurable: true
        });
        
          Object.defineProperty(QTreeView.prototype, 'collapsed(QModelIndex)', {
              get: function() { return this.__PROXY__.collapsed; },
              configurable: true
          });
        QTreeView.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTreeView.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTreeView.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTreeView.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTreeView.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTreeView.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      