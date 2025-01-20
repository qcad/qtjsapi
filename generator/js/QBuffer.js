
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
              
                  copyProperties(this, wrapper, QBuffer);
                
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
          
            copyProperties(this, wrapper, QBuffer);
          

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
          
            copyProperties(this, wrapper, QBuffer);
          

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

      