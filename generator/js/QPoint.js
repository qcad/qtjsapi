
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
            arguments[2].getWrappedType()===
              
                  RJSType.QPoint_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QPoint);
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
          

        copyProperties(this, wrapper, QPoint);

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
          

        copyProperties(this, wrapper, QPoint);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
        
            return RJSType.QPoint_Type;
          
      };

      QPoint.prototype.getObjectType = function() {
        
            return RJSType.QPoint_Type;
          
      };

      QPoint.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QPoint_Type:
              return true;
          
        default:
          return false;
        }

        /*
        return [
          RJSType.QPoint_Type, 
          
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

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
    