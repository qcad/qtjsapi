
      // auto generated
      //var self;

      // class constructor:
      function QStandardItemModel() {
        

        // should be QStandardItemModel_BaseJs.call(this, engine):
        //QStandardItemModel.prototype = new QStandardItemModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStandardItemModel.getIdStatic()))) {

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
            qWarning("QStandardItemModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QStandardItemModel_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStandardItemModel);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QStandardItemModel_Wrapper(
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

      

        //copyProperties(this, wrapper, QStandardItemModel);
  }

  
  else {
    
        print("QStandardItemModel(): wrong number / type of arguments");
      
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

      //QStandardItemModel.prototype = new QStandardItemModel_BaseJs(engine);
      //QStandardItemModel.prototype = new QStandardItemModel_Wrapper(engine);
      QStandardItemModel.prototype = new Object();


      QStandardItemModel.prototype.toString = function() {
          //return "QStandardItemModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStandardItemModel [JS]";
        };
      QStandardItemModel.getObjectType = function() {
        return RJSType_QStandardItemModel.getIdStatic();
      };

      QStandardItemModel.prototype.getObjectType = function() {
        return RJSType_QStandardItemModel.getIdStatic();
      };

      QStandardItemModel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStandardItemModel.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractItemModel.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: LayoutChangeHint
QStandardItemModel.NoLayoutChangeHint = QStandardItemModel_Wrapper.NoLayoutChangeHint;
QStandardItemModel.VerticalSortHint = QStandardItemModel_Wrapper.VerticalSortHint;
QStandardItemModel.HorizontalSortHint = QStandardItemModel_Wrapper.HorizontalSortHint;


      // functions:
      
        // function 
        QStandardItemModel.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.findChild = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.children = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.setParent = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.property = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.hasIndex = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.hasIndex");
          
              return this.__PROXY__.hasIndex(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.sibling = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.sibling");
          
              return this.__PROXY__.sibling(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.supportedDragActions = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.supportedDragActions");
          
              return this.__PROXY__.supportedDragActions(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.moveRows = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.moveRows");
          
              return this.__PROXY__.moveRows(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.moveColumns = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.moveColumns");
          
              return this.__PROXY__.moveColumns(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.removeRow = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.removeRow");
          
              return this.__PROXY__.removeRow(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.removeColumn = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.removeColumn");
          
              return this.__PROXY__.removeColumn(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.moveRow = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.moveRow");
          
              return this.__PROXY__.moveRow(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.moveColumn = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.moveColumn");
          
              return this.__PROXY__.moveColumn(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.fetchMore = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.fetchMore");
          
              return this.__PROXY__.fetchMore(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.canFetchMore = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.canFetchMore");
          
              return this.__PROXY__.canFetchMore(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.buddy = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.buddy");
          
              return this.__PROXY__.buddy(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.span = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.span");
          
              return this.__PROXY__.span(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.roleNames = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.roleNames");
          
              return this.__PROXY__.roleNames(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.submit = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.submit");
          
              return this.__PROXY__.submit(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.revert = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.revert");
          
              return this.__PROXY__.revert(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.resetInternalData = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.resetInternalData");
          
              return this.__PROXY__.resetInternalData(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.createIndex = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.createIndex");
          
              return this.__PROXY__.createIndex(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.encodeData = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.encodeData");
          
              return this.__PROXY__.encodeData(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.decodeData = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.decodeData");
          
              return this.__PROXY__.decodeData(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.beginInsertRows = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.beginInsertRows");
          
              return this.__PROXY__.beginInsertRows(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.endInsertRows = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.endInsertRows");
          
              return this.__PROXY__.endInsertRows(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.beginRemoveRows = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.beginRemoveRows");
          
              return this.__PROXY__.beginRemoveRows(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.endRemoveRows = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.endRemoveRows");
          
              return this.__PROXY__.endRemoveRows(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.beginMoveRows = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.beginMoveRows");
          
              return this.__PROXY__.beginMoveRows(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.endMoveRows = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.endMoveRows");
          
              return this.__PROXY__.endMoveRows(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.beginInsertColumns = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.beginInsertColumns");
          
              return this.__PROXY__.beginInsertColumns(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.endInsertColumns = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.endInsertColumns");
          
              return this.__PROXY__.endInsertColumns(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.beginRemoveColumns = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.beginRemoveColumns");
          
              return this.__PROXY__.beginRemoveColumns(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.endRemoveColumns = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.endRemoveColumns");
          
              return this.__PROXY__.endRemoveColumns(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.beginMoveColumns = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.beginMoveColumns");
          
              return this.__PROXY__.beginMoveColumns(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.endMoveColumns = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.endMoveColumns");
          
              return this.__PROXY__.endMoveColumns(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.beginResetModel = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.beginResetModel");
          
              return this.__PROXY__.beginResetModel(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.endResetModel = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.endResetModel");
          
              return this.__PROXY__.endResetModel(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.changePersistentIndex = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.changePersistentIndex");
          
              return this.__PROXY__.changePersistentIndex(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.changePersistentIndexList = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.changePersistentIndexList");
          
              return this.__PROXY__.changePersistentIndexList(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.persistentIndexList = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.persistentIndexList");
          
              return this.__PROXY__.persistentIndexList(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.index = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.index");
          
              return this.__PROXY__.index(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.parent = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.rowCount = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.rowCount");
          
              return this.__PROXY__.rowCount(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.columnCount = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.columnCount");
          
              return this.__PROXY__.columnCount(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.hasChildren = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.hasChildren");
          
              return this.__PROXY__.hasChildren(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.data = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.setData = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.clearItemData = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.clearItemData");
          
              return this.__PROXY__.clearItemData(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.headerData = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.headerData");
          
              return this.__PROXY__.headerData(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.setHeaderData = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.setHeaderData");
          
              return this.__PROXY__.setHeaderData(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.insertRows = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.insertRows");
          
              return this.__PROXY__.insertRows(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.insertColumns = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.insertColumns");
          
              return this.__PROXY__.insertColumns(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.removeRows = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.removeRows");
          
              return this.__PROXY__.removeRows(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.removeColumns = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.removeColumns");
          
              return this.__PROXY__.removeColumns(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.flags = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.flags");
          
              return this.__PROXY__.flags(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.supportedDropActions = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.supportedDropActions");
          
              return this.__PROXY__.supportedDropActions(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.clear = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.sort = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.sort");
          
              return this.__PROXY__.sort(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.itemFromIndex = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.itemFromIndex");
          
              return this.__PROXY__.itemFromIndex(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.indexFromItem = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.indexFromItem");
          
              return this.__PROXY__.indexFromItem(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.item = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.item");
          
              return this.__PROXY__.item(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.setItem = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.setItem");
          
              return this.__PROXY__.setItem(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.invisibleRootItem = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.invisibleRootItem");
          
              return this.__PROXY__.invisibleRootItem(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.horizontalHeaderItem = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.horizontalHeaderItem");
          
              return this.__PROXY__.horizontalHeaderItem(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.setHorizontalHeaderItem = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.setHorizontalHeaderItem");
          
              return this.__PROXY__.setHorizontalHeaderItem(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.verticalHeaderItem = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.verticalHeaderItem");
          
              return this.__PROXY__.verticalHeaderItem(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.setVerticalHeaderItem = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.setVerticalHeaderItem");
          
              return this.__PROXY__.setVerticalHeaderItem(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.setHorizontalHeaderLabels = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.setHorizontalHeaderLabels");
          
              return this.__PROXY__.setHorizontalHeaderLabels(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.setVerticalHeaderLabels = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.setVerticalHeaderLabels");
          
              return this.__PROXY__.setVerticalHeaderLabels(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.setRowCount = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.setRowCount");
          
              return this.__PROXY__.setRowCount(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.setColumnCount = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.setColumnCount");
          
              return this.__PROXY__.setColumnCount(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.appendRow = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.appendRow");
          
              return this.__PROXY__.appendRow(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.appendColumn = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.appendColumn");
          
              return this.__PROXY__.appendColumn(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.insertRow = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.insertRow");
          
              return this.__PROXY__.insertRow(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.insertColumn = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.insertColumn");
          
              return this.__PROXY__.insertColumn(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.takeItem = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.takeItem");
          
              return this.__PROXY__.takeItem(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.takeRow = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.takeRow");
          
              return this.__PROXY__.takeRow(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.takeColumn = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.takeColumn");
          
              return this.__PROXY__.takeColumn(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.takeHorizontalHeaderItem = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.takeHorizontalHeaderItem");
          
              return this.__PROXY__.takeHorizontalHeaderItem(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.takeVerticalHeaderItem = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.takeVerticalHeaderItem");
          
              return this.__PROXY__.takeVerticalHeaderItem(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.setItemPrototype = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.setItemPrototype");
          
              return this.__PROXY__.setItemPrototype(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.findItems = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.findItems");
          
              return this.__PROXY__.findItems(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.sortRole = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.sortRole");
          
              return this.__PROXY__.sortRole(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.setSortRole = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.setSortRole");
          
              return this.__PROXY__.setSortRole(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.mimeTypes = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.mimeTypes");
          
              return this.__PROXY__.mimeTypes(...args);
            
        };
    
        // function 
        QStandardItemModel.prototype.dropMimeData = function(...args) 
          
        {
          //print("JS: QStandardItemModel.prototype.dropMimeData");
          
              return this.__PROXY__.dropMimeData(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QStandardItemModel.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QStandardItemModel.prototype, 'headerDataChanged', {
            get: function() { return this.__PROXY__.headerDataChanged; },
            configurable: true
        });
        
          Object.defineProperty(QStandardItemModel.prototype, 'headerDataChanged(Qt::Orientation,int,int)', {
              get: function() { return this.__PROXY__.headerDataChanged; },
              configurable: true
          });
        
        Object.defineProperty(QStandardItemModel.prototype, 'rowsInserted', {
            get: function() { return this.__PROXY__.rowsInserted; },
            configurable: true
        });
        
          Object.defineProperty(QStandardItemModel.prototype, 'rowsInserted(QModelIndex,int,int)', {
              get: function() { return this.__PROXY__.rowsInserted; },
              configurable: true
          });
        
        Object.defineProperty(QStandardItemModel.prototype, 'itemChanged', {
            get: function() { return this.__PROXY__.itemChanged; },
            configurable: true
        });
        
          Object.defineProperty(QStandardItemModel.prototype, 'itemChanged(QStandardItem*)', {
              get: function() { return this.__PROXY__.itemChanged; },
              configurable: true
          });
        QStandardItemModel.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QStandardItemModel.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QStandardItemModel.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStandardItemModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStandardItemModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QStandardItemModel.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      