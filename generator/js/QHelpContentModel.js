
      // auto generated
      //var self;

      // class constructor:
      function QHelpContentModel() {
        

        // should be QHelpContentModel_BaseJs.call(this, engine):
        //QHelpContentModel.prototype = new QHelpContentModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHelpContentModel.getIdStatic()))) {

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
            qWarning("QHelpContentModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QHelpContentModel.js: No constructor found for class QHelpContentModel");
            
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

      //QHelpContentModel.prototype = new QHelpContentModel_BaseJs(engine);
      //QHelpContentModel.prototype = new QHelpContentModel_Wrapper(engine);
      QHelpContentModel.prototype = new Object();


      QHelpContentModel.prototype.toString = function() {
          //return "QHelpContentModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHelpContentModel [JS]";
        };
      QHelpContentModel.getObjectType = function() {
        return RJSType_QHelpContentModel.getIdStatic();
      };

      QHelpContentModel.prototype.getObjectType = function() {
        return RJSType_QHelpContentModel.getIdStatic();
      };

      QHelpContentModel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHelpContentModel.getIdStatic()) {
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
QHelpContentModel.NoLayoutChangeHint = QHelpContentModel_Wrapper.NoLayoutChangeHint;
QHelpContentModel.VerticalSortHint = QHelpContentModel_Wrapper.VerticalSortHint;
QHelpContentModel.HorizontalSortHint = QHelpContentModel_Wrapper.HorizontalSortHint;


      // functions:
      
        // function 
        QHelpContentModel.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.findChild = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.children = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.setParent = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.property = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.hasIndex = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.hasIndex");
          
              return this.__PROXY__.hasIndex(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.sibling = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.sibling");
          
              return this.__PROXY__.sibling(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.hasChildren = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.hasChildren");
          
              return this.__PROXY__.hasChildren(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.setData = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.headerData = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.headerData");
          
              return this.__PROXY__.headerData(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.setHeaderData = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.setHeaderData");
          
              return this.__PROXY__.setHeaderData(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.clearItemData = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.clearItemData");
          
              return this.__PROXY__.clearItemData(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.mimeTypes = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.mimeTypes");
          
              return this.__PROXY__.mimeTypes(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.supportedDropActions = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.supportedDropActions");
          
              return this.__PROXY__.supportedDropActions(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.supportedDragActions = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.supportedDragActions");
          
              return this.__PROXY__.supportedDragActions(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.insertRows = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.insertRows");
          
              return this.__PROXY__.insertRows(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.insertColumns = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.insertColumns");
          
              return this.__PROXY__.insertColumns(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.removeRows = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.removeRows");
          
              return this.__PROXY__.removeRows(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.removeColumns = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.removeColumns");
          
              return this.__PROXY__.removeColumns(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.moveRows = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.moveRows");
          
              return this.__PROXY__.moveRows(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.moveColumns = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.moveColumns");
          
              return this.__PROXY__.moveColumns(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.insertRow = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.insertRow");
          
              return this.__PROXY__.insertRow(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.insertColumn = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.insertColumn");
          
              return this.__PROXY__.insertColumn(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.removeRow = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.removeRow");
          
              return this.__PROXY__.removeRow(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.removeColumn = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.removeColumn");
          
              return this.__PROXY__.removeColumn(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.moveRow = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.moveRow");
          
              return this.__PROXY__.moveRow(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.moveColumn = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.moveColumn");
          
              return this.__PROXY__.moveColumn(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.fetchMore = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.fetchMore");
          
              return this.__PROXY__.fetchMore(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.canFetchMore = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.canFetchMore");
          
              return this.__PROXY__.canFetchMore(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.flags = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.flags");
          
              return this.__PROXY__.flags(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.sort = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.sort");
          
              return this.__PROXY__.sort(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.buddy = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.buddy");
          
              return this.__PROXY__.buddy(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.span = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.span");
          
              return this.__PROXY__.span(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.roleNames = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.roleNames");
          
              return this.__PROXY__.roleNames(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.submit = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.submit");
          
              return this.__PROXY__.submit(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.revert = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.revert");
          
              return this.__PROXY__.revert(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.resetInternalData = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.resetInternalData");
          
              return this.__PROXY__.resetInternalData(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.createIndex = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.createIndex");
          
              return this.__PROXY__.createIndex(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.encodeData = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.encodeData");
          
              return this.__PROXY__.encodeData(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.decodeData = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.decodeData");
          
              return this.__PROXY__.decodeData(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.beginInsertRows = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.beginInsertRows");
          
              return this.__PROXY__.beginInsertRows(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.endInsertRows = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.endInsertRows");
          
              return this.__PROXY__.endInsertRows(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.beginRemoveRows = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.beginRemoveRows");
          
              return this.__PROXY__.beginRemoveRows(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.endRemoveRows = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.endRemoveRows");
          
              return this.__PROXY__.endRemoveRows(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.beginMoveRows = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.beginMoveRows");
          
              return this.__PROXY__.beginMoveRows(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.endMoveRows = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.endMoveRows");
          
              return this.__PROXY__.endMoveRows(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.beginInsertColumns = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.beginInsertColumns");
          
              return this.__PROXY__.beginInsertColumns(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.endInsertColumns = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.endInsertColumns");
          
              return this.__PROXY__.endInsertColumns(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.beginRemoveColumns = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.beginRemoveColumns");
          
              return this.__PROXY__.beginRemoveColumns(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.endRemoveColumns = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.endRemoveColumns");
          
              return this.__PROXY__.endRemoveColumns(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.beginMoveColumns = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.beginMoveColumns");
          
              return this.__PROXY__.beginMoveColumns(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.endMoveColumns = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.endMoveColumns");
          
              return this.__PROXY__.endMoveColumns(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.beginResetModel = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.beginResetModel");
          
              return this.__PROXY__.beginResetModel(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.endResetModel = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.endResetModel");
          
              return this.__PROXY__.endResetModel(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.changePersistentIndex = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.changePersistentIndex");
          
              return this.__PROXY__.changePersistentIndex(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.changePersistentIndexList = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.changePersistentIndexList");
          
              return this.__PROXY__.changePersistentIndexList(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.persistentIndexList = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.persistentIndexList");
          
              return this.__PROXY__.persistentIndexList(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.createContentsForCurrentFilter = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.createContentsForCurrentFilter");
          
              return this.__PROXY__.createContentsForCurrentFilter(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.createContents = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.createContents");
          
              return this.__PROXY__.createContents(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.contentItemAt = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.contentItemAt");
          
              return this.__PROXY__.contentItemAt(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.index = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.index");
          
              return this.__PROXY__.index(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.parent = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.rowCount = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.rowCount");
          
              return this.__PROXY__.rowCount(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.columnCount = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.columnCount");
          
              return this.__PROXY__.columnCount(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.data = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
        
        // function 
        QHelpContentModel.prototype.isCreatingContents = function(...args) 
          
        {
          //print("JS: QHelpContentModel.prototype.isCreatingContents");
          
              return this.__PROXY__.isCreatingContents(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QHelpContentModel.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QHelpContentModel.prototype, 'headerDataChanged', {
            get: function() { return this.__PROXY__.headerDataChanged; },
            configurable: true
        });
        
          Object.defineProperty(QHelpContentModel.prototype, 'headerDataChanged(Qt::Orientation,int,int)', {
              get: function() { return this.__PROXY__.headerDataChanged; },
              configurable: true
          });
        
        Object.defineProperty(QHelpContentModel.prototype, 'rowsInserted', {
            get: function() { return this.__PROXY__.rowsInserted; },
            configurable: true
        });
        
          Object.defineProperty(QHelpContentModel.prototype, 'rowsInserted(QModelIndex,int,int)', {
              get: function() { return this.__PROXY__.rowsInserted; },
              configurable: true
          });
        
        Object.defineProperty(QHelpContentModel.prototype, 'contentsCreationStarted', {
            get: function() { return this.__PROXY__.contentsCreationStarted; },
            configurable: true
        });
        
        Object.defineProperty(QHelpContentModel.prototype, 'contentsCreated', {
            get: function() { return this.__PROXY__.contentsCreated; },
            configurable: true
        });
        QHelpContentModel.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QHelpContentModel.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QHelpContentModel.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHelpContentModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHelpContentModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QHelpContentModel.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      