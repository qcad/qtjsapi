
      // auto generated
      //var self;

      // class constructor:
      function QHelpIndexModel() {
        

        // should be QHelpIndexModel_BaseJs.call(this, engine):
        //QHelpIndexModel.prototype = new QHelpIndexModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHelpIndexModel.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QHelpIndexModel);
                
            //}
          }
          else {
            qWarning("QHelpIndexModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QHelpIndexModel.js: No constructor found for class QHelpIndexModel");
            
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

      //QHelpIndexModel.prototype = new QHelpIndexModel_BaseJs(engine);
      //QHelpIndexModel.prototype = new QHelpIndexModel_Wrapper(engine);
      QHelpIndexModel.prototype = new Object();

      QHelpIndexModel.prototype.toString = function() {
          //return "QHelpIndexModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHelpIndexModel [JS]";
        };
      QHelpIndexModel.getObjectType = function() {
        return RJSType_QHelpIndexModel.getIdStatic();
      };

      QHelpIndexModel.prototype.getObjectType = function() {
        return RJSType_QHelpIndexModel.getIdStatic();
      };

      QHelpIndexModel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHelpIndexModel.getIdStatic()) {
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
        
          if (t===RJSType_QStringListModel.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: LayoutChangeHint
QHelpIndexModel.NoLayoutChangeHint = QHelpIndexModel_Wrapper.NoLayoutChangeHint;
QHelpIndexModel.VerticalSortHint = QHelpIndexModel_Wrapper.VerticalSortHint;
QHelpIndexModel.HorizontalSortHint = QHelpIndexModel_Wrapper.HorizontalSortHint;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHelpIndexModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHelpIndexModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      