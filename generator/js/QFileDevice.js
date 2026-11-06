
      // auto generated
      //var self;

      // class constructor:
      function QFileDevice() {
        

        // should be QFileDevice_BaseJs.call(this, engine):
        //QFileDevice.prototype = new QFileDevice_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFileDevice.getIdStatic()))) {

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
            qWarning("QFileDevice.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QFileDevice.js: No constructor found for class QFileDevice");
            
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

      //QFileDevice.prototype = new QFileDevice_BaseJs(engine);
      //QFileDevice.prototype = new QFileDevice_Wrapper(engine);
      QFileDevice.prototype = new Object();


      QFileDevice.prototype.toString = function() {
          //return "QFileDevice [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFileDevice [JS]";
        };
      QFileDevice.getObjectType = function() {
        return RJSType_QFileDevice.getIdStatic();
      };

      QFileDevice.prototype.getObjectType = function() {
        return RJSType_QFileDevice.getIdStatic();
      };

      QFileDevice.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFileDevice.getIdStatic()) {
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
QFileDevice.NotOpen = QFileDevice_Wrapper.NotOpen;
QFileDevice.ReadOnly = QFileDevice_Wrapper.ReadOnly;
QFileDevice.WriteOnly = QFileDevice_Wrapper.WriteOnly;
QFileDevice.ReadWrite = QFileDevice_Wrapper.ReadWrite;
QFileDevice.Append = QFileDevice_Wrapper.Append;
QFileDevice.Truncate = QFileDevice_Wrapper.Truncate;
QFileDevice.Text = QFileDevice_Wrapper.Text;
QFileDevice.Unbuffered = QFileDevice_Wrapper.Unbuffered;
QFileDevice.NewOnly = QFileDevice_Wrapper.NewOnly;
QFileDevice.ExistingOnly = QFileDevice_Wrapper.ExistingOnly;


      // functions:
      
        // function 
        QFileDevice.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QFileDevice.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QFileDevice.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QFileDevice.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QFileDevice.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QFileDevice.prototype.findChild = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QFileDevice.prototype.children = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QFileDevice.prototype.setParent = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QFileDevice.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QFileDevice.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QFileDevice.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QFileDevice.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QFileDevice.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QFileDevice.prototype.property = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QFileDevice.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QFileDevice.prototype.parent = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QFileDevice.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QFileDevice.prototype.openMode = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.openMode");
          
              return this.__PROXY__.openMode(...args);
            
        };
    
        // function 
        QFileDevice.prototype.setTextModeEnabled = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.setTextModeEnabled");
          
              return this.__PROXY__.setTextModeEnabled(...args);
            
        };
    
        // function 
        QFileDevice.prototype.isTextModeEnabled = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.isTextModeEnabled");
          
              return this.__PROXY__.isTextModeEnabled(...args);
            
        };
    
        // function 
        QFileDevice.prototype.isOpen = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.isOpen");
          
              return this.__PROXY__.isOpen(...args);
            
        };
    
        // function 
        QFileDevice.prototype.isReadable = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.isReadable");
          
              return this.__PROXY__.isReadable(...args);
            
        };
    
        // function 
        QFileDevice.prototype.isWritable = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.isWritable");
          
              return this.__PROXY__.isWritable(...args);
            
        };
    
        // function 
        QFileDevice.prototype.readChannelCount = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.readChannelCount");
          
              return this.__PROXY__.readChannelCount(...args);
            
        };
    
        // function 
        QFileDevice.prototype.writeChannelCount = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.writeChannelCount");
          
              return this.__PROXY__.writeChannelCount(...args);
            
        };
    
        // function 
        QFileDevice.prototype.currentReadChannel = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.currentReadChannel");
          
              return this.__PROXY__.currentReadChannel(...args);
            
        };
    
        // function 
        QFileDevice.prototype.setCurrentReadChannel = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.setCurrentReadChannel");
          
              return this.__PROXY__.setCurrentReadChannel(...args);
            
        };
    
        // function 
        QFileDevice.prototype.currentWriteChannel = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.currentWriteChannel");
          
              return this.__PROXY__.currentWriteChannel(...args);
            
        };
    
        // function 
        QFileDevice.prototype.setCurrentWriteChannel = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.setCurrentWriteChannel");
          
              return this.__PROXY__.setCurrentWriteChannel(...args);
            
        };
    
        // function 
        QFileDevice.prototype.open = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.open");
          
              return this.__PROXY__.open(...args);
            
        };
    
        // function 
        QFileDevice.prototype.reset = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
    
        // function 
        QFileDevice.prototype.bytesAvailable = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.bytesAvailable");
          
              return this.__PROXY__.bytesAvailable(...args);
            
        };
    
        // function 
        QFileDevice.prototype.bytesToWrite = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.bytesToWrite");
          
              return this.__PROXY__.bytesToWrite(...args);
            
        };
    
        // function 
        QFileDevice.prototype.readAll = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.readAll");
          
              return this.__PROXY__.readAll(...args);
            
        };
    
        // function 
        QFileDevice.prototype.canReadLine = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.canReadLine");
          
              return this.__PROXY__.canReadLine(...args);
            
        };
    
        // function 
        QFileDevice.prototype.startTransaction = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.startTransaction");
          
              return this.__PROXY__.startTransaction(...args);
            
        };
    
        // function 
        QFileDevice.prototype.commitTransaction = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.commitTransaction");
          
              return this.__PROXY__.commitTransaction(...args);
            
        };
    
        // function 
        QFileDevice.prototype.rollbackTransaction = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.rollbackTransaction");
          
              return this.__PROXY__.rollbackTransaction(...args);
            
        };
    
        // function 
        QFileDevice.prototype.isTransactionStarted = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.isTransactionStarted");
          
              return this.__PROXY__.isTransactionStarted(...args);
            
        };
    
        // function 
        QFileDevice.prototype.write = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.write");
          
              return this.__PROXY__.write(...args);
            
        };
    
        // function 
        QFileDevice.prototype.skip = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.skip");
          
              return this.__PROXY__.skip(...args);
            
        };
    
        // function 
        QFileDevice.prototype.waitForReadyRead = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.waitForReadyRead");
          
              return this.__PROXY__.waitForReadyRead(...args);
            
        };
    
        // function 
        QFileDevice.prototype.waitForBytesWritten = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.waitForBytesWritten");
          
              return this.__PROXY__.waitForBytesWritten(...args);
            
        };
    
        // function 
        QFileDevice.prototype.ungetChar = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.ungetChar");
          
              return this.__PROXY__.ungetChar(...args);
            
        };
    
        // function 
        QFileDevice.prototype.putChar = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.putChar");
          
              return this.__PROXY__.putChar(...args);
            
        };
    
        // function 
        QFileDevice.prototype.errorString = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.errorString");
          
              return this.__PROXY__.errorString(...args);
            
        };
    
        // function 
        QFileDevice.prototype.error = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.error");
          
              return this.__PROXY__.error(...args);
            
        };
    
        // function 
        QFileDevice.prototype.unsetError = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.unsetError");
          
              return this.__PROXY__.unsetError(...args);
            
        };
    
        // function 
        QFileDevice.prototype.close = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QFileDevice.prototype.isSequential = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.isSequential");
          
              return this.__PROXY__.isSequential(...args);
            
        };
    
        // function 
        QFileDevice.prototype.handle = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.handle");
          
              return this.__PROXY__.handle(...args);
            
        };
    
        // function 
        QFileDevice.prototype.fileName = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.fileName");
          
              return this.__PROXY__.fileName(...args);
            
        };
    
        // function 
        QFileDevice.prototype.pos = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.pos");
          
              return this.__PROXY__.pos(...args);
            
        };
    
        // function 
        QFileDevice.prototype.seek = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.seek");
          
              return this.__PROXY__.seek(...args);
            
        };
    
        // function 
        QFileDevice.prototype.atEnd = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.atEnd");
          
              return this.__PROXY__.atEnd(...args);
            
        };
    
        // function 
        QFileDevice.prototype.flush = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.flush");
          
              return this.__PROXY__.flush(...args);
            
        };
    
        // function 
        QFileDevice.prototype.size = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
    
        // function 
        QFileDevice.prototype.resize = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QFileDevice.prototype.permissions = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.permissions");
          
              return this.__PROXY__.permissions(...args);
            
        };
    
        // function 
        QFileDevice.prototype.setPermissions = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.setPermissions");
          
              return this.__PROXY__.setPermissions(...args);
            
        };
    
        // function 
        QFileDevice.prototype.fileTime = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.fileTime");
          
              return this.__PROXY__.fileTime(...args);
            
        };
    
        // function 
        QFileDevice.prototype.setFileTime = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.setFileTime");
          
              return this.__PROXY__.setFileTime(...args);
            
        };
    
        // function 
        QFileDevice.prototype.readData = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.readData");
          
              return this.__PROXY__.readData(...args);
            
        };
    
        // function 
        QFileDevice.prototype.writeData = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.writeData");
          
              return this.__PROXY__.writeData(...args);
            
        };
    
        // function 
        QFileDevice.prototype.readLineData = function(...args) 
          
        {
          //print("JS: QFileDevice.prototype.readLineData");
          
              return this.__PROXY__.readLineData(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QFileDevice.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QFileDevice.prototype, 'readyRead', {
            get: function() { return this.__PROXY__.readyRead; },
            configurable: true
        });
        
        Object.defineProperty(QFileDevice.prototype, 'channelReadyRead', {
            get: function() { return this.__PROXY__.channelReadyRead; },
            configurable: true
        });
        
          Object.defineProperty(QFileDevice.prototype, 'channelReadyRead(int)', {
              get: function() { return this.__PROXY__.channelReadyRead; },
              configurable: true
          });
        
        Object.defineProperty(QFileDevice.prototype, 'bytesWritten', {
            get: function() { return this.__PROXY__.bytesWritten; },
            configurable: true
        });
        
          Object.defineProperty(QFileDevice.prototype, 'bytesWritten(qint64)', {
              get: function() { return this.__PROXY__.bytesWritten; },
              configurable: true
          });
        
        Object.defineProperty(QFileDevice.prototype, 'channelBytesWritten', {
            get: function() { return this.__PROXY__.channelBytesWritten; },
            configurable: true
        });
        
          Object.defineProperty(QFileDevice.prototype, 'channelBytesWritten(int,qint64)', {
              get: function() { return this.__PROXY__.channelBytesWritten; },
              configurable: true
          });
        
        Object.defineProperty(QFileDevice.prototype, 'aboutToClose', {
            get: function() { return this.__PROXY__.aboutToClose; },
            configurable: true
        });
        
        Object.defineProperty(QFileDevice.prototype, 'readChannelFinished', {
            get: function() { return this.__PROXY__.readChannelFinished; },
            configurable: true
        });
        QFileDevice.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QFileDevice.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QFileDevice.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFileDevice.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFileDevice.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QFileDevice.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      