
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
              
                  copyProperties(this, wrapper, QSortFilterProxyModel);
                
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
          
            copyProperties(this, wrapper, QSortFilterProxyModel);
          

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
          
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              
    this["headerDataChanged(Qt::Orientation,int,int)"] = Object.getPrototypeOf(this).headerDataChanged;
  
    this["rowsInserted(QModelIndex,int,int)"] = Object.getPrototypeOf(this).rowsInserted;
  
    this["dynamicSortFilterChanged(bool)"] = Object.getPrototypeOf(this).dynamicSortFilterChanged;
  
    this["filterCaseSensitivityChanged(Qt::CaseSensitivity)"] = Object.getPrototypeOf(this).filterCaseSensitivityChanged;
  
    this["sortCaseSensitivityChanged(Qt::CaseSensitivity)"] = Object.getPrototypeOf(this).sortCaseSensitivityChanged;
  
    this["sortLocaleAwareChanged(bool)"] = Object.getPrototypeOf(this).sortLocaleAwareChanged;
  
    this["sortRoleChanged(int)"] = Object.getPrototypeOf(this).sortRoleChanged;
  
    this["filterRoleChanged(int)"] = Object.getPrototypeOf(this).filterRoleChanged;
  
    this["recursiveFilteringEnabledChanged(bool)"] = Object.getPrototypeOf(this).recursiveFilteringEnabledChanged;
  
    this["autoAcceptChildRowsChanged(bool)"] = Object.getPrototypeOf(this).autoAcceptChildRowsChanged;
  
            }
          
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
      

      // static functions:
      

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

      