
      // auto generated
      //var self;

      // class constructor:
      function QColor() {
        

        // should be QColor_BaseJs.call(this, engine):
        //QColor.prototype = new QColor_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QColor.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QColor);
            //}
          }
          else {
            qWarning("QColor.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QColor_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QColor);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QColor);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QColor_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QColor);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QColor);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QColor_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QColor);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QColor);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QColor_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QColor);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QColor);
  }

  
  else {
    
        print("QColor(): wrong number / type of arguments");
      
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

      //QColor.prototype = new QColor_BaseJs(engine);
      //QColor.prototype = new QColor_Wrapper(engine);
      QColor.prototype = new Object();

      QColor.prototype.toString = function() {
          //return "QColor [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QColor [JS]";
        };
      QColor.getObjectType = function() {
        return RJSType_QColor.getIdStatic();
      };

      QColor.prototype.getObjectType = function() {
        return RJSType_QColor.getIdStatic();
      };

      QColor.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QColor.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QColor.colorNames = function() 
          
        {
          //print("JS: QColor.colorNames");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QColor_WrapperSingletonInstance.colorNames(
                  
                );
              

        //copyProperties(this, wrapper, QColor);
  }

  
  else {
    
        print("QColor.colorNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColor.fromRgb = function() 
          
        {
          //print("JS: QColor.fromRgb");
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QColor_WrapperSingletonInstance.fromRgb(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QColor);
  }

  
  else {
    
        print("QColor.fromRgb(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColor.fromRgbF = function() 
          
        {
          //print("JS: QColor.fromRgbF");
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QColor_WrapperSingletonInstance.fromRgbF(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QColor);
  }

  
  else {
    
        print("QColor.fromRgbF(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColor.fromHsv = function() 
          
        {
          //print("JS: QColor.fromHsv");
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QColor_WrapperSingletonInstance.fromHsv(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QColor);
  }

  
  else {
    
        print("QColor.fromHsv(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColor.fromHsvF = function() 
          
        {
          //print("JS: QColor.fromHsvF");
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QColor_WrapperSingletonInstance.fromHsvF(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QColor);
  }

  
  else {
    
        print("QColor.fromHsvF(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColor.fromCmyk = function() 
          
        {
          //print("JS: QColor.fromCmyk");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return QColor_WrapperSingletonInstance.fromCmyk(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QColor);
  }

  
  else {
    
        print("QColor.fromCmyk(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColor.fromCmykF = function() 
          
        {
          //print("JS: QColor.fromCmykF");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return QColor_WrapperSingletonInstance.fromCmykF(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QColor);
  }

  
  else {
    
        print("QColor.fromCmykF(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColor.fromHsl = function() 
          
        {
          //print("JS: QColor.fromHsl");
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QColor_WrapperSingletonInstance.fromHsl(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QColor);
  }

  
  else {
    
        print("QColor.fromHsl(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColor.fromHslF = function() 
          
        {
          //print("JS: QColor.fromHslF");
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QColor_WrapperSingletonInstance.fromHslF(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QColor);
  }

  
  else {
    
        print("QColor.fromHslF(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColor.isValidColor = function() 
          
        {
          //print("JS: QColor.isValidColor");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QColor_WrapperSingletonInstance.isValidColor(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QColor);
  }

  
  else {
    
        print("QColor.isValidColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QColor.isRgbaValid = function() 
          
        {
          //print("JS: QColor.isRgbaValid");
          
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QColor.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QColor.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    