
      // auto generated
      //var self;

      // class constructor:
      function QBuffer() {
        

        // should be QBuffer_BaseJs.call(this, engine):
        //QBuffer.prototype = new QBuffer_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QBuffer.getIdStatic()))) {

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
            qWarning("QBuffer.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QBuffer_Wrapper(
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

      

        //copyProperties(this, wrapper, QBuffer);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QBuffer_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QBuffer);
  }

  
  else {
    
        print("QBuffer(): wrong number / type of arguments");
      
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

        
              // define property setters/getters:
              Object.defineProperty(this, 'objectName', {
                  get() {
                      
                          return this.__PROXY__.objectName;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setObjectName(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            

      }

      //QBuffer.prototype = new QBuffer_BaseJs(engine);
      //QBuffer.prototype = new QBuffer_Wrapper(engine);
      QBuffer.prototype = new Object();

      QBuffer.prototype.toString = function() {
          //return "QBuffer [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QBuffer [JS]";
        };
      QBuffer.getObjectType = function() {
        return RJSType_QBuffer.getIdStatic();
      };

      QBuffer.prototype.getObjectType = function() {
        return RJSType_QBuffer.getIdStatic();
      };

      QBuffer.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QBuffer.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QIODeviceBase.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QIODevice.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OpenModeFlag
QBuffer.NotOpen = QBuffer_Wrapper.NotOpen;
QBuffer.ReadOnly = QBuffer_Wrapper.ReadOnly;
QBuffer.WriteOnly = QBuffer_Wrapper.WriteOnly;
QBuffer.ReadWrite = QBuffer_Wrapper.ReadWrite;
QBuffer.Append = QBuffer_Wrapper.Append;
QBuffer.Truncate = QBuffer_Wrapper.Truncate;
QBuffer.Text = QBuffer_Wrapper.Text;
QBuffer.Unbuffered = QBuffer_Wrapper.Unbuffered;
QBuffer.NewOnly = QBuffer_Wrapper.NewOnly;
QBuffer.ExistingOnly = QBuffer_Wrapper.ExistingOnly;


      // functions:
      
        // function 
        QBuffer.prototype.objectName = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.objectName");
          return this.__PROXY__.objectName(...args);
        };
    
        // function 
        QBuffer.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.setObjectName");
          return this.__PROXY__.setObjectName(...args);
        };
    
        // function 
        QBuffer.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.isWidgetType");
          return this.__PROXY__.isWidgetType(...args);
        };
    
        // function 
        QBuffer.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.isWindowType");
          return this.__PROXY__.isWindowType(...args);
        };
    
        // function 
        QBuffer.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.signalsBlocked");
          return this.__PROXY__.signalsBlocked(...args);
        };
    
        // function 
        QBuffer.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.blockSignals");
          return this.__PROXY__.blockSignals(...args);
        };
    
        // function 
        QBuffer.prototype.findChild = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.findChild");
          return this.__PROXY__.findChild(...args);
        };
    
        // function 
        QBuffer.prototype.children = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.children");
          return this.__PROXY__.children(...args);
        };
    
        // function 
        QBuffer.prototype.setParent = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.setParent");
          return this.__PROXY__.setParent(...args);
        };
    
        // function 
        QBuffer.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.installEventFilter");
          return this.__PROXY__.installEventFilter(...args);
        };
    
        // function 
        QBuffer.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.removeEventFilter");
          return this.__PROXY__.removeEventFilter(...args);
        };
    
        // function 
        QBuffer.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.dumpObjectTree");
          return this.__PROXY__.dumpObjectTree(...args);
        };
    
        // function 
        QBuffer.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.dumpObjectInfo");
          return this.__PROXY__.dumpObjectInfo(...args);
        };
    
        // function 
        QBuffer.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        QBuffer.prototype.property = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.property");
          return this.__PROXY__.property(...args);
        };
    
        // function 
        QBuffer.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.dynamicPropertyNames");
          return this.__PROXY__.dynamicPropertyNames(...args);
        };
    
        // function 
        QBuffer.prototype.parent = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.parent");
          return this.__PROXY__.parent(...args);
        };
    
        // function 
        QBuffer.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.deleteLater");
          return this.__PROXY__.deleteLater(...args);
        };
    
        // function 
        QBuffer.prototype.openMode = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.openMode");
          return this.__PROXY__.openMode(...args);
        };
    
        // function 
        QBuffer.prototype.setTextModeEnabled = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.setTextModeEnabled");
          return this.__PROXY__.setTextModeEnabled(...args);
        };
    
        // function 
        QBuffer.prototype.isTextModeEnabled = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.isTextModeEnabled");
          return this.__PROXY__.isTextModeEnabled(...args);
        };
    
        // function 
        QBuffer.prototype.isOpen = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.isOpen");
          return this.__PROXY__.isOpen(...args);
        };
    
        // function 
        QBuffer.prototype.isReadable = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.isReadable");
          return this.__PROXY__.isReadable(...args);
        };
    
        // function 
        QBuffer.prototype.isWritable = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.isWritable");
          return this.__PROXY__.isWritable(...args);
        };
    
        // function 
        QBuffer.prototype.isSequential = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.isSequential");
          return this.__PROXY__.isSequential(...args);
        };
    
        // function 
        QBuffer.prototype.readChannelCount = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.readChannelCount");
          return this.__PROXY__.readChannelCount(...args);
        };
    
        // function 
        QBuffer.prototype.writeChannelCount = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.writeChannelCount");
          return this.__PROXY__.writeChannelCount(...args);
        };
    
        // function 
        QBuffer.prototype.currentReadChannel = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.currentReadChannel");
          return this.__PROXY__.currentReadChannel(...args);
        };
    
        // function 
        QBuffer.prototype.setCurrentReadChannel = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.setCurrentReadChannel");
          return this.__PROXY__.setCurrentReadChannel(...args);
        };
    
        // function 
        QBuffer.prototype.currentWriteChannel = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.currentWriteChannel");
          return this.__PROXY__.currentWriteChannel(...args);
        };
    
        // function 
        QBuffer.prototype.setCurrentWriteChannel = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.setCurrentWriteChannel");
          return this.__PROXY__.setCurrentWriteChannel(...args);
        };
    
        // function 
        QBuffer.prototype.reset = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.reset");
          return this.__PROXY__.reset(...args);
        };
    
        // function 
        QBuffer.prototype.bytesAvailable = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.bytesAvailable");
          return this.__PROXY__.bytesAvailable(...args);
        };
    
        // function 
        QBuffer.prototype.bytesToWrite = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.bytesToWrite");
          return this.__PROXY__.bytesToWrite(...args);
        };
    
        // function 
        QBuffer.prototype.readAll = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.readAll");
          return this.__PROXY__.readAll(...args);
        };
    
        // function 
        QBuffer.prototype.startTransaction = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.startTransaction");
          return this.__PROXY__.startTransaction(...args);
        };
    
        // function 
        QBuffer.prototype.commitTransaction = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.commitTransaction");
          return this.__PROXY__.commitTransaction(...args);
        };
    
        // function 
        QBuffer.prototype.rollbackTransaction = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.rollbackTransaction");
          return this.__PROXY__.rollbackTransaction(...args);
        };
    
        // function 
        QBuffer.prototype.isTransactionStarted = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.isTransactionStarted");
          return this.__PROXY__.isTransactionStarted(...args);
        };
    
        // function 
        QBuffer.prototype.write = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.write");
          return this.__PROXY__.write(...args);
        };
    
        // function 
        QBuffer.prototype.skip = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.skip");
          return this.__PROXY__.skip(...args);
        };
    
        // function 
        QBuffer.prototype.waitForReadyRead = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.waitForReadyRead");
          return this.__PROXY__.waitForReadyRead(...args);
        };
    
        // function 
        QBuffer.prototype.waitForBytesWritten = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.waitForBytesWritten");
          return this.__PROXY__.waitForBytesWritten(...args);
        };
    
        // function 
        QBuffer.prototype.ungetChar = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.ungetChar");
          return this.__PROXY__.ungetChar(...args);
        };
    
        // function 
        QBuffer.prototype.putChar = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.putChar");
          return this.__PROXY__.putChar(...args);
        };
    
        // function 
        QBuffer.prototype.errorString = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.errorString");
          return this.__PROXY__.errorString(...args);
        };
    
        // function 
        QBuffer.prototype.readyRead = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.readyRead");
          return this.__PROXY__.readyRead(...args);
        };
    
        // function 
        QBuffer.prototype.channelReadyRead = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.channelReadyRead");
          return this.__PROXY__.channelReadyRead(...args);
        };
    
        // function 
        QBuffer.prototype.bytesWritten = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.bytesWritten");
          return this.__PROXY__.bytesWritten(...args);
        };
    
        // function 
        QBuffer.prototype.channelBytesWritten = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.channelBytesWritten");
          return this.__PROXY__.channelBytesWritten(...args);
        };
    
        // function 
        QBuffer.prototype.aboutToClose = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.aboutToClose");
          return this.__PROXY__.aboutToClose(...args);
        };
    
        // function 
        QBuffer.prototype.readChannelFinished = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.readChannelFinished");
          return this.__PROXY__.readChannelFinished(...args);
        };
    
        // function 
        QBuffer.prototype.buffer = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.buffer");
          return this.__PROXY__.buffer(...args);
        };
    
        // function 
        QBuffer.prototype.setData = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        QBuffer.prototype.data = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.data");
          return this.__PROXY__.data(...args);
        };
    
        // function 
        QBuffer.prototype.open = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.open");
          return this.__PROXY__.open(...args);
        };
    
        // function 
        QBuffer.prototype.close = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.close");
          return this.__PROXY__.close(...args);
        };
    
        // function 
        QBuffer.prototype.size = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.size");
          return this.__PROXY__.size(...args);
        };
    
        // function 
        QBuffer.prototype.pos = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.pos");
          return this.__PROXY__.pos(...args);
        };
    
        // function 
        QBuffer.prototype.seek = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.seek");
          return this.__PROXY__.seek(...args);
        };
    
        // function 
        QBuffer.prototype.atEnd = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.atEnd");
          return this.__PROXY__.atEnd(...args);
        };
    
        // function 
        QBuffer.prototype.canReadLine = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.canReadLine");
          return this.__PROXY__.canReadLine(...args);
        };
    
        // function 
        QBuffer.prototype.connectNotify = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.connectNotify");
          return this.__PROXY__.connectNotify(...args);
        };
    
        // function 
        QBuffer.prototype.disconnectNotify = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.disconnectNotify");
          return this.__PROXY__.disconnectNotify(...args);
        };
    
        // function 
        QBuffer.prototype.readData = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.readData");
          return this.__PROXY__.readData(...args);
        };
    
        // function 
        QBuffer.prototype.writeData = function(...args) 
          
        {
          //print("JS: QBuffer.prototype.writeData");
          return this.__PROXY__.writeData(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QBuffer.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QBuffer.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QBuffer.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      