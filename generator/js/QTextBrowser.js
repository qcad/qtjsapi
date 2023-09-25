
      // auto generated
      //var self;

      // class constructor:
      function QTextBrowser() {
        

        // should be QTextBrowser_BaseJs.call(this, engine):
        //QTextBrowser.prototype = new QTextBrowser_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextBrowser.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTextBrowser);
            //}
          }
          else {
            qWarning("QTextBrowser.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTextBrowser_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTextBrowser);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextBrowser);
  }

  
  else {
    
        print("QTextBrowser(): wrong number / type of arguments");
      
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
  
    this["currentCharFormatChanged(QTextCharFormat)"] = Object.getPrototypeOf(this).currentCharFormatChanged;
  
    this["copyAvailable(bool)"] = Object.getPrototypeOf(this).copyAvailable;
  
    this["backwardAvailable(bool)"] = Object.getPrototypeOf(this).backwardAvailable;
  
    this["forwardAvailable(bool)"] = Object.getPrototypeOf(this).forwardAvailable;
  
    this["sourceChanged(QUrl)"] = Object.getPrototypeOf(this).sourceChanged;
  
    this["highlighted(QUrl)"] = Object.getPrototypeOf(this).highlighted;
  
    this["anchorClicked(QUrl)"] = Object.getPrototypeOf(this).anchorClicked;
  
          }
        }
      }

      //QTextBrowser.prototype = new QTextBrowser_BaseJs(engine);
      //QTextBrowser.prototype = new QTextBrowser_Wrapper(engine);
      QTextBrowser.prototype = new Object();

      QTextBrowser.prototype.toString = function() {
          //return "QTextBrowser [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextBrowser [JS]";
        };
      QTextBrowser.getObjectType = function() {
        return RJSType_QTextBrowser.getIdStatic();
      };

      QTextBrowser.prototype.getObjectType = function() {
        return RJSType_QTextBrowser.getIdStatic();
      };

      QTextBrowser.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextBrowser.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QTextEdit.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: LineWrapMode
QTextBrowser.NoWrap = QTextBrowser_Wrapper.NoWrap;
QTextBrowser.WidgetWidth = QTextBrowser_Wrapper.WidgetWidth;
QTextBrowser.FixedPixelWidth = QTextBrowser_Wrapper.FixedPixelWidth;
QTextBrowser.FixedColumnWidth = QTextBrowser_Wrapper.FixedColumnWidth;

  // enum: AutoFormattingFlag
QTextBrowser.AutoNone = QTextBrowser_Wrapper.AutoNone;
QTextBrowser.AutoBulletList = QTextBrowser_Wrapper.AutoBulletList;
QTextBrowser.AutoAll = QTextBrowser_Wrapper.AutoAll;


      // functions:
      
        // function 
        QTextBrowser.prototype.actionEvent = function() 
          
        {
          //print("JS: QTextBrowser.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QTextBrowser);
  }

  
  else {
    
        print("QTextBrowser.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QTextBrowser.tr = function() 
          
        {
          //print("JS: QTextBrowser.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QTextBrowser_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QTextBrowser);
  }

  
  else {
    
        print("QTextBrowser.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTextBrowser.setTabOrder = function() 
          
        {
          //print("JS: QTextBrowser.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QTextBrowser_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTextBrowser);
  }

  
  else {
    
        print("QTextBrowser.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTextBrowser.mouseGrabber = function() 
          
        {
          //print("JS: QTextBrowser.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QTextBrowser_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QTextBrowser);
  }

  
  else {
    
        print("QTextBrowser.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTextBrowser.keyboardGrabber = function() 
          
        {
          //print("JS: QTextBrowser.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QTextBrowser_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QTextBrowser);
  }

  
  else {
    
        print("QTextBrowser.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextBrowser.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextBrowser.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    