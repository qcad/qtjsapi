
      // auto generated
      //var self;

      // class constructor:
      function QTreeView() {
        

        // should be QTreeView_BaseJs.call(this, engine):
        //QTreeView.prototype = new QTreeView_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTreeView.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTreeView);
            //}
          }
          else {
            qWarning("QTreeView.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTreeView_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTreeView);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTreeView);
  }

  
  else {
    
        print("QTreeView(): wrong number / type of arguments");
      
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
  
    this["doubleClicked(QModelIndex)"] = Object.getPrototypeOf(this).doubleClicked;
  
    this["expanded(QModelIndex)"] = Object.getPrototypeOf(this).expanded;
  
    this["collapsed(QModelIndex)"] = Object.getPrototypeOf(this).collapsed;
  
          }
        }
      }

      //QTreeView.prototype = new QTreeView_BaseJs(engine);
      //QTreeView.prototype = new QTreeView_Wrapper(engine);
      QTreeView.prototype = new Object();

      QTreeView.prototype.toString = function() {
          //return "QTreeView [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTreeView [JS]";
        };
      QTreeView.getObjectType = function() {
        return RJSType_QTreeView.getIdStatic();
      };

      QTreeView.prototype.getObjectType = function() {
        return RJSType_QTreeView.getIdStatic();
      };

      QTreeView.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTreeView.getIdStatic()) {
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
        

        return false;


        
      };

      // enum values:
      
  // enum: SizeAdjustPolicy
QTreeView.AdjustIgnored = QTreeView_Wrapper.AdjustIgnored;
QTreeView.AdjustToContentsOnFirstShow = QTreeView_Wrapper.AdjustToContentsOnFirstShow;
QTreeView.AdjustToContents = QTreeView_Wrapper.AdjustToContents;

  // enum: SelectionMode
QTreeView.NoSelection = QTreeView_Wrapper.NoSelection;
QTreeView.SingleSelection = QTreeView_Wrapper.SingleSelection;
QTreeView.MultiSelection = QTreeView_Wrapper.MultiSelection;
QTreeView.ExtendedSelection = QTreeView_Wrapper.ExtendedSelection;
QTreeView.ContiguousSelection = QTreeView_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
QTreeView.SelectItems = QTreeView_Wrapper.SelectItems;
QTreeView.SelectRows = QTreeView_Wrapper.SelectRows;
QTreeView.SelectColumns = QTreeView_Wrapper.SelectColumns;

  // enum: ScrollHint
QTreeView.EnsureVisible = QTreeView_Wrapper.EnsureVisible;
QTreeView.PositionAtTop = QTreeView_Wrapper.PositionAtTop;
QTreeView.PositionAtBottom = QTreeView_Wrapper.PositionAtBottom;
QTreeView.PositionAtCenter = QTreeView_Wrapper.PositionAtCenter;

  // enum: EditTrigger
QTreeView.NoEditTriggers = QTreeView_Wrapper.NoEditTriggers;
QTreeView.CurrentChanged = QTreeView_Wrapper.CurrentChanged;
QTreeView.DoubleClicked = QTreeView_Wrapper.DoubleClicked;
QTreeView.SelectedClicked = QTreeView_Wrapper.SelectedClicked;
QTreeView.EditKeyPressed = QTreeView_Wrapper.EditKeyPressed;
QTreeView.AnyKeyPressed = QTreeView_Wrapper.AnyKeyPressed;
QTreeView.AllEditTriggers = QTreeView_Wrapper.AllEditTriggers;

  // enum: ScrollMode
QTreeView.ScrollPerItem = QTreeView_Wrapper.ScrollPerItem;
QTreeView.ScrollPerPixel = QTreeView_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
QTreeView.NoDragDrop = QTreeView_Wrapper.NoDragDrop;
QTreeView.DragOnly = QTreeView_Wrapper.DragOnly;
QTreeView.DropOnly = QTreeView_Wrapper.DropOnly;
QTreeView.DragDrop = QTreeView_Wrapper.DragDrop;
QTreeView.InternalMove = QTreeView_Wrapper.InternalMove;


      // functions:
      

      // static functions:
      

        // static function 
        QTreeView.tr = function() 
          
        {
          //print("JS: QTreeView.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QTreeView_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QTreeView);
  }

  
  else {
    
        print("QTreeView.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTreeView.devicePixelRatioFScale = function() 
          
        {
          //print("JS: QTreeView.devicePixelRatioFScale");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QTreeView_WrapperSingletonInstance.devicePixelRatioFScale(
                  
                );
              

        //copyProperties(this, wrapper, QTreeView);
  }

  
  else {
    
        print("QTreeView.devicePixelRatioFScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTreeView.setTabOrder = function() 
          
        {
          //print("JS: QTreeView.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QTreeView_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTreeView);
  }

  
  else {
    
        print("QTreeView.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTreeView.mouseGrabber = function() 
          
        {
          //print("JS: QTreeView.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QTreeView_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QTreeView);
  }

  
  else {
    
        print("QTreeView.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTreeView.keyboardGrabber = function() 
          
        {
          //print("JS: QTreeView.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QTreeView_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QTreeView);
  }

  
  else {
    
        print("QTreeView.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTreeView.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTreeView.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    