
      // auto generated
      //var self;

      // class constructor:
      function QPrintDialog() {
        

        // should be QPrintDialog_BaseJs.call(this, engine):
        //QPrintDialog.prototype = new QPrintDialog_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPrintDialog.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QPrintDialog);
                
            //}
          }
          else {
            qWarning("QPrintDialog.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QPrintDialog_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPrintDialog);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPrintDialog);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QPrintDialog_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPrintDialog);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPrintDialog);
  }

  
  else {
    
        print("QPrintDialog(): wrong number / type of arguments");
      
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
  
    this["accepted(QPrinter*)"] = Object.getPrototypeOf(this).accepted;
  
            }
          
        }

        

      }

      //QPrintDialog.prototype = new QPrintDialog_BaseJs(engine);
      //QPrintDialog.prototype = new QPrintDialog_Wrapper(engine);
      QPrintDialog.prototype = new Object();

      QPrintDialog.prototype.toString = function() {
          //return "QPrintDialog [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPrintDialog [JS]";
        };
      QPrintDialog.getObjectType = function() {
        return RJSType_QPrintDialog.getIdStatic();
      };

      QPrintDialog.prototype.getObjectType = function() {
        return RJSType_QPrintDialog.getIdStatic();
      };

      QPrintDialog.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPrintDialog.getIdStatic()) {
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
        
          if (t===RJSType_QAbstractPrintDialog.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: DialogCode
QPrintDialog.Rejected = QPrintDialog_Wrapper.Rejected;
QPrintDialog.Accepted = QPrintDialog_Wrapper.Accepted;

  // enum: PrintRange
QPrintDialog.AllPages = QPrintDialog_Wrapper.AllPages;
QPrintDialog.Selection = QPrintDialog_Wrapper.Selection;
QPrintDialog.PageRange = QPrintDialog_Wrapper.PageRange;
QPrintDialog.CurrentPage = QPrintDialog_Wrapper.CurrentPage;

  // enum: PrintDialogOption
QPrintDialog.PrintToFile = QPrintDialog_Wrapper.PrintToFile;
QPrintDialog.PrintSelection = QPrintDialog_Wrapper.PrintSelection;
QPrintDialog.PrintPageRange = QPrintDialog_Wrapper.PrintPageRange;
QPrintDialog.PrintShowPageSize = QPrintDialog_Wrapper.PrintShowPageSize;
QPrintDialog.PrintCollateCopies = QPrintDialog_Wrapper.PrintCollateCopies;
QPrintDialog.PrintCurrentPage = QPrintDialog_Wrapper.PrintCurrentPage;


      // functions:
      
      // function 
      QPrintDialog.prototype.actionEvent = function() 
        
      {
        //print("JS: QPrintDialog.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QPrintDialog);
  }

  
  else {
    
        print("QPrintDialog.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPrintDialog.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPrintDialog.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      