
      // auto generated
      //var self;

      // class constructor:
      function QCheckBox() {
        

        // should be QCheckBox_BaseJs.call(this, engine):
        //QCheckBox.prototype = new QCheckBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QCheckBox.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QCheckBox);
                
            //}
          }
          else {
            qWarning("QCheckBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QCheckBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QCheckBox);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QCheckBox);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QCheckBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QCheckBox);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QCheckBox);
  }

  
  else {
    
        print("QCheckBox(): wrong number / type of arguments");
      
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
  
    this["stateChanged(int)"] = Object.getPrototypeOf(this).stateChanged;
  
            }
          
        }

        

      }

      //QCheckBox.prototype = new QCheckBox_BaseJs(engine);
      //QCheckBox.prototype = new QCheckBox_Wrapper(engine);
      QCheckBox.prototype = new Object();

      QCheckBox.prototype.toString = function() {
          //return "QCheckBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QCheckBox [JS]";
        };
      QCheckBox.getObjectType = function() {
        return RJSType_QCheckBox.getIdStatic();
      };

      QCheckBox.prototype.getObjectType = function() {
        return RJSType_QCheckBox.getIdStatic();
      };

      QCheckBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QCheckBox.getIdStatic()) {
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
      //QCheckBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QCheckBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      