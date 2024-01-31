
      // auto generated
      //var self;

      // class constructor:
      function QAbstractItemView() {
        

        // should be QAbstractItemView_BaseJs.call(this, engine):
        //QAbstractItemView.prototype = new QAbstractItemView_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractItemView.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QAbstractItemView);
            //}
          }
          else {
            qWarning("QAbstractItemView.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QAbstractItemView.js: No constructor found for class QAbstractItemView");
            
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

      //QAbstractItemView.prototype = new QAbstractItemView_BaseJs(engine);
      //QAbstractItemView.prototype = new QAbstractItemView_Wrapper(engine);
      QAbstractItemView.prototype = new Object();

      QAbstractItemView.prototype.toString = function() {
          //return "QAbstractItemView [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractItemView [JS]";
        };
      QAbstractItemView.getObjectType = function() {
        return RJSType_QAbstractItemView.getIdStatic();
      };

      QAbstractItemView.prototype.getObjectType = function() {
        return RJSType_QAbstractItemView.getIdStatic();
      };

      QAbstractItemView.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractItemView.getIdStatic()) {
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
        

        return false;


        
      };

      // enum values:
      
  // enum: SizeAdjustPolicy
QAbstractItemView.AdjustIgnored = QAbstractItemView_Wrapper.AdjustIgnored;
QAbstractItemView.AdjustToContentsOnFirstShow = QAbstractItemView_Wrapper.AdjustToContentsOnFirstShow;
QAbstractItemView.AdjustToContents = QAbstractItemView_Wrapper.AdjustToContents;

  // enum: SelectionMode
QAbstractItemView.NoSelection = QAbstractItemView_Wrapper.NoSelection;
QAbstractItemView.SingleSelection = QAbstractItemView_Wrapper.SingleSelection;
QAbstractItemView.MultiSelection = QAbstractItemView_Wrapper.MultiSelection;
QAbstractItemView.ExtendedSelection = QAbstractItemView_Wrapper.ExtendedSelection;
QAbstractItemView.ContiguousSelection = QAbstractItemView_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
QAbstractItemView.SelectItems = QAbstractItemView_Wrapper.SelectItems;
QAbstractItemView.SelectRows = QAbstractItemView_Wrapper.SelectRows;
QAbstractItemView.SelectColumns = QAbstractItemView_Wrapper.SelectColumns;

  // enum: ScrollHint
QAbstractItemView.EnsureVisible = QAbstractItemView_Wrapper.EnsureVisible;
QAbstractItemView.PositionAtTop = QAbstractItemView_Wrapper.PositionAtTop;
QAbstractItemView.PositionAtBottom = QAbstractItemView_Wrapper.PositionAtBottom;
QAbstractItemView.PositionAtCenter = QAbstractItemView_Wrapper.PositionAtCenter;

  // enum: EditTrigger
QAbstractItemView.NoEditTriggers = QAbstractItemView_Wrapper.NoEditTriggers;
QAbstractItemView.CurrentChanged = QAbstractItemView_Wrapper.CurrentChanged;
QAbstractItemView.DoubleClicked = QAbstractItemView_Wrapper.DoubleClicked;
QAbstractItemView.SelectedClicked = QAbstractItemView_Wrapper.SelectedClicked;
QAbstractItemView.EditKeyPressed = QAbstractItemView_Wrapper.EditKeyPressed;
QAbstractItemView.AnyKeyPressed = QAbstractItemView_Wrapper.AnyKeyPressed;
QAbstractItemView.AllEditTriggers = QAbstractItemView_Wrapper.AllEditTriggers;

  // enum: ScrollMode
QAbstractItemView.ScrollPerItem = QAbstractItemView_Wrapper.ScrollPerItem;
QAbstractItemView.ScrollPerPixel = QAbstractItemView_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
QAbstractItemView.NoDragDrop = QAbstractItemView_Wrapper.NoDragDrop;
QAbstractItemView.DragOnly = QAbstractItemView_Wrapper.DragOnly;
QAbstractItemView.DropOnly = QAbstractItemView_Wrapper.DropOnly;
QAbstractItemView.DragDrop = QAbstractItemView_Wrapper.DragDrop;
QAbstractItemView.InternalMove = QAbstractItemView_Wrapper.InternalMove;


      // functions:
      

      // static functions:
      

        // static function 
        QAbstractItemView.tr = function() 
          
        {
          //print("JS: QAbstractItemView.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QAbstractItemView_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QAbstractItemView);
  }

  
  else {
    
        print("QAbstractItemView.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractItemView.devicePixelRatioFScale = function() 
          
        {
          //print("JS: QAbstractItemView.devicePixelRatioFScale");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QAbstractItemView_WrapperSingletonInstance.devicePixelRatioFScale(
                  
                );
              

        //copyProperties(this, wrapper, QAbstractItemView);
  }

  
  else {
    
        print("QAbstractItemView.devicePixelRatioFScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractItemView.setTabOrder = function() 
          
        {
          //print("JS: QAbstractItemView.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QAbstractItemView_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QAbstractItemView);
  }

  
  else {
    
        print("QAbstractItemView.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractItemView.mouseGrabber = function() 
          
        {
          //print("JS: QAbstractItemView.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QAbstractItemView_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QAbstractItemView);
  }

  
  else {
    
        print("QAbstractItemView.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractItemView.keyboardGrabber = function() 
          
        {
          //print("JS: QAbstractItemView.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QAbstractItemView_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QAbstractItemView);
  }

  
  else {
    
        print("QAbstractItemView.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractItemView.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractItemView.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    