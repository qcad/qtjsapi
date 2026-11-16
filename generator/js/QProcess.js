
      // auto generated
      //var self;

      // class constructor:
      function QProcess() {
        

        // should be QProcess_BaseJs.call(this, engine):
        //QProcess.prototype = new QProcess_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QProcess.getIdStatic()))) {

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
            qWarning("QProcess.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QProcess_Wrapper(
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

      

        //copyProperties(this, wrapper, QProcess);
  }

  
  else {
    
        print("QProcess(): wrong number / type of arguments");
      
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

      //QProcess.prototype = new QProcess_BaseJs(engine);
      //QProcess.prototype = new QProcess_Wrapper(engine);
      QProcess.prototype = new Object();


      QProcess.prototype.toString = function() {
          //return "QProcess [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QProcess [JS]";
        };
      QProcess.getObjectType = function() {
        return RJSType_QProcess.getIdStatic();
      };

      QProcess.prototype.getObjectType = function() {
        return RJSType_QProcess.getIdStatic();
      };

      QProcess.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QProcess.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QIODevice.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ProcessError
QProcess.FailedToStart = QProcess_Wrapper.FailedToStart;
QProcess.Crashed = QProcess_Wrapper.Crashed;
QProcess.Timedout = QProcess_Wrapper.Timedout;
QProcess.ReadError = QProcess_Wrapper.ReadError;
QProcess.WriteError = QProcess_Wrapper.WriteError;
QProcess.UnknownError = QProcess_Wrapper.UnknownError;

  // enum: ProcessState
QProcess.NotRunning = QProcess_Wrapper.NotRunning;
QProcess.Starting = QProcess_Wrapper.Starting;
QProcess.Running = QProcess_Wrapper.Running;

  // enum: ProcessChannel
QProcess.StandardOutput = QProcess_Wrapper.StandardOutput;
QProcess.StandardError = QProcess_Wrapper.StandardError;

  // enum: ProcessChannelMode
QProcess.SeparateChannels = QProcess_Wrapper.SeparateChannels;
QProcess.MergedChannels = QProcess_Wrapper.MergedChannels;
QProcess.ForwardedChannels = QProcess_Wrapper.ForwardedChannels;
QProcess.ForwardedOutputChannel = QProcess_Wrapper.ForwardedOutputChannel;
QProcess.ForwardedErrorChannel = QProcess_Wrapper.ForwardedErrorChannel;

  // enum: InputChannelMode
QProcess.ManagedInputChannel = QProcess_Wrapper.ManagedInputChannel;
QProcess.ForwardedInputChannel = QProcess_Wrapper.ForwardedInputChannel;

  // enum: ExitStatus
QProcess.NormalExit = QProcess_Wrapper.NormalExit;
QProcess.CrashExit = QProcess_Wrapper.CrashExit;


      // functions:
      
        // function 
        QProcess.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QProcess.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QProcess.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QProcess.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QProcess.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QProcess.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QProcess.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QProcess.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QProcess.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QProcess.prototype.findChild = function(...args) 
          
        {
          //print("JS: QProcess.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QProcess.prototype.children = function(...args) 
          
        {
          //print("JS: QProcess.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QProcess.prototype.setParent = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QProcess.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QProcess.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QProcess.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QProcess.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QProcess.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QProcess.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QProcess.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QProcess.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QProcess.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QProcess.prototype.property = function(...args) 
          
        {
          //print("JS: QProcess.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QProcess.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QProcess.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QProcess.prototype.parent = function(...args) 
          
        {
          //print("JS: QProcess.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QProcess.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QProcess.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QProcess.prototype.openMode = function(...args) 
          
        {
          //print("JS: QProcess.prototype.openMode");
          
              return this.__PROXY__.openMode(...args);
            
        };
        
        // function 
        QProcess.prototype.setTextModeEnabled = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setTextModeEnabled");
          
              return this.__PROXY__.setTextModeEnabled(...args);
            
        };
        
        // function 
        QProcess.prototype.isTextModeEnabled = function(...args) 
          
        {
          //print("JS: QProcess.prototype.isTextModeEnabled");
          
              return this.__PROXY__.isTextModeEnabled(...args);
            
        };
        
        // function 
        QProcess.prototype.isOpen = function(...args) 
          
        {
          //print("JS: QProcess.prototype.isOpen");
          
              return this.__PROXY__.isOpen(...args);
            
        };
        
        // function 
        QProcess.prototype.isReadable = function(...args) 
          
        {
          //print("JS: QProcess.prototype.isReadable");
          
              return this.__PROXY__.isReadable(...args);
            
        };
        
        // function 
        QProcess.prototype.isWritable = function(...args) 
          
        {
          //print("JS: QProcess.prototype.isWritable");
          
              return this.__PROXY__.isWritable(...args);
            
        };
        
        // function 
        QProcess.prototype.readChannelCount = function(...args) 
          
        {
          //print("JS: QProcess.prototype.readChannelCount");
          
              return this.__PROXY__.readChannelCount(...args);
            
        };
        
        // function 
        QProcess.prototype.writeChannelCount = function(...args) 
          
        {
          //print("JS: QProcess.prototype.writeChannelCount");
          
              return this.__PROXY__.writeChannelCount(...args);
            
        };
        
        // function 
        QProcess.prototype.currentReadChannel = function(...args) 
          
        {
          //print("JS: QProcess.prototype.currentReadChannel");
          
              return this.__PROXY__.currentReadChannel(...args);
            
        };
        
        // function 
        QProcess.prototype.setCurrentReadChannel = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setCurrentReadChannel");
          
              return this.__PROXY__.setCurrentReadChannel(...args);
            
        };
        
        // function 
        QProcess.prototype.currentWriteChannel = function(...args) 
          
        {
          //print("JS: QProcess.prototype.currentWriteChannel");
          
              return this.__PROXY__.currentWriteChannel(...args);
            
        };
        
        // function 
        QProcess.prototype.setCurrentWriteChannel = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setCurrentWriteChannel");
          
              return this.__PROXY__.setCurrentWriteChannel(...args);
            
        };
        
        // function 
        QProcess.prototype.pos = function(...args) 
          
        {
          //print("JS: QProcess.prototype.pos");
          
              return this.__PROXY__.pos(...args);
            
        };
        
        // function 
        QProcess.prototype.size = function(...args) 
          
        {
          //print("JS: QProcess.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
        
        // function 
        QProcess.prototype.seek = function(...args) 
          
        {
          //print("JS: QProcess.prototype.seek");
          
              return this.__PROXY__.seek(...args);
            
        };
        
        // function 
        QProcess.prototype.atEnd = function(...args) 
          
        {
          //print("JS: QProcess.prototype.atEnd");
          
              return this.__PROXY__.atEnd(...args);
            
        };
        
        // function 
        QProcess.prototype.reset = function(...args) 
          
        {
          //print("JS: QProcess.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
        
        // function 
        QProcess.prototype.bytesAvailable = function(...args) 
          
        {
          //print("JS: QProcess.prototype.bytesAvailable");
          
              return this.__PROXY__.bytesAvailable(...args);
            
        };
        
        // function 
        QProcess.prototype.readAll = function(...args) 
          
        {
          //print("JS: QProcess.prototype.readAll");
          
              return this.__PROXY__.readAll(...args);
            
        };
        
        // function 
        QProcess.prototype.canReadLine = function(...args) 
          
        {
          //print("JS: QProcess.prototype.canReadLine");
          
              return this.__PROXY__.canReadLine(...args);
            
        };
        
        // function 
        QProcess.prototype.startTransaction = function(...args) 
          
        {
          //print("JS: QProcess.prototype.startTransaction");
          
              return this.__PROXY__.startTransaction(...args);
            
        };
        
        // function 
        QProcess.prototype.commitTransaction = function(...args) 
          
        {
          //print("JS: QProcess.prototype.commitTransaction");
          
              return this.__PROXY__.commitTransaction(...args);
            
        };
        
        // function 
        QProcess.prototype.rollbackTransaction = function(...args) 
          
        {
          //print("JS: QProcess.prototype.rollbackTransaction");
          
              return this.__PROXY__.rollbackTransaction(...args);
            
        };
        
        // function 
        QProcess.prototype.isTransactionStarted = function(...args) 
          
        {
          //print("JS: QProcess.prototype.isTransactionStarted");
          
              return this.__PROXY__.isTransactionStarted(...args);
            
        };
        
        // function 
        QProcess.prototype.write = function(...args) 
          
        {
          //print("JS: QProcess.prototype.write");
          
              return this.__PROXY__.write(...args);
            
        };
        
        // function 
        QProcess.prototype.skip = function(...args) 
          
        {
          //print("JS: QProcess.prototype.skip");
          
              return this.__PROXY__.skip(...args);
            
        };
        
        // function 
        QProcess.prototype.ungetChar = function(...args) 
          
        {
          //print("JS: QProcess.prototype.ungetChar");
          
              return this.__PROXY__.ungetChar(...args);
            
        };
        
        // function 
        QProcess.prototype.putChar = function(...args) 
          
        {
          //print("JS: QProcess.prototype.putChar");
          
              return this.__PROXY__.putChar(...args);
            
        };
        
        // function 
        QProcess.prototype.errorString = function(...args) 
          
        {
          //print("JS: QProcess.prototype.errorString");
          
              return this.__PROXY__.errorString(...args);
            
        };
        
        // function 
        QProcess.prototype.start = function(...args) 
          
        {
          //print("JS: QProcess.prototype.start");
          
              return this.__PROXY__.start(...args);
            
        };
        
        // function 
        QProcess.prototype.startCommand = function(...args) 
          
        {
          //print("JS: QProcess.prototype.startCommand");
          
              return this.__PROXY__.startCommand(...args);
            
        };
        
        // function 
        QProcess.prototype.startDetached = function(...args) 
          
        {
          //print("JS: QProcess.prototype.startDetached");
          
              return this.__PROXY__.startDetached(...args);
            
        };
        
        // function 
        QProcess.prototype.open = function(...args) 
          
        {
          //print("JS: QProcess.prototype.open");
          
              return this.__PROXY__.open(...args);
            
        };
        
        // function 
        QProcess.prototype.program = function(...args) 
          
        {
          //print("JS: QProcess.prototype.program");
          
              return this.__PROXY__.program(...args);
            
        };
        
        // function 
        QProcess.prototype.setProgram = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setProgram");
          
              return this.__PROXY__.setProgram(...args);
            
        };
        
        // function 
        QProcess.prototype.arguments = function(...args) 
          
        {
          //print("JS: QProcess.prototype.arguments");
          
              return this.__PROXY__.arguments(...args);
            
        };
        
        // function 
        QProcess.prototype.setArguments = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setArguments");
          
              return this.__PROXY__.setArguments(...args);
            
        };
        
        // function 
        QProcess.prototype.processChannelMode = function(...args) 
          
        {
          //print("JS: QProcess.prototype.processChannelMode");
          
              return this.__PROXY__.processChannelMode(...args);
            
        };
        
        // function 
        QProcess.prototype.setProcessChannelMode = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setProcessChannelMode");
          
              return this.__PROXY__.setProcessChannelMode(...args);
            
        };
        
        // function 
        QProcess.prototype.inputChannelMode = function(...args) 
          
        {
          //print("JS: QProcess.prototype.inputChannelMode");
          
              return this.__PROXY__.inputChannelMode(...args);
            
        };
        
        // function 
        QProcess.prototype.setInputChannelMode = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setInputChannelMode");
          
              return this.__PROXY__.setInputChannelMode(...args);
            
        };
        
        // function 
        QProcess.prototype.readChannel = function(...args) 
          
        {
          //print("JS: QProcess.prototype.readChannel");
          
              return this.__PROXY__.readChannel(...args);
            
        };
        
        // function 
        QProcess.prototype.setReadChannel = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setReadChannel");
          
              return this.__PROXY__.setReadChannel(...args);
            
        };
        
        // function 
        QProcess.prototype.closeReadChannel = function(...args) 
          
        {
          //print("JS: QProcess.prototype.closeReadChannel");
          
              return this.__PROXY__.closeReadChannel(...args);
            
        };
        
        // function 
        QProcess.prototype.closeWriteChannel = function(...args) 
          
        {
          //print("JS: QProcess.prototype.closeWriteChannel");
          
              return this.__PROXY__.closeWriteChannel(...args);
            
        };
        
        // function 
        QProcess.prototype.setStandardInputFile = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setStandardInputFile");
          
              return this.__PROXY__.setStandardInputFile(...args);
            
        };
        
        // function 
        QProcess.prototype.setStandardOutputFile = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setStandardOutputFile");
          
              return this.__PROXY__.setStandardOutputFile(...args);
            
        };
        
        // function 
        QProcess.prototype.setStandardErrorFile = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setStandardErrorFile");
          
              return this.__PROXY__.setStandardErrorFile(...args);
            
        };
        
        // function 
        QProcess.prototype.setStandardOutputProcess = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setStandardOutputProcess");
          
              return this.__PROXY__.setStandardOutputProcess(...args);
            
        };
        
        // function 
        QProcess.prototype.nativeArguments = function(...args) 
          
        {
          //print("JS: QProcess.prototype.nativeArguments");
          
              return this.__PROXY__.nativeArguments(...args);
            
        };
        
        // function 
        QProcess.prototype.setNativeArguments = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setNativeArguments");
          
              return this.__PROXY__.setNativeArguments(...args);
            
        };
        
        // function 
        QProcess.prototype.workingDirectory = function(...args) 
          
        {
          //print("JS: QProcess.prototype.workingDirectory");
          
              return this.__PROXY__.workingDirectory(...args);
            
        };
        
        // function 
        QProcess.prototype.setWorkingDirectory = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setWorkingDirectory");
          
              return this.__PROXY__.setWorkingDirectory(...args);
            
        };
        
        // function 
        QProcess.prototype.setEnvironment = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setEnvironment");
          
              return this.__PROXY__.setEnvironment(...args);
            
        };
        
        // function 
        QProcess.prototype.environment = function(...args) 
          
        {
          //print("JS: QProcess.prototype.environment");
          
              return this.__PROXY__.environment(...args);
            
        };
        
        // function 
        QProcess.prototype.setProcessEnvironment = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setProcessEnvironment");
          
              return this.__PROXY__.setProcessEnvironment(...args);
            
        };
        
        // function 
        QProcess.prototype.processEnvironment = function(...args) 
          
        {
          //print("JS: QProcess.prototype.processEnvironment");
          
              return this.__PROXY__.processEnvironment(...args);
            
        };
        
        // function 
        QProcess.prototype.error = function(...args) 
          
        {
          //print("JS: QProcess.prototype.error");
          
              return this.__PROXY__.error(...args);
            
        };
        
        // function 
        QProcess.prototype.state = function(...args) 
          
        {
          //print("JS: QProcess.prototype.state");
          
              return this.__PROXY__.state(...args);
            
        };
        
        // function 
        QProcess.prototype.processId = function(...args) 
          
        {
          //print("JS: QProcess.prototype.processId");
          
              return this.__PROXY__.processId(...args);
            
        };
        
        // function 
        QProcess.prototype.waitForStarted = function(...args) 
          
        {
          //print("JS: QProcess.prototype.waitForStarted");
          
              return this.__PROXY__.waitForStarted(...args);
            
        };
        
        // function 
        QProcess.prototype.waitForReadyRead = function(...args) 
          
        {
          //print("JS: QProcess.prototype.waitForReadyRead");
          
              return this.__PROXY__.waitForReadyRead(...args);
            
        };
        
        // function 
        QProcess.prototype.waitForBytesWritten = function(...args) 
          
        {
          //print("JS: QProcess.prototype.waitForBytesWritten");
          
              return this.__PROXY__.waitForBytesWritten(...args);
            
        };
        
        // function 
        QProcess.prototype.waitForFinished = function(...args) 
          
        {
          //print("JS: QProcess.prototype.waitForFinished");
          
              return this.__PROXY__.waitForFinished(...args);
            
        };
        
        // function 
        QProcess.prototype.readAllStandardOutput = function(...args) 
          
        {
          //print("JS: QProcess.prototype.readAllStandardOutput");
          
              return this.__PROXY__.readAllStandardOutput(...args);
            
        };
        
        // function 
        QProcess.prototype.readAllStandardError = function(...args) 
          
        {
          //print("JS: QProcess.prototype.readAllStandardError");
          
              return this.__PROXY__.readAllStandardError(...args);
            
        };
        
        // function 
        QProcess.prototype.exitCode = function(...args) 
          
        {
          //print("JS: QProcess.prototype.exitCode");
          
              return this.__PROXY__.exitCode(...args);
            
        };
        
        // function 
        QProcess.prototype.exitStatus = function(...args) 
          
        {
          //print("JS: QProcess.prototype.exitStatus");
          
              return this.__PROXY__.exitStatus(...args);
            
        };
        
        // function 
        QProcess.prototype.bytesToWrite = function(...args) 
          
        {
          //print("JS: QProcess.prototype.bytesToWrite");
          
              return this.__PROXY__.bytesToWrite(...args);
            
        };
        
        // function 
        QProcess.prototype.isSequential = function(...args) 
          
        {
          //print("JS: QProcess.prototype.isSequential");
          
              return this.__PROXY__.isSequential(...args);
            
        };
        
        // function 
        QProcess.prototype.close = function(...args) 
          
        {
          //print("JS: QProcess.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QProcess.prototype.systemEnvironment = function(...args) 
          
        {
          //print("JS: QProcess.prototype.systemEnvironment");
          
              return this.__PROXY__.systemEnvironment(...args);
            
        };
        
        // function 
        QProcess.prototype.nullDevice = function(...args) 
          
        {
          //print("JS: QProcess.prototype.nullDevice");
          
              return this.__PROXY__.nullDevice(...args);
            
        };
        
        // function 
        QProcess.prototype.terminate = function(...args) 
          
        {
          //print("JS: QProcess.prototype.terminate");
          
              return this.__PROXY__.terminate(...args);
            
        };
        
        // function 
        QProcess.prototype.kill = function(...args) 
          
        {
          //print("JS: QProcess.prototype.kill");
          
              return this.__PROXY__.kill(...args);
            
        };
        
        // function 
        QProcess.prototype.setProcessState = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setProcessState");
          
              return this.__PROXY__.setProcessState(...args);
            
        };
        
        // function 
        QProcess.prototype.readData = function(...args) 
          
        {
          //print("JS: QProcess.prototype.readData");
          
              return this.__PROXY__.readData(...args);
            
        };
        
        // function 
        QProcess.prototype.writeData = function(...args) 
          
        {
          //print("JS: QProcess.prototype.writeData");
          
              return this.__PROXY__.writeData(...args);
            
        };
        
        // function 
        QProcess.prototype.setupChildProcess = function(...args) 
          
        {
          //print("JS: QProcess.prototype.setupChildProcess");
          
              return this.__PROXY__.setupChildProcess(...args);
            
        };
        

      // static functions:
      

        // static function 
        QProcess.systemEnvironment = function() 
          
        {
          //print("JS: QProcess.systemEnvironment");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QProcess_WrapperSingletonInstance.systemEnvironment(
                  
                );
              

        //copyProperties(this, wrapper, QProcess);
  }

  
  else {
    
        print("QProcess.systemEnvironment(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QProcess.nullDevice = function() 
          
        {
          //print("JS: QProcess.nullDevice");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QProcess_WrapperSingletonInstance.nullDevice(
                  
                );
              

        //copyProperties(this, wrapper, QProcess);
  }

  
  else {
    
        print("QProcess.nullDevice(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(QProcess.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QProcess.prototype, 'readyRead', {
            get: function() { return this.__PROXY__.readyRead; },
            configurable: true
        });
        
        Object.defineProperty(QProcess.prototype, 'channelReadyRead', {
            get: function() { return this.__PROXY__.channelReadyRead; },
            configurable: true
        });
        
          Object.defineProperty(QProcess.prototype, 'channelReadyRead(int)', {
              get: function() { return this.__PROXY__.channelReadyRead; },
              configurable: true
          });
        
        Object.defineProperty(QProcess.prototype, 'bytesWritten', {
            get: function() { return this.__PROXY__.bytesWritten; },
            configurable: true
        });
        
          Object.defineProperty(QProcess.prototype, 'bytesWritten(qint64)', {
              get: function() { return this.__PROXY__.bytesWritten; },
              configurable: true
          });
        
        Object.defineProperty(QProcess.prototype, 'channelBytesWritten', {
            get: function() { return this.__PROXY__.channelBytesWritten; },
            configurable: true
        });
        
          Object.defineProperty(QProcess.prototype, 'channelBytesWritten(int,qint64)', {
              get: function() { return this.__PROXY__.channelBytesWritten; },
              configurable: true
          });
        
        Object.defineProperty(QProcess.prototype, 'aboutToClose', {
            get: function() { return this.__PROXY__.aboutToClose; },
            configurable: true
        });
        
        Object.defineProperty(QProcess.prototype, 'readChannelFinished', {
            get: function() { return this.__PROXY__.readChannelFinished; },
            configurable: true
        });
        
        Object.defineProperty(QProcess.prototype, 'finished', {
            get: function() { return this.__PROXY__.finished; },
            configurable: true
        });
        
          Object.defineProperty(QProcess.prototype, 'finished(int,QProcess::ExitStatus)', {
              get: function() { return this.__PROXY__.finished; },
              configurable: true
          });
        
        Object.defineProperty(QProcess.prototype, 'errorOccurred', {
            get: function() { return this.__PROXY__.errorOccurred; },
            configurable: true
        });
        
          Object.defineProperty(QProcess.prototype, 'errorOccurred(QProcess::ProcessError)', {
              get: function() { return this.__PROXY__.errorOccurred; },
              configurable: true
          });
        
        Object.defineProperty(QProcess.prototype, 'readyReadStandardOutput', {
            get: function() { return this.__PROXY__.readyReadStandardOutput; },
            configurable: true
        });
        
        Object.defineProperty(QProcess.prototype, 'readyReadStandardError', {
            get: function() { return this.__PROXY__.readyReadStandardError; },
            configurable: true
        });
        QProcess.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QProcess.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QProcess.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QProcess.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QProcess.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QProcess.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      