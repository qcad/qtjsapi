
      // auto generated
      //var self;

      // class constructor:
      function QDialogButtonBox() {
        

        // should be QDialogButtonBox_BaseJs.call(this, engine):
        //QDialogButtonBox.prototype = new QDialogButtonBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QDialogButtonBox.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDialogButtonBox);
            //}
          }
          else {
            qWarning("QDialogButtonBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QDialogButtonBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDialogButtonBox);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDialogButtonBox);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QDialogButtonBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDialogButtonBox);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDialogButtonBox);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QDialogButtonBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDialogButtonBox);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDialogButtonBox);
  }

  
  else {
    
        print("QDialogButtonBox(): wrong number / type of arguments");
      
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
  
    this["clicked(QAbstractButton*)"] = Object.getPrototypeOf(this).clicked;
  
          }
        }
      }

      //QDialogButtonBox.prototype = new QDialogButtonBox_BaseJs(engine);
      //QDialogButtonBox.prototype = new QDialogButtonBox_Wrapper(engine);
      QDialogButtonBox.prototype = new Object();

      QDialogButtonBox.prototype.toString = function() {
          //return "QDialogButtonBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDialogButtonBox [JS]";
        };
      QDialogButtonBox.getObjectType = function() {
        
            return RJSType_QDialogButtonBox.getIdStatic();
          
      };

      QDialogButtonBox.prototype.getObjectType = function() {
        
            return RJSType_QDialogButtonBox.getIdStatic();
          
      };

      QDialogButtonBox.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QDialogButtonBox.getIdStatic()) {
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
      
  // enum: ButtonRole
QDialogButtonBox.InvalidRole = QDialogButtonBox_Wrapper.InvalidRole;
QDialogButtonBox.AcceptRole = QDialogButtonBox_Wrapper.AcceptRole;
QDialogButtonBox.RejectRole = QDialogButtonBox_Wrapper.RejectRole;
QDialogButtonBox.DestructiveRole = QDialogButtonBox_Wrapper.DestructiveRole;
QDialogButtonBox.ActionRole = QDialogButtonBox_Wrapper.ActionRole;
QDialogButtonBox.HelpRole = QDialogButtonBox_Wrapper.HelpRole;
QDialogButtonBox.YesRole = QDialogButtonBox_Wrapper.YesRole;
QDialogButtonBox.NoRole = QDialogButtonBox_Wrapper.NoRole;
QDialogButtonBox.ResetRole = QDialogButtonBox_Wrapper.ResetRole;
QDialogButtonBox.ApplyRole = QDialogButtonBox_Wrapper.ApplyRole;
QDialogButtonBox.NRoles = QDialogButtonBox_Wrapper.NRoles;

  // enum: StandardButton
QDialogButtonBox.NoButton = QDialogButtonBox_Wrapper.NoButton;
QDialogButtonBox.Ok = QDialogButtonBox_Wrapper.Ok;
QDialogButtonBox.Save = QDialogButtonBox_Wrapper.Save;
QDialogButtonBox.SaveAll = QDialogButtonBox_Wrapper.SaveAll;
QDialogButtonBox.Open = QDialogButtonBox_Wrapper.Open;
QDialogButtonBox.Yes = QDialogButtonBox_Wrapper.Yes;
QDialogButtonBox.YesToAll = QDialogButtonBox_Wrapper.YesToAll;
QDialogButtonBox.No = QDialogButtonBox_Wrapper.No;
QDialogButtonBox.NoToAll = QDialogButtonBox_Wrapper.NoToAll;
QDialogButtonBox.Abort = QDialogButtonBox_Wrapper.Abort;
QDialogButtonBox.Retry = QDialogButtonBox_Wrapper.Retry;
QDialogButtonBox.Ignore = QDialogButtonBox_Wrapper.Ignore;
QDialogButtonBox.Close = QDialogButtonBox_Wrapper.Close;
QDialogButtonBox.Cancel = QDialogButtonBox_Wrapper.Cancel;
QDialogButtonBox.Discard = QDialogButtonBox_Wrapper.Discard;
QDialogButtonBox.Help = QDialogButtonBox_Wrapper.Help;
QDialogButtonBox.Apply = QDialogButtonBox_Wrapper.Apply;
QDialogButtonBox.Reset = QDialogButtonBox_Wrapper.Reset;
QDialogButtonBox.RestoreDefaults = QDialogButtonBox_Wrapper.RestoreDefaults;
QDialogButtonBox.FirstButton = QDialogButtonBox_Wrapper.FirstButton;
QDialogButtonBox.LastButton = QDialogButtonBox_Wrapper.LastButton;

  // enum: ButtonLayout
QDialogButtonBox.WinLayout = QDialogButtonBox_Wrapper.WinLayout;
QDialogButtonBox.MacLayout = QDialogButtonBox_Wrapper.MacLayout;
QDialogButtonBox.KdeLayout = QDialogButtonBox_Wrapper.KdeLayout;
QDialogButtonBox.GnomeLayout = QDialogButtonBox_Wrapper.GnomeLayout;
QDialogButtonBox.AndroidLayout = QDialogButtonBox_Wrapper.AndroidLayout;


      // functions:
      
        // function 
        QDialogButtonBox.prototype.actionEvent = function() 
          
        {
          //print("JS: QDialogButtonBox.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDialogButtonBox);
  }

  
  else {
    
        print("QDialogButtonBox.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QDialogButtonBox.tr = function() 
          
        {
          //print("JS: QDialogButtonBox.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QDialogButtonBox_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QDialogButtonBox);
  }

  
  else {
    
        print("QDialogButtonBox.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDialogButtonBox.setTabOrder = function() 
          
        {
          //print("JS: QDialogButtonBox.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QDialogButtonBox_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QDialogButtonBox);
  }

  
  else {
    
        print("QDialogButtonBox.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDialogButtonBox.mouseGrabber = function() 
          
        {
          //print("JS: QDialogButtonBox.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDialogButtonBox_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QDialogButtonBox);
  }

  
  else {
    
        print("QDialogButtonBox.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDialogButtonBox.keyboardGrabber = function() 
          
        {
          //print("JS: QDialogButtonBox.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDialogButtonBox_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QDialogButtonBox);
  }

  
  else {
    
        print("QDialogButtonBox.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDialogButtonBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDialogButtonBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    