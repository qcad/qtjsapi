
      // auto generated
      //var self;

      // class constructor:
      function QActionGroup() {
        

        // should be QActionGroup_BaseJs.call(this, engine):
        //QActionGroup.prototype = new QActionGroup_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QActionGroup.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QActionGroup);
                
            //}
          }
          else {
            qWarning("QActionGroup.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QActionGroup_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QActionGroup);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QActionGroup);
  }

  
  else {
    
        print("QActionGroup(): wrong number / type of arguments");
      
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
              
    this["triggered(QAction*)"] = Object.getPrototypeOf(this).triggered;
  
    this["hovered(QAction*)"] = Object.getPrototypeOf(this).hovered;
  
            }
          
        }

        

      }

      //QActionGroup.prototype = new QActionGroup_BaseJs(engine);
      //QActionGroup.prototype = new QActionGroup_Wrapper(engine);
      QActionGroup.prototype = new Object();

      QActionGroup.prototype.toString = function() {
          //return "QActionGroup [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QActionGroup [JS]";
        };
      QActionGroup.getObjectType = function() {
        return RJSType_QActionGroup.getIdStatic();
      };

      QActionGroup.prototype.getObjectType = function() {
        return RJSType_QActionGroup.getIdStatic();
      };

      QActionGroup.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QActionGroup.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
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
      //QActionGroup.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QActionGroup.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      