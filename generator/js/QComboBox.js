
      // auto generated
      //var self;

      // class constructor:
      function QComboBox() {
        

        // should be QComboBox_BaseJs.call(this, engine):
        //QComboBox.prototype = new QComboBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QComboBox.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QComboBox);
            //}
          }
          else {
            qWarning("QComboBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QComboBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QComboBox);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QComboBox);
  }

  
  else {
    
        print("QComboBox(): wrong number / type of arguments");
      
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
  
    this["editTextChanged(QString)"] = Object.getPrototypeOf(this).editTextChanged;
  
    this["activated(int)"] = Object.getPrototypeOf(this).activated;
  
    this["textActivated(QString)"] = Object.getPrototypeOf(this).textActivated;
  
    this["highlighted(int)"] = Object.getPrototypeOf(this).highlighted;
  
    this["textHighlighted(QString)"] = Object.getPrototypeOf(this).textHighlighted;
  
    this["currentIndexChanged(int)"] = Object.getPrototypeOf(this).currentIndexChanged;
  
    this["currentTextChanged(QString)"] = Object.getPrototypeOf(this).currentTextChanged;
  
          }
        }
      }

      //QComboBox.prototype = new QComboBox_BaseJs(engine);
      //QComboBox.prototype = new QComboBox_Wrapper(engine);
      QComboBox.prototype = new Object();

      QComboBox.prototype.toString = function() {
          //return "QComboBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QComboBox [JS]";
        };
      QComboBox.getObjectType = function() {
        
            return RJSType_QComboBox.getIdStatic();
          
      };

      QComboBox.prototype.getObjectType = function() {
        
            return RJSType_QComboBox.getIdStatic();
          
      };

      QComboBox.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QComboBox.getIdStatic()) {
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
      
  // enum: InsertPolicy
QComboBox.NoInsert = QComboBox_Wrapper.NoInsert;
QComboBox.InsertAtTop = QComboBox_Wrapper.InsertAtTop;
QComboBox.InsertAtCurrent = QComboBox_Wrapper.InsertAtCurrent;
QComboBox.InsertAtBottom = QComboBox_Wrapper.InsertAtBottom;
QComboBox.InsertAfterCurrent = QComboBox_Wrapper.InsertAfterCurrent;
QComboBox.InsertBeforeCurrent = QComboBox_Wrapper.InsertBeforeCurrent;
QComboBox.InsertAlphabetically = QComboBox_Wrapper.InsertAlphabetically;

  // enum: SizeAdjustPolicy
QComboBox.AdjustToContents = QComboBox_Wrapper.AdjustToContents;
QComboBox.AdjustToContentsOnFirstShow = QComboBox_Wrapper.AdjustToContentsOnFirstShow;
QComboBox.AdjustToMinimumContentsLengthWithIcon = QComboBox_Wrapper.AdjustToMinimumContentsLengthWithIcon;


      // functions:
      
        // function 
        QComboBox.prototype.actionEvent = function() 
          
        {
          //print("JS: QComboBox.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QComboBox);
  }

  
  else {
    
        print("QComboBox.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QComboBox.tr = function() 
          
        {
          //print("JS: QComboBox.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QComboBox_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QComboBox);
  }

  
  else {
    
        print("QComboBox.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QComboBox.setTabOrder = function() 
          
        {
          //print("JS: QComboBox.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QComboBox_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QComboBox);
  }

  
  else {
    
        print("QComboBox.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QComboBox.mouseGrabber = function() 
          
        {
          //print("JS: QComboBox.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QComboBox_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QComboBox);
  }

  
  else {
    
        print("QComboBox.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QComboBox.keyboardGrabber = function() 
          
        {
          //print("JS: QComboBox.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QComboBox_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QComboBox);
  }

  
  else {
    
        print("QComboBox.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QComboBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QComboBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    