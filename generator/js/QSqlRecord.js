
      // auto generated
      //var self;

      // class constructor:
      function QSqlRecord() {
        

        // should be QSqlRecord_BaseJs.call(this, engine):
        //QSqlRecord.prototype = new QSqlRecord_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSqlRecord.getIdStatic()))) {

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
            qWarning("QSqlRecord.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSqlRecord_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSqlRecord);
  }

  
  else {
    
        print("QSqlRecord(): wrong number / type of arguments");
      
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

      //QSqlRecord.prototype = new QSqlRecord_BaseJs(engine);
      //QSqlRecord.prototype = new QSqlRecord_Wrapper(engine);
      QSqlRecord.prototype = new Object();


      QSqlRecord.prototype.toString = function() {
          //return "QSqlRecord [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSqlRecord [JS]";
        };
      QSqlRecord.getObjectType = function() {
        return RJSType_QSqlRecord.getIdStatic();
      };

      QSqlRecord.prototype.getObjectType = function() {
        return RJSType_QSqlRecord.getIdStatic();
      };

      QSqlRecord.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSqlRecord.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QSqlRecord.prototype.value = function(...args) 
          
        {
          //print("JS: QSqlRecord.prototype.value");
          
              return this.__PROXY__.value(...args);
            
        };
        
        // function 
        QSqlRecord.prototype.isNull = function(...args) 
          
        {
          //print("JS: QSqlRecord.prototype.isNull");
          
              return this.__PROXY__.isNull(...args);
            
        };
        
        // function 
        QSqlRecord.prototype.indexOf = function(...args) 
          
        {
          //print("JS: QSqlRecord.prototype.indexOf");
          
              return this.__PROXY__.indexOf(...args);
            
        };
        
        // function 
        QSqlRecord.prototype.fieldName = function(...args) 
          
        {
          //print("JS: QSqlRecord.prototype.fieldName");
          
              return this.__PROXY__.fieldName(...args);
            
        };
        
        // function 
        QSqlRecord.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QSqlRecord.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
        
        // function 
        QSqlRecord.prototype.contains = function(...args) 
          
        {
          //print("JS: QSqlRecord.prototype.contains");
          
              return this.__PROXY__.contains(...args);
            
        };
        
        // function 
        QSqlRecord.prototype.clear = function(...args) 
          
        {
          //print("JS: QSqlRecord.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        QSqlRecord.prototype.clearValues = function(...args) 
          
        {
          //print("JS: QSqlRecord.prototype.clearValues");
          
              return this.__PROXY__.clearValues(...args);
            
        };
        
        // function 
        QSqlRecord.prototype.count = function(...args) 
          
        {
          //print("JS: QSqlRecord.prototype.count");
          
              return this.__PROXY__.count(...args);
            
        };
        

      // static functions:
      QSqlRecord.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSqlRecord.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSqlRecord.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSqlRecord.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSqlRecord.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSqlRecord.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      