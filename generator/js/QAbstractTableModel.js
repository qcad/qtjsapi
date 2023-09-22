
      // auto generated
      //var self;

      // class constructor:
      function QAbstractTableModel() {
        

        // should be QAbstractTableModel_BaseJs.call(this, engine):
        //QAbstractTableModel.prototype = new QAbstractTableModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QAbstractTableModel.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QAbstractTableModel);
            //}
          }
          else {
            qWarning("QAbstractTableModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QAbstractTableModel.js: No constructor found for class QAbstractTableModel");
            
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

      //QAbstractTableModel.prototype = new QAbstractTableModel_BaseJs(engine);
      //QAbstractTableModel.prototype = new QAbstractTableModel_Wrapper(engine);
      QAbstractTableModel.prototype = new Object();

      QAbstractTableModel.prototype.toString = function() {
          //return "QAbstractTableModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractTableModel [JS]";
        };
      QAbstractTableModel.getObjectType = function() {
        
            return RJSType_QAbstractTableModel.getIdStatic();
          
      };

      QAbstractTableModel.prototype.getObjectType = function() {
        
            return RJSType_QAbstractTableModel.getIdStatic();
          
      };

      QAbstractTableModel.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QAbstractTableModel.getIdStatic()) {
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
QAbstractTableModel.NoLayoutChangeHint = QAbstractTableModel_Wrapper.NoLayoutChangeHint;
QAbstractTableModel.VerticalSortHint = QAbstractTableModel_Wrapper.VerticalSortHint;
QAbstractTableModel.HorizontalSortHint = QAbstractTableModel_Wrapper.HorizontalSortHint;


      // functions:
      

      // static functions:
      

        // static function 
        QAbstractTableModel.tr = function() 
          
        {
          //print("JS: QAbstractTableModel.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QAbstractTableModel_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QAbstractTableModel);
  }

  
  else {
    
        print("QAbstractTableModel.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractTableModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractTableModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    