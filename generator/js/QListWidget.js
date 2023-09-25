
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
  
    this["pressed(QModelIndex)"] = Object.getPrototypeOf(this).pressed;
  
    this["clicked(QModelIndex)"] = Object.getPrototypeOf(this).clicked;
  
    this["doubleClicked(QModelIndex)"] = Object.getPrototypeOf(this).doubleClicked;
  
    this["activated(QModelIndex)"] = Object.getPrototypeOf(this).activated;
  
    this["entered(QModelIndex)"] = Object.getPrototypeOf(this).entered;
  
    this["iconSizeChanged(QSize)"] = Object.getPrototypeOf(this).iconSizeChanged;
  
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
      
        // function 
        QListWidget.prototype.actionEvent = function() 
          
        {
          //print("JS: QListWidget.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QListWidget);
  }

  
  else {
    
        print("QListWidget.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QListWidget.tr = function() 
          
        {
          //print("JS: QListWidget.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QListWidget_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QListWidget);
  }

  
  else {
    
        print("QListWidget.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QListWidget.setTabOrder = function() 
          
        {
          //print("JS: QListWidget.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QListWidget_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QListWidget);
  }

  
  else {
    
        print("QListWidget.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QListWidget.mouseGrabber = function() 
          
        {
          //print("JS: QListWidget.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QListWidget_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QListWidget);
  }

  
  else {
    
        print("QListWidget.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QListWidget.keyboardGrabber = function() 
          
        {
          //print("JS: QListWidget.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QListWidget_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QListWidget);
  }

  
  else {
    
        print("QListWidget.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

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
    