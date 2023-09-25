
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
              copyProperties(this, wrapper, QTreeWidget);
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
  
    this["pressed(QModelIndex)"] = Object.getPrototypeOf(this).pressed;
  
    this["clicked(QModelIndex)"] = Object.getPrototypeOf(this).clicked;
  
    this["doubleClicked(QModelIndex)"] = Object.getPrototypeOf(this).doubleClicked;
  
    this["activated(QModelIndex)"] = Object.getPrototypeOf(this).activated;
  
    this["entered(QModelIndex)"] = Object.getPrototypeOf(this).entered;
  
    this["iconSizeChanged(QSize)"] = Object.getPrototypeOf(this).iconSizeChanged;
  
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
        QTreeWidget.prototype.actionEvent = function() 
          
        {
          //print("JS: QTreeWidget.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QTreeWidget);
  }

  
  else {
    
        print("QTreeWidget.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QTreeWidget.tr = function() 
          
        {
          //print("JS: QTreeWidget.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QTreeWidget_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QTreeWidget);
  }

  
  else {
    
        print("QTreeWidget.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTreeWidget.setTabOrder = function() 
          
        {
          //print("JS: QTreeWidget.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QTreeWidget_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTreeWidget);
  }

  
  else {
    
        print("QTreeWidget.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTreeWidget.mouseGrabber = function() 
          
        {
          //print("JS: QTreeWidget.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QTreeWidget_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QTreeWidget);
  }

  
  else {
    
        print("QTreeWidget.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTreeWidget.keyboardGrabber = function() 
          
        {
          //print("JS: QTreeWidget.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QTreeWidget_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QTreeWidget);
  }

  
  else {
    
        print("QTreeWidget.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

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
    