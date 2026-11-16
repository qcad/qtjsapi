
      // auto generated
      //var self;

      // class constructor:
      function QHeaderView() {
        

        // should be QHeaderView_BaseJs.call(this, engine):
        //QHeaderView.prototype = new QHeaderView_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHeaderView.getIdStatic()))) {

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
            qWarning("QHeaderView.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QHeaderView_Wrapper(
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

      

        //copyProperties(this, wrapper, QHeaderView);
  }

  
  else {
    
        print("QHeaderView(): wrong number / type of arguments");
      
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

      //QHeaderView.prototype = new QHeaderView_BaseJs(engine);
      //QHeaderView.prototype = new QHeaderView_Wrapper(engine);
      QHeaderView.prototype = new Object();


      QHeaderView.prototype.toString = function() {
          //return "QHeaderView [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHeaderView [JS]";
        };
      QHeaderView.getObjectType = function() {
        return RJSType_QHeaderView.getIdStatic();
      };

      QHeaderView.prototype.getObjectType = function() {
        return RJSType_QHeaderView.getIdStatic();
      };

      QHeaderView.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHeaderView.getIdStatic()) {
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
QHeaderView.NoFrame = QHeaderView_Wrapper.NoFrame;
QHeaderView.Box = QHeaderView_Wrapper.Box;
QHeaderView.Panel = QHeaderView_Wrapper.Panel;
QHeaderView.WinPanel = QHeaderView_Wrapper.WinPanel;
QHeaderView.HLine = QHeaderView_Wrapper.HLine;
QHeaderView.VLine = QHeaderView_Wrapper.VLine;
QHeaderView.StyledPanel = QHeaderView_Wrapper.StyledPanel;

  // enum: Shadow
QHeaderView.Plain = QHeaderView_Wrapper.Plain;
QHeaderView.Raised = QHeaderView_Wrapper.Raised;
QHeaderView.Sunken = QHeaderView_Wrapper.Sunken;

  // enum: StyleMask
QHeaderView.Shadow_Mask = QHeaderView_Wrapper.Shadow_Mask;
QHeaderView.Shape_Mask = QHeaderView_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QHeaderView.AdjustIgnored = QHeaderView_Wrapper.AdjustIgnored;
QHeaderView.AdjustToContentsOnFirstShow = QHeaderView_Wrapper.AdjustToContentsOnFirstShow;
QHeaderView.AdjustToContents = QHeaderView_Wrapper.AdjustToContents;

  // enum: SelectionMode
QHeaderView.NoSelection = QHeaderView_Wrapper.NoSelection;
QHeaderView.SingleSelection = QHeaderView_Wrapper.SingleSelection;
QHeaderView.MultiSelection = QHeaderView_Wrapper.MultiSelection;
QHeaderView.ExtendedSelection = QHeaderView_Wrapper.ExtendedSelection;
QHeaderView.ContiguousSelection = QHeaderView_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
QHeaderView.SelectItems = QHeaderView_Wrapper.SelectItems;
QHeaderView.SelectRows = QHeaderView_Wrapper.SelectRows;
QHeaderView.SelectColumns = QHeaderView_Wrapper.SelectColumns;

  // enum: ScrollHint
QHeaderView.EnsureVisible = QHeaderView_Wrapper.EnsureVisible;
QHeaderView.PositionAtTop = QHeaderView_Wrapper.PositionAtTop;
QHeaderView.PositionAtBottom = QHeaderView_Wrapper.PositionAtBottom;
QHeaderView.PositionAtCenter = QHeaderView_Wrapper.PositionAtCenter;

  // enum: EditTrigger
QHeaderView.NoEditTriggers = QHeaderView_Wrapper.NoEditTriggers;
QHeaderView.CurrentChanged = QHeaderView_Wrapper.CurrentChanged;
QHeaderView.DoubleClicked = QHeaderView_Wrapper.DoubleClicked;
QHeaderView.SelectedClicked = QHeaderView_Wrapper.SelectedClicked;
QHeaderView.EditKeyPressed = QHeaderView_Wrapper.EditKeyPressed;
QHeaderView.AnyKeyPressed = QHeaderView_Wrapper.AnyKeyPressed;
QHeaderView.AllEditTriggers = QHeaderView_Wrapper.AllEditTriggers;

  // enum: ScrollMode
QHeaderView.ScrollPerItem = QHeaderView_Wrapper.ScrollPerItem;
QHeaderView.ScrollPerPixel = QHeaderView_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
QHeaderView.NoDragDrop = QHeaderView_Wrapper.NoDragDrop;
QHeaderView.DragOnly = QHeaderView_Wrapper.DragOnly;
QHeaderView.DropOnly = QHeaderView_Wrapper.DropOnly;
QHeaderView.DragDrop = QHeaderView_Wrapper.DragDrop;
QHeaderView.InternalMove = QHeaderView_Wrapper.InternalMove;

  // enum: ResizeMode
QHeaderView.Interactive = QHeaderView_Wrapper.Interactive;
QHeaderView.Stretch = QHeaderView_Wrapper.Stretch;
QHeaderView.Fixed = QHeaderView_Wrapper.Fixed;
QHeaderView.ResizeToContents = QHeaderView_Wrapper.ResizeToContents;
QHeaderView.Custom = QHeaderView_Wrapper.Custom;


      // functions:
      
        // function 
        QHeaderView.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QHeaderView.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QHeaderView.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QHeaderView.prototype.findChild = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QHeaderView.prototype.children = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QHeaderView.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QHeaderView.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QHeaderView.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QHeaderView.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QHeaderView.prototype.property = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QHeaderView.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QHeaderView.prototype.parent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QHeaderView.prototype.paintingActive = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.paintingActive");
          
              return this.__PROXY__.paintingActive(...args);
            
        };
        
        // function 
        QHeaderView.prototype.paintEngine = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.paintEngine");
          
              return this.__PROXY__.paintEngine(...args);
            
        };
        
        // function 
        QHeaderView.prototype.widthMM = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.widthMM");
          
              return this.__PROXY__.widthMM(...args);
            
        };
        
        // function 
        QHeaderView.prototype.heightMM = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.heightMM");
          
              return this.__PROXY__.heightMM(...args);
            
        };
        
        // function 
        QHeaderView.prototype.logicalDpiX = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.logicalDpiX");
          
              return this.__PROXY__.logicalDpiX(...args);
            
        };
        
        // function 
        QHeaderView.prototype.logicalDpiY = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.logicalDpiY");
          
              return this.__PROXY__.logicalDpiY(...args);
            
        };
        
        // function 
        QHeaderView.prototype.physicalDpiX = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.physicalDpiX");
          
              return this.__PROXY__.physicalDpiX(...args);
            
        };
        
        // function 
        QHeaderView.prototype.physicalDpiY = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.physicalDpiY");
          
              return this.__PROXY__.physicalDpiY(...args);
            
        };
        
        // function 
        QHeaderView.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.devicePixelRatio");
          
              return this.__PROXY__.devicePixelRatio(...args);
            
        };
        
        // function 
        QHeaderView.prototype.devicePixelRatioF = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.devicePixelRatioF");
          
              return this.__PROXY__.devicePixelRatioF(...args);
            
        };
        
        // function 
        QHeaderView.prototype.colorCount = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.colorCount");
          
              return this.__PROXY__.colorCount(...args);
            
        };
        
        // function 
        QHeaderView.prototype.depth = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.depth");
          
              return this.__PROXY__.depth(...args);
            
        };
        
        // function 
        QHeaderView.prototype.qt_paint_device_metric = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.qt_paint_device_metric");
          
              return this.__PROXY__.qt_paint_device_metric(...args);
            
        };
        
        // function 
        QHeaderView.prototype.devType = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QHeaderView.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isModal = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QHeaderView.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QHeaderView.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QHeaderView.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QHeaderView.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QHeaderView.prototype.window = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QHeaderView.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QHeaderView.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QHeaderView.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QHeaderView.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setFont = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QHeaderView.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QHeaderView.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QHeaderView.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QHeaderView.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QHeaderView.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setMask = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QHeaderView.prototype.mask = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QHeaderView.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QHeaderView.prototype.grab = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QHeaderView.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QHeaderView.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QHeaderView.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QHeaderView.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QHeaderView.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QHeaderView.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QHeaderView.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QHeaderView.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QHeaderView.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QHeaderView.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QHeaderView.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QHeaderView.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QHeaderView.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QHeaderView.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QHeaderView.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QHeaderView.prototype.repaint = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QHeaderView.prototype.show = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QHeaderView.prototype.hide = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QHeaderView.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QHeaderView.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QHeaderView.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QHeaderView.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QHeaderView.prototype.close = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QHeaderView.prototype.raise = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QHeaderView.prototype.lower = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QHeaderView.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QHeaderView.prototype.move = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QHeaderView.prototype.resize = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QHeaderView.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QHeaderView.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QHeaderView.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QHeaderView.prototype.windowState = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QHeaderView.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QHeaderView.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QHeaderView.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QHeaderView.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QHeaderView.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QHeaderView.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QHeaderView.prototype.layout = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QHeaderView.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setParent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.scroll = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QHeaderView.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QHeaderView.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QHeaderView.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QHeaderView.prototype.addAction = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QHeaderView.prototype.addActions = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QHeaderView.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QHeaderView.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QHeaderView.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QHeaderView.prototype.actions = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QHeaderView.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QHeaderView.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QHeaderView.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QHeaderView.prototype.windowType = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QHeaderView.prototype.childAt = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QHeaderView.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QHeaderView.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QHeaderView.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.metric = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QHeaderView.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QHeaderView.prototype.redirected = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QHeaderView.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QHeaderView.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QHeaderView.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QHeaderView.prototype.create = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QHeaderView.prototype.destroy = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QHeaderView.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QHeaderView.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QHeaderView.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QHeaderView.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QHeaderView.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QHeaderView.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QHeaderView.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QHeaderView.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QHeaderView.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
        
        // function 
        QHeaderView.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
        
        // function 
        QHeaderView.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
        
        // function 
        QHeaderView.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
        
        // function 
        QHeaderView.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
        
        // function 
        QHeaderView.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
        
        // function 
        QHeaderView.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
        
        // function 
        QHeaderView.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
        
        // function 
        QHeaderView.prototype.viewport = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setViewport = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
        
        // function 
        QHeaderView.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
        
        // function 
        QHeaderView.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setModel = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setModel");
          
              return this.__PROXY__.setModel(...args);
            
        };
        
        // function 
        QHeaderView.prototype.model = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setSelectionModel = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setSelectionModel");
          
              return this.__PROXY__.setSelectionModel(...args);
            
        };
        
        // function 
        QHeaderView.prototype.selectionModel = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.selectionModel");
          
              return this.__PROXY__.selectionModel(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setItemDelegate = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setItemDelegate");
          
              return this.__PROXY__.setItemDelegate(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setSelectionMode = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setSelectionMode");
          
              return this.__PROXY__.setSelectionMode(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setSelectionBehavior = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setSelectionBehavior");
          
              return this.__PROXY__.setSelectionBehavior(...args);
            
        };
        
        // function 
        QHeaderView.prototype.currentIndex = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.currentIndex");
          
              return this.__PROXY__.currentIndex(...args);
            
        };
        
        // function 
        QHeaderView.prototype.rootIndex = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.rootIndex");
          
              return this.__PROXY__.rootIndex(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setEditTriggers = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setEditTriggers");
          
              return this.__PROXY__.setEditTriggers(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setVerticalScrollMode");
          
              return this.__PROXY__.setVerticalScrollMode(...args);
            
        };
        
        // function 
        QHeaderView.prototype.resetVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.resetVerticalScrollMode");
          
              return this.__PROXY__.resetVerticalScrollMode(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setHorizontalScrollMode");
          
              return this.__PROXY__.setHorizontalScrollMode(...args);
            
        };
        
        // function 
        QHeaderView.prototype.resetHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.resetHorizontalScrollMode");
          
              return this.__PROXY__.resetHorizontalScrollMode(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setAutoScroll = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setAutoScroll");
          
              return this.__PROXY__.setAutoScroll(...args);
            
        };
        
        // function 
        QHeaderView.prototype.hasAutoScroll = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.hasAutoScroll");
          
              return this.__PROXY__.hasAutoScroll(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setAutoScrollMargin = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setAutoScrollMargin");
          
              return this.__PROXY__.setAutoScrollMargin(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setTabKeyNavigation = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setTabKeyNavigation");
          
              return this.__PROXY__.setTabKeyNavigation(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setDropIndicatorShown = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setDropIndicatorShown");
          
              return this.__PROXY__.setDropIndicatorShown(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setDragEnabled");
          
              return this.__PROXY__.setDragEnabled(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setDragDropOverwriteMode = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setDragDropOverwriteMode");
          
              return this.__PROXY__.setDragDropOverwriteMode(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setDragDropMode = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setDragDropMode");
          
              return this.__PROXY__.setDragDropMode(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setDefaultDropAction = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setDefaultDropAction");
          
              return this.__PROXY__.setDefaultDropAction(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setAlternatingRowColors = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setAlternatingRowColors");
          
              return this.__PROXY__.setAlternatingRowColors(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setTextElideMode = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setTextElideMode");
          
              return this.__PROXY__.setTextElideMode(...args);
            
        };
        
        // function 
        QHeaderView.prototype.keyboardSearch = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.keyboardSearch");
          
              return this.__PROXY__.keyboardSearch(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isPersistentEditorOpen = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isPersistentEditorOpen");
          
              return this.__PROXY__.isPersistentEditorOpen(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setIndexWidget = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setIndexWidget");
          
              return this.__PROXY__.setIndexWidget(...args);
            
        };
        
        // function 
        QHeaderView.prototype.indexWidget = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.indexWidget");
          
              return this.__PROXY__.indexWidget(...args);
            
        };
        
        // function 
        QHeaderView.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setRootIndex = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setRootIndex");
          
              return this.__PROXY__.setRootIndex(...args);
            
        };
        
        // function 
        QHeaderView.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
        
        // function 
        QHeaderView.prototype.edit = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.edit");
          
              return this.__PROXY__.edit(...args);
            
        };
        
        // function 
        QHeaderView.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.clearSelection");
          
              return this.__PROXY__.clearSelection(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
        
        // function 
        QHeaderView.prototype.scrollToTop = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.scrollToTop");
          
              return this.__PROXY__.scrollToTop(...args);
            
        };
        
        // function 
        QHeaderView.prototype.scrollToBottom = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.scrollToBottom");
          
              return this.__PROXY__.scrollToBottom(...args);
            
        };
        
        // function 
        QHeaderView.prototype.update = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QHeaderView.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
        
        // function 
        QHeaderView.prototype.orientation = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.orientation");
          
              return this.__PROXY__.orientation(...args);
            
        };
        
        // function 
        QHeaderView.prototype.offset = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.offset");
          
              return this.__PROXY__.offset(...args);
            
        };
        
        // function 
        QHeaderView.prototype.length = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.length");
          
              return this.__PROXY__.length(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QHeaderView.prototype.sectionSizeHint = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.sectionSizeHint");
          
              return this.__PROXY__.sectionSizeHint(...args);
            
        };
        
        // function 
        QHeaderView.prototype.visualIndexAt = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.visualIndexAt");
          
              return this.__PROXY__.visualIndexAt(...args);
            
        };
        
        // function 
        QHeaderView.prototype.logicalIndexAt = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.logicalIndexAt");
          
              return this.__PROXY__.logicalIndexAt(...args);
            
        };
        
        // function 
        QHeaderView.prototype.sectionSize = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.sectionSize");
          
              return this.__PROXY__.sectionSize(...args);
            
        };
        
        // function 
        QHeaderView.prototype.sectionPosition = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.sectionPosition");
          
              return this.__PROXY__.sectionPosition(...args);
            
        };
        
        // function 
        QHeaderView.prototype.sectionViewportPosition = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.sectionViewportPosition");
          
              return this.__PROXY__.sectionViewportPosition(...args);
            
        };
        
        // function 
        QHeaderView.prototype.moveSection = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.moveSection");
          
              return this.__PROXY__.moveSection(...args);
            
        };
        
        // function 
        QHeaderView.prototype.swapSections = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.swapSections");
          
              return this.__PROXY__.swapSections(...args);
            
        };
        
        // function 
        QHeaderView.prototype.resizeSection = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.resizeSection");
          
              return this.__PROXY__.resizeSection(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isSectionHidden = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isSectionHidden");
          
              return this.__PROXY__.isSectionHidden(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setSectionHidden = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setSectionHidden");
          
              return this.__PROXY__.setSectionHidden(...args);
            
        };
        
        // function 
        QHeaderView.prototype.hiddenSectionCount = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.hiddenSectionCount");
          
              return this.__PROXY__.hiddenSectionCount(...args);
            
        };
        
        // function 
        QHeaderView.prototype.hideSection = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.hideSection");
          
              return this.__PROXY__.hideSection(...args);
            
        };
        
        // function 
        QHeaderView.prototype.showSection = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.showSection");
          
              return this.__PROXY__.showSection(...args);
            
        };
        
        // function 
        QHeaderView.prototype.count = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.count");
          
              return this.__PROXY__.count(...args);
            
        };
        
        // function 
        QHeaderView.prototype.visualIndex = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.visualIndex");
          
              return this.__PROXY__.visualIndex(...args);
            
        };
        
        // function 
        QHeaderView.prototype.logicalIndex = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.logicalIndex");
          
              return this.__PROXY__.logicalIndex(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setSectionsMovable = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setSectionsMovable");
          
              return this.__PROXY__.setSectionsMovable(...args);
            
        };
        
        // function 
        QHeaderView.prototype.sectionsMovable = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.sectionsMovable");
          
              return this.__PROXY__.sectionsMovable(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setFirstSectionMovable = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setFirstSectionMovable");
          
              return this.__PROXY__.setFirstSectionMovable(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isFirstSectionMovable = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isFirstSectionMovable");
          
              return this.__PROXY__.isFirstSectionMovable(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setSectionsClickable = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setSectionsClickable");
          
              return this.__PROXY__.setSectionsClickable(...args);
            
        };
        
        // function 
        QHeaderView.prototype.sectionsClickable = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.sectionsClickable");
          
              return this.__PROXY__.sectionsClickable(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setHighlightSections = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setHighlightSections");
          
              return this.__PROXY__.setHighlightSections(...args);
            
        };
        
        // function 
        QHeaderView.prototype.sectionResizeMode = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.sectionResizeMode");
          
              return this.__PROXY__.sectionResizeMode(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setSectionResizeMode = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setSectionResizeMode");
          
              return this.__PROXY__.setSectionResizeMode(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setResizeContentsPrecision = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setResizeContentsPrecision");
          
              return this.__PROXY__.setResizeContentsPrecision(...args);
            
        };
        
        // function 
        QHeaderView.prototype.resizeContentsPrecision = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.resizeContentsPrecision");
          
              return this.__PROXY__.resizeContentsPrecision(...args);
            
        };
        
        // function 
        QHeaderView.prototype.stretchSectionCount = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.stretchSectionCount");
          
              return this.__PROXY__.stretchSectionCount(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setSortIndicatorShown = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setSortIndicatorShown");
          
              return this.__PROXY__.setSortIndicatorShown(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isSortIndicatorShown = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isSortIndicatorShown");
          
              return this.__PROXY__.isSortIndicatorShown(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setSortIndicator = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setSortIndicator");
          
              return this.__PROXY__.setSortIndicator(...args);
            
        };
        
        // function 
        QHeaderView.prototype.sortIndicatorSection = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.sortIndicatorSection");
          
              return this.__PROXY__.sortIndicatorSection(...args);
            
        };
        
        // function 
        QHeaderView.prototype.sortIndicatorOrder = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.sortIndicatorOrder");
          
              return this.__PROXY__.sortIndicatorOrder(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setSortIndicatorClearable = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setSortIndicatorClearable");
          
              return this.__PROXY__.setSortIndicatorClearable(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isSortIndicatorClearable = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isSortIndicatorClearable");
          
              return this.__PROXY__.isSortIndicatorClearable(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setStretchLastSection = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setStretchLastSection");
          
              return this.__PROXY__.setStretchLastSection(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setCascadingSectionResizes = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setCascadingSectionResizes");
          
              return this.__PROXY__.setCascadingSectionResizes(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setDefaultSectionSize = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setDefaultSectionSize");
          
              return this.__PROXY__.setDefaultSectionSize(...args);
            
        };
        
        // function 
        QHeaderView.prototype.resetDefaultSectionSize = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.resetDefaultSectionSize");
          
              return this.__PROXY__.resetDefaultSectionSize(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setMinimumSectionSize = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setMinimumSectionSize");
          
              return this.__PROXY__.setMinimumSectionSize(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setMaximumSectionSize = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setMaximumSectionSize");
          
              return this.__PROXY__.setMaximumSectionSize(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setDefaultAlignment = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setDefaultAlignment");
          
              return this.__PROXY__.setDefaultAlignment(...args);
            
        };
        
        // function 
        QHeaderView.prototype.doItemsLayout = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.doItemsLayout");
          
              return this.__PROXY__.doItemsLayout(...args);
            
        };
        
        // function 
        QHeaderView.prototype.sectionsMoved = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.sectionsMoved");
          
              return this.__PROXY__.sectionsMoved(...args);
            
        };
        
        // function 
        QHeaderView.prototype.sectionsHidden = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.sectionsHidden");
          
              return this.__PROXY__.sectionsHidden(...args);
            
        };
        
        // function 
        QHeaderView.prototype.saveState = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.saveState");
          
              return this.__PROXY__.saveState(...args);
            
        };
        
        // function 
        QHeaderView.prototype.restoreState = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.restoreState");
          
              return this.__PROXY__.restoreState(...args);
            
        };
        
        // function 
        QHeaderView.prototype.reset = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setOffset = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setOffset");
          
              return this.__PROXY__.setOffset(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setOffsetToSectionPosition = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setOffsetToSectionPosition");
          
              return this.__PROXY__.setOffsetToSectionPosition(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setOffsetToLastSection = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setOffsetToLastSection");
          
              return this.__PROXY__.setOffsetToLastSection(...args);
            
        };
        
        // function 
        QHeaderView.prototype.headerDataChanged = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.headerDataChanged");
          
              return this.__PROXY__.headerDataChanged(...args);
            
        };
        
        // function 
        QHeaderView.prototype.updateSection = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.updateSection");
          
              return this.__PROXY__.updateSection(...args);
            
        };
        
        // function 
        QHeaderView.prototype.resizeSections = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.resizeSections");
          
              return this.__PROXY__.resizeSections(...args);
            
        };
        
        // function 
        QHeaderView.prototype.sectionsInserted = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.sectionsInserted");
          
              return this.__PROXY__.sectionsInserted(...args);
            
        };
        
        // function 
        QHeaderView.prototype.sectionsAboutToBeRemoved = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.sectionsAboutToBeRemoved");
          
              return this.__PROXY__.sectionsAboutToBeRemoved(...args);
            
        };
        
        // function 
        QHeaderView.prototype.initialize = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.initialize");
          
              return this.__PROXY__.initialize(...args);
            
        };
        
        // function 
        QHeaderView.prototype.initializeSections = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.initializeSections");
          
              return this.__PROXY__.initializeSections(...args);
            
        };
        
        // function 
        QHeaderView.prototype.currentChanged = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.currentChanged");
          
              return this.__PROXY__.currentChanged(...args);
            
        };
        
        // function 
        QHeaderView.prototype.event = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QHeaderView.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QHeaderView.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QHeaderView.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QHeaderView.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QHeaderView.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.viewportEvent = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.viewportEvent");
          
              return this.__PROXY__.viewportEvent(...args);
            
        };
        
        // function 
        QHeaderView.prototype.paintSection = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.paintSection");
          
              return this.__PROXY__.paintSection(...args);
            
        };
        
        // function 
        QHeaderView.prototype.sectionSizeFromContents = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.sectionSizeFromContents");
          
              return this.__PROXY__.sectionSizeFromContents(...args);
            
        };
        
        // function 
        QHeaderView.prototype.horizontalOffset = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.horizontalOffset");
          
              return this.__PROXY__.horizontalOffset(...args);
            
        };
        
        // function 
        QHeaderView.prototype.verticalOffset = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.verticalOffset");
          
              return this.__PROXY__.verticalOffset(...args);
            
        };
        
        // function 
        QHeaderView.prototype.updateGeometries = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.updateGeometries");
          
              return this.__PROXY__.updateGeometries(...args);
            
        };
        
        // function 
        QHeaderView.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBy(...args);
            
        };
        
        // function 
        QHeaderView.prototype.dataChanged = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.dataChanged");
          
              return this.__PROXY__.dataChanged(...args);
            
        };
        
        // function 
        QHeaderView.prototype.rowsInserted = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.rowsInserted");
          
              return this.__PROXY__.rowsInserted(...args);
            
        };
        
        // function 
        QHeaderView.prototype.isIndexHidden = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.isIndexHidden");
          
              return this.__PROXY__.isIndexHidden(...args);
            
        };
        
        // function 
        QHeaderView.prototype.moveCursor = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.moveCursor");
          
              return this.__PROXY__.moveCursor(...args);
            
        };
        
        // function 
        QHeaderView.prototype.setSelection = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.setSelection");
          
              return this.__PROXY__.setSelection(...args);
            
        };
        
        // function 
        QHeaderView.prototype.visualRegionForSelection = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.visualRegionForSelection");
          
              return this.__PROXY__.visualRegionForSelection(...args);
            
        };
        
        // function 
        QHeaderView.prototype.initStyleOptionForIndex = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.initStyleOptionForIndex");
          
              return this.__PROXY__.initStyleOptionForIndex(...args);
            
        };
        
        // function 
        QHeaderView.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QHeaderView.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QHeaderView.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'autoScrollMargin', {
              get: function() {
                  
                      return this.__PROXY__.autoScrollMargin;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoScrollMargin(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'editTriggers', {
              get: function() {
                  
                      return this.__PROXY__.editTriggers;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditTriggers(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'tabKeyNavigation', {
              get: function() {
                  
                      return this.__PROXY__.tabKeyNavigation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabKeyNavigation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'showDropIndicator', {
              get: function() {
                  
                      return this.__PROXY__.showDropIndicator;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDropIndicatorShown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'dragEnabled', {
              get: function() {
                  
                      return this.__PROXY__.dragEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'dragDropOverwriteMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropOverwriteMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropOverwriteMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'dragDropMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'defaultDropAction', {
              get: function() {
                  
                      return this.__PROXY__.defaultDropAction;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultDropAction(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'alternatingRowColors', {
              get: function() {
                  
                      return this.__PROXY__.alternatingRowColors;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlternatingRowColors(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'selectionMode', {
              get: function() {
                  
                      return this.__PROXY__.selectionMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'selectionBehavior', {
              get: function() {
                  
                      return this.__PROXY__.selectionBehavior;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionBehavior(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'textElideMode', {
              get: function() {
                  
                      return this.__PROXY__.textElideMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextElideMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'verticalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.verticalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVerticalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'horizontalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.horizontalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHorizontalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'showSortIndicator', {
              get: function() {
                  
                      return this.__PROXY__.isSortIndicatorShown();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSortIndicatorShown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'highlightSections', {
              get: function() {
                  
                      return this.__PROXY__.highlightSections;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHighlightSections(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'stretchLastSection', {
              get: function() {
                  
                      return this.__PROXY__.stretchLastSection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStretchLastSection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'cascadingSectionResizes', {
              get: function() {
                  
                      return this.__PROXY__.cascadingSectionResizes;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCascadingSectionResizes(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'defaultSectionSize', {
              get: function() {
                  
                      return this.__PROXY__.defaultSectionSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultSectionSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'minimumSectionSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSectionSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSectionSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'maximumSectionSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSectionSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSectionSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'defaultAlignment', {
              get: function() {
                  
                      return this.__PROXY__.defaultAlignment;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultAlignment(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHeaderView.prototype, 'sortIndicatorClearable', {
              get: function() {
                  
                      return this.__PROXY__.isSortIndicatorClearable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSortIndicatorClearable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QHeaderView.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QHeaderView.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QHeaderView.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
          Object.defineProperty(QHeaderView.prototype, 'pressed(QModelIndex)', {
              get: function() { return this.__PROXY__.pressed; },
              configurable: true
          });
        
        Object.defineProperty(QHeaderView.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(QHeaderView.prototype, 'clicked(QModelIndex)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(QHeaderView.prototype, 'doubleClicked', {
            get: function() { return this.__PROXY__.doubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(QHeaderView.prototype, 'doubleClicked(QModelIndex)', {
              get: function() { return this.__PROXY__.doubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(QHeaderView.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(QHeaderView.prototype, 'activated(QModelIndex)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(QHeaderView.prototype, 'entered', {
            get: function() { return this.__PROXY__.entered; },
            configurable: true
        });
        
          Object.defineProperty(QHeaderView.prototype, 'entered(QModelIndex)', {
              get: function() { return this.__PROXY__.entered; },
              configurable: true
          });
        
        Object.defineProperty(QHeaderView.prototype, 'sectionMoved', {
            get: function() { return this.__PROXY__.sectionMoved; },
            configurable: true
        });
        
          Object.defineProperty(QHeaderView.prototype, 'sectionMoved(int,int,int)', {
              get: function() { return this.__PROXY__.sectionMoved; },
              configurable: true
          });
        
        Object.defineProperty(QHeaderView.prototype, 'sectionResized', {
            get: function() { return this.__PROXY__.sectionResized; },
            configurable: true
        });
        
          Object.defineProperty(QHeaderView.prototype, 'sectionResized(int,int,int)', {
              get: function() { return this.__PROXY__.sectionResized; },
              configurable: true
          });
        
        Object.defineProperty(QHeaderView.prototype, 'sectionPressed', {
            get: function() { return this.__PROXY__.sectionPressed; },
            configurable: true
        });
        
          Object.defineProperty(QHeaderView.prototype, 'sectionPressed(int)', {
              get: function() { return this.__PROXY__.sectionPressed; },
              configurable: true
          });
        
        Object.defineProperty(QHeaderView.prototype, 'sectionClicked', {
            get: function() { return this.__PROXY__.sectionClicked; },
            configurable: true
        });
        
          Object.defineProperty(QHeaderView.prototype, 'sectionClicked(int)', {
              get: function() { return this.__PROXY__.sectionClicked; },
              configurable: true
          });
        
        Object.defineProperty(QHeaderView.prototype, 'sectionEntered', {
            get: function() { return this.__PROXY__.sectionEntered; },
            configurable: true
        });
        
          Object.defineProperty(QHeaderView.prototype, 'sectionEntered(int)', {
              get: function() { return this.__PROXY__.sectionEntered; },
              configurable: true
          });
        
        Object.defineProperty(QHeaderView.prototype, 'sectionDoubleClicked', {
            get: function() { return this.__PROXY__.sectionDoubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(QHeaderView.prototype, 'sectionDoubleClicked(int)', {
              get: function() { return this.__PROXY__.sectionDoubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(QHeaderView.prototype, 'sectionCountChanged', {
            get: function() { return this.__PROXY__.sectionCountChanged; },
            configurable: true
        });
        
          Object.defineProperty(QHeaderView.prototype, 'sectionCountChanged(int,int)', {
              get: function() { return this.__PROXY__.sectionCountChanged; },
              configurable: true
          });
        
        Object.defineProperty(QHeaderView.prototype, 'sectionHandleDoubleClicked', {
            get: function() { return this.__PROXY__.sectionHandleDoubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(QHeaderView.prototype, 'sectionHandleDoubleClicked(int)', {
              get: function() { return this.__PROXY__.sectionHandleDoubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(QHeaderView.prototype, 'geometriesChanged', {
            get: function() { return this.__PROXY__.geometriesChanged; },
            configurable: true
        });
        
        Object.defineProperty(QHeaderView.prototype, 'sortIndicatorChanged', {
            get: function() { return this.__PROXY__.sortIndicatorChanged; },
            configurable: true
        });
        
          Object.defineProperty(QHeaderView.prototype, 'sortIndicatorChanged(int,Qt::SortOrder)', {
              get: function() { return this.__PROXY__.sortIndicatorChanged; },
              configurable: true
          });
        
        Object.defineProperty(QHeaderView.prototype, 'sortIndicatorClearableChanged', {
            get: function() { return this.__PROXY__.sortIndicatorClearableChanged; },
            configurable: true
        });
        
          Object.defineProperty(QHeaderView.prototype, 'sortIndicatorClearableChanged(bool)', {
              get: function() { return this.__PROXY__.sortIndicatorClearableChanged; },
              configurable: true
          });
        QHeaderView.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QHeaderView.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QHeaderView.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHeaderView.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHeaderView.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QHeaderView.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      