
      // auto generated
      //var self;

      // class constructor:
      function QAbstractItemModel() {
        

        // should be QAbstractItemModel_BaseJs.call(this, engine):
        //QAbstractItemModel.prototype = new QAbstractItemModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractItemModel.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QAbstractItemModel);
            //}
          }
          else {
            qWarning("QAbstractItemModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QAbstractItemModel.js: No constructor found for class QAbstractItemModel");
            
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
  
          }
        }
      }

      //QAbstractItemModel.prototype = new QAbstractItemModel_BaseJs(engine);
      //QAbstractItemModel.prototype = new QAbstractItemModel_Wrapper(engine);
      QAbstractItemModel.prototype = new Object();

      QAbstractItemModel.prototype.toString = function() {
          //return "QAbstractItemModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractItemModel [JS]";
        };
      QAbstractItemModel.getObjectType = function() {
        return RJSType_QAbstractItemModel.getIdStatic();
      };

      QAbstractItemModel.prototype.getObjectType = function() {
        return RJSType_QAbstractItemModel.getIdStatic();
      };

      QAbstractItemModel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractItemModel.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: LayoutChangeHint
QAbstractItemModel.NoLayoutChangeHint = QAbstractItemModel_Wrapper.NoLayoutChangeHint;
QAbstractItemModel.VerticalSortHint = QAbstractItemModel_Wrapper.VerticalSortHint;
QAbstractItemModel.HorizontalSortHint = QAbstractItemModel_Wrapper.HorizontalSortHint;


      // functions:
      

      // static functions:
      

        // static function 
        QAbstractItemModel.tr = function() 
          
        {
          //print("JS: QAbstractItemModel.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QAbstractItemModel_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QAbstractItemModel);
  }

  
  else {
    
        print("QAbstractItemModel.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractItemModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractItemModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    