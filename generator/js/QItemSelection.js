
      // auto generated
      //var self;

      // class constructor:
      function QItemSelection() {
        

        // should be QItemSelection_BaseJs.call(this, engine):
        //QItemSelection.prototype = new QItemSelection_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QItemSelection_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QItemSelection);
            //}
          }
          else {
            qWarning("QItemSelection.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QItemSelection_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QItemSelection);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QItemSelection);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QItemSelection_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QItemSelection);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QItemSelection);
  }

  
  else {
    
        print("QItemSelection(): wrong number / type of arguments");
      
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
            
          }
        }
      }

      //QItemSelection.prototype = new QItemSelection_BaseJs(engine);
      //QItemSelection.prototype = new QItemSelection_Wrapper(engine);
      QItemSelection.prototype = new Object();

      QItemSelection.prototype.toString = function() {
          //return "QItemSelection [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QItemSelection [JS]";
        };
      QItemSelection.getObjectType = function() {
        
            return RJSType.QItemSelection_Type;
          
      };

      QItemSelection.prototype.getObjectType = function() {
        
            return RJSType.QItemSelection_Type;
          
      };

      QItemSelection.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QItemSelection_Type:
              return true;
          
        default:
          return false;
        }

        /*
        return [
          RJSType.QItemSelection_Type, 
          
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QItemSelection.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QItemSelection.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    