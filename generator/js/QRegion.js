
      // auto generated
      //var self;

      // class constructor:
      function QRegion() {
        

        // should be QRegion_BaseJs.call(this, engine):
        //QRegion.prototype = new QRegion_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QRegion.getIdStatic()))) {

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
            qWarning("QRegion.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new QRegion_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRegion);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QRegion_Wrapper(
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

      

        //copyProperties(this, wrapper, QRegion);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QRegion_Wrapper(
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

      

        //copyProperties(this, wrapper, QRegion);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QRegion_Wrapper(
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

      

        //copyProperties(this, wrapper, QRegion);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QRegion_Wrapper(
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

      

        //copyProperties(this, wrapper, QRegion);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QRegion_Wrapper(
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

      

        //copyProperties(this, wrapper, QRegion);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QRegion_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRegion);
  }

  
  else {
    
        print("QRegion(): wrong number / type of arguments");
      
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

      //QRegion.prototype = new QRegion_BaseJs(engine);
      //QRegion.prototype = new QRegion_Wrapper(engine);
      QRegion.prototype = new Object();

      QRegion.prototype.toString = function() {
          //return "QRegion [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QRegion [JS]";
        };
      QRegion.getObjectType = function() {
        return RJSType_QRegion.getIdStatic();
      };

      QRegion.prototype.getObjectType = function() {
        return RJSType_QRegion.getIdStatic();
      };

      QRegion.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QRegion.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QRegion.prototype.swap = function(...args) 
          
        {
          //print("JS: QRegion.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QRegion.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QRegion.prototype.isEmpty");
          return this.__PROXY__.isEmpty(...args);
        };
    
        // function 
        QRegion.prototype.isNull = function(...args) 
          
        {
          //print("JS: QRegion.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QRegion.prototype.contains = function(...args) 
          
        {
          //print("JS: QRegion.prototype.contains");
          return this.__PROXY__.contains(...args);
        };
    
        // function 
        QRegion.prototype.translate = function(...args) 
          
        {
          //print("JS: QRegion.prototype.translate");
          return this.__PROXY__.translate(...args);
        };
    
        // function 
        QRegion.prototype.translated = function(...args) 
          
        {
          //print("JS: QRegion.prototype.translated");
          return this.__PROXY__.translated(...args);
        };
    
        // function 
        QRegion.prototype.united = function(...args) 
          
        {
          //print("JS: QRegion.prototype.united");
          return this.__PROXY__.united(...args);
        };
    
        // function 
        QRegion.prototype.intersected = function(...args) 
          
        {
          //print("JS: QRegion.prototype.intersected");
          return this.__PROXY__.intersected(...args);
        };
    
        // function 
        QRegion.prototype.subtracted = function(...args) 
          
        {
          //print("JS: QRegion.prototype.subtracted");
          return this.__PROXY__.subtracted(...args);
        };
    
        // function 
        QRegion.prototype.xored = function(...args) 
          
        {
          //print("JS: QRegion.prototype.xored");
          return this.__PROXY__.xored(...args);
        };
    
        // function 
        QRegion.prototype.intersects = function(...args) 
          
        {
          //print("JS: QRegion.prototype.intersects");
          return this.__PROXY__.intersects(...args);
        };
    
        // function 
        QRegion.prototype.boundingRect = function(...args) 
          
        {
          //print("JS: QRegion.prototype.boundingRect");
          return this.__PROXY__.boundingRect(...args);
        };
    
        // function 
        QRegion.prototype.rectCount = function(...args) 
          
        {
          //print("JS: QRegion.prototype.rectCount");
          return this.__PROXY__.rectCount(...args);
        };
    
        // function 
        QRegion.prototype.copy = function(...args) 
          
        {
          //print("JS: QRegion.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        QRegion.prototype.detach = function(...args) 
          
        {
          //print("JS: QRegion.prototype.detach");
          return this.__PROXY__.detach(...args);
        };
    
        // function 
        QRegion.prototype.qt_region_strictContains = function(...args) 
          
        {
          //print("JS: QRegion.prototype.qt_region_strictContains");
          return this.__PROXY__.qt_region_strictContains(...args);
        };
    
        // function 
        QRegion.prototype.exec = function(...args) 
          
        {
          //print("JS: QRegion.prototype.exec");
          return this.__PROXY__.exec(...args);
        };
    
        // function 
        QRegion.prototype.cleanUp = function(...args) 
          
        {
          //print("JS: QRegion.prototype.cleanUp");
          return this.__PROXY__.cleanUp(...args);
        };
    

      // static functions:
      

        // static function 
        QRegion.cleanUp = function() 
          
        {
          //print("JS: QRegion.cleanUp");
          
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QRegion.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QRegion.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QRegion.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      