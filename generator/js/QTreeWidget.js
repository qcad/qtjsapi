
      // auto generated
      //var self;

      // class constructor:
      function QTreeWidget() {
        

        // should be QTreeWidget_BaseJs.call(this, engine):
        //QTreeWidget.prototype = new QTreeWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTreeWidget.getIdStatic()))) {

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
            qWarning("QTreeWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QTreeWidget.js: No constructor found for class QTreeWidget");
            
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
          
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["doubleClicked(QModelIndex)"] = Object.getPrototypeOf(this).doubleClicked;
  
    this["expanded(QModelIndex)"] = Object.getPrototypeOf(this).expanded;
  
    this["collapsed(QModelIndex)"] = Object.getPrototypeOf(this).collapsed;
  
    this["itemPressed(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemPressed;
  
    this["itemClicked(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemClicked;
  
    this["itemDoubleClicked(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemDoubleClicked;
  
    this["itemActivated(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemActivated;
  
    this["itemEntered(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemEntered;
  
    this["itemChanged(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemChanged;
  
    this["itemExpanded(QTreeWidgetItem*)"] = Object.getPrototypeOf(this).itemExpanded;
  
    this["itemCollapsed(QTreeWidgetItem*)"] = Object.getPrototypeOf(this).itemCollapsed;
  
    this["currentItemChanged(QTreeWidgetItem*,QTreeWidgetItem*)"] = Object.getPrototypeOf(this).currentItemChanged;
  
            }
          
        }

        
              // define property setters/getters:
              Object.defineProperty(this, 'objectName', {
                  get() {
                      
                          return this.__PROXY__.objectName;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setObjectName(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'modal', {
                  get() {
                      
                          return this.__PROXY__.isModal();
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'windowModality', {
                  get() {
                      
                          return this.__PROXY__.windowModality;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setWindowModality(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'enabled', {
                  get() {
                      
                          return this.__PROXY__.isEnabled();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setEnabled(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'geometry', {
                  get() {
                      
                          return this.__PROXY__.geometry;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setGeometry(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'frameGeometry', {
                  get() {
                      
                          return this.__PROXY__.frameGeometry;
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'normalGeometry', {
                  get() {
                      
                          return this.__PROXY__.normalGeometry;
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'x', {
                  get() {
                      
                          return this.__PROXY__.x;
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'y', {
                  get() {
                      
                          return this.__PROXY__.y;
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'pos', {
                  get() {
                      
                          return this.__PROXY__.pos;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.move(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'frameSize', {
                  get() {
                      
                          return this.__PROXY__.frameSize;
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'size', {
                  get() {
                      
                          return this.__PROXY__.size;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.resize(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'width', {
                  get() {
                      
                          return this.__PROXY__.width;
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'height', {
                  get() {
                      
                          return this.__PROXY__.height;
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'rect', {
                  get() {
                      
                          return this.__PROXY__.rect;
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'childrenRect', {
                  get() {
                      
                          return this.__PROXY__.childrenRect;
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'childrenRegion', {
                  get() {
                      
                          return this.__PROXY__.childrenRegion;
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'sizePolicy', {
                  get() {
                      
                          return this.__PROXY__.sizePolicy;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setSizePolicy(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'minimumSize', {
                  get() {
                      
                          return this.__PROXY__.minimumSize;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setMinimumSize(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'maximumSize', {
                  get() {
                      
                          return this.__PROXY__.maximumSize;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setMaximumSize(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'minimumWidth', {
                  get() {
                      
                          return this.__PROXY__.minimumWidth;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setMinimumWidth(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'minimumHeight', {
                  get() {
                      
                          return this.__PROXY__.minimumHeight;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setMinimumHeight(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'maximumWidth', {
                  get() {
                      
                          return this.__PROXY__.maximumWidth;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setMaximumWidth(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'maximumHeight', {
                  get() {
                      
                          return this.__PROXY__.maximumHeight;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setMaximumHeight(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'sizeIncrement', {
                  get() {
                      
                          return this.__PROXY__.sizeIncrement;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setSizeIncrement(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'baseSize', {
                  get() {
                      
                          return this.__PROXY__.baseSize;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setBaseSize(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'palette', {
                  get() {
                      
                          return this.__PROXY__.palette;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setPalette(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'font', {
                  get() {
                      
                          return this.__PROXY__.font;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setFont(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'cursor', {
                  get() {
                      
                          return this.__PROXY__.cursor;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setCursor(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'mouseTracking', {
                  get() {
                      
                          return this.__PROXY__.hasMouseTracking();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setMouseTracking(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'tabletTracking', {
                  get() {
                      
                          return this.__PROXY__.hasTabletTracking();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setTabletTracking(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'isActiveWindow', {
                  get() {
                      
                          return this.__PROXY__.isActiveWindow;
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'focusPolicy', {
                  get() {
                      
                          return this.__PROXY__.focusPolicy;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setFocusPolicy(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'focus', {
                  get() {
                      
                          return this.__PROXY__.hasFocus();
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'contextMenuPolicy', {
                  get() {
                      
                          return this.__PROXY__.contextMenuPolicy;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setContextMenuPolicy(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'updatesEnabled', {
                  get() {
                      
                          return this.__PROXY__.updatesEnabled;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setUpdatesEnabled(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'visible', {
                  get() {
                      
                          return this.__PROXY__.isVisible();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setVisible(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'minimized', {
                  get() {
                      
                          return this.__PROXY__.isMinimized();
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'maximized', {
                  get() {
                      
                          return this.__PROXY__.isMaximized();
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'fullScreen', {
                  get() {
                      
                          return this.__PROXY__.isFullScreen();
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'sizeHint', {
                  get() {
                      
                          return this.__PROXY__.sizeHint;
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'minimumSizeHint', {
                  get() {
                      
                          return this.__PROXY__.minimumSizeHint;
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'acceptDrops', {
                  get() {
                      
                          return this.__PROXY__.acceptDrops;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setAcceptDrops(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'windowTitle', {
                  get() {
                      
                          return this.__PROXY__.windowTitle;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setWindowTitle(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'windowIcon', {
                  get() {
                      
                          return this.__PROXY__.windowIcon;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setWindowIcon(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'windowIconText', {
                  get() {
                      
                          return this.__PROXY__.windowIconText;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setWindowIconText(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'windowOpacity', {
                  get() {
                      
                          return this.__PROXY__.windowOpacity;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setWindowOpacity(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'windowModified', {
                  get() {
                      
                          return this.__PROXY__.isWindowModified();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setWindowModified(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'toolTip', {
                  get() {
                      
                          return this.__PROXY__.toolTip;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setToolTip(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'toolTipDuration', {
                  get() {
                      
                          return this.__PROXY__.toolTipDuration;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setToolTipDuration(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'statusTip', {
                  get() {
                      
                          return this.__PROXY__.statusTip;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setStatusTip(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'whatsThis', {
                  get() {
                      
                          return this.__PROXY__.whatsThis;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setWhatsThis(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'accessibleName', {
                  get() {
                      
                          return this.__PROXY__.accessibleName;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setAccessibleName(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'accessibleDescription', {
                  get() {
                      
                          return this.__PROXY__.accessibleDescription;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setAccessibleDescription(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'layoutDirection', {
                  get() {
                      
                          return this.__PROXY__.layoutDirection;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setLayoutDirection(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'autoFillBackground', {
                  get() {
                      
                          return this.__PROXY__.autoFillBackground;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setAutoFillBackground(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'styleSheet', {
                  get() {
                      
                          return this.__PROXY__.styleSheet;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setStyleSheet(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'locale', {
                  get() {
                      
                          return this.__PROXY__.locale;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setLocale(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'windowFilePath', {
                  get() {
                      
                          return this.__PROXY__.windowFilePath;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setWindowFilePath(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'inputMethodHints', {
                  get() {
                      
                          return this.__PROXY__.inputMethodHints;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setInputMethodHints(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'frameRect', {
                  get() {
                      
                          return this.__PROXY__.frameRect;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setFrameRect(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'frameShadow', {
                  get() {
                      
                          return this.__PROXY__.frameShadow;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setFrameShadow(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'frameShape', {
                  get() {
                      
                          return this.__PROXY__.frameShape;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setFrameShape(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'frameWidth', {
                  get() {
                      
                          return this.__PROXY__.frameWidth;
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'lineWidth', {
                  get() {
                      
                          return this.__PROXY__.lineWidth;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setLineWidth(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'midLineWidth', {
                  get() {
                      
                          return this.__PROXY__.midLineWidth;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setMidLineWidth(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'autoScrollMargin', {
                  get() {
                      
                          return this.__PROXY__.autoScrollMargin;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setAutoScrollMargin(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'editTriggers', {
                  get() {
                      
                          return this.__PROXY__.editTriggers;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setEditTriggers(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'tabKeyNavigation', {
                  get() {
                      
                          return this.__PROXY__.tabKeyNavigation;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setTabKeyNavigation(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'showDropIndicator', {
                  get() {
                      
                          return this.__PROXY__.showDropIndicator;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setDropIndicatorShown(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'dragEnabled', {
                  get() {
                      
                          return this.__PROXY__.dragEnabled;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setDragEnabled(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'dragDropOverwriteMode', {
                  get() {
                      
                          return this.__PROXY__.dragDropOverwriteMode;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setDragDropOverwriteMode(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'dragDropMode', {
                  get() {
                      
                          return this.__PROXY__.dragDropMode;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setDragDropMode(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'defaultDropAction', {
                  get() {
                      
                          return this.__PROXY__.defaultDropAction;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setDefaultDropAction(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'alternatingRowColors', {
                  get() {
                      
                          return this.__PROXY__.alternatingRowColors;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setAlternatingRowColors(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'selectionMode', {
                  get() {
                      
                          return this.__PROXY__.selectionMode;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setSelectionMode(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'selectionBehavior', {
                  get() {
                      
                          return this.__PROXY__.selectionBehavior;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setSelectionBehavior(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'iconSize', {
                  get() {
                      
                          return this.__PROXY__.iconSize;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setIconSize(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'textElideMode', {
                  get() {
                      
                          return this.__PROXY__.textElideMode;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setTextElideMode(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'verticalScrollMode', {
                  get() {
                      
                          return this.__PROXY__.verticalScrollMode;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setVerticalScrollMode(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'horizontalScrollMode', {
                  get() {
                      
                          return this.__PROXY__.horizontalScrollMode;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setHorizontalScrollMode(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'indentation', {
                  get() {
                      
                          return this.__PROXY__.indentation;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setIndentation(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'rootIsDecorated', {
                  get() {
                      
                          return this.__PROXY__.rootIsDecorated;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setRootIsDecorated(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'uniformRowHeights', {
                  get() {
                      
                          return this.__PROXY__.uniformRowHeights;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setUniformRowHeights(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'itemsExpandable', {
                  get() {
                      
                          return this.__PROXY__.itemsExpandable;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setItemsExpandable(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'sortingEnabled', {
                  get() {
                      
                          return this.__PROXY__.isSortingEnabled();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setSortingEnabled(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'animated', {
                  get() {
                      
                          return this.__PROXY__.isAnimated();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setAnimated(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'allColumnsShowFocus', {
                  get() {
                      
                          return this.__PROXY__.allColumnsShowFocus;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setAllColumnsShowFocus(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'wordWrap', {
                  get() {
                      
                          return this.__PROXY__.wordWrap;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setWordWrap(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'headerHidden', {
                  get() {
                      
                          return this.__PROXY__.isHeaderHidden();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setHeaderHidden(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'expandsOnDoubleClick', {
                  get() {
                      
                          return this.__PROXY__.expandsOnDoubleClick;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setExpandsOnDoubleClick(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'topLevelItemCount', {
                  get() {
                      
                          return this.__PROXY__.topLevelItemCount;
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'columnCount', {
                  get() {
                      
                          return this.__PROXY__.columnCount;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setColumnCount(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            

      }

      //QTreeWidget.prototype = new QTreeWidget_BaseJs(engine);
      //QTreeWidget.prototype = new QTreeWidget_Wrapper(engine);
      QTreeWidget.prototype = new Object();

      QTreeWidget.prototype.toString = function() {
          //return "QTreeWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTreeWidget [JS]";
        };
      QTreeWidget.getObjectType = function() {
        return RJSType_QTreeWidget.getIdStatic();
      };

      QTreeWidget.prototype.getObjectType = function() {
        return RJSType_QTreeWidget.getIdStatic();
      };

      QTreeWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTreeWidget.getIdStatic()) {
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
        
          if (t===RJSType_QTreeView.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QTreeWidget.NoFrame = QTreeWidget_Wrapper.NoFrame;
QTreeWidget.Box = QTreeWidget_Wrapper.Box;
QTreeWidget.Panel = QTreeWidget_Wrapper.Panel;
QTreeWidget.WinPanel = QTreeWidget_Wrapper.WinPanel;
QTreeWidget.HLine = QTreeWidget_Wrapper.HLine;
QTreeWidget.VLine = QTreeWidget_Wrapper.VLine;
QTreeWidget.StyledPanel = QTreeWidget_Wrapper.StyledPanel;

  // enum: Shadow
QTreeWidget.Plain = QTreeWidget_Wrapper.Plain;
QTreeWidget.Raised = QTreeWidget_Wrapper.Raised;
QTreeWidget.Sunken = QTreeWidget_Wrapper.Sunken;

  // enum: StyleMask
QTreeWidget.Shadow_Mask = QTreeWidget_Wrapper.Shadow_Mask;
QTreeWidget.Shape_Mask = QTreeWidget_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QTreeWidget.AdjustIgnored = QTreeWidget_Wrapper.AdjustIgnored;
QTreeWidget.AdjustToContentsOnFirstShow = QTreeWidget_Wrapper.AdjustToContentsOnFirstShow;
QTreeWidget.AdjustToContents = QTreeWidget_Wrapper.AdjustToContents;

  // enum: SelectionMode
QTreeWidget.NoSelection = QTreeWidget_Wrapper.NoSelection;
QTreeWidget.SingleSelection = QTreeWidget_Wrapper.SingleSelection;
QTreeWidget.MultiSelection = QTreeWidget_Wrapper.MultiSelection;
QTreeWidget.ExtendedSelection = QTreeWidget_Wrapper.ExtendedSelection;
QTreeWidget.ContiguousSelection = QTreeWidget_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
QTreeWidget.SelectItems = QTreeWidget_Wrapper.SelectItems;
QTreeWidget.SelectRows = QTreeWidget_Wrapper.SelectRows;
QTreeWidget.SelectColumns = QTreeWidget_Wrapper.SelectColumns;

  // enum: ScrollHint
QTreeWidget.EnsureVisible = QTreeWidget_Wrapper.EnsureVisible;
QTreeWidget.PositionAtTop = QTreeWidget_Wrapper.PositionAtTop;
QTreeWidget.PositionAtBottom = QTreeWidget_Wrapper.PositionAtBottom;
QTreeWidget.PositionAtCenter = QTreeWidget_Wrapper.PositionAtCenter;

  // enum: EditTrigger
QTreeWidget.NoEditTriggers = QTreeWidget_Wrapper.NoEditTriggers;
QTreeWidget.CurrentChanged = QTreeWidget_Wrapper.CurrentChanged;
QTreeWidget.DoubleClicked = QTreeWidget_Wrapper.DoubleClicked;
QTreeWidget.SelectedClicked = QTreeWidget_Wrapper.SelectedClicked;
QTreeWidget.EditKeyPressed = QTreeWidget_Wrapper.EditKeyPressed;
QTreeWidget.AnyKeyPressed = QTreeWidget_Wrapper.AnyKeyPressed;
QTreeWidget.AllEditTriggers = QTreeWidget_Wrapper.AllEditTriggers;

  // enum: ScrollMode
QTreeWidget.ScrollPerItem = QTreeWidget_Wrapper.ScrollPerItem;
QTreeWidget.ScrollPerPixel = QTreeWidget_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
QTreeWidget.NoDragDrop = QTreeWidget_Wrapper.NoDragDrop;
QTreeWidget.DragOnly = QTreeWidget_Wrapper.DragOnly;
QTreeWidget.DropOnly = QTreeWidget_Wrapper.DropOnly;
QTreeWidget.DragDrop = QTreeWidget_Wrapper.DragDrop;
QTreeWidget.InternalMove = QTreeWidget_Wrapper.InternalMove;


      // functions:
      
        // function 
        QTreeWidget.prototype.objectName = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.objectName");
          return this.__PROXY__.objectName(...args);
        };
    
        // function 
        QTreeWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setObjectName");
          return this.__PROXY__.setObjectName(...args);
        };
    
        // function 
        QTreeWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isWidgetType");
          return this.__PROXY__.isWidgetType(...args);
        };
    
        // function 
        QTreeWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isWindowType");
          return this.__PROXY__.isWindowType(...args);
        };
    
        // function 
        QTreeWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.signalsBlocked");
          return this.__PROXY__.signalsBlocked(...args);
        };
    
        // function 
        QTreeWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.blockSignals");
          return this.__PROXY__.blockSignals(...args);
        };
    
        // function 
        QTreeWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.findChild");
          return this.__PROXY__.findChild(...args);
        };
    
        // function 
        QTreeWidget.prototype.children = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.children");
          return this.__PROXY__.children(...args);
        };
    
        // function 
        QTreeWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.installEventFilter");
          return this.__PROXY__.installEventFilter(...args);
        };
    
        // function 
        QTreeWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.removeEventFilter");
          return this.__PROXY__.removeEventFilter(...args);
        };
    
        // function 
        QTreeWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.dumpObjectTree");
          return this.__PROXY__.dumpObjectTree(...args);
        };
    
        // function 
        QTreeWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.dumpObjectInfo");
          return this.__PROXY__.dumpObjectInfo(...args);
        };
    
        // function 
        QTreeWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        QTreeWidget.prototype.property = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.property");
          return this.__PROXY__.property(...args);
        };
    
        // function 
        QTreeWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.dynamicPropertyNames");
          return this.__PROXY__.dynamicPropertyNames(...args);
        };
    
        // function 
        QTreeWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.parent");
          return this.__PROXY__.parent(...args);
        };
    
        // function 
        QTreeWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.deleteLater");
          return this.__PROXY__.deleteLater(...args);
        };
    
        // function 
        QTreeWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.devType");
          return this.__PROXY__.devType(...args);
        };
    
        // function 
        QTreeWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.createWinId");
          return this.__PROXY__.createWinId(...args);
        };
    
        // function 
        QTreeWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isWindow");
          return this.__PROXY__.isWindow(...args);
        };
    
        // function 
        QTreeWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isModal");
          return this.__PROXY__.isModal(...args);
        };
    
        // function 
        QTreeWidget.prototype.windowModality = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.windowModality");
          return this.__PROXY__.windowModality(...args);
        };
    
        // function 
        QTreeWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setWindowModality");
          return this.__PROXY__.setWindowModality(...args);
        };
    
        // function 
        QTreeWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isEnabled");
          return this.__PROXY__.isEnabled(...args);
        };
    
        // function 
        QTreeWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isEnabledTo");
          return this.__PROXY__.isEnabledTo(...args);
        };
    
        // function 
        QTreeWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setEnabled");
          return this.__PROXY__.setEnabled(...args);
        };
    
        // function 
        QTreeWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setDisabled");
          return this.__PROXY__.setDisabled(...args);
        };
    
        // function 
        QTreeWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setWindowModified");
          return this.__PROXY__.setWindowModified(...args);
        };
    
        // function 
        QTreeWidget.prototype.frameGeometry = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.frameGeometry");
          return this.__PROXY__.frameGeometry(...args);
        };
    
        // function 
        QTreeWidget.prototype.geometry = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.geometry");
          return this.__PROXY__.geometry(...args);
        };
    
        // function 
        QTreeWidget.prototype.normalGeometry = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.normalGeometry");
          return this.__PROXY__.normalGeometry(...args);
        };
    
        // function 
        QTreeWidget.prototype.x = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.x");
          return this.__PROXY__.x(...args);
        };
    
        // function 
        QTreeWidget.prototype.y = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.y");
          return this.__PROXY__.y(...args);
        };
    
        // function 
        QTreeWidget.prototype.pos = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.pos");
          return this.__PROXY__.pos(...args);
        };
    
        // function 
        QTreeWidget.prototype.frameSize = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.frameSize");
          return this.__PROXY__.frameSize(...args);
        };
    
        // function 
        QTreeWidget.prototype.size = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.size");
          return this.__PROXY__.size(...args);
        };
    
        // function 
        QTreeWidget.prototype.width = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.width");
          return this.__PROXY__.width(...args);
        };
    
        // function 
        QTreeWidget.prototype.height = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.height");
          return this.__PROXY__.height(...args);
        };
    
        // function 
        QTreeWidget.prototype.rect = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.rect");
          return this.__PROXY__.rect(...args);
        };
    
        // function 
        QTreeWidget.prototype.childrenRect = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.childrenRect");
          return this.__PROXY__.childrenRect(...args);
        };
    
        // function 
        QTreeWidget.prototype.childrenRegion = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.childrenRegion");
          return this.__PROXY__.childrenRegion(...args);
        };
    
        // function 
        QTreeWidget.prototype.minimumSize = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.minimumSize");
          return this.__PROXY__.minimumSize(...args);
        };
    
        // function 
        QTreeWidget.prototype.maximumSize = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.maximumSize");
          return this.__PROXY__.maximumSize(...args);
        };
    
        // function 
        QTreeWidget.prototype.minimumWidth = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.minimumWidth");
          return this.__PROXY__.minimumWidth(...args);
        };
    
        // function 
        QTreeWidget.prototype.minimumHeight = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.minimumHeight");
          return this.__PROXY__.minimumHeight(...args);
        };
    
        // function 
        QTreeWidget.prototype.maximumWidth = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.maximumWidth");
          return this.__PROXY__.maximumWidth(...args);
        };
    
        // function 
        QTreeWidget.prototype.maximumHeight = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.maximumHeight");
          return this.__PROXY__.maximumHeight(...args);
        };
    
        // function 
        QTreeWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setMinimumSize");
          return this.__PROXY__.setMinimumSize(...args);
        };
    
        // function 
        QTreeWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setMaximumSize");
          return this.__PROXY__.setMaximumSize(...args);
        };
    
        // function 
        QTreeWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setMinimumWidth");
          return this.__PROXY__.setMinimumWidth(...args);
        };
    
        // function 
        QTreeWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setMinimumHeight");
          return this.__PROXY__.setMinimumHeight(...args);
        };
    
        // function 
        QTreeWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setMaximumWidth");
          return this.__PROXY__.setMaximumWidth(...args);
        };
    
        // function 
        QTreeWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setMaximumHeight");
          return this.__PROXY__.setMaximumHeight(...args);
        };
    
        // function 
        QTreeWidget.prototype.sizeIncrement = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.sizeIncrement");
          return this.__PROXY__.sizeIncrement(...args);
        };
    
        // function 
        QTreeWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setSizeIncrement");
          return this.__PROXY__.setSizeIncrement(...args);
        };
    
        // function 
        QTreeWidget.prototype.baseSize = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.baseSize");
          return this.__PROXY__.baseSize(...args);
        };
    
        // function 
        QTreeWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setBaseSize");
          return this.__PROXY__.setBaseSize(...args);
        };
    
        // function 
        QTreeWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setFixedSize");
          return this.__PROXY__.setFixedSize(...args);
        };
    
        // function 
        QTreeWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setFixedWidth");
          return this.__PROXY__.setFixedWidth(...args);
        };
    
        // function 
        QTreeWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setFixedHeight");
          return this.__PROXY__.setFixedHeight(...args);
        };
    
        // function 
        QTreeWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.mapToGlobal");
          return this.__PROXY__.mapToGlobal(...args);
        };
    
        // function 
        QTreeWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.mapFromGlobal");
          return this.__PROXY__.mapFromGlobal(...args);
        };
    
        // function 
        QTreeWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.mapToParent");
          return this.__PROXY__.mapToParent(...args);
        };
    
        // function 
        QTreeWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.mapFromParent");
          return this.__PROXY__.mapFromParent(...args);
        };
    
        // function 
        QTreeWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.mapTo");
          return this.__PROXY__.mapTo(...args);
        };
    
        // function 
        QTreeWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.mapFrom");
          return this.__PROXY__.mapFrom(...args);
        };
    
        // function 
        QTreeWidget.prototype.window = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.window");
          return this.__PROXY__.window(...args);
        };
    
        // function 
        QTreeWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.nativeParentWidget");
          return this.__PROXY__.nativeParentWidget(...args);
        };
    
        // function 
        QTreeWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.topLevelWidget");
          return this.__PROXY__.topLevelWidget(...args);
        };
    
        // function 
        QTreeWidget.prototype.palette = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.palette");
          return this.__PROXY__.palette(...args);
        };
    
        // function 
        QTreeWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setPalette");
          return this.__PROXY__.setPalette(...args);
        };
    
        // function 
        QTreeWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setBackgroundRole");
          return this.__PROXY__.setBackgroundRole(...args);
        };
    
        // function 
        QTreeWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.backgroundRole");
          return this.__PROXY__.backgroundRole(...args);
        };
    
        // function 
        QTreeWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setForegroundRole");
          return this.__PROXY__.setForegroundRole(...args);
        };
    
        // function 
        QTreeWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.foregroundRole");
          return this.__PROXY__.foregroundRole(...args);
        };
    
        // function 
        QTreeWidget.prototype.font = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.font");
          return this.__PROXY__.font(...args);
        };
    
        // function 
        QTreeWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setFont");
          return this.__PROXY__.setFont(...args);
        };
    
        // function 
        QTreeWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.fontInfo");
          return this.__PROXY__.fontInfo(...args);
        };
    
        // function 
        QTreeWidget.prototype.cursor = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.cursor");
          return this.__PROXY__.cursor(...args);
        };
    
        // function 
        QTreeWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setCursor");
          return this.__PROXY__.setCursor(...args);
        };
    
        // function 
        QTreeWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.unsetCursor");
          return this.__PROXY__.unsetCursor(...args);
        };
    
        // function 
        QTreeWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setMouseTracking");
          return this.__PROXY__.setMouseTracking(...args);
        };
    
        // function 
        QTreeWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.hasMouseTracking");
          return this.__PROXY__.hasMouseTracking(...args);
        };
    
        // function 
        QTreeWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.underMouse");
          return this.__PROXY__.underMouse(...args);
        };
    
        // function 
        QTreeWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setTabletTracking");
          return this.__PROXY__.setTabletTracking(...args);
        };
    
        // function 
        QTreeWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.hasTabletTracking");
          return this.__PROXY__.hasTabletTracking(...args);
        };
    
        // function 
        QTreeWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setMask");
          return this.__PROXY__.setMask(...args);
        };
    
        // function 
        QTreeWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.mask");
          return this.__PROXY__.mask(...args);
        };
    
        // function 
        QTreeWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.clearMask");
          return this.__PROXY__.clearMask(...args);
        };
    
        // function 
        QTreeWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.grab");
          return this.__PROXY__.grab(...args);
        };
    
        // function 
        QTreeWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.grabGesture");
          return this.__PROXY__.grabGesture(...args);
        };
    
        // function 
        QTreeWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.ungrabGesture");
          return this.__PROXY__.ungrabGesture(...args);
        };
    
        // function 
        QTreeWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setWindowTitle");
          return this.__PROXY__.setWindowTitle(...args);
        };
    
        // function 
        QTreeWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setStyleSheet");
          return this.__PROXY__.setStyleSheet(...args);
        };
    
        // function 
        QTreeWidget.prototype.styleSheet = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.styleSheet");
          return this.__PROXY__.styleSheet(...args);
        };
    
        // function 
        QTreeWidget.prototype.windowTitle = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.windowTitle");
          return this.__PROXY__.windowTitle(...args);
        };
    
        // function 
        QTreeWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setWindowIcon");
          return this.__PROXY__.setWindowIcon(...args);
        };
    
        // function 
        QTreeWidget.prototype.windowIcon = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.windowIcon");
          return this.__PROXY__.windowIcon(...args);
        };
    
        // function 
        QTreeWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setWindowIconText");
          return this.__PROXY__.setWindowIconText(...args);
        };
    
        // function 
        QTreeWidget.prototype.windowIconText = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.windowIconText");
          return this.__PROXY__.windowIconText(...args);
        };
    
        // function 
        QTreeWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setWindowRole");
          return this.__PROXY__.setWindowRole(...args);
        };
    
        // function 
        QTreeWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.windowRole");
          return this.__PROXY__.windowRole(...args);
        };
    
        // function 
        QTreeWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setWindowFilePath");
          return this.__PROXY__.setWindowFilePath(...args);
        };
    
        // function 
        QTreeWidget.prototype.windowFilePath = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.windowFilePath");
          return this.__PROXY__.windowFilePath(...args);
        };
    
        // function 
        QTreeWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setWindowOpacity");
          return this.__PROXY__.setWindowOpacity(...args);
        };
    
        // function 
        QTreeWidget.prototype.windowOpacity = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.windowOpacity");
          return this.__PROXY__.windowOpacity(...args);
        };
    
        // function 
        QTreeWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isWindowModified");
          return this.__PROXY__.isWindowModified(...args);
        };
    
        // function 
        QTreeWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setToolTip");
          return this.__PROXY__.setToolTip(...args);
        };
    
        // function 
        QTreeWidget.prototype.toolTip = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.toolTip");
          return this.__PROXY__.toolTip(...args);
        };
    
        // function 
        QTreeWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setToolTipDuration");
          return this.__PROXY__.setToolTipDuration(...args);
        };
    
        // function 
        QTreeWidget.prototype.toolTipDuration = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.toolTipDuration");
          return this.__PROXY__.toolTipDuration(...args);
        };
    
        // function 
        QTreeWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setStatusTip");
          return this.__PROXY__.setStatusTip(...args);
        };
    
        // function 
        QTreeWidget.prototype.statusTip = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.statusTip");
          return this.__PROXY__.statusTip(...args);
        };
    
        // function 
        QTreeWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setWhatsThis");
          return this.__PROXY__.setWhatsThis(...args);
        };
    
        // function 
        QTreeWidget.prototype.whatsThis = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.whatsThis");
          return this.__PROXY__.whatsThis(...args);
        };
    
        // function 
        QTreeWidget.prototype.accessibleName = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.accessibleName");
          return this.__PROXY__.accessibleName(...args);
        };
    
        // function 
        QTreeWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setAccessibleName");
          return this.__PROXY__.setAccessibleName(...args);
        };
    
        // function 
        QTreeWidget.prototype.accessibleDescription = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.accessibleDescription");
          return this.__PROXY__.accessibleDescription(...args);
        };
    
        // function 
        QTreeWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setAccessibleDescription");
          return this.__PROXY__.setAccessibleDescription(...args);
        };
    
        // function 
        QTreeWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setLayoutDirection");
          return this.__PROXY__.setLayoutDirection(...args);
        };
    
        // function 
        QTreeWidget.prototype.layoutDirection = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.layoutDirection");
          return this.__PROXY__.layoutDirection(...args);
        };
    
        // function 
        QTreeWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.unsetLayoutDirection");
          return this.__PROXY__.unsetLayoutDirection(...args);
        };
    
        // function 
        QTreeWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setLocale");
          return this.__PROXY__.setLocale(...args);
        };
    
        // function 
        QTreeWidget.prototype.locale = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.locale");
          return this.__PROXY__.locale(...args);
        };
    
        // function 
        QTreeWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.unsetLocale");
          return this.__PROXY__.unsetLocale(...args);
        };
    
        // function 
        QTreeWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isRightToLeft");
          return this.__PROXY__.isRightToLeft(...args);
        };
    
        // function 
        QTreeWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isLeftToRight");
          return this.__PROXY__.isLeftToRight(...args);
        };
    
        // function 
        QTreeWidget.prototype.isActiveWindow = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isActiveWindow");
          return this.__PROXY__.isActiveWindow(...args);
        };
    
        // function 
        QTreeWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.activateWindow");
          return this.__PROXY__.activateWindow(...args);
        };
    
        // function 
        QTreeWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.clearFocus");
          return this.__PROXY__.clearFocus(...args);
        };
    
        // function 
        QTreeWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setFocus");
          return this.__PROXY__.setFocus(...args);
        };
    
        // function 
        QTreeWidget.prototype.focusPolicy = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.focusPolicy");
          return this.__PROXY__.focusPolicy(...args);
        };
    
        // function 
        QTreeWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setFocusPolicy");
          return this.__PROXY__.setFocusPolicy(...args);
        };
    
        // function 
        QTreeWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.hasFocus");
          return this.__PROXY__.hasFocus(...args);
        };
    
        // function 
        QTreeWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setFocusProxy");
          return this.__PROXY__.setFocusProxy(...args);
        };
    
        // function 
        QTreeWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.focusProxy");
          return this.__PROXY__.focusProxy(...args);
        };
    
        // function 
        QTreeWidget.prototype.contextMenuPolicy = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.contextMenuPolicy");
          return this.__PROXY__.contextMenuPolicy(...args);
        };
    
        // function 
        QTreeWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setContextMenuPolicy");
          return this.__PROXY__.setContextMenuPolicy(...args);
        };
    
        // function 
        QTreeWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.grabMouse");
          return this.__PROXY__.grabMouse(...args);
        };
    
        // function 
        QTreeWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.releaseMouse");
          return this.__PROXY__.releaseMouse(...args);
        };
    
        // function 
        QTreeWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.grabKeyboard");
          return this.__PROXY__.grabKeyboard(...args);
        };
    
        // function 
        QTreeWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.releaseKeyboard");
          return this.__PROXY__.releaseKeyboard(...args);
        };
    
        // function 
        QTreeWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.grabShortcut");
          return this.__PROXY__.grabShortcut(...args);
        };
    
        // function 
        QTreeWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.releaseShortcut");
          return this.__PROXY__.releaseShortcut(...args);
        };
    
        // function 
        QTreeWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setShortcutEnabled");
          return this.__PROXY__.setShortcutEnabled(...args);
        };
    
        // function 
        QTreeWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setShortcutAutoRepeat");
          return this.__PROXY__.setShortcutAutoRepeat(...args);
        };
    
        // function 
        QTreeWidget.prototype.updatesEnabled = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.updatesEnabled");
          return this.__PROXY__.updatesEnabled(...args);
        };
    
        // function 
        QTreeWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        QTreeWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.repaint");
          return this.__PROXY__.repaint(...args);
        };
    
        // function 
        QTreeWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setVisible");
          return this.__PROXY__.setVisible(...args);
        };
    
        // function 
        QTreeWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setHidden");
          return this.__PROXY__.setHidden(...args);
        };
    
        // function 
        QTreeWidget.prototype.show = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.show");
          return this.__PROXY__.show(...args);
        };
    
        // function 
        QTreeWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.hide");
          return this.__PROXY__.hide(...args);
        };
    
        // function 
        QTreeWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.showMinimized");
          return this.__PROXY__.showMinimized(...args);
        };
    
        // function 
        QTreeWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.showMaximized");
          return this.__PROXY__.showMaximized(...args);
        };
    
        // function 
        QTreeWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.showFullScreen");
          return this.__PROXY__.showFullScreen(...args);
        };
    
        // function 
        QTreeWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.showNormal");
          return this.__PROXY__.showNormal(...args);
        };
    
        // function 
        QTreeWidget.prototype.close = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.close");
          return this.__PROXY__.close(...args);
        };
    
        // function 
        QTreeWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.raise");
          return this.__PROXY__.raise(...args);
        };
    
        // function 
        QTreeWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.lower");
          return this.__PROXY__.lower(...args);
        };
    
        // function 
        QTreeWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.stackUnder");
          return this.__PROXY__.stackUnder(...args);
        };
    
        // function 
        QTreeWidget.prototype.move = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        QTreeWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.resize");
          return this.__PROXY__.resize(...args);
        };
    
        // function 
        QTreeWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setGeometry");
          return this.__PROXY__.setGeometry(...args);
        };
    
        // function 
        QTreeWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.saveGeometry");
          return this.__PROXY__.saveGeometry(...args);
        };
    
        // function 
        QTreeWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.restoreGeometry");
          return this.__PROXY__.restoreGeometry(...args);
        };
    
        // function 
        QTreeWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.adjustSize");
          return this.__PROXY__.adjustSize(...args);
        };
    
        // function 
        QTreeWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        QTreeWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isVisibleTo");
          return this.__PROXY__.isVisibleTo(...args);
        };
    
        // function 
        QTreeWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isHidden");
          return this.__PROXY__.isHidden(...args);
        };
    
        // function 
        QTreeWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isMinimized");
          return this.__PROXY__.isMinimized(...args);
        };
    
        // function 
        QTreeWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isMaximized");
          return this.__PROXY__.isMaximized(...args);
        };
    
        // function 
        QTreeWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isFullScreen");
          return this.__PROXY__.isFullScreen(...args);
        };
    
        // function 
        QTreeWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.windowState");
          return this.__PROXY__.windowState(...args);
        };
    
        // function 
        QTreeWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setWindowState");
          return this.__PROXY__.setWindowState(...args);
        };
    
        // function 
        QTreeWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.overrideWindowState");
          return this.__PROXY__.overrideWindowState(...args);
        };
    
        // function 
        QTreeWidget.prototype.sizePolicy = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.sizePolicy");
          return this.__PROXY__.sizePolicy(...args);
        };
    
        // function 
        QTreeWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setSizePolicy");
          return this.__PROXY__.setSizePolicy(...args);
        };
    
        // function 
        QTreeWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.heightForWidth");
          return this.__PROXY__.heightForWidth(...args);
        };
    
        // function 
        QTreeWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.hasHeightForWidth");
          return this.__PROXY__.hasHeightForWidth(...args);
        };
    
        // function 
        QTreeWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.visibleRegion");
          return this.__PROXY__.visibleRegion(...args);
        };
    
        // function 
        QTreeWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setContentsMargins");
          return this.__PROXY__.setContentsMargins(...args);
        };
    
        // function 
        QTreeWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.contentsMargins");
          return this.__PROXY__.contentsMargins(...args);
        };
    
        // function 
        QTreeWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.contentsRect");
          return this.__PROXY__.contentsRect(...args);
        };
    
        // function 
        QTreeWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.layout");
          return this.__PROXY__.layout(...args);
        };
    
        // function 
        QTreeWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setLayout");
          return this.__PROXY__.setLayout(...args);
        };
    
        // function 
        QTreeWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.updateGeometry");
          return this.__PROXY__.updateGeometry(...args);
        };
    
        // function 
        QTreeWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setParent");
          return this.__PROXY__.setParent(...args);
        };
    
        // function 
        QTreeWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.scroll");
          return this.__PROXY__.scroll(...args);
        };
    
        // function 
        QTreeWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.focusWidget");
          return this.__PROXY__.focusWidget(...args);
        };
    
        // function 
        QTreeWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.nextInFocusChain");
          return this.__PROXY__.nextInFocusChain(...args);
        };
    
        // function 
        QTreeWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.previousInFocusChain");
          return this.__PROXY__.previousInFocusChain(...args);
        };
    
        // function 
        QTreeWidget.prototype.acceptDrops = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.acceptDrops");
          return this.__PROXY__.acceptDrops(...args);
        };
    
        // function 
        QTreeWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setAcceptDrops");
          return this.__PROXY__.setAcceptDrops(...args);
        };
    
        // function 
        QTreeWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.addAction");
          return this.__PROXY__.addAction(...args);
        };
    
        // function 
        QTreeWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.addActions");
          return this.__PROXY__.addActions(...args);
        };
    
        // function 
        QTreeWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.insertActions");
          return this.__PROXY__.insertActions(...args);
        };
    
        // function 
        QTreeWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.insertAction");
          return this.__PROXY__.insertAction(...args);
        };
    
        // function 
        QTreeWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.removeAction");
          return this.__PROXY__.removeAction(...args);
        };
    
        // function 
        QTreeWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.actions");
          return this.__PROXY__.actions(...args);
        };
    
        // function 
        QTreeWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.parentWidget");
          return this.__PROXY__.parentWidget(...args);
        };
    
        // function 
        QTreeWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setWindowFlags");
          return this.__PROXY__.setWindowFlags(...args);
        };
    
        // function 
        QTreeWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.windowFlags");
          return this.__PROXY__.windowFlags(...args);
        };
    
        // function 
        QTreeWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setWindowFlag");
          return this.__PROXY__.setWindowFlag(...args);
        };
    
        // function 
        QTreeWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.overrideWindowFlags");
          return this.__PROXY__.overrideWindowFlags(...args);
        };
    
        // function 
        QTreeWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.windowType");
          return this.__PROXY__.windowType(...args);
        };
    
        // function 
        QTreeWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.childAt");
          return this.__PROXY__.childAt(...args);
        };
    
        // function 
        QTreeWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setAttribute");
          return this.__PROXY__.setAttribute(...args);
        };
    
        // function 
        QTreeWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.testAttribute");
          return this.__PROXY__.testAttribute(...args);
        };
    
        // function 
        QTreeWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.ensurePolished");
          return this.__PROXY__.ensurePolished(...args);
        };
    
        // function 
        QTreeWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isAncestorOf");
          return this.__PROXY__.isAncestorOf(...args);
        };
    
        // function 
        QTreeWidget.prototype.autoFillBackground = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.autoFillBackground");
          return this.__PROXY__.autoFillBackground(...args);
        };
    
        // function 
        QTreeWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setAutoFillBackground");
          return this.__PROXY__.setAutoFillBackground(...args);
        };
    
        // function 
        QTreeWidget.prototype.customContextMenuRequested = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.customContextMenuRequested");
          return this.__PROXY__.customContextMenuRequested(...args);
        };
    
        // function 
        QTreeWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.wheelEvent");
          return this.__PROXY__.wheelEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.keyReleaseEvent");
          return this.__PROXY__.keyReleaseEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.focusInEvent");
          return this.__PROXY__.focusInEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.focusOutEvent");
          return this.__PROXY__.focusOutEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.enterEvent");
          return this.__PROXY__.enterEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.leaveEvent");
          return this.__PROXY__.leaveEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.moveEvent");
          return this.__PROXY__.moveEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.closeEvent");
          return this.__PROXY__.closeEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.tabletEvent");
          return this.__PROXY__.tabletEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.dragEnterEvent");
          return this.__PROXY__.dragEnterEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.dragLeaveEvent");
          return this.__PROXY__.dragLeaveEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.showEvent");
          return this.__PROXY__.showEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.hideEvent");
          return this.__PROXY__.hideEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.nativeEvent");
          return this.__PROXY__.nativeEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.metric");
          return this.__PROXY__.metric(...args);
        };
    
        // function 
        QTreeWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.initPainter");
          return this.__PROXY__.initPainter(...args);
        };
    
        // function 
        QTreeWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.redirected");
          return this.__PROXY__.redirected(...args);
        };
    
        // function 
        QTreeWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.sharedPainter");
          return this.__PROXY__.sharedPainter(...args);
        };
    
        // function 
        QTreeWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.inputMethodEvent");
          return this.__PROXY__.inputMethodEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.inputMethodHints = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.inputMethodHints");
          return this.__PROXY__.inputMethodHints(...args);
        };
    
        // function 
        QTreeWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setInputMethodHints");
          return this.__PROXY__.setInputMethodHints(...args);
        };
    
        // function 
        QTreeWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.updateMicroFocus");
          return this.__PROXY__.updateMicroFocus(...args);
        };
    
        // function 
        QTreeWidget.prototype.create = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.create");
          return this.__PROXY__.create(...args);
        };
    
        // function 
        QTreeWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.destroy");
          return this.__PROXY__.destroy(...args);
        };
    
        // function 
        QTreeWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.focusNextPrevChild");
          return this.__PROXY__.focusNextPrevChild(...args);
        };
    
        // function 
        QTreeWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.focusNextChild");
          return this.__PROXY__.focusNextChild(...args);
        };
    
        // function 
        QTreeWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.focusPreviousChild");
          return this.__PROXY__.focusPreviousChild(...args);
        };
    
        // function 
        QTreeWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setBackingStore");
          return this.__PROXY__.setBackingStore(...args);
        };
    
        // function 
        QTreeWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.testAttribute_helper");
          return this.__PROXY__.testAttribute_helper(...args);
        };
    
        // function 
        QTreeWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.takeLayout");
          return this.__PROXY__.takeLayout(...args);
        };
    
        // function 
        QTreeWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.qt_mac_is_metal");
          return this.__PROXY__.qt_mac_is_metal(...args);
        };
    
        // function 
        QTreeWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.qt_qwidget_data");
          return this.__PROXY__.qt_qwidget_data(...args);
        };
    
        // function 
        QTreeWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.qt_widget_private");
          return this.__PROXY__.qt_widget_private(...args);
        };
    
        // function 
        QTreeWidget.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.frameStyle");
          return this.__PROXY__.frameStyle(...args);
        };
    
        // function 
        QTreeWidget.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setFrameStyle");
          return this.__PROXY__.setFrameStyle(...args);
        };
    
        // function 
        QTreeWidget.prototype.frameWidth = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.frameWidth");
          return this.__PROXY__.frameWidth(...args);
        };
    
        // function 
        QTreeWidget.prototype.frameShape = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.frameShape");
          return this.__PROXY__.frameShape(...args);
        };
    
        // function 
        QTreeWidget.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setFrameShape");
          return this.__PROXY__.setFrameShape(...args);
        };
    
        // function 
        QTreeWidget.prototype.frameShadow = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.frameShadow");
          return this.__PROXY__.frameShadow(...args);
        };
    
        // function 
        QTreeWidget.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setFrameShadow");
          return this.__PROXY__.setFrameShadow(...args);
        };
    
        // function 
        QTreeWidget.prototype.lineWidth = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.lineWidth");
          return this.__PROXY__.lineWidth(...args);
        };
    
        // function 
        QTreeWidget.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setLineWidth");
          return this.__PROXY__.setLineWidth(...args);
        };
    
        // function 
        QTreeWidget.prototype.midLineWidth = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.midLineWidth");
          return this.__PROXY__.midLineWidth(...args);
        };
    
        // function 
        QTreeWidget.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setMidLineWidth");
          return this.__PROXY__.setMidLineWidth(...args);
        };
    
        // function 
        QTreeWidget.prototype.frameRect = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.frameRect");
          return this.__PROXY__.frameRect(...args);
        };
    
        // function 
        QTreeWidget.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setFrameRect");
          return this.__PROXY__.setFrameRect(...args);
        };
    
        // function 
        QTreeWidget.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.drawFrame");
          return this.__PROXY__.drawFrame(...args);
        };
    
        // function 
        QTreeWidget.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.initStyleOption");
          return this.__PROXY__.initStyleOption(...args);
        };
    
        // function 
        QTreeWidget.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.verticalScrollBarPolicy");
          return this.__PROXY__.verticalScrollBarPolicy(...args);
        };
    
        // function 
        QTreeWidget.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setVerticalScrollBarPolicy");
          return this.__PROXY__.setVerticalScrollBarPolicy(...args);
        };
    
        // function 
        QTreeWidget.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.verticalScrollBar");
          return this.__PROXY__.verticalScrollBar(...args);
        };
    
        // function 
        QTreeWidget.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setVerticalScrollBar");
          return this.__PROXY__.setVerticalScrollBar(...args);
        };
    
        // function 
        QTreeWidget.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.horizontalScrollBarPolicy");
          return this.__PROXY__.horizontalScrollBarPolicy(...args);
        };
    
        // function 
        QTreeWidget.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setHorizontalScrollBarPolicy");
          return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
        };
    
        // function 
        QTreeWidget.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.horizontalScrollBar");
          return this.__PROXY__.horizontalScrollBar(...args);
        };
    
        // function 
        QTreeWidget.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setHorizontalScrollBar");
          return this.__PROXY__.setHorizontalScrollBar(...args);
        };
    
        // function 
        QTreeWidget.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.cornerWidget");
          return this.__PROXY__.cornerWidget(...args);
        };
    
        // function 
        QTreeWidget.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setCornerWidget");
          return this.__PROXY__.setCornerWidget(...args);
        };
    
        // function 
        QTreeWidget.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.addScrollBarWidget");
          return this.__PROXY__.addScrollBarWidget(...args);
        };
    
        // function 
        QTreeWidget.prototype.viewport = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.viewport");
          return this.__PROXY__.viewport(...args);
        };
    
        // function 
        QTreeWidget.prototype.setViewport = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setViewport");
          return this.__PROXY__.setViewport(...args);
        };
    
        // function 
        QTreeWidget.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.maximumViewportSize");
          return this.__PROXY__.maximumViewportSize(...args);
        };
    
        // function 
        QTreeWidget.prototype.minimumSizeHint = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.minimumSizeHint");
          return this.__PROXY__.minimumSizeHint(...args);
        };
    
        // function 
        QTreeWidget.prototype.sizeHint = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.sizeHint");
          return this.__PROXY__.sizeHint(...args);
        };
    
        // function 
        QTreeWidget.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setupViewport");
          return this.__PROXY__.setupViewport(...args);
        };
    
        // function 
        QTreeWidget.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.sizeAdjustPolicy");
          return this.__PROXY__.sizeAdjustPolicy(...args);
        };
    
        // function 
        QTreeWidget.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setSizeAdjustPolicy");
          return this.__PROXY__.setSizeAdjustPolicy(...args);
        };
    
        // function 
        QTreeWidget.prototype.model = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.model");
          return this.__PROXY__.model(...args);
        };
    
        // function 
        QTreeWidget.prototype.setSelectionModel = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setSelectionModel");
          return this.__PROXY__.setSelectionModel(...args);
        };
    
        // function 
        QTreeWidget.prototype.selectionModel = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.selectionModel");
          return this.__PROXY__.selectionModel(...args);
        };
    
        // function 
        QTreeWidget.prototype.setItemDelegate = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setItemDelegate");
          return this.__PROXY__.setItemDelegate(...args);
        };
    
        // function 
        QTreeWidget.prototype.setSelectionMode = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setSelectionMode");
          return this.__PROXY__.setSelectionMode(...args);
        };
    
        // function 
        QTreeWidget.prototype.selectionMode = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.selectionMode");
          return this.__PROXY__.selectionMode(...args);
        };
    
        // function 
        QTreeWidget.prototype.setSelectionBehavior = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setSelectionBehavior");
          return this.__PROXY__.setSelectionBehavior(...args);
        };
    
        // function 
        QTreeWidget.prototype.selectionBehavior = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.selectionBehavior");
          return this.__PROXY__.selectionBehavior(...args);
        };
    
        // function 
        QTreeWidget.prototype.currentIndex = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.currentIndex");
          return this.__PROXY__.currentIndex(...args);
        };
    
        // function 
        QTreeWidget.prototype.rootIndex = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.rootIndex");
          return this.__PROXY__.rootIndex(...args);
        };
    
        // function 
        QTreeWidget.prototype.setEditTriggers = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setEditTriggers");
          return this.__PROXY__.setEditTriggers(...args);
        };
    
        // function 
        QTreeWidget.prototype.editTriggers = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.editTriggers");
          return this.__PROXY__.editTriggers(...args);
        };
    
        // function 
        QTreeWidget.prototype.setVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setVerticalScrollMode");
          return this.__PROXY__.setVerticalScrollMode(...args);
        };
    
        // function 
        QTreeWidget.prototype.verticalScrollMode = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.verticalScrollMode");
          return this.__PROXY__.verticalScrollMode(...args);
        };
    
        // function 
        QTreeWidget.prototype.resetVerticalScrollMode = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.resetVerticalScrollMode");
          return this.__PROXY__.resetVerticalScrollMode(...args);
        };
    
        // function 
        QTreeWidget.prototype.setHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setHorizontalScrollMode");
          return this.__PROXY__.setHorizontalScrollMode(...args);
        };
    
        // function 
        QTreeWidget.prototype.horizontalScrollMode = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.horizontalScrollMode");
          return this.__PROXY__.horizontalScrollMode(...args);
        };
    
        // function 
        QTreeWidget.prototype.resetHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.resetHorizontalScrollMode");
          return this.__PROXY__.resetHorizontalScrollMode(...args);
        };
    
        // function 
        QTreeWidget.prototype.setAutoScroll = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setAutoScroll");
          return this.__PROXY__.setAutoScroll(...args);
        };
    
        // function 
        QTreeWidget.prototype.hasAutoScroll = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.hasAutoScroll");
          return this.__PROXY__.hasAutoScroll(...args);
        };
    
        // function 
        QTreeWidget.prototype.setAutoScrollMargin = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setAutoScrollMargin");
          return this.__PROXY__.setAutoScrollMargin(...args);
        };
    
        // function 
        QTreeWidget.prototype.autoScrollMargin = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.autoScrollMargin");
          return this.__PROXY__.autoScrollMargin(...args);
        };
    
        // function 
        QTreeWidget.prototype.setTabKeyNavigation = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setTabKeyNavigation");
          return this.__PROXY__.setTabKeyNavigation(...args);
        };
    
        // function 
        QTreeWidget.prototype.tabKeyNavigation = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.tabKeyNavigation");
          return this.__PROXY__.tabKeyNavigation(...args);
        };
    
        // function 
        QTreeWidget.prototype.setDropIndicatorShown = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setDropIndicatorShown");
          return this.__PROXY__.setDropIndicatorShown(...args);
        };
    
        // function 
        QTreeWidget.prototype.showDropIndicator = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.showDropIndicator");
          return this.__PROXY__.showDropIndicator(...args);
        };
    
        // function 
        QTreeWidget.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setDragEnabled");
          return this.__PROXY__.setDragEnabled(...args);
        };
    
        // function 
        QTreeWidget.prototype.dragEnabled = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.dragEnabled");
          return this.__PROXY__.dragEnabled(...args);
        };
    
        // function 
        QTreeWidget.prototype.setDragDropOverwriteMode = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setDragDropOverwriteMode");
          return this.__PROXY__.setDragDropOverwriteMode(...args);
        };
    
        // function 
        QTreeWidget.prototype.dragDropOverwriteMode = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.dragDropOverwriteMode");
          return this.__PROXY__.dragDropOverwriteMode(...args);
        };
    
        // function 
        QTreeWidget.prototype.setDragDropMode = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setDragDropMode");
          return this.__PROXY__.setDragDropMode(...args);
        };
    
        // function 
        QTreeWidget.prototype.dragDropMode = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.dragDropMode");
          return this.__PROXY__.dragDropMode(...args);
        };
    
        // function 
        QTreeWidget.prototype.setDefaultDropAction = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setDefaultDropAction");
          return this.__PROXY__.setDefaultDropAction(...args);
        };
    
        // function 
        QTreeWidget.prototype.defaultDropAction = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.defaultDropAction");
          return this.__PROXY__.defaultDropAction(...args);
        };
    
        // function 
        QTreeWidget.prototype.setAlternatingRowColors = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setAlternatingRowColors");
          return this.__PROXY__.setAlternatingRowColors(...args);
        };
    
        // function 
        QTreeWidget.prototype.alternatingRowColors = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.alternatingRowColors");
          return this.__PROXY__.alternatingRowColors(...args);
        };
    
        // function 
        QTreeWidget.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setIconSize");
          return this.__PROXY__.setIconSize(...args);
        };
    
        // function 
        QTreeWidget.prototype.iconSize = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.iconSize");
          return this.__PROXY__.iconSize(...args);
        };
    
        // function 
        QTreeWidget.prototype.setTextElideMode = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setTextElideMode");
          return this.__PROXY__.setTextElideMode(...args);
        };
    
        // function 
        QTreeWidget.prototype.textElideMode = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.textElideMode");
          return this.__PROXY__.textElideMode(...args);
        };
    
        // function 
        QTreeWidget.prototype.setIndexWidget = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setIndexWidget");
          return this.__PROXY__.setIndexWidget(...args);
        };
    
        // function 
        QTreeWidget.prototype.indexWidget = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.indexWidget");
          return this.__PROXY__.indexWidget(...args);
        };
    
        // function 
        QTreeWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.inputMethodQuery");
          return this.__PROXY__.inputMethodQuery(...args);
        };
    
        // function 
        QTreeWidget.prototype.edit = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.edit");
          return this.__PROXY__.edit(...args);
        };
    
        // function 
        QTreeWidget.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.clearSelection");
          return this.__PROXY__.clearSelection(...args);
        };
    
        // function 
        QTreeWidget.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setCurrentIndex");
          return this.__PROXY__.setCurrentIndex(...args);
        };
    
        // function 
        QTreeWidget.prototype.scrollToTop = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.scrollToTop");
          return this.__PROXY__.scrollToTop(...args);
        };
    
        // function 
        QTreeWidget.prototype.scrollToBottom = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.scrollToBottom");
          return this.__PROXY__.scrollToBottom(...args);
        };
    
        // function 
        QTreeWidget.prototype.update = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        QTreeWidget.prototype.doubleClicked = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.doubleClicked");
          return this.__PROXY__.doubleClicked(...args);
        };
    
        // function 
        QTreeWidget.prototype.setRootIndex = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setRootIndex");
          return this.__PROXY__.setRootIndex(...args);
        };
    
        // function 
        QTreeWidget.prototype.header = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.header");
          return this.__PROXY__.header(...args);
        };
    
        // function 
        QTreeWidget.prototype.setHeader = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setHeader");
          return this.__PROXY__.setHeader(...args);
        };
    
        // function 
        QTreeWidget.prototype.autoExpandDelay = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.autoExpandDelay");
          return this.__PROXY__.autoExpandDelay(...args);
        };
    
        // function 
        QTreeWidget.prototype.setAutoExpandDelay = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setAutoExpandDelay");
          return this.__PROXY__.setAutoExpandDelay(...args);
        };
    
        // function 
        QTreeWidget.prototype.indentation = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.indentation");
          return this.__PROXY__.indentation(...args);
        };
    
        // function 
        QTreeWidget.prototype.setIndentation = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setIndentation");
          return this.__PROXY__.setIndentation(...args);
        };
    
        // function 
        QTreeWidget.prototype.resetIndentation = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.resetIndentation");
          return this.__PROXY__.resetIndentation(...args);
        };
    
        // function 
        QTreeWidget.prototype.rootIsDecorated = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.rootIsDecorated");
          return this.__PROXY__.rootIsDecorated(...args);
        };
    
        // function 
        QTreeWidget.prototype.setRootIsDecorated = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setRootIsDecorated");
          return this.__PROXY__.setRootIsDecorated(...args);
        };
    
        // function 
        QTreeWidget.prototype.uniformRowHeights = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.uniformRowHeights");
          return this.__PROXY__.uniformRowHeights(...args);
        };
    
        // function 
        QTreeWidget.prototype.setUniformRowHeights = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setUniformRowHeights");
          return this.__PROXY__.setUniformRowHeights(...args);
        };
    
        // function 
        QTreeWidget.prototype.itemsExpandable = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.itemsExpandable");
          return this.__PROXY__.itemsExpandable(...args);
        };
    
        // function 
        QTreeWidget.prototype.setItemsExpandable = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setItemsExpandable");
          return this.__PROXY__.setItemsExpandable(...args);
        };
    
        // function 
        QTreeWidget.prototype.expandsOnDoubleClick = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.expandsOnDoubleClick");
          return this.__PROXY__.expandsOnDoubleClick(...args);
        };
    
        // function 
        QTreeWidget.prototype.setExpandsOnDoubleClick = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setExpandsOnDoubleClick");
          return this.__PROXY__.setExpandsOnDoubleClick(...args);
        };
    
        // function 
        QTreeWidget.prototype.columnViewportPosition = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.columnViewportPosition");
          return this.__PROXY__.columnViewportPosition(...args);
        };
    
        // function 
        QTreeWidget.prototype.columnWidth = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.columnWidth");
          return this.__PROXY__.columnWidth(...args);
        };
    
        // function 
        QTreeWidget.prototype.setColumnWidth = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setColumnWidth");
          return this.__PROXY__.setColumnWidth(...args);
        };
    
        // function 
        QTreeWidget.prototype.columnAt = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.columnAt");
          return this.__PROXY__.columnAt(...args);
        };
    
        // function 
        QTreeWidget.prototype.isColumnHidden = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isColumnHidden");
          return this.__PROXY__.isColumnHidden(...args);
        };
    
        // function 
        QTreeWidget.prototype.setColumnHidden = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setColumnHidden");
          return this.__PROXY__.setColumnHidden(...args);
        };
    
        // function 
        QTreeWidget.prototype.isHeaderHidden = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isHeaderHidden");
          return this.__PROXY__.isHeaderHidden(...args);
        };
    
        // function 
        QTreeWidget.prototype.setHeaderHidden = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setHeaderHidden");
          return this.__PROXY__.setHeaderHidden(...args);
        };
    
        // function 
        QTreeWidget.prototype.isRowHidden = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isRowHidden");
          return this.__PROXY__.isRowHidden(...args);
        };
    
        // function 
        QTreeWidget.prototype.setRowHidden = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setRowHidden");
          return this.__PROXY__.setRowHidden(...args);
        };
    
        // function 
        QTreeWidget.prototype.isFirstColumnSpanned = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isFirstColumnSpanned");
          return this.__PROXY__.isFirstColumnSpanned(...args);
        };
    
        // function 
        QTreeWidget.prototype.setFirstColumnSpanned = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setFirstColumnSpanned");
          return this.__PROXY__.setFirstColumnSpanned(...args);
        };
    
        // function 
        QTreeWidget.prototype.isExpanded = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isExpanded");
          return this.__PROXY__.isExpanded(...args);
        };
    
        // function 
        QTreeWidget.prototype.setExpanded = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setExpanded");
          return this.__PROXY__.setExpanded(...args);
        };
    
        // function 
        QTreeWidget.prototype.setSortingEnabled = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setSortingEnabled");
          return this.__PROXY__.setSortingEnabled(...args);
        };
    
        // function 
        QTreeWidget.prototype.isSortingEnabled = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isSortingEnabled");
          return this.__PROXY__.isSortingEnabled(...args);
        };
    
        // function 
        QTreeWidget.prototype.setAnimated = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setAnimated");
          return this.__PROXY__.setAnimated(...args);
        };
    
        // function 
        QTreeWidget.prototype.isAnimated = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isAnimated");
          return this.__PROXY__.isAnimated(...args);
        };
    
        // function 
        QTreeWidget.prototype.setAllColumnsShowFocus = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setAllColumnsShowFocus");
          return this.__PROXY__.setAllColumnsShowFocus(...args);
        };
    
        // function 
        QTreeWidget.prototype.allColumnsShowFocus = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.allColumnsShowFocus");
          return this.__PROXY__.allColumnsShowFocus(...args);
        };
    
        // function 
        QTreeWidget.prototype.setWordWrap = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setWordWrap");
          return this.__PROXY__.setWordWrap(...args);
        };
    
        // function 
        QTreeWidget.prototype.wordWrap = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.wordWrap");
          return this.__PROXY__.wordWrap(...args);
        };
    
        // function 
        QTreeWidget.prototype.setTreePosition = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setTreePosition");
          return this.__PROXY__.setTreePosition(...args);
        };
    
        // function 
        QTreeWidget.prototype.treePosition = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.treePosition");
          return this.__PROXY__.treePosition(...args);
        };
    
        // function 
        QTreeWidget.prototype.keyboardSearch = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.keyboardSearch");
          return this.__PROXY__.keyboardSearch(...args);
        };
    
        // function 
        QTreeWidget.prototype.visualRect = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.visualRect");
          return this.__PROXY__.visualRect(...args);
        };
    
        // function 
        QTreeWidget.prototype.scrollTo = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.scrollTo");
          return this.__PROXY__.scrollTo(...args);
        };
    
        // function 
        QTreeWidget.prototype.indexAt = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.indexAt");
          return this.__PROXY__.indexAt(...args);
        };
    
        // function 
        QTreeWidget.prototype.indexAbove = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.indexAbove");
          return this.__PROXY__.indexAbove(...args);
        };
    
        // function 
        QTreeWidget.prototype.indexBelow = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.indexBelow");
          return this.__PROXY__.indexBelow(...args);
        };
    
        // function 
        QTreeWidget.prototype.doItemsLayout = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.doItemsLayout");
          return this.__PROXY__.doItemsLayout(...args);
        };
    
        // function 
        QTreeWidget.prototype.reset = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.reset");
          return this.__PROXY__.reset(...args);
        };
    
        // function 
        QTreeWidget.prototype.dataChanged = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.dataChanged");
          return this.__PROXY__.dataChanged(...args);
        };
    
        // function 
        QTreeWidget.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.selectAll");
          return this.__PROXY__.selectAll(...args);
        };
    
        // function 
        QTreeWidget.prototype.expanded = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.expanded");
          return this.__PROXY__.expanded(...args);
        };
    
        // function 
        QTreeWidget.prototype.collapsed = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.collapsed");
          return this.__PROXY__.collapsed(...args);
        };
    
        // function 
        QTreeWidget.prototype.hideColumn = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.hideColumn");
          return this.__PROXY__.hideColumn(...args);
        };
    
        // function 
        QTreeWidget.prototype.showColumn = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.showColumn");
          return this.__PROXY__.showColumn(...args);
        };
    
        // function 
        QTreeWidget.prototype.expand = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.expand");
          return this.__PROXY__.expand(...args);
        };
    
        // function 
        QTreeWidget.prototype.collapse = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.collapse");
          return this.__PROXY__.collapse(...args);
        };
    
        // function 
        QTreeWidget.prototype.resizeColumnToContents = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.resizeColumnToContents");
          return this.__PROXY__.resizeColumnToContents(...args);
        };
    
        // function 
        QTreeWidget.prototype.sortByColumn = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.sortByColumn");
          return this.__PROXY__.sortByColumn(...args);
        };
    
        // function 
        QTreeWidget.prototype.expandAll = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.expandAll");
          return this.__PROXY__.expandAll(...args);
        };
    
        // function 
        QTreeWidget.prototype.expandRecursively = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.expandRecursively");
          return this.__PROXY__.expandRecursively(...args);
        };
    
        // function 
        QTreeWidget.prototype.collapseAll = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.collapseAll");
          return this.__PROXY__.collapseAll(...args);
        };
    
        // function 
        QTreeWidget.prototype.expandToDepth = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.expandToDepth");
          return this.__PROXY__.expandToDepth(...args);
        };
    
        // function 
        QTreeWidget.prototype.columnResized = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.columnResized");
          return this.__PROXY__.columnResized(...args);
        };
    
        // function 
        QTreeWidget.prototype.columnCountChanged = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.columnCountChanged");
          return this.__PROXY__.columnCountChanged(...args);
        };
    
        // function 
        QTreeWidget.prototype.columnMoved = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.columnMoved");
          return this.__PROXY__.columnMoved(...args);
        };
    
        // function 
        QTreeWidget.prototype.reexpand = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.reexpand");
          return this.__PROXY__.reexpand(...args);
        };
    
        // function 
        QTreeWidget.prototype.rowsRemoved = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.rowsRemoved");
          return this.__PROXY__.rowsRemoved(...args);
        };
    
        // function 
        QTreeWidget.prototype.verticalScrollbarValueChanged = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.verticalScrollbarValueChanged");
          return this.__PROXY__.verticalScrollbarValueChanged(...args);
        };
    
        // function 
        QTreeWidget.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.scrollContentsBy");
          return this.__PROXY__.scrollContentsBy(...args);
        };
    
        // function 
        QTreeWidget.prototype.rowsInserted = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.rowsInserted");
          return this.__PROXY__.rowsInserted(...args);
        };
    
        // function 
        QTreeWidget.prototype.rowsAboutToBeRemoved = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.rowsAboutToBeRemoved");
          return this.__PROXY__.rowsAboutToBeRemoved(...args);
        };
    
        // function 
        QTreeWidget.prototype.moveCursor = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.moveCursor");
          return this.__PROXY__.moveCursor(...args);
        };
    
        // function 
        QTreeWidget.prototype.horizontalOffset = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.horizontalOffset");
          return this.__PROXY__.horizontalOffset(...args);
        };
    
        // function 
        QTreeWidget.prototype.verticalOffset = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.verticalOffset");
          return this.__PROXY__.verticalOffset(...args);
        };
    
        // function 
        QTreeWidget.prototype.setSelection = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setSelection");
          return this.__PROXY__.setSelection(...args);
        };
    
        // function 
        QTreeWidget.prototype.visualRegionForSelection = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.visualRegionForSelection");
          return this.__PROXY__.visualRegionForSelection(...args);
        };
    
        // function 
        QTreeWidget.prototype.selectedIndexes = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.selectedIndexes");
          return this.__PROXY__.selectedIndexes(...args);
        };
    
        // function 
        QTreeWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.changeEvent");
          return this.__PROXY__.changeEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.timerEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.timerEvent");
          return this.__PROXY__.timerEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.drawTree = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.drawTree");
          return this.__PROXY__.drawTree(...args);
        };
    
        // function 
        QTreeWidget.prototype.drawRow = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.drawRow");
          return this.__PROXY__.drawRow(...args);
        };
    
        // function 
        QTreeWidget.prototype.drawBranches = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.drawBranches");
          return this.__PROXY__.drawBranches(...args);
        };
    
        // function 
        QTreeWidget.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.mousePressEvent");
          return this.__PROXY__.mousePressEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.mouseReleaseEvent");
          return this.__PROXY__.mouseReleaseEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.mouseDoubleClickEvent");
          return this.__PROXY__.mouseDoubleClickEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.keyPressEvent");
          return this.__PROXY__.keyPressEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.dragMoveEvent");
          return this.__PROXY__.dragMoveEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.viewportEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.viewportEvent");
          return this.__PROXY__.viewportEvent(...args);
        };
    
        // function 
        QTreeWidget.prototype.updateGeometries = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.updateGeometries");
          return this.__PROXY__.updateGeometries(...args);
        };
    
        // function 
        QTreeWidget.prototype.viewportSizeHint = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.viewportSizeHint");
          return this.__PROXY__.viewportSizeHint(...args);
        };
    
        // function 
        QTreeWidget.prototype.indexRowSizeHint = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.indexRowSizeHint");
          return this.__PROXY__.indexRowSizeHint(...args);
        };
    
        // function 
        QTreeWidget.prototype.rowHeight = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.rowHeight");
          return this.__PROXY__.rowHeight(...args);
        };
    
        // function 
        QTreeWidget.prototype.horizontalScrollbarAction = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.horizontalScrollbarAction");
          return this.__PROXY__.horizontalScrollbarAction(...args);
        };
    
        // function 
        QTreeWidget.prototype.isIndexHidden = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isIndexHidden");
          return this.__PROXY__.isIndexHidden(...args);
        };
    
        // function 
        QTreeWidget.prototype.selectionChanged = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.selectionChanged");
          return this.__PROXY__.selectionChanged(...args);
        };
    
        // function 
        QTreeWidget.prototype.currentChanged = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.currentChanged");
          return this.__PROXY__.currentChanged(...args);
        };
    
        // function 
        QTreeWidget.prototype.visualIndex = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.visualIndex");
          return this.__PROXY__.visualIndex(...args);
        };
    
        // function 
        QTreeWidget.prototype.columnCount = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.columnCount");
          return this.__PROXY__.columnCount(...args);
        };
    
        // function 
        QTreeWidget.prototype.setColumnCount = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setColumnCount");
          return this.__PROXY__.setColumnCount(...args);
        };
    
        // function 
        QTreeWidget.prototype.invisibleRootItem = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.invisibleRootItem");
          return this.__PROXY__.invisibleRootItem(...args);
        };
    
        // function 
        QTreeWidget.prototype.topLevelItem = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.topLevelItem");
          return this.__PROXY__.topLevelItem(...args);
        };
    
        // function 
        QTreeWidget.prototype.topLevelItemCount = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.topLevelItemCount");
          return this.__PROXY__.topLevelItemCount(...args);
        };
    
        // function 
        QTreeWidget.prototype.insertTopLevelItem = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.insertTopLevelItem");
          return this.__PROXY__.insertTopLevelItem(...args);
        };
    
        // function 
        QTreeWidget.prototype.addTopLevelItem = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.addTopLevelItem");
          return this.__PROXY__.addTopLevelItem(...args);
        };
    
        // function 
        QTreeWidget.prototype.takeTopLevelItem = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.takeTopLevelItem");
          return this.__PROXY__.takeTopLevelItem(...args);
        };
    
        // function 
        QTreeWidget.prototype.indexOfTopLevelItem = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.indexOfTopLevelItem");
          return this.__PROXY__.indexOfTopLevelItem(...args);
        };
    
        // function 
        QTreeWidget.prototype.insertTopLevelItems = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.insertTopLevelItems");
          return this.__PROXY__.insertTopLevelItems(...args);
        };
    
        // function 
        QTreeWidget.prototype.addTopLevelItems = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.addTopLevelItems");
          return this.__PROXY__.addTopLevelItems(...args);
        };
    
        // function 
        QTreeWidget.prototype.headerItem = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.headerItem");
          return this.__PROXY__.headerItem(...args);
        };
    
        // function 
        QTreeWidget.prototype.setHeaderItem = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setHeaderItem");
          return this.__PROXY__.setHeaderItem(...args);
        };
    
        // function 
        QTreeWidget.prototype.setHeaderLabels = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setHeaderLabels");
          return this.__PROXY__.setHeaderLabels(...args);
        };
    
        // function 
        QTreeWidget.prototype.setHeaderLabel = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setHeaderLabel");
          return this.__PROXY__.setHeaderLabel(...args);
        };
    
        // function 
        QTreeWidget.prototype.currentItem = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.currentItem");
          return this.__PROXY__.currentItem(...args);
        };
    
        // function 
        QTreeWidget.prototype.currentColumn = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.currentColumn");
          return this.__PROXY__.currentColumn(...args);
        };
    
        // function 
        QTreeWidget.prototype.setCurrentItem = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setCurrentItem");
          return this.__PROXY__.setCurrentItem(...args);
        };
    
        // function 
        QTreeWidget.prototype.itemAt = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.itemAt");
          return this.__PROXY__.itemAt(...args);
        };
    
        // function 
        QTreeWidget.prototype.visualItemRect = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.visualItemRect");
          return this.__PROXY__.visualItemRect(...args);
        };
    
        // function 
        QTreeWidget.prototype.sortColumn = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.sortColumn");
          return this.__PROXY__.sortColumn(...args);
        };
    
        // function 
        QTreeWidget.prototype.sortItems = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.sortItems");
          return this.__PROXY__.sortItems(...args);
        };
    
        // function 
        QTreeWidget.prototype.editItem = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.editItem");
          return this.__PROXY__.editItem(...args);
        };
    
        // function 
        QTreeWidget.prototype.isPersistentEditorOpen = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.isPersistentEditorOpen");
          return this.__PROXY__.isPersistentEditorOpen(...args);
        };
    
        // function 
        QTreeWidget.prototype.itemWidget = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.itemWidget");
          return this.__PROXY__.itemWidget(...args);
        };
    
        // function 
        QTreeWidget.prototype.setItemWidget = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.setItemWidget");
          return this.__PROXY__.setItemWidget(...args);
        };
    
        // function 
        QTreeWidget.prototype.removeItemWidget = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.removeItemWidget");
          return this.__PROXY__.removeItemWidget(...args);
        };
    
        // function 
        QTreeWidget.prototype.selectedItems = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.selectedItems");
          return this.__PROXY__.selectedItems(...args);
        };
    
        // function 
        QTreeWidget.prototype.findItems = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.findItems");
          return this.__PROXY__.findItems(...args);
        };
    
        // function 
        QTreeWidget.prototype.itemAbove = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.itemAbove");
          return this.__PROXY__.itemAbove(...args);
        };
    
        // function 
        QTreeWidget.prototype.itemBelow = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.itemBelow");
          return this.__PROXY__.itemBelow(...args);
        };
    
        // function 
        QTreeWidget.prototype.indexFromItem = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.indexFromItem");
          return this.__PROXY__.indexFromItem(...args);
        };
    
        // function 
        QTreeWidget.prototype.itemFromIndex = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.itemFromIndex");
          return this.__PROXY__.itemFromIndex(...args);
        };
    
        // function 
        QTreeWidget.prototype.scrollToItem = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.scrollToItem");
          return this.__PROXY__.scrollToItem(...args);
        };
    
        // function 
        QTreeWidget.prototype.expandItem = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.expandItem");
          return this.__PROXY__.expandItem(...args);
        };
    
        // function 
        QTreeWidget.prototype.collapseItem = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.collapseItem");
          return this.__PROXY__.collapseItem(...args);
        };
    
        // function 
        QTreeWidget.prototype.clear = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QTreeWidget.prototype.itemPressed = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.itemPressed");
          return this.__PROXY__.itemPressed(...args);
        };
    
        // function 
        QTreeWidget.prototype.itemClicked = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.itemClicked");
          return this.__PROXY__.itemClicked(...args);
        };
    
        // function 
        QTreeWidget.prototype.itemDoubleClicked = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.itemDoubleClicked");
          return this.__PROXY__.itemDoubleClicked(...args);
        };
    
        // function 
        QTreeWidget.prototype.itemActivated = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.itemActivated");
          return this.__PROXY__.itemActivated(...args);
        };
    
        // function 
        QTreeWidget.prototype.itemEntered = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.itemEntered");
          return this.__PROXY__.itemEntered(...args);
        };
    
        // function 
        QTreeWidget.prototype.itemChanged = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.itemChanged");
          return this.__PROXY__.itemChanged(...args);
        };
    
        // function 
        QTreeWidget.prototype.itemExpanded = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.itemExpanded");
          return this.__PROXY__.itemExpanded(...args);
        };
    
        // function 
        QTreeWidget.prototype.itemCollapsed = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.itemCollapsed");
          return this.__PROXY__.itemCollapsed(...args);
        };
    
        // function 
        QTreeWidget.prototype.currentItemChanged = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.currentItemChanged");
          return this.__PROXY__.currentItemChanged(...args);
        };
    
        // function 
        QTreeWidget.prototype.itemSelectionChanged = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.itemSelectionChanged");
          return this.__PROXY__.itemSelectionChanged(...args);
        };
    
        // function 
        QTreeWidget.prototype.event = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.event");
          return this.__PROXY__.event(...args);
        };
    
        // function 
        QTreeWidget.prototype.mimeTypes = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.mimeTypes");
          return this.__PROXY__.mimeTypes(...args);
        };
    
        // function 
        QTreeWidget.prototype.mimeData = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.mimeData");
          return this.__PROXY__.mimeData(...args);
        };
    
        // function 
        QTreeWidget.prototype.dropMimeData = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.dropMimeData");
          return this.__PROXY__.dropMimeData(...args);
        };
    
        // function 
        QTreeWidget.prototype.supportedDropActions = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.supportedDropActions");
          return this.__PROXY__.supportedDropActions(...args);
        };
    
        // function 
        QTreeWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QTreeWidget.prototype.dropEvent");
          return this.__PROXY__.dropEvent(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTreeWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTreeWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTreeWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      