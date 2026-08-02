
      // auto generated
      //var self;

      // class constructor:
      function QSslEllipticCurve() {
        

        // should be QSslEllipticCurve_BaseJs.call(this, engine):
        //QSslEllipticCurve.prototype = new QSslEllipticCurve_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSslEllipticCurve.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QSslEllipticCurve);
                
            //}
          }
          else {
            qWarning("QSslEllipticCurve.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSslEllipticCurve_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslEllipticCurve);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslEllipticCurve);
  }

  
  else {
    
        print("QSslEllipticCurve(): wrong number / type of arguments");
      
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

      //QSslEllipticCurve.prototype = new QSslEllipticCurve_BaseJs(engine);
      //QSslEllipticCurve.prototype = new QSslEllipticCurve_Wrapper(engine);
      QSslEllipticCurve.prototype = new Object();

      QSslEllipticCurve.prototype.toString = function() {
          //return "QSslEllipticCurve [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSslEllipticCurve [JS]";
        };
      QSslEllipticCurve.getObjectType = function() {
        return RJSType_QSslEllipticCurve.getIdStatic();
      };

      QSslEllipticCurve.prototype.getObjectType = function() {
        return RJSType_QSslEllipticCurve.getIdStatic();
      };

      QSslEllipticCurve.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSslEllipticCurve.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QSslEllipticCurve.fromShortName = function() 
          
        {
          //print("JS: QSslEllipticCurve.fromShortName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QSslEllipticCurve_WrapperSingletonInstance.fromShortName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSslEllipticCurve);
  }

  
  else {
    
        print("QSslEllipticCurve.fromShortName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslEllipticCurve.fromLongName = function() 
          
        {
          //print("JS: QSslEllipticCurve.fromLongName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QSslEllipticCurve_WrapperSingletonInstance.fromLongName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSslEllipticCurve);
  }

  
  else {
    
        print("QSslEllipticCurve.fromLongName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslEllipticCurve.equals = function() 
          
        {
          //print("JS: QSslEllipticCurve.equals");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QSslEllipticCurve_WrapperSingletonInstance.equals(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSslEllipticCurve);
  }

  
  else {
    
        print("QSslEllipticCurve.equals(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslEllipticCurve.operator_not_assign = function() 
          
        {
          //print("JS: QSslEllipticCurve.operator_not_assign");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QSslEllipticCurve_WrapperSingletonInstance.operator_not_assign(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSslEllipticCurve);
  }

  
  else {
    
        print("QSslEllipticCurve.operator_not_assign(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSslEllipticCurve.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSslEllipticCurve.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      