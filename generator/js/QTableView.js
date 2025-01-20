
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
              
                  copyProperties(this, wrapper, QTableView);
                
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
          
            copyProperties(this, wrapper, QTableView);
          

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
      QTableView.prototype.actionEvent = function() 
        
      {
        //print("JS: QTableView.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QTableView);
  }

  
  else {
    
        print("QTableView.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

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

      