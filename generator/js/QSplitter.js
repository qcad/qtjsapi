
      // auto generated
      //var self;

      // class constructor:
      function QSplitter() {
        

        // should be QSplitter_BaseJs.call(this, engine):
        //QSplitter.prototype = new QSplitter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QSplitter_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QSplitter);
            //}
          }
          else {
            qWarning("QSplitter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSplitter_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSplitter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSplitter);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSplitter_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSplitter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSplitter);
  }

  
  else {
    
        print("QSplitter(): wrong number / type of arguments");
      
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
  
    this["splitterMoved(int,int)"] = Object.getPrototypeOf(this).splitterMoved;
  
          }
        }
      }

      //QSplitter.prototype = new QSplitter_BaseJs(engine);
      //QSplitter.prototype = new QSplitter_Wrapper(engine);
      QSplitter.prototype = new Object();

      QSplitter.prototype.toString = function() {
          //return "QSplitter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSplitter [JS]";
        };
      QSplitter.getObjectType = function() {
        
            return RJSType.QSplitter_Type;
          
      };

      QSplitter.prototype.getObjectType = function() {
        
            return RJSType.QSplitter_Type;
          
      };

      QSplitter.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QSplitter_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QWidget_Type:
          return true;
        
        case RJSType.QFrame_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QSplitter_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QWidget_Type
            ,
            RJSType.QFrame_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      
        // function 
        QSplitter.prototype.actionEvent = function() 
          
        {
          //print("JS: QSplitter.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSplitter);
  }

  
  else {
    
        print("QSplitter.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QSplitter.tr = function() 
          
        {
          //print("JS: QSplitter.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QSplitter_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QSplitter);
  }

  
  else {
    
        print("QSplitter.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSplitter.setTabOrder = function() 
          
        {
          //print("JS: QSplitter.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QSplitter_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSplitter);
  }

  
  else {
    
        print("QSplitter.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSplitter.mouseGrabber = function() 
          
        {
          //print("JS: QSplitter.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSplitter_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QSplitter);
  }

  
  else {
    
        print("QSplitter.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSplitter.keyboardGrabber = function() 
          
        {
          //print("JS: QSplitter.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSplitter_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QSplitter);
  }

  
  else {
    
        print("QSplitter.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSplitter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSplitter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    