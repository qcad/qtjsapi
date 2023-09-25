
      // auto generated
      //var self;

      // class constructor:
      function QByteArray() {
        

        // should be QByteArray_BaseJs.call(this, engine):
        //QByteArray.prototype = new QByteArray_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QByteArray.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QByteArray);
            //}
          }
          else {
            qWarning("QByteArray.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QByteArray_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QByteArray);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QByteArray);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QByteArray_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QByteArray);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QByteArray);
  }

  
  else {
    
        print("QByteArray(): wrong number / type of arguments");
      
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

      //QByteArray.prototype = new QByteArray_BaseJs(engine);
      //QByteArray.prototype = new QByteArray_Wrapper(engine);
      QByteArray.prototype = new Object();

      QByteArray.prototype.toString = function() {
          //return "QByteArray [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QByteArray [JS]";
        };
      QByteArray.getObjectType = function() {
        return RJSType_QByteArray.getIdStatic();
      };

      QByteArray.prototype.getObjectType = function() {
        return RJSType_QByteArray.getIdStatic();
      };

      QByteArray.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QByteArray.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QByteArray.number = function() 
          
        {
          //print("JS: QByteArray.number");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return QByteArray_WrapperSingletonInstance.number(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QByteArray);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QByteArray_WrapperSingletonInstance.number(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QByteArray);
  }

  
  else {
    
        print("QByteArray.number(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QByteArray.fromRawData = function() 
          
        {
          //print("JS: QByteArray.fromRawData");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QByteArray_WrapperSingletonInstance.fromRawData(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QByteArray);
  }

  
  else {
    
        print("QByteArray.fromRawData(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QByteArray.fromBase64 = function() 
          
        {
          //print("JS: QByteArray.fromBase64");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QByteArray_WrapperSingletonInstance.fromBase64(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QByteArray);
  }

  
  else {
    
        print("QByteArray.fromBase64(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QByteArray.fromHex = function() 
          
        {
          //print("JS: QByteArray.fromHex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QByteArray_WrapperSingletonInstance.fromHex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QByteArray);
  }

  
  else {
    
        print("QByteArray.fromHex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QByteArray.fromPercentEncoding = function() 
          
        {
          //print("JS: QByteArray.fromPercentEncoding");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QByteArray_WrapperSingletonInstance.fromPercentEncoding(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QByteArray);
  }

  
  else {
    
        print("QByteArray.fromPercentEncoding(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QByteArray.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QByteArray.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    