
      // auto generated
      //var self;

      // class constructor:
      function QListView() {
        

        // should be QListView_BaseJs.call(this, engine):
        //QListView.prototype = new QListView_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QListView.getIdStatic()))) {

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
            qWarning("QListView.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QListView_Wrapper(
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

      

        //copyProperties(this, wrapper, QListView);
  }

  
  else {
    
        print("QListView(): wrong number / type of arguments");
      
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

      //QListView.prototype = new QListView_BaseJs(engine);
      //QListView.prototype = new QListView_Wrapper(engine);
      QListView.prototype = new Object();


      QListView.prototype.toString = function() {
          //return "QListView [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QListView [JS]";
        };
      QListView.getObjectType = function() {
        return RJSType_QListView.getIdStatic();
      };

      QListView.prototype.getObjectType = function() {
        return RJSType_QListView.getIdStatic();
      };

      QListView.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QListView.getIdStatic()) {
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
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QListView.NoFrame = QListView_Wrapper.NoFrame;
QListView.Box = QListView_Wrapper.Box;
QListView.Panel = QListView_Wrapper.Panel;
QListView.WinPanel = QListView_Wrapper.WinPanel;
QListView.HLine = QListView_Wrapper.HLine;
QListView.VLine = QListView_Wrapper.VLine;
QListView.StyledPanel = QListView_Wrapper.StyledPanel;

  // enum: Shadow
QListView.Plain = QListView_Wrapper.Plain;
QListView.Raised = QListView_Wrapper.Raised;
QListView.Sunken = QListView_Wrapper.Sunken;

  // enum: StyleMask
QListView.Shadow_Mask = QListView_Wrapper.Shadow_Mask;
QListView.Shape_Mask = QListView_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QListView.AdjustIgnored = QListView_Wrapper.AdjustIgnored;
QListView.AdjustToContentsOnFirstShow = QListView_Wrapper.AdjustToContentsOnFirstShow;
QListView.AdjustToContents = QListView_Wrapper.AdjustToContents;

  // enum: SelectionMode
QListView.NoSelection = QListView_Wrapper.NoSelection;
QListView.SingleSelection = QListView_Wrapper.SingleSelection;
QListView.MultiSelection = QListView_Wrapper.MultiSelection;
QListView.ExtendedSelection = QListView_Wrapper.ExtendedSelection;
QListView.ContiguousSelection = QListView_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
QListView.SelectItems = QListView_Wrapper.SelectItems;
QListView.SelectRows = QListView_Wrapper.SelectRows;
QListView.SelectColumns = QListView_Wrapper.SelectColumns;

  // enum: ScrollHint
QListView.EnsureVisible = QListView_Wrapper.EnsureVisible;
QListView.PositionAtTop = QListView_Wrapper.PositionAtTop;
QListView.PositionAtBottom = QListView_Wrapper.PositionAtBottom;
QListView.PositionAtCenter = QListView_Wrapper.PositionAtCenter;

  // enum: EditTrigger
QListView.NoEditTriggers = QListView_Wrapper.NoEditTriggers;
QListView.CurrentChanged = QListView_Wrapper.CurrentChanged;
QListView.DoubleClicked = QListView_Wrapper.DoubleClicked;
QListView.SelectedClicked = QListView_Wrapper.SelectedClicked;
QListView.EditKeyPressed = QListView_Wrapper.EditKeyPressed;
QListView.AnyKeyPressed = QListView_Wrapper.AnyKeyPressed;
QListView.AllEditTriggers = QListView_Wrapper.AllEditTriggers;

  // enum: ScrollMode
QListView.ScrollPerItem = QListView_Wrapper.ScrollPerItem;
QListView.ScrollPerPixel = QListView_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
QListView.NoDragDrop = QListView_Wrapper.NoDragDrop;
QListView.DragOnly = QListView_Wrapper.DragOnly;
QListView.DropOnly = QListView_Wrapper.DropOnly;
QListView.DragDrop = QListView_Wrapper.DragDrop;
QListView.InternalMove = QListView_Wrapper.InternalMove;

  // enum: Movement
QListView.Static = QListView_Wrapper.Static;
QListView.Free = QListView_Wrapper.Free;
QListView.Snap = QListView_Wrapper.Snap;

  // enum: Flow
QListView.LeftToRight = QListView_Wrapper.LeftToRight;
QListView.TopToBottom = QListView_Wrapper.TopToBottom;

  // enum: ResizeMode
QListView.Fixed = QListView_Wrapper.Fixed;
QListView.Adjust = QListView_Wrapper.Adjust;

  // enum: LayoutMode
QListView.SinglePass = QListView_Wrapper.SinglePass;
QListView.Batched = QListView_Wrapper.Batched;

  // enum: ViewMode
QListView.ListMode = QListView_Wrapper.ListMode;
QListView.IconMode = QListView_Wrapper.IconMode;


      // functions:
      
        // function 
        QListView.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QListView.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QListView.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QListView.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QListView.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QListView.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QListView.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QListView.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QListView.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QListView.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QListView.prototype.findChild = function(...args) 
          
        {
          //print("JS: QListView.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QListView.prototype.children = function(...args) 
          
        {
          //print("JS: QListView.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QListView.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QListView.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QListView.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QListView.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QListView.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QListView.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QListView.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QListView.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QListView.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QListView.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QListView.prototype.property = function(...args) 
          
        {
          //print("JS: QListView.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QListView.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QListView.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QListView.prototype.parent = function(...args) 
          
        {
          //print("JS: QListView.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QListView.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QListView.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QListView.prototype.devType = function(...args) 
          
        {
          //print("JS: QListView.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QListView.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QListView.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QListView.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QListView.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QListView.prototype.isModal = function(...args) 
          
        {
          //print("JS: QListView.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QListView.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QListView.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QListView.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QListView.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QListView.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QListView.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QListView.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QListView.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QListView.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QListView.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QListView.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QListView.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QListView.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QListView.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QListView.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QListView.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QListView.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QListView.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QListView.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QListView.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QListView.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QListView.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QListView.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QListView.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QListView.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QListView.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QListView.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QListView.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QListView.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QListView.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QListView.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QListView.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QListView.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QListView.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QListView.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QListView.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QListView.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QListView.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QListView.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QListView.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QListView.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QListView.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QListView.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QListView.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QListView.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QListView.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QListView.prototype.window = function(...args) 
          
        {
          //print("JS: QListView.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QListView.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QListView.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QListView.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QListView.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QListView.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QListView.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QListView.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QListView.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QListView.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QListView.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QListView.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QListView.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QListView.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QListView.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QListView.prototype.setFont = function(...args) 
          
        {
          //print("JS: QListView.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QListView.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QListView.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QListView.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QListView.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QListView.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QListView.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QListView.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QListView.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QListView.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QListView.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QListView.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QListView.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QListView.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QListView.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QListView.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QListView.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QListView.prototype.setMask = function(...args) 
          
        {
          //print("JS: QListView.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QListView.prototype.mask = function(...args) 
          
        {
          //print("JS: QListView.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QListView.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QListView.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QListView.prototype.grab = function(...args) 
          
        {
          //print("JS: QListView.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QListView.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QListView.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QListView.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QListView.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QListView.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QListView.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QListView.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QListView.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QListView.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QListView.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QListView.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QListView.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QListView.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QListView.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QListView.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QListView.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QListView.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QListView.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QListView.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QListView.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QListView.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QListView.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QListView.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QListView.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QListView.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QListView.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QListView.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QListView.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QListView.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QListView.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QListView.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QListView.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QListView.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QListView.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QListView.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QListView.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QListView.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QListView.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QListView.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QListView.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QListView.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QListView.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QListView.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QListView.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QListView.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QListView.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QListView.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QListView.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QListView.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QListView.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QListView.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QListView.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QListView.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QListView.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QListView.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QListView.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QListView.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QListView.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QListView.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QListView.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QListView.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QListView.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QListView.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QListView.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QListView.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QListView.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QListView.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QListView.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QListView.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QListView.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QListView.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QListView.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QListView.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QListView.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QListView.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QListView.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QListView.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QListView.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QListView.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QListView.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QListView.prototype.repaint = function(...args) 
          
        {
          //print("JS: QListView.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QListView.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QListView.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QListView.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QListView.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QListView.prototype.show = function(...args) 
          
        {
          //print("JS: QListView.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QListView.prototype.hide = function(...args) 
          
        {
          //print("JS: QListView.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QListView.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QListView.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QListView.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QListView.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QListView.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QListView.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QListView.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QListView.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QListView.prototype.close = function(...args) 
          
        {
          //print("JS: QListView.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QListView.prototype.raise = function(...args) 
          
        {
          //print("JS: QListView.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QListView.prototype.lower = function(...args) 
          
        {
          //print("JS: QListView.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QListView.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QListView.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QListView.prototype.move = function(...args) 
          
        {
          //print("JS: QListView.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QListView.prototype.resize = function(...args) 
          
        {
          //print("JS: QListView.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QListView.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QListView.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QListView.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QListView.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QListView.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QListView.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QListView.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QListView.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QListView.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QListView.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QListView.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QListView.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QListView.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QListView.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QListView.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QListView.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QListView.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QListView.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QListView.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QListView.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QListView.prototype.windowState = function(...args) 
          
        {
          //print("JS: QListView.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QListView.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QListView.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QListView.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QListView.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QListView.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QListView.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QListView.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QListView.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QListView.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QListView.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QListView.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QListView.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QListView.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QListView.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QListView.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QListView.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QListView.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QListView.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QListView.prototype.layout = function(...args) 
          
        {
          //print("JS: QListView.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QListView.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QListView.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QListView.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QListView.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QListView.prototype.setParent = function(...args) 
          
        {
          //print("JS: QListView.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QListView.prototype.scroll = function(...args) 
          
        {
          //print("JS: QListView.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QListView.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QListView.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QListView.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QListView.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QListView.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QListView.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QListView.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QListView.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QListView.prototype.addAction = function(...args) 
          
        {
          //print("JS: QListView.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QListView.prototype.addActions = function(...args) 
          
        {
          //print("JS: QListView.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QListView.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QListView.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QListView.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QListView.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QListView.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QListView.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QListView.prototype.actions = function(...args) 
          
        {
          //print("JS: QListView.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QListView.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QListView.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QListView.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QListView.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QListView.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QListView.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QListView.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QListView.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QListView.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QListView.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QListView.prototype.windowType = function(...args) 
          
        {
          //print("JS: QListView.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QListView.prototype.childAt = function(...args) 
          
        {
          //print("JS: QListView.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QListView.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QListView.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QListView.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QListView.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QListView.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QListView.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QListView.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QListView.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QListView.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QListView.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QListView.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QListView.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QListView.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QListView.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QListView.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QListView.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QListView.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QListView.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
      // function 
      QListView.prototype.actionEvent = function() 
        
      {
        //print("JS: QListView.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QListView);
  }

  
  else {
    
        print("QListView.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QListView.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QListView.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QListView.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QListView.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QListView.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QListView.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QListView.prototype.metric = function(...args) 
          
        {
          //print("JS: QListView.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QListView.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QListView.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QListView.prototype.redirected = function(...args) 
          
        {
          //print("JS: QListView.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QListView.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QListView.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QListView.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QListView.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QListView.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QListView.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QListView.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QListView.prototype.create = function(...args) 
          
        {
          //print("JS: QListView.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QListView.prototype.destroy = function(...args) 
          
        {
          //print("JS: QListView.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QListView.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QListView.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QListView.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QListView.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QListView.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QListView.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QListView.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QListView.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QListView.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QListView.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QListView.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QListView.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QListView.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QListView.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QListView.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QListView.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QListView.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QListView.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QListView.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QListView.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
        
        // function 
        QListView.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QListView.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
        
        // function 
        QListView.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QListView.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
        
        // function 
        QListView.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QListView.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
        
        // function 
        QListView.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QListView.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
        
        // function 
        QListView.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QListView.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
        
        // function 
        QListView.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QListView.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
        
        // function 
        QListView.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QListView.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
        
        // function 
        QListView.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QListView.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        
        // function 
        QListView.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QListView.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
        
        // function 
        QListView.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QListView.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
        
        // function 
        QListView.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: QListView.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
        
        // function 
        QListView.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: QListView.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
        
        // function 
        QListView.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QListView.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
        
        // function 
        QListView.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QListView.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
        
        // function 
        QListView.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: QListView.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
        
        // function 
        QListView.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: QListView.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
        
        // function 
        QListView.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QListView.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
        
        // function 
        QListView.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QListView.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
        
        // function 
        QListView.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: QListView.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
        
        // function 
        QListView.prototype.viewport = function(...args) 
          
        {
          //print("JS: QListView.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
        
        // function 
        QListView.prototype.setViewport = function(...args) 
          
        {
          //print("JS: QListView.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
        
        // function 
        QListView.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: QListView.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
        
        // function 
        QListView.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: QListView.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
        
        // function 
        QListView.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QListView.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
        
        // function 
        QListView.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QListView.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
        
        // function 
        QListView.prototype.setViewportMargins = function(...args) 
          
        {
          //print("JS: QListView.prototype.setViewportMargins");
          
              return this.__PROXY__.setViewportMarginsSuper(...args);
            
        };
        QListView.prototype.setViewportMargins.__SUPER__ = true;
        
        // function 
        QListView.prototype.viewportMargins = function(...args) 
          
        {
          //print("JS: QListView.prototype.viewportMargins");
          
              return this.__PROXY__.viewportMarginsSuper(...args);
            
        };
        QListView.prototype.viewportMargins.__SUPER__ = true;
        
        // function 
        QListView.prototype.viewportEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.viewportEvent");
          
              return this.__PROXY__.viewportEventSuper(...args);
            
        };
        QListView.prototype.viewportEvent.__SUPER__ = true;
        
        // function 
        QListView.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
        QListView.prototype.mousePressEvent.__SUPER__ = true;
        
        // function 
        QListView.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEventSuper(...args);
            
        };
        QListView.prototype.mouseDoubleClickEvent.__SUPER__ = true;
        
        // function 
        QListView.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEventSuper(...args);
            
        };
        QListView.prototype.dragEnterEvent.__SUPER__ = true;
        
        // function 
        QListView.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEventSuper(...args);
            
        };
        QListView.prototype.keyPressEvent.__SUPER__ = true;
        
        // function 
        QListView.prototype.setModel = function(...args) 
          
        {
          //print("JS: QListView.prototype.setModel");
          
              return this.__PROXY__.setModel(...args);
            
        };
        
        // function 
        QListView.prototype.model = function(...args) 
          
        {
          //print("JS: QListView.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
        
        // function 
        QListView.prototype.setSelectionModel = function(...args) 
          
        {
          //print("JS: QListView.prototype.setSelectionModel");
          
              return this.__PROXY__.setSelectionModel(...args);
            
        };
        
        // function 
        QListView.prototype.selectionModel = function(...args) 
          
        {
          //print("JS: QListView.prototype.selectionModel");
          
              return this.__PROXY__.selectionModel(...args);
            
        };
        
        // function 
        QListView.prototype.setItemDelegate = function(...args) 
          
        {
          //print("JS: QListView.prototype.setItemDelegate");
          
              return this.__PROXY__.setItemDelegate(...args);
            
        };
        
        // function 
        QListView.prototype.setSelectionMode = function(...args) 
          
        {
          //print("JS: QListView.prototype.setSelectionMode");
          
              return this.__PROXY__.setSelectionMode(...args);
            
        };
        
        // function 
        QListView.prototype.setSelectionBehavior = function(...args) 
          
        {
          //print("JS: QListView.prototype.setSelectionBehavior");
          
              return this.__PROXY__.setSelectionBehavior(...args);
            
        };
        
        // function 
        QListView.prototype.currentIndex = function(...args) 
          
        {
          //print("JS: QListView.prototype.currentIndex");
          
              return this.__PROXY__.currentIndex(...args);
            
        };
        
        // function 
        QListView.prototype.rootIndex = function(...args) 
          
        {
          //print("JS: QListView.prototype.rootIndex");
          
              return this.__PROXY__.rootIndex(...args);
            
        };
        
        // function 
        QListView.prototype.setEditTriggers = function(...args) 
          
        {
          //print("JS: QListView.prototype.setEditTriggers");
          
              return this.__PROXY__.setEditTriggers(...args);
            
        };
        
        // function 
        QListView.prototype.setVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QListView.prototype.setVerticalScrollMode");
          
              return this.__PROXY__.setVerticalScrollMode(...args);
            
        };
        
        // function 
        QListView.prototype.resetVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QListView.prototype.resetVerticalScrollMode");
          
              return this.__PROXY__.resetVerticalScrollMode(...args);
            
        };
        
        // function 
        QListView.prototype.setHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QListView.prototype.setHorizontalScrollMode");
          
              return this.__PROXY__.setHorizontalScrollMode(...args);
            
        };
        
        // function 
        QListView.prototype.resetHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QListView.prototype.resetHorizontalScrollMode");
          
              return this.__PROXY__.resetHorizontalScrollMode(...args);
            
        };
        
        // function 
        QListView.prototype.setAutoScroll = function(...args) 
          
        {
          //print("JS: QListView.prototype.setAutoScroll");
          
              return this.__PROXY__.setAutoScroll(...args);
            
        };
        
        // function 
        QListView.prototype.hasAutoScroll = function(...args) 
          
        {
          //print("JS: QListView.prototype.hasAutoScroll");
          
              return this.__PROXY__.hasAutoScroll(...args);
            
        };
        
        // function 
        QListView.prototype.setAutoScrollMargin = function(...args) 
          
        {
          //print("JS: QListView.prototype.setAutoScrollMargin");
          
              return this.__PROXY__.setAutoScrollMargin(...args);
            
        };
        
        // function 
        QListView.prototype.setTabKeyNavigation = function(...args) 
          
        {
          //print("JS: QListView.prototype.setTabKeyNavigation");
          
              return this.__PROXY__.setTabKeyNavigation(...args);
            
        };
        
        // function 
        QListView.prototype.setDropIndicatorShown = function(...args) 
          
        {
          //print("JS: QListView.prototype.setDropIndicatorShown");
          
              return this.__PROXY__.setDropIndicatorShown(...args);
            
        };
        
        // function 
        QListView.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: QListView.prototype.setDragEnabled");
          
              return this.__PROXY__.setDragEnabled(...args);
            
        };
        
        // function 
        QListView.prototype.setDragDropOverwriteMode = function(...args) 
          
        {
          //print("JS: QListView.prototype.setDragDropOverwriteMode");
          
              return this.__PROXY__.setDragDropOverwriteMode(...args);
            
        };
        
        // function 
        QListView.prototype.setDragDropMode = function(...args) 
          
        {
          //print("JS: QListView.prototype.setDragDropMode");
          
              return this.__PROXY__.setDragDropMode(...args);
            
        };
        
        // function 
        QListView.prototype.setDefaultDropAction = function(...args) 
          
        {
          //print("JS: QListView.prototype.setDefaultDropAction");
          
              return this.__PROXY__.setDefaultDropAction(...args);
            
        };
        
        // function 
        QListView.prototype.setAlternatingRowColors = function(...args) 
          
        {
          //print("JS: QListView.prototype.setAlternatingRowColors");
          
              return this.__PROXY__.setAlternatingRowColors(...args);
            
        };
        
        // function 
        QListView.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QListView.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
        
        // function 
        QListView.prototype.setTextElideMode = function(...args) 
          
        {
          //print("JS: QListView.prototype.setTextElideMode");
          
              return this.__PROXY__.setTextElideMode(...args);
            
        };
        
        // function 
        QListView.prototype.keyboardSearch = function(...args) 
          
        {
          //print("JS: QListView.prototype.keyboardSearch");
          
              return this.__PROXY__.keyboardSearch(...args);
            
        };
        
        // function 
        QListView.prototype.isPersistentEditorOpen = function(...args) 
          
        {
          //print("JS: QListView.prototype.isPersistentEditorOpen");
          
              return this.__PROXY__.isPersistentEditorOpen(...args);
            
        };
        
        // function 
        QListView.prototype.setIndexWidget = function(...args) 
          
        {
          //print("JS: QListView.prototype.setIndexWidget");
          
              return this.__PROXY__.setIndexWidget(...args);
            
        };
        
        // function 
        QListView.prototype.indexWidget = function(...args) 
          
        {
          //print("JS: QListView.prototype.indexWidget");
          
              return this.__PROXY__.indexWidget(...args);
            
        };
        
        // function 
        QListView.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QListView.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QListView.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QListView.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
        
        // function 
        QListView.prototype.edit = function(...args) 
          
        {
          //print("JS: QListView.prototype.edit");
          
              return this.__PROXY__.edit(...args);
            
        };
        
        // function 
        QListView.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: QListView.prototype.clearSelection");
          
              return this.__PROXY__.clearSelection(...args);
            
        };
        
        // function 
        QListView.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QListView.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
        
        // function 
        QListView.prototype.scrollToTop = function(...args) 
          
        {
          //print("JS: QListView.prototype.scrollToTop");
          
              return this.__PROXY__.scrollToTop(...args);
            
        };
        
        // function 
        QListView.prototype.scrollToBottom = function(...args) 
          
        {
          //print("JS: QListView.prototype.scrollToBottom");
          
              return this.__PROXY__.scrollToBottom(...args);
            
        };
        
        // function 
        QListView.prototype.update = function(...args) 
          
        {
          //print("JS: QListView.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QListView.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QListView.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
        
        // function 
        QListView.prototype.setMovement = function(...args) 
          
        {
          //print("JS: QListView.prototype.setMovement");
          
              return this.__PROXY__.setMovement(...args);
            
        };
        
        // function 
        QListView.prototype.setFlow = function(...args) 
          
        {
          //print("JS: QListView.prototype.setFlow");
          
              return this.__PROXY__.setFlow(...args);
            
        };
        
        // function 
        QListView.prototype.setWrapping = function(...args) 
          
        {
          //print("JS: QListView.prototype.setWrapping");
          
              return this.__PROXY__.setWrapping(...args);
            
        };
        
        // function 
        QListView.prototype.setResizeMode = function(...args) 
          
        {
          //print("JS: QListView.prototype.setResizeMode");
          
              return this.__PROXY__.setResizeMode(...args);
            
        };
        
        // function 
        QListView.prototype.setLayoutMode = function(...args) 
          
        {
          //print("JS: QListView.prototype.setLayoutMode");
          
              return this.__PROXY__.setLayoutMode(...args);
            
        };
        
        // function 
        QListView.prototype.setSpacing = function(...args) 
          
        {
          //print("JS: QListView.prototype.setSpacing");
          
              return this.__PROXY__.setSpacing(...args);
            
        };
        
        // function 
        QListView.prototype.setBatchSize = function(...args) 
          
        {
          //print("JS: QListView.prototype.setBatchSize");
          
              return this.__PROXY__.setBatchSize(...args);
            
        };
        
        // function 
        QListView.prototype.setGridSize = function(...args) 
          
        {
          //print("JS: QListView.prototype.setGridSize");
          
              return this.__PROXY__.setGridSize(...args);
            
        };
        
        // function 
        QListView.prototype.setViewMode = function(...args) 
          
        {
          //print("JS: QListView.prototype.setViewMode");
          
              return this.__PROXY__.setViewMode(...args);
            
        };
        
        // function 
        QListView.prototype.clearPropertyFlags = function(...args) 
          
        {
          //print("JS: QListView.prototype.clearPropertyFlags");
          
              return this.__PROXY__.clearPropertyFlags(...args);
            
        };
        
        // function 
        QListView.prototype.isRowHidden = function(...args) 
          
        {
          //print("JS: QListView.prototype.isRowHidden");
          
              return this.__PROXY__.isRowHidden(...args);
            
        };
        
        // function 
        QListView.prototype.setRowHidden = function(...args) 
          
        {
          //print("JS: QListView.prototype.setRowHidden");
          
              return this.__PROXY__.setRowHidden(...args);
            
        };
        
        // function 
        QListView.prototype.setModelColumn = function(...args) 
          
        {
          //print("JS: QListView.prototype.setModelColumn");
          
              return this.__PROXY__.setModelColumn(...args);
            
        };
        
        // function 
        QListView.prototype.setUniformItemSizes = function(...args) 
          
        {
          //print("JS: QListView.prototype.setUniformItemSizes");
          
              return this.__PROXY__.setUniformItemSizes(...args);
            
        };
        
        // function 
        QListView.prototype.setWordWrap = function(...args) 
          
        {
          //print("JS: QListView.prototype.setWordWrap");
          
              return this.__PROXY__.setWordWrap(...args);
            
        };
        
        // function 
        QListView.prototype.setSelectionRectVisible = function(...args) 
          
        {
          //print("JS: QListView.prototype.setSelectionRectVisible");
          
              return this.__PROXY__.setSelectionRectVisible(...args);
            
        };
        
        // function 
        QListView.prototype.isSelectionRectVisible = function(...args) 
          
        {
          //print("JS: QListView.prototype.isSelectionRectVisible");
          
              return this.__PROXY__.isSelectionRectVisible(...args);
            
        };
        
        // function 
        QListView.prototype.setItemAlignment = function(...args) 
          
        {
          //print("JS: QListView.prototype.setItemAlignment");
          
              return this.__PROXY__.setItemAlignment(...args);
            
        };
        
        // function 
        QListView.prototype.visualRect = function(...args) 
          
        {
          //print("JS: QListView.prototype.visualRect");
          
              return this.__PROXY__.visualRect(...args);
            
        };
        
        // function 
        QListView.prototype.scrollTo = function(...args) 
          
        {
          //print("JS: QListView.prototype.scrollTo");
          
              return this.__PROXY__.scrollTo(...args);
            
        };
        
        // function 
        QListView.prototype.indexAt = function(...args) 
          
        {
          //print("JS: QListView.prototype.indexAt");
          
              return this.__PROXY__.indexAt(...args);
            
        };
        
        // function 
        QListView.prototype.doItemsLayout = function(...args) 
          
        {
          //print("JS: QListView.prototype.doItemsLayout");
          
              return this.__PROXY__.doItemsLayout(...args);
            
        };
        
        // function 
        QListView.prototype.reset = function(...args) 
          
        {
          //print("JS: QListView.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
        
        // function 
        QListView.prototype.setRootIndex = function(...args) 
          
        {
          //print("JS: QListView.prototype.setRootIndex");
          
              return this.__PROXY__.setRootIndex(...args);
            
        };
        
        // function 
        QListView.prototype.event = function(...args) 
          
        {
          //print("JS: QListView.prototype.event");
          
              return this.__PROXY__.eventSuper(...args);
            
        };
        QListView.prototype.event.__SUPER__ = true;
        
        // function 
        QListView.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: QListView.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBySuper(...args);
            
        };
        QListView.prototype.scrollContentsBy.__SUPER__ = true;
        
        // function 
        QListView.prototype.resizeContents = function(...args) 
          
        {
          //print("JS: QListView.prototype.resizeContents");
          
              return this.__PROXY__.resizeContentsSuper(...args);
            
        };
        QListView.prototype.resizeContents.__SUPER__ = true;
        
        // function 
        QListView.prototype.contentsSize = function(...args) 
          
        {
          //print("JS: QListView.prototype.contentsSize");
          
              return this.__PROXY__.contentsSizeSuper(...args);
            
        };
        QListView.prototype.contentsSize.__SUPER__ = true;
        
        // function 
        QListView.prototype.dataChanged = function(...args) 
          
        {
          //print("JS: QListView.prototype.dataChanged");
          
              return this.__PROXY__.dataChangedSuper(...args);
            
        };
        QListView.prototype.dataChanged.__SUPER__ = true;
        
        // function 
        QListView.prototype.rowsInserted = function(...args) 
          
        {
          //print("JS: QListView.prototype.rowsInserted");
          
              return this.__PROXY__.rowsInsertedSuper(...args);
            
        };
        QListView.prototype.rowsInserted.__SUPER__ = true;
        
        // function 
        QListView.prototype.rowsAboutToBeRemoved = function(...args) 
          
        {
          //print("JS: QListView.prototype.rowsAboutToBeRemoved");
          
              return this.__PROXY__.rowsAboutToBeRemovedSuper(...args);
            
        };
        QListView.prototype.rowsAboutToBeRemoved.__SUPER__ = true;
        
        // function 
        QListView.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QListView.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QListView.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
        QListView.prototype.mouseReleaseEvent.__SUPER__ = true;
        
        // function 
        QListView.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEventSuper(...args);
            
        };
        QListView.prototype.wheelEvent.__SUPER__ = true;
        
        // function 
        QListView.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QListView.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        QListView.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.dropEvent");
          
              return this.__PROXY__.dropEventSuper(...args);
            
        };
        QListView.prototype.dropEvent.__SUPER__ = true;
        
        // function 
        QListView.prototype.startDrag = function(...args) 
          
        {
          //print("JS: QListView.prototype.startDrag");
          
              return this.__PROXY__.startDragSuper(...args);
            
        };
        QListView.prototype.startDrag.__SUPER__ = true;
        
        // function 
        QListView.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QListView.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QListView.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QListView.prototype.horizontalOffset = function(...args) 
          
        {
          //print("JS: QListView.prototype.horizontalOffset");
          
              return this.__PROXY__.horizontalOffsetSuper(...args);
            
        };
        QListView.prototype.horizontalOffset.__SUPER__ = true;
        
        // function 
        QListView.prototype.verticalOffset = function(...args) 
          
        {
          //print("JS: QListView.prototype.verticalOffset");
          
              return this.__PROXY__.verticalOffsetSuper(...args);
            
        };
        QListView.prototype.verticalOffset.__SUPER__ = true;
        
        // function 
        QListView.prototype.rectForIndex = function(...args) 
          
        {
          //print("JS: QListView.prototype.rectForIndex");
          
              return this.__PROXY__.rectForIndexSuper(...args);
            
        };
        QListView.prototype.rectForIndex.__SUPER__ = true;
        
        // function 
        QListView.prototype.setPositionForIndex = function(...args) 
          
        {
          //print("JS: QListView.prototype.setPositionForIndex");
          
              return this.__PROXY__.setPositionForIndexSuper(...args);
            
        };
        QListView.prototype.setPositionForIndex.__SUPER__ = true;
        
        // function 
        QListView.prototype.updateGeometries = function(...args) 
          
        {
          //print("JS: QListView.prototype.updateGeometries");
          
              return this.__PROXY__.updateGeometriesSuper(...args);
            
        };
        QListView.prototype.updateGeometries.__SUPER__ = true;
        
        // function 
        QListView.prototype.isIndexHidden = function(...args) 
          
        {
          //print("JS: QListView.prototype.isIndexHidden");
          
              return this.__PROXY__.isIndexHiddenSuper(...args);
            
        };
        QListView.prototype.isIndexHidden.__SUPER__ = true;
        
        // function 
        QListView.prototype.currentChanged = function(...args) 
          
        {
          //print("JS: QListView.prototype.currentChanged");
          
              return this.__PROXY__.currentChangedSuper(...args);
            
        };
        QListView.prototype.currentChanged.__SUPER__ = true;
        
        // function 
        QListView.prototype.viewportSizeHint = function(...args) 
          
        {
          //print("JS: QListView.prototype.viewportSizeHint");
          
              return this.__PROXY__.viewportSizeHintSuper(...args);
            
        };
        QListView.prototype.viewportSizeHint.__SUPER__ = true;
        
        // function 
        QListView.prototype.visualIndex = function(...args) 
          
        {
          //print("JS: QListView.prototype.visualIndex");
          
              return this.__PROXY__.visualIndex(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QListView.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'autoScrollMargin', {
              get: function() {
                  
                      return this.__PROXY__.autoScrollMargin;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoScrollMargin(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'editTriggers', {
              get: function() {
                  
                      return this.__PROXY__.editTriggers;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditTriggers(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'tabKeyNavigation', {
              get: function() {
                  
                      return this.__PROXY__.tabKeyNavigation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabKeyNavigation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'showDropIndicator', {
              get: function() {
                  
                      return this.__PROXY__.showDropIndicator;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDropIndicatorShown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'dragEnabled', {
              get: function() {
                  
                      return this.__PROXY__.dragEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'dragDropOverwriteMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropOverwriteMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropOverwriteMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'dragDropMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'defaultDropAction', {
              get: function() {
                  
                      return this.__PROXY__.defaultDropAction;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultDropAction(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'alternatingRowColors', {
              get: function() {
                  
                      return this.__PROXY__.alternatingRowColors;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlternatingRowColors(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'selectionMode', {
              get: function() {
                  
                      return this.__PROXY__.selectionMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'selectionBehavior', {
              get: function() {
                  
                      return this.__PROXY__.selectionBehavior;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionBehavior(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'textElideMode', {
              get: function() {
                  
                      return this.__PROXY__.textElideMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextElideMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'verticalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.verticalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVerticalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'horizontalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.horizontalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHorizontalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'flow', {
              get: function() {
                  
                      return this.__PROXY__.flow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFlow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'isWrapping', {
              get: function() {
                  
                      return this.__PROXY__.isWrapping;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWrapping(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'resizeMode', {
              get: function() {
                  
                      return this.__PROXY__.resizeMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setResizeMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'layoutMode', {
              get: function() {
                  
                      return this.__PROXY__.layoutMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'spacing', {
              get: function() {
                  
                      return this.__PROXY__.spacing;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSpacing(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'gridSize', {
              get: function() {
                  
                      return this.__PROXY__.gridSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGridSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'viewMode', {
              get: function() {
                  
                      return this.__PROXY__.viewMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setViewMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'modelColumn', {
              get: function() {
                  
                      return this.__PROXY__.modelColumn;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModelColumn(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'uniformItemSizes', {
              get: function() {
                  
                      return this.__PROXY__.uniformItemSizes;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUniformItemSizes(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'batchSize', {
              get: function() {
                  
                      return this.__PROXY__.batchSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBatchSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'wordWrap', {
              get: function() {
                  
                      return this.__PROXY__.wordWrap;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWordWrap(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'selectionRectVisible', {
              get: function() {
                  
                      return this.__PROXY__.isSelectionRectVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionRectVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'itemAlignment', {
              get: function() {
                  
                      return this.__PROXY__.itemAlignment;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setItemAlignment(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QListView.prototype, 'movement', {
              get: function() {
                  
                      return this.__PROXY__.movement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMovement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QListView.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QListView.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QListView.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
          Object.defineProperty(QListView.prototype, 'pressed(QModelIndex)', {
              get: function() { return this.__PROXY__.pressed; },
              configurable: true
          });
        
        Object.defineProperty(QListView.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(QListView.prototype, 'clicked(QModelIndex)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(QListView.prototype, 'doubleClicked', {
            get: function() { return this.__PROXY__.doubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(QListView.prototype, 'doubleClicked(QModelIndex)', {
              get: function() { return this.__PROXY__.doubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(QListView.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(QListView.prototype, 'activated(QModelIndex)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(QListView.prototype, 'entered', {
            get: function() { return this.__PROXY__.entered; },
            configurable: true
        });
        
          Object.defineProperty(QListView.prototype, 'entered(QModelIndex)', {
              get: function() { return this.__PROXY__.entered; },
              configurable: true
          });
        
        Object.defineProperty(QListView.prototype, 'viewportEntered', {
            get: function() { return this.__PROXY__.viewportEntered; },
            configurable: true
        });
        
        Object.defineProperty(QListView.prototype, 'iconSizeChanged', {
            get: function() { return this.__PROXY__.iconSizeChanged; },
            configurable: true
        });
        
          Object.defineProperty(QListView.prototype, 'iconSizeChanged(QSize)', {
              get: function() { return this.__PROXY__.iconSizeChanged; },
              configurable: true
          });
        QListView.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QListView.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QListView.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QListView.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QListView.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QListView.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      