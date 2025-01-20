
      // auto generated
      //var self;

      // class constructor:
      function QPointF() {
        

        // should be QPointF_BaseJs.call(this, engine):
        //QPointF.prototype = new QPointF_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPointF.getIdStatic()))) {

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
            qWarning("QPointF.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QPointF_Wrapper(
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

      

        //copyProperties(this, wrapper, QPointF);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPointF_Wrapper(
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

      

        //copyProperties(this, wrapper, QPointF);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPointF_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPointF);
  }

  
  else {
    
        print("QPointF(): wrong number / type of arguments");
      
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

      //QPointF.prototype = new QPointF_BaseJs(engine);
      //QPointF.prototype = new QPointF_Wrapper(engine);
      QPointF.prototype = new Object();

      QPointF.prototype.toString = function() {
          //return "QPointF [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPointF [JS]";
        };
      QPointF.getObjectType = function() {
        return RJSType_QPointF.getIdStatic();
      };

      QPointF.prototype.getObjectType = function() {
        return RJSType_QPointF.getIdStatic();
      };

      QPointF.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPointF.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QPointF.prototype.manhattanLength = function(...args) 
          
        {
          //print("JS: QPointF.prototype.manhattanLength");
          return this.__PROXY__.manhattanLength(...args);
        };
    
        // function 
        QPointF.prototype.isNull = function(...args) 
          
        {
          //print("JS: QPointF.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QPointF.prototype.x = function(...args) 
          
        {
          //print("JS: QPointF.prototype.x");
          return this.__PROXY__.x(...args);
        };
    
        // function 
        QPointF.prototype.y = function(...args) 
          
        {
          //print("JS: QPointF.prototype.y");
          return this.__PROXY__.y(...args);
        };
    
        // function 
        QPointF.prototype.setX = function(...args) 
          
        {
          //print("JS: QPointF.prototype.setX");
          return this.__PROXY__.setX(...args);
        };
    
        // function 
        QPointF.prototype.setY = function(...args) 
          
        {
          //print("JS: QPointF.prototype.setY");
          return this.__PROXY__.setY(...args);
        };
    
        // function 
        QPointF.prototype.transposed = function(...args) 
          
        {
          //print("JS: QPointF.prototype.transposed");
          return this.__PROXY__.transposed(...args);
        };
    
        // function 
        QPointF.prototype.rx = function(...args) 
          
        {
          //print("JS: QPointF.prototype.rx");
          return this.__PROXY__.rx(...args);
        };
    
        // function 
        QPointF.prototype.ry = function(...args) 
          
        {
          //print("JS: QPointF.prototype.ry");
          return this.__PROXY__.ry(...args);
        };
    
        // function 
        QPointF.prototype.dotProduct = function(...args) 
          
        {
          //print("JS: QPointF.prototype.dotProduct");
          return this.__PROXY__.dotProduct(...args);
        };
    
        // function 
        QPointF.prototype.toPoint = function(...args) 
          
        {
          //print("JS: QPointF.prototype.toPoint");
          return this.__PROXY__.toPoint(...args);
        };
    

      // static functions:
      

        // static function 
        QPointF.dotProduct = function() 
          
        {
          //print("JS: QPointF.dotProduct");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QPointF_WrapperSingletonInstance.dotProduct(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QPointF);
  }

  
  else {
    
        print("QPointF.dotProduct(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPointF.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPointF.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QPointF.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      