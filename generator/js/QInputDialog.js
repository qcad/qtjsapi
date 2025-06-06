
      // auto generated
      //var self;

      // class constructor:
      function QInputDialog() {
        

        // should be QInputDialog_BaseJs.call(this, engine):
        //QInputDialog.prototype = new QInputDialog_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QInputDialog.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QInputDialog);
                
            //}
          }
          else {
            qWarning("QInputDialog.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QInputDialog_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QInputDialog);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QInputDialog);
  }

  
  else {
    
        print("QInputDialog(): wrong number / type of arguments");
      
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
  
    this["textValueChanged(QString)"] = Object.getPrototypeOf(this).textValueChanged;
  
    this["textValueSelected(QString)"] = Object.getPrototypeOf(this).textValueSelected;
  
    this["intValueChanged(int)"] = Object.getPrototypeOf(this).intValueChanged;
  
    this["intValueSelected(int)"] = Object.getPrototypeOf(this).intValueSelected;
  
    this["doubleValueChanged(double)"] = Object.getPrototypeOf(this).doubleValueChanged;
  
    this["doubleValueSelected(double)"] = Object.getPrototypeOf(this).doubleValueSelected;
  
            }
          
        }

        

      }

      //QInputDialog.prototype = new QInputDialog_BaseJs(engine);
      //QInputDialog.prototype = new QInputDialog_Wrapper(engine);
      QInputDialog.prototype = new Object();

      QInputDialog.prototype.toString = function() {
          //return "QInputDialog [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QInputDialog [JS]";
        };
      QInputDialog.getObjectType = function() {
        return RJSType_QInputDialog.getIdStatic();
      };

      QInputDialog.prototype.getObjectType = function() {
        return RJSType_QInputDialog.getIdStatic();
      };

      QInputDialog.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QInputDialog.getIdStatic()) {
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
QInputDialog.Rejected = QInputDialog_Wrapper.Rejected;
QInputDialog.Accepted = QInputDialog_Wrapper.Accepted;

  // enum: InputDialogOption
QInputDialog.NoButtons = QInputDialog_Wrapper.NoButtons;
QInputDialog.UseListViewForComboBoxItems = QInputDialog_Wrapper.UseListViewForComboBoxItems;
QInputDialog.UsePlainTextEditForTextInput = QInputDialog_Wrapper.UsePlainTextEditForTextInput;

  // enum: InputMode
QInputDialog.TextInput = QInputDialog_Wrapper.TextInput;
QInputDialog.IntInput = QInputDialog_Wrapper.IntInput;
QInputDialog.DoubleInput = QInputDialog_Wrapper.DoubleInput;


      // functions:
      

      // static functions:
      

        // static function 
        QInputDialog.getMultiLineText = function() 
          
        {
          //print("JS: QInputDialog.getMultiLineText");
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QInputDialog_WrapperSingletonInstance.getMultiLineText(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QInputDialog);
  }

  
  else {
    
        print("QInputDialog.getMultiLineText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QInputDialog.getItem = function() 
          
        {
          //print("JS: QInputDialog.getItem");
          
      if (arguments.length >= 4 &&
          arguments.length <= 6) {
    
                // calling static wrapper:
                return QInputDialog_WrapperSingletonInstance.getItem(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, QInputDialog);
  }

  
  else {
    
        print("QInputDialog.getItem(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QInputDialog.getInt = function() 
          
        {
          //print("JS: QInputDialog.getInt");
          
      if (arguments.length >= 3 &&
          arguments.length <= 7) {
    
                // calling static wrapper:
                return QInputDialog_WrapperSingletonInstance.getInt(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]
                );
              

        //copyProperties(this, wrapper, QInputDialog);
  }

  
  else {
    
        print("QInputDialog.getInt(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QInputDialog.getDouble = function() 
          
        {
          //print("JS: QInputDialog.getDouble");
          
      if (arguments.length >= 3 &&
          arguments.length <= 7) {
    
                // calling static wrapper:
                return QInputDialog_WrapperSingletonInstance.getDouble(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]
                );
              

        //copyProperties(this, wrapper, QInputDialog);
  }

  
  else {
    
        print("QInputDialog.getDouble(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QInputDialog.getText = function() 
          
        {
          //print("JS: QInputDialog.getText");
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return QInputDialog_WrapperSingletonInstance.getText(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QInputDialog);
  }

  
  else {
    
        print("QInputDialog.getText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QInputDialog.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QInputDialog.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      