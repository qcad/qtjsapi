
      // auto generated
      //var self;

      // class constructor:
      function QLineEdit() {
        

        // should be QLineEdit_BaseJs.call(this, engine):
        //QLineEdit.prototype = new QLineEdit_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QLineEdit.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QLineEdit);
            //}
          }
          else {
            qWarning("QLineEdit.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QLineEdit_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QLineEdit);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLineEdit);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QLineEdit_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QLineEdit);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLineEdit);
  }

  
  else {
    
        print("QLineEdit(): wrong number / type of arguments");
      
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
  
    this["textChanged(QString)"] = Object.getPrototypeOf(this).textChanged;
  
    this["textEdited(QString)"] = Object.getPrototypeOf(this).textEdited;
  
    this["cursorPositionChanged(int,int)"] = Object.getPrototypeOf(this).cursorPositionChanged;
  
          }
        }
      }

      //QLineEdit.prototype = new QLineEdit_BaseJs(engine);
      //QLineEdit.prototype = new QLineEdit_Wrapper(engine);
      QLineEdit.prototype = new Object();

      QLineEdit.prototype.toString = function() {
          //return "QLineEdit [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QLineEdit [JS]";
        };
      QLineEdit.getObjectType = function() {
        return RJSType_QLineEdit.getIdStatic();
      };

      QLineEdit.prototype.getObjectType = function() {
        return RJSType_QLineEdit.getIdStatic();
      };

      QLineEdit.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QLineEdit.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ActionPosition
QLineEdit.LeadingPosition = QLineEdit_Wrapper.LeadingPosition;
QLineEdit.TrailingPosition = QLineEdit_Wrapper.TrailingPosition;

  // enum: EchoMode
QLineEdit.Normal = QLineEdit_Wrapper.Normal;
QLineEdit.NoEcho = QLineEdit_Wrapper.NoEcho;
QLineEdit.Password = QLineEdit_Wrapper.Password;
QLineEdit.PasswordEchoOnEdit = QLineEdit_Wrapper.PasswordEchoOnEdit;


      // functions:
      

      // static functions:
      

        // static function 
        QLineEdit.tr = function() 
          
        {
          //print("JS: QLineEdit.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QLineEdit_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QLineEdit);
  }

  
  else {
    
        print("QLineEdit.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLineEdit.setTabOrder = function() 
          
        {
          //print("JS: QLineEdit.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QLineEdit_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QLineEdit);
  }

  
  else {
    
        print("QLineEdit.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLineEdit.mouseGrabber = function() 
          
        {
          //print("JS: QLineEdit.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QLineEdit_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QLineEdit);
  }

  
  else {
    
        print("QLineEdit.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLineEdit.keyboardGrabber = function() 
          
        {
          //print("JS: QLineEdit.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QLineEdit_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QLineEdit);
  }

  
  else {
    
        print("QLineEdit.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QLineEdit.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QLineEdit.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    