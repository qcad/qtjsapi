
      // auto generated
      //var self;

      // class constructor:
      function QSize() {
        

        // should be QSize_BaseJs.call(this, engine):
        //QSize.prototype = new QSize_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSize.getIdStatic()))) {

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
            qWarning("QSize.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QSize_Wrapper(
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

      

        //copyProperties(this, wrapper, QSize);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QSize_Wrapper(
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

      

        //copyProperties(this, wrapper, QSize);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QSize_Wrapper(
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

      

        //copyProperties(this, wrapper, QSize);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSize_Wrapper(
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

      

        //copyProperties(this, wrapper, QSize);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSize_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSize);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSize_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSize);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSize_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSize);
  }

  
  else {
    
        print("QSize(): wrong number / type of arguments");
      
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

      //QSize.prototype = new QSize_BaseJs(engine);
      //QSize.prototype = new QSize_Wrapper(engine);
      QSize.prototype = new Object();

      QSize.prototype.toString = function() {
          //return "QSize [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSize [JS]";
        };
      QSize.getObjectType = function() {
        return RJSType_QSize.getIdStatic();
      };

      QSize.prototype.getObjectType = function() {
        return RJSType_QSize.getIdStatic();
      };

      QSize.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSize.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QSize.prototype.isNull = function(...args) 
          
        {
          //print("JS: QSize.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QSize.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QSize.prototype.isEmpty");
          return this.__PROXY__.isEmpty(...args);
        };
    
        // function 
        QSize.prototype.isValid = function(...args) 
          
        {
          //print("JS: QSize.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        QSize.prototype.width = function(...args) 
          
        {
          //print("JS: QSize.prototype.width");
          return this.__PROXY__.width(...args);
        };
    
        // function 
        QSize.prototype.height = function(...args) 
          
        {
          //print("JS: QSize.prototype.height");
          return this.__PROXY__.height(...args);
        };
    
        // function 
        QSize.prototype.setWidth = function(...args) 
          
        {
          //print("JS: QSize.prototype.setWidth");
          return this.__PROXY__.setWidth(...args);
        };
    
        // function 
        QSize.prototype.setHeight = function(...args) 
          
        {
          //print("JS: QSize.prototype.setHeight");
          return this.__PROXY__.setHeight(...args);
        };
    
        // function 
        QSize.prototype.transpose = function(...args) 
          
        {
          //print("JS: QSize.prototype.transpose");
          return this.__PROXY__.transpose(...args);
        };
    
        // function 
        QSize.prototype.transposed = function(...args) 
          
        {
          //print("JS: QSize.prototype.transposed");
          return this.__PROXY__.transposed(...args);
        };
    
        // function 
        QSize.prototype.scale = function(...args) 
          
        {
          //print("JS: QSize.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        QSize.prototype.scaled = function(...args) 
          
        {
          //print("JS: QSize.prototype.scaled");
          return this.__PROXY__.scaled(...args);
        };
    
        // function 
        QSize.prototype.expandedTo = function(...args) 
          
        {
          //print("JS: QSize.prototype.expandedTo");
          return this.__PROXY__.expandedTo(...args);
        };
    
        // function 
        QSize.prototype.boundedTo = function(...args) 
          
        {
          //print("JS: QSize.prototype.boundedTo");
          return this.__PROXY__.boundedTo(...args);
        };
    
        // function 
        QSize.prototype.grownBy = function(...args) 
          
        {
          //print("JS: QSize.prototype.grownBy");
          return this.__PROXY__.grownBy(...args);
        };
    
        // function 
        QSize.prototype.shrunkBy = function(...args) 
          
        {
          //print("JS: QSize.prototype.shrunkBy");
          return this.__PROXY__.shrunkBy(...args);
        };
    
        // function 
        QSize.prototype.rwidth = function(...args) 
          
        {
          //print("JS: QSize.prototype.rwidth");
          return this.__PROXY__.rwidth(...args);
        };
    
        // function 
        QSize.prototype.rheight = function(...args) 
          
        {
          //print("JS: QSize.prototype.rheight");
          return this.__PROXY__.rheight(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSize.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSize.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSize.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      