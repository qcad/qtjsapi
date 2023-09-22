
      // auto generated
      //var self;

      // class constructor:
      function QCursor() {
        

        // should be QCursor_BaseJs.call(this, engine):
        //QCursor.prototype = new QCursor_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QCursor.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QCursor);
            //}
          }
          else {
            qWarning("QCursor.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QCursor_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QCursor);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QCursor);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QCursor_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QCursor);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QCursor);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QCursor_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QCursor);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QCursor);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QCursor_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QCursor);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QCursor);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QCursor_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QCursor);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QCursor);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QCursor_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QCursor);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QCursor);
  }

  
  else {
    
        print("QCursor(): wrong number / type of arguments");
      
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
            
          }
        }
      }

      //QCursor.prototype = new QCursor_BaseJs(engine);
      //QCursor.prototype = new QCursor_Wrapper(engine);
      QCursor.prototype = new Object();

      QCursor.prototype.toString = function() {
          //return "QCursor [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QCursor [JS]";
        };
      QCursor.getObjectType = function() {
        
            return RJSType_QCursor.getIdStatic();
          
      };

      QCursor.prototype.getObjectType = function() {
        
            return RJSType_QCursor.getIdStatic();
          
      };

      QCursor.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QCursor.getIdStatic()) {
              return true;
            }
          

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QCursor.pos = function() 
          
        {
          //print("JS: QCursor.pos");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QCursor_WrapperSingletonInstance.pos(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QCursor);
  }

  
  else 
  
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QCursor_WrapperSingletonInstance.pos(
                  
                );
              

        //copyProperties(this, wrapper, QCursor);
  }

  
  else {
    
        print("QCursor.pos(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCursor.setPos = function() 
          
        {
          //print("JS: QCursor.setPos");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return QCursor_WrapperSingletonInstance.setPos(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QCursor);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QCursor_WrapperSingletonInstance.setPos(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QCursor);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QCursor_WrapperSingletonInstance.setPos(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QCursor);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QCursor_WrapperSingletonInstance.setPos(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QCursor);
  }

  
  else {
    
        print("QCursor.setPos(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QCursor.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QCursor.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    