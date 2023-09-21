
      // auto generated
      //var self;

      // class constructor:
      function QDialog() {
        

        // should be QDialog_BaseJs.call(this, engine):
        //QDialog.prototype = new QDialog_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QDialog_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDialog);
            //}
          }
          else {
            qWarning("QDialog.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QDialog_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDialog);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDialog);
  }

  
  else {
    
        print("QDialog(): wrong number / type of arguments");
      
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

      //QDialog.prototype = new QDialog_BaseJs(engine);
      //QDialog.prototype = new QDialog_Wrapper(engine);
      QDialog.prototype = new Object();

      QDialog.prototype.toString = function() {
          //return "QDialog [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDialog [JS]";
        };
      QDialog.getObjectType = function() {
        
            return RJSType.QDialog_Type;
          
      };

      QDialog.prototype.getObjectType = function() {
        
            return RJSType.QDialog_Type;
          
      };

      QDialog.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QDialog_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QWidget_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QDialog_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QWidget_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: DialogCode
QDialog.Rejected = QDialog_Wrapper.Rejected;
QDialog.Accepted = QDialog_Wrapper.Accepted;


      // functions:
      
        // function 
        QDialog.prototype.actionEvent = function() 
          
        {
          //print("JS: QDialog.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDialog);
  }

  
  else {
    
        print("QDialog.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QDialog.tr = function() 
          
        {
          //print("JS: QDialog.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QDialog_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QDialog);
  }

  
  else {
    
        print("QDialog.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDialog.setTabOrder = function() 
          
        {
          //print("JS: QDialog.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QDialog_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QDialog);
  }

  
  else {
    
        print("QDialog.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDialog.mouseGrabber = function() 
          
        {
          //print("JS: QDialog.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDialog_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QDialog);
  }

  
  else {
    
        print("QDialog.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDialog.keyboardGrabber = function() 
          
        {
          //print("JS: QDialog.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDialog_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QDialog);
  }

  
  else {
    
        print("QDialog.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDialog.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDialog.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    