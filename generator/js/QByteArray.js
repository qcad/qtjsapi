
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QByteArray.prototype.swap = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QByteArray.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.isEmpty");
          return this.__PROXY__.isEmpty(...args);
        };
    
        // function 
        QByteArray.prototype.resize = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.resize");
          return this.__PROXY__.resize(...args);
        };
    
        // function 
        QByteArray.prototype.fill = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.fill");
          return this.__PROXY__.fill(...args);
        };
    
        // function 
        QByteArray.prototype.capacity = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.capacity");
          return this.__PROXY__.capacity(...args);
        };
    
        // function 
        QByteArray.prototype.reserve = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.reserve");
          return this.__PROXY__.reserve(...args);
        };
    
        // function 
        QByteArray.prototype.squeeze = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.squeeze");
          return this.__PROXY__.squeeze(...args);
        };
    
        // function 
        QByteArray.prototype.data = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.data");
          return this.__PROXY__.data(...args);
        };
    
        // function 
        QByteArray.prototype.constData = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.constData");
          return this.__PROXY__.constData(...args);
        };
    
        // function 
        QByteArray.prototype.detach = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.detach");
          return this.__PROXY__.detach(...args);
        };
    
        // function 
        QByteArray.prototype.isDetached = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.isDetached");
          return this.__PROXY__.isDetached(...args);
        };
    
        // function 
        QByteArray.prototype.isSharedWith = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.isSharedWith");
          return this.__PROXY__.isSharedWith(...args);
        };
    
        // function 
        QByteArray.prototype.clear = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QByteArray.prototype.at = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.at");
          return this.__PROXY__.at(...args);
        };
    
        // function 
        QByteArray.prototype.front = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.front");
          return this.__PROXY__.front(...args);
        };
    
        // function 
        QByteArray.prototype.back = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.back");
          return this.__PROXY__.back(...args);
        };
    
        // function 
        QByteArray.prototype.indexOf = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.indexOf");
          return this.__PROXY__.indexOf(...args);
        };
    
        // function 
        QByteArray.prototype.lastIndexOf = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.lastIndexOf");
          return this.__PROXY__.lastIndexOf(...args);
        };
    
        // function 
        QByteArray.prototype.contains = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.contains");
          return this.__PROXY__.contains(...args);
        };
    
        // function 
        QByteArray.prototype.count = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.count");
          return this.__PROXY__.count(...args);
        };
    
        // function 
        QByteArray.prototype.compare = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.compare");
          return this.__PROXY__.compare(...args);
        };
    
        // function 
        QByteArray.prototype.left = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.left");
          return this.__PROXY__.left(...args);
        };
    
        // function 
        QByteArray.prototype.right = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.right");
          return this.__PROXY__.right(...args);
        };
    
        // function 
        QByteArray.prototype.mid = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.mid");
          return this.__PROXY__.mid(...args);
        };
    
        // function 
        QByteArray.prototype.first = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.first");
          return this.__PROXY__.first(...args);
        };
    
        // function 
        QByteArray.prototype.last = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.last");
          return this.__PROXY__.last(...args);
        };
    
        // function 
        QByteArray.prototype.sliced = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.sliced");
          return this.__PROXY__.sliced(...args);
        };
    
        // function 
        QByteArray.prototype.chopped = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.chopped");
          return this.__PROXY__.chopped(...args);
        };
    
        // function 
        QByteArray.prototype.startsWith = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.startsWith");
          return this.__PROXY__.startsWith(...args);
        };
    
        // function 
        QByteArray.prototype.endsWith = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.endsWith");
          return this.__PROXY__.endsWith(...args);
        };
    
        // function 
        QByteArray.prototype.isUpper = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.isUpper");
          return this.__PROXY__.isUpper(...args);
        };
    
        // function 
        QByteArray.prototype.isLower = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.isLower");
          return this.__PROXY__.isLower(...args);
        };
    
        // function 
        QByteArray.prototype.truncate = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.truncate");
          return this.__PROXY__.truncate(...args);
        };
    
        // function 
        QByteArray.prototype.chop = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.chop");
          return this.__PROXY__.chop(...args);
        };
    
        // function 
        QByteArray.prototype.toLower = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.toLower");
          return this.__PROXY__.toLower(...args);
        };
    
        // function 
        QByteArray.prototype.toUpper = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.toUpper");
          return this.__PROXY__.toUpper(...args);
        };
    
        // function 
        QByteArray.prototype.trimmed = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.trimmed");
          return this.__PROXY__.trimmed(...args);
        };
    
        // function 
        QByteArray.prototype.simplified = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.simplified");
          return this.__PROXY__.simplified(...args);
        };
    
        // function 
        QByteArray.prototype.leftJustified = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.leftJustified");
          return this.__PROXY__.leftJustified(...args);
        };
    
        // function 
        QByteArray.prototype.rightJustified = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.rightJustified");
          return this.__PROXY__.rightJustified(...args);
        };
    
        // function 
        QByteArray.prototype.prepend = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.prepend");
          return this.__PROXY__.prepend(...args);
        };
    
        // function 
        QByteArray.prototype.append = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.append");
          return this.__PROXY__.append(...args);
        };
    
        // function 
        QByteArray.prototype.insert = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.insert");
          return this.__PROXY__.insert(...args);
        };
    
        // function 
        QByteArray.prototype.remove = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.remove");
          return this.__PROXY__.remove(...args);
        };
    
        // function 
        QByteArray.prototype.replace = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.replace");
          return this.__PROXY__.replace(...args);
        };
    
        // function 
        QByteArray.prototype.split = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.split");
          return this.__PROXY__.split(...args);
        };
    
        // function 
        QByteArray.prototype.repeated = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.repeated");
          return this.__PROXY__.repeated(...args);
        };
    
        // function 
        QByteArray.prototype.toShort = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.toShort");
          return this.__PROXY__.toShort(...args);
        };
    
        // function 
        QByteArray.prototype.toUShort = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.toUShort");
          return this.__PROXY__.toUShort(...args);
        };
    
        // function 
        QByteArray.prototype.toInt = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.toInt");
          return this.__PROXY__.toInt(...args);
        };
    
        // function 
        QByteArray.prototype.toUInt = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.toUInt");
          return this.__PROXY__.toUInt(...args);
        };
    
        // function 
        QByteArray.prototype.toLong = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.toLong");
          return this.__PROXY__.toLong(...args);
        };
    
        // function 
        QByteArray.prototype.toULong = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.toULong");
          return this.__PROXY__.toULong(...args);
        };
    
        // function 
        QByteArray.prototype.toLongLong = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.toLongLong");
          return this.__PROXY__.toLongLong(...args);
        };
    
        // function 
        QByteArray.prototype.toULongLong = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.toULongLong");
          return this.__PROXY__.toULongLong(...args);
        };
    
        // function 
        QByteArray.prototype.toFloat = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.toFloat");
          return this.__PROXY__.toFloat(...args);
        };
    
        // function 
        QByteArray.prototype.toDouble = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.toDouble");
          return this.__PROXY__.toDouble(...args);
        };
    
        // function 
        QByteArray.prototype.toHex = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.toHex");
          return this.__PROXY__.toHex(...args);
        };
    
        // function 
        QByteArray.prototype.setNum = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.setNum");
          return this.__PROXY__.setNum(...args);
        };
    
        // function 
        QByteArray.prototype.setRawData = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.setRawData");
          return this.__PROXY__.setRawData(...args);
        };
    
        // function 
        QByteArray.prototype.number = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.number");
          return this.__PROXY__.number(...args);
        };
    
        // function 
        QByteArray.prototype.fromRawData = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.fromRawData");
          return this.__PROXY__.fromRawData(...args);
        };
    
        // function 
        QByteArray.prototype.fromBase64 = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.fromBase64");
          return this.__PROXY__.fromBase64(...args);
        };
    
        // function 
        QByteArray.prototype.fromHex = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.fromHex");
          return this.__PROXY__.fromHex(...args);
        };
    
        // function 
        QByteArray.prototype.fromPercentEncoding = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.fromPercentEncoding");
          return this.__PROXY__.fromPercentEncoding(...args);
        };
    
        // function 
        QByteArray.prototype.push_back = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.push_back");
          return this.__PROXY__.push_back(...args);
        };
    
        // function 
        QByteArray.prototype.push_front = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.push_front");
          return this.__PROXY__.push_front(...args);
        };
    
        // function 
        QByteArray.prototype.shrink_to_fit = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.shrink_to_fit");
          return this.__PROXY__.shrink_to_fit(...args);
        };
    
        // function 
        QByteArray.prototype.size = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.size");
          return this.__PROXY__.size(...args);
        };
    
        // function 
        QByteArray.prototype.length = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.length");
          return this.__PROXY__.length(...args);
        };
    
        // function 
        QByteArray.prototype.isNull = function(...args) 
          
        {
          //print("JS: QByteArray.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    

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

      QByteArray.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      