
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
              
                  copyProperties(this, wrapper, QHelpContentWidget);
                
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
          
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["pressed(QModelIndex)"] = Object.getPrototypeOf(this).pressed;
  
    this["clicked(QModelIndex)"] = Object.getPrototypeOf(this).clicked;
  
    this["doubleClicked(QModelIndex)"] = Object.getPrototypeOf(this).doubleClicked;
  
    this["activated(QModelIndex)"] = Object.getPrototypeOf(this).activated;
  
    this["entered(QModelIndex)"] = Object.getPrototypeOf(this).entered;
  
    this["expanded(QModelIndex)"] = Object.getPrototypeOf(this).expanded;
  
    this["collapsed(QModelIndex)"] = Object.getPrototypeOf(this).collapsed;
  
    this["linkActivated(QUrl)"] = Object.getPrototypeOf(this).linkActivated;
  
            }
          
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
      

      // static functions:
      

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

      