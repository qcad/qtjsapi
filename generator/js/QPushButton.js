
      // auto generated
      //var self;

      // class constructor:
      function QPushButton() {
        

        // should be QPushButton_BaseJs.call(this, engine):
        //QPushButton.prototype = new QPushButton_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPushButton.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QPushButton);
                
            //}
          }
          else {
            qWarning("QPushButton.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QPushButton_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPushButton);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPushButton);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QPushButton_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPushButton);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPushButton);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QPushButton_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPushButton);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPushButton);
  }

  
  else {
    
        print("QPushButton(): wrong number / type of arguments");
      
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
              
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["clicked(bool)"] = Object.getPrototypeOf(this).clicked;
  
    this["toggled(bool)"] = Object.getPrototypeOf(this).toggled;
  
            }
          
        }

        

      }

      //QPushButton.prototype = new QPushButton_BaseJs(engine);
      //QPushButton.prototype = new QPushButton_Wrapper(engine);
      QPushButton.prototype = new Object();

      QPushButton.prototype.toString = function() {
          //return "QPushButton [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPushButton [JS]";
        };
      QPushButton.getObjectType = function() {
        return RJSType_QPushButton.getIdStatic();
      };

      QPushButton.prototype.getObjectType = function() {
        return RJSType_QPushButton.getIdStatic();
      };

      QPushButton.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPushButton.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractButton.getIdStatic()) {
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
      //QPushButton.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPushButton.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      