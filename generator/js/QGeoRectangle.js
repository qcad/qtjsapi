
      // auto generated
      //var self;

      // class constructor:
      function QGeoRectangle() {
        

        // should be QGeoRectangle_BaseJs.call(this, engine):
        //QGeoRectangle.prototype = new QGeoRectangle_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGeoRectangle.getIdStatic()))) {

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
            qWarning("QGeoRectangle.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new QGeoRectangle_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGeoRectangle);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QGeoRectangle_Wrapper(
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

      

        //copyProperties(this, wrapper, QGeoRectangle);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QGeoRectangle_Wrapper(
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

      

        //copyProperties(this, wrapper, QGeoRectangle);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QGeoRectangle_Wrapper(
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

      

        //copyProperties(this, wrapper, QGeoRectangle);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QGeoRectangle_Wrapper(
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

      

        //copyProperties(this, wrapper, QGeoRectangle);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QGeoRectangle_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGeoRectangle);
  }

  
  else {
    
        print("QGeoRectangle(): wrong number / type of arguments");
      
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

      //QGeoRectangle.prototype = new QGeoRectangle_BaseJs(engine);
      //QGeoRectangle.prototype = new QGeoRectangle_Wrapper(engine);
      QGeoRectangle.prototype = new Object();


      
        // function with alias name in CPP wrapper:
        QGeoRectangle.prototype.toString = function() {
          
              return this.__PROXY__.toStr.apply(this, arguments);
            
        }
      QGeoRectangle.getObjectType = function() {
        return RJSType_QGeoRectangle.getIdStatic();
      };

      QGeoRectangle.prototype.getObjectType = function() {
        return RJSType_QGeoRectangle.getIdStatic();
      };

      QGeoRectangle.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGeoRectangle.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QGeoShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ShapeType
QGeoRectangle.UnknownType = QGeoRectangle_Wrapper.UnknownType;
QGeoRectangle.RectangleType = QGeoRectangle_Wrapper.RectangleType;
QGeoRectangle.CircleType = QGeoRectangle_Wrapper.CircleType;
QGeoRectangle.PathType = QGeoRectangle_Wrapper.PathType;
QGeoRectangle.PolygonType = QGeoRectangle_Wrapper.PolygonType;


      // functions:
      
        // function 
        QGeoRectangle.prototype.type = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.isValid = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.boundingGeoRectangle = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.boundingGeoRectangle");
          
              return this.__PROXY__.boundingGeoRectangle(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.contains = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.contains");
          
              return this.__PROXY__.contains(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.setTopLeft = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.setTopLeft");
          
              return this.__PROXY__.setTopLeft(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.topLeft = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.topLeft");
          
              return this.__PROXY__.topLeft(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.setTopRight = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.setTopRight");
          
              return this.__PROXY__.setTopRight(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.topRight = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.topRight");
          
              return this.__PROXY__.topRight(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.setBottomLeft = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.setBottomLeft");
          
              return this.__PROXY__.setBottomLeft(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.bottomLeft = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.bottomLeft");
          
              return this.__PROXY__.bottomLeft(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.setBottomRight = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.setBottomRight");
          
              return this.__PROXY__.setBottomRight(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.bottomRight = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.bottomRight");
          
              return this.__PROXY__.bottomRight(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.setCenter = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.setCenter");
          
              return this.__PROXY__.setCenter(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.center = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.center");
          
              return this.__PROXY__.center(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.setWidth = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.setWidth");
          
              return this.__PROXY__.setWidth(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.width = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.width");
          
              return this.__PROXY__.width(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.setHeight = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.setHeight");
          
              return this.__PROXY__.setHeight(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.height = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.height");
          
              return this.__PROXY__.height(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.intersects = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.intersects");
          
              return this.__PROXY__.intersects(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.translate = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.translate");
          
              return this.__PROXY__.translate(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.translated = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.translated");
          
              return this.__PROXY__.translated(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.extendRectangle = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.extendRectangle");
          
              return this.__PROXY__.extendRectangle(...args);
            
        };
    
        // function 
        QGeoRectangle.prototype.united = function(...args) 
          
        {
          //print("JS: QGeoRectangle.prototype.united");
          
              return this.__PROXY__.united(...args);
            
        };
    

      // static functions:
      QGeoRectangle.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QGeoRectangle.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QGeoRectangle.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGeoRectangle.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGeoRectangle.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QGeoRectangle.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      