
      // auto generated
      //var self;

      // class constructor:
      function QFileSystemModel() {
        

        // should be QFileSystemModel_BaseJs.call(this, engine):
        //QFileSystemModel.prototype = new QFileSystemModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFileSystemModel.getIdStatic()))) {

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
            qWarning("QFileSystemModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QFileSystemModel_Wrapper(
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

      

        //copyProperties(this, wrapper, QFileSystemModel);
  }

  
  else {
    
        print("QFileSystemModel(): wrong number / type of arguments");
      
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

      //QFileSystemModel.prototype = new QFileSystemModel_BaseJs(engine);
      //QFileSystemModel.prototype = new QFileSystemModel_Wrapper(engine);
      QFileSystemModel.prototype = new Object();


      QFileSystemModel.prototype.toString = function() {
          //return "QFileSystemModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFileSystemModel [JS]";
        };
      QFileSystemModel.getObjectType = function() {
        return RJSType_QFileSystemModel.getIdStatic();
      };

      QFileSystemModel.prototype.getObjectType = function() {
        return RJSType_QFileSystemModel.getIdStatic();
      };

      QFileSystemModel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFileSystemModel.getIdStatic()) {
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
QFileSystemModel.NoLayoutChangeHint = QFileSystemModel_Wrapper.NoLayoutChangeHint;
QFileSystemModel.VerticalSortHint = QFileSystemModel_Wrapper.VerticalSortHint;
QFileSystemModel.HorizontalSortHint = QFileSystemModel_Wrapper.HorizontalSortHint;

  // enum: Roles
QFileSystemModel.FileIconRole = QFileSystemModel_Wrapper.FileIconRole;
QFileSystemModel.FilePathRole = QFileSystemModel_Wrapper.FilePathRole;
QFileSystemModel.FileNameRole = QFileSystemModel_Wrapper.FileNameRole;
QFileSystemModel.FilePermissions = QFileSystemModel_Wrapper.FilePermissions;

  // enum: Option
QFileSystemModel.DontWatchForChanges = QFileSystemModel_Wrapper.DontWatchForChanges;
QFileSystemModel.DontResolveSymlinks = QFileSystemModel_Wrapper.DontResolveSymlinks;
QFileSystemModel.DontUseCustomDirectoryIcons = QFileSystemModel_Wrapper.DontUseCustomDirectoryIcons;


      // functions:
      
        // function 
        QFileSystemModel.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.findChild = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.children = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.setParent = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.property = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.hasIndex = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.hasIndex");
          
              return this.__PROXY__.hasIndex(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.setHeaderData = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.setHeaderData");
          
              return this.__PROXY__.setHeaderData(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.clearItemData = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.clearItemData");
          
              return this.__PROXY__.clearItemData(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.supportedDragActions = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.supportedDragActions");
          
              return this.__PROXY__.supportedDragActions(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.insertRows = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.insertRows");
          
              return this.__PROXY__.insertRows(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.insertColumns = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.insertColumns");
          
              return this.__PROXY__.insertColumns(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.removeRows = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.removeRows");
          
              return this.__PROXY__.removeRows(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.removeColumns = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.removeColumns");
          
              return this.__PROXY__.removeColumns(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.moveRows = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.moveRows");
          
              return this.__PROXY__.moveRows(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.moveColumns = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.moveColumns");
          
              return this.__PROXY__.moveColumns(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.insertRow = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.insertRow");
          
              return this.__PROXY__.insertRow(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.insertColumn = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.insertColumn");
          
              return this.__PROXY__.insertColumn(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.removeRow = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.removeRow");
          
              return this.__PROXY__.removeRow(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.removeColumn = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.removeColumn");
          
              return this.__PROXY__.removeColumn(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.moveRow = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.moveRow");
          
              return this.__PROXY__.moveRow(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.moveColumn = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.moveColumn");
          
              return this.__PROXY__.moveColumn(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.buddy = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.buddy");
          
              return this.__PROXY__.buddy(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.span = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.span");
          
              return this.__PROXY__.span(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.roleNames = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.roleNames");
          
              return this.__PROXY__.roleNames(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.submit = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.submit");
          
              return this.__PROXY__.submit(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.revert = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.revert");
          
              return this.__PROXY__.revert(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.resetInternalData = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.resetInternalData");
          
              return this.__PROXY__.resetInternalData(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.createIndex = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.createIndex");
          
              return this.__PROXY__.createIndex(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.encodeData = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.encodeData");
          
              return this.__PROXY__.encodeData(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.decodeData = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.decodeData");
          
              return this.__PROXY__.decodeData(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.beginInsertRows = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.beginInsertRows");
          
              return this.__PROXY__.beginInsertRows(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.endInsertRows = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.endInsertRows");
          
              return this.__PROXY__.endInsertRows(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.beginRemoveRows = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.beginRemoveRows");
          
              return this.__PROXY__.beginRemoveRows(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.endRemoveRows = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.endRemoveRows");
          
              return this.__PROXY__.endRemoveRows(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.beginMoveRows = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.beginMoveRows");
          
              return this.__PROXY__.beginMoveRows(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.endMoveRows = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.endMoveRows");
          
              return this.__PROXY__.endMoveRows(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.beginInsertColumns = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.beginInsertColumns");
          
              return this.__PROXY__.beginInsertColumns(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.endInsertColumns = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.endInsertColumns");
          
              return this.__PROXY__.endInsertColumns(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.beginRemoveColumns = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.beginRemoveColumns");
          
              return this.__PROXY__.beginRemoveColumns(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.endRemoveColumns = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.endRemoveColumns");
          
              return this.__PROXY__.endRemoveColumns(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.beginMoveColumns = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.beginMoveColumns");
          
              return this.__PROXY__.beginMoveColumns(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.endMoveColumns = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.endMoveColumns");
          
              return this.__PROXY__.endMoveColumns(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.beginResetModel = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.beginResetModel");
          
              return this.__PROXY__.beginResetModel(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.endResetModel = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.endResetModel");
          
              return this.__PROXY__.endResetModel(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.changePersistentIndex = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.changePersistentIndex");
          
              return this.__PROXY__.changePersistentIndex(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.changePersistentIndexList = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.changePersistentIndexList");
          
              return this.__PROXY__.changePersistentIndexList(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.persistentIndexList = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.persistentIndexList");
          
              return this.__PROXY__.persistentIndexList(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.rootPathChanged = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.rootPathChanged");
          
              return this.__PROXY__.rootPathChanged(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.fileRenamed = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.fileRenamed");
          
              return this.__PROXY__.fileRenamed(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.directoryLoaded = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.directoryLoaded");
          
              return this.__PROXY__.directoryLoaded(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.index = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.index");
          
              return this.__PROXY__.index(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.parent = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.sibling = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.sibling");
          
              return this.__PROXY__.sibling(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.hasChildren = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.hasChildren");
          
              return this.__PROXY__.hasChildren(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.canFetchMore = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.canFetchMore");
          
              return this.__PROXY__.canFetchMore(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.fetchMore = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.fetchMore");
          
              return this.__PROXY__.fetchMore(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.rowCount = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.rowCount");
          
              return this.__PROXY__.rowCount(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.columnCount = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.columnCount");
          
              return this.__PROXY__.columnCount(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.myComputer = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.myComputer");
          
              return this.__PROXY__.myComputer(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.data = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.setData = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.headerData = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.headerData");
          
              return this.__PROXY__.headerData(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.flags = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.flags");
          
              return this.__PROXY__.flags(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.sort = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.sort");
          
              return this.__PROXY__.sort(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.mimeTypes = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.mimeTypes");
          
              return this.__PROXY__.mimeTypes(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.dropMimeData = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.dropMimeData");
          
              return this.__PROXY__.dropMimeData(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.supportedDropActions = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.supportedDropActions");
          
              return this.__PROXY__.supportedDropActions(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.setRootPath = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.setRootPath");
          
              return this.__PROXY__.setRootPath(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.rootPath = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.rootPath");
          
              return this.__PROXY__.rootPath(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.rootDirectory = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.rootDirectory");
          
              return this.__PROXY__.rootDirectory(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.setIconProvider = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.setIconProvider");
          
              return this.__PROXY__.setIconProvider(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.iconProvider = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.iconProvider");
          
              return this.__PROXY__.iconProvider(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.setFilter = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.setFilter");
          
              return this.__PROXY__.setFilter(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.filter = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.filter");
          
              return this.__PROXY__.filter(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.setResolveSymlinks = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.setResolveSymlinks");
          
              return this.__PROXY__.setResolveSymlinks(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.resolveSymlinks = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.resolveSymlinks");
          
              return this.__PROXY__.resolveSymlinks(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.setReadOnly = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.setReadOnly");
          
              return this.__PROXY__.setReadOnly(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.isReadOnly = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.isReadOnly");
          
              return this.__PROXY__.isReadOnly(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.setNameFilterDisables = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.setNameFilterDisables");
          
              return this.__PROXY__.setNameFilterDisables(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.setNameFilters = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.setNameFilters");
          
              return this.__PROXY__.setNameFilters(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.nameFilters = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.nameFilters");
          
              return this.__PROXY__.nameFilters(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.setOption = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.setOption");
          
              return this.__PROXY__.setOption(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.testOption = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.testOption");
          
              return this.__PROXY__.testOption(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.setOptions = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.setOptions");
          
              return this.__PROXY__.setOptions(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.filePath = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.filePath");
          
              return this.__PROXY__.filePath(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.isDir = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.isDir");
          
              return this.__PROXY__.isDir(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.size = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.type = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.lastModified = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.lastModified");
          
              return this.__PROXY__.lastModified(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.mkdir = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.mkdir");
          
              return this.__PROXY__.mkdir(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.rmdir = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.rmdir");
          
              return this.__PROXY__.rmdir(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.fileName = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.fileName");
          
              return this.__PROXY__.fileName(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.fileIcon = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.fileIcon");
          
              return this.__PROXY__.fileIcon(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.permissions = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.permissions");
          
              return this.__PROXY__.permissions(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.fileInfo = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.fileInfo");
          
              return this.__PROXY__.fileInfo(...args);
            
        };
        
        // function 
        QFileSystemModel.prototype.remove = function(...args) 
          
        {
          //print("JS: QFileSystemModel.prototype.remove");
          
              return this.__PROXY__.remove(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QFileSystemModel.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileSystemModel.prototype, 'readOnly', {
              get: function() {
                  
                      return this.__PROXY__.isReadOnly();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setReadOnly(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileSystemModel.prototype, 'nameFilterDisables', {
              get: function() {
                  
                      return this.__PROXY__.nameFilterDisables;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setNameFilterDisables(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFileSystemModel.prototype, 'options', {
              get: function() {
                  
                      return this.__PROXY__.options;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOptions(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QFileSystemModel.prototype, 'headerDataChanged', {
            get: function() { return this.__PROXY__.headerDataChanged; },
            configurable: true
        });
        
          Object.defineProperty(QFileSystemModel.prototype, 'headerDataChanged(Qt::Orientation,int,int)', {
              get: function() { return this.__PROXY__.headerDataChanged; },
              configurable: true
          });
        
        Object.defineProperty(QFileSystemModel.prototype, 'rowsInserted', {
            get: function() { return this.__PROXY__.rowsInserted; },
            configurable: true
        });
        
          Object.defineProperty(QFileSystemModel.prototype, 'rowsInserted(QModelIndex,int,int)', {
              get: function() { return this.__PROXY__.rowsInserted; },
              configurable: true
          });
        QFileSystemModel.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QFileSystemModel.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QFileSystemModel.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFileSystemModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFileSystemModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QFileSystemModel.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      