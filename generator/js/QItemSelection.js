
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
            arguments[2].getWrappedType()===RJSType_QItemSelection.getIdStatic()))) {

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
        return RJSType_QItemSelection.getIdStatic();
      };

      QItemSelection.prototype.getObjectType = function() {
        return RJSType_QItemSelection.getIdStatic();
      };

      QItemSelection.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QItemSelection.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QItemSelection.prototype.select = function(...args) 
          
        {
          //print("JS: QItemSelection.prototype.select");
          
              return this.__PROXY__.select(...args);
            
        };
        
        // function 
        QItemSelection.prototype.contains = function(...args) 
          
        {
          //print("JS: QItemSelection.prototype.contains");
          
              return this.__PROXY__.contains(...args);
            
        };
        
        // function 
        QItemSelection.prototype.indexes = function(...args) 
          
        {
          //print("JS: QItemSelection.prototype.indexes");
          
              return this.__PROXY__.indexes(...args);
            
        };
        
        // function 
        QItemSelection.prototype.merge = function(...args) 
          
        {
          //print("JS: QItemSelection.prototype.merge");
          
              return this.__PROXY__.merge(...args);
            
        };
        

      // static functions:
      QItemSelection.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QItemSelection.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QItemSelection.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

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

      QItemSelection.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      