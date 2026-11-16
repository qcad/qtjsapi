
      // auto generated
      //var self;

      // class constructor:
      function QGeoPath() {
        

        // should be QGeoPath_BaseJs.call(this, engine):
        //QGeoPath.prototype = new QGeoPath_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGeoPath.getIdStatic()))) {

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
            qWarning("QGeoPath.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QGeoPath_Wrapper(
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

      

        //copyProperties(this, wrapper, QGeoPath);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QGeoPath_Wrapper(
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

      

        //copyProperties(this, wrapper, QGeoPath);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QGeoPath_Wrapper(
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

      

        //copyProperties(this, wrapper, QGeoPath);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QGeoPath_Wrapper(
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

      

        //copyProperties(this, wrapper, QGeoPath);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QGeoPath_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGeoPath);
  }

  
  else {
    
        print("QGeoPath(): wrong number / type of arguments");
      
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

      //QGeoPath.prototype = new QGeoPath_BaseJs(engine);
      //QGeoPath.prototype = new QGeoPath_Wrapper(engine);
      QGeoPath.prototype = new Object();


      
        // function with alias name in CPP wrapper:
        QGeoPath.prototype.toString = function() {
          
              return this.__PROXY__.toStr.apply(this, arguments);
            
        }
      QGeoPath.getObjectType = function() {
        return RJSType_QGeoPath.getIdStatic();
      };

      QGeoPath.prototype.getObjectType = function() {
        return RJSType_QGeoPath.getIdStatic();
      };

      QGeoPath.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGeoPath.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QGeoShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ShapeType
QGeoPath.UnknownType = QGeoPath_Wrapper.UnknownType;
QGeoPath.RectangleType = QGeoPath_Wrapper.RectangleType;
QGeoPath.CircleType = QGeoPath_Wrapper.CircleType;
QGeoPath.PathType = QGeoPath_Wrapper.PathType;
QGeoPath.PolygonType = QGeoPath_Wrapper.PolygonType;


      // functions:
      
        // function 
        QGeoPath.prototype.type = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
        
        // function 
        QGeoPath.prototype.isValid = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
        
        // function 
        QGeoPath.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
        
        // function 
        QGeoPath.prototype.contains = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.contains");
          
              return this.__PROXY__.contains(...args);
            
        };
        
        // function 
        QGeoPath.prototype.boundingGeoRectangle = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.boundingGeoRectangle");
          
              return this.__PROXY__.boundingGeoRectangle(...args);
            
        };
        
        // function 
        QGeoPath.prototype.center = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.center");
          
              return this.__PROXY__.center(...args);
            
        };
        
        // function 
        QGeoPath.prototype.setPath = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.setPath");
          
              return this.__PROXY__.setPath(...args);
            
        };
        
        // function 
        QGeoPath.prototype.path = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.path");
          
              return this.__PROXY__.path(...args);
            
        };
        
        // function 
        QGeoPath.prototype.clearPath = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.clearPath");
          
              return this.__PROXY__.clearPath(...args);
            
        };
        
        // function 
        QGeoPath.prototype.setWidth = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.setWidth");
          
              return this.__PROXY__.setWidth(...args);
            
        };
        
        // function 
        QGeoPath.prototype.width = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.width");
          
              return this.__PROXY__.width(...args);
            
        };
        
        // function 
        QGeoPath.prototype.translated = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.translated");
          
              return this.__PROXY__.translated(...args);
            
        };
        
        // function 
        QGeoPath.prototype.translate = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.translate");
          
              return this.__PROXY__.translate(...args);
            
        };
        
        // function 
        QGeoPath.prototype.length = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.length");
          
              return this.__PROXY__.length(...args);
            
        };
        
        // function 
        QGeoPath.prototype.size = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
        
        // function 
        QGeoPath.prototype.addCoordinate = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.addCoordinate");
          
              return this.__PROXY__.addCoordinate(...args);
            
        };
        
        // function 
        QGeoPath.prototype.insertCoordinate = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.insertCoordinate");
          
              return this.__PROXY__.insertCoordinate(...args);
            
        };
        
        // function 
        QGeoPath.prototype.replaceCoordinate = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.replaceCoordinate");
          
              return this.__PROXY__.replaceCoordinate(...args);
            
        };
        
        // function 
        QGeoPath.prototype.coordinateAt = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.coordinateAt");
          
              return this.__PROXY__.coordinateAt(...args);
            
        };
        
        // function 
        QGeoPath.prototype.containsCoordinate = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.containsCoordinate");
          
              return this.__PROXY__.containsCoordinate(...args);
            
        };
        
        // function 
        QGeoPath.prototype.removeCoordinate = function(...args) 
          
        {
          //print("JS: QGeoPath.prototype.removeCoordinate");
          
              return this.__PROXY__.removeCoordinate(...args);
            
        };
        

      // static functions:
      QGeoPath.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QGeoPath.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QGeoPath.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGeoPath.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGeoPath.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QGeoPath.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      