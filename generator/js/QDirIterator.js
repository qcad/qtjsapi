
      // auto generated
      //var self;

      // class constructor:
      function QDirIterator() {
        

        // should be QDirIterator_BaseJs.call(this, engine):
        //QDirIterator.prototype = new QDirIterator_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDirIterator.getIdStatic()))) {

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
            qWarning("QDirIterator.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QDirIterator_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDirIterator);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QDirIterator_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDirIterator);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QDirIterator_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDirIterator);
  }

  
  else {
    
        print("QDirIterator(): wrong number / type of arguments");
      
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

      //QDirIterator.prototype = new QDirIterator_BaseJs(engine);
      //QDirIterator.prototype = new QDirIterator_Wrapper(engine);
      QDirIterator.prototype = new Object();


      QDirIterator.prototype.toString = function() {
          //return "QDirIterator [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDirIterator [JS]";
        };
      QDirIterator.getObjectType = function() {
        return RJSType_QDirIterator.getIdStatic();
      };

      QDirIterator.prototype.getObjectType = function() {
        return RJSType_QDirIterator.getIdStatic();
      };

      QDirIterator.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDirIterator.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: IteratorFlag
QDirIterator.NoIteratorFlags = QDirIterator_Wrapper.NoIteratorFlags;
QDirIterator.FollowSymlinks = QDirIterator_Wrapper.FollowSymlinks;
QDirIterator.Subdirectories = QDirIterator_Wrapper.Subdirectories;


      // functions:
      
        // function 
        QDirIterator.prototype.next = function(...args) 
          
        {
          //print("JS: QDirIterator.prototype.next");
          
              return this.__PROXY__.next(...args);
            
        };
        
        // function 
        QDirIterator.prototype.nextFileInfo = function(...args) 
          
        {
          //print("JS: QDirIterator.prototype.nextFileInfo");
          
              return this.__PROXY__.nextFileInfo(...args);
            
        };
        
        // function 
        QDirIterator.prototype.hasNext = function(...args) 
          
        {
          //print("JS: QDirIterator.prototype.hasNext");
          
              return this.__PROXY__.hasNext(...args);
            
        };
        
        // function 
        QDirIterator.prototype.fileName = function(...args) 
          
        {
          //print("JS: QDirIterator.prototype.fileName");
          
              return this.__PROXY__.fileName(...args);
            
        };
        
        // function 
        QDirIterator.prototype.filePath = function(...args) 
          
        {
          //print("JS: QDirIterator.prototype.filePath");
          
              return this.__PROXY__.filePath(...args);
            
        };
        
        // function 
        QDirIterator.prototype.fileInfo = function(...args) 
          
        {
          //print("JS: QDirIterator.prototype.fileInfo");
          
              return this.__PROXY__.fileInfo(...args);
            
        };
        
        // function 
        QDirIterator.prototype.path = function(...args) 
          
        {
          //print("JS: QDirIterator.prototype.path");
          
              return this.__PROXY__.path(...args);
            
        };
        

      // static functions:
      QDirIterator.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QDirIterator.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QDirIterator.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDirIterator.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDirIterator.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDirIterator.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      