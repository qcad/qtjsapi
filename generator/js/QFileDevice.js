
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
            arguments[2].getWrappedType()===
              
                  RJSType_QFileDevice.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QFileDevice);
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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
    this["channelReadyRead(int)"] = Object.getPrototypeOf(this).channelReadyRead;
  
    this["bytesWritten(qint64)"] = Object.getPrototypeOf(this).bytesWritten;
  
    this["channelBytesWritten(int,qint64)"] = Object.getPrototypeOf(this).channelBytesWritten;
  
          }
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
      

      // static functions:
      

        // static function 
        QFileDevice.tr = function() 
          
        {
          //print("JS: QFileDevice.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QFileDevice_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QFileDevice);
  }

  
  else {
    
        print("QFileDevice.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
    