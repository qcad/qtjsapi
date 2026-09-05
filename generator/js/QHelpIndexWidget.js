
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
              
                  copyProperties(this, wrapper, QHelpIndexWidget);
                
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
          
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["pressed(QModelIndex)"] = Object.getPrototypeOf(this).pressed;
  
    this["clicked(QModelIndex)"] = Object.getPrototypeOf(this).clicked;
  
    this["doubleClicked(QModelIndex)"] = Object.getPrototypeOf(this).doubleClicked;
  
    this["activated(QModelIndex)"] = Object.getPrototypeOf(this).activated;
  
    this["entered(QModelIndex)"] = Object.getPrototypeOf(this).entered;
  
    this["documentActivated(QHelpLink,QString)"] = Object.getPrototypeOf(this).documentActivated;
  
    this["documentsActivated(QList<QHelpLink>,QString)"] = Object.getPrototypeOf(this).documentsActivated;
  
            }
          
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
      

      // static functions:
      

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

      