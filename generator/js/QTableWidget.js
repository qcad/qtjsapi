
      // auto generated
      //var self;

      // class constructor:
      function QTableWidget() {
        

        // should be QTableWidget_BaseJs.call(this, engine):
        //QTableWidget.prototype = new QTableWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTableWidget.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QTableWidget);
                
            //}
          }
          else {
            qWarning("QTableWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QTableWidget.js: No constructor found for class QTableWidget");
            
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
  
    this["itemPressed(QTableWidgetItem*)"] = Object.getPrototypeOf(this).itemPressed;
  
    this["itemClicked(QTableWidgetItem*)"] = Object.getPrototypeOf(this).itemClicked;
  
    this["itemDoubleClicked(QTableWidgetItem*)"] = Object.getPrototypeOf(this).itemDoubleClicked;
  
    this["itemActivated(QTableWidgetItem*)"] = Object.getPrototypeOf(this).itemActivated;
  
    this["itemEntered(QTableWidgetItem*)"] = Object.getPrototypeOf(this).itemEntered;
  
    this["itemChanged(QTableWidgetItem*)"] = Object.getPrototypeOf(this).itemChanged;
  
    this["currentItemChanged(QTableWidgetItem*,QTableWidgetItem*)"] = Object.getPrototypeOf(this).currentItemChanged;
  
    this["cellPressed(int,int)"] = Object.getPrototypeOf(this).cellPressed;
  
    this["cellClicked(int,int)"] = Object.getPrototypeOf(this).cellClicked;
  
    this["cellDoubleClicked(int,int)"] = Object.getPrototypeOf(this).cellDoubleClicked;
  
    this["cellActivated(int,int)"] = Object.getPrototypeOf(this).cellActivated;
  
    this["cellEntered(int,int)"] = Object.getPrototypeOf(this).cellEntered;
  
    this["cellChanged(int,int)"] = Object.getPrototypeOf(this).cellChanged;
  
    this["currentCellChanged(int,int,int,int)"] = Object.getPrototypeOf(this).currentCellChanged;
  
            }
          
        }

        

      }

      //QTableWidget.prototype = new QTableWidget_BaseJs(engine);
      //QTableWidget.prototype = new QTableWidget_Wrapper(engine);
      QTableWidget.prototype = new Object();

      QTableWidget.prototype.toString = function() {
          //return "QTableWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTableWidget [JS]";
        };
      QTableWidget.getObjectType = function() {
        return RJSType_QTableWidget.getIdStatic();
      };

      QTableWidget.prototype.getObjectType = function() {
        return RJSType_QTableWidget.getIdStatic();
      };

      QTableWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTableWidget.getIdStatic()) {
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
        
          if (t===RJSType_QTableView.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QTableWidget.NoFrame = QTableWidget_Wrapper.NoFrame;
QTableWidget.Box = QTableWidget_Wrapper.Box;
QTableWidget.Panel = QTableWidget_Wrapper.Panel;
QTableWidget.WinPanel = QTableWidget_Wrapper.WinPanel;
QTableWidget.HLine = QTableWidget_Wrapper.HLine;
QTableWidget.VLine = QTableWidget_Wrapper.VLine;
QTableWidget.StyledPanel = QTableWidget_Wrapper.StyledPanel;

  // enum: Shadow
QTableWidget.Plain = QTableWidget_Wrapper.Plain;
QTableWidget.Raised = QTableWidget_Wrapper.Raised;
QTableWidget.Sunken = QTableWidget_Wrapper.Sunken;

  // enum: StyleMask
QTableWidget.Shadow_Mask = QTableWidget_Wrapper.Shadow_Mask;
QTableWidget.Shape_Mask = QTableWidget_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QTableWidget.AdjustIgnored = QTableWidget_Wrapper.AdjustIgnored;
QTableWidget.AdjustToContentsOnFirstShow = QTableWidget_Wrapper.AdjustToContentsOnFirstShow;
QTableWidget.AdjustToContents = QTableWidget_Wrapper.AdjustToContents;

  // enum: SelectionMode
QTableWidget.NoSelection = QTableWidget_Wrapper.NoSelection;
QTableWidget.SingleSelection = QTableWidget_Wrapper.SingleSelection;
QTableWidget.MultiSelection = QTableWidget_Wrapper.MultiSelection;
QTableWidget.ExtendedSelection = QTableWidget_Wrapper.ExtendedSelection;
QTableWidget.ContiguousSelection = QTableWidget_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
QTableWidget.SelectItems = QTableWidget_Wrapper.SelectItems;
QTableWidget.SelectRows = QTableWidget_Wrapper.SelectRows;
QTableWidget.SelectColumns = QTableWidget_Wrapper.SelectColumns;

  // enum: ScrollHint
QTableWidget.EnsureVisible = QTableWidget_Wrapper.EnsureVisible;
QTableWidget.PositionAtTop = QTableWidget_Wrapper.PositionAtTop;
QTableWidget.PositionAtBottom = QTableWidget_Wrapper.PositionAtBottom;
QTableWidget.PositionAtCenter = QTableWidget_Wrapper.PositionAtCenter;

  // enum: EditTrigger
QTableWidget.NoEditTriggers = QTableWidget_Wrapper.NoEditTriggers;
QTableWidget.CurrentChanged = QTableWidget_Wrapper.CurrentChanged;
QTableWidget.DoubleClicked = QTableWidget_Wrapper.DoubleClicked;
QTableWidget.SelectedClicked = QTableWidget_Wrapper.SelectedClicked;
QTableWidget.EditKeyPressed = QTableWidget_Wrapper.EditKeyPressed;
QTableWidget.AnyKeyPressed = QTableWidget_Wrapper.AnyKeyPressed;
QTableWidget.AllEditTriggers = QTableWidget_Wrapper.AllEditTriggers;

  // enum: ScrollMode
QTableWidget.ScrollPerItem = QTableWidget_Wrapper.ScrollPerItem;
QTableWidget.ScrollPerPixel = QTableWidget_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
QTableWidget.NoDragDrop = QTableWidget_Wrapper.NoDragDrop;
QTableWidget.DragOnly = QTableWidget_Wrapper.DragOnly;
QTableWidget.DropOnly = QTableWidget_Wrapper.DropOnly;
QTableWidget.DragDrop = QTableWidget_Wrapper.DragDrop;
QTableWidget.InternalMove = QTableWidget_Wrapper.InternalMove;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTableWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTableWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      