
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
              
                  copyProperties(this, wrapper, QGeoRectangle);
                
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
          
            copyProperties(this, wrapper, QGeoRectangle);
          

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
          
            copyProperties(this, wrapper, QGeoRectangle);
          

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
          
            copyProperties(this, wrapper, QGeoRectangle);
          

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
          
            copyProperties(this, wrapper, QGeoRectangle);
          

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
          
            copyProperties(this, wrapper, QGeoRectangle);
          

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
          
            copyProperties(this, wrapper, QGeoRectangle);
          

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
          
              return this.toStr.apply(this, arguments);
            
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
      

      // static functions:
      

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

      