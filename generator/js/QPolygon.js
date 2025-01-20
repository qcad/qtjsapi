
      // auto generated
      //var self;

      // class constructor:
      function QPolygon() {
        

        // should be QPolygon_BaseJs.call(this, engine):
        //QPolygon.prototype = new QPolygon_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPolygon.getIdStatic()))) {

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
            qWarning("QPolygon.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPolygon_Wrapper(
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

      

        //copyProperties(this, wrapper, QPolygon);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPolygon_Wrapper(
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

      

        //copyProperties(this, wrapper, QPolygon);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPolygon_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPolygon);
  }

  
  else {
    
        print("QPolygon(): wrong number / type of arguments");
      
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

      //QPolygon.prototype = new QPolygon_BaseJs(engine);
      //QPolygon.prototype = new QPolygon_Wrapper(engine);
      QPolygon.prototype = new Object();

      QPolygon.prototype.toString = function() {
          //return "QPolygon [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPolygon [JS]";
        };
      QPolygon.getObjectType = function() {
        return RJSType_QPolygon.getIdStatic();
      };

      QPolygon.prototype.getObjectType = function() {
        return RJSType_QPolygon.getIdStatic();
      };

      QPolygon.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPolygon.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QPolygon.prototype.swap = function(...args) 
          
        {
          //print("JS: QPolygon.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QPolygon.prototype.translate = function(...args) 
          
        {
          //print("JS: QPolygon.prototype.translate");
          return this.__PROXY__.translate(...args);
        };
    
        // function 
        QPolygon.prototype.translated = function(...args) 
          
        {
          //print("JS: QPolygon.prototype.translated");
          return this.__PROXY__.translated(...args);
        };
    
        // function 
        QPolygon.prototype.boundingRect = function(...args) 
          
        {
          //print("JS: QPolygon.prototype.boundingRect");
          return this.__PROXY__.boundingRect(...args);
        };
    
        // function 
        QPolygon.prototype.point = function(...args) 
          
        {
          //print("JS: QPolygon.prototype.point");
          return this.__PROXY__.point(...args);
        };
    
        // function 
        QPolygon.prototype.setPoint = function(...args) 
          
        {
          //print("JS: QPolygon.prototype.setPoint");
          return this.__PROXY__.setPoint(...args);
        };
    
        // function 
        QPolygon.prototype.containsPoint = function(...args) 
          
        {
          //print("JS: QPolygon.prototype.containsPoint");
          return this.__PROXY__.containsPoint(...args);
        };
    
        // function 
        QPolygon.prototype.united = function(...args) 
          
        {
          //print("JS: QPolygon.prototype.united");
          return this.__PROXY__.united(...args);
        };
    
        // function 
        QPolygon.prototype.intersected = function(...args) 
          
        {
          //print("JS: QPolygon.prototype.intersected");
          return this.__PROXY__.intersected(...args);
        };
    
        // function 
        QPolygon.prototype.subtracted = function(...args) 
          
        {
          //print("JS: QPolygon.prototype.subtracted");
          return this.__PROXY__.subtracted(...args);
        };
    
        // function 
        QPolygon.prototype.intersects = function(...args) 
          
        {
          //print("JS: QPolygon.prototype.intersects");
          return this.__PROXY__.intersects(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPolygon.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPolygon.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QPolygon.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      