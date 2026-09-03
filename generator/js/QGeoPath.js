
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
              
                  copyProperties(this, wrapper, QGeoPath);
                
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
          
            copyProperties(this, wrapper, QGeoPath);
          

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
          
            copyProperties(this, wrapper, QGeoPath);
          

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
          
            copyProperties(this, wrapper, QGeoPath);
          

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
          
            copyProperties(this, wrapper, QGeoPath);
          

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
          
            copyProperties(this, wrapper, QGeoPath);
          

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
          
              return this.toStr.apply(this, arguments);
            
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
      

      // static functions:
      

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

      