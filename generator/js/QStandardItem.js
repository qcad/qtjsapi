
      // auto generated
      //var self;

      // class constructor:
      function QStandardItem() {
        

        // should be QStandardItem_BaseJs.call(this, engine):
        //QStandardItem.prototype = new QStandardItem_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStandardItem.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("QStandardItem.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QStandardItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStandardItem);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QStandardItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStandardItem);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStandardItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStandardItem);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStandardItem_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStandardItem);
  }

  
  else {
    
        print("QStandardItem(): wrong number / type of arguments");
      
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
          

        }


      }

      //QStandardItem.prototype = new QStandardItem_BaseJs(engine);
      //QStandardItem.prototype = new QStandardItem_Wrapper(engine);
      QStandardItem.prototype = new Object();


      QStandardItem.prototype.toString = function() {
          //return "QStandardItem [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStandardItem [JS]";
        };
      QStandardItem.getObjectType = function() {
        return RJSType_QStandardItem.getIdStatic();
      };

      QStandardItem.prototype.getObjectType = function() {
        return RJSType_QStandardItem.getIdStatic();
      };

      QStandardItem.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStandardItem.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: ItemType
QStandardItem.Type = QStandardItem_Wrapper.Type;
QStandardItem.UserType = QStandardItem_Wrapper.UserType;


      // functions:
      
        // function 
        QStandardItem.prototype.data = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setData = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
    
        // function 
        QStandardItem.prototype.clearData = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.clearData");
          
              return this.__PROXY__.clearData(...args);
            
        };
    
        // function 
        QStandardItem.prototype.text = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.text");
          
              return this.__PROXY__.text(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setText = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        QStandardItem.prototype.icon = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.icon");
          
              return this.__PROXY__.icon(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setIcon = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setIcon");
          
              return this.__PROXY__.setIcon(...args);
            
        };
    
        // function 
        QStandardItem.prototype.toolTip = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.toolTip");
          
              return this.__PROXY__.toolTip(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QStandardItem.prototype.statusTip = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.statusTip");
          
              return this.__PROXY__.statusTip(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QStandardItem.prototype.whatsThis = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.whatsThis");
          
              return this.__PROXY__.whatsThis(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QStandardItem.prototype.sizeHint = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.sizeHint");
          
              return this.__PROXY__.sizeHint(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setSizeHint = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setSizeHint");
          
              return this.__PROXY__.setSizeHint(...args);
            
        };
    
        // function 
        QStandardItem.prototype.font = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.font");
          
              return this.__PROXY__.font(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setFont = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QStandardItem.prototype.textAlignment = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.textAlignment");
          
              return this.__PROXY__.textAlignment(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setTextAlignment = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setTextAlignment");
          
              return this.__PROXY__.setTextAlignment(...args);
            
        };
    
        // function 
        QStandardItem.prototype.background = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.background");
          
              return this.__PROXY__.background(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setBackground = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setBackground");
          
              return this.__PROXY__.setBackground(...args);
            
        };
    
        // function 
        QStandardItem.prototype.foreground = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.foreground");
          
              return this.__PROXY__.foreground(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setForeground = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setForeground");
          
              return this.__PROXY__.setForeground(...args);
            
        };
    
        // function 
        QStandardItem.prototype.checkState = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.checkState");
          
              return this.__PROXY__.checkState(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setCheckState = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setCheckState");
          
              return this.__PROXY__.setCheckState(...args);
            
        };
    
        // function 
        QStandardItem.prototype.accessibleText = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.accessibleText");
          
              return this.__PROXY__.accessibleText(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setAccessibleText = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setAccessibleText");
          
              return this.__PROXY__.setAccessibleText(...args);
            
        };
    
        // function 
        QStandardItem.prototype.accessibleDescription = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.accessibleDescription");
          
              return this.__PROXY__.accessibleDescription(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QStandardItem.prototype.flags = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.flags");
          
              return this.__PROXY__.flags(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setFlags = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setFlags");
          
              return this.__PROXY__.setFlags(...args);
            
        };
    
        // function 
        QStandardItem.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QStandardItem.prototype.isEditable = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.isEditable");
          
              return this.__PROXY__.isEditable(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setEditable = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setEditable");
          
              return this.__PROXY__.setEditable(...args);
            
        };
    
        // function 
        QStandardItem.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.isSelectable");
          
              return this.__PROXY__.isSelectable(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setSelectable = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setSelectable");
          
              return this.__PROXY__.setSelectable(...args);
            
        };
    
        // function 
        QStandardItem.prototype.isCheckable = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.isCheckable");
          
              return this.__PROXY__.isCheckable(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setCheckable = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setCheckable");
          
              return this.__PROXY__.setCheckable(...args);
            
        };
    
        // function 
        QStandardItem.prototype.isAutoTristate = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.isAutoTristate");
          
              return this.__PROXY__.isAutoTristate(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setAutoTristate = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setAutoTristate");
          
              return this.__PROXY__.setAutoTristate(...args);
            
        };
    
        // function 
        QStandardItem.prototype.isUserTristate = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.isUserTristate");
          
              return this.__PROXY__.isUserTristate(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setUserTristate = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setUserTristate");
          
              return this.__PROXY__.setUserTristate(...args);
            
        };
    
        // function 
        QStandardItem.prototype.isDragEnabled = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.isDragEnabled");
          
              return this.__PROXY__.isDragEnabled(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setDragEnabled");
          
              return this.__PROXY__.setDragEnabled(...args);
            
        };
    
        // function 
        QStandardItem.prototype.isDropEnabled = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.isDropEnabled");
          
              return this.__PROXY__.isDropEnabled(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setDropEnabled = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setDropEnabled");
          
              return this.__PROXY__.setDropEnabled(...args);
            
        };
    
        // function 
        QStandardItem.prototype.parent = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QStandardItem.prototype.row = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.row");
          
              return this.__PROXY__.row(...args);
            
        };
    
        // function 
        QStandardItem.prototype.column = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.column");
          
              return this.__PROXY__.column(...args);
            
        };
    
        // function 
        QStandardItem.prototype.index = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.index");
          
              return this.__PROXY__.index(...args);
            
        };
    
        // function 
        QStandardItem.prototype.model = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
    
        // function 
        QStandardItem.prototype.rowCount = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.rowCount");
          
              return this.__PROXY__.rowCount(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setRowCount = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setRowCount");
          
              return this.__PROXY__.setRowCount(...args);
            
        };
    
        // function 
        QStandardItem.prototype.columnCount = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.columnCount");
          
              return this.__PROXY__.columnCount(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setColumnCount = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setColumnCount");
          
              return this.__PROXY__.setColumnCount(...args);
            
        };
    
        // function 
        QStandardItem.prototype.hasChildren = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.hasChildren");
          
              return this.__PROXY__.hasChildren(...args);
            
        };
    
        // function 
        QStandardItem.prototype.child = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.child");
          
              return this.__PROXY__.child(...args);
            
        };
    
        // function 
        QStandardItem.prototype.setChild = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.setChild");
          
              return this.__PROXY__.setChild(...args);
            
        };
    
        // function 
        QStandardItem.prototype.insertRow = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.insertRow");
          
              return this.__PROXY__.insertRow(...args);
            
        };
    
        // function 
        QStandardItem.prototype.insertColumn = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.insertColumn");
          
              return this.__PROXY__.insertColumn(...args);
            
        };
    
        // function 
        QStandardItem.prototype.insertRows = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.insertRows");
          
              return this.__PROXY__.insertRows(...args);
            
        };
    
        // function 
        QStandardItem.prototype.insertColumns = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.insertColumns");
          
              return this.__PROXY__.insertColumns(...args);
            
        };
    
        // function 
        QStandardItem.prototype.removeRow = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.removeRow");
          
              return this.__PROXY__.removeRow(...args);
            
        };
    
        // function 
        QStandardItem.prototype.removeColumn = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.removeColumn");
          
              return this.__PROXY__.removeColumn(...args);
            
        };
    
        // function 
        QStandardItem.prototype.removeRows = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.removeRows");
          
              return this.__PROXY__.removeRows(...args);
            
        };
    
        // function 
        QStandardItem.prototype.removeColumns = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.removeColumns");
          
              return this.__PROXY__.removeColumns(...args);
            
        };
    
        // function 
        QStandardItem.prototype.appendRow = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.appendRow");
          
              return this.__PROXY__.appendRow(...args);
            
        };
    
        // function 
        QStandardItem.prototype.appendRows = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.appendRows");
          
              return this.__PROXY__.appendRows(...args);
            
        };
    
        // function 
        QStandardItem.prototype.appendColumn = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.appendColumn");
          
              return this.__PROXY__.appendColumn(...args);
            
        };
    
        // function 
        QStandardItem.prototype.takeChild = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.takeChild");
          
              return this.__PROXY__.takeChild(...args);
            
        };
    
        // function 
        QStandardItem.prototype.takeRow = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.takeRow");
          
              return this.__PROXY__.takeRow(...args);
            
        };
    
        // function 
        QStandardItem.prototype.takeColumn = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.takeColumn");
          
              return this.__PROXY__.takeColumn(...args);
            
        };
    
        // function 
        QStandardItem.prototype.sortChildren = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.sortChildren");
          
              return this.__PROXY__.sortChildren(...args);
            
        };
    
        // function 
        QStandardItem.prototype.clone = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.clone");
          
              return this.__PROXY__.clone(...args);
            
        };
    
        // function 
        QStandardItem.prototype.type = function(...args) 
          
        {
          //print("JS: QStandardItem.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
    

      // static functions:
      QStandardItem.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QStandardItem.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QStandardItem.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStandardItem.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStandardItem.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QStandardItem.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      