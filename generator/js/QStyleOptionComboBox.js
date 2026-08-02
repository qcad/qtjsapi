
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionComboBox() {
        

        // should be QStyleOptionComboBox_BaseJs.call(this, engine):
        //QStyleOptionComboBox.prototype = new QStyleOptionComboBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionComboBox.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionComboBox);
                
            //}
          }
          else {
            qWarning("QStyleOptionComboBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionComboBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionComboBox);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionComboBox);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionComboBox_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionComboBox);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionComboBox);
  }

  
  else {
    
        print("QStyleOptionComboBox(): wrong number / type of arguments");
      
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

      //QStyleOptionComboBox.prototype = new QStyleOptionComboBox_BaseJs(engine);
      //QStyleOptionComboBox.prototype = new QStyleOptionComboBox_Wrapper(engine);
      QStyleOptionComboBox.prototype = new Object();

      QStyleOptionComboBox.prototype.toString = function() {
          //return "QStyleOptionComboBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionComboBox [JS]";
        };
      QStyleOptionComboBox.getObjectType = function() {
        return RJSType_QStyleOptionComboBox.getIdStatic();
      };

      QStyleOptionComboBox.prototype.getObjectType = function() {
        return RJSType_QStyleOptionComboBox.getIdStatic();
      };

      QStyleOptionComboBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionComboBox.getIdStatic()) {
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
      //QStyleOptionComboBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionComboBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      