
      // auto generated
      //var self;

      // class constructor:
      function QTableView() {
        

        // should be QTableView_BaseJs.call(this, engine):
        //QTableView.prototype = new QTableView_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTableView.getIdStatic()))) {

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
            qWarning("QTableView.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTableView_Wrapper(
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

      

        //copyProperties(this, wrapper, QTableView);
  }

  
  else {
    
        print("QTableView(): wrong number / type of arguments");
      
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

      //QTableView.prototype = new QTableView_BaseJs(engine);
      //QTableView.prototype = new QTableView_Wrapper(engine);
      QTableView.prototype = new Object();


      QTableView.prototype.toString = function() {
          //return "QTableView [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTableView [JS]";
        };
      QTableView.getObjectType = function() {
        return RJSType_QTableView.getIdStatic();
      };

      QTableView.prototype.getObjectType = function() {
        return RJSType_QTableView.getIdStatic();
      };

      QTableView.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTableView.getIdStatic()) {
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
QTableView.NoFrame = QTableView_Wrapper.NoFrame;
QTableView.Box = QTableView_Wrapper.Box;
QTableView.Panel = QTableView_Wrapper.Panel;
QTableView.WinPanel = QTableView_Wrapper.WinPanel;
QTableView.HLine = QTableView_Wrapper.HLine;
QTableView.VLine = QTableView_Wrapper.VLine;
QTableView.StyledPanel = QTableView_Wrapper.StyledPanel;

  // enum: Shadow
QTableView.Plain = QTableView_Wrapper.Plain;
QTableView.Raised = QTableView_Wrapper.Raised;
QTableView.Sunken = QTableView_Wrapper.Sunken;

  // enum: StyleMask
QTableView.Shadow_Mask = QTableView_Wrapper.Shadow_Mask;
QTableView.Shape_Mask = QTableView_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QTableView.AdjustIgnored = QTableView_Wrapper.AdjustIgnored;
QTableView.AdjustToContentsOnFirstShow = QTableView_Wrapper.AdjustToContentsOnFirstShow;
QTableView.AdjustToContents = QTableView_Wrapper.AdjustToContents;

  // enum: SelectionMode
QTableView.NoSelection = QTableView_Wrapper.NoSelection;
QTableView.SingleSelection = QTableView_Wrapper.SingleSelection;
QTableView.MultiSelection = QTableView_Wrapper.MultiSelection;
QTableView.ExtendedSelection = QTableView_Wrapper.ExtendedSelection;
QTableView.ContiguousSelection = QTableView_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
QTableView.SelectItems = QTableView_Wrapper.SelectItems;
QTableView.SelectRows = QTableView_Wrapper.SelectRows;
QTableView.SelectColumns = QTableView_Wrapper.SelectColumns;

  // enum: ScrollHint
QTableView.EnsureVisible = QTableView_Wrapper.EnsureVisible;
QTableView.PositionAtTop = QTableView_Wrapper.PositionAtTop;
QTableView.PositionAtBottom = QTableView_Wrapper.PositionAtBottom;
QTableView.PositionAtCenter = QTableView_Wrapper.PositionAtCenter;

  // enum: EditTrigger
QTableView.NoEditTriggers = QTableView_Wrapper.NoEditTriggers;
QTableView.CurrentChanged = QTableView_Wrapper.CurrentChanged;
QTableView.DoubleClicked = QTableView_Wrapper.DoubleClicked;
QTableView.SelectedClicked = QTableView_Wrapper.SelectedClicked;
QTableView.EditKeyPressed = QTableView_Wrapper.EditKeyPressed;
QTableView.AnyKeyPressed = QTableView_Wrapper.AnyKeyPressed;
QTableView.AllEditTriggers = QTableView_Wrapper.AllEditTriggers;

  // enum: ScrollMode
QTableView.ScrollPerItem = QTableView_Wrapper.ScrollPerItem;
QTableView.ScrollPerPixel = QTableView_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
QTableView.NoDragDrop = QTableView_Wrapper.NoDragDrop;
QTableView.DragOnly = QTableView_Wrapper.DragOnly;
QTableView.DropOnly = QTableView_Wrapper.DropOnly;
QTableView.DragDrop = QTableView_Wrapper.DragDrop;
QTableView.InternalMove = QTableView_Wrapper.InternalMove;


      // functions:
      
        // function 
        QTableView.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QTableView.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QTableView.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QTableView.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QTableView.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QTableView.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QTableView.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QTableView.prototype.findChild = function(...args) 
          
        {
          //print("JS: QTableView.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QTableView.prototype.children = function(...args) 
          
        {
          //print("JS: QTableView.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QTableView.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QTableView.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QTableView.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QTableView.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QTableView.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QTableView.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QTableView.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QTableView.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QTableView.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QTableView.prototype.property = function(...args) 
          
        {
          //print("JS: QTableView.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QTableView.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QTableView.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QTableView.prototype.parent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QTableView.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QTableView.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QTableView.prototype.devType = function(...args) 
          
        {
          //print("JS: QTableView.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QTableView.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QTableView.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QTableView.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QTableView.prototype.isModal = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QTableView.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QTableView.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QTableView.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QTableView.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QTableView.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QTableView.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QTableView.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QTableView.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QTableView.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QTableView.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QTableView.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QTableView.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QTableView.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QTableView.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QTableView.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QTableView.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QTableView.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QTableView.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QTableView.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QTableView.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QTableView.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QTableView.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QTableView.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QTableView.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QTableView.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QTableView.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QTableView.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QTableView.prototype.window = function(...args) 
          
        {
          //print("JS: QTableView.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QTableView.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QTableView.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QTableView.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QTableView.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QTableView.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QTableView.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QTableView.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QTableView.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QTableView.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QTableView.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QTableView.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QTableView.prototype.setFont = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QTableView.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QTableView.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QTableView.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QTableView.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QTableView.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QTableView.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QTableView.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QTableView.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QTableView.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QTableView.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QTableView.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QTableView.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QTableView.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QTableView.prototype.setMask = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QTableView.prototype.mask = function(...args) 
          
        {
          //print("JS: QTableView.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QTableView.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QTableView.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QTableView.prototype.grab = function(...args) 
          
        {
          //print("JS: QTableView.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QTableView.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QTableView.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QTableView.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QTableView.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QTableView.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QTableView.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QTableView.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QTableView.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QTableView.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QTableView.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QTableView.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QTableView.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QTableView.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QTableView.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QTableView.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QTableView.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QTableView.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QTableView.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QTableView.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QTableView.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QTableView.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QTableView.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QTableView.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QTableView.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QTableView.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QTableView.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QTableView.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QTableView.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QTableView.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QTableView.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QTableView.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QTableView.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QTableView.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QTableView.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QTableView.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QTableView.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QTableView.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QTableView.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QTableView.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QTableView.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QTableView.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QTableView.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QTableView.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QTableView.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QTableView.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QTableView.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QTableView.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QTableView.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QTableView.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QTableView.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QTableView.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QTableView.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QTableView.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QTableView.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QTableView.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QTableView.prototype.repaint = function(...args) 
          
        {
          //print("JS: QTableView.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QTableView.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QTableView.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QTableView.prototype.show = function(...args) 
          
        {
          //print("JS: QTableView.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QTableView.prototype.hide = function(...args) 
          
        {
          //print("JS: QTableView.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QTableView.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QTableView.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QTableView.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QTableView.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QTableView.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QTableView.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QTableView.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QTableView.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QTableView.prototype.close = function(...args) 
          
        {
          //print("JS: QTableView.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QTableView.prototype.raise = function(...args) 
          
        {
          //print("JS: QTableView.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QTableView.prototype.lower = function(...args) 
          
        {
          //print("JS: QTableView.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QTableView.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QTableView.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QTableView.prototype.move = function(...args) 
          
        {
          //print("JS: QTableView.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QTableView.prototype.resize = function(...args) 
          
        {
          //print("JS: QTableView.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QTableView.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QTableView.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QTableView.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QTableView.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QTableView.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QTableView.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QTableView.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QTableView.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QTableView.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QTableView.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QTableView.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QTableView.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QTableView.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QTableView.prototype.windowState = function(...args) 
          
        {
          //print("JS: QTableView.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QTableView.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QTableView.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QTableView.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QTableView.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QTableView.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QTableView.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QTableView.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QTableView.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QTableView.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QTableView.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QTableView.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QTableView.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QTableView.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QTableView.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QTableView.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QTableView.prototype.layout = function(...args) 
          
        {
          //print("JS: QTableView.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QTableView.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QTableView.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QTableView.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QTableView.prototype.setParent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QTableView.prototype.scroll = function(...args) 
          
        {
          //print("JS: QTableView.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QTableView.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QTableView.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QTableView.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QTableView.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QTableView.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QTableView.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QTableView.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QTableView.prototype.addAction = function(...args) 
          
        {
          //print("JS: QTableView.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QTableView.prototype.addActions = function(...args) 
          
        {
          //print("JS: QTableView.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QTableView.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QTableView.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QTableView.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QTableView.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QTableView.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QTableView.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QTableView.prototype.actions = function(...args) 
          
        {
          //print("JS: QTableView.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QTableView.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QTableView.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QTableView.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QTableView.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QTableView.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QTableView.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QTableView.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QTableView.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QTableView.prototype.windowType = function(...args) 
          
        {
          //print("JS: QTableView.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QTableView.prototype.childAt = function(...args) 
          
        {
          //print("JS: QTableView.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QTableView.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QTableView.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QTableView.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QTableView.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QTableView.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QTableView.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QTableView.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QTableView.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QTableView.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QTableView.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QTableView.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QTableView.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QTableView.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QTableView.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QTableView.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
      // function 
      QTableView.prototype.actionEvent = function() 
        
      {
        //print("JS: QTableView.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QTableView);
  }

  
  else {
    
        print("QTableView.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QTableView.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QTableView.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QTableView.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QTableView.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QTableView.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QTableView.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QTableView.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QTableView.prototype.metric = function(...args) 
          
        {
          //print("JS: QTableView.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QTableView.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QTableView.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QTableView.prototype.redirected = function(...args) 
          
        {
          //print("JS: QTableView.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QTableView.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QTableView.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QTableView.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QTableView.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QTableView.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QTableView.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QTableView.prototype.create = function(...args) 
          
        {
          //print("JS: QTableView.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QTableView.prototype.destroy = function(...args) 
          
        {
          //print("JS: QTableView.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QTableView.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QTableView.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QTableView.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QTableView.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QTableView.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QTableView.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QTableView.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QTableView.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QTableView.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QTableView.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QTableView.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QTableView.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QTableView.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QTableView.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QTableView.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QTableView.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QTableView.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QTableView.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QTableView.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
        
        // function 
        QTableView.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
        
        // function 
        QTableView.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
        
        // function 
        QTableView.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
        
        // function 
        QTableView.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
        
        // function 
        QTableView.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
        
        // function 
        QTableView.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
        
        // function 
        QTableView.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QTableView.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
        
        // function 
        QTableView.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QTableView.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        
        // function 
        QTableView.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTableView.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
        
        // function 
        QTableView.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
        
        // function 
        QTableView.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: QTableView.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
        
        // function 
        QTableView.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
        
        // function 
        QTableView.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTableView.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
        
        // function 
        QTableView.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
        
        // function 
        QTableView.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: QTableView.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
        
        // function 
        QTableView.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
        
        // function 
        QTableView.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QTableView.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
        
        // function 
        QTableView.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
        
        // function 
        QTableView.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: QTableView.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
        
        // function 
        QTableView.prototype.viewport = function(...args) 
          
        {
          //print("JS: QTableView.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
        
        // function 
        QTableView.prototype.setViewport = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
        
        // function 
        QTableView.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: QTableView.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
        
        // function 
        QTableView.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
        
        // function 
        QTableView.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QTableView.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
        
        // function 
        QTableView.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
        
        // function 
        QTableView.prototype.setViewportMargins = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setViewportMargins");
          
              return this.__PROXY__.setViewportMarginsSuper(...args);
            
        };
        QTableView.prototype.setViewportMargins.__SUPER__ = true;
        
        // function 
        QTableView.prototype.viewportMargins = function(...args) 
          
        {
          //print("JS: QTableView.prototype.viewportMargins");
          
              return this.__PROXY__.viewportMarginsSuper(...args);
            
        };
        QTableView.prototype.viewportMargins.__SUPER__ = true;
        
        // function 
        QTableView.prototype.event = function(...args) 
          
        {
          //print("JS: QTableView.prototype.event");
          
              return this.__PROXY__.eventSuper(...args);
            
        };
        QTableView.prototype.event.__SUPER__ = true;
        
        // function 
        QTableView.prototype.viewportEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.viewportEvent");
          
              return this.__PROXY__.viewportEventSuper(...args);
            
        };
        QTableView.prototype.viewportEvent.__SUPER__ = true;
        
        // function 
        QTableView.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
        QTableView.prototype.mousePressEvent.__SUPER__ = true;
        
        // function 
        QTableView.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
        QTableView.prototype.mouseReleaseEvent.__SUPER__ = true;
        
        // function 
        QTableView.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEventSuper(...args);
            
        };
        QTableView.prototype.mouseDoubleClickEvent.__SUPER__ = true;
        
        // function 
        QTableView.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEventSuper(...args);
            
        };
        QTableView.prototype.wheelEvent.__SUPER__ = true;
        
        // function 
        QTableView.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEventSuper(...args);
            
        };
        QTableView.prototype.dragEnterEvent.__SUPER__ = true;
        
        // function 
        QTableView.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEventSuper(...args);
            
        };
        QTableView.prototype.keyPressEvent.__SUPER__ = true;
        
        // function 
        QTableView.prototype.model = function(...args) 
          
        {
          //print("JS: QTableView.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
        
        // function 
        QTableView.prototype.selectionModel = function(...args) 
          
        {
          //print("JS: QTableView.prototype.selectionModel");
          
              return this.__PROXY__.selectionModel(...args);
            
        };
        
        // function 
        QTableView.prototype.setItemDelegate = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setItemDelegate");
          
              return this.__PROXY__.setItemDelegate(...args);
            
        };
        
        // function 
        QTableView.prototype.setSelectionMode = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setSelectionMode");
          
              return this.__PROXY__.setSelectionMode(...args);
            
        };
        
        // function 
        QTableView.prototype.setSelectionBehavior = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setSelectionBehavior");
          
              return this.__PROXY__.setSelectionBehavior(...args);
            
        };
        
        // function 
        QTableView.prototype.currentIndex = function(...args) 
          
        {
          //print("JS: QTableView.prototype.currentIndex");
          
              return this.__PROXY__.currentIndex(...args);
            
        };
        
        // function 
        QTableView.prototype.rootIndex = function(...args) 
          
        {
          //print("JS: QTableView.prototype.rootIndex");
          
              return this.__PROXY__.rootIndex(...args);
            
        };
        
        // function 
        QTableView.prototype.setEditTriggers = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setEditTriggers");
          
              return this.__PROXY__.setEditTriggers(...args);
            
        };
        
        // function 
        QTableView.prototype.setVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setVerticalScrollMode");
          
              return this.__PROXY__.setVerticalScrollMode(...args);
            
        };
        
        // function 
        QTableView.prototype.resetVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QTableView.prototype.resetVerticalScrollMode");
          
              return this.__PROXY__.resetVerticalScrollMode(...args);
            
        };
        
        // function 
        QTableView.prototype.setHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setHorizontalScrollMode");
          
              return this.__PROXY__.setHorizontalScrollMode(...args);
            
        };
        
        // function 
        QTableView.prototype.resetHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QTableView.prototype.resetHorizontalScrollMode");
          
              return this.__PROXY__.resetHorizontalScrollMode(...args);
            
        };
        
        // function 
        QTableView.prototype.setAutoScroll = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setAutoScroll");
          
              return this.__PROXY__.setAutoScroll(...args);
            
        };
        
        // function 
        QTableView.prototype.hasAutoScroll = function(...args) 
          
        {
          //print("JS: QTableView.prototype.hasAutoScroll");
          
              return this.__PROXY__.hasAutoScroll(...args);
            
        };
        
        // function 
        QTableView.prototype.setAutoScrollMargin = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setAutoScrollMargin");
          
              return this.__PROXY__.setAutoScrollMargin(...args);
            
        };
        
        // function 
        QTableView.prototype.setTabKeyNavigation = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setTabKeyNavigation");
          
              return this.__PROXY__.setTabKeyNavigation(...args);
            
        };
        
        // function 
        QTableView.prototype.setDropIndicatorShown = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setDropIndicatorShown");
          
              return this.__PROXY__.setDropIndicatorShown(...args);
            
        };
        
        // function 
        QTableView.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setDragEnabled");
          
              return this.__PROXY__.setDragEnabled(...args);
            
        };
        
        // function 
        QTableView.prototype.setDragDropOverwriteMode = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setDragDropOverwriteMode");
          
              return this.__PROXY__.setDragDropOverwriteMode(...args);
            
        };
        
        // function 
        QTableView.prototype.setDragDropMode = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setDragDropMode");
          
              return this.__PROXY__.setDragDropMode(...args);
            
        };
        
        // function 
        QTableView.prototype.setDefaultDropAction = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setDefaultDropAction");
          
              return this.__PROXY__.setDefaultDropAction(...args);
            
        };
        
        // function 
        QTableView.prototype.setAlternatingRowColors = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setAlternatingRowColors");
          
              return this.__PROXY__.setAlternatingRowColors(...args);
            
        };
        
        // function 
        QTableView.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
        
        // function 
        QTableView.prototype.setTextElideMode = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setTextElideMode");
          
              return this.__PROXY__.setTextElideMode(...args);
            
        };
        
        // function 
        QTableView.prototype.keyboardSearch = function(...args) 
          
        {
          //print("JS: QTableView.prototype.keyboardSearch");
          
              return this.__PROXY__.keyboardSearch(...args);
            
        };
        
        // function 
        QTableView.prototype.isPersistentEditorOpen = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isPersistentEditorOpen");
          
              return this.__PROXY__.isPersistentEditorOpen(...args);
            
        };
        
        // function 
        QTableView.prototype.setIndexWidget = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setIndexWidget");
          
              return this.__PROXY__.setIndexWidget(...args);
            
        };
        
        // function 
        QTableView.prototype.indexWidget = function(...args) 
          
        {
          //print("JS: QTableView.prototype.indexWidget");
          
              return this.__PROXY__.indexWidget(...args);
            
        };
        
        // function 
        QTableView.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QTableView.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QTableView.prototype.reset = function(...args) 
          
        {
          //print("JS: QTableView.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
        
        // function 
        QTableView.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QTableView.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
        
        // function 
        QTableView.prototype.edit = function(...args) 
          
        {
          //print("JS: QTableView.prototype.edit");
          
              return this.__PROXY__.edit(...args);
            
        };
        
        // function 
        QTableView.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: QTableView.prototype.clearSelection");
          
              return this.__PROXY__.clearSelection(...args);
            
        };
        
        // function 
        QTableView.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
        
        // function 
        QTableView.prototype.scrollToTop = function(...args) 
          
        {
          //print("JS: QTableView.prototype.scrollToTop");
          
              return this.__PROXY__.scrollToTop(...args);
            
        };
        
        // function 
        QTableView.prototype.scrollToBottom = function(...args) 
          
        {
          //print("JS: QTableView.prototype.scrollToBottom");
          
              return this.__PROXY__.scrollToBottom(...args);
            
        };
        
        // function 
        QTableView.prototype.update = function(...args) 
          
        {
          //print("JS: QTableView.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QTableView.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QTableView.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QTableView.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QTableView.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        QTableView.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QTableView.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
        
        // function 
        QTableView.prototype.setModel = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setModel");
          
              return this.__PROXY__.setModel(...args);
            
        };
        
        // function 
        QTableView.prototype.setRootIndex = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setRootIndex");
          
              return this.__PROXY__.setRootIndex(...args);
            
        };
        
        // function 
        QTableView.prototype.setSelectionModel = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setSelectionModel");
          
              return this.__PROXY__.setSelectionModel(...args);
            
        };
        
        // function 
        QTableView.prototype.doItemsLayout = function(...args) 
          
        {
          //print("JS: QTableView.prototype.doItemsLayout");
          
              return this.__PROXY__.doItemsLayout(...args);
            
        };
        
        // function 
        QTableView.prototype.horizontalHeader = function(...args) 
          
        {
          //print("JS: QTableView.prototype.horizontalHeader");
          
              return this.__PROXY__.horizontalHeader(...args);
            
        };
        
        // function 
        QTableView.prototype.verticalHeader = function(...args) 
          
        {
          //print("JS: QTableView.prototype.verticalHeader");
          
              return this.__PROXY__.verticalHeader(...args);
            
        };
        
        // function 
        QTableView.prototype.setHorizontalHeader = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setHorizontalHeader");
          
              return this.__PROXY__.setHorizontalHeader(...args);
            
        };
        
        // function 
        QTableView.prototype.setVerticalHeader = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setVerticalHeader");
          
              return this.__PROXY__.setVerticalHeader(...args);
            
        };
        
        // function 
        QTableView.prototype.rowViewportPosition = function(...args) 
          
        {
          //print("JS: QTableView.prototype.rowViewportPosition");
          
              return this.__PROXY__.rowViewportPosition(...args);
            
        };
        
        // function 
        QTableView.prototype.rowAt = function(...args) 
          
        {
          //print("JS: QTableView.prototype.rowAt");
          
              return this.__PROXY__.rowAt(...args);
            
        };
        
        // function 
        QTableView.prototype.setRowHeight = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setRowHeight");
          
              return this.__PROXY__.setRowHeight(...args);
            
        };
        
        // function 
        QTableView.prototype.rowHeight = function(...args) 
          
        {
          //print("JS: QTableView.prototype.rowHeight");
          
              return this.__PROXY__.rowHeight(...args);
            
        };
        
        // function 
        QTableView.prototype.columnViewportPosition = function(...args) 
          
        {
          //print("JS: QTableView.prototype.columnViewportPosition");
          
              return this.__PROXY__.columnViewportPosition(...args);
            
        };
        
        // function 
        QTableView.prototype.columnAt = function(...args) 
          
        {
          //print("JS: QTableView.prototype.columnAt");
          
              return this.__PROXY__.columnAt(...args);
            
        };
        
        // function 
        QTableView.prototype.setColumnWidth = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setColumnWidth");
          
              return this.__PROXY__.setColumnWidth(...args);
            
        };
        
        // function 
        QTableView.prototype.columnWidth = function(...args) 
          
        {
          //print("JS: QTableView.prototype.columnWidth");
          
              return this.__PROXY__.columnWidth(...args);
            
        };
        
        // function 
        QTableView.prototype.isRowHidden = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isRowHidden");
          
              return this.__PROXY__.isRowHidden(...args);
            
        };
        
        // function 
        QTableView.prototype.setRowHidden = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setRowHidden");
          
              return this.__PROXY__.setRowHidden(...args);
            
        };
        
        // function 
        QTableView.prototype.isColumnHidden = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isColumnHidden");
          
              return this.__PROXY__.isColumnHidden(...args);
            
        };
        
        // function 
        QTableView.prototype.setColumnHidden = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setColumnHidden");
          
              return this.__PROXY__.setColumnHidden(...args);
            
        };
        
        // function 
        QTableView.prototype.setSortingEnabled = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setSortingEnabled");
          
              return this.__PROXY__.setSortingEnabled(...args);
            
        };
        
        // function 
        QTableView.prototype.isSortingEnabled = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isSortingEnabled");
          
              return this.__PROXY__.isSortingEnabled(...args);
            
        };
        
        // function 
        QTableView.prototype.showGrid = function(...args) 
          
        {
          //print("JS: QTableView.prototype.showGrid");
          
              return this.__PROXY__.showGrid(...args);
            
        };
        
        // function 
        QTableView.prototype.setGridStyle = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setGridStyle");
          
              return this.__PROXY__.setGridStyle(...args);
            
        };
        
        // function 
        QTableView.prototype.setWordWrap = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setWordWrap");
          
              return this.__PROXY__.setWordWrap(...args);
            
        };
        
        // function 
        QTableView.prototype.setCornerButtonEnabled = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setCornerButtonEnabled");
          
              return this.__PROXY__.setCornerButtonEnabled(...args);
            
        };
        
        // function 
        QTableView.prototype.isCornerButtonEnabled = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isCornerButtonEnabled");
          
              return this.__PROXY__.isCornerButtonEnabled(...args);
            
        };
        
        // function 
        QTableView.prototype.visualRect = function(...args) 
          
        {
          //print("JS: QTableView.prototype.visualRect");
          
              return this.__PROXY__.visualRect(...args);
            
        };
        
        // function 
        QTableView.prototype.scrollTo = function(...args) 
          
        {
          //print("JS: QTableView.prototype.scrollTo");
          
              return this.__PROXY__.scrollTo(...args);
            
        };
        
        // function 
        QTableView.prototype.indexAt = function(...args) 
          
        {
          //print("JS: QTableView.prototype.indexAt");
          
              return this.__PROXY__.indexAt(...args);
            
        };
        
        // function 
        QTableView.prototype.setSpan = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setSpan");
          
              return this.__PROXY__.setSpan(...args);
            
        };
        
        // function 
        QTableView.prototype.rowSpan = function(...args) 
          
        {
          //print("JS: QTableView.prototype.rowSpan");
          
              return this.__PROXY__.rowSpan(...args);
            
        };
        
        // function 
        QTableView.prototype.columnSpan = function(...args) 
          
        {
          //print("JS: QTableView.prototype.columnSpan");
          
              return this.__PROXY__.columnSpan(...args);
            
        };
        
        // function 
        QTableView.prototype.clearSpans = function(...args) 
          
        {
          //print("JS: QTableView.prototype.clearSpans");
          
              return this.__PROXY__.clearSpans(...args);
            
        };
        
        // function 
        QTableView.prototype.selectRow = function(...args) 
          
        {
          //print("JS: QTableView.prototype.selectRow");
          
              return this.__PROXY__.selectRow(...args);
            
        };
        
        // function 
        QTableView.prototype.selectColumn = function(...args) 
          
        {
          //print("JS: QTableView.prototype.selectColumn");
          
              return this.__PROXY__.selectColumn(...args);
            
        };
        
        // function 
        QTableView.prototype.hideRow = function(...args) 
          
        {
          //print("JS: QTableView.prototype.hideRow");
          
              return this.__PROXY__.hideRow(...args);
            
        };
        
        // function 
        QTableView.prototype.hideColumn = function(...args) 
          
        {
          //print("JS: QTableView.prototype.hideColumn");
          
              return this.__PROXY__.hideColumn(...args);
            
        };
        
        // function 
        QTableView.prototype.showRow = function(...args) 
          
        {
          //print("JS: QTableView.prototype.showRow");
          
              return this.__PROXY__.showRow(...args);
            
        };
        
        // function 
        QTableView.prototype.showColumn = function(...args) 
          
        {
          //print("JS: QTableView.prototype.showColumn");
          
              return this.__PROXY__.showColumn(...args);
            
        };
        
        // function 
        QTableView.prototype.resizeRowToContents = function(...args) 
          
        {
          //print("JS: QTableView.prototype.resizeRowToContents");
          
              return this.__PROXY__.resizeRowToContents(...args);
            
        };
        
        // function 
        QTableView.prototype.resizeRowsToContents = function(...args) 
          
        {
          //print("JS: QTableView.prototype.resizeRowsToContents");
          
              return this.__PROXY__.resizeRowsToContents(...args);
            
        };
        
        // function 
        QTableView.prototype.resizeColumnToContents = function(...args) 
          
        {
          //print("JS: QTableView.prototype.resizeColumnToContents");
          
              return this.__PROXY__.resizeColumnToContents(...args);
            
        };
        
        // function 
        QTableView.prototype.resizeColumnsToContents = function(...args) 
          
        {
          //print("JS: QTableView.prototype.resizeColumnsToContents");
          
              return this.__PROXY__.resizeColumnsToContents(...args);
            
        };
        
        // function 
        QTableView.prototype.sortByColumn = function(...args) 
          
        {
          //print("JS: QTableView.prototype.sortByColumn");
          
              return this.__PROXY__.sortByColumn(...args);
            
        };
        
        // function 
        QTableView.prototype.setShowGrid = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setShowGrid");
          
              return this.__PROXY__.setShowGrid(...args);
            
        };
        
        // function 
        QTableView.prototype.rowMoved = function(...args) 
          
        {
          //print("JS: QTableView.prototype.rowMoved");
          
              return this.__PROXY__.rowMovedSuper(...args);
            
        };
        QTableView.prototype.rowMoved.__SUPER__ = true;
        
        // function 
        QTableView.prototype.columnMoved = function(...args) 
          
        {
          //print("JS: QTableView.prototype.columnMoved");
          
              return this.__PROXY__.columnMovedSuper(...args);
            
        };
        QTableView.prototype.columnMoved.__SUPER__ = true;
        
        // function 
        QTableView.prototype.rowResized = function(...args) 
          
        {
          //print("JS: QTableView.prototype.rowResized");
          
              return this.__PROXY__.rowResizedSuper(...args);
            
        };
        QTableView.prototype.rowResized.__SUPER__ = true;
        
        // function 
        QTableView.prototype.columnResized = function(...args) 
          
        {
          //print("JS: QTableView.prototype.columnResized");
          
              return this.__PROXY__.columnResizedSuper(...args);
            
        };
        QTableView.prototype.columnResized.__SUPER__ = true;
        
        // function 
        QTableView.prototype.rowCountChanged = function(...args) 
          
        {
          //print("JS: QTableView.prototype.rowCountChanged");
          
              return this.__PROXY__.rowCountChangedSuper(...args);
            
        };
        QTableView.prototype.rowCountChanged.__SUPER__ = true;
        
        // function 
        QTableView.prototype.columnCountChanged = function(...args) 
          
        {
          //print("JS: QTableView.prototype.columnCountChanged");
          
              return this.__PROXY__.columnCountChangedSuper(...args);
            
        };
        QTableView.prototype.columnCountChanged.__SUPER__ = true;
        
        // function 
        QTableView.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: QTableView.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBySuper(...args);
            
        };
        QTableView.prototype.scrollContentsBy.__SUPER__ = true;
        
        // function 
        QTableView.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QTableView.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QTableView.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QTableView.prototype.horizontalOffset = function(...args) 
          
        {
          //print("JS: QTableView.prototype.horizontalOffset");
          
              return this.__PROXY__.horizontalOffsetSuper(...args);
            
        };
        QTableView.prototype.horizontalOffset.__SUPER__ = true;
        
        // function 
        QTableView.prototype.verticalOffset = function(...args) 
          
        {
          //print("JS: QTableView.prototype.verticalOffset");
          
              return this.__PROXY__.verticalOffsetSuper(...args);
            
        };
        QTableView.prototype.verticalOffset.__SUPER__ = true;
        
        // function 
        QTableView.prototype.setSelection = function(...args) 
          
        {
          //print("JS: QTableView.prototype.setSelection");
          
              return this.__PROXY__.setSelectionSuper(...args);
            
        };
        QTableView.prototype.setSelection.__SUPER__ = true;
        
        // function 
        QTableView.prototype.visualRegionForSelection = function(...args) 
          
        {
          //print("JS: QTableView.prototype.visualRegionForSelection");
          
              return this.__PROXY__.visualRegionForSelectionSuper(...args);
            
        };
        QTableView.prototype.visualRegionForSelection.__SUPER__ = true;
        
        // function 
        QTableView.prototype.updateGeometries = function(...args) 
          
        {
          //print("JS: QTableView.prototype.updateGeometries");
          
              return this.__PROXY__.updateGeometriesSuper(...args);
            
        };
        QTableView.prototype.updateGeometries.__SUPER__ = true;
        
        // function 
        QTableView.prototype.viewportSizeHint = function(...args) 
          
        {
          //print("JS: QTableView.prototype.viewportSizeHint");
          
              return this.__PROXY__.viewportSizeHintSuper(...args);
            
        };
        QTableView.prototype.viewportSizeHint.__SUPER__ = true;
        
        // function 
        QTableView.prototype.verticalScrollbarAction = function(...args) 
          
        {
          //print("JS: QTableView.prototype.verticalScrollbarAction");
          
              return this.__PROXY__.verticalScrollbarActionSuper(...args);
            
        };
        QTableView.prototype.verticalScrollbarAction.__SUPER__ = true;
        
        // function 
        QTableView.prototype.horizontalScrollbarAction = function(...args) 
          
        {
          //print("JS: QTableView.prototype.horizontalScrollbarAction");
          
              return this.__PROXY__.horizontalScrollbarActionSuper(...args);
            
        };
        QTableView.prototype.horizontalScrollbarAction.__SUPER__ = true;
        
        // function 
        QTableView.prototype.isIndexHidden = function(...args) 
          
        {
          //print("JS: QTableView.prototype.isIndexHidden");
          
              return this.__PROXY__.isIndexHiddenSuper(...args);
            
        };
        QTableView.prototype.isIndexHidden.__SUPER__ = true;
        
        // function 
        QTableView.prototype.selectionChanged = function(...args) 
          
        {
          //print("JS: QTableView.prototype.selectionChanged");
          
              return this.__PROXY__.selectionChangedSuper(...args);
            
        };
        QTableView.prototype.selectionChanged.__SUPER__ = true;
        
        // function 
        QTableView.prototype.currentChanged = function(...args) 
          
        {
          //print("JS: QTableView.prototype.currentChanged");
          
              return this.__PROXY__.currentChangedSuper(...args);
            
        };
        QTableView.prototype.currentChanged.__SUPER__ = true;
        
        // function 
        QTableView.prototype.visualIndex = function(...args) 
          
        {
          //print("JS: QTableView.prototype.visualIndex");
          
              return this.__PROXY__.visualIndex(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QTableView.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'autoScrollMargin', {
              get: function() {
                  
                      return this.__PROXY__.autoScrollMargin;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoScrollMargin(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'editTriggers', {
              get: function() {
                  
                      return this.__PROXY__.editTriggers;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditTriggers(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'tabKeyNavigation', {
              get: function() {
                  
                      return this.__PROXY__.tabKeyNavigation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabKeyNavigation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'showDropIndicator', {
              get: function() {
                  
                      return this.__PROXY__.showDropIndicator;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDropIndicatorShown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'dragEnabled', {
              get: function() {
                  
                      return this.__PROXY__.dragEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'dragDropOverwriteMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropOverwriteMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropOverwriteMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'dragDropMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'defaultDropAction', {
              get: function() {
                  
                      return this.__PROXY__.defaultDropAction;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultDropAction(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'alternatingRowColors', {
              get: function() {
                  
                      return this.__PROXY__.alternatingRowColors;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlternatingRowColors(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'selectionMode', {
              get: function() {
                  
                      return this.__PROXY__.selectionMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'selectionBehavior', {
              get: function() {
                  
                      return this.__PROXY__.selectionBehavior;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionBehavior(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'textElideMode', {
              get: function() {
                  
                      return this.__PROXY__.textElideMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextElideMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'verticalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.verticalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVerticalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'horizontalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.horizontalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHorizontalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'gridStyle', {
              get: function() {
                  
                      return this.__PROXY__.gridStyle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGridStyle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'sortingEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isSortingEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSortingEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'wordWrap', {
              get: function() {
                  
                      return this.__PROXY__.wordWrap;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWordWrap(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTableView.prototype, 'cornerButtonEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isCornerButtonEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCornerButtonEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QTableView.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QTableView.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QTableView.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
          Object.defineProperty(QTableView.prototype, 'pressed(QModelIndex)', {
              get: function() { return this.__PROXY__.pressed; },
              configurable: true
          });
        
        Object.defineProperty(QTableView.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(QTableView.prototype, 'clicked(QModelIndex)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(QTableView.prototype, 'doubleClicked', {
            get: function() { return this.__PROXY__.doubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(QTableView.prototype, 'doubleClicked(QModelIndex)', {
              get: function() { return this.__PROXY__.doubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(QTableView.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(QTableView.prototype, 'activated(QModelIndex)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(QTableView.prototype, 'entered', {
            get: function() { return this.__PROXY__.entered; },
            configurable: true
        });
        
          Object.defineProperty(QTableView.prototype, 'entered(QModelIndex)', {
              get: function() { return this.__PROXY__.entered; },
              configurable: true
          });
        
        Object.defineProperty(QTableView.prototype, 'viewportEntered', {
            get: function() { return this.__PROXY__.viewportEntered; },
            configurable: true
        });
        
        Object.defineProperty(QTableView.prototype, 'iconSizeChanged', {
            get: function() { return this.__PROXY__.iconSizeChanged; },
            configurable: true
        });
        
          Object.defineProperty(QTableView.prototype, 'iconSizeChanged(QSize)', {
              get: function() { return this.__PROXY__.iconSizeChanged; },
              configurable: true
          });
        QTableView.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTableView.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTableView.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTableView.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTableView.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTableView.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      