
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
            arguments[2].getWrappedType()===
              
                  RJSType_QIODevice.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QIODevice);
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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
    this["channelReadyRead(int)"] = Object.getPrototypeOf(this).channelReadyRead;
  
    this["bytesWritten(qint64)"] = Object.getPrototypeOf(this).bytesWritten;
  
    this["channelBytesWritten(int,qint64)"] = Object.getPrototypeOf(this).channelBytesWritten;
  
          }
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
      

      // static functions:
      

        // static function 
        QIODevice.tr = function() 
          
        {
          //print("JS: QIODevice.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QIODevice_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QIODevice);
  }

  
  else {
    
        print("QIODevice.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
    