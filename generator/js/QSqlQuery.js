
      // auto generated
      //var self;

      // class constructor:
      function QSqlQuery() {
        

        // should be QSqlQuery_BaseJs.call(this, engine):
        //QSqlQuery.prototype = new QSqlQuery_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSqlQuery.getIdStatic()))) {

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
            qWarning("QSqlQuery.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSqlQuery_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSqlQuery);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSqlQuery_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSqlQuery);
  }

  
  else {
    
        print("QSqlQuery(): wrong number / type of arguments");
      
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

      //QSqlQuery.prototype = new QSqlQuery_BaseJs(engine);
      //QSqlQuery.prototype = new QSqlQuery_Wrapper(engine);
      QSqlQuery.prototype = new Object();


      QSqlQuery.prototype.toString = function() {
          //return "QSqlQuery [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSqlQuery [JS]";
        };
      QSqlQuery.getObjectType = function() {
        return RJSType_QSqlQuery.getIdStatic();
      };

      QSqlQuery.prototype.getObjectType = function() {
        return RJSType_QSqlQuery.getIdStatic();
      };

      QSqlQuery.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSqlQuery.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QSqlQuery.prototype.isValid = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.isActive = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.isActive");
          
              return this.__PROXY__.isActive(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.isSelect = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.isSelect");
          
              return this.__PROXY__.isSelect(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.size = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.numRowsAffected = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.numRowsAffected");
          
              return this.__PROXY__.numRowsAffected(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.lastError = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.lastError");
          
              return this.__PROXY__.lastError(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.lastQuery = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.lastQuery");
          
              return this.__PROXY__.lastQuery(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.lastInsertId = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.lastInsertId");
          
              return this.__PROXY__.lastInsertId(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.setForwardOnly = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.setForwardOnly");
          
              return this.__PROXY__.setForwardOnly(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.exec = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.exec");
          
              return this.__PROXY__.exec(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.prepare = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.prepare");
          
              return this.__PROXY__.prepare(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.addBindValue = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.addBindValue");
          
              return this.__PROXY__.addBindValue(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.value = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.value");
          
              return this.__PROXY__.value(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.record = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.record");
          
              return this.__PROXY__.record(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.next = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.next");
          
              return this.__PROXY__.next(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.previous = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.previous");
          
              return this.__PROXY__.previous(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.first = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.first");
          
              return this.__PROXY__.first(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.last = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.last");
          
              return this.__PROXY__.last(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.seek = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.seek");
          
              return this.__PROXY__.seek(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.at = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.at");
          
              return this.__PROXY__.at(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.finish = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.finish");
          
              return this.__PROXY__.finish(...args);
            
        };
        
        // function 
        QSqlQuery.prototype.clear = function(...args) 
          
        {
          //print("JS: QSqlQuery.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        

      // static functions:
      QSqlQuery.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSqlQuery.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSqlQuery.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSqlQuery.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSqlQuery.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSqlQuery.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      