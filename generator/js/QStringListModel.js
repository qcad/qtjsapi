
      // auto generated
      //var self;

      // class constructor:
      function QStringListModel() {
        

        // should be QStringListModel_BaseJs.call(this, engine):
        //QStringListModel.prototype = new QStringListModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStringListModel.getIdStatic()))) {

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
            qWarning("QStringListModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QStringListModel_Wrapper(
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

      

        //copyProperties(this, wrapper, QStringListModel);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QStringListModel_Wrapper(
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

      

        //copyProperties(this, wrapper, QStringListModel);
  }

  
  else {
    
        print("QStringListModel(): wrong number / type of arguments");
      
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

      //QStringListModel.prototype = new QStringListModel_BaseJs(engine);
      //QStringListModel.prototype = new QStringListModel_Wrapper(engine);
      QStringListModel.prototype = new Object();


      QStringListModel.prototype.toString = function() {
          //return "QStringListModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStringListModel [JS]";
        };
      QStringListModel.getObjectType = function() {
        return RJSType_QStringListModel.getIdStatic();
      };

      QStringListModel.prototype.getObjectType = function() {
        return RJSType_QStringListModel.getIdStatic();
      };

      QStringListModel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStringListModel.getIdStatic()) {
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
        

        return false;


        
      };

      // enum values:
      
  // enum: LayoutChangeHint
QStringListModel.NoLayoutChangeHint = QStringListModel_Wrapper.NoLayoutChangeHint;
QStringListModel.VerticalSortHint = QStringListModel_Wrapper.VerticalSortHint;
QStringListModel.HorizontalSortHint = QStringListModel_Wrapper.HorizontalSortHint;


      // functions:
      
        // function 
        QStringListModel.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QStringListModel.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QStringListModel.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QStringListModel.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QStringListModel.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QStringListModel.prototype.findChild = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QStringListModel.prototype.children = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QStringListModel.prototype.setParent = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QStringListModel.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QStringListModel.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QStringListModel.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QStringListModel.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QStringListModel.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QStringListModel.prototype.property = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QStringListModel.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QStringListModel.prototype.parent = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QStringListModel.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QStringListModel.prototype.hasIndex = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.hasIndex");
          
              return this.__PROXY__.hasIndex(...args);
            
        };
        
        // function 
        QStringListModel.prototype.rowCount = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.rowCount");
          
              return this.__PROXY__.rowCount(...args);
            
        };
        
        // function 
        QStringListModel.prototype.data = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
        
        // function 
        QStringListModel.prototype.setData = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
        
        // function 
        QStringListModel.prototype.headerData = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.headerData");
          
              return this.__PROXY__.headerData(...args);
            
        };
        
        // function 
        QStringListModel.prototype.setHeaderData = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.setHeaderData");
          
              return this.__PROXY__.setHeaderData(...args);
            
        };
        
        // function 
        QStringListModel.prototype.clearItemData = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.clearItemData");
          
              return this.__PROXY__.clearItemData(...args);
            
        };
        
        // function 
        QStringListModel.prototype.mimeTypes = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.mimeTypes");
          
              return this.__PROXY__.mimeTypes(...args);
            
        };
        
        // function 
        QStringListModel.prototype.supportedDropActions = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.supportedDropActions");
          
              return this.__PROXY__.supportedDropActions(...args);
            
        };
        
        // function 
        QStringListModel.prototype.supportedDragActions = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.supportedDragActions");
          
              return this.__PROXY__.supportedDragActions(...args);
            
        };
        
        // function 
        QStringListModel.prototype.insertRows = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.insertRows");
          
              return this.__PROXY__.insertRows(...args);
            
        };
        
        // function 
        QStringListModel.prototype.insertColumns = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.insertColumns");
          
              return this.__PROXY__.insertColumns(...args);
            
        };
        
        // function 
        QStringListModel.prototype.removeRows = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.removeRows");
          
              return this.__PROXY__.removeRows(...args);
            
        };
        
        // function 
        QStringListModel.prototype.removeColumns = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.removeColumns");
          
              return this.__PROXY__.removeColumns(...args);
            
        };
        
        // function 
        QStringListModel.prototype.moveRows = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.moveRows");
          
              return this.__PROXY__.moveRows(...args);
            
        };
        
        // function 
        QStringListModel.prototype.moveColumns = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.moveColumns");
          
              return this.__PROXY__.moveColumns(...args);
            
        };
        
        // function 
        QStringListModel.prototype.insertRow = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.insertRow");
          
              return this.__PROXY__.insertRow(...args);
            
        };
        
        // function 
        QStringListModel.prototype.insertColumn = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.insertColumn");
          
              return this.__PROXY__.insertColumn(...args);
            
        };
        
        // function 
        QStringListModel.prototype.removeRow = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.removeRow");
          
              return this.__PROXY__.removeRow(...args);
            
        };
        
        // function 
        QStringListModel.prototype.removeColumn = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.removeColumn");
          
              return this.__PROXY__.removeColumn(...args);
            
        };
        
        // function 
        QStringListModel.prototype.moveRow = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.moveRow");
          
              return this.__PROXY__.moveRow(...args);
            
        };
        
        // function 
        QStringListModel.prototype.moveColumn = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.moveColumn");
          
              return this.__PROXY__.moveColumn(...args);
            
        };
        
        // function 
        QStringListModel.prototype.fetchMore = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.fetchMore");
          
              return this.__PROXY__.fetchMore(...args);
            
        };
        
        // function 
        QStringListModel.prototype.canFetchMore = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.canFetchMore");
          
              return this.__PROXY__.canFetchMore(...args);
            
        };
        
        // function 
        QStringListModel.prototype.sort = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.sort");
          
              return this.__PROXY__.sort(...args);
            
        };
        
        // function 
        QStringListModel.prototype.buddy = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.buddy");
          
              return this.__PROXY__.buddy(...args);
            
        };
        
        // function 
        QStringListModel.prototype.span = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.span");
          
              return this.__PROXY__.span(...args);
            
        };
        
        // function 
        QStringListModel.prototype.roleNames = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.roleNames");
          
              return this.__PROXY__.roleNames(...args);
            
        };
        
        // function 
        QStringListModel.prototype.submit = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.submit");
          
              return this.__PROXY__.submit(...args);
            
        };
        
        // function 
        QStringListModel.prototype.revert = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.revert");
          
              return this.__PROXY__.revert(...args);
            
        };
        
        // function 
        QStringListModel.prototype.resetInternalData = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.resetInternalData");
          
              return this.__PROXY__.resetInternalData(...args);
            
        };
        
        // function 
        QStringListModel.prototype.createIndex = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.createIndex");
          
              return this.__PROXY__.createIndex(...args);
            
        };
        
        // function 
        QStringListModel.prototype.encodeData = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.encodeData");
          
              return this.__PROXY__.encodeData(...args);
            
        };
        
        // function 
        QStringListModel.prototype.decodeData = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.decodeData");
          
              return this.__PROXY__.decodeData(...args);
            
        };
        
        // function 
        QStringListModel.prototype.beginInsertRows = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.beginInsertRows");
          
              return this.__PROXY__.beginInsertRows(...args);
            
        };
        
        // function 
        QStringListModel.prototype.endInsertRows = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.endInsertRows");
          
              return this.__PROXY__.endInsertRows(...args);
            
        };
        
        // function 
        QStringListModel.prototype.beginRemoveRows = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.beginRemoveRows");
          
              return this.__PROXY__.beginRemoveRows(...args);
            
        };
        
        // function 
        QStringListModel.prototype.endRemoveRows = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.endRemoveRows");
          
              return this.__PROXY__.endRemoveRows(...args);
            
        };
        
        // function 
        QStringListModel.prototype.beginMoveRows = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.beginMoveRows");
          
              return this.__PROXY__.beginMoveRows(...args);
            
        };
        
        // function 
        QStringListModel.prototype.endMoveRows = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.endMoveRows");
          
              return this.__PROXY__.endMoveRows(...args);
            
        };
        
        // function 
        QStringListModel.prototype.beginInsertColumns = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.beginInsertColumns");
          
              return this.__PROXY__.beginInsertColumns(...args);
            
        };
        
        // function 
        QStringListModel.prototype.endInsertColumns = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.endInsertColumns");
          
              return this.__PROXY__.endInsertColumns(...args);
            
        };
        
        // function 
        QStringListModel.prototype.beginRemoveColumns = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.beginRemoveColumns");
          
              return this.__PROXY__.beginRemoveColumns(...args);
            
        };
        
        // function 
        QStringListModel.prototype.endRemoveColumns = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.endRemoveColumns");
          
              return this.__PROXY__.endRemoveColumns(...args);
            
        };
        
        // function 
        QStringListModel.prototype.beginMoveColumns = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.beginMoveColumns");
          
              return this.__PROXY__.beginMoveColumns(...args);
            
        };
        
        // function 
        QStringListModel.prototype.endMoveColumns = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.endMoveColumns");
          
              return this.__PROXY__.endMoveColumns(...args);
            
        };
        
        // function 
        QStringListModel.prototype.beginResetModel = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.beginResetModel");
          
              return this.__PROXY__.beginResetModel(...args);
            
        };
        
        // function 
        QStringListModel.prototype.endResetModel = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.endResetModel");
          
              return this.__PROXY__.endResetModel(...args);
            
        };
        
        // function 
        QStringListModel.prototype.changePersistentIndex = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.changePersistentIndex");
          
              return this.__PROXY__.changePersistentIndex(...args);
            
        };
        
        // function 
        QStringListModel.prototype.changePersistentIndexList = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.changePersistentIndexList");
          
              return this.__PROXY__.changePersistentIndexList(...args);
            
        };
        
        // function 
        QStringListModel.prototype.persistentIndexList = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.persistentIndexList");
          
              return this.__PROXY__.persistentIndexList(...args);
            
        };
        
        // function 
        QStringListModel.prototype.index = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.index");
          
              return this.__PROXY__.index(...args);
            
        };
        
        // function 
        QStringListModel.prototype.sibling = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.sibling");
          
              return this.__PROXY__.sibling(...args);
            
        };
        
        // function 
        QStringListModel.prototype.flags = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.flags");
          
              return this.__PROXY__.flags(...args);
            
        };
        
        // function 
        QStringListModel.prototype.stringList = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.stringList");
          
              return this.__PROXY__.stringList(...args);
            
        };
        
        // function 
        QStringListModel.prototype.setStringList = function(...args) 
          
        {
          //print("JS: QStringListModel.prototype.setStringList");
          
              return this.__PROXY__.setStringList(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QStringListModel.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QStringListModel.prototype, 'headerDataChanged', {
            get: function() { return this.__PROXY__.headerDataChanged; },
            configurable: true
        });
        
          Object.defineProperty(QStringListModel.prototype, 'headerDataChanged(Qt::Orientation,int,int)', {
              get: function() { return this.__PROXY__.headerDataChanged; },
              configurable: true
          });
        
        Object.defineProperty(QStringListModel.prototype, 'rowsInserted', {
            get: function() { return this.__PROXY__.rowsInserted; },
            configurable: true
        });
        
          Object.defineProperty(QStringListModel.prototype, 'rowsInserted(QModelIndex,int,int)', {
              get: function() { return this.__PROXY__.rowsInserted; },
              configurable: true
          });
        QStringListModel.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QStringListModel.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QStringListModel.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStringListModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStringListModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QStringListModel.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      