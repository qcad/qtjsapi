
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
              
                  copyProperties(this, wrapper, QListView);
                
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
          
            copyProperties(this, wrapper, QListView);
          

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
          
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["pressed(QModelIndex)"] = Object.getPrototypeOf(this).pressed;
  
    this["clicked(QModelIndex)"] = Object.getPrototypeOf(this).clicked;
  
    this["doubleClicked(QModelIndex)"] = Object.getPrototypeOf(this).doubleClicked;
  
    this["activated(QModelIndex)"] = Object.getPrototypeOf(this).activated;
  
    this["entered(QModelIndex)"] = Object.getPrototypeOf(this).entered;
  
    this["iconSizeChanged(QSize)"] = Object.getPrototypeOf(this).iconSizeChanged;
  
            }
          
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
      QListView.prototype.actionEvent = function() 
        
      {
        //print("JS: QListView.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QListView);
  }

  
  else {
    
        print("QListView.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

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

      