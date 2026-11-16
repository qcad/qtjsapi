
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QFile.prototype.error = function(...args) 
          
        {
          //print("JS: QFile.prototype.error");
          
              return this.__PROXY__.error(...args);
            
        };
        
        // function 
        QFile.prototype.unsetError = function(...args) 
          
        {
          //print("JS: QFile.prototype.unsetError");
          
              return this.__PROXY__.unsetError(...args);
            
        };
        
        // function 
        QFile.prototype.handle = function(...args) 
          
        {
          //print("JS: QFile.prototype.handle");
          
              return this.__PROXY__.handle(...args);
            
        };
        
        // function 
        QFile.prototype.flush = function(...args) 
          
        {
          //print("JS: QFile.prototype.flush");
          
              return this.__PROXY__.flush(...args);
            
        };
        
        // function 
        QFile.prototype.fileTime = function(...args) 
          
        {
          //print("JS: QFile.prototype.fileTime");
          
              return this.__PROXY__.fileTime(...args);
            
        };
        
        // function 
        QFile.prototype.setFileTime = function(...args) 
          
        {
          //print("JS: QFile.prototype.setFileTime");
          
              return this.__PROXY__.setFileTime(...args);
            
        };
        
        // function 
        QFile.prototype.readData = function(...args) 
          
        {
          //print("JS: QFile.prototype.readData");
          
              return this.__PROXY__.readData(...args);
            
        };
        
        // function 
        QFile.prototype.writeData = function(...args) 
          
        {
          //print("JS: QFile.prototype.writeData");
          
              return this.__PROXY__.writeData(...args);
            
        };
        
        // function 
        QFile.prototype.readLineData = function(...args) 
          
        {
          //print("JS: QFile.prototype.readLineData");
          
              return this.__PROXY__.readLineData(...args);
            
        };
        
        // function 
        QFile.prototype.openMode = function(...args) 
          
        {
          //print("JS: QFile.prototype.openMode");
          
              return this.__PROXY__.openMode(...args);
            
        };
        
        // function 
        QFile.prototype.setTextModeEnabled = function(...args) 
          
        {
          //print("JS: QFile.prototype.setTextModeEnabled");
          
              return this.__PROXY__.setTextModeEnabled(...args);
            
        };
        
        // function 
        QFile.prototype.isTextModeEnabled = function(...args) 
          
        {
          //print("JS: QFile.prototype.isTextModeEnabled");
          
              return this.__PROXY__.isTextModeEnabled(...args);
            
        };
        
        // function 
        QFile.prototype.isOpen = function(...args) 
          
        {
          //print("JS: QFile.prototype.isOpen");
          
              return this.__PROXY__.isOpen(...args);
            
        };
        
        // function 
        QFile.prototype.isReadable = function(...args) 
          
        {
          //print("JS: QFile.prototype.isReadable");
          
              return this.__PROXY__.isReadable(...args);
            
        };
        
        // function 
        QFile.prototype.isWritable = function(...args) 
          
        {
          //print("JS: QFile.prototype.isWritable");
          
              return this.__PROXY__.isWritable(...args);
            
        };
        
        // function 
        QFile.prototype.isSequential = function(...args) 
          
        {
          //print("JS: QFile.prototype.isSequential");
          
              return this.__PROXY__.isSequential(...args);
            
        };
        
        // function 
        QFile.prototype.readChannelCount = function(...args) 
          
        {
          //print("JS: QFile.prototype.readChannelCount");
          
              return this.__PROXY__.readChannelCount(...args);
            
        };
        
        // function 
        QFile.prototype.writeChannelCount = function(...args) 
          
        {
          //print("JS: QFile.prototype.writeChannelCount");
          
              return this.__PROXY__.writeChannelCount(...args);
            
        };
        
        // function 
        QFile.prototype.currentReadChannel = function(...args) 
          
        {
          //print("JS: QFile.prototype.currentReadChannel");
          
              return this.__PROXY__.currentReadChannel(...args);
            
        };
        
        // function 
        QFile.prototype.setCurrentReadChannel = function(...args) 
          
        {
          //print("JS: QFile.prototype.setCurrentReadChannel");
          
              return this.__PROXY__.setCurrentReadChannel(...args);
            
        };
        
        // function 
        QFile.prototype.currentWriteChannel = function(...args) 
          
        {
          //print("JS: QFile.prototype.currentWriteChannel");
          
              return this.__PROXY__.currentWriteChannel(...args);
            
        };
        
        // function 
        QFile.prototype.setCurrentWriteChannel = function(...args) 
          
        {
          //print("JS: QFile.prototype.setCurrentWriteChannel");
          
              return this.__PROXY__.setCurrentWriteChannel(...args);
            
        };
        
        // function 
        QFile.prototype.close = function(...args) 
          
        {
          //print("JS: QFile.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QFile.prototype.pos = function(...args) 
          
        {
          //print("JS: QFile.prototype.pos");
          
              return this.__PROXY__.pos(...args);
            
        };
        
        // function 
        QFile.prototype.seek = function(...args) 
          
        {
          //print("JS: QFile.prototype.seek");
          
              return this.__PROXY__.seek(...args);
            
        };
        
        // function 
        QFile.prototype.atEnd = function(...args) 
          
        {
          //print("JS: QFile.prototype.atEnd");
          
              return this.__PROXY__.atEnd(...args);
            
        };
        
        // function 
        QFile.prototype.reset = function(...args) 
          
        {
          //print("JS: QFile.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
        
        // function 
        QFile.prototype.bytesAvailable = function(...args) 
          
        {
          //print("JS: QFile.prototype.bytesAvailable");
          
              return this.__PROXY__.bytesAvailable(...args);
            
        };
        
        // function 
        QFile.prototype.bytesToWrite = function(...args) 
          
        {
          //print("JS: QFile.prototype.bytesToWrite");
          
              return this.__PROXY__.bytesToWrite(...args);
            
        };
        
        // function 
        QFile.prototype.readAll = function(...args) 
          
        {
          //print("JS: QFile.prototype.readAll");
          
              return this.__PROXY__.readAll(...args);
            
        };
        
        // function 
        QFile.prototype.canReadLine = function(...args) 
          
        {
          //print("JS: QFile.prototype.canReadLine");
          
              return this.__PROXY__.canReadLine(...args);
            
        };
        
        // function 
        QFile.prototype.startTransaction = function(...args) 
          
        {
          //print("JS: QFile.prototype.startTransaction");
          
              return this.__PROXY__.startTransaction(...args);
            
        };
        
        // function 
        QFile.prototype.commitTransaction = function(...args) 
          
        {
          //print("JS: QFile.prototype.commitTransaction");
          
              return this.__PROXY__.commitTransaction(...args);
            
        };
        
        // function 
        QFile.prototype.rollbackTransaction = function(...args) 
          
        {
          //print("JS: QFile.prototype.rollbackTransaction");
          
              return this.__PROXY__.rollbackTransaction(...args);
            
        };
        
        // function 
        QFile.prototype.isTransactionStarted = function(...args) 
          
        {
          //print("JS: QFile.prototype.isTransactionStarted");
          
              return this.__PROXY__.isTransactionStarted(...args);
            
        };
        
        // function 
        QFile.prototype.write = function(...args) 
          
        {
          //print("JS: QFile.prototype.write");
          
              return this.__PROXY__.write(...args);
            
        };
        
        // function 
        QFile.prototype.skip = function(...args) 
          
        {
          //print("JS: QFile.prototype.skip");
          
              return this.__PROXY__.skip(...args);
            
        };
        
        // function 
        QFile.prototype.waitForReadyRead = function(...args) 
          
        {
          //print("JS: QFile.prototype.waitForReadyRead");
          
              return this.__PROXY__.waitForReadyRead(...args);
            
        };
        
        // function 
        QFile.prototype.waitForBytesWritten = function(...args) 
          
        {
          //print("JS: QFile.prototype.waitForBytesWritten");
          
              return this.__PROXY__.waitForBytesWritten(...args);
            
        };
        
        // function 
        QFile.prototype.ungetChar = function(...args) 
          
        {
          //print("JS: QFile.prototype.ungetChar");
          
              return this.__PROXY__.ungetChar(...args);
            
        };
        
        // function 
        QFile.prototype.putChar = function(...args) 
          
        {
          //print("JS: QFile.prototype.putChar");
          
              return this.__PROXY__.putChar(...args);
            
        };
        
        // function 
        QFile.prototype.errorString = function(...args) 
          
        {
          //print("JS: QFile.prototype.errorString");
          
              return this.__PROXY__.errorString(...args);
            
        };
        
        // function 
        QFile.prototype.fileName = function(...args) 
          
        {
          //print("JS: QFile.prototype.fileName");
          
              return this.__PROXY__.fileName(...args);
            
        };
        
        // function 
        QFile.prototype.setFileName = function(...args) 
          
        {
          //print("JS: QFile.prototype.setFileName");
          
              return this.__PROXY__.setFileName(...args);
            
        };
        
        // function 
        QFile.prototype.exists = function(...args) 
          
        {
          //print("JS: QFile.prototype.exists");
          
              return this.__PROXY__.exists(...args);
            
        };
        
        // function 
        QFile.prototype.symLinkTarget = function(...args) 
          
        {
          //print("JS: QFile.prototype.symLinkTarget");
          
              return this.__PROXY__.symLinkTarget(...args);
            
        };
        
        // function 
        QFile.prototype.remove = function(...args) 
          
        {
          //print("JS: QFile.prototype.remove");
          
              return this.__PROXY__.remove(...args);
            
        };
        
        // function 
        QFile.prototype.rename = function(...args) 
          
        {
          //print("JS: QFile.prototype.rename");
          
              return this.__PROXY__.rename(...args);
            
        };
        
        // function 
        QFile.prototype.link = function(...args) 
          
        {
          //print("JS: QFile.prototype.link");
          
              return this.__PROXY__.link(...args);
            
        };
        
        // function 
        QFile.prototype.copy = function(...args) 
          
        {
          //print("JS: QFile.prototype.copy");
          
              return this.__PROXY__.copy(...args);
            
        };
        
        // function 
        QFile.prototype.open = function(...args) 
          
        {
          //print("JS: QFile.prototype.open");
          
              return this.__PROXY__.open(...args);
            
        };
        
        // function 
        QFile.prototype.size = function(...args) 
          
        {
          //print("JS: QFile.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
        
        // function 
        QFile.prototype.resize = function(...args) 
          
        {
          //print("JS: QFile.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QFile.prototype.permissions = function(...args) 
          
        {
          //print("JS: QFile.prototype.permissions");
          
              return this.__PROXY__.permissions(...args);
            
        };
        
        // function 
        QFile.prototype.setPermissions = function(...args) 
          
        {
          //print("JS: QFile.prototype.setPermissions");
          
              return this.__PROXY__.setPermissions(...args);
            
        };
        

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
        QFile.link = function() 
          
        {
          //print("JS: QFile.link");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QFile_WrapperSingletonInstance.link(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFile);
  }

  
  else {
    
        print("QFile.link(): wrong number / type of arguments");
      
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
      
        Object.defineProperty(QFile.prototype, 'readyRead', {
            get: function() { return this.__PROXY__.readyRead; },
            configurable: true
        });
        
        Object.defineProperty(QFile.prototype, 'channelReadyRead', {
            get: function() { return this.__PROXY__.channelReadyRead; },
            configurable: true
        });
        
          Object.defineProperty(QFile.prototype, 'channelReadyRead(int)', {
              get: function() { return this.__PROXY__.channelReadyRead; },
              configurable: true
          });
        
        Object.defineProperty(QFile.prototype, 'bytesWritten', {
            get: function() { return this.__PROXY__.bytesWritten; },
            configurable: true
        });
        
          Object.defineProperty(QFile.prototype, 'bytesWritten(qint64)', {
              get: function() { return this.__PROXY__.bytesWritten; },
              configurable: true
          });
        
        Object.defineProperty(QFile.prototype, 'channelBytesWritten', {
            get: function() { return this.__PROXY__.channelBytesWritten; },
            configurable: true
        });
        
          Object.defineProperty(QFile.prototype, 'channelBytesWritten(int,qint64)', {
              get: function() { return this.__PROXY__.channelBytesWritten; },
              configurable: true
          });
        
        Object.defineProperty(QFile.prototype, 'aboutToClose', {
            get: function() { return this.__PROXY__.aboutToClose; },
            configurable: true
        });
        
        Object.defineProperty(QFile.prototype, 'readChannelFinished', {
            get: function() { return this.__PROXY__.readChannelFinished; },
            configurable: true
        });
        QFile.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QFile.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QFile.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
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

      QFile.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      