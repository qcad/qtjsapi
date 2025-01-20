
      // auto generated
      //var self;

      // class constructor:
      function QPolygonF() {
        

        // should be QPolygonF_BaseJs.call(this, engine):
        //QPolygonF.prototype = new QPolygonF_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPolygonF.getIdStatic()))) {

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
            qWarning("QPolygonF.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPolygonF_Wrapper(
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

      

        //copyProperties(this, wrapper, QPolygonF);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPolygonF_Wrapper(
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

      

        //copyProperties(this, wrapper, QPolygonF);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPolygonF_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPolygonF);
  }

  
  else {
    
        print("QPolygonF(): wrong number / type of arguments");
      
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

      //QPolygonF.prototype = new QPolygonF_BaseJs(engine);
      //QPolygonF.prototype = new QPolygonF_Wrapper(engine);
      QPolygonF.prototype = new Object();

      QPolygonF.prototype.toString = function() {
          //return "QPolygonF [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPolygonF [JS]";
        };
      QPolygonF.getObjectType = function() {
        return RJSType_QPolygonF.getIdStatic();
      };

      QPolygonF.prototype.getObjectType = function() {
        return RJSType_QPolygonF.getIdStatic();
      };

      QPolygonF.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPolygonF.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QPolygonF.prototype.swap = function(...args) 
          
        {
          //print("JS: QPolygonF.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QPolygonF.prototype.translate = function(...args) 
          
        {
          //print("JS: QPolygonF.prototype.translate");
          return this.__PROXY__.translate(...args);
        };
    
        // function 
        QPolygonF.prototype.translated = function(...args) 
          
        {
          //print("JS: QPolygonF.prototype.translated");
          return this.__PROXY__.translated(...args);
        };
    
        // function 
        QPolygonF.prototype.toPolygon = function(...args) 
          
        {
          //print("JS: QPolygonF.prototype.toPolygon");
          return this.__PROXY__.toPolygon(...args);
        };
    
        // function 
        QPolygonF.prototype.isClosed = function(...args) 
          
        {
          //print("JS: QPolygonF.prototype.isClosed");
          return this.__PROXY__.isClosed(...args);
        };
    
        // function 
        QPolygonF.prototype.boundingRect = function(...args) 
          
        {
          //print("JS: QPolygonF.prototype.boundingRect");
          return this.__PROXY__.boundingRect(...args);
        };
    
        // function 
        QPolygonF.prototype.containsPoint = function(...args) 
          
        {
          //print("JS: QPolygonF.prototype.containsPoint");
          return this.__PROXY__.containsPoint(...args);
        };
    
        // function 
        QPolygonF.prototype.united = function(...args) 
          
        {
          //print("JS: QPolygonF.prototype.united");
          return this.__PROXY__.united(...args);
        };
    
        // function 
        QPolygonF.prototype.intersected = function(...args) 
          
        {
          //print("JS: QPolygonF.prototype.intersected");
          return this.__PROXY__.intersected(...args);
        };
    
        // function 
        QPolygonF.prototype.subtracted = function(...args) 
          
        {
          //print("JS: QPolygonF.prototype.subtracted");
          return this.__PROXY__.subtracted(...args);
        };
    
        // function 
        QPolygonF.prototype.intersects = function(...args) 
          
        {
          //print("JS: QPolygonF.prototype.intersects");
          return this.__PROXY__.intersects(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPolygonF.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPolygonF.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QPolygonF.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      