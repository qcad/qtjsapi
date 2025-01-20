
      // auto generated
      //var self;

      // class constructor:
      function QRect() {
        

        // should be QRect_BaseJs.call(this, engine):
        //QRect.prototype = new QRect_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QRect.getIdStatic()))) {

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
            qWarning("QRect.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QRect_Wrapper(
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

      

        //copyProperties(this, wrapper, QRect);
  }

  
  else 
  
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QRect_Wrapper(
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

      

        //copyProperties(this, wrapper, QRect);
  }

  
  else 
  
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QRect_Wrapper(
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

      

        //copyProperties(this, wrapper, QRect);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QRect_Wrapper(
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

      

        //copyProperties(this, wrapper, QRect);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QRect_Wrapper(
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

      

        //copyProperties(this, wrapper, QRect);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QRect_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRect);
  }

  
  else {
    
        print("QRect(): wrong number / type of arguments");
      
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

      //QRect.prototype = new QRect_BaseJs(engine);
      //QRect.prototype = new QRect_Wrapper(engine);
      QRect.prototype = new Object();

      QRect.prototype.toString = function() {
          //return "QRect [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QRect [JS]";
        };
      QRect.getObjectType = function() {
        return RJSType_QRect.getIdStatic();
      };

      QRect.prototype.getObjectType = function() {
        return RJSType_QRect.getIdStatic();
      };

      QRect.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QRect.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QRect.prototype.isNull = function(...args) 
          
        {
          //print("JS: QRect.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QRect.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QRect.prototype.isEmpty");
          return this.__PROXY__.isEmpty(...args);
        };
    
        // function 
        QRect.prototype.isValid = function(...args) 
          
        {
          //print("JS: QRect.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        QRect.prototype.left = function(...args) 
          
        {
          //print("JS: QRect.prototype.left");
          return this.__PROXY__.left(...args);
        };
    
        // function 
        QRect.prototype.top = function(...args) 
          
        {
          //print("JS: QRect.prototype.top");
          return this.__PROXY__.top(...args);
        };
    
        // function 
        QRect.prototype.right = function(...args) 
          
        {
          //print("JS: QRect.prototype.right");
          return this.__PROXY__.right(...args);
        };
    
        // function 
        QRect.prototype.bottom = function(...args) 
          
        {
          //print("JS: QRect.prototype.bottom");
          return this.__PROXY__.bottom(...args);
        };
    
        // function 
        QRect.prototype.normalized = function(...args) 
          
        {
          //print("JS: QRect.prototype.normalized");
          return this.__PROXY__.normalized(...args);
        };
    
        // function 
        QRect.prototype.x = function(...args) 
          
        {
          //print("JS: QRect.prototype.x");
          return this.__PROXY__.x(...args);
        };
    
        // function 
        QRect.prototype.y = function(...args) 
          
        {
          //print("JS: QRect.prototype.y");
          return this.__PROXY__.y(...args);
        };
    
        // function 
        QRect.prototype.setLeft = function(...args) 
          
        {
          //print("JS: QRect.prototype.setLeft");
          return this.__PROXY__.setLeft(...args);
        };
    
        // function 
        QRect.prototype.setTop = function(...args) 
          
        {
          //print("JS: QRect.prototype.setTop");
          return this.__PROXY__.setTop(...args);
        };
    
        // function 
        QRect.prototype.setRight = function(...args) 
          
        {
          //print("JS: QRect.prototype.setRight");
          return this.__PROXY__.setRight(...args);
        };
    
        // function 
        QRect.prototype.setBottom = function(...args) 
          
        {
          //print("JS: QRect.prototype.setBottom");
          return this.__PROXY__.setBottom(...args);
        };
    
        // function 
        QRect.prototype.setX = function(...args) 
          
        {
          //print("JS: QRect.prototype.setX");
          return this.__PROXY__.setX(...args);
        };
    
        // function 
        QRect.prototype.setY = function(...args) 
          
        {
          //print("JS: QRect.prototype.setY");
          return this.__PROXY__.setY(...args);
        };
    
        // function 
        QRect.prototype.setTopLeft = function(...args) 
          
        {
          //print("JS: QRect.prototype.setTopLeft");
          return this.__PROXY__.setTopLeft(...args);
        };
    
        // function 
        QRect.prototype.setBottomRight = function(...args) 
          
        {
          //print("JS: QRect.prototype.setBottomRight");
          return this.__PROXY__.setBottomRight(...args);
        };
    
        // function 
        QRect.prototype.setTopRight = function(...args) 
          
        {
          //print("JS: QRect.prototype.setTopRight");
          return this.__PROXY__.setTopRight(...args);
        };
    
        // function 
        QRect.prototype.setBottomLeft = function(...args) 
          
        {
          //print("JS: QRect.prototype.setBottomLeft");
          return this.__PROXY__.setBottomLeft(...args);
        };
    
        // function 
        QRect.prototype.topLeft = function(...args) 
          
        {
          //print("JS: QRect.prototype.topLeft");
          return this.__PROXY__.topLeft(...args);
        };
    
        // function 
        QRect.prototype.bottomRight = function(...args) 
          
        {
          //print("JS: QRect.prototype.bottomRight");
          return this.__PROXY__.bottomRight(...args);
        };
    
        // function 
        QRect.prototype.topRight = function(...args) 
          
        {
          //print("JS: QRect.prototype.topRight");
          return this.__PROXY__.topRight(...args);
        };
    
        // function 
        QRect.prototype.bottomLeft = function(...args) 
          
        {
          //print("JS: QRect.prototype.bottomLeft");
          return this.__PROXY__.bottomLeft(...args);
        };
    
        // function 
        QRect.prototype.center = function(...args) 
          
        {
          //print("JS: QRect.prototype.center");
          return this.__PROXY__.center(...args);
        };
    
        // function 
        QRect.prototype.moveLeft = function(...args) 
          
        {
          //print("JS: QRect.prototype.moveLeft");
          return this.__PROXY__.moveLeft(...args);
        };
    
        // function 
        QRect.prototype.moveTop = function(...args) 
          
        {
          //print("JS: QRect.prototype.moveTop");
          return this.__PROXY__.moveTop(...args);
        };
    
        // function 
        QRect.prototype.moveRight = function(...args) 
          
        {
          //print("JS: QRect.prototype.moveRight");
          return this.__PROXY__.moveRight(...args);
        };
    
        // function 
        QRect.prototype.moveBottom = function(...args) 
          
        {
          //print("JS: QRect.prototype.moveBottom");
          return this.__PROXY__.moveBottom(...args);
        };
    
        // function 
        QRect.prototype.moveTopLeft = function(...args) 
          
        {
          //print("JS: QRect.prototype.moveTopLeft");
          return this.__PROXY__.moveTopLeft(...args);
        };
    
        // function 
        QRect.prototype.moveBottomRight = function(...args) 
          
        {
          //print("JS: QRect.prototype.moveBottomRight");
          return this.__PROXY__.moveBottomRight(...args);
        };
    
        // function 
        QRect.prototype.moveTopRight = function(...args) 
          
        {
          //print("JS: QRect.prototype.moveTopRight");
          return this.__PROXY__.moveTopRight(...args);
        };
    
        // function 
        QRect.prototype.moveBottomLeft = function(...args) 
          
        {
          //print("JS: QRect.prototype.moveBottomLeft");
          return this.__PROXY__.moveBottomLeft(...args);
        };
    
        // function 
        QRect.prototype.moveCenter = function(...args) 
          
        {
          //print("JS: QRect.prototype.moveCenter");
          return this.__PROXY__.moveCenter(...args);
        };
    
        // function 
        QRect.prototype.translate = function(...args) 
          
        {
          //print("JS: QRect.prototype.translate");
          return this.__PROXY__.translate(...args);
        };
    
        // function 
        QRect.prototype.translated = function(...args) 
          
        {
          //print("JS: QRect.prototype.translated");
          return this.__PROXY__.translated(...args);
        };
    
        // function 
        QRect.prototype.transposed = function(...args) 
          
        {
          //print("JS: QRect.prototype.transposed");
          return this.__PROXY__.transposed(...args);
        };
    
        // function 
        QRect.prototype.moveTo = function(...args) 
          
        {
          //print("JS: QRect.prototype.moveTo");
          return this.__PROXY__.moveTo(...args);
        };
    
        // function 
        QRect.prototype.setRect = function(...args) 
          
        {
          //print("JS: QRect.prototype.setRect");
          return this.__PROXY__.setRect(...args);
        };
    
        // function 
        QRect.prototype.setCoords = function(...args) 
          
        {
          //print("JS: QRect.prototype.setCoords");
          return this.__PROXY__.setCoords(...args);
        };
    
        // function 
        QRect.prototype.adjust = function(...args) 
          
        {
          //print("JS: QRect.prototype.adjust");
          return this.__PROXY__.adjust(...args);
        };
    
        // function 
        QRect.prototype.adjusted = function(...args) 
          
        {
          //print("JS: QRect.prototype.adjusted");
          return this.__PROXY__.adjusted(...args);
        };
    
        // function 
        QRect.prototype.size = function(...args) 
          
        {
          //print("JS: QRect.prototype.size");
          return this.__PROXY__.size(...args);
        };
    
        // function 
        QRect.prototype.width = function(...args) 
          
        {
          //print("JS: QRect.prototype.width");
          return this.__PROXY__.width(...args);
        };
    
        // function 
        QRect.prototype.height = function(...args) 
          
        {
          //print("JS: QRect.prototype.height");
          return this.__PROXY__.height(...args);
        };
    
        // function 
        QRect.prototype.setWidth = function(...args) 
          
        {
          //print("JS: QRect.prototype.setWidth");
          return this.__PROXY__.setWidth(...args);
        };
    
        // function 
        QRect.prototype.setHeight = function(...args) 
          
        {
          //print("JS: QRect.prototype.setHeight");
          return this.__PROXY__.setHeight(...args);
        };
    
        // function 
        QRect.prototype.setSize = function(...args) 
          
        {
          //print("JS: QRect.prototype.setSize");
          return this.__PROXY__.setSize(...args);
        };
    
        // function 
        QRect.prototype.contains = function(...args) 
          
        {
          //print("JS: QRect.prototype.contains");
          return this.__PROXY__.contains(...args);
        };
    
        // function 
        QRect.prototype.united = function(...args) 
          
        {
          //print("JS: QRect.prototype.united");
          return this.__PROXY__.united(...args);
        };
    
        // function 
        QRect.prototype.intersected = function(...args) 
          
        {
          //print("JS: QRect.prototype.intersected");
          return this.__PROXY__.intersected(...args);
        };
    
        // function 
        QRect.prototype.intersects = function(...args) 
          
        {
          //print("JS: QRect.prototype.intersects");
          return this.__PROXY__.intersects(...args);
        };
    
        // function 
        QRect.prototype.marginsAdded = function(...args) 
          
        {
          //print("JS: QRect.prototype.marginsAdded");
          return this.__PROXY__.marginsAdded(...args);
        };
    
        // function 
        QRect.prototype.marginsRemoved = function(...args) 
          
        {
          //print("JS: QRect.prototype.marginsRemoved");
          return this.__PROXY__.marginsRemoved(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QRect.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QRect.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QRect.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      