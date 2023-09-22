
      // auto generated
      //var self;

      // class constructor:
      function QAbstractPrintDialog() {
        

        // should be QAbstractPrintDialog_BaseJs.call(this, engine):
        //QAbstractPrintDialog.prototype = new QAbstractPrintDialog_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QAbstractPrintDialog.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QAbstractPrintDialog);
            //}
          }
          else {
            qWarning("QAbstractPrintDialog.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QAbstractPrintDialog_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QAbstractPrintDialog);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QAbstractPrintDialog);
  }

  
  else {
    
        print("QAbstractPrintDialog(): wrong number / type of arguments");
      
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
  
          }
        }
      }

      //QAbstractPrintDialog.prototype = new QAbstractPrintDialog_BaseJs(engine);
      //QAbstractPrintDialog.prototype = new QAbstractPrintDialog_Wrapper(engine);
      QAbstractPrintDialog.prototype = new Object();

      QAbstractPrintDialog.prototype.toString = function() {
          //return "QAbstractPrintDialog [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractPrintDialog [JS]";
        };
      QAbstractPrintDialog.getObjectType = function() {
        
            return RJSType_QAbstractPrintDialog.getIdStatic();
          
      };

      QAbstractPrintDialog.prototype.getObjectType = function() {
        
            return RJSType_QAbstractPrintDialog.getIdStatic();
          
      };

      QAbstractPrintDialog.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QAbstractPrintDialog.getIdStatic()) {
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
QAbstractPrintDialog.Rejected = QAbstractPrintDialog_Wrapper.Rejected;
QAbstractPrintDialog.Accepted = QAbstractPrintDialog_Wrapper.Accepted;

  // enum: PrintRange
QAbstractPrintDialog.AllPages = QAbstractPrintDialog_Wrapper.AllPages;
QAbstractPrintDialog.Selection = QAbstractPrintDialog_Wrapper.Selection;
QAbstractPrintDialog.PageRange = QAbstractPrintDialog_Wrapper.PageRange;
QAbstractPrintDialog.CurrentPage = QAbstractPrintDialog_Wrapper.CurrentPage;

  // enum: PrintDialogOption
QAbstractPrintDialog.PrintToFile = QAbstractPrintDialog_Wrapper.PrintToFile;
QAbstractPrintDialog.PrintSelection = QAbstractPrintDialog_Wrapper.PrintSelection;
QAbstractPrintDialog.PrintPageRange = QAbstractPrintDialog_Wrapper.PrintPageRange;
QAbstractPrintDialog.PrintShowPageSize = QAbstractPrintDialog_Wrapper.PrintShowPageSize;
QAbstractPrintDialog.PrintCollateCopies = QAbstractPrintDialog_Wrapper.PrintCollateCopies;
QAbstractPrintDialog.PrintCurrentPage = QAbstractPrintDialog_Wrapper.PrintCurrentPage;


      // functions:
      
        // function 
        QAbstractPrintDialog.prototype.actionEvent = function() 
          
        {
          //print("JS: QAbstractPrintDialog.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QAbstractPrintDialog);
  }

  
  else {
    
        print("QAbstractPrintDialog.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QAbstractPrintDialog.tr = function() 
          
        {
          //print("JS: QAbstractPrintDialog.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QAbstractPrintDialog_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QAbstractPrintDialog);
  }

  
  else {
    
        print("QAbstractPrintDialog.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractPrintDialog.setTabOrder = function() 
          
        {
          //print("JS: QAbstractPrintDialog.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QAbstractPrintDialog_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QAbstractPrintDialog);
  }

  
  else {
    
        print("QAbstractPrintDialog.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractPrintDialog.mouseGrabber = function() 
          
        {
          //print("JS: QAbstractPrintDialog.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QAbstractPrintDialog_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QAbstractPrintDialog);
  }

  
  else {
    
        print("QAbstractPrintDialog.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractPrintDialog.keyboardGrabber = function() 
          
        {
          //print("JS: QAbstractPrintDialog.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QAbstractPrintDialog_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QAbstractPrintDialog);
  }

  
  else {
    
        print("QAbstractPrintDialog.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractPrintDialog.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractPrintDialog.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    