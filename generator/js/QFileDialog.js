
      // auto generated
      //var self;

      // class constructor:
      function QFileDialog() {
        

        // should be QFileDialog_BaseJs.call(this, engine):
        //QFileDialog.prototype = new QFileDialog_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFileDialog.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QFileDialog);
            //}
          }
          else {
            qWarning("QFileDialog.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QFileDialog_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFileDialog);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QFileDialog_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFileDialog);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog(): wrong number / type of arguments");
      
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
            
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["finished(int)"] = Object.getPrototypeOf(this).finished;
  
    this["fileSelected(QString)"] = Object.getPrototypeOf(this).fileSelected;
  
    this["filesSelected(QStringList)"] = Object.getPrototypeOf(this).filesSelected;
  
    this["currentChanged(QString)"] = Object.getPrototypeOf(this).currentChanged;
  
    this["directoryEntered(QString)"] = Object.getPrototypeOf(this).directoryEntered;
  
    this["urlSelected(QUrl)"] = Object.getPrototypeOf(this).urlSelected;
  
    this["urlsSelected(QList<QUrl>)"] = Object.getPrototypeOf(this).urlsSelected;
  
    this["currentUrlChanged(QUrl)"] = Object.getPrototypeOf(this).currentUrlChanged;
  
    this["directoryUrlEntered(QUrl)"] = Object.getPrototypeOf(this).directoryUrlEntered;
  
    this["filterSelected(QString)"] = Object.getPrototypeOf(this).filterSelected;
  
          }
        }
      }

      //QFileDialog.prototype = new QFileDialog_BaseJs(engine);
      //QFileDialog.prototype = new QFileDialog_Wrapper(engine);
      QFileDialog.prototype = new Object();

      QFileDialog.prototype.toString = function() {
          //return "QFileDialog [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFileDialog [JS]";
        };
      QFileDialog.getObjectType = function() {
        return RJSType_QFileDialog.getIdStatic();
      };

      QFileDialog.prototype.getObjectType = function() {
        return RJSType_QFileDialog.getIdStatic();
      };

      QFileDialog.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFileDialog.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QDialog.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: DialogCode
QFileDialog.Rejected = QFileDialog_Wrapper.Rejected;
QFileDialog.Accepted = QFileDialog_Wrapper.Accepted;

  // enum: ViewMode
QFileDialog.Detail = QFileDialog_Wrapper.Detail;
QFileDialog.List = QFileDialog_Wrapper.List;

  // enum: FileMode
QFileDialog.AnyFile = QFileDialog_Wrapper.AnyFile;
QFileDialog.ExistingFile = QFileDialog_Wrapper.ExistingFile;
QFileDialog.Directory = QFileDialog_Wrapper.Directory;
QFileDialog.ExistingFiles = QFileDialog_Wrapper.ExistingFiles;

  // enum: AcceptMode
QFileDialog.AcceptOpen = QFileDialog_Wrapper.AcceptOpen;
QFileDialog.AcceptSave = QFileDialog_Wrapper.AcceptSave;

  // enum: DialogLabel
QFileDialog.LookIn = QFileDialog_Wrapper.LookIn;
QFileDialog.FileName = QFileDialog_Wrapper.FileName;
QFileDialog.FileType = QFileDialog_Wrapper.FileType;
QFileDialog.Accept = QFileDialog_Wrapper.Accept;
QFileDialog.Reject = QFileDialog_Wrapper.Reject;

  // enum: Option
QFileDialog.ShowDirsOnly = QFileDialog_Wrapper.ShowDirsOnly;
QFileDialog.DontResolveSymlinks = QFileDialog_Wrapper.DontResolveSymlinks;
QFileDialog.DontConfirmOverwrite = QFileDialog_Wrapper.DontConfirmOverwrite;
QFileDialog.DontUseNativeDialog = QFileDialog_Wrapper.DontUseNativeDialog;
QFileDialog.ReadOnly = QFileDialog_Wrapper.ReadOnly;
QFileDialog.HideNameFilterDetails = QFileDialog_Wrapper.HideNameFilterDetails;
QFileDialog.DontUseCustomDirectoryIcons = QFileDialog_Wrapper.DontUseCustomDirectoryIcons;


      // functions:
      
        // function 
        QFileDialog.prototype.actionEvent = function() 
          
        {
          //print("JS: QFileDialog.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QFileDialog.tr = function() 
          
        {
          //print("JS: QFileDialog.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.setTabOrder = function() 
          
        {
          //print("JS: QFileDialog.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.mouseGrabber = function() 
          
        {
          //print("JS: QFileDialog.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.keyboardGrabber = function() 
          
        {
          //print("JS: QFileDialog.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.getOpenFileName = function() 
          
        {
          //print("JS: QFileDialog.getOpenFileName");
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.getOpenFileName(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.getOpenFileName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.getOpenFileUrl = function() 
          
        {
          //print("JS: QFileDialog.getOpenFileUrl");
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.getOpenFileUrl(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.getOpenFileUrl(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.getSaveFileName = function() 
          
        {
          //print("JS: QFileDialog.getSaveFileName");
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.getSaveFileName(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.getSaveFileName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.getSaveFileUrl = function() 
          
        {
          //print("JS: QFileDialog.getSaveFileUrl");
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.getSaveFileUrl(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.getSaveFileUrl(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.getExistingDirectory = function() 
          
        {
          //print("JS: QFileDialog.getExistingDirectory");
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.getExistingDirectory(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.getExistingDirectory(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.getExistingDirectoryUrl = function() 
          
        {
          //print("JS: QFileDialog.getExistingDirectoryUrl");
          
      if (arguments.length >= 0 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.getExistingDirectoryUrl(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.getExistingDirectoryUrl(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.getOpenFileNames = function() 
          
        {
          //print("JS: QFileDialog.getOpenFileNames");
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.getOpenFileNames(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.getOpenFileNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.getOpenFileUrls = function() 
          
        {
          //print("JS: QFileDialog.getOpenFileUrls");
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.getOpenFileUrls(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.getOpenFileUrls(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFileDialog.saveFileContent = function() 
          
        {
          //print("JS: QFileDialog.saveFileContent");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QFileDialog_WrapperSingletonInstance.saveFileContent(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFileDialog);
  }

  
  else {
    
        print("QFileDialog.saveFileContent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFileDialog.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFileDialog.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    