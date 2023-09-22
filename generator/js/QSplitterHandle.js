
      // auto generated
      //var self;

      // class constructor:
      function QSplitterHandle() {
        

        // should be QSplitterHandle_BaseJs.call(this, engine):
        //QSplitterHandle.prototype = new QSplitterHandle_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QSplitterHandle.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QSplitterHandle);
            //}
          }
          else {
            qWarning("QSplitterHandle.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QSplitterHandle_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSplitterHandle);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSplitterHandle);
  }

  
  else {
    
        print("QSplitterHandle(): wrong number / type of arguments");
      
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
  
          }
        }
      }

      //QSplitterHandle.prototype = new QSplitterHandle_BaseJs(engine);
      //QSplitterHandle.prototype = new QSplitterHandle_Wrapper(engine);
      QSplitterHandle.prototype = new Object();

      QSplitterHandle.prototype.toString = function() {
          //return "QSplitterHandle [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSplitterHandle [JS]";
        };
      QSplitterHandle.getObjectType = function() {
        
            return RJSType_QSplitterHandle.getIdStatic();
          
      };

      QSplitterHandle.prototype.getObjectType = function() {
        
            return RJSType_QSplitterHandle.getIdStatic();
          
      };

      QSplitterHandle.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QSplitterHandle.getIdStatic()) {
              return true;
            }
          
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QSplitterHandle.prototype.actionEvent = function() 
          
        {
          //print("JS: QSplitterHandle.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSplitterHandle);
  }

  
  else {
    
        print("QSplitterHandle.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QSplitterHandle.setTabOrder = function() 
          
        {
          //print("JS: QSplitterHandle.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QSplitterHandle_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSplitterHandle);
  }

  
  else {
    
        print("QSplitterHandle.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSplitterHandle.mouseGrabber = function() 
          
        {
          //print("JS: QSplitterHandle.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSplitterHandle_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QSplitterHandle);
  }

  
  else {
    
        print("QSplitterHandle.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSplitterHandle.keyboardGrabber = function() 
          
        {
          //print("JS: QSplitterHandle.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSplitterHandle_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QSplitterHandle);
  }

  
  else {
    
        print("QSplitterHandle.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSplitterHandle.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSplitterHandle.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    