
      // auto generated
      //var self;

      // class constructor:
      function QBitmap() {
        

        // should be QBitmap_BaseJs.call(this, engine):
        //QBitmap.prototype = new QBitmap_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QBitmap.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QBitmap);
            //}
          }
          else {
            qWarning("QBitmap.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QBitmap_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QBitmap);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QBitmap_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QBitmap);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QBitmap_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QBitmap);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QBitmap_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QBitmap);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else {
    
        print("QBitmap(): wrong number / type of arguments");
      
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

      //QBitmap.prototype = new QBitmap_BaseJs(engine);
      //QBitmap.prototype = new QBitmap_Wrapper(engine);
      QBitmap.prototype = new Object();

      QBitmap.prototype.toString = function() {
          //return "QBitmap [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QBitmap [JS]";
        };
      QBitmap.getObjectType = function() {
        
            return RJSType_QBitmap.getIdStatic();
          
      };

      QBitmap.prototype.getObjectType = function() {
        
            return RJSType_QBitmap.getIdStatic();
          
      };

      QBitmap.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QBitmap.getIdStatic()) {
              return true;
            }
          
          if (t===RJSType_QPaintDevice.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QPixmap.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QBitmap.devicePixelRatioFScale = function() 
          
        {
          //print("JS: QBitmap.devicePixelRatioFScale");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QBitmap_WrapperSingletonInstance.devicePixelRatioFScale(
                  
                );
              

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else {
    
        print("QBitmap.devicePixelRatioFScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QBitmap.defaultDepth = function() 
          
        {
          //print("JS: QBitmap.defaultDepth");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QBitmap_WrapperSingletonInstance.defaultDepth(
                  
                );
              

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else {
    
        print("QBitmap.defaultDepth(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QBitmap.trueMatrix = function() 
          
        {
          //print("JS: QBitmap.trueMatrix");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return QBitmap_WrapperSingletonInstance.trueMatrix(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else {
    
        print("QBitmap.trueMatrix(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QBitmap.fromImageReader = function() 
          
        {
          //print("JS: QBitmap.fromImageReader");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QBitmap_WrapperSingletonInstance.fromImageReader(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else {
    
        print("QBitmap.fromImageReader(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QBitmap.fromImageInPlace = function() 
          
        {
          //print("JS: QBitmap.fromImageInPlace");
          
        };
      

        // static function 
        QBitmap.fromImage = function() 
          
        {
          //print("JS: QBitmap.fromImage");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QBitmap_WrapperSingletonInstance.fromImage(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QBitmap_WrapperSingletonInstance.fromImage(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else {
    
        print("QBitmap.fromImage(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QBitmap.fromPixmap = function() 
          
        {
          //print("JS: QBitmap.fromPixmap");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QBitmap_WrapperSingletonInstance.fromPixmap(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else {
    
        print("QBitmap.fromPixmap(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QBitmap.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QBitmap.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    