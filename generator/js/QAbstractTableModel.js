
      // auto generated
      //var self;

      // class constructor:
      function QAbstractTableModel() {
        

        // should be QAbstractTableModel_BaseJs.call(this, engine):
        //QAbstractTableModel.prototype = new QAbstractTableModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractTableModel.getIdStatic()))) {

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
            qWarning("QAbstractTableModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QAbstractTableModel.js: No constructor found for class QAbstractTableModel");
            
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

      //QAbstractTableModel.prototype = new QAbstractTableModel_BaseJs(engine);
      //QAbstractTableModel.prototype = new QAbstractTableModel_Wrapper(engine);
      QAbstractTableModel.prototype = new Object();


      QAbstractTableModel.prototype.toString = function() {
          //return "QAbstractTableModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractTableModel [JS]";
        };
      QAbstractTableModel.getObjectType = function() {
        return RJSType_QAbstractTableModel.getIdStatic();
      };

      QAbstractTableModel.prototype.getObjectType = function() {
        return RJSType_QAbstractTableModel.getIdStatic();
      };

      QAbstractTableModel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractTableModel.getIdStatic()) {
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
QAbstractTableModel.NoLayoutChangeHint = QAbstractTableModel_Wrapper.NoLayoutChangeHint;
QAbstractTableModel.VerticalSortHint = QAbstractTableModel_Wrapper.VerticalSortHint;
QAbstractTableModel.HorizontalSortHint = QAbstractTableModel_Wrapper.HorizontalSortHint;


      // functions:
      
        // function 
        QAbstractTableModel.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.findChild = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.children = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.setParent = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.property = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.parent = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.hasIndex = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.hasIndex");
          
              return this.__PROXY__.hasIndex(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.rowCount = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.rowCount");
          
              return this.__PROXY__.rowCount(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.columnCount = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.columnCount");
          
              return this.__PROXY__.columnCount(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.data = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.setData = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.headerData = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.headerData");
          
              return this.__PROXY__.headerData(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.setHeaderData = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.setHeaderData");
          
              return this.__PROXY__.setHeaderData(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.clearItemData = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.clearItemData");
          
              return this.__PROXY__.clearItemData(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.mimeTypes = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.mimeTypes");
          
              return this.__PROXY__.mimeTypes(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.supportedDropActions = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.supportedDropActions");
          
              return this.__PROXY__.supportedDropActions(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.supportedDragActions = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.supportedDragActions");
          
              return this.__PROXY__.supportedDragActions(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.insertRows = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.insertRows");
          
              return this.__PROXY__.insertRows(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.insertColumns = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.insertColumns");
          
              return this.__PROXY__.insertColumns(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.removeRows = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.removeRows");
          
              return this.__PROXY__.removeRows(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.removeColumns = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.removeColumns");
          
              return this.__PROXY__.removeColumns(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.moveRows = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.moveRows");
          
              return this.__PROXY__.moveRows(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.moveColumns = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.moveColumns");
          
              return this.__PROXY__.moveColumns(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.insertRow = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.insertRow");
          
              return this.__PROXY__.insertRow(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.insertColumn = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.insertColumn");
          
              return this.__PROXY__.insertColumn(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.removeRow = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.removeRow");
          
              return this.__PROXY__.removeRow(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.removeColumn = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.removeColumn");
          
              return this.__PROXY__.removeColumn(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.moveRow = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.moveRow");
          
              return this.__PROXY__.moveRow(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.moveColumn = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.moveColumn");
          
              return this.__PROXY__.moveColumn(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.fetchMore = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.fetchMore");
          
              return this.__PROXY__.fetchMore(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.canFetchMore = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.canFetchMore");
          
              return this.__PROXY__.canFetchMore(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.sort = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.sort");
          
              return this.__PROXY__.sort(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.buddy = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.buddy");
          
              return this.__PROXY__.buddy(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.span = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.span");
          
              return this.__PROXY__.span(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.roleNames = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.roleNames");
          
              return this.__PROXY__.roleNames(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.submit = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.submit");
          
              return this.__PROXY__.submit(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.revert = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.revert");
          
              return this.__PROXY__.revert(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.resetInternalData = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.resetInternalData");
          
              return this.__PROXY__.resetInternalData(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.createIndex = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.createIndex");
          
              return this.__PROXY__.createIndex(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.encodeData = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.encodeData");
          
              return this.__PROXY__.encodeData(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.decodeData = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.decodeData");
          
              return this.__PROXY__.decodeData(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.beginInsertRows = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.beginInsertRows");
          
              return this.__PROXY__.beginInsertRows(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.endInsertRows = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.endInsertRows");
          
              return this.__PROXY__.endInsertRows(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.beginRemoveRows = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.beginRemoveRows");
          
              return this.__PROXY__.beginRemoveRows(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.endRemoveRows = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.endRemoveRows");
          
              return this.__PROXY__.endRemoveRows(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.beginMoveRows = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.beginMoveRows");
          
              return this.__PROXY__.beginMoveRows(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.endMoveRows = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.endMoveRows");
          
              return this.__PROXY__.endMoveRows(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.beginInsertColumns = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.beginInsertColumns");
          
              return this.__PROXY__.beginInsertColumns(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.endInsertColumns = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.endInsertColumns");
          
              return this.__PROXY__.endInsertColumns(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.beginRemoveColumns = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.beginRemoveColumns");
          
              return this.__PROXY__.beginRemoveColumns(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.endRemoveColumns = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.endRemoveColumns");
          
              return this.__PROXY__.endRemoveColumns(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.beginMoveColumns = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.beginMoveColumns");
          
              return this.__PROXY__.beginMoveColumns(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.endMoveColumns = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.endMoveColumns");
          
              return this.__PROXY__.endMoveColumns(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.beginResetModel = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.beginResetModel");
          
              return this.__PROXY__.beginResetModel(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.endResetModel = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.endResetModel");
          
              return this.__PROXY__.endResetModel(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.changePersistentIndex = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.changePersistentIndex");
          
              return this.__PROXY__.changePersistentIndex(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.changePersistentIndexList = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.changePersistentIndexList");
          
              return this.__PROXY__.changePersistentIndexList(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.persistentIndexList = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.persistentIndexList");
          
              return this.__PROXY__.persistentIndexList(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.index = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.index");
          
              return this.__PROXY__.index(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.sibling = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.sibling");
          
              return this.__PROXY__.sibling(...args);
            
        };
    
        // function 
        QAbstractTableModel.prototype.flags = function(...args) 
          
        {
          //print("JS: QAbstractTableModel.prototype.flags");
          
              return this.__PROXY__.flags(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QAbstractTableModel.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QAbstractTableModel.prototype, 'headerDataChanged', {
            get: function() { return this.__PROXY__.headerDataChanged; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractTableModel.prototype, 'headerDataChanged(Qt::Orientation,int,int)', {
              get: function() { return this.__PROXY__.headerDataChanged; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractTableModel.prototype, 'rowsInserted', {
            get: function() { return this.__PROXY__.rowsInserted; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractTableModel.prototype, 'rowsInserted(QModelIndex,int,int)', {
              get: function() { return this.__PROXY__.rowsInserted; },
              configurable: true
          });
        QAbstractTableModel.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QAbstractTableModel.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QAbstractTableModel.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractTableModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractTableModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QAbstractTableModel.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      