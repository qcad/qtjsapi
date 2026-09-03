
      // auto generated
      //var self;

      // class constructor:
      function QGeoJson() {
        

        // should be QGeoJson_BaseJs.call(this, engine):
        //QGeoJson.prototype = new QGeoJson_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGeoJson.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QGeoJson);
                
            //}
          }
          else {
            qWarning("QGeoJson.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QGeoJson.js: No constructor found for class QGeoJson");
            
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

      //QGeoJson.prototype = new QGeoJson_BaseJs(engine);
      //QGeoJson.prototype = new QGeoJson_Wrapper(engine);
      QGeoJson.prototype = new Object();

      
        // function with alias name in CPP wrapper:
        QGeoJson.prototype.toString = function() {
          
              return this.toStr.apply(this, arguments);
            
        }
      QGeoJson.getObjectType = function() {
        return RJSType_QGeoJson.getIdStatic();
      };

      QGeoJson.prototype.getObjectType = function() {
        return RJSType_QGeoJson.getIdStatic();
      };

      QGeoJson.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGeoJson.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QGeoJson.importGeoJson = function() 
          
        {
          //print("JS: QGeoJson.importGeoJson");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGeoJson_WrapperSingletonInstance.importGeoJson(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGeoJson);
  }

  
  else {
    
        print("QGeoJson.importGeoJson(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGeoJson.importGeoJsonPlain = function() 
          
        {
          //print("JS: QGeoJson.importGeoJsonPlain");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGeoJson_WrapperSingletonInstance.importGeoJsonPlain(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGeoJson);
  }

  
  else {
    
        print("QGeoJson.importGeoJsonPlain(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGeoJson.toPlain = function() 
          
        {
          //print("JS: QGeoJson.toPlain");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGeoJson_WrapperSingletonInstance.toPlain(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGeoJson);
  }

  
  else {
    
        print("QGeoJson.toPlain(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGeoJson.exportGeoJson = function() 
          
        {
          //print("JS: QGeoJson.exportGeoJson");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGeoJson_WrapperSingletonInstance.exportGeoJson(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGeoJson);
  }

  
  else {
    
        print("QGeoJson.exportGeoJson(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGeoJson.toString = function() 
          
        {
          //print("JS: QGeoJson.toString");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGeoJson_WrapperSingletonInstance.toStr(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGeoJson);
  }

  
  else {
    
        print("QGeoJson.toString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGeoJson.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGeoJson.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      