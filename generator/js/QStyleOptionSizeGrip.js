
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionSizeGrip() {
        

        // should be QStyleOptionSizeGrip_BaseJs.call(this, engine):
        //QStyleOptionSizeGrip.prototype = new QStyleOptionSizeGrip_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionSizeGrip.getIdStatic()))) {

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
            qWarning("QStyleOptionSizeGrip.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionSizeGrip_Wrapper(
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

      

        //copyProperties(this, wrapper, QStyleOptionSizeGrip);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionSizeGrip_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionSizeGrip);
  }

  
  else {
    
        print("QStyleOptionSizeGrip(): wrong number / type of arguments");
      
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

      //QStyleOptionSizeGrip.prototype = new QStyleOptionSizeGrip_BaseJs(engine);
      //QStyleOptionSizeGrip.prototype = new QStyleOptionSizeGrip_Wrapper(engine);
      QStyleOptionSizeGrip.prototype = new Object();


      QStyleOptionSizeGrip.prototype.toString = function() {
          //return "QStyleOptionSizeGrip [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionSizeGrip [JS]";
        };
      QStyleOptionSizeGrip.getObjectType = function() {
        return RJSType_QStyleOptionSizeGrip.getIdStatic();
      };

      QStyleOptionSizeGrip.prototype.getObjectType = function() {
        return RJSType_QStyleOptionSizeGrip.getIdStatic();
      };

      QStyleOptionSizeGrip.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionSizeGrip.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOptionComplex.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QStyleOptionSizeGrip.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QStyleOptionSizeGrip.prototype.operator_assign");
          
              return this.__PROXY__.operator_assign(...args);
            
        };
        

      // static functions:
      QStyleOptionSizeGrip.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QStyleOptionSizeGrip.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QStyleOptionSizeGrip.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionSizeGrip.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionSizeGrip.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QStyleOptionSizeGrip.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      