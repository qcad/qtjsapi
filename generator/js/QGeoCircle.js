
      // auto generated
      //var self;

      // class constructor:
      function QGeoCircle() {
        

        // should be QGeoCircle_BaseJs.call(this, engine):
        //QGeoCircle.prototype = new QGeoCircle_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGeoCircle.getIdStatic()))) {

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
            qWarning("QGeoCircle.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QGeoCircle_Wrapper(
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

      

        //copyProperties(this, wrapper, QGeoCircle);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QGeoCircle_Wrapper(
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

      

        //copyProperties(this, wrapper, QGeoCircle);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QGeoCircle_Wrapper(
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

      

        //copyProperties(this, wrapper, QGeoCircle);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QGeoCircle_Wrapper(
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

      

        //copyProperties(this, wrapper, QGeoCircle);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QGeoCircle_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGeoCircle);
  }

  
  else {
    
        print("QGeoCircle(): wrong number / type of arguments");
      
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

      //QGeoCircle.prototype = new QGeoCircle_BaseJs(engine);
      //QGeoCircle.prototype = new QGeoCircle_Wrapper(engine);
      QGeoCircle.prototype = new Object();


      
        // function with alias name in CPP wrapper:
        QGeoCircle.prototype.toString = function() {
          
              return this.__PROXY__.toStr.apply(this, arguments);
            
        }
      QGeoCircle.getObjectType = function() {
        return RJSType_QGeoCircle.getIdStatic();
      };

      QGeoCircle.prototype.getObjectType = function() {
        return RJSType_QGeoCircle.getIdStatic();
      };

      QGeoCircle.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGeoCircle.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QGeoShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ShapeType
QGeoCircle.UnknownType = QGeoCircle_Wrapper.UnknownType;
QGeoCircle.RectangleType = QGeoCircle_Wrapper.RectangleType;
QGeoCircle.CircleType = QGeoCircle_Wrapper.CircleType;
QGeoCircle.PathType = QGeoCircle_Wrapper.PathType;
QGeoCircle.PolygonType = QGeoCircle_Wrapper.PolygonType;


      // functions:
      
        // function 
        QGeoCircle.prototype.type = function(...args) 
          
        {
          //print("JS: QGeoCircle.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
    
        // function 
        QGeoCircle.prototype.isValid = function(...args) 
          
        {
          //print("JS: QGeoCircle.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        QGeoCircle.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QGeoCircle.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
    
        // function 
        QGeoCircle.prototype.contains = function(...args) 
          
        {
          //print("JS: QGeoCircle.prototype.contains");
          
              return this.__PROXY__.contains(...args);
            
        };
    
        // function 
        QGeoCircle.prototype.boundingGeoRectangle = function(...args) 
          
        {
          //print("JS: QGeoCircle.prototype.boundingGeoRectangle");
          
              return this.__PROXY__.boundingGeoRectangle(...args);
            
        };
    
        // function 
        QGeoCircle.prototype.setCenter = function(...args) 
          
        {
          //print("JS: QGeoCircle.prototype.setCenter");
          
              return this.__PROXY__.setCenter(...args);
            
        };
    
        // function 
        QGeoCircle.prototype.center = function(...args) 
          
        {
          //print("JS: QGeoCircle.prototype.center");
          
              return this.__PROXY__.center(...args);
            
        };
    
        // function 
        QGeoCircle.prototype.setRadius = function(...args) 
          
        {
          //print("JS: QGeoCircle.prototype.setRadius");
          
              return this.__PROXY__.setRadius(...args);
            
        };
    
        // function 
        QGeoCircle.prototype.radius = function(...args) 
          
        {
          //print("JS: QGeoCircle.prototype.radius");
          
              return this.__PROXY__.radius(...args);
            
        };
    
        // function 
        QGeoCircle.prototype.translate = function(...args) 
          
        {
          //print("JS: QGeoCircle.prototype.translate");
          
              return this.__PROXY__.translate(...args);
            
        };
    
        // function 
        QGeoCircle.prototype.translated = function(...args) 
          
        {
          //print("JS: QGeoCircle.prototype.translated");
          
              return this.__PROXY__.translated(...args);
            
        };
    
        // function 
        QGeoCircle.prototype.extendCircle = function(...args) 
          
        {
          //print("JS: QGeoCircle.prototype.extendCircle");
          
              return this.__PROXY__.extendCircle(...args);
            
        };
    

      // static functions:
      QGeoCircle.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QGeoCircle.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QGeoCircle.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGeoCircle.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGeoCircle.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QGeoCircle.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      