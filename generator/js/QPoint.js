
      // auto generated
      //var self;

      // class constructor:
      function QPoint() {
        

        // should be QPoint_BaseJs.call(this, engine):
        //QPoint.prototype = new QPoint_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPoint.getIdStatic()))) {

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
            qWarning("QPoint.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QPoint_Wrapper(
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

      

        //copyProperties(this, wrapper, QPoint);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPoint_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPoint);
  }

  
  else {
    
        print("QPoint(): wrong number / type of arguments");
      
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

      //QPoint.prototype = new QPoint_BaseJs(engine);
      //QPoint.prototype = new QPoint_Wrapper(engine);
      QPoint.prototype = new Object();

      QPoint.prototype.toString = function() {
          //return "QPoint [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPoint [JS]";
        };
      QPoint.getObjectType = function() {
        return RJSType_QPoint.getIdStatic();
      };

      QPoint.prototype.getObjectType = function() {
        return RJSType_QPoint.getIdStatic();
      };

      QPoint.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPoint.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QPoint.prototype.isNull = function(...args) 
          
        {
          //print("JS: QPoint.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QPoint.prototype.x = function(...args) 
          
        {
          //print("JS: QPoint.prototype.x");
          return this.__PROXY__.x(...args);
        };
    
        // function 
        QPoint.prototype.y = function(...args) 
          
        {
          //print("JS: QPoint.prototype.y");
          return this.__PROXY__.y(...args);
        };
    
        // function 
        QPoint.prototype.setX = function(...args) 
          
        {
          //print("JS: QPoint.prototype.setX");
          return this.__PROXY__.setX(...args);
        };
    
        // function 
        QPoint.prototype.setY = function(...args) 
          
        {
          //print("JS: QPoint.prototype.setY");
          return this.__PROXY__.setY(...args);
        };
    
        // function 
        QPoint.prototype.manhattanLength = function(...args) 
          
        {
          //print("JS: QPoint.prototype.manhattanLength");
          return this.__PROXY__.manhattanLength(...args);
        };
    
        // function 
        QPoint.prototype.transposed = function(...args) 
          
        {
          //print("JS: QPoint.prototype.transposed");
          return this.__PROXY__.transposed(...args);
        };
    
        // function 
        QPoint.prototype.rx = function(...args) 
          
        {
          //print("JS: QPoint.prototype.rx");
          return this.__PROXY__.rx(...args);
        };
    
        // function 
        QPoint.prototype.ry = function(...args) 
          
        {
          //print("JS: QPoint.prototype.ry");
          return this.__PROXY__.ry(...args);
        };
    
        // function 
        QPoint.prototype.operator_add_assign = function(...args) 
          
        {
          //print("JS: QPoint.prototype.operator_add_assign");
          return this.__PROXY__.operator_add_assign(...args);
        };
    
        // function 
        QPoint.prototype.operator_subtract_assign = function(...args) 
          
        {
          //print("JS: QPoint.prototype.operator_subtract_assign");
          return this.__PROXY__.operator_subtract_assign(...args);
        };
    
        // function 
        QPoint.prototype.operator_multiply_assign = function(...args) 
          
        {
          //print("JS: QPoint.prototype.operator_multiply_assign");
          return this.__PROXY__.operator_multiply_assign(...args);
        };
    
        // function 
        QPoint.prototype.operator_divide_assign = function(...args) 
          
        {
          //print("JS: QPoint.prototype.operator_divide_assign");
          return this.__PROXY__.operator_divide_assign(...args);
        };
    
        // function 
        QPoint.prototype.dotProduct = function(...args) 
          
        {
          //print("JS: QPoint.prototype.dotProduct");
          return this.__PROXY__.dotProduct(...args);
        };
    

      // static functions:
      

        // static function 
        QPoint.dotProduct = function() 
          
        {
          //print("JS: QPoint.dotProduct");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QPoint_WrapperSingletonInstance.dotProduct(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QPoint);
  }

  
  else {
    
        print("QPoint.dotProduct(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPoint.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPoint.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QPoint.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      