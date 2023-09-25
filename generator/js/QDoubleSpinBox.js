
      // auto generated
      //var self;

      // class constructor:
      function QDoubleSpinBox() {
        

        // should be QDoubleSpinBox_BaseJs.call(this, engine):
        //QDoubleSpinBox.prototype = new QDoubleSpinBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDoubleSpinBox.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDoubleSpinBox);
            //}
          }
          else {
            qWarning("QDoubleSpinBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QDoubleSpinBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDoubleSpinBox);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDoubleSpinBox);
  }

  
  else {
    
        print("QDoubleSpinBox(): wrong number / type of arguments");
      
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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
    this["valueChanged(double)"] = Object.getPrototypeOf(this).valueChanged;
  
    this["textChanged(QString)"] = Object.getPrototypeOf(this).textChanged;
  
          }
        }
      }

      //QDoubleSpinBox.prototype = new QDoubleSpinBox_BaseJs(engine);
      //QDoubleSpinBox.prototype = new QDoubleSpinBox_Wrapper(engine);
      QDoubleSpinBox.prototype = new Object();

      QDoubleSpinBox.prototype.toString = function() {
          //return "QDoubleSpinBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDoubleSpinBox [JS]";
        };
      QDoubleSpinBox.getObjectType = function() {
        return RJSType_QDoubleSpinBox.getIdStatic();
      };

      QDoubleSpinBox.prototype.getObjectType = function() {
        return RJSType_QDoubleSpinBox.getIdStatic();
      };

      QDoubleSpinBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDoubleSpinBox.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QAbstractSpinBox.getIdStatic()) {
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
      //QDoubleSpinBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDoubleSpinBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    