
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QColor.prototype.isValid = function(...args) 
          
        {
          //print("JS: QColor.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        QColor.prototype.name = function(...args) 
          
        {
          //print("JS: QColor.prototype.name");
          return this.__PROXY__.name(...args);
        };
    
        // function 
        QColor.prototype.colorNames = function(...args) 
          
        {
          //print("JS: QColor.prototype.colorNames");
          return this.__PROXY__.colorNames(...args);
        };
    
        // function 
        QColor.prototype.spec = function(...args) 
          
        {
          //print("JS: QColor.prototype.spec");
          return this.__PROXY__.spec(...args);
        };
    
        // function 
        QColor.prototype.alpha = function(...args) 
          
        {
          //print("JS: QColor.prototype.alpha");
          return this.__PROXY__.alpha(...args);
        };
    
        // function 
        QColor.prototype.setAlpha = function(...args) 
          
        {
          //print("JS: QColor.prototype.setAlpha");
          return this.__PROXY__.setAlpha(...args);
        };
    
        // function 
        QColor.prototype.alphaF = function(...args) 
          
        {
          //print("JS: QColor.prototype.alphaF");
          return this.__PROXY__.alphaF(...args);
        };
    
        // function 
        QColor.prototype.setAlphaF = function(...args) 
          
        {
          //print("JS: QColor.prototype.setAlphaF");
          return this.__PROXY__.setAlphaF(...args);
        };
    
        // function 
        QColor.prototype.red = function(...args) 
          
        {
          //print("JS: QColor.prototype.red");
          return this.__PROXY__.red(...args);
        };
    
        // function 
        QColor.prototype.green = function(...args) 
          
        {
          //print("JS: QColor.prototype.green");
          return this.__PROXY__.green(...args);
        };
    
        // function 
        QColor.prototype.blue = function(...args) 
          
        {
          //print("JS: QColor.prototype.blue");
          return this.__PROXY__.blue(...args);
        };
    
        // function 
        QColor.prototype.setRed = function(...args) 
          
        {
          //print("JS: QColor.prototype.setRed");
          return this.__PROXY__.setRed(...args);
        };
    
        // function 
        QColor.prototype.setGreen = function(...args) 
          
        {
          //print("JS: QColor.prototype.setGreen");
          return this.__PROXY__.setGreen(...args);
        };
    
        // function 
        QColor.prototype.setBlue = function(...args) 
          
        {
          //print("JS: QColor.prototype.setBlue");
          return this.__PROXY__.setBlue(...args);
        };
    
        // function 
        QColor.prototype.redF = function(...args) 
          
        {
          //print("JS: QColor.prototype.redF");
          return this.__PROXY__.redF(...args);
        };
    
        // function 
        QColor.prototype.greenF = function(...args) 
          
        {
          //print("JS: QColor.prototype.greenF");
          return this.__PROXY__.greenF(...args);
        };
    
        // function 
        QColor.prototype.blueF = function(...args) 
          
        {
          //print("JS: QColor.prototype.blueF");
          return this.__PROXY__.blueF(...args);
        };
    
        // function 
        QColor.prototype.setRedF = function(...args) 
          
        {
          //print("JS: QColor.prototype.setRedF");
          return this.__PROXY__.setRedF(...args);
        };
    
        // function 
        QColor.prototype.setGreenF = function(...args) 
          
        {
          //print("JS: QColor.prototype.setGreenF");
          return this.__PROXY__.setGreenF(...args);
        };
    
        // function 
        QColor.prototype.setBlueF = function(...args) 
          
        {
          //print("JS: QColor.prototype.setBlueF");
          return this.__PROXY__.setBlueF(...args);
        };
    
        // function 
        QColor.prototype.setRgb = function(...args) 
          
        {
          //print("JS: QColor.prototype.setRgb");
          return this.__PROXY__.setRgb(...args);
        };
    
        // function 
        QColor.prototype.setRgbF = function(...args) 
          
        {
          //print("JS: QColor.prototype.setRgbF");
          return this.__PROXY__.setRgbF(...args);
        };
    
        // function 
        QColor.prototype.hue = function(...args) 
          
        {
          //print("JS: QColor.prototype.hue");
          return this.__PROXY__.hue(...args);
        };
    
        // function 
        QColor.prototype.saturation = function(...args) 
          
        {
          //print("JS: QColor.prototype.saturation");
          return this.__PROXY__.saturation(...args);
        };
    
        // function 
        QColor.prototype.hsvHue = function(...args) 
          
        {
          //print("JS: QColor.prototype.hsvHue");
          return this.__PROXY__.hsvHue(...args);
        };
    
        // function 
        QColor.prototype.hsvSaturation = function(...args) 
          
        {
          //print("JS: QColor.prototype.hsvSaturation");
          return this.__PROXY__.hsvSaturation(...args);
        };
    
        // function 
        QColor.prototype.value = function(...args) 
          
        {
          //print("JS: QColor.prototype.value");
          return this.__PROXY__.value(...args);
        };
    
        // function 
        QColor.prototype.hueF = function(...args) 
          
        {
          //print("JS: QColor.prototype.hueF");
          return this.__PROXY__.hueF(...args);
        };
    
        // function 
        QColor.prototype.saturationF = function(...args) 
          
        {
          //print("JS: QColor.prototype.saturationF");
          return this.__PROXY__.saturationF(...args);
        };
    
        // function 
        QColor.prototype.hsvHueF = function(...args) 
          
        {
          //print("JS: QColor.prototype.hsvHueF");
          return this.__PROXY__.hsvHueF(...args);
        };
    
        // function 
        QColor.prototype.hsvSaturationF = function(...args) 
          
        {
          //print("JS: QColor.prototype.hsvSaturationF");
          return this.__PROXY__.hsvSaturationF(...args);
        };
    
        // function 
        QColor.prototype.valueF = function(...args) 
          
        {
          //print("JS: QColor.prototype.valueF");
          return this.__PROXY__.valueF(...args);
        };
    
        // function 
        QColor.prototype.setHsv = function(...args) 
          
        {
          //print("JS: QColor.prototype.setHsv");
          return this.__PROXY__.setHsv(...args);
        };
    
        // function 
        QColor.prototype.setHsvF = function(...args) 
          
        {
          //print("JS: QColor.prototype.setHsvF");
          return this.__PROXY__.setHsvF(...args);
        };
    
        // function 
        QColor.prototype.cyan = function(...args) 
          
        {
          //print("JS: QColor.prototype.cyan");
          return this.__PROXY__.cyan(...args);
        };
    
        // function 
        QColor.prototype.magenta = function(...args) 
          
        {
          //print("JS: QColor.prototype.magenta");
          return this.__PROXY__.magenta(...args);
        };
    
        // function 
        QColor.prototype.yellow = function(...args) 
          
        {
          //print("JS: QColor.prototype.yellow");
          return this.__PROXY__.yellow(...args);
        };
    
        // function 
        QColor.prototype.black = function(...args) 
          
        {
          //print("JS: QColor.prototype.black");
          return this.__PROXY__.black(...args);
        };
    
        // function 
        QColor.prototype.cyanF = function(...args) 
          
        {
          //print("JS: QColor.prototype.cyanF");
          return this.__PROXY__.cyanF(...args);
        };
    
        // function 
        QColor.prototype.magentaF = function(...args) 
          
        {
          //print("JS: QColor.prototype.magentaF");
          return this.__PROXY__.magentaF(...args);
        };
    
        // function 
        QColor.prototype.yellowF = function(...args) 
          
        {
          //print("JS: QColor.prototype.yellowF");
          return this.__PROXY__.yellowF(...args);
        };
    
        // function 
        QColor.prototype.blackF = function(...args) 
          
        {
          //print("JS: QColor.prototype.blackF");
          return this.__PROXY__.blackF(...args);
        };
    
        // function 
        QColor.prototype.setCmyk = function(...args) 
          
        {
          //print("JS: QColor.prototype.setCmyk");
          return this.__PROXY__.setCmyk(...args);
        };
    
        // function 
        QColor.prototype.setCmykF = function(...args) 
          
        {
          //print("JS: QColor.prototype.setCmykF");
          return this.__PROXY__.setCmykF(...args);
        };
    
        // function 
        QColor.prototype.hslHue = function(...args) 
          
        {
          //print("JS: QColor.prototype.hslHue");
          return this.__PROXY__.hslHue(...args);
        };
    
        // function 
        QColor.prototype.hslSaturation = function(...args) 
          
        {
          //print("JS: QColor.prototype.hslSaturation");
          return this.__PROXY__.hslSaturation(...args);
        };
    
        // function 
        QColor.prototype.lightness = function(...args) 
          
        {
          //print("JS: QColor.prototype.lightness");
          return this.__PROXY__.lightness(...args);
        };
    
        // function 
        QColor.prototype.hslHueF = function(...args) 
          
        {
          //print("JS: QColor.prototype.hslHueF");
          return this.__PROXY__.hslHueF(...args);
        };
    
        // function 
        QColor.prototype.hslSaturationF = function(...args) 
          
        {
          //print("JS: QColor.prototype.hslSaturationF");
          return this.__PROXY__.hslSaturationF(...args);
        };
    
        // function 
        QColor.prototype.lightnessF = function(...args) 
          
        {
          //print("JS: QColor.prototype.lightnessF");
          return this.__PROXY__.lightnessF(...args);
        };
    
        // function 
        QColor.prototype.setHsl = function(...args) 
          
        {
          //print("JS: QColor.prototype.setHsl");
          return this.__PROXY__.setHsl(...args);
        };
    
        // function 
        QColor.prototype.setHslF = function(...args) 
          
        {
          //print("JS: QColor.prototype.setHslF");
          return this.__PROXY__.setHslF(...args);
        };
    
        // function 
        QColor.prototype.toRgb = function(...args) 
          
        {
          //print("JS: QColor.prototype.toRgb");
          return this.__PROXY__.toRgb(...args);
        };
    
        // function 
        QColor.prototype.toHsv = function(...args) 
          
        {
          //print("JS: QColor.prototype.toHsv");
          return this.__PROXY__.toHsv(...args);
        };
    
        // function 
        QColor.prototype.toCmyk = function(...args) 
          
        {
          //print("JS: QColor.prototype.toCmyk");
          return this.__PROXY__.toCmyk(...args);
        };
    
        // function 
        QColor.prototype.toHsl = function(...args) 
          
        {
          //print("JS: QColor.prototype.toHsl");
          return this.__PROXY__.toHsl(...args);
        };
    
        // function 
        QColor.prototype.toExtendedRgb = function(...args) 
          
        {
          //print("JS: QColor.prototype.toExtendedRgb");
          return this.__PROXY__.toExtendedRgb(...args);
        };
    
        // function 
        QColor.prototype.convertTo = function(...args) 
          
        {
          //print("JS: QColor.prototype.convertTo");
          return this.__PROXY__.convertTo(...args);
        };
    
        // function 
        QColor.prototype.fromRgb = function(...args) 
          
        {
          //print("JS: QColor.prototype.fromRgb");
          return this.__PROXY__.fromRgb(...args);
        };
    
        // function 
        QColor.prototype.fromRgbF = function(...args) 
          
        {
          //print("JS: QColor.prototype.fromRgbF");
          return this.__PROXY__.fromRgbF(...args);
        };
    
        // function 
        QColor.prototype.fromHsv = function(...args) 
          
        {
          //print("JS: QColor.prototype.fromHsv");
          return this.__PROXY__.fromHsv(...args);
        };
    
        // function 
        QColor.prototype.fromHsvF = function(...args) 
          
        {
          //print("JS: QColor.prototype.fromHsvF");
          return this.__PROXY__.fromHsvF(...args);
        };
    
        // function 
        QColor.prototype.fromCmyk = function(...args) 
          
        {
          //print("JS: QColor.prototype.fromCmyk");
          return this.__PROXY__.fromCmyk(...args);
        };
    
        // function 
        QColor.prototype.fromCmykF = function(...args) 
          
        {
          //print("JS: QColor.prototype.fromCmykF");
          return this.__PROXY__.fromCmykF(...args);
        };
    
        // function 
        QColor.prototype.fromHsl = function(...args) 
          
        {
          //print("JS: QColor.prototype.fromHsl");
          return this.__PROXY__.fromHsl(...args);
        };
    
        // function 
        QColor.prototype.fromHslF = function(...args) 
          
        {
          //print("JS: QColor.prototype.fromHslF");
          return this.__PROXY__.fromHslF(...args);
        };
    
        // function 
        QColor.prototype.lighter = function(...args) 
          
        {
          //print("JS: QColor.prototype.lighter");
          return this.__PROXY__.lighter(...args);
        };
    
        // function 
        QColor.prototype.darker = function(...args) 
          
        {
          //print("JS: QColor.prototype.darker");
          return this.__PROXY__.darker(...args);
        };
    
        // function 
        QColor.prototype.invalidate = function(...args) 
          
        {
          //print("JS: QColor.prototype.invalidate");
          return this.__PROXY__.invalidate(...args);
        };
    
        // function 
        QColor.prototype.setColorFromString = function(...args) 
          
        {
          //print("JS: QColor.prototype.setColorFromString");
          return this.__PROXY__.setColorFromString(...args);
        };
    
        // function 
        QColor.prototype.isRgbaValid = function(...args) 
          
        {
          //print("JS: QColor.prototype.isRgbaValid");
          return this.__PROXY__.isRgbaValid(...args);
        };
    

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

      QColor.prototype.equals = function(...args) {
          return this.__PROXY__.equals(...args);
        };
      QColor.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      