
      // auto generated
      //var self;

      // class constructor:
      function QAbstractItemDelegate() {
        

        // should be QAbstractItemDelegate_BaseJs.call(this, engine):
        //QAbstractItemDelegate.prototype = new QAbstractItemDelegate_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractItemDelegate.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QAbstractItemDelegate);
            //}
          }
          else {
            qWarning("QAbstractItemDelegate.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QAbstractItemDelegate.js: No constructor found for class QAbstractItemDelegate");
            
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
            
    this["commitData(QWidget*)"] = Object.getPrototypeOf(this).commitData;
  
    this["closeEditor(QWidget*,QAbstractItemDelegate::EndEditHint)"] = Object.getPrototypeOf(this).closeEditor;
  
    this["sizeHintChanged(QModelIndex)"] = Object.getPrototypeOf(this).sizeHintChanged;
  
          }
        }
      }

      //QAbstractItemDelegate.prototype = new QAbstractItemDelegate_BaseJs(engine);
      //QAbstractItemDelegate.prototype = new QAbstractItemDelegate_Wrapper(engine);
      QAbstractItemDelegate.prototype = new Object();

      QAbstractItemDelegate.prototype.toString = function() {
          //return "QAbstractItemDelegate [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractItemDelegate [JS]";
        };
      QAbstractItemDelegate.getObjectType = function() {
        return RJSType_QAbstractItemDelegate.getIdStatic();
      };

      QAbstractItemDelegate.prototype.getObjectType = function() {
        return RJSType_QAbstractItemDelegate.getIdStatic();
      };

      QAbstractItemDelegate.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractItemDelegate.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: EndEditHint
QAbstractItemDelegate.NoHint = QAbstractItemDelegate_Wrapper.NoHint;
QAbstractItemDelegate.EditNextItem = QAbstractItemDelegate_Wrapper.EditNextItem;
QAbstractItemDelegate.EditPreviousItem = QAbstractItemDelegate_Wrapper.EditPreviousItem;
QAbstractItemDelegate.SubmitModelCache = QAbstractItemDelegate_Wrapper.SubmitModelCache;
QAbstractItemDelegate.RevertModelCache = QAbstractItemDelegate_Wrapper.RevertModelCache;


      // functions:
      

      // static functions:
      

        // static function 
        QAbstractItemDelegate.tr = function() 
          
        {
          //print("JS: QAbstractItemDelegate.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QAbstractItemDelegate_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QAbstractItemDelegate);
  }

  
  else {
    
        print("QAbstractItemDelegate.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractItemDelegate.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractItemDelegate.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    