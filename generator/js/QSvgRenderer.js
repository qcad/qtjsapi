
      // auto generated
      //var self;

      // class constructor:
      function QSvgRenderer() {
        

        // should be QSvgRenderer_BaseJs.call(this, engine):
        //QSvgRenderer.prototype = new QSvgRenderer_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QSvgRenderer_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QSvgRenderer);
            //}
          }
          else {
            qWarning("QSvgRenderer.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSvgRenderer_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSvgRenderer);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSvgRenderer);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSvgRenderer_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSvgRenderer);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSvgRenderer);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSvgRenderer_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSvgRenderer);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSvgRenderer);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSvgRenderer_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSvgRenderer);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSvgRenderer);
  }

  
  else {
    
        print("QSvgRenderer(): wrong number / type of arguments");
      
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

      //QSvgRenderer.prototype = new QSvgRenderer_BaseJs(engine);
      //QSvgRenderer.prototype = new QSvgRenderer_Wrapper(engine);
      QSvgRenderer.prototype = new Object();

      QSvgRenderer.prototype.toString = function() {
          //return "QSvgRenderer [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSvgRenderer [JS]";
        };
      QSvgRenderer.getObjectType = function() {
        
            return RJSType.QSvgRenderer_Type;
          
      };

      QSvgRenderer.prototype.getObjectType = function() {
        
            return RJSType.QSvgRenderer_Type;
          
      };

      QSvgRenderer.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QSvgRenderer_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QSvgRenderer_Type, 
          
            RJSType.QObject_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QSvgRenderer.tr = function() 
          
        {
          //print("JS: QSvgRenderer.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QSvgRenderer_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QSvgRenderer);
  }

  
  else {
    
        print("QSvgRenderer.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSvgRenderer.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSvgRenderer.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    