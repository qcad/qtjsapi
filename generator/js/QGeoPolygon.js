
      // auto generated
      //var self;

      // class constructor:
      function QGeoPolygon() {
        

        // should be QGeoPolygon_BaseJs.call(this, engine):
        //QGeoPolygon.prototype = new QGeoPolygon_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGeoPolygon.getIdStatic()))) {

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
            qWarning("QGeoPolygon.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QGeoPolygon_Wrapper(
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

      

        //copyProperties(this, wrapper, QGeoPolygon);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QGeoPolygon_Wrapper(
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

      

        //copyProperties(this, wrapper, QGeoPolygon);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QGeoPolygon_Wrapper(
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

      

        //copyProperties(this, wrapper, QGeoPolygon);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QGeoPolygon_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGeoPolygon);
  }

  
  else {
    
        print("QGeoPolygon(): wrong number / type of arguments");
      
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

      //QGeoPolygon.prototype = new QGeoPolygon_BaseJs(engine);
      //QGeoPolygon.prototype = new QGeoPolygon_Wrapper(engine);
      QGeoPolygon.prototype = new Object();


      
        // function with alias name in CPP wrapper:
        QGeoPolygon.prototype.toString = function() {
          
              return this.__PROXY__.toStr.apply(this, arguments);
            
        }
      QGeoPolygon.getObjectType = function() {
        return RJSType_QGeoPolygon.getIdStatic();
      };

      QGeoPolygon.prototype.getObjectType = function() {
        return RJSType_QGeoPolygon.getIdStatic();
      };

      QGeoPolygon.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGeoPolygon.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QGeoShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ShapeType
QGeoPolygon.UnknownType = QGeoPolygon_Wrapper.UnknownType;
QGeoPolygon.RectangleType = QGeoPolygon_Wrapper.RectangleType;
QGeoPolygon.CircleType = QGeoPolygon_Wrapper.CircleType;
QGeoPolygon.PathType = QGeoPolygon_Wrapper.PathType;
QGeoPolygon.PolygonType = QGeoPolygon_Wrapper.PolygonType;


      // functions:
      
        // function 
        QGeoPolygon.prototype.type = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.isValid = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.contains = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.contains");
          
              return this.__PROXY__.contains(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.boundingGeoRectangle = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.boundingGeoRectangle");
          
              return this.__PROXY__.boundingGeoRectangle(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.center = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.center");
          
              return this.__PROXY__.center(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.setPerimeter = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.setPerimeter");
          
              return this.__PROXY__.setPerimeter(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.perimeter = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.perimeter");
          
              return this.__PROXY__.perimeter(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.addHole = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.addHole");
          
              return this.__PROXY__.addHole(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.holePath = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.holePath");
          
              return this.__PROXY__.holePath(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.removeHole = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.removeHole");
          
              return this.__PROXY__.removeHole(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.holesCount = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.holesCount");
          
              return this.__PROXY__.holesCount(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.translated = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.translated");
          
              return this.__PROXY__.translated(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.translate = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.translate");
          
              return this.__PROXY__.translate(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.length = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.length");
          
              return this.__PROXY__.length(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.size = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.addCoordinate = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.addCoordinate");
          
              return this.__PROXY__.addCoordinate(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.insertCoordinate = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.insertCoordinate");
          
              return this.__PROXY__.insertCoordinate(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.replaceCoordinate = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.replaceCoordinate");
          
              return this.__PROXY__.replaceCoordinate(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.coordinateAt = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.coordinateAt");
          
              return this.__PROXY__.coordinateAt(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.containsCoordinate = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.containsCoordinate");
          
              return this.__PROXY__.containsCoordinate(...args);
            
        };
    
        // function 
        QGeoPolygon.prototype.removeCoordinate = function(...args) 
          
        {
          //print("JS: QGeoPolygon.prototype.removeCoordinate");
          
              return this.__PROXY__.removeCoordinate(...args);
            
        };
    

      // static functions:
      QGeoPolygon.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QGeoPolygon.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QGeoPolygon.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGeoPolygon.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGeoPolygon.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QGeoPolygon.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      