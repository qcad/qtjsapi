
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
              
                  copyProperties(this, wrapper, QGeoPolygon);
                
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
          
            copyProperties(this, wrapper, QGeoPolygon);
          

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
          
            copyProperties(this, wrapper, QGeoPolygon);
          

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
          
            copyProperties(this, wrapper, QGeoPolygon);
          

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
          
            copyProperties(this, wrapper, QGeoPolygon);
          

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
          
              return this.toStr.apply(this, arguments);
            
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
      

      // static functions:
      

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

      