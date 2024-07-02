
      // auto generated
      //var self;

      // class constructor:
      function QColorDialog() {
        

        // should be QColorDialog_BaseJs.call(this, engine):
        //QColorDialog.prototype = new QColorDialog_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QColorDialog.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QColorDialog);
            //}
          }
          else {
            qWarning("QColorDialog.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QColorDialog_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QColorDialog);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QColorDialog_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QColorDialog);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog(): wrong number / type of arguments");
      
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
  
    this["currentColorChanged(QColor)"] = Object.getPrototypeOf(this).currentColorChanged;
  
    this["colorSelected(QColor)"] = Object.getPrototypeOf(this).colorSelected;
  
          }
        }
      }

      //QColorDialog.prototype = new QColorDialog_BaseJs(engine);
      //QColorDialog.prototype = new QColorDialog_Wrapper(engine);
      QColorDialog.prototype = new Object();

      QColorDialog.prototype.toString = function() {
          //return "QColorDialog [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QColorDialog [JS]";
        };
      QColorDialog.getObjectType = function() {
        return RJSType_QColorDialog.getIdStatic();
      };

      QColorDialog.prototype.getObjectType = function() {
        return RJSType_QColorDialog.getIdStatic();
      };

      QColorDialog.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QColorDialog.getIdStatic()) {
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
QColorDialog.Rejected = QColorDialog_Wrapper.Rejected;
QColorDialog.Accepted = QColorDialog_Wrapper.Accepted;

  // enum: ColorDialogOption
QColorDialog.ShowAlphaChannel = QColorDialog_Wrapper.ShowAlphaChannel;
QColorDialog.NoButtons = QColorDialog_Wrapper.NoButtons;
QColorDialog.DontUseNativeDialog = QColorDialog_Wrapper.DontUseNativeDialog;


      // functions:
      

      // static functions:
      

        // static function 
        QColorDialog.tr = function() 
          
        {
          //print("JS: QColorDialog.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QColorDialog_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColorDialog.setTabOrder = function() 
          
        {
          //print("JS: QColorDialog.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QColorDialog_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColorDialog.mouseGrabber = function() 
          
        {
          //print("JS: QColorDialog.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QColorDialog_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColorDialog.keyboardGrabber = function() 
          
        {
          //print("JS: QColorDialog.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QColorDialog_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColorDialog.getColor = function() 
          
        {
          //print("JS: QColorDialog.getColor");
          
      if (arguments.length >= 0 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QColorDialog_WrapperSingletonInstance.getColor(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog.getColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColorDialog.customCount = function() 
          
        {
          //print("JS: QColorDialog.customCount");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QColorDialog_WrapperSingletonInstance.customCount(
                  
                );
              

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog.customCount(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColorDialog.customColor = function() 
          
        {
          //print("JS: QColorDialog.customColor");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QColorDialog_WrapperSingletonInstance.customColor(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog.customColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColorDialog.setCustomColor = function() 
          
        {
          //print("JS: QColorDialog.setCustomColor");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QColorDialog_WrapperSingletonInstance.setCustomColor(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog.setCustomColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColorDialog.standardColor = function() 
          
        {
          //print("JS: QColorDialog.standardColor");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QColorDialog_WrapperSingletonInstance.standardColor(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog.standardColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColorDialog.setStandardColor = function() 
          
        {
          //print("JS: QColorDialog.setStandardColor");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QColorDialog_WrapperSingletonInstance.setStandardColor(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QColorDialog);
  }

  
  else {
    
        print("QColorDialog.setStandardColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QColorDialog.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QColorDialog.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    