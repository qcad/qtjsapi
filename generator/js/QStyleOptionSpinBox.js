
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionSpinBox() {
        

        // should be QStyleOptionSpinBox_BaseJs.call(this, engine):
        //QStyleOptionSpinBox.prototype = new QStyleOptionSpinBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionSpinBox.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionSpinBox);
                
            //}
          }
          else {
            qWarning("QStyleOptionSpinBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionSpinBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionSpinBox);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionSpinBox);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionSpinBox_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionSpinBox);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionSpinBox);
  }

  
  else {
    
        print("QStyleOptionSpinBox(): wrong number / type of arguments");
      
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

      //QStyleOptionSpinBox.prototype = new QStyleOptionSpinBox_BaseJs(engine);
      //QStyleOptionSpinBox.prototype = new QStyleOptionSpinBox_Wrapper(engine);
      QStyleOptionSpinBox.prototype = new Object();

      QStyleOptionSpinBox.prototype.toString = function() {
          //return "QStyleOptionSpinBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionSpinBox [JS]";
        };
      QStyleOptionSpinBox.getObjectType = function() {
        return RJSType_QStyleOptionSpinBox.getIdStatic();
      };

      QStyleOptionSpinBox.prototype.getObjectType = function() {
        return RJSType_QStyleOptionSpinBox.getIdStatic();
      };

      QStyleOptionSpinBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionSpinBox.getIdStatic()) {
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
      //QStyleOptionSpinBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionSpinBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      