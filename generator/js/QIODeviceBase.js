
      // auto generated
      //var self;

      // class constructor:
      function QIODeviceBase() {
        

        // should be QIODeviceBase_BaseJs.call(this, engine):
        //QIODeviceBase.prototype = new QIODeviceBase_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QIODeviceBase.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QIODeviceBase);
            //}
          }
          else {
            qWarning("QIODeviceBase.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QIODeviceBase_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QIODeviceBase);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QIODeviceBase);
  }

  
  else {
    
        print("QIODeviceBase(): wrong number / type of arguments");
      
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
            
          }
        }
      }

      //QIODeviceBase.prototype = new QIODeviceBase_BaseJs(engine);
      //QIODeviceBase.prototype = new QIODeviceBase_Wrapper(engine);
      QIODeviceBase.prototype = new Object();

      QIODeviceBase.prototype.toString = function() {
          //return "QIODeviceBase [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QIODeviceBase [JS]";
        };
      QIODeviceBase.getObjectType = function() {
        return RJSType_QIODeviceBase.getIdStatic();
      };

      QIODeviceBase.prototype.getObjectType = function() {
        return RJSType_QIODeviceBase.getIdStatic();
      };

      QIODeviceBase.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QIODeviceBase.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: OpenModeFlag
QIODeviceBase.NotOpen = QIODeviceBase_Wrapper.NotOpen;
QIODeviceBase.ReadOnly = QIODeviceBase_Wrapper.ReadOnly;
QIODeviceBase.WriteOnly = QIODeviceBase_Wrapper.WriteOnly;
QIODeviceBase.ReadWrite = QIODeviceBase_Wrapper.ReadWrite;
QIODeviceBase.Append = QIODeviceBase_Wrapper.Append;
QIODeviceBase.Truncate = QIODeviceBase_Wrapper.Truncate;
QIODeviceBase.Text = QIODeviceBase_Wrapper.Text;
QIODeviceBase.Unbuffered = QIODeviceBase_Wrapper.Unbuffered;
QIODeviceBase.NewOnly = QIODeviceBase_Wrapper.NewOnly;
QIODeviceBase.ExistingOnly = QIODeviceBase_Wrapper.ExistingOnly;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QIODeviceBase.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QIODeviceBase.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    