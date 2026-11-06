
      // auto generated
      //var self;

      // class constructor:
      function QIODevice() {
        

        // should be QIODevice_BaseJs.call(this, engine):
        //QIODevice.prototype = new QIODevice_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QIODevice.getIdStatic()))) {

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
            qWarning("QIODevice.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QIODevice.js: No constructor found for class QIODevice");
            
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

      //QIODevice.prototype = new QIODevice_BaseJs(engine);
      //QIODevice.prototype = new QIODevice_Wrapper(engine);
      QIODevice.prototype = new Object();


      QIODevice.prototype.toString = function() {
          //return "QIODevice [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QIODevice [JS]";
        };
      QIODevice.getObjectType = function() {
        return RJSType_QIODevice.getIdStatic();
      };

      QIODevice.prototype.getObjectType = function() {
        return RJSType_QIODevice.getIdStatic();
      };

      QIODevice.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QIODevice.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QIODeviceBase.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OpenModeFlag
QIODevice.NotOpen = QIODevice_Wrapper.NotOpen;
QIODevice.ReadOnly = QIODevice_Wrapper.ReadOnly;
QIODevice.WriteOnly = QIODevice_Wrapper.WriteOnly;
QIODevice.ReadWrite = QIODevice_Wrapper.ReadWrite;
QIODevice.Append = QIODevice_Wrapper.Append;
QIODevice.Truncate = QIODevice_Wrapper.Truncate;
QIODevice.Text = QIODevice_Wrapper.Text;
QIODevice.Unbuffered = QIODevice_Wrapper.Unbuffered;
QIODevice.NewOnly = QIODevice_Wrapper.NewOnly;
QIODevice.ExistingOnly = QIODevice_Wrapper.ExistingOnly;


      // functions:
      
        // function 
        QIODevice.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QIODevice.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QIODevice.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QIODevice.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QIODevice.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QIODevice.prototype.findChild = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QIODevice.prototype.children = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QIODevice.prototype.setParent = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QIODevice.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QIODevice.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QIODevice.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QIODevice.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QIODevice.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QIODevice.prototype.property = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QIODevice.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QIODevice.prototype.parent = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QIODevice.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QIODevice.prototype.openMode = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.openMode");
          
              return this.__PROXY__.openMode(...args);
            
        };
    
        // function 
        QIODevice.prototype.setTextModeEnabled = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.setTextModeEnabled");
          
              return this.__PROXY__.setTextModeEnabled(...args);
            
        };
    
        // function 
        QIODevice.prototype.isTextModeEnabled = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.isTextModeEnabled");
          
              return this.__PROXY__.isTextModeEnabled(...args);
            
        };
    
        // function 
        QIODevice.prototype.isOpen = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.isOpen");
          
              return this.__PROXY__.isOpen(...args);
            
        };
    
        // function 
        QIODevice.prototype.isReadable = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.isReadable");
          
              return this.__PROXY__.isReadable(...args);
            
        };
    
        // function 
        QIODevice.prototype.isWritable = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.isWritable");
          
              return this.__PROXY__.isWritable(...args);
            
        };
    
        // function 
        QIODevice.prototype.isSequential = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.isSequential");
          
              return this.__PROXY__.isSequential(...args);
            
        };
    
        // function 
        QIODevice.prototype.readChannelCount = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.readChannelCount");
          
              return this.__PROXY__.readChannelCount(...args);
            
        };
    
        // function 
        QIODevice.prototype.writeChannelCount = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.writeChannelCount");
          
              return this.__PROXY__.writeChannelCount(...args);
            
        };
    
        // function 
        QIODevice.prototype.currentReadChannel = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.currentReadChannel");
          
              return this.__PROXY__.currentReadChannel(...args);
            
        };
    
        // function 
        QIODevice.prototype.setCurrentReadChannel = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.setCurrentReadChannel");
          
              return this.__PROXY__.setCurrentReadChannel(...args);
            
        };
    
        // function 
        QIODevice.prototype.currentWriteChannel = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.currentWriteChannel");
          
              return this.__PROXY__.currentWriteChannel(...args);
            
        };
    
        // function 
        QIODevice.prototype.setCurrentWriteChannel = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.setCurrentWriteChannel");
          
              return this.__PROXY__.setCurrentWriteChannel(...args);
            
        };
    
        // function 
        QIODevice.prototype.open = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.open");
          
              return this.__PROXY__.open(...args);
            
        };
    
        // function 
        QIODevice.prototype.close = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QIODevice.prototype.pos = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.pos");
          
              return this.__PROXY__.pos(...args);
            
        };
    
        // function 
        QIODevice.prototype.size = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
    
        // function 
        QIODevice.prototype.seek = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.seek");
          
              return this.__PROXY__.seek(...args);
            
        };
    
        // function 
        QIODevice.prototype.atEnd = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.atEnd");
          
              return this.__PROXY__.atEnd(...args);
            
        };
    
        // function 
        QIODevice.prototype.reset = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
    
        // function 
        QIODevice.prototype.bytesAvailable = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.bytesAvailable");
          
              return this.__PROXY__.bytesAvailable(...args);
            
        };
    
        // function 
        QIODevice.prototype.bytesToWrite = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.bytesToWrite");
          
              return this.__PROXY__.bytesToWrite(...args);
            
        };
    
        // function 
        QIODevice.prototype.readAll = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.readAll");
          
              return this.__PROXY__.readAll(...args);
            
        };
    
        // function 
        QIODevice.prototype.canReadLine = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.canReadLine");
          
              return this.__PROXY__.canReadLine(...args);
            
        };
    
        // function 
        QIODevice.prototype.startTransaction = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.startTransaction");
          
              return this.__PROXY__.startTransaction(...args);
            
        };
    
        // function 
        QIODevice.prototype.commitTransaction = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.commitTransaction");
          
              return this.__PROXY__.commitTransaction(...args);
            
        };
    
        // function 
        QIODevice.prototype.rollbackTransaction = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.rollbackTransaction");
          
              return this.__PROXY__.rollbackTransaction(...args);
            
        };
    
        // function 
        QIODevice.prototype.isTransactionStarted = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.isTransactionStarted");
          
              return this.__PROXY__.isTransactionStarted(...args);
            
        };
    
        // function 
        QIODevice.prototype.write = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.write");
          
              return this.__PROXY__.write(...args);
            
        };
    
        // function 
        QIODevice.prototype.skip = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.skip");
          
              return this.__PROXY__.skip(...args);
            
        };
    
        // function 
        QIODevice.prototype.waitForReadyRead = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.waitForReadyRead");
          
              return this.__PROXY__.waitForReadyRead(...args);
            
        };
    
        // function 
        QIODevice.prototype.waitForBytesWritten = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.waitForBytesWritten");
          
              return this.__PROXY__.waitForBytesWritten(...args);
            
        };
    
        // function 
        QIODevice.prototype.ungetChar = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.ungetChar");
          
              return this.__PROXY__.ungetChar(...args);
            
        };
    
        // function 
        QIODevice.prototype.putChar = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.putChar");
          
              return this.__PROXY__.putChar(...args);
            
        };
    
        // function 
        QIODevice.prototype.errorString = function(...args) 
          
        {
          //print("JS: QIODevice.prototype.errorString");
          
              return this.__PROXY__.errorString(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QIODevice.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QIODevice.prototype, 'readyRead', {
            get: function() { return this.__PROXY__.readyRead; },
            configurable: true
        });
        
        Object.defineProperty(QIODevice.prototype, 'channelReadyRead', {
            get: function() { return this.__PROXY__.channelReadyRead; },
            configurable: true
        });
        
          Object.defineProperty(QIODevice.prototype, 'channelReadyRead(int)', {
              get: function() { return this.__PROXY__.channelReadyRead; },
              configurable: true
          });
        
        Object.defineProperty(QIODevice.prototype, 'bytesWritten', {
            get: function() { return this.__PROXY__.bytesWritten; },
            configurable: true
        });
        
          Object.defineProperty(QIODevice.prototype, 'bytesWritten(qint64)', {
              get: function() { return this.__PROXY__.bytesWritten; },
              configurable: true
          });
        
        Object.defineProperty(QIODevice.prototype, 'channelBytesWritten', {
            get: function() { return this.__PROXY__.channelBytesWritten; },
            configurable: true
        });
        
          Object.defineProperty(QIODevice.prototype, 'channelBytesWritten(int,qint64)', {
              get: function() { return this.__PROXY__.channelBytesWritten; },
              configurable: true
          });
        
        Object.defineProperty(QIODevice.prototype, 'aboutToClose', {
            get: function() { return this.__PROXY__.aboutToClose; },
            configurable: true
        });
        
        Object.defineProperty(QIODevice.prototype, 'readChannelFinished', {
            get: function() { return this.__PROXY__.readChannelFinished; },
            configurable: true
        });
        QIODevice.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QIODevice.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QIODevice.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QIODevice.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QIODevice.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QIODevice.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      