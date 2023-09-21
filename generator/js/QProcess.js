
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
            arguments[2].getWrappedType()===
              
                  RJSType.QProcess_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QProcess);
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
          

        copyProperties(this, wrapper, QProcess);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
    this["channelReadyRead(int)"] = Object.getPrototypeOf(this).channelReadyRead;
  
    this["bytesWritten(qint64)"] = Object.getPrototypeOf(this).bytesWritten;
  
    this["channelBytesWritten(int,qint64)"] = Object.getPrototypeOf(this).channelBytesWritten;
  
    this["finished(int,QProcess::ExitStatus)"] = Object.getPrototypeOf(this).finished;
  
    this["errorOccurred(QProcess::ProcessError)"] = Object.getPrototypeOf(this).errorOccurred;
  
          }
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
        
            return RJSType.QProcess_Type;
          
      };

      QProcess.prototype.getObjectType = function() {
        
            return RJSType.QProcess_Type;
          
      };

      QProcess.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QProcess_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QIODevice_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QProcess_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QIODevice_Type
            
        ].includes(t);
        */
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
      

      // static functions:
      

        // static function 
        QProcess.tr = function() 
          
        {
          //print("JS: QProcess.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QProcess_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QProcess);
  }

  
  else {
    
        print("QProcess.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

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
    