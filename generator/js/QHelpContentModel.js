
      // auto generated
      //var self;

      // class constructor:
      function QHelpContentModel() {
        

        // should be QHelpContentModel_BaseJs.call(this, engine):
        //QHelpContentModel.prototype = new QHelpContentModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHelpContentModel.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QHelpContentModel);
                
            //}
          }
          else {
            qWarning("QHelpContentModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QHelpContentModel.js: No constructor found for class QHelpContentModel");
            
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

      //QHelpContentModel.prototype = new QHelpContentModel_BaseJs(engine);
      //QHelpContentModel.prototype = new QHelpContentModel_Wrapper(engine);
      QHelpContentModel.prototype = new Object();

      QHelpContentModel.prototype.toString = function() {
          //return "QHelpContentModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHelpContentModel [JS]";
        };
      QHelpContentModel.getObjectType = function() {
        return RJSType_QHelpContentModel.getIdStatic();
      };

      QHelpContentModel.prototype.getObjectType = function() {
        return RJSType_QHelpContentModel.getIdStatic();
      };

      QHelpContentModel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHelpContentModel.getIdStatic()) {
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
QHelpContentModel.NoLayoutChangeHint = QHelpContentModel_Wrapper.NoLayoutChangeHint;
QHelpContentModel.VerticalSortHint = QHelpContentModel_Wrapper.VerticalSortHint;
QHelpContentModel.HorizontalSortHint = QHelpContentModel_Wrapper.HorizontalSortHint;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHelpContentModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHelpContentModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      