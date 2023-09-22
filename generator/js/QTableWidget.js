
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
            arguments[2].getWrappedType()===
              
                  RJSType_QTableWidget.getIdStatic()
                
            ))) {

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
  
    this["pressed(QModelIndex)"] = Object.getPrototypeOf(this).pressed;
  
    this["clicked(QModelIndex)"] = Object.getPrototypeOf(this).clicked;
  
    this["doubleClicked(QModelIndex)"] = Object.getPrototypeOf(this).doubleClicked;
  
    this["activated(QModelIndex)"] = Object.getPrototypeOf(this).activated;
  
    this["entered(QModelIndex)"] = Object.getPrototypeOf(this).entered;
  
    this["iconSizeChanged(QSize)"] = Object.getPrototypeOf(this).iconSizeChanged;
  
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
      
        // function 
        QTableWidget.prototype.actionEvent = function() 
          
        {
          //print("JS: QTableWidget.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QTableWidget);
  }

  
  else {
    
        print("QTableWidget.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QTableWidget.tr = function() 
          
        {
          //print("JS: QTableWidget.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QTableWidget_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QTableWidget);
  }

  
  else {
    
        print("QTableWidget.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTableWidget.setTabOrder = function() 
          
        {
          //print("JS: QTableWidget.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QTableWidget_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTableWidget);
  }

  
  else {
    
        print("QTableWidget.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTableWidget.mouseGrabber = function() 
          
        {
          //print("JS: QTableWidget.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QTableWidget_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QTableWidget);
  }

  
  else {
    
        print("QTableWidget.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTableWidget.keyboardGrabber = function() 
          
        {
          //print("JS: QTableWidget.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QTableWidget_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QTableWidget);
  }

  
  else {
    
        print("QTableWidget.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

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
    