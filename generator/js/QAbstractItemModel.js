
      // auto generated
      //var self;

      // class constructor:
      function QAbstractItemModel() {
        

        // should be QAbstractItemModel_BaseJs.call(this, engine):
        //QAbstractItemModel.prototype = new QAbstractItemModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractItemModel.getIdStatic()))) {

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
            qWarning("QAbstractItemModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QAbstractItemModel.js: No constructor found for class QAbstractItemModel");
            
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

      //QAbstractItemModel.prototype = new QAbstractItemModel_BaseJs(engine);
      //QAbstractItemModel.prototype = new QAbstractItemModel_Wrapper(engine);
      QAbstractItemModel.prototype = new Object();


      QAbstractItemModel.prototype.toString = function() {
          //return "QAbstractItemModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractItemModel [JS]";
        };
      QAbstractItemModel.getObjectType = function() {
        return RJSType_QAbstractItemModel.getIdStatic();
      };

      QAbstractItemModel.prototype.getObjectType = function() {
        return RJSType_QAbstractItemModel.getIdStatic();
      };

      QAbstractItemModel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractItemModel.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: LayoutChangeHint
QAbstractItemModel.NoLayoutChangeHint = QAbstractItemModel_Wrapper.NoLayoutChangeHint;
QAbstractItemModel.VerticalSortHint = QAbstractItemModel_Wrapper.VerticalSortHint;
QAbstractItemModel.HorizontalSortHint = QAbstractItemModel_Wrapper.HorizontalSortHint;


      // functions:
      
        // function 
        QAbstractItemModel.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.eventFilter");
          
              return this.__PROXY__.eventFilterSuper(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.findChild = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.children = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.setParent = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.property = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.parent = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.hasIndex = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.hasIndex");
          
              return this.__PROXY__.hasIndex(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.index = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.index");
          
              return this.__PROXY__.index(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.sibling = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.sibling");
          
              return this.__PROXY__.sibling(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.rowCount = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.rowCount");
          
              return this.__PROXY__.rowCount(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.columnCount = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.columnCount");
          
              return this.__PROXY__.columnCount(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.hasChildren = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.hasChildren");
          
              return this.__PROXY__.hasChildren(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.data = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.setData = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.headerData = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.headerData");
          
              return this.__PROXY__.headerData(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.setHeaderData = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.setHeaderData");
          
              return this.__PROXY__.setHeaderData(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.clearItemData = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.clearItemData");
          
              return this.__PROXY__.clearItemData(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.mimeTypes = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.mimeTypes");
          
              return this.__PROXY__.mimeTypes(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.supportedDropActions = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.supportedDropActions");
          
              return this.__PROXY__.supportedDropActions(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.supportedDragActions = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.supportedDragActions");
          
              return this.__PROXY__.supportedDragActions(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.insertRows = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.insertRows");
          
              return this.__PROXY__.insertRows(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.insertColumns = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.insertColumns");
          
              return this.__PROXY__.insertColumns(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.removeRows = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.removeRows");
          
              return this.__PROXY__.removeRows(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.removeColumns = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.removeColumns");
          
              return this.__PROXY__.removeColumns(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.moveRows = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.moveRows");
          
              return this.__PROXY__.moveRows(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.moveColumns = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.moveColumns");
          
              return this.__PROXY__.moveColumns(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.insertRow = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.insertRow");
          
              return this.__PROXY__.insertRow(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.insertColumn = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.insertColumn");
          
              return this.__PROXY__.insertColumn(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.removeRow = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.removeRow");
          
              return this.__PROXY__.removeRow(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.removeColumn = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.removeColumn");
          
              return this.__PROXY__.removeColumn(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.moveRow = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.moveRow");
          
              return this.__PROXY__.moveRow(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.moveColumn = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.moveColumn");
          
              return this.__PROXY__.moveColumn(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.fetchMore = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.fetchMore");
          
              return this.__PROXY__.fetchMore(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.canFetchMore = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.canFetchMore");
          
              return this.__PROXY__.canFetchMore(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.flags = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.flags");
          
              return this.__PROXY__.flags(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.sort = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.sort");
          
              return this.__PROXY__.sort(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.buddy = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.buddy");
          
              return this.__PROXY__.buddy(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.span = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.span");
          
              return this.__PROXY__.span(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.roleNames = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.roleNames");
          
              return this.__PROXY__.roleNames(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.submit = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.submit");
          
              return this.__PROXY__.submit(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.revert = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.revert");
          
              return this.__PROXY__.revert(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.resetInternalData = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.resetInternalData");
          
              return this.__PROXY__.resetInternalData(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.createIndex = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.createIndex");
          
              return this.__PROXY__.createIndex(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.encodeData = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.encodeData");
          
              return this.__PROXY__.encodeData(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.decodeData = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.decodeData");
          
              return this.__PROXY__.decodeData(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.beginInsertRows = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.beginInsertRows");
          
              return this.__PROXY__.beginInsertRows(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.endInsertRows = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.endInsertRows");
          
              return this.__PROXY__.endInsertRows(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.beginRemoveRows = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.beginRemoveRows");
          
              return this.__PROXY__.beginRemoveRows(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.endRemoveRows = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.endRemoveRows");
          
              return this.__PROXY__.endRemoveRows(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.beginMoveRows = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.beginMoveRows");
          
              return this.__PROXY__.beginMoveRows(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.endMoveRows = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.endMoveRows");
          
              return this.__PROXY__.endMoveRows(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.beginInsertColumns = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.beginInsertColumns");
          
              return this.__PROXY__.beginInsertColumns(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.endInsertColumns = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.endInsertColumns");
          
              return this.__PROXY__.endInsertColumns(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.beginRemoveColumns = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.beginRemoveColumns");
          
              return this.__PROXY__.beginRemoveColumns(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.endRemoveColumns = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.endRemoveColumns");
          
              return this.__PROXY__.endRemoveColumns(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.beginMoveColumns = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.beginMoveColumns");
          
              return this.__PROXY__.beginMoveColumns(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.endMoveColumns = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.endMoveColumns");
          
              return this.__PROXY__.endMoveColumns(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.beginResetModel = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.beginResetModel");
          
              return this.__PROXY__.beginResetModel(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.endResetModel = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.endResetModel");
          
              return this.__PROXY__.endResetModel(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.changePersistentIndex = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.changePersistentIndex");
          
              return this.__PROXY__.changePersistentIndex(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.changePersistentIndexList = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.changePersistentIndexList");
          
              return this.__PROXY__.changePersistentIndexList(...args);
            
        };
    
        // function 
        QAbstractItemModel.prototype.persistentIndexList = function(...args) 
          
        {
          //print("JS: QAbstractItemModel.prototype.persistentIndexList");
          
              return this.__PROXY__.persistentIndexList(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QAbstractItemModel.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QAbstractItemModel.prototype, 'headerDataChanged', {
            get: function() { return this.__PROXY__.headerDataChanged; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractItemModel.prototype, 'headerDataChanged(Qt::Orientation,int,int)', {
              get: function() { return this.__PROXY__.headerDataChanged; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractItemModel.prototype, 'rowsInserted', {
            get: function() { return this.__PROXY__.rowsInserted; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractItemModel.prototype, 'rowsInserted(QModelIndex,int,int)', {
              get: function() { return this.__PROXY__.rowsInserted; },
              configurable: true
          });
        QAbstractItemModel.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QAbstractItemModel.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QAbstractItemModel.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractItemModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractItemModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QAbstractItemModel.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      