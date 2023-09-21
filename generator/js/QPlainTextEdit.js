
      // auto generated
      //var self;

      // class constructor:
      function QPlainTextEdit() {
        

        // should be QPlainTextEdit_BaseJs.call(this, engine):
        //QPlainTextEdit.prototype = new QPlainTextEdit_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QPlainTextEdit_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QPlainTextEdit);
            //}
          }
          else {
            qWarning("QPlainTextEdit.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QPlainTextEdit_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPlainTextEdit);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPlainTextEdit);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QPlainTextEdit_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPlainTextEdit);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPlainTextEdit);
  }

  
  else {
    
        print("QPlainTextEdit(): wrong number / type of arguments");
      
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
  
    this["undoAvailable(bool)"] = Object.getPrototypeOf(this).undoAvailable;
  
    this["redoAvailable(bool)"] = Object.getPrototypeOf(this).redoAvailable;
  
    this["copyAvailable(bool)"] = Object.getPrototypeOf(this).copyAvailable;
  
    this["updateRequest(QRect,int)"] = Object.getPrototypeOf(this).updateRequest;
  
    this["blockCountChanged(int)"] = Object.getPrototypeOf(this).blockCountChanged;
  
    this["modificationChanged(bool)"] = Object.getPrototypeOf(this).modificationChanged;
  
          }
        }
      }

      //QPlainTextEdit.prototype = new QPlainTextEdit_BaseJs(engine);
      //QPlainTextEdit.prototype = new QPlainTextEdit_Wrapper(engine);
      QPlainTextEdit.prototype = new Object();

      QPlainTextEdit.prototype.toString = function() {
          //return "QPlainTextEdit [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPlainTextEdit [JS]";
        };
      QPlainTextEdit.getObjectType = function() {
        
            return RJSType.QPlainTextEdit_Type;
          
      };

      QPlainTextEdit.prototype.getObjectType = function() {
        
            return RJSType.QPlainTextEdit_Type;
          
      };

      QPlainTextEdit.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QPlainTextEdit_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QWidget_Type:
          return true;
        
        case RJSType.QFrame_Type:
          return true;
        
        case RJSType.QAbstractScrollArea_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QPlainTextEdit_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QWidget_Type
            ,
            RJSType.QFrame_Type
            ,
            RJSType.QAbstractScrollArea_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: SizeAdjustPolicy
QPlainTextEdit.AdjustIgnored = QPlainTextEdit_Wrapper.AdjustIgnored;
QPlainTextEdit.AdjustToContentsOnFirstShow = QPlainTextEdit_Wrapper.AdjustToContentsOnFirstShow;
QPlainTextEdit.AdjustToContents = QPlainTextEdit_Wrapper.AdjustToContents;

  // enum: LineWrapMode
QPlainTextEdit.NoWrap = QPlainTextEdit_Wrapper.NoWrap;
QPlainTextEdit.WidgetWidth = QPlainTextEdit_Wrapper.WidgetWidth;


      // functions:
      
        // function 
        QPlainTextEdit.prototype.actionEvent = function() 
          
        {
          //print("JS: QPlainTextEdit.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QPlainTextEdit);
  }

  
  else {
    
        print("QPlainTextEdit.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QPlainTextEdit.tr = function() 
          
        {
          //print("JS: QPlainTextEdit.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QPlainTextEdit_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QPlainTextEdit);
  }

  
  else {
    
        print("QPlainTextEdit.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPlainTextEdit.setTabOrder = function() 
          
        {
          //print("JS: QPlainTextEdit.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QPlainTextEdit_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QPlainTextEdit);
  }

  
  else {
    
        print("QPlainTextEdit.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPlainTextEdit.mouseGrabber = function() 
          
        {
          //print("JS: QPlainTextEdit.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QPlainTextEdit_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QPlainTextEdit);
  }

  
  else {
    
        print("QPlainTextEdit.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPlainTextEdit.keyboardGrabber = function() 
          
        {
          //print("JS: QPlainTextEdit.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QPlainTextEdit_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QPlainTextEdit);
  }

  
  else {
    
        print("QPlainTextEdit.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPlainTextEdit.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPlainTextEdit.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    