
      // auto generated
      //var self;

      // class constructor:
      function QFontComboBox() {
        

        // should be QFontComboBox_BaseJs.call(this, engine):
        //QFontComboBox.prototype = new QFontComboBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFontComboBox.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QFontComboBox);
            //}
          }
          else {
            qWarning("QFontComboBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QFontComboBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFontComboBox);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFontComboBox);
  }

  
  else {
    
        print("QFontComboBox(): wrong number / type of arguments");
      
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
  
    this["currentFontChanged(QFont)"] = Object.getPrototypeOf(this).currentFontChanged;
  
          }
        }
      }

      //QFontComboBox.prototype = new QFontComboBox_BaseJs(engine);
      //QFontComboBox.prototype = new QFontComboBox_Wrapper(engine);
      QFontComboBox.prototype = new Object();

      QFontComboBox.prototype.toString = function() {
          //return "QFontComboBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFontComboBox [JS]";
        };
      QFontComboBox.getObjectType = function() {
        return RJSType_QFontComboBox.getIdStatic();
      };

      QFontComboBox.prototype.getObjectType = function() {
        return RJSType_QFontComboBox.getIdStatic();
      };

      QFontComboBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFontComboBox.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QComboBox.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: InsertPolicy
QFontComboBox.NoInsert = QFontComboBox_Wrapper.NoInsert;
QFontComboBox.InsertAtTop = QFontComboBox_Wrapper.InsertAtTop;
QFontComboBox.InsertAtCurrent = QFontComboBox_Wrapper.InsertAtCurrent;
QFontComboBox.InsertAtBottom = QFontComboBox_Wrapper.InsertAtBottom;
QFontComboBox.InsertAfterCurrent = QFontComboBox_Wrapper.InsertAfterCurrent;
QFontComboBox.InsertBeforeCurrent = QFontComboBox_Wrapper.InsertBeforeCurrent;
QFontComboBox.InsertAlphabetically = QFontComboBox_Wrapper.InsertAlphabetically;

  // enum: SizeAdjustPolicy
QFontComboBox.AdjustToContents = QFontComboBox_Wrapper.AdjustToContents;
QFontComboBox.AdjustToContentsOnFirstShow = QFontComboBox_Wrapper.AdjustToContentsOnFirstShow;
QFontComboBox.AdjustToMinimumContentsLengthWithIcon = QFontComboBox_Wrapper.AdjustToMinimumContentsLengthWithIcon;

  // enum: FontFilter
QFontComboBox.AllFonts = QFontComboBox_Wrapper.AllFonts;
QFontComboBox.ScalableFonts = QFontComboBox_Wrapper.ScalableFonts;
QFontComboBox.NonScalableFonts = QFontComboBox_Wrapper.NonScalableFonts;
QFontComboBox.MonospacedFonts = QFontComboBox_Wrapper.MonospacedFonts;
QFontComboBox.ProportionalFonts = QFontComboBox_Wrapper.ProportionalFonts;


      // functions:
      

      // static functions:
      

        // static function 
        QFontComboBox.tr = function() 
          
        {
          //print("JS: QFontComboBox.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QFontComboBox_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QFontComboBox);
  }

  
  else {
    
        print("QFontComboBox.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontComboBox.setTabOrder = function() 
          
        {
          //print("JS: QFontComboBox.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QFontComboBox_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFontComboBox);
  }

  
  else {
    
        print("QFontComboBox.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontComboBox.mouseGrabber = function() 
          
        {
          //print("JS: QFontComboBox.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QFontComboBox_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QFontComboBox);
  }

  
  else {
    
        print("QFontComboBox.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontComboBox.keyboardGrabber = function() 
          
        {
          //print("JS: QFontComboBox.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QFontComboBox_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QFontComboBox);
  }

  
  else {
    
        print("QFontComboBox.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFontComboBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFontComboBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    