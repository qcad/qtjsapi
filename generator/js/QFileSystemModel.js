
      // auto generated
      //var self;

      // class constructor:
      function QFileSystemModel() {
        

        // should be QFileSystemModel_BaseJs.call(this, engine):
        //QFileSystemModel.prototype = new QFileSystemModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QFileSystemModel.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QFileSystemModel);
            //}
          }
          else {
            qWarning("QFileSystemModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QFileSystemModel_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFileSystemModel);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFileSystemModel);
  }

  
  else {
    
        print("QFileSystemModel(): wrong number / type of arguments");
      
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
  
          }
        }
      }

      //QFileSystemModel.prototype = new QFileSystemModel_BaseJs(engine);
      //QFileSystemModel.prototype = new QFileSystemModel_Wrapper(engine);
      QFileSystemModel.prototype = new Object();

      QFileSystemModel.prototype.toString = function() {
          //return "QFileSystemModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFileSystemModel [JS]";
        };
      QFileSystemModel.getObjectType = function() {
        
            return RJSType_QFileSystemModel.getIdStatic();
          
      };

      QFileSystemModel.prototype.getObjectType = function() {
        
            return RJSType_QFileSystemModel.getIdStatic();
          
      };

      QFileSystemModel.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QFileSystemModel.getIdStatic()) {
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
QFileSystemModel.NoLayoutChangeHint = QFileSystemModel_Wrapper.NoLayoutChangeHint;
QFileSystemModel.VerticalSortHint = QFileSystemModel_Wrapper.VerticalSortHint;
QFileSystemModel.HorizontalSortHint = QFileSystemModel_Wrapper.HorizontalSortHint;

  // enum: Roles
QFileSystemModel.FileIconRole = QFileSystemModel_Wrapper.FileIconRole;
QFileSystemModel.FilePathRole = QFileSystemModel_Wrapper.FilePathRole;
QFileSystemModel.FileNameRole = QFileSystemModel_Wrapper.FileNameRole;
QFileSystemModel.FilePermissions = QFileSystemModel_Wrapper.FilePermissions;

  // enum: Option
QFileSystemModel.DontWatchForChanges = QFileSystemModel_Wrapper.DontWatchForChanges;
QFileSystemModel.DontResolveSymlinks = QFileSystemModel_Wrapper.DontResolveSymlinks;
QFileSystemModel.DontUseCustomDirectoryIcons = QFileSystemModel_Wrapper.DontUseCustomDirectoryIcons;


      // functions:
      

      // static functions:
      

        // static function 
        QFileSystemModel.tr = function() 
          
        {
          //print("JS: QFileSystemModel.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QFileSystemModel_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QFileSystemModel);
  }

  
  else {
    
        print("QFileSystemModel.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFileSystemModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFileSystemModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    