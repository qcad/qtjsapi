
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionGroupBox() {
        

        // should be QStyleOptionGroupBox_BaseJs.call(this, engine):
        //QStyleOptionGroupBox.prototype = new QStyleOptionGroupBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionGroupBox.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionGroupBox);
                
            //}
          }
          else {
            qWarning("QStyleOptionGroupBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionGroupBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionGroupBox);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionGroupBox);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionGroupBox_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionGroupBox);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionGroupBox);
  }

  
  else {
    
        print("QStyleOptionGroupBox(): wrong number / type of arguments");
      
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

      //QStyleOptionGroupBox.prototype = new QStyleOptionGroupBox_BaseJs(engine);
      //QStyleOptionGroupBox.prototype = new QStyleOptionGroupBox_Wrapper(engine);
      QStyleOptionGroupBox.prototype = new Object();

      QStyleOptionGroupBox.prototype.toString = function() {
          //return "QStyleOptionGroupBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionGroupBox [JS]";
        };
      QStyleOptionGroupBox.getObjectType = function() {
        return RJSType_QStyleOptionGroupBox.getIdStatic();
      };

      QStyleOptionGroupBox.prototype.getObjectType = function() {
        return RJSType_QStyleOptionGroupBox.getIdStatic();
      };

      QStyleOptionGroupBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionGroupBox.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOptionComplex.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionGroupBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionGroupBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      