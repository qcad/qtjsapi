
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
            arguments[2].getWrappedType()===
              
                  RJSType.QSortFilterProxyModel_Type
                
            ))) {

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
        
            return RJSType.QSortFilterProxyModel_Type;
          
      };

      QSortFilterProxyModel.prototype.getObjectType = function() {
        
            return RJSType.QSortFilterProxyModel_Type;
          
      };

      QSortFilterProxyModel.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QSortFilterProxyModel_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QAbstractItemModel_Type:
          return true;
        
        case RJSType.QAbstractProxyModel_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QSortFilterProxyModel_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QAbstractItemModel_Type
            ,
            RJSType.QAbstractProxyModel_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: LayoutChangeHint
QSortFilterProxyModel.NoLayoutChangeHint = QSortFilterProxyModel_Wrapper.NoLayoutChangeHint;
QSortFilterProxyModel.VerticalSortHint = QSortFilterProxyModel_Wrapper.VerticalSortHint;
QSortFilterProxyModel.HorizontalSortHint = QSortFilterProxyModel_Wrapper.HorizontalSortHint;


      // functions:
      

      // static functions:
      

        // static function 
        QSortFilterProxyModel.tr = function() 
          
        {
          //print("JS: QSortFilterProxyModel.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QSortFilterProxyModel_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QSortFilterProxyModel);
  }

  
  else {
    
        print("QSortFilterProxyModel.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
    