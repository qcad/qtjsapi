
      // auto generated
      //var self;

      // class constructor:
      function QHelpIndexModel() {
        

        // should be QHelpIndexModel_BaseJs.call(this, engine):
        //QHelpIndexModel.prototype = new QHelpIndexModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHelpIndexModel.getIdStatic()))) {

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
            qWarning("QHelpIndexModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QHelpIndexModel.js: No constructor found for class QHelpIndexModel");
            
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

      //QHelpIndexModel.prototype = new QHelpIndexModel_BaseJs(engine);
      //QHelpIndexModel.prototype = new QHelpIndexModel_Wrapper(engine);
      QHelpIndexModel.prototype = new Object();


      QHelpIndexModel.prototype.toString = function() {
          //return "QHelpIndexModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHelpIndexModel [JS]";
        };
      QHelpIndexModel.getObjectType = function() {
        return RJSType_QHelpIndexModel.getIdStatic();
      };

      QHelpIndexModel.prototype.getObjectType = function() {
        return RJSType_QHelpIndexModel.getIdStatic();
      };

      QHelpIndexModel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHelpIndexModel.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractItemModel.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractListModel.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QStringListModel.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: LayoutChangeHint
QHelpIndexModel.NoLayoutChangeHint = QHelpIndexModel_Wrapper.NoLayoutChangeHint;
QHelpIndexModel.VerticalSortHint = QHelpIndexModel_Wrapper.VerticalSortHint;
QHelpIndexModel.HorizontalSortHint = QHelpIndexModel_Wrapper.HorizontalSortHint;


      // functions:
      
        // function 
        QHelpIndexModel.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.findChild = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.children = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.setParent = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.property = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.parent = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.hasIndex = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.hasIndex");
          
              return this.__PROXY__.hasIndex(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.rowCount = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.rowCount");
          
              return this.__PROXY__.rowCount(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.data = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.setData = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.headerData = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.headerData");
          
              return this.__PROXY__.headerData(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.setHeaderData = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.setHeaderData");
          
              return this.__PROXY__.setHeaderData(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.clearItemData = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.clearItemData");
          
              return this.__PROXY__.clearItemData(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.mimeTypes = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.mimeTypes");
          
              return this.__PROXY__.mimeTypes(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.supportedDropActions = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.supportedDropActions");
          
              return this.__PROXY__.supportedDropActions(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.supportedDragActions = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.supportedDragActions");
          
              return this.__PROXY__.supportedDragActions(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.insertRows = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.insertRows");
          
              return this.__PROXY__.insertRows(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.insertColumns = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.insertColumns");
          
              return this.__PROXY__.insertColumns(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.removeRows = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.removeRows");
          
              return this.__PROXY__.removeRows(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.removeColumns = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.removeColumns");
          
              return this.__PROXY__.removeColumns(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.moveRows = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.moveRows");
          
              return this.__PROXY__.moveRows(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.moveColumns = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.moveColumns");
          
              return this.__PROXY__.moveColumns(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.insertRow = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.insertRow");
          
              return this.__PROXY__.insertRow(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.insertColumn = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.insertColumn");
          
              return this.__PROXY__.insertColumn(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.removeRow = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.removeRow");
          
              return this.__PROXY__.removeRow(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.removeColumn = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.removeColumn");
          
              return this.__PROXY__.removeColumn(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.moveRow = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.moveRow");
          
              return this.__PROXY__.moveRow(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.moveColumn = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.moveColumn");
          
              return this.__PROXY__.moveColumn(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.fetchMore = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.fetchMore");
          
              return this.__PROXY__.fetchMore(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.canFetchMore = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.canFetchMore");
          
              return this.__PROXY__.canFetchMore(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.sort = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.sort");
          
              return this.__PROXY__.sort(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.buddy = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.buddy");
          
              return this.__PROXY__.buddy(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.span = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.span");
          
              return this.__PROXY__.span(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.roleNames = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.roleNames");
          
              return this.__PROXY__.roleNames(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.submit = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.submit");
          
              return this.__PROXY__.submit(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.revert = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.revert");
          
              return this.__PROXY__.revert(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.resetInternalData = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.resetInternalData");
          
              return this.__PROXY__.resetInternalData(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.encodeData = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.encodeData");
          
              return this.__PROXY__.encodeData(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.decodeData = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.decodeData");
          
              return this.__PROXY__.decodeData(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.beginInsertRows = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.beginInsertRows");
          
              return this.__PROXY__.beginInsertRows(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.endInsertRows = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.endInsertRows");
          
              return this.__PROXY__.endInsertRows(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.beginRemoveRows = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.beginRemoveRows");
          
              return this.__PROXY__.beginRemoveRows(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.endRemoveRows = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.endRemoveRows");
          
              return this.__PROXY__.endRemoveRows(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.beginMoveRows = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.beginMoveRows");
          
              return this.__PROXY__.beginMoveRows(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.endMoveRows = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.endMoveRows");
          
              return this.__PROXY__.endMoveRows(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.beginInsertColumns = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.beginInsertColumns");
          
              return this.__PROXY__.beginInsertColumns(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.endInsertColumns = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.endInsertColumns");
          
              return this.__PROXY__.endInsertColumns(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.beginRemoveColumns = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.beginRemoveColumns");
          
              return this.__PROXY__.beginRemoveColumns(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.endRemoveColumns = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.endRemoveColumns");
          
              return this.__PROXY__.endRemoveColumns(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.beginMoveColumns = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.beginMoveColumns");
          
              return this.__PROXY__.beginMoveColumns(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.endMoveColumns = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.endMoveColumns");
          
              return this.__PROXY__.endMoveColumns(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.beginResetModel = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.beginResetModel");
          
              return this.__PROXY__.beginResetModel(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.endResetModel = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.endResetModel");
          
              return this.__PROXY__.endResetModel(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.changePersistentIndex = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.changePersistentIndex");
          
              return this.__PROXY__.changePersistentIndex(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.changePersistentIndexList = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.changePersistentIndexList");
          
              return this.__PROXY__.changePersistentIndexList(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.persistentIndexList = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.persistentIndexList");
          
              return this.__PROXY__.persistentIndexList(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.index = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.index");
          
              return this.__PROXY__.index(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.sibling = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.sibling");
          
              return this.__PROXY__.sibling(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.flags = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.flags");
          
              return this.__PROXY__.flags(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.stringList = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.stringList");
          
              return this.__PROXY__.stringList(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.setStringList = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.setStringList");
          
              return this.__PROXY__.setStringList(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.createIndexForCurrentFilter = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.createIndexForCurrentFilter");
          
              return this.__PROXY__.createIndexForCurrentFilter(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.createIndex = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.createIndex");
          
              return this.__PROXY__.createIndex(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.filter = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.filter");
          
              return this.__PROXY__.filter(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.isCreatingIndex = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.isCreatingIndex");
          
              return this.__PROXY__.isCreatingIndex(...args);
            
        };
    
        // function 
        QHelpIndexModel.prototype.helpEngine = function(...args) 
          
        {
          //print("JS: QHelpIndexModel.prototype.helpEngine");
          
              return this.__PROXY__.helpEngine(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QHelpIndexModel.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QHelpIndexModel.prototype, 'headerDataChanged', {
            get: function() { return this.__PROXY__.headerDataChanged; },
            configurable: true
        });
        
          Object.defineProperty(QHelpIndexModel.prototype, 'headerDataChanged(Qt::Orientation,int,int)', {
              get: function() { return this.__PROXY__.headerDataChanged; },
              configurable: true
          });
        
        Object.defineProperty(QHelpIndexModel.prototype, 'rowsInserted', {
            get: function() { return this.__PROXY__.rowsInserted; },
            configurable: true
        });
        
          Object.defineProperty(QHelpIndexModel.prototype, 'rowsInserted(QModelIndex,int,int)', {
              get: function() { return this.__PROXY__.rowsInserted; },
              configurable: true
          });
        
        Object.defineProperty(QHelpIndexModel.prototype, 'indexCreationStarted', {
            get: function() { return this.__PROXY__.indexCreationStarted; },
            configurable: true
        });
        
        Object.defineProperty(QHelpIndexModel.prototype, 'indexCreated', {
            get: function() { return this.__PROXY__.indexCreated; },
            configurable: true
        });
        QHelpIndexModel.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QHelpIndexModel.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QHelpIndexModel.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHelpIndexModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHelpIndexModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QHelpIndexModel.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      