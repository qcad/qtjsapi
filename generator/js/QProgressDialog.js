
      // auto generated
      //var self;

      // class constructor:
      function QProgressDialog() {
        

        // should be QProgressDialog_BaseJs.call(this, engine):
        //QProgressDialog.prototype = new QProgressDialog_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QProgressDialog.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QProgressDialog);
            //}
          }
          else {
            qWarning("QProgressDialog.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 4 &&
          arguments.length <= 6) {
    
            self = this;
            wrapper = new QProgressDialog_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QProgressDialog);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QProgressDialog);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QProgressDialog_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QProgressDialog);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QProgressDialog);
  }

  
  else {
    
        print("QProgressDialog(): wrong number / type of arguments");
      
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

      //QProgressDialog.prototype = new QProgressDialog_BaseJs(engine);
      //QProgressDialog.prototype = new QProgressDialog_Wrapper(engine);
      QProgressDialog.prototype = new Object();

      QProgressDialog.prototype.toString = function() {
          //return "QProgressDialog [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QProgressDialog [JS]";
        };
      QProgressDialog.getObjectType = function() {
        
            return RJSType_QProgressDialog.getIdStatic();
          
      };

      QProgressDialog.prototype.getObjectType = function() {
        
            return RJSType_QProgressDialog.getIdStatic();
          
      };

      QProgressDialog.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QProgressDialog.getIdStatic()) {
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
QProgressDialog.Rejected = QProgressDialog_Wrapper.Rejected;
QProgressDialog.Accepted = QProgressDialog_Wrapper.Accepted;


      // functions:
      
        // function 
        QProgressDialog.prototype.actionEvent = function() 
          
        {
          //print("JS: QProgressDialog.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QProgressDialog);
  }

  
  else {
    
        print("QProgressDialog.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QProgressDialog.tr = function() 
          
        {
          //print("JS: QProgressDialog.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QProgressDialog_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QProgressDialog);
  }

  
  else {
    
        print("QProgressDialog.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QProgressDialog.setTabOrder = function() 
          
        {
          //print("JS: QProgressDialog.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QProgressDialog_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QProgressDialog);
  }

  
  else {
    
        print("QProgressDialog.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QProgressDialog.mouseGrabber = function() 
          
        {
          //print("JS: QProgressDialog.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QProgressDialog_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QProgressDialog);
  }

  
  else {
    
        print("QProgressDialog.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QProgressDialog.keyboardGrabber = function() 
          
        {
          //print("JS: QProgressDialog.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QProgressDialog_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QProgressDialog);
  }

  
  else {
    
        print("QProgressDialog.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QProgressDialog.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QProgressDialog.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    