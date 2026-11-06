
      // auto generated
      //var self;

      // class constructor:
      function QFileIconProvider() {
        

        // should be QFileIconProvider_BaseJs.call(this, engine):
        //QFileIconProvider.prototype = new QFileIconProvider_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFileIconProvider.getIdStatic()))) {

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
            qWarning("QFileIconProvider.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QFileIconProvider_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFileIconProvider);
  }

  
  else {
    
        print("QFileIconProvider(): wrong number / type of arguments");
      
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

      //QFileIconProvider.prototype = new QFileIconProvider_BaseJs(engine);
      //QFileIconProvider.prototype = new QFileIconProvider_Wrapper(engine);
      QFileIconProvider.prototype = new Object();


      QFileIconProvider.prototype.toString = function() {
          //return "QFileIconProvider [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFileIconProvider [JS]";
        };
      QFileIconProvider.getObjectType = function() {
        return RJSType_QFileIconProvider.getIdStatic();
      };

      QFileIconProvider.prototype.getObjectType = function() {
        return RJSType_QFileIconProvider.getIdStatic();
      };

      QFileIconProvider.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFileIconProvider.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QAbstractFileIconProvider.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: IconType
QFileIconProvider.Computer = QFileIconProvider_Wrapper.Computer;
QFileIconProvider.Desktop = QFileIconProvider_Wrapper.Desktop;
QFileIconProvider.Trashcan = QFileIconProvider_Wrapper.Trashcan;
QFileIconProvider.Network = QFileIconProvider_Wrapper.Network;
QFileIconProvider.Drive = QFileIconProvider_Wrapper.Drive;
QFileIconProvider.Folder = QFileIconProvider_Wrapper.Folder;
QFileIconProvider.File = QFileIconProvider_Wrapper.File;

  // enum: Option
QFileIconProvider.DontUseCustomDirectoryIcons = QFileIconProvider_Wrapper.DontUseCustomDirectoryIcons;


      // functions:
      
        // function 
        QFileIconProvider.prototype.type = function(...args) 
          
        {
          //print("JS: QFileIconProvider.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
        
        // function 
        QFileIconProvider.prototype.setOptions = function(...args) 
          
        {
          //print("JS: QFileIconProvider.prototype.setOptions");
          
              return this.__PROXY__.setOptions(...args);
            
        };
        
        // function 
        QFileIconProvider.prototype.options = function(...args) 
          
        {
          //print("JS: QFileIconProvider.prototype.options");
          
              return this.__PROXY__.options(...args);
            
        };
        
        // function 
        QFileIconProvider.prototype.icon = function(...args) 
          
        {
          //print("JS: QFileIconProvider.prototype.icon");
          
              return this.__PROXY__.icon(...args);
            
        };
        

      // static functions:
      QFileIconProvider.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QFileIconProvider.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QFileIconProvider.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFileIconProvider.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFileIconProvider.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QFileIconProvider.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      