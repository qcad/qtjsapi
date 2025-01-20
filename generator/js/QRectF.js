
      // auto generated
      //var self;

      // class constructor:
      function QRectF() {
        

        // should be QRectF_BaseJs.call(this, engine):
        //QRectF.prototype = new QRectF_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QRectF.getIdStatic()))) {

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
            qWarning("QRectF.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QRectF_Wrapper(
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

      

        //copyProperties(this, wrapper, QRectF);
  }

  
  else 
  
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QRectF_Wrapper(
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

      

        //copyProperties(this, wrapper, QRectF);
  }

  
  else 
  
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QRectF_Wrapper(
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

      

        //copyProperties(this, wrapper, QRectF);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QRectF_Wrapper(
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

      

        //copyProperties(this, wrapper, QRectF);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QRectF_Wrapper(
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

      

        //copyProperties(this, wrapper, QRectF);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QRectF_Wrapper(
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

      

        //copyProperties(this, wrapper, QRectF);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QRectF_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRectF);
  }

  
  else {
    
        print("QRectF(): wrong number / type of arguments");
      
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

      //QRectF.prototype = new QRectF_BaseJs(engine);
      //QRectF.prototype = new QRectF_Wrapper(engine);
      QRectF.prototype = new Object();

      QRectF.prototype.toString = function() {
          //return "QRectF [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QRectF [JS]";
        };
      QRectF.getObjectType = function() {
        return RJSType_QRectF.getIdStatic();
      };

      QRectF.prototype.getObjectType = function() {
        return RJSType_QRectF.getIdStatic();
      };

      QRectF.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QRectF.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QRectF.prototype.isNull = function(...args) 
          
        {
          //print("JS: QRectF.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QRectF.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QRectF.prototype.isEmpty");
          return this.__PROXY__.isEmpty(...args);
        };
    
        // function 
        QRectF.prototype.isValid = function(...args) 
          
        {
          //print("JS: QRectF.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        QRectF.prototype.normalized = function(...args) 
          
        {
          //print("JS: QRectF.prototype.normalized");
          return this.__PROXY__.normalized(...args);
        };
    
        // function 
        QRectF.prototype.left = function(...args) 
          
        {
          //print("JS: QRectF.prototype.left");
          return this.__PROXY__.left(...args);
        };
    
        // function 
        QRectF.prototype.top = function(...args) 
          
        {
          //print("JS: QRectF.prototype.top");
          return this.__PROXY__.top(...args);
        };
    
        // function 
        QRectF.prototype.right = function(...args) 
          
        {
          //print("JS: QRectF.prototype.right");
          return this.__PROXY__.right(...args);
        };
    
        // function 
        QRectF.prototype.bottom = function(...args) 
          
        {
          //print("JS: QRectF.prototype.bottom");
          return this.__PROXY__.bottom(...args);
        };
    
        // function 
        QRectF.prototype.x = function(...args) 
          
        {
          //print("JS: QRectF.prototype.x");
          return this.__PROXY__.x(...args);
        };
    
        // function 
        QRectF.prototype.y = function(...args) 
          
        {
          //print("JS: QRectF.prototype.y");
          return this.__PROXY__.y(...args);
        };
    
        // function 
        QRectF.prototype.setLeft = function(...args) 
          
        {
          //print("JS: QRectF.prototype.setLeft");
          return this.__PROXY__.setLeft(...args);
        };
    
        // function 
        QRectF.prototype.setTop = function(...args) 
          
        {
          //print("JS: QRectF.prototype.setTop");
          return this.__PROXY__.setTop(...args);
        };
    
        // function 
        QRectF.prototype.setRight = function(...args) 
          
        {
          //print("JS: QRectF.prototype.setRight");
          return this.__PROXY__.setRight(...args);
        };
    
        // function 
        QRectF.prototype.setBottom = function(...args) 
          
        {
          //print("JS: QRectF.prototype.setBottom");
          return this.__PROXY__.setBottom(...args);
        };
    
        // function 
        QRectF.prototype.setX = function(...args) 
          
        {
          //print("JS: QRectF.prototype.setX");
          return this.__PROXY__.setX(...args);
        };
    
        // function 
        QRectF.prototype.setY = function(...args) 
          
        {
          //print("JS: QRectF.prototype.setY");
          return this.__PROXY__.setY(...args);
        };
    
        // function 
        QRectF.prototype.topLeft = function(...args) 
          
        {
          //print("JS: QRectF.prototype.topLeft");
          return this.__PROXY__.topLeft(...args);
        };
    
        // function 
        QRectF.prototype.bottomRight = function(...args) 
          
        {
          //print("JS: QRectF.prototype.bottomRight");
          return this.__PROXY__.bottomRight(...args);
        };
    
        // function 
        QRectF.prototype.topRight = function(...args) 
          
        {
          //print("JS: QRectF.prototype.topRight");
          return this.__PROXY__.topRight(...args);
        };
    
        // function 
        QRectF.prototype.bottomLeft = function(...args) 
          
        {
          //print("JS: QRectF.prototype.bottomLeft");
          return this.__PROXY__.bottomLeft(...args);
        };
    
        // function 
        QRectF.prototype.center = function(...args) 
          
        {
          //print("JS: QRectF.prototype.center");
          return this.__PROXY__.center(...args);
        };
    
        // function 
        QRectF.prototype.setTopLeft = function(...args) 
          
        {
          //print("JS: QRectF.prototype.setTopLeft");
          return this.__PROXY__.setTopLeft(...args);
        };
    
        // function 
        QRectF.prototype.setBottomRight = function(...args) 
          
        {
          //print("JS: QRectF.prototype.setBottomRight");
          return this.__PROXY__.setBottomRight(...args);
        };
    
        // function 
        QRectF.prototype.setTopRight = function(...args) 
          
        {
          //print("JS: QRectF.prototype.setTopRight");
          return this.__PROXY__.setTopRight(...args);
        };
    
        // function 
        QRectF.prototype.setBottomLeft = function(...args) 
          
        {
          //print("JS: QRectF.prototype.setBottomLeft");
          return this.__PROXY__.setBottomLeft(...args);
        };
    
        // function 
        QRectF.prototype.moveLeft = function(...args) 
          
        {
          //print("JS: QRectF.prototype.moveLeft");
          return this.__PROXY__.moveLeft(...args);
        };
    
        // function 
        QRectF.prototype.moveTop = function(...args) 
          
        {
          //print("JS: QRectF.prototype.moveTop");
          return this.__PROXY__.moveTop(...args);
        };
    
        // function 
        QRectF.prototype.moveRight = function(...args) 
          
        {
          //print("JS: QRectF.prototype.moveRight");
          return this.__PROXY__.moveRight(...args);
        };
    
        // function 
        QRectF.prototype.moveBottom = function(...args) 
          
        {
          //print("JS: QRectF.prototype.moveBottom");
          return this.__PROXY__.moveBottom(...args);
        };
    
        // function 
        QRectF.prototype.moveTopLeft = function(...args) 
          
        {
          //print("JS: QRectF.prototype.moveTopLeft");
          return this.__PROXY__.moveTopLeft(...args);
        };
    
        // function 
        QRectF.prototype.moveBottomRight = function(...args) 
          
        {
          //print("JS: QRectF.prototype.moveBottomRight");
          return this.__PROXY__.moveBottomRight(...args);
        };
    
        // function 
        QRectF.prototype.moveTopRight = function(...args) 
          
        {
          //print("JS: QRectF.prototype.moveTopRight");
          return this.__PROXY__.moveTopRight(...args);
        };
    
        // function 
        QRectF.prototype.moveBottomLeft = function(...args) 
          
        {
          //print("JS: QRectF.prototype.moveBottomLeft");
          return this.__PROXY__.moveBottomLeft(...args);
        };
    
        // function 
        QRectF.prototype.moveCenter = function(...args) 
          
        {
          //print("JS: QRectF.prototype.moveCenter");
          return this.__PROXY__.moveCenter(...args);
        };
    
        // function 
        QRectF.prototype.translate = function(...args) 
          
        {
          //print("JS: QRectF.prototype.translate");
          return this.__PROXY__.translate(...args);
        };
    
        // function 
        QRectF.prototype.translated = function(...args) 
          
        {
          //print("JS: QRectF.prototype.translated");
          return this.__PROXY__.translated(...args);
        };
    
        // function 
        QRectF.prototype.transposed = function(...args) 
          
        {
          //print("JS: QRectF.prototype.transposed");
          return this.__PROXY__.transposed(...args);
        };
    
        // function 
        QRectF.prototype.moveTo = function(...args) 
          
        {
          //print("JS: QRectF.prototype.moveTo");
          return this.__PROXY__.moveTo(...args);
        };
    
        // function 
        QRectF.prototype.setRect = function(...args) 
          
        {
          //print("JS: QRectF.prototype.setRect");
          return this.__PROXY__.setRect(...args);
        };
    
        // function 
        QRectF.prototype.setCoords = function(...args) 
          
        {
          //print("JS: QRectF.prototype.setCoords");
          return this.__PROXY__.setCoords(...args);
        };
    
        // function 
        QRectF.prototype.adjust = function(...args) 
          
        {
          //print("JS: QRectF.prototype.adjust");
          return this.__PROXY__.adjust(...args);
        };
    
        // function 
        QRectF.prototype.adjusted = function(...args) 
          
        {
          //print("JS: QRectF.prototype.adjusted");
          return this.__PROXY__.adjusted(...args);
        };
    
        // function 
        QRectF.prototype.size = function(...args) 
          
        {
          //print("JS: QRectF.prototype.size");
          return this.__PROXY__.size(...args);
        };
    
        // function 
        QRectF.prototype.width = function(...args) 
          
        {
          //print("JS: QRectF.prototype.width");
          return this.__PROXY__.width(...args);
        };
    
        // function 
        QRectF.prototype.height = function(...args) 
          
        {
          //print("JS: QRectF.prototype.height");
          return this.__PROXY__.height(...args);
        };
    
        // function 
        QRectF.prototype.setWidth = function(...args) 
          
        {
          //print("JS: QRectF.prototype.setWidth");
          return this.__PROXY__.setWidth(...args);
        };
    
        // function 
        QRectF.prototype.setHeight = function(...args) 
          
        {
          //print("JS: QRectF.prototype.setHeight");
          return this.__PROXY__.setHeight(...args);
        };
    
        // function 
        QRectF.prototype.setSize = function(...args) 
          
        {
          //print("JS: QRectF.prototype.setSize");
          return this.__PROXY__.setSize(...args);
        };
    
        // function 
        QRectF.prototype.contains = function(...args) 
          
        {
          //print("JS: QRectF.prototype.contains");
          return this.__PROXY__.contains(...args);
        };
    
        // function 
        QRectF.prototype.united = function(...args) 
          
        {
          //print("JS: QRectF.prototype.united");
          return this.__PROXY__.united(...args);
        };
    
        // function 
        QRectF.prototype.intersected = function(...args) 
          
        {
          //print("JS: QRectF.prototype.intersected");
          return this.__PROXY__.intersected(...args);
        };
    
        // function 
        QRectF.prototype.intersects = function(...args) 
          
        {
          //print("JS: QRectF.prototype.intersects");
          return this.__PROXY__.intersects(...args);
        };
    
        // function 
        QRectF.prototype.marginsAdded = function(...args) 
          
        {
          //print("JS: QRectF.prototype.marginsAdded");
          return this.__PROXY__.marginsAdded(...args);
        };
    
        // function 
        QRectF.prototype.marginsRemoved = function(...args) 
          
        {
          //print("JS: QRectF.prototype.marginsRemoved");
          return this.__PROXY__.marginsRemoved(...args);
        };
    
        // function 
        QRectF.prototype.toRect = function(...args) 
          
        {
          //print("JS: QRectF.prototype.toRect");
          return this.__PROXY__.toRect(...args);
        };
    
        // function 
        QRectF.prototype.toAlignedRect = function(...args) 
          
        {
          //print("JS: QRectF.prototype.toAlignedRect");
          return this.__PROXY__.toAlignedRect(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QRectF.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QRectF.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QRectF.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      