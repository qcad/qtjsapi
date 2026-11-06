
      // auto generated
      //var self;

      // class constructor:
      function QItemSelectionModel() {
        

        // should be QItemSelectionModel_BaseJs.call(this, engine):
        //QItemSelectionModel.prototype = new QItemSelectionModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QItemSelectionModel.getIdStatic()))) {

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
            qWarning("QItemSelectionModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QItemSelectionModel_Wrapper(
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

      

        //copyProperties(this, wrapper, QItemSelectionModel);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QItemSelectionModel_Wrapper(
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

      

        //copyProperties(this, wrapper, QItemSelectionModel);
  }

  
  else {
    
        print("QItemSelectionModel(): wrong number / type of arguments");
      
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

      //QItemSelectionModel.prototype = new QItemSelectionModel_BaseJs(engine);
      //QItemSelectionModel.prototype = new QItemSelectionModel_Wrapper(engine);
      QItemSelectionModel.prototype = new Object();


      QItemSelectionModel.prototype.toString = function() {
          //return "QItemSelectionModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QItemSelectionModel [JS]";
        };
      QItemSelectionModel.getObjectType = function() {
        return RJSType_QItemSelectionModel.getIdStatic();
      };

      QItemSelectionModel.prototype.getObjectType = function() {
        return RJSType_QItemSelectionModel.getIdStatic();
      };

      QItemSelectionModel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QItemSelectionModel.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: SelectionFlag
QItemSelectionModel.NoUpdate = QItemSelectionModel_Wrapper.NoUpdate;
QItemSelectionModel.Clear = QItemSelectionModel_Wrapper.Clear;
QItemSelectionModel.Select = QItemSelectionModel_Wrapper.Select;
QItemSelectionModel.Deselect = QItemSelectionModel_Wrapper.Deselect;
QItemSelectionModel.Toggle = QItemSelectionModel_Wrapper.Toggle;
QItemSelectionModel.Current = QItemSelectionModel_Wrapper.Current;
QItemSelectionModel.Rows = QItemSelectionModel_Wrapper.Rows;
QItemSelectionModel.Columns = QItemSelectionModel_Wrapper.Columns;
QItemSelectionModel.SelectCurrent = QItemSelectionModel_Wrapper.SelectCurrent;
QItemSelectionModel.ToggleCurrent = QItemSelectionModel_Wrapper.ToggleCurrent;
QItemSelectionModel.ClearAndSelect = QItemSelectionModel_Wrapper.ClearAndSelect;


      // functions:
      
        // function 
        QItemSelectionModel.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.findChild = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.children = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.setParent = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.property = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.parent = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.currentIndex = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.currentIndex");
          
              return this.__PROXY__.currentIndex(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.isSelected = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.isSelected");
          
              return this.__PROXY__.isSelected(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.isRowSelected = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.isRowSelected");
          
              return this.__PROXY__.isRowSelected(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.isColumnSelected = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.isColumnSelected");
          
              return this.__PROXY__.isColumnSelected(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.rowIntersectsSelection = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.rowIntersectsSelection");
          
              return this.__PROXY__.rowIntersectsSelection(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.columnIntersectsSelection = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.columnIntersectsSelection");
          
              return this.__PROXY__.columnIntersectsSelection(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.hasSelection = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.hasSelection");
          
              return this.__PROXY__.hasSelection(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.selectedRows = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.selectedRows");
          
              return this.__PROXY__.selectedRows(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.selectedColumns = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.selectedColumns");
          
              return this.__PROXY__.selectedColumns(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.selection = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.selection");
          
              return this.__PROXY__.selection(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.model = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.setModel = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.setModel");
          
              return this.__PROXY__.setModel(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.select = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.select");
          
              return this.__PROXY__.select(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.clear = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.reset = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.clearSelection");
          
              return this.__PROXY__.clearSelection(...args);
            
        };
        
        // function 
        QItemSelectionModel.prototype.clearCurrentIndex = function(...args) 
          
        {
          //print("JS: QItemSelectionModel.prototype.clearCurrentIndex");
          
              return this.__PROXY__.clearCurrentIndex(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QItemSelectionModel.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QItemSelectionModel.prototype, 'selectedIndexes', {
              get: function() {
                  
                      return this.__PROXY__.selectedIndexes;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QItemSelectionModel.prototype, 'selectionChanged', {
            get: function() { return this.__PROXY__.selectionChanged; },
            configurable: true
        });
        
          Object.defineProperty(QItemSelectionModel.prototype, 'selectionChanged(QItemSelection,QItemSelection)', {
              get: function() { return this.__PROXY__.selectionChanged; },
              configurable: true
          });
        
        Object.defineProperty(QItemSelectionModel.prototype, 'currentChanged', {
            get: function() { return this.__PROXY__.currentChanged; },
            configurable: true
        });
        
          Object.defineProperty(QItemSelectionModel.prototype, 'currentChanged(QModelIndex,QModelIndex)', {
              get: function() { return this.__PROXY__.currentChanged; },
              configurable: true
          });
        
        Object.defineProperty(QItemSelectionModel.prototype, 'currentRowChanged', {
            get: function() { return this.__PROXY__.currentRowChanged; },
            configurable: true
        });
        
          Object.defineProperty(QItemSelectionModel.prototype, 'currentRowChanged(QModelIndex,QModelIndex)', {
              get: function() { return this.__PROXY__.currentRowChanged; },
              configurable: true
          });
        
        Object.defineProperty(QItemSelectionModel.prototype, 'currentColumnChanged', {
            get: function() { return this.__PROXY__.currentColumnChanged; },
            configurable: true
        });
        
          Object.defineProperty(QItemSelectionModel.prototype, 'currentColumnChanged(QModelIndex,QModelIndex)', {
              get: function() { return this.__PROXY__.currentColumnChanged; },
              configurable: true
          });
        
        Object.defineProperty(QItemSelectionModel.prototype, 'modelChanged', {
            get: function() { return this.__PROXY__.modelChanged; },
            configurable: true
        });
        
          Object.defineProperty(QItemSelectionModel.prototype, 'modelChanged(QAbstractItemModel*)', {
              get: function() { return this.__PROXY__.modelChanged; },
              configurable: true
          });
        QItemSelectionModel.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QItemSelectionModel.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QItemSelectionModel.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QItemSelectionModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QItemSelectionModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QItemSelectionModel.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      