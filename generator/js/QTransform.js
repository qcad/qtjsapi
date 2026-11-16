
      // auto generated
      //var self;

      // class constructor:
      function QTransform() {
        

        // should be QTransform_BaseJs.call(this, engine):
        //QTransform.prototype = new QTransform_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTransform.getIdStatic()))) {

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
            qWarning("QTransform.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 9) {
    
            self = this;
            wrapper = new QTransform_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTransform);
  }

  
  else 
  
      if (arguments.length == 6) {
    
            self = this;
            wrapper = new QTransform_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTransform);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QTransform_Wrapper(
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

      

        //copyProperties(this, wrapper, QTransform);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QTransform_Wrapper(
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

      

        //copyProperties(this, wrapper, QTransform);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTransform_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTransform);
  }

  
  else {
    
        print("QTransform(): wrong number / type of arguments");
      
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

      //QTransform.prototype = new QTransform_BaseJs(engine);
      //QTransform.prototype = new QTransform_Wrapper(engine);
      QTransform.prototype = new Object();


      QTransform.prototype.toString = function() {
          //return "QTransform [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTransform [JS]";
        };
      QTransform.getObjectType = function() {
        return RJSType_QTransform.getIdStatic();
      };

      QTransform.prototype.getObjectType = function() {
        return RJSType_QTransform.getIdStatic();
      };

      QTransform.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTransform.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QTransform.prototype.isAffine = function(...args) 
          
        {
          //print("JS: QTransform.prototype.isAffine");
          
              return this.__PROXY__.isAffine(...args);
            
        };
        
        // function 
        QTransform.prototype.isIdentity = function(...args) 
          
        {
          //print("JS: QTransform.prototype.isIdentity");
          
              return this.__PROXY__.isIdentity(...args);
            
        };
        
        // function 
        QTransform.prototype.isInvertible = function(...args) 
          
        {
          //print("JS: QTransform.prototype.isInvertible");
          
              return this.__PROXY__.isInvertible(...args);
            
        };
        
        // function 
        QTransform.prototype.isScaling = function(...args) 
          
        {
          //print("JS: QTransform.prototype.isScaling");
          
              return this.__PROXY__.isScaling(...args);
            
        };
        
        // function 
        QTransform.prototype.isRotating = function(...args) 
          
        {
          //print("JS: QTransform.prototype.isRotating");
          
              return this.__PROXY__.isRotating(...args);
            
        };
        
        // function 
        QTransform.prototype.isTranslating = function(...args) 
          
        {
          //print("JS: QTransform.prototype.isTranslating");
          
              return this.__PROXY__.isTranslating(...args);
            
        };
        
        // function 
        QTransform.prototype.type = function(...args) 
          
        {
          //print("JS: QTransform.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
        
        // function 
        QTransform.prototype.determinant = function(...args) 
          
        {
          //print("JS: QTransform.prototype.determinant");
          
              return this.__PROXY__.determinant(...args);
            
        };
        
        // function 
        QTransform.prototype.m11 = function(...args) 
          
        {
          //print("JS: QTransform.prototype.m11");
          
              return this.__PROXY__.m11(...args);
            
        };
        
        // function 
        QTransform.prototype.m12 = function(...args) 
          
        {
          //print("JS: QTransform.prototype.m12");
          
              return this.__PROXY__.m12(...args);
            
        };
        
        // function 
        QTransform.prototype.m13 = function(...args) 
          
        {
          //print("JS: QTransform.prototype.m13");
          
              return this.__PROXY__.m13(...args);
            
        };
        
        // function 
        QTransform.prototype.m21 = function(...args) 
          
        {
          //print("JS: QTransform.prototype.m21");
          
              return this.__PROXY__.m21(...args);
            
        };
        
        // function 
        QTransform.prototype.m22 = function(...args) 
          
        {
          //print("JS: QTransform.prototype.m22");
          
              return this.__PROXY__.m22(...args);
            
        };
        
        // function 
        QTransform.prototype.m23 = function(...args) 
          
        {
          //print("JS: QTransform.prototype.m23");
          
              return this.__PROXY__.m23(...args);
            
        };
        
        // function 
        QTransform.prototype.m31 = function(...args) 
          
        {
          //print("JS: QTransform.prototype.m31");
          
              return this.__PROXY__.m31(...args);
            
        };
        
        // function 
        QTransform.prototype.m32 = function(...args) 
          
        {
          //print("JS: QTransform.prototype.m32");
          
              return this.__PROXY__.m32(...args);
            
        };
        
        // function 
        QTransform.prototype.m33 = function(...args) 
          
        {
          //print("JS: QTransform.prototype.m33");
          
              return this.__PROXY__.m33(...args);
            
        };
        
        // function 
        QTransform.prototype.dx = function(...args) 
          
        {
          //print("JS: QTransform.prototype.dx");
          
              return this.__PROXY__.dx(...args);
            
        };
        
        // function 
        QTransform.prototype.dy = function(...args) 
          
        {
          //print("JS: QTransform.prototype.dy");
          
              return this.__PROXY__.dy(...args);
            
        };
        
        // function 
        QTransform.prototype.setMatrix = function(...args) 
          
        {
          //print("JS: QTransform.prototype.setMatrix");
          
              return this.__PROXY__.setMatrix(...args);
            
        };
        
        // function 
        QTransform.prototype.inverted = function(...args) 
          
        {
          //print("JS: QTransform.prototype.inverted");
          
              return this.__PROXY__.inverted(...args);
            
        };
        
        // function 
        QTransform.prototype.adjoint = function(...args) 
          
        {
          //print("JS: QTransform.prototype.adjoint");
          
              return this.__PROXY__.adjoint(...args);
            
        };
        
        // function 
        QTransform.prototype.transposed = function(...args) 
          
        {
          //print("JS: QTransform.prototype.transposed");
          
              return this.__PROXY__.transposed(...args);
            
        };
        
        // function 
        QTransform.prototype.translate = function(...args) 
          
        {
          //print("JS: QTransform.prototype.translate");
          
              return this.__PROXY__.translate(...args);
            
        };
        
        // function 
        QTransform.prototype.scale = function(...args) 
          
        {
          //print("JS: QTransform.prototype.scale");
          
              return this.__PROXY__.scale(...args);
            
        };
        
        // function 
        QTransform.prototype.shear = function(...args) 
          
        {
          //print("JS: QTransform.prototype.shear");
          
              return this.__PROXY__.shear(...args);
            
        };
        
        // function 
        QTransform.prototype.rotate = function(...args) 
          
        {
          //print("JS: QTransform.prototype.rotate");
          
              return this.__PROXY__.rotate(...args);
            
        };
        
        // function 
        QTransform.prototype.rotateRadians = function(...args) 
          
        {
          //print("JS: QTransform.prototype.rotateRadians");
          
              return this.__PROXY__.rotateRadians(...args);
            
        };
        
        // function 
        QTransform.prototype.squareToQuad = function(...args) 
          
        {
          //print("JS: QTransform.prototype.squareToQuad");
          
              return this.__PROXY__.squareToQuad(...args);
            
        };
        
        // function 
        QTransform.prototype.quadToSquare = function(...args) 
          
        {
          //print("JS: QTransform.prototype.quadToSquare");
          
              return this.__PROXY__.quadToSquare(...args);
            
        };
        
        // function 
        QTransform.prototype.quadToQuad = function(...args) 
          
        {
          //print("JS: QTransform.prototype.quadToQuad");
          
              return this.__PROXY__.quadToQuad(...args);
            
        };
        
        // function 
        QTransform.prototype.reset = function(...args) 
          
        {
          //print("JS: QTransform.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
        
        // function 
        QTransform.prototype.map = function(...args) 
          
        {
          //print("JS: QTransform.prototype.map");
          
              return this.__PROXY__.map(...args);
            
        };
        
        // function 
        QTransform.prototype.mapToPolygon = function(...args) 
          
        {
          //print("JS: QTransform.prototype.mapToPolygon");
          
              return this.__PROXY__.mapToPolygon(...args);
            
        };
        
        // function 
        QTransform.prototype.mapRect = function(...args) 
          
        {
          //print("JS: QTransform.prototype.mapRect");
          
              return this.__PROXY__.mapRect(...args);
            
        };
        
        // function 
        QTransform.prototype.fromTranslate = function(...args) 
          
        {
          //print("JS: QTransform.prototype.fromTranslate");
          
              return this.__PROXY__.fromTranslate(...args);
            
        };
        
        // function 
        QTransform.prototype.fromScale = function(...args) 
          
        {
          //print("JS: QTransform.prototype.fromScale");
          
              return this.__PROXY__.fromScale(...args);
            
        };
        
        // function 
        QTransform.prototype.operator_multiply_assign = function(...args) 
          
        {
          //print("JS: QTransform.prototype.operator_multiply_assign");
          
              return this.__PROXY__.operator_multiply_assign(...args);
            
        };
        

      // static functions:
      

        // static function 
        QTransform.squareToQuad = function() 
          
        {
          //print("JS: QTransform.squareToQuad");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QTransform_WrapperSingletonInstance.squareToQuad(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTransform);
  }

  
  else {
    
        print("QTransform.squareToQuad(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTransform.quadToSquare = function() 
          
        {
          //print("JS: QTransform.quadToSquare");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QTransform_WrapperSingletonInstance.quadToSquare(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTransform);
  }

  
  else {
    
        print("QTransform.quadToSquare(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTransform.quadToQuad = function() 
          
        {
          //print("JS: QTransform.quadToQuad");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return QTransform_WrapperSingletonInstance.quadToQuad(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QTransform);
  }

  
  else {
    
        print("QTransform.quadToQuad(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTransform.fromTranslate = function() 
          
        {
          //print("JS: QTransform.fromTranslate");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QTransform_WrapperSingletonInstance.fromTranslate(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTransform);
  }

  
  else {
    
        print("QTransform.fromTranslate(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTransform.fromScale = function() 
          
        {
          //print("JS: QTransform.fromScale");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QTransform_WrapperSingletonInstance.fromScale(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTransform);
  }

  
  else {
    
        print("QTransform.fromScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      QTransform.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTransform.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTransform.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTransform.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTransform.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTransform.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      