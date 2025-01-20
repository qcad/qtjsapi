
      // auto generated
      //var self;

      // class constructor:
      function QMenuBar() {
        

        // should be QMenuBar_BaseJs.call(this, engine):
        //QMenuBar.prototype = new QMenuBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QMenuBar.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QMenuBar);
                
            //}
          }
          else {
            qWarning("QMenuBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QMenuBar_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QMenuBar);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMenuBar);
  }

  
  else {
    
        print("QMenuBar(): wrong number / type of arguments");
      
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
  
    this["triggered(QAction*)"] = Object.getPrototypeOf(this).triggered;
  
    this["hovered(QAction*)"] = Object.getPrototypeOf(this).hovered;
  
            }
          
        }

        

      }

      //QMenuBar.prototype = new QMenuBar_BaseJs(engine);
      //QMenuBar.prototype = new QMenuBar_Wrapper(engine);
      QMenuBar.prototype = new Object();

      QMenuBar.prototype.toString = function() {
          //return "QMenuBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMenuBar [JS]";
        };
      QMenuBar.getObjectType = function() {
        return RJSType_QMenuBar.getIdStatic();
      };

      QMenuBar.prototype.getObjectType = function() {
        return RJSType_QMenuBar.getIdStatic();
      };

      QMenuBar.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QMenuBar.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
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
      //QMenuBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMenuBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      