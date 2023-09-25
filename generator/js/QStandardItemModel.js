
      // auto generated
      //var self;

      // class constructor:
      function QStandardItemModel() {
        

        // should be QStandardItemModel_BaseJs.call(this, engine):
        //QStandardItemModel.prototype = new QStandardItemModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStandardItemModel.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QStandardItemModel);
            //}
          }
          else {
            qWarning("QStandardItemModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QStandardItemModel_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QStandardItemModel);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStandardItemModel);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QStandardItemModel_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QStandardItemModel);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStandardItemModel);
  }

  
  else {
    
        print("QStandardItemModel(): wrong number / type of arguments");
      
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
  
    this["itemChanged(QStandardItem*)"] = Object.getPrototypeOf(this).itemChanged;
  
          }
        }
      }

      //QStandardItemModel.prototype = new QStandardItemModel_BaseJs(engine);
      //QStandardItemModel.prototype = new QStandardItemModel_Wrapper(engine);
      QStandardItemModel.prototype = new Object();

      QStandardItemModel.prototype.toString = function() {
          //return "QStandardItemModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStandardItemModel [JS]";
        };
      QStandardItemModel.getObjectType = function() {
        return RJSType_QStandardItemModel.getIdStatic();
      };

      QStandardItemModel.prototype.getObjectType = function() {
        return RJSType_QStandardItemModel.getIdStatic();
      };

      QStandardItemModel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStandardItemModel.getIdStatic()) {
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
QStandardItemModel.NoLayoutChangeHint = QStandardItemModel_Wrapper.NoLayoutChangeHint;
QStandardItemModel.VerticalSortHint = QStandardItemModel_Wrapper.VerticalSortHint;
QStandardItemModel.HorizontalSortHint = QStandardItemModel_Wrapper.HorizontalSortHint;


      // functions:
      

      // static functions:
      

        // static function 
        QStandardItemModel.tr = function() 
          
        {
          //print("JS: QStandardItemModel.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QStandardItemModel_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QStandardItemModel);
  }

  
  else {
    
        print("QStandardItemModel.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStandardItemModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStandardItemModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    