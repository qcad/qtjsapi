
      // auto generated
      //var self;

      // class constructor:
      function QPen() {
        

        // should be QPen_BaseJs.call(this, engine):
        //QPen.prototype = new QPen_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPen.getIdStatic()))) {

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
            qWarning("QPen.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new QPen_Wrapper(
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

      

        //copyProperties(this, wrapper, QPen);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPen_Wrapper(
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

      

        //copyProperties(this, wrapper, QPen);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPen_Wrapper(
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

      

        //copyProperties(this, wrapper, QPen);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPen_Wrapper(
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

      

        //copyProperties(this, wrapper, QPen);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPen_Wrapper(
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

      

        //copyProperties(this, wrapper, QPen);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPen_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPen);
  }

  
  else {
    
        print("QPen(): wrong number / type of arguments");
      
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

      //QPen.prototype = new QPen_BaseJs(engine);
      //QPen.prototype = new QPen_Wrapper(engine);
      QPen.prototype = new Object();

      QPen.prototype.toString = function() {
          //return "QPen [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPen [JS]";
        };
      QPen.getObjectType = function() {
        return RJSType_QPen.getIdStatic();
      };

      QPen.prototype.getObjectType = function() {
        return RJSType_QPen.getIdStatic();
      };

      QPen.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPen.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QPen.prototype.swap = function(...args) 
          
        {
          //print("JS: QPen.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QPen.prototype.style = function(...args) 
          
        {
          //print("JS: QPen.prototype.style");
          return this.__PROXY__.style(...args);
        };
    
        // function 
        QPen.prototype.setStyle = function(...args) 
          
        {
          //print("JS: QPen.prototype.setStyle");
          return this.__PROXY__.setStyle(...args);
        };
    
        // function 
        QPen.prototype.dashPattern = function(...args) 
          
        {
          //print("JS: QPen.prototype.dashPattern");
          return this.__PROXY__.dashPattern(...args);
        };
    
        // function 
        QPen.prototype.setDashPattern = function(...args) 
          
        {
          //print("JS: QPen.prototype.setDashPattern");
          return this.__PROXY__.setDashPattern(...args);
        };
    
        // function 
        QPen.prototype.dashOffset = function(...args) 
          
        {
          //print("JS: QPen.prototype.dashOffset");
          return this.__PROXY__.dashOffset(...args);
        };
    
        // function 
        QPen.prototype.setDashOffset = function(...args) 
          
        {
          //print("JS: QPen.prototype.setDashOffset");
          return this.__PROXY__.setDashOffset(...args);
        };
    
        // function 
        QPen.prototype.miterLimit = function(...args) 
          
        {
          //print("JS: QPen.prototype.miterLimit");
          return this.__PROXY__.miterLimit(...args);
        };
    
        // function 
        QPen.prototype.setMiterLimit = function(...args) 
          
        {
          //print("JS: QPen.prototype.setMiterLimit");
          return this.__PROXY__.setMiterLimit(...args);
        };
    
        // function 
        QPen.prototype.widthF = function(...args) 
          
        {
          //print("JS: QPen.prototype.widthF");
          return this.__PROXY__.widthF(...args);
        };
    
        // function 
        QPen.prototype.setWidthF = function(...args) 
          
        {
          //print("JS: QPen.prototype.setWidthF");
          return this.__PROXY__.setWidthF(...args);
        };
    
        // function 
        QPen.prototype.width = function(...args) 
          
        {
          //print("JS: QPen.prototype.width");
          return this.__PROXY__.width(...args);
        };
    
        // function 
        QPen.prototype.setWidth = function(...args) 
          
        {
          //print("JS: QPen.prototype.setWidth");
          return this.__PROXY__.setWidth(...args);
        };
    
        // function 
        QPen.prototype.color = function(...args) 
          
        {
          //print("JS: QPen.prototype.color");
          return this.__PROXY__.color(...args);
        };
    
        // function 
        QPen.prototype.setColor = function(...args) 
          
        {
          //print("JS: QPen.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        QPen.prototype.brush = function(...args) 
          
        {
          //print("JS: QPen.prototype.brush");
          return this.__PROXY__.brush(...args);
        };
    
        // function 
        QPen.prototype.setBrush = function(...args) 
          
        {
          //print("JS: QPen.prototype.setBrush");
          return this.__PROXY__.setBrush(...args);
        };
    
        // function 
        QPen.prototype.isSolid = function(...args) 
          
        {
          //print("JS: QPen.prototype.isSolid");
          return this.__PROXY__.isSolid(...args);
        };
    
        // function 
        QPen.prototype.capStyle = function(...args) 
          
        {
          //print("JS: QPen.prototype.capStyle");
          return this.__PROXY__.capStyle(...args);
        };
    
        // function 
        QPen.prototype.setCapStyle = function(...args) 
          
        {
          //print("JS: QPen.prototype.setCapStyle");
          return this.__PROXY__.setCapStyle(...args);
        };
    
        // function 
        QPen.prototype.joinStyle = function(...args) 
          
        {
          //print("JS: QPen.prototype.joinStyle");
          return this.__PROXY__.joinStyle(...args);
        };
    
        // function 
        QPen.prototype.setJoinStyle = function(...args) 
          
        {
          //print("JS: QPen.prototype.setJoinStyle");
          return this.__PROXY__.setJoinStyle(...args);
        };
    
        // function 
        QPen.prototype.isCosmetic = function(...args) 
          
        {
          //print("JS: QPen.prototype.isCosmetic");
          return this.__PROXY__.isCosmetic(...args);
        };
    
        // function 
        QPen.prototype.setCosmetic = function(...args) 
          
        {
          //print("JS: QPen.prototype.setCosmetic");
          return this.__PROXY__.setCosmetic(...args);
        };
    
        // function 
        QPen.prototype.isDetached = function(...args) 
          
        {
          //print("JS: QPen.prototype.isDetached");
          return this.__PROXY__.isDetached(...args);
        };
    
        // function 
        QPen.prototype.detach = function(...args) 
          
        {
          //print("JS: QPen.prototype.detach");
          return this.__PROXY__.detach(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPen.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPen.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QPen.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      