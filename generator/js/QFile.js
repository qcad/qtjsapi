
      // auto generated
      //var self;

      // class constructor:
      function QFile() {
        

        // should be QFile_BaseJs.call(this, engine):
        //QFile.prototype = new QFile_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFile.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QFile);
            //}
          }
          else {
            qWarning("QFile.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QFile_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFile);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFile);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QFile_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFile);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFile);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QFile_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFile);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFile);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QFile_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFile);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFile);
  }

  
  else {
    
        print("QFile(): wrong number / type of arguments");
      
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
            
    this["channelReadyRead(int)"] = Object.getPrototypeOf(this).channelReadyRead;
  
    this["bytesWritten(qint64)"] = Object.getPrototypeOf(this).bytesWritten;
  
    this["channelBytesWritten(int,qint64)"] = Object.getPrototypeOf(this).channelBytesWritten;
  
          }
        }
      }

      //QFile.prototype = new QFile_BaseJs(engine);
      //QFile.prototype = new QFile_Wrapper(engine);
      QFile.prototype = new Object();

      QFile.prototype.toString = function() {
          //return "QFile [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFile [JS]";
        };
      QFile.getObjectType = function() {
        return RJSType_QFile.getIdStatic();
      };

      QFile.prototype.getObjectType = function() {
        return RJSType_QFile.getIdStatic();
      };

      QFile.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFile.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QFileDevice.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QIODevice.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QFile.exists = function() 
          
        {
          //print("JS: QFile.exists");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFile_WrapperSingletonInstance.exists(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFile);
  }

  
  else {
    
        print("QFile.exists(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFile.remove = function() 
          
        {
          //print("JS: QFile.remove");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFile_WrapperSingletonInstance.remove(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFile);
  }

  
  else {
    
        print("QFile.remove(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFile.rename = function() 
          
        {
          //print("JS: QFile.rename");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QFile_WrapperSingletonInstance.rename(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFile);
  }

  
  else {
    
        print("QFile.rename(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFile.copy = function() 
          
        {
          //print("JS: QFile.copy");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QFile_WrapperSingletonInstance.copy(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFile);
  }

  
  else {
    
        print("QFile.copy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFile.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFile.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    