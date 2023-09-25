
      // auto generated
      //var self;

      // class constructor:
      function QAbstractFileIconProvider() {
        

        // should be QAbstractFileIconProvider_BaseJs.call(this, engine):
        //QAbstractFileIconProvider.prototype = new QAbstractFileIconProvider_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractFileIconProvider.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QAbstractFileIconProvider);
            //}
          }
          else {
            qWarning("QAbstractFileIconProvider.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QAbstractFileIconProvider_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QAbstractFileIconProvider);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QAbstractFileIconProvider);
  }

  
  else {
    
        print("QAbstractFileIconProvider(): wrong number / type of arguments");
      
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

      //QAbstractFileIconProvider.prototype = new QAbstractFileIconProvider_BaseJs(engine);
      //QAbstractFileIconProvider.prototype = new QAbstractFileIconProvider_Wrapper(engine);
      QAbstractFileIconProvider.prototype = new Object();

      QAbstractFileIconProvider.prototype.toString = function() {
          //return "QAbstractFileIconProvider [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractFileIconProvider [JS]";
        };
      QAbstractFileIconProvider.getObjectType = function() {
        return RJSType_QAbstractFileIconProvider.getIdStatic();
      };

      QAbstractFileIconProvider.prototype.getObjectType = function() {
        return RJSType_QAbstractFileIconProvider.getIdStatic();
      };

      QAbstractFileIconProvider.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractFileIconProvider.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: IconType
QAbstractFileIconProvider.Computer = QAbstractFileIconProvider_Wrapper.Computer;
QAbstractFileIconProvider.Desktop = QAbstractFileIconProvider_Wrapper.Desktop;
QAbstractFileIconProvider.Trashcan = QAbstractFileIconProvider_Wrapper.Trashcan;
QAbstractFileIconProvider.Network = QAbstractFileIconProvider_Wrapper.Network;
QAbstractFileIconProvider.Drive = QAbstractFileIconProvider_Wrapper.Drive;
QAbstractFileIconProvider.Folder = QAbstractFileIconProvider_Wrapper.Folder;
QAbstractFileIconProvider.File = QAbstractFileIconProvider_Wrapper.File;

  // enum: Option
QAbstractFileIconProvider.DontUseCustomDirectoryIcons = QAbstractFileIconProvider_Wrapper.DontUseCustomDirectoryIcons;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractFileIconProvider.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractFileIconProvider.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    