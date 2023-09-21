
      // auto generated
      //var self;

      // class constructor:
      function QTransform() {
        

        // should be QTransform_BaseJs.call(this, engine):
        //QTransform.prototype = new QTransform_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QTransform_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTransform);
            //}
          }
          else {
            qWarning("QTransform.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 9) {
    
            self = this;
            wrapper = new QTransform_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTransform);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTransform);
  }

  
  else 
  
      if (arguments.length == 6) {
    
            self = this;
            wrapper = new QTransform_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTransform);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTransform);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QTransform_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTransform);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTransform);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QTransform_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTransform);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTransform);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTransform_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTransform);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTransform);
  }

  
  else {
    
        print("QTransform(): wrong number / type of arguments");
      
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

      //QTransform.prototype = new QTransform_BaseJs(engine);
      //QTransform.prototype = new QTransform_Wrapper(engine);
      QTransform.prototype = new Object();

      QTransform.prototype.toString = function() {
          //return "QTransform [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTransform [JS]";
        };
      QTransform.getObjectType = function() {
        
            return RJSType.QTransform_Type;
          
      };

      QTransform.prototype.getObjectType = function() {
        
            return RJSType.QTransform_Type;
          
      };

      QTransform.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QTransform_Type:
              return true;
          
        default:
          return false;
        }

        /*
        return [
          RJSType.QTransform_Type, 
          
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QTransform.squareToQuad = function() 
          
        {
          //print("JS: QTransform.squareToQuad");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QTransform_WrapperSingletonInstance.squareToQuad(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTransform);
  }

  
  else {
    
        print("QTransform.squareToQuad(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTransform.quadToSquare = function() 
          
        {
          //print("JS: QTransform.quadToSquare");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QTransform_WrapperSingletonInstance.quadToSquare(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTransform);
  }

  
  else {
    
        print("QTransform.quadToSquare(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTransform.quadToQuad = function() 
          
        {
          //print("JS: QTransform.quadToQuad");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return QTransform_WrapperSingletonInstance.quadToQuad(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QTransform);
  }

  
  else {
    
        print("QTransform.quadToQuad(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTransform.fromTranslate = function() 
          
        {
          //print("JS: QTransform.fromTranslate");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QTransform_WrapperSingletonInstance.fromTranslate(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTransform);
  }

  
  else {
    
        print("QTransform.fromTranslate(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTransform.fromScale = function() 
          
        {
          //print("JS: QTransform.fromScale");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QTransform_WrapperSingletonInstance.fromScale(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTransform);
  }

  
  else {
    
        print("QTransform.fromScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTransform.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTransform.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    