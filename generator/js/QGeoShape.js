
      // auto generated
      //var self;

      // class constructor:
      function QGeoShape() {
        

        // should be QGeoShape_BaseJs.call(this, engine):
        //QGeoShape.prototype = new QGeoShape_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGeoShape.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QGeoShape);
                
            //}
          }
          else {
            qWarning("QGeoShape.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QGeoShape_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QGeoShape);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGeoShape);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QGeoShape_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QGeoShape);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGeoShape);
  }

  
  else {
    
        print("QGeoShape(): wrong number / type of arguments");
      
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

      //QGeoShape.prototype = new QGeoShape_BaseJs(engine);
      //QGeoShape.prototype = new QGeoShape_Wrapper(engine);
      QGeoShape.prototype = new Object();

      
        // function with alias name in CPP wrapper:
        QGeoShape.prototype.toString = function() {
          
              return this.toStr.apply(this, arguments);
            
        }
      QGeoShape.getObjectType = function() {
        return RJSType_QGeoShape.getIdStatic();
      };

      QGeoShape.prototype.getObjectType = function() {
        return RJSType_QGeoShape.getIdStatic();
      };

      QGeoShape.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGeoShape.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: ShapeType
QGeoShape.UnknownType = QGeoShape_Wrapper.UnknownType;
QGeoShape.RectangleType = QGeoShape_Wrapper.RectangleType;
QGeoShape.CircleType = QGeoShape_Wrapper.CircleType;
QGeoShape.PathType = QGeoShape_Wrapper.PathType;
QGeoShape.PolygonType = QGeoShape_Wrapper.PolygonType;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGeoShape.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGeoShape.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      