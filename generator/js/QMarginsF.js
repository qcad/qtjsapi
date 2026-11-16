
      // auto generated
      //var self;

      // class constructor:
      function QMarginsF() {
        

        // should be QMarginsF_BaseJs.call(this, engine):
        //QMarginsF.prototype = new QMarginsF_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QMarginsF.getIdStatic()))) {

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
            qWarning("QMarginsF.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QMarginsF_Wrapper(
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

      

        //copyProperties(this, wrapper, QMarginsF);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QMarginsF_Wrapper(
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

      

        //copyProperties(this, wrapper, QMarginsF);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QMarginsF_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMarginsF);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QMarginsF_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMarginsF);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QMarginsF_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMarginsF);
  }

  
  else {
    
        print("QMarginsF(): wrong number / type of arguments");
      
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

      //QMarginsF.prototype = new QMarginsF_BaseJs(engine);
      //QMarginsF.prototype = new QMarginsF_Wrapper(engine);
      QMarginsF.prototype = new Object();


      QMarginsF.prototype.toString = function() {
          //return "QMarginsF [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMarginsF [JS]";
        };
      QMarginsF.getObjectType = function() {
        return RJSType_QMarginsF.getIdStatic();
      };

      QMarginsF.prototype.getObjectType = function() {
        return RJSType_QMarginsF.getIdStatic();
      };

      QMarginsF.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QMarginsF.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QMarginsF.prototype.isNull = function(...args) 
          
        {
          //print("JS: QMarginsF.prototype.isNull");
          
              return this.__PROXY__.isNull(...args);
            
        };
        
        // function 
        QMarginsF.prototype.left = function(...args) 
          
        {
          //print("JS: QMarginsF.prototype.left");
          
              return this.__PROXY__.left(...args);
            
        };
        
        // function 
        QMarginsF.prototype.top = function(...args) 
          
        {
          //print("JS: QMarginsF.prototype.top");
          
              return this.__PROXY__.top(...args);
            
        };
        
        // function 
        QMarginsF.prototype.right = function(...args) 
          
        {
          //print("JS: QMarginsF.prototype.right");
          
              return this.__PROXY__.right(...args);
            
        };
        
        // function 
        QMarginsF.prototype.bottom = function(...args) 
          
        {
          //print("JS: QMarginsF.prototype.bottom");
          
              return this.__PROXY__.bottom(...args);
            
        };
        
        // function 
        QMarginsF.prototype.setLeft = function(...args) 
          
        {
          //print("JS: QMarginsF.prototype.setLeft");
          
              return this.__PROXY__.setLeft(...args);
            
        };
        
        // function 
        QMarginsF.prototype.setTop = function(...args) 
          
        {
          //print("JS: QMarginsF.prototype.setTop");
          
              return this.__PROXY__.setTop(...args);
            
        };
        
        // function 
        QMarginsF.prototype.setRight = function(...args) 
          
        {
          //print("JS: QMarginsF.prototype.setRight");
          
              return this.__PROXY__.setRight(...args);
            
        };
        
        // function 
        QMarginsF.prototype.setBottom = function(...args) 
          
        {
          //print("JS: QMarginsF.prototype.setBottom");
          
              return this.__PROXY__.setBottom(...args);
            
        };
        
        // function 
        QMarginsF.prototype.toMargins = function(...args) 
          
        {
          //print("JS: QMarginsF.prototype.toMargins");
          
              return this.__PROXY__.toMargins(...args);
            
        };
        

      // static functions:
      QMarginsF.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QMarginsF.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QMarginsF.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QMarginsF.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMarginsF.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QMarginsF.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      