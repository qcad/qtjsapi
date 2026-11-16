
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
              return this.__PROXY__.toStr.apply(this, arguments);
            
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
      
        // function 
        QGeoCoordinate.prototype.isValid = function(...args) 
          
        {
          //print("JS: QGeoCoordinate.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
        
        // function 
        QGeoCoordinate.prototype.type = function(...args) 
          
        {
          //print("JS: QGeoCoordinate.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
        
        // function 
        QGeoCoordinate.prototype.setLatitude = function(...args) 
          
        {
          //print("JS: QGeoCoordinate.prototype.setLatitude");
          
              return this.__PROXY__.setLatitude(...args);
            
        };
        
        // function 
        QGeoCoordinate.prototype.latitude = function(...args) 
          
        {
          //print("JS: QGeoCoordinate.prototype.latitude");
          
              return this.__PROXY__.latitude(...args);
            
        };
        
        // function 
        QGeoCoordinate.prototype.setLongitude = function(...args) 
          
        {
          //print("JS: QGeoCoordinate.prototype.setLongitude");
          
              return this.__PROXY__.setLongitude(...args);
            
        };
        
        // function 
        QGeoCoordinate.prototype.longitude = function(...args) 
          
        {
          //print("JS: QGeoCoordinate.prototype.longitude");
          
              return this.__PROXY__.longitude(...args);
            
        };
        
        // function 
        QGeoCoordinate.prototype.setAltitude = function(...args) 
          
        {
          //print("JS: QGeoCoordinate.prototype.setAltitude");
          
              return this.__PROXY__.setAltitude(...args);
            
        };
        
        // function 
        QGeoCoordinate.prototype.altitude = function(...args) 
          
        {
          //print("JS: QGeoCoordinate.prototype.altitude");
          
              return this.__PROXY__.altitude(...args);
            
        };
        
        // function 
        QGeoCoordinate.prototype.distanceTo = function(...args) 
          
        {
          //print("JS: QGeoCoordinate.prototype.distanceTo");
          
              return this.__PROXY__.distanceTo(...args);
            
        };
        
        // function 
        QGeoCoordinate.prototype.azimuthTo = function(...args) 
          
        {
          //print("JS: QGeoCoordinate.prototype.azimuthTo");
          
              return this.__PROXY__.azimuthTo(...args);
            
        };
        
        // function 
        QGeoCoordinate.prototype.atDistanceAndAzimuth = function(...args) 
          
        {
          //print("JS: QGeoCoordinate.prototype.atDistanceAndAzimuth");
          
              return this.__PROXY__.atDistanceAndAzimuth(...args);
            
        };
        

      // static functions:
      QGeoCoordinate.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QGeoCoordinate.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QGeoCoordinate.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

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

      QGeoCoordinate.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      