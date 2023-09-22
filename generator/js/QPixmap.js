
      // auto generated
      //var self;

      // class constructor:
      function QPixmap() {
        

        // should be QPixmap_BaseJs.call(this, engine):
        //QPixmap.prototype = new QPixmap_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QPixmap.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QPixmap);
            //}
          }
          else {
            qWarning("QPixmap.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QPixmap_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPixmap);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QPixmap_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPixmap);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPixmap_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPixmap);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPixmap_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPixmap);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPixmap_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPixmap);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPixmap_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPixmap);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPixmap_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPixmap);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else {
    
        print("QPixmap(): wrong number / type of arguments");
      
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

      //QPixmap.prototype = new QPixmap_BaseJs(engine);
      //QPixmap.prototype = new QPixmap_Wrapper(engine);
      QPixmap.prototype = new Object();

      QPixmap.prototype.toString = function() {
          //return "QPixmap [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPixmap [JS]";
        };
      QPixmap.getObjectType = function() {
        
            return RJSType_QPixmap.getIdStatic();
          
      };

      QPixmap.prototype.getObjectType = function() {
        
            return RJSType_QPixmap.getIdStatic();
          
      };

      QPixmap.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QPixmap.getIdStatic()) {
              return true;
            }
          
          if (t===RJSType_QPaintDevice.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QPixmap.devicePixelRatioFScale = function() 
          
        {
          //print("JS: QPixmap.devicePixelRatioFScale");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QPixmap_WrapperSingletonInstance.devicePixelRatioFScale(
                  
                );
              

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else {
    
        print("QPixmap.devicePixelRatioFScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPixmap.defaultDepth = function() 
          
        {
          //print("JS: QPixmap.defaultDepth");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QPixmap_WrapperSingletonInstance.defaultDepth(
                  
                );
              

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else {
    
        print("QPixmap.defaultDepth(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPixmap.trueMatrix = function() 
          
        {
          //print("JS: QPixmap.trueMatrix");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return QPixmap_WrapperSingletonInstance.trueMatrix(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else {
    
        print("QPixmap.trueMatrix(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPixmap.fromImage = function() 
          
        {
          //print("JS: QPixmap.fromImage");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QPixmap_WrapperSingletonInstance.fromImage(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QPixmap_WrapperSingletonInstance.fromImage(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else {
    
        print("QPixmap.fromImage(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPixmap.fromImageReader = function() 
          
        {
          //print("JS: QPixmap.fromImageReader");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QPixmap_WrapperSingletonInstance.fromImageReader(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else {
    
        print("QPixmap.fromImageReader(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPixmap.fromImageInPlace = function() 
          
        {
          //print("JS: QPixmap.fromImageInPlace");
          
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPixmap.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPixmap.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    