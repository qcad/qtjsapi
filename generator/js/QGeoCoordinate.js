
      // auto generated
      //var self;

      // class constructor:
      function QGeoCoordinate() {
        

        // should be QGeoCoordinate_BaseJs.call(this, engine):
        //QGeoCoordinate.prototype = new QGeoCoordinate_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGeoCoordinate.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QGeoCoordinate);
                
            //}
          }
          else {
            qWarning("QGeoCoordinate.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new QGeoCoordinate_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QGeoCoordinate);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGeoCoordinate);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QGeoCoordinate_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QGeoCoordinate);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGeoCoordinate);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QGeoCoordinate_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QGeoCoordinate);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGeoCoordinate);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QGeoCoordinate_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QGeoCoordinate);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGeoCoordinate);
  }

  
  else {
    
        print("QGeoCoordinate(): wrong number / type of arguments");
      
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

      //QGeoCoordinate.prototype = new QGeoCoordinate_BaseJs(engine);
      //QGeoCoordinate.prototype = new QGeoCoordinate_Wrapper(engine);
      QGeoCoordinate.prototype = new Object();

      
        // function with alias name in CPP wrapper:
        QGeoCoordinate.prototype.toString = function() {
          
              return this.toStr.apply(this, arguments);
            
        }
      QGeoCoordinate.getObjectType = function() {
        return RJSType_QGeoCoordinate.getIdStatic();
      };

      QGeoCoordinate.prototype.getObjectType = function() {
        return RJSType_QGeoCoordinate.getIdStatic();
      };

      QGeoCoordinate.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGeoCoordinate.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: CoordinateType
QGeoCoordinate.InvalidCoordinate = QGeoCoordinate_Wrapper.InvalidCoordinate;
QGeoCoordinate.Coordinate2D = QGeoCoordinate_Wrapper.Coordinate2D;
QGeoCoordinate.Coordinate3D = QGeoCoordinate_Wrapper.Coordinate3D;

  // enum: CoordinateFormat
QGeoCoordinate.Degrees = QGeoCoordinate_Wrapper.Degrees;
QGeoCoordinate.DegreesWithHemisphere = QGeoCoordinate_Wrapper.DegreesWithHemisphere;
QGeoCoordinate.DegreesMinutes = QGeoCoordinate_Wrapper.DegreesMinutes;
QGeoCoordinate.DegreesMinutesWithHemisphere = QGeoCoordinate_Wrapper.DegreesMinutesWithHemisphere;
QGeoCoordinate.DegreesMinutesSeconds = QGeoCoordinate_Wrapper.DegreesMinutesSeconds;
QGeoCoordinate.DegreesMinutesSecondsWithHemisphere = QGeoCoordinate_Wrapper.DegreesMinutesSecondsWithHemisphere;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGeoCoordinate.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGeoCoordinate.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      