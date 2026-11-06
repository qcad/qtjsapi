
      // auto generated
      //var self;

      // class constructor:
      function QSortFilterProxyModel() {
        

        // should be QSortFilterProxyModel_BaseJs.call(this, engine):
        //QSortFilterProxyModel.prototype = new QSortFilterProxyModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSortFilterProxyModel.getIdStatic()))) {

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
            qWarning("QSortFilterProxyModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSortFilterProxyModel_Wrapper(
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

      

        //copyProperties(this, wrapper, QSortFilterProxyModel);
  }

  
  else {
    
        print("QSortFilterProxyModel(): wrong number / type of arguments");
      
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

      //QSortFilterProxyModel.prototype = new QSortFilterProxyModel_BaseJs(engine);
      //QSortFilterProxyModel.prototype = new QSortFilterProxyModel_Wrapper(engine);
      QSortFilterProxyModel.prototype = new Object();


      QSortFilterProxyModel.prototype.toString = function() {
          //return "QSortFilterProxyModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSortFilterProxyModel [JS]";
        };
      QSortFilterProxyModel.getObjectType = function() {
        return RJSType_QSortFilterProxyModel.getIdStatic();
      };

      QSortFilterProxyModel.prototype.getObjectType = function() {
        return RJSType_QSortFilterProxyModel.getIdStatic();
      };

      QSortFilterProxyModel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSortFilterProxyModel.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractItemModel.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractProxyModel.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: LayoutChangeHint
QSortFilterProxyModel.NoLayoutChangeHint = QSortFilterProxyModel_Wrapper.NoLayoutChangeHint;
QSortFilterProxyModel.VerticalSortHint = QSortFilterProxyModel_Wrapper.VerticalSortHint;
QSortFilterProxyModel.HorizontalSortHint = QSortFilterProxyModel_Wrapper.HorizontalSortHint;


      // functions:
      
        // function 
        QSortFilterProxyModel.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.findChild = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.children = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.setParent = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.property = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.hasIndex = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.hasIndex");
          
              return this.__PROXY__.hasIndex(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.clearItemData = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.clearItemData");
          
              return this.__PROXY__.clearItemData(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.supportedDragActions = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.supportedDragActions");
          
              return this.__PROXY__.supportedDragActions(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.moveRows = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.moveRows");
          
              return this.__PROXY__.moveRows(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.moveColumns = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.moveColumns");
          
              return this.__PROXY__.moveColumns(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.insertRow = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.insertRow");
          
              return this.__PROXY__.insertRow(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.insertColumn = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.insertColumn");
          
              return this.__PROXY__.insertColumn(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.removeRow = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.removeRow");
          
              return this.__PROXY__.removeRow(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.removeColumn = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.removeColumn");
          
              return this.__PROXY__.removeColumn(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.moveRow = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.moveRow");
          
              return this.__PROXY__.moveRow(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.moveColumn = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.moveColumn");
          
              return this.__PROXY__.moveColumn(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.roleNames = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.roleNames");
          
              return this.__PROXY__.roleNames(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.submit = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.submit");
          
              return this.__PROXY__.submit(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.revert = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.revert");
          
              return this.__PROXY__.revert(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.resetInternalData = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.resetInternalData");
          
              return this.__PROXY__.resetInternalData(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.createIndex = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.createIndex");
          
              return this.__PROXY__.createIndex(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.encodeData = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.encodeData");
          
              return this.__PROXY__.encodeData(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.decodeData = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.decodeData");
          
              return this.__PROXY__.decodeData(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.beginInsertRows = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.beginInsertRows");
          
              return this.__PROXY__.beginInsertRows(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.endInsertRows = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.endInsertRows");
          
              return this.__PROXY__.endInsertRows(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.beginRemoveRows = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.beginRemoveRows");
          
              return this.__PROXY__.beginRemoveRows(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.endRemoveRows = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.endRemoveRows");
          
              return this.__PROXY__.endRemoveRows(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.beginMoveRows = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.beginMoveRows");
          
              return this.__PROXY__.beginMoveRows(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.endMoveRows = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.endMoveRows");
          
              return this.__PROXY__.endMoveRows(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.beginInsertColumns = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.beginInsertColumns");
          
              return this.__PROXY__.beginInsertColumns(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.endInsertColumns = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.endInsertColumns");
          
              return this.__PROXY__.endInsertColumns(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.beginRemoveColumns = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.beginRemoveColumns");
          
              return this.__PROXY__.beginRemoveColumns(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.endRemoveColumns = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.endRemoveColumns");
          
              return this.__PROXY__.endRemoveColumns(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.beginMoveColumns = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.beginMoveColumns");
          
              return this.__PROXY__.beginMoveColumns(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.endMoveColumns = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.endMoveColumns");
          
              return this.__PROXY__.endMoveColumns(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.beginResetModel = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.beginResetModel");
          
              return this.__PROXY__.beginResetModel(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.endResetModel = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.endResetModel");
          
              return this.__PROXY__.endResetModel(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.changePersistentIndex = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.changePersistentIndex");
          
              return this.__PROXY__.changePersistentIndex(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.changePersistentIndexList = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.changePersistentIndexList");
          
              return this.__PROXY__.changePersistentIndexList(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.persistentIndexList = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.persistentIndexList");
          
              return this.__PROXY__.persistentIndexList(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.setSourceModel = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.setSourceModel");
          
              return this.__PROXY__.setSourceModel(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.setFilterRegularExpression = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.setFilterRegularExpression");
          
              return this.__PROXY__.setFilterRegularExpression(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.setFilterWildcard = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.setFilterWildcard");
          
              return this.__PROXY__.setFilterWildcard(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.setFilterFixedString = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.setFilterFixedString");
          
              return this.__PROXY__.setFilterFixedString(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.invalidate = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.invalidate");
          
              return this.__PROXY__.invalidate(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.index = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.index");
          
              return this.__PROXY__.index(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.parent = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.sibling = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.sibling");
          
              return this.__PROXY__.sibling(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.rowCount = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.rowCount");
          
              return this.__PROXY__.rowCount(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.columnCount = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.columnCount");
          
              return this.__PROXY__.columnCount(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.hasChildren = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.hasChildren");
          
              return this.__PROXY__.hasChildren(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.data = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.setData = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.headerData = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.headerData");
          
              return this.__PROXY__.headerData(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.setHeaderData = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.setHeaderData");
          
              return this.__PROXY__.setHeaderData(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.mimeData = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.mimeData");
          
              return this.__PROXY__.mimeData(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.dropMimeData = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.dropMimeData");
          
              return this.__PROXY__.dropMimeData(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.insertRows = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.insertRows");
          
              return this.__PROXY__.insertRows(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.insertColumns = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.insertColumns");
          
              return this.__PROXY__.insertColumns(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.removeRows = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.removeRows");
          
              return this.__PROXY__.removeRows(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.removeColumns = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.removeColumns");
          
              return this.__PROXY__.removeColumns(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.fetchMore = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.fetchMore");
          
              return this.__PROXY__.fetchMore(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.canFetchMore = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.canFetchMore");
          
              return this.__PROXY__.canFetchMore(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.flags = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.flags");
          
              return this.__PROXY__.flags(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.buddy = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.buddy");
          
              return this.__PROXY__.buddy(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.match = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.match");
          
              return this.__PROXY__.match(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.span = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.span");
          
              return this.__PROXY__.span(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.sort = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.sort");
          
              return this.__PROXY__.sort(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.mimeTypes = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.mimeTypes");
          
              return this.__PROXY__.mimeTypes(...args);
            
        };
    
        // function 
        QSortFilterProxyModel.prototype.supportedDropActions = function(...args) 
          
        {
          //print("JS: QSortFilterProxyModel.prototype.supportedDropActions");
          
              return this.__PROXY__.supportedDropActions(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QSortFilterProxyModel.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QSortFilterProxyModel.prototype, 'headerDataChanged', {
            get: function() { return this.__PROXY__.headerDataChanged; },
            configurable: true
        });
        
          Object.defineProperty(QSortFilterProxyModel.prototype, 'headerDataChanged(Qt::Orientation,int,int)', {
              get: function() { return this.__PROXY__.headerDataChanged; },
              configurable: true
          });
        
        Object.defineProperty(QSortFilterProxyModel.prototype, 'rowsInserted', {
            get: function() { return this.__PROXY__.rowsInserted; },
            configurable: true
        });
        
          Object.defineProperty(QSortFilterProxyModel.prototype, 'rowsInserted(QModelIndex,int,int)', {
              get: function() { return this.__PROXY__.rowsInserted; },
              configurable: true
          });
        
        Object.defineProperty(QSortFilterProxyModel.prototype, 'dynamicSortFilterChanged', {
            get: function() { return this.__PROXY__.dynamicSortFilterChanged; },
            configurable: true
        });
        
          Object.defineProperty(QSortFilterProxyModel.prototype, 'dynamicSortFilterChanged(bool)', {
              get: function() { return this.__PROXY__.dynamicSortFilterChanged; },
              configurable: true
          });
        
        Object.defineProperty(QSortFilterProxyModel.prototype, 'filterCaseSensitivityChanged', {
            get: function() { return this.__PROXY__.filterCaseSensitivityChanged; },
            configurable: true
        });
        
          Object.defineProperty(QSortFilterProxyModel.prototype, 'filterCaseSensitivityChanged(Qt::CaseSensitivity)', {
              get: function() { return this.__PROXY__.filterCaseSensitivityChanged; },
              configurable: true
          });
        
        Object.defineProperty(QSortFilterProxyModel.prototype, 'sortCaseSensitivityChanged', {
            get: function() { return this.__PROXY__.sortCaseSensitivityChanged; },
            configurable: true
        });
        
          Object.defineProperty(QSortFilterProxyModel.prototype, 'sortCaseSensitivityChanged(Qt::CaseSensitivity)', {
              get: function() { return this.__PROXY__.sortCaseSensitivityChanged; },
              configurable: true
          });
        
        Object.defineProperty(QSortFilterProxyModel.prototype, 'sortLocaleAwareChanged', {
            get: function() { return this.__PROXY__.sortLocaleAwareChanged; },
            configurable: true
        });
        
          Object.defineProperty(QSortFilterProxyModel.prototype, 'sortLocaleAwareChanged(bool)', {
              get: function() { return this.__PROXY__.sortLocaleAwareChanged; },
              configurable: true
          });
        
        Object.defineProperty(QSortFilterProxyModel.prototype, 'sortRoleChanged', {
            get: function() { return this.__PROXY__.sortRoleChanged; },
            configurable: true
        });
        
          Object.defineProperty(QSortFilterProxyModel.prototype, 'sortRoleChanged(int)', {
              get: function() { return this.__PROXY__.sortRoleChanged; },
              configurable: true
          });
        
        Object.defineProperty(QSortFilterProxyModel.prototype, 'filterRoleChanged', {
            get: function() { return this.__PROXY__.filterRoleChanged; },
            configurable: true
        });
        
          Object.defineProperty(QSortFilterProxyModel.prototype, 'filterRoleChanged(int)', {
              get: function() { return this.__PROXY__.filterRoleChanged; },
              configurable: true
          });
        
        Object.defineProperty(QSortFilterProxyModel.prototype, 'recursiveFilteringEnabledChanged', {
            get: function() { return this.__PROXY__.recursiveFilteringEnabledChanged; },
            configurable: true
        });
        
          Object.defineProperty(QSortFilterProxyModel.prototype, 'recursiveFilteringEnabledChanged(bool)', {
              get: function() { return this.__PROXY__.recursiveFilteringEnabledChanged; },
              configurable: true
          });
        
        Object.defineProperty(QSortFilterProxyModel.prototype, 'autoAcceptChildRowsChanged', {
            get: function() { return this.__PROXY__.autoAcceptChildRowsChanged; },
            configurable: true
        });
        
          Object.defineProperty(QSortFilterProxyModel.prototype, 'autoAcceptChildRowsChanged(bool)', {
              get: function() { return this.__PROXY__.autoAcceptChildRowsChanged; },
              configurable: true
          });
        QSortFilterProxyModel.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSortFilterProxyModel.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSortFilterProxyModel.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSortFilterProxyModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSortFilterProxyModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSortFilterProxyModel.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      