
      // auto generated
      //var self;

      // class constructor:
      function QMessageBox() {
        

        // should be QMessageBox_BaseJs.call(this, engine):
        //QMessageBox.prototype = new QMessageBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QMessageBox.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QMessageBox);
            //}
          }
          else {
            qWarning("QMessageBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 3 &&
          arguments.length <= 6) {
    
            self = this;
            wrapper = new QMessageBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QMessageBox);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QMessageBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QMessageBox);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox(): wrong number / type of arguments");
      
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
  
    this["buttonClicked(QAbstractButton*)"] = Object.getPrototypeOf(this).buttonClicked;
  
          }
        }
      }

      //QMessageBox.prototype = new QMessageBox_BaseJs(engine);
      //QMessageBox.prototype = new QMessageBox_Wrapper(engine);
      QMessageBox.prototype = new Object();

      QMessageBox.prototype.toString = function() {
          //return "QMessageBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMessageBox [JS]";
        };
      QMessageBox.getObjectType = function() {
        return RJSType_QMessageBox.getIdStatic();
      };

      QMessageBox.prototype.getObjectType = function() {
        return RJSType_QMessageBox.getIdStatic();
      };

      QMessageBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QMessageBox.getIdStatic()) {
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
QMessageBox.Rejected = QMessageBox_Wrapper.Rejected;
QMessageBox.Accepted = QMessageBox_Wrapper.Accepted;

  // enum: Icon
QMessageBox.NoIcon = QMessageBox_Wrapper.NoIcon;
QMessageBox.Information = QMessageBox_Wrapper.Information;
QMessageBox.Warning = QMessageBox_Wrapper.Warning;
QMessageBox.Critical = QMessageBox_Wrapper.Critical;
QMessageBox.Question = QMessageBox_Wrapper.Question;

  // enum: ButtonRole
QMessageBox.InvalidRole = QMessageBox_Wrapper.InvalidRole;
QMessageBox.AcceptRole = QMessageBox_Wrapper.AcceptRole;
QMessageBox.RejectRole = QMessageBox_Wrapper.RejectRole;
QMessageBox.DestructiveRole = QMessageBox_Wrapper.DestructiveRole;
QMessageBox.ActionRole = QMessageBox_Wrapper.ActionRole;
QMessageBox.HelpRole = QMessageBox_Wrapper.HelpRole;
QMessageBox.YesRole = QMessageBox_Wrapper.YesRole;
QMessageBox.NoRole = QMessageBox_Wrapper.NoRole;
QMessageBox.ResetRole = QMessageBox_Wrapper.ResetRole;
QMessageBox.ApplyRole = QMessageBox_Wrapper.ApplyRole;
QMessageBox.NRoles = QMessageBox_Wrapper.NRoles;

  // enum: StandardButton
QMessageBox.NoButton = QMessageBox_Wrapper.NoButton;
QMessageBox.Ok = QMessageBox_Wrapper.Ok;
QMessageBox.Save = QMessageBox_Wrapper.Save;
QMessageBox.SaveAll = QMessageBox_Wrapper.SaveAll;
QMessageBox.Open = QMessageBox_Wrapper.Open;
QMessageBox.Yes = QMessageBox_Wrapper.Yes;
QMessageBox.YesToAll = QMessageBox_Wrapper.YesToAll;
QMessageBox.No = QMessageBox_Wrapper.No;
QMessageBox.NoToAll = QMessageBox_Wrapper.NoToAll;
QMessageBox.Abort = QMessageBox_Wrapper.Abort;
QMessageBox.Retry = QMessageBox_Wrapper.Retry;
QMessageBox.Ignore = QMessageBox_Wrapper.Ignore;
QMessageBox.Close = QMessageBox_Wrapper.Close;
QMessageBox.Cancel = QMessageBox_Wrapper.Cancel;
QMessageBox.Discard = QMessageBox_Wrapper.Discard;
QMessageBox.Help = QMessageBox_Wrapper.Help;
QMessageBox.Apply = QMessageBox_Wrapper.Apply;
QMessageBox.Reset = QMessageBox_Wrapper.Reset;
QMessageBox.RestoreDefaults = QMessageBox_Wrapper.RestoreDefaults;
QMessageBox.FirstButton = QMessageBox_Wrapper.FirstButton;
QMessageBox.LastButton = QMessageBox_Wrapper.LastButton;
QMessageBox.YesAll = QMessageBox_Wrapper.YesAll;
QMessageBox.NoAll = QMessageBox_Wrapper.NoAll;
QMessageBox.Default = QMessageBox_Wrapper.Default;
QMessageBox.Escape = QMessageBox_Wrapper.Escape;
QMessageBox.FlagMask = QMessageBox_Wrapper.FlagMask;
QMessageBox.ButtonMask = QMessageBox_Wrapper.ButtonMask;


      // functions:
      
        // function 
        QMessageBox.prototype.actionEvent = function() 
          
        {
          //print("JS: QMessageBox.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QMessageBox.tr = function() 
          
        {
          //print("JS: QMessageBox.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMessageBox.setTabOrder = function() 
          
        {
          //print("JS: QMessageBox.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMessageBox.mouseGrabber = function() 
          
        {
          //print("JS: QMessageBox.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMessageBox.keyboardGrabber = function() 
          
        {
          //print("JS: QMessageBox.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMessageBox.information = function() 
          
        {
          //print("JS: QMessageBox.information");
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.information(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else 
  
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.information(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.information(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMessageBox.question = function() 
          
        {
          //print("JS: QMessageBox.question");
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.question(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else 
  
      if (arguments.length == 5) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.question(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.question(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMessageBox.warning = function() 
          
        {
          //print("JS: QMessageBox.warning");
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.warning(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else 
  
      if (arguments.length == 5) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.warning(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.warning(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMessageBox.critical = function() 
          
        {
          //print("JS: QMessageBox.critical");
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.critical(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else 
  
      if (arguments.length == 5) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.critical(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.critical(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMessageBox.about = function() 
          
        {
          //print("JS: QMessageBox.about");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.about(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.about(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMessageBox.aboutQt = function() 
          
        {
          //print("JS: QMessageBox.aboutQt");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.aboutQt(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.aboutQt(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QMessageBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMessageBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    