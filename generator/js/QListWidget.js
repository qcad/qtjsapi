
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
              
                  copyProperties(this, wrapper, QListWidget);
                
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
          
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["doubleClicked(QModelIndex)"] = Object.getPrototypeOf(this).doubleClicked;
  
    this["itemPressed(QListWidgetItem*)"] = Object.getPrototypeOf(this).itemPressed;
  
    this["itemClicked(QListWidgetItem*)"] = Object.getPrototypeOf(this).itemClicked;
  
    this["itemDoubleClicked(QListWidgetItem*)"] = Object.getPrototypeOf(this).itemDoubleClicked;
  
    this["itemActivated(QListWidgetItem*)"] = Object.getPrototypeOf(this).itemActivated;
  
    this["itemEntered(QListWidgetItem*)"] = Object.getPrototypeOf(this).itemEntered;
  
    this["itemChanged(QListWidgetItem*)"] = Object.getPrototypeOf(this).itemChanged;
  
    this["currentItemChanged(QListWidgetItem*,QListWidgetItem*)"] = Object.getPrototypeOf(this).currentItemChanged;
  
    this["currentTextChanged(QString)"] = Object.getPrototypeOf(this).currentTextChanged;
  
    this["currentRowChanged(int)"] = Object.getPrototypeOf(this).currentRowChanged;
  
            }
          
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
      

      // static functions:
      

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

      