
      // auto generated
      //var self;

      // class constructor:
      function QAbstractListModel() {
        

        // should be QAbstractListModel_BaseJs.call(this, engine):
        //QAbstractListModel.prototype = new QAbstractListModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QAbstractListModel_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QAbstractListModel);
            //}
          }
          else {
            qWarning("QAbstractListModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QAbstractListModel.js: No constructor found for class QAbstractListModel");
            
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

      //QAbstractListModel.prototype = new QAbstractListModel_BaseJs(engine);
      //QAbstractListModel.prototype = new QAbstractListModel_Wrapper(engine);
      QAbstractListModel.prototype = new Object();

      QAbstractListModel.prototype.toString = function() {
          //return "QAbstractListModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractListModel [JS]";
        };
      QAbstractListModel.getObjectType = function() {
        
            return RJSType.QAbstractListModel_Type;
          
      };

      QAbstractListModel.prototype.getObjectType = function() {
        
            return RJSType.QAbstractListModel_Type;
          
      };

      QAbstractListModel.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QAbstractListModel_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QAbstractItemModel_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QAbstractListModel_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QAbstractItemModel_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: LayoutChangeHint
QAbstractListModel.NoLayoutChangeHint = QAbstractListModel_Wrapper.NoLayoutChangeHint;
QAbstractListModel.VerticalSortHint = QAbstractListModel_Wrapper.VerticalSortHint;
QAbstractListModel.HorizontalSortHint = QAbstractListModel_Wrapper.HorizontalSortHint;


      // functions:
      

      // static functions:
      

        // static function 
        QAbstractListModel.tr = function() 
          
        {
          //print("JS: QAbstractListModel.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QAbstractListModel_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QAbstractListModel);
  }

  
  else {
    
        print("QAbstractListModel.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractListModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractListModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    