
      // auto generated
      //var self;

      // class constructor:
      function QPainterPathStroker() {
        

        // should be QPainterPathStroker_BaseJs.call(this, engine):
        //QPainterPathStroker.prototype = new QPainterPathStroker_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPainterPathStroker.getIdStatic()))) {

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
            qWarning("QPainterPathStroker.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPainterPathStroker_Wrapper(
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

      

        //copyProperties(this, wrapper, QPainterPathStroker);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPainterPathStroker_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPainterPathStroker);
  }

  
  else {
    
        print("QPainterPathStroker(): wrong number / type of arguments");
      
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

      //QPainterPathStroker.prototype = new QPainterPathStroker_BaseJs(engine);
      //QPainterPathStroker.prototype = new QPainterPathStroker_Wrapper(engine);
      QPainterPathStroker.prototype = new Object();

      QPainterPathStroker.prototype.toString = function() {
          //return "QPainterPathStroker [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPainterPathStroker [JS]";
        };
      QPainterPathStroker.getObjectType = function() {
        return RJSType_QPainterPathStroker.getIdStatic();
      };

      QPainterPathStroker.prototype.getObjectType = function() {
        return RJSType_QPainterPathStroker.getIdStatic();
      };

      QPainterPathStroker.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPainterPathStroker.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QPainterPathStroker.prototype.setWidth = function(...args) 
          
        {
          //print("JS: QPainterPathStroker.prototype.setWidth");
          return this.__PROXY__.setWidth(...args);
        };
    
        // function 
        QPainterPathStroker.prototype.width = function(...args) 
          
        {
          //print("JS: QPainterPathStroker.prototype.width");
          return this.__PROXY__.width(...args);
        };
    
        // function 
        QPainterPathStroker.prototype.setCapStyle = function(...args) 
          
        {
          //print("JS: QPainterPathStroker.prototype.setCapStyle");
          return this.__PROXY__.setCapStyle(...args);
        };
    
        // function 
        QPainterPathStroker.prototype.capStyle = function(...args) 
          
        {
          //print("JS: QPainterPathStroker.prototype.capStyle");
          return this.__PROXY__.capStyle(...args);
        };
    
        // function 
        QPainterPathStroker.prototype.setJoinStyle = function(...args) 
          
        {
          //print("JS: QPainterPathStroker.prototype.setJoinStyle");
          return this.__PROXY__.setJoinStyle(...args);
        };
    
        // function 
        QPainterPathStroker.prototype.joinStyle = function(...args) 
          
        {
          //print("JS: QPainterPathStroker.prototype.joinStyle");
          return this.__PROXY__.joinStyle(...args);
        };
    
        // function 
        QPainterPathStroker.prototype.setMiterLimit = function(...args) 
          
        {
          //print("JS: QPainterPathStroker.prototype.setMiterLimit");
          return this.__PROXY__.setMiterLimit(...args);
        };
    
        // function 
        QPainterPathStroker.prototype.miterLimit = function(...args) 
          
        {
          //print("JS: QPainterPathStroker.prototype.miterLimit");
          return this.__PROXY__.miterLimit(...args);
        };
    
        // function 
        QPainterPathStroker.prototype.setCurveThreshold = function(...args) 
          
        {
          //print("JS: QPainterPathStroker.prototype.setCurveThreshold");
          return this.__PROXY__.setCurveThreshold(...args);
        };
    
        // function 
        QPainterPathStroker.prototype.curveThreshold = function(...args) 
          
        {
          //print("JS: QPainterPathStroker.prototype.curveThreshold");
          return this.__PROXY__.curveThreshold(...args);
        };
    
        // function 
        QPainterPathStroker.prototype.setDashPattern = function(...args) 
          
        {
          //print("JS: QPainterPathStroker.prototype.setDashPattern");
          return this.__PROXY__.setDashPattern(...args);
        };
    
        // function 
        QPainterPathStroker.prototype.dashPattern = function(...args) 
          
        {
          //print("JS: QPainterPathStroker.prototype.dashPattern");
          return this.__PROXY__.dashPattern(...args);
        };
    
        // function 
        QPainterPathStroker.prototype.setDashOffset = function(...args) 
          
        {
          //print("JS: QPainterPathStroker.prototype.setDashOffset");
          return this.__PROXY__.setDashOffset(...args);
        };
    
        // function 
        QPainterPathStroker.prototype.dashOffset = function(...args) 
          
        {
          //print("JS: QPainterPathStroker.prototype.dashOffset");
          return this.__PROXY__.dashOffset(...args);
        };
    
        // function 
        QPainterPathStroker.prototype.createStroke = function(...args) 
          
        {
          //print("JS: QPainterPathStroker.prototype.createStroke");
          return this.__PROXY__.createStroke(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPainterPathStroker.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPainterPathStroker.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QPainterPathStroker.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      