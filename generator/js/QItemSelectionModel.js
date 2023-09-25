
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
              copyProperties(this, wrapper, QItemSelectionModel);
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
          

        copyProperties(this, wrapper, QItemSelectionModel);

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
          

        copyProperties(this, wrapper, QItemSelectionModel);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
    this["selectionChanged(QItemSelection,QItemSelection)"] = Object.getPrototypeOf(this).selectionChanged;
  
    this["currentChanged(QModelIndex,QModelIndex)"] = Object.getPrototypeOf(this).currentChanged;
  
    this["currentRowChanged(QModelIndex,QModelIndex)"] = Object.getPrototypeOf(this).currentRowChanged;
  
    this["currentColumnChanged(QModelIndex,QModelIndex)"] = Object.getPrototypeOf(this).currentColumnChanged;
  
    this["modelChanged(QAbstractItemModel*)"] = Object.getPrototypeOf(this).modelChanged;
  
          }
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
      

      // static functions:
      

        // static function 
        QItemSelectionModel.tr = function() 
          
        {
          //print("JS: QItemSelectionModel.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QItemSelectionModel_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QItemSelectionModel);
  }

  
  else {
    
        print("QItemSelectionModel.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
    