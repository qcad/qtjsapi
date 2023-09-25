
      // auto generated
      //var self;

      // class constructor:
      function QItemDelegate() {
        

        // should be QItemDelegate_BaseJs.call(this, engine):
        //QItemDelegate.prototype = new QItemDelegate_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QItemDelegate.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QItemDelegate);
            //}
          }
          else {
            qWarning("QItemDelegate.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QItemDelegate_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QItemDelegate);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QItemDelegate);
  }

  
  else {
    
        print("QItemDelegate(): wrong number / type of arguments");
      
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
            
    this["commitData(QWidget*)"] = Object.getPrototypeOf(this).commitData;
  
    this["closeEditor(QWidget*,QAbstractItemDelegate::EndEditHint)"] = Object.getPrototypeOf(this).closeEditor;
  
    this["sizeHintChanged(QModelIndex)"] = Object.getPrototypeOf(this).sizeHintChanged;
  
          }
        }
      }

      //QItemDelegate.prototype = new QItemDelegate_BaseJs(engine);
      //QItemDelegate.prototype = new QItemDelegate_Wrapper(engine);
      QItemDelegate.prototype = new Object();

      QItemDelegate.prototype.toString = function() {
          //return "QItemDelegate [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QItemDelegate [JS]";
        };
      QItemDelegate.getObjectType = function() {
        return RJSType_QItemDelegate.getIdStatic();
      };

      QItemDelegate.prototype.getObjectType = function() {
        return RJSType_QItemDelegate.getIdStatic();
      };

      QItemDelegate.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QItemDelegate.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractItemDelegate.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: EndEditHint
QItemDelegate.NoHint = QItemDelegate_Wrapper.NoHint;
QItemDelegate.EditNextItem = QItemDelegate_Wrapper.EditNextItem;
QItemDelegate.EditPreviousItem = QItemDelegate_Wrapper.EditPreviousItem;
QItemDelegate.SubmitModelCache = QItemDelegate_Wrapper.SubmitModelCache;
QItemDelegate.RevertModelCache = QItemDelegate_Wrapper.RevertModelCache;


      // functions:
      

      // static functions:
      

        // static function 
        QItemDelegate.tr = function() 
          
        {
          //print("JS: QItemDelegate.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QItemDelegate_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QItemDelegate);
  }

  
  else {
    
        print("QItemDelegate.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QItemDelegate.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QItemDelegate.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    