
      // auto generated
      //var self;

      // class constructor:
      function QAbstractListModel() {
        

        // should be QAbstractListModel_BaseJs.call(this, engine):
        //QAbstractListModel.prototype = new QAbstractListModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractListModel.getIdStatic()))) {

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
            qWarning("QAbstractListModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QAbstractListModel.js: No constructor found for class QAbstractListModel");
            
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

      //QAbstractListModel.prototype = new QAbstractListModel_BaseJs(engine);
      //QAbstractListModel.prototype = new QAbstractListModel_Wrapper(engine);
      QAbstractListModel.prototype = new Object();


      QAbstractListModel.prototype.toString = function() {
          //return "QAbstractListModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractListModel [JS]";
        };
      QAbstractListModel.getObjectType = function() {
        return RJSType_QAbstractListModel.getIdStatic();
      };

      QAbstractListModel.prototype.getObjectType = function() {
        return RJSType_QAbstractListModel.getIdStatic();
      };

      QAbstractListModel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractListModel.getIdStatic()) {
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
QAbstractListModel.NoLayoutChangeHint = QAbstractListModel_Wrapper.NoLayoutChangeHint;
QAbstractListModel.VerticalSortHint = QAbstractListModel_Wrapper.VerticalSortHint;
QAbstractListModel.HorizontalSortHint = QAbstractListModel_Wrapper.HorizontalSortHint;


      // functions:
      
        // function 
        QAbstractListModel.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.eventFilter");
          
              return this.__PROXY__.eventFilterSuper(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.findChild = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.children = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.setParent = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.property = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.parent = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.hasIndex = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.hasIndex");
          
              return this.__PROXY__.hasIndex(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.rowCount = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.rowCount");
          
              return this.__PROXY__.rowCount(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.data = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.setData = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.headerData = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.headerData");
          
              return this.__PROXY__.headerData(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.setHeaderData = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.setHeaderData");
          
              return this.__PROXY__.setHeaderData(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.clearItemData = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.clearItemData");
          
              return this.__PROXY__.clearItemData(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.mimeTypes = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.mimeTypes");
          
              return this.__PROXY__.mimeTypes(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.supportedDropActions = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.supportedDropActions");
          
              return this.__PROXY__.supportedDropActions(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.supportedDragActions = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.supportedDragActions");
          
              return this.__PROXY__.supportedDragActions(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.insertRows = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.insertRows");
          
              return this.__PROXY__.insertRows(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.insertColumns = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.insertColumns");
          
              return this.__PROXY__.insertColumns(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.removeRows = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.removeRows");
          
              return this.__PROXY__.removeRows(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.removeColumns = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.removeColumns");
          
              return this.__PROXY__.removeColumns(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.moveRows = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.moveRows");
          
              return this.__PROXY__.moveRows(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.moveColumns = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.moveColumns");
          
              return this.__PROXY__.moveColumns(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.insertRow = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.insertRow");
          
              return this.__PROXY__.insertRow(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.insertColumn = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.insertColumn");
          
              return this.__PROXY__.insertColumn(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.removeRow = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.removeRow");
          
              return this.__PROXY__.removeRow(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.removeColumn = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.removeColumn");
          
              return this.__PROXY__.removeColumn(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.moveRow = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.moveRow");
          
              return this.__PROXY__.moveRow(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.moveColumn = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.moveColumn");
          
              return this.__PROXY__.moveColumn(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.fetchMore = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.fetchMore");
          
              return this.__PROXY__.fetchMore(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.canFetchMore = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.canFetchMore");
          
              return this.__PROXY__.canFetchMore(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.sort = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.sort");
          
              return this.__PROXY__.sort(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.buddy = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.buddy");
          
              return this.__PROXY__.buddy(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.span = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.span");
          
              return this.__PROXY__.span(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.roleNames = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.roleNames");
          
              return this.__PROXY__.roleNames(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.submit = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.submit");
          
              return this.__PROXY__.submit(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.revert = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.revert");
          
              return this.__PROXY__.revert(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.resetInternalData = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.resetInternalData");
          
              return this.__PROXY__.resetInternalData(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.createIndex = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.createIndex");
          
              return this.__PROXY__.createIndex(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.encodeData = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.encodeData");
          
              return this.__PROXY__.encodeData(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.decodeData = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.decodeData");
          
              return this.__PROXY__.decodeData(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.beginInsertRows = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.beginInsertRows");
          
              return this.__PROXY__.beginInsertRows(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.endInsertRows = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.endInsertRows");
          
              return this.__PROXY__.endInsertRows(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.beginRemoveRows = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.beginRemoveRows");
          
              return this.__PROXY__.beginRemoveRows(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.endRemoveRows = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.endRemoveRows");
          
              return this.__PROXY__.endRemoveRows(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.beginMoveRows = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.beginMoveRows");
          
              return this.__PROXY__.beginMoveRows(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.endMoveRows = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.endMoveRows");
          
              return this.__PROXY__.endMoveRows(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.beginInsertColumns = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.beginInsertColumns");
          
              return this.__PROXY__.beginInsertColumns(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.endInsertColumns = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.endInsertColumns");
          
              return this.__PROXY__.endInsertColumns(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.beginRemoveColumns = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.beginRemoveColumns");
          
              return this.__PROXY__.beginRemoveColumns(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.endRemoveColumns = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.endRemoveColumns");
          
              return this.__PROXY__.endRemoveColumns(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.beginMoveColumns = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.beginMoveColumns");
          
              return this.__PROXY__.beginMoveColumns(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.endMoveColumns = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.endMoveColumns");
          
              return this.__PROXY__.endMoveColumns(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.beginResetModel = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.beginResetModel");
          
              return this.__PROXY__.beginResetModel(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.endResetModel = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.endResetModel");
          
              return this.__PROXY__.endResetModel(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.changePersistentIndex = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.changePersistentIndex");
          
              return this.__PROXY__.changePersistentIndex(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.changePersistentIndexList = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.changePersistentIndexList");
          
              return this.__PROXY__.changePersistentIndexList(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.persistentIndexList = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.persistentIndexList");
          
              return this.__PROXY__.persistentIndexList(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.index = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.index");
          
              return this.__PROXY__.index(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.sibling = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.sibling");
          
              return this.__PROXY__.sibling(...args);
            
        };
    
        // function 
        QAbstractListModel.prototype.flags = function(...args) 
          
        {
          //print("JS: QAbstractListModel.prototype.flags");
          
              return this.__PROXY__.flags(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QAbstractListModel.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QAbstractListModel.prototype, 'headerDataChanged', {
            get: function() { return this.__PROXY__.headerDataChanged; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractListModel.prototype, 'headerDataChanged(Qt::Orientation,int,int)', {
              get: function() { return this.__PROXY__.headerDataChanged; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractListModel.prototype, 'rowsInserted', {
            get: function() { return this.__PROXY__.rowsInserted; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractListModel.prototype, 'rowsInserted(QModelIndex,int,int)', {
              get: function() { return this.__PROXY__.rowsInserted; },
              configurable: true
          });
        QAbstractListModel.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QAbstractListModel.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QAbstractListModel.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractListModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractListModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QAbstractListModel.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      