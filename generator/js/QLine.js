
      // auto generated
      //var self;

      // class constructor:
      function QLine() {
        

        // should be QLine_BaseJs.call(this, engine):
        //QLine.prototype = new QLine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QLine.getIdStatic()))) {

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
            qWarning("QLine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QLine_Wrapper(
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

      

        //copyProperties(this, wrapper, QLine);
  }

  
  else 
  
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QLine_Wrapper(
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

      

        //copyProperties(this, wrapper, QLine);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QLine_Wrapper(
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

      

        //copyProperties(this, wrapper, QLine);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QLine_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLine);
  }

  
  else {
    
        print("QLine(): wrong number / type of arguments");
      
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

      //QLine.prototype = new QLine_BaseJs(engine);
      //QLine.prototype = new QLine_Wrapper(engine);
      QLine.prototype = new Object();

      QLine.prototype.toString = function() {
          //return "QLine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QLine [JS]";
        };
      QLine.getObjectType = function() {
        return RJSType_QLine.getIdStatic();
      };

      QLine.prototype.getObjectType = function() {
        return RJSType_QLine.getIdStatic();
      };

      QLine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QLine.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QLine.prototype.isNull = function(...args) 
          
        {
          //print("JS: QLine.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QLine.prototype.p1 = function(...args) 
          
        {
          //print("JS: QLine.prototype.p1");
          return this.__PROXY__.p1(...args);
        };
    
        // function 
        QLine.prototype.p2 = function(...args) 
          
        {
          //print("JS: QLine.prototype.p2");
          return this.__PROXY__.p2(...args);
        };
    
        // function 
        QLine.prototype.x1 = function(...args) 
          
        {
          //print("JS: QLine.prototype.x1");
          return this.__PROXY__.x1(...args);
        };
    
        // function 
        QLine.prototype.y1 = function(...args) 
          
        {
          //print("JS: QLine.prototype.y1");
          return this.__PROXY__.y1(...args);
        };
    
        // function 
        QLine.prototype.x2 = function(...args) 
          
        {
          //print("JS: QLine.prototype.x2");
          return this.__PROXY__.x2(...args);
        };
    
        // function 
        QLine.prototype.y2 = function(...args) 
          
        {
          //print("JS: QLine.prototype.y2");
          return this.__PROXY__.y2(...args);
        };
    
        // function 
        QLine.prototype.dx = function(...args) 
          
        {
          //print("JS: QLine.prototype.dx");
          return this.__PROXY__.dx(...args);
        };
    
        // function 
        QLine.prototype.dy = function(...args) 
          
        {
          //print("JS: QLine.prototype.dy");
          return this.__PROXY__.dy(...args);
        };
    
        // function 
        QLine.prototype.translate = function(...args) 
          
        {
          //print("JS: QLine.prototype.translate");
          return this.__PROXY__.translate(...args);
        };
    
        // function 
        QLine.prototype.translated = function(...args) 
          
        {
          //print("JS: QLine.prototype.translated");
          return this.__PROXY__.translated(...args);
        };
    
        // function 
        QLine.prototype.center = function(...args) 
          
        {
          //print("JS: QLine.prototype.center");
          return this.__PROXY__.center(...args);
        };
    
        // function 
        QLine.prototype.setP1 = function(...args) 
          
        {
          //print("JS: QLine.prototype.setP1");
          return this.__PROXY__.setP1(...args);
        };
    
        // function 
        QLine.prototype.setP2 = function(...args) 
          
        {
          //print("JS: QLine.prototype.setP2");
          return this.__PROXY__.setP2(...args);
        };
    
        // function 
        QLine.prototype.setPoints = function(...args) 
          
        {
          //print("JS: QLine.prototype.setPoints");
          return this.__PROXY__.setPoints(...args);
        };
    
        // function 
        QLine.prototype.setLine = function(...args) 
          
        {
          //print("JS: QLine.prototype.setLine");
          return this.__PROXY__.setLine(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QLine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QLine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QLine.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      