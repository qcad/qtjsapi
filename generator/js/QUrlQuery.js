
      // auto generated
      //var self;

      // class constructor:
      function QUrlQuery() {
        

        // should be QUrlQuery_BaseJs.call(this, engine):
        //QUrlQuery.prototype = new QUrlQuery_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QUrlQuery.getIdStatic()))) {

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
            qWarning("QUrlQuery.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QUrlQuery_Wrapper(
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

      

        //copyProperties(this, wrapper, QUrlQuery);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QUrlQuery_Wrapper(
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

      

        //copyProperties(this, wrapper, QUrlQuery);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QUrlQuery_Wrapper(
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

      

        //copyProperties(this, wrapper, QUrlQuery);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QUrlQuery_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QUrlQuery);
  }

  
  else {
    
        print("QUrlQuery(): wrong number / type of arguments");
      
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

      //QUrlQuery.prototype = new QUrlQuery_BaseJs(engine);
      //QUrlQuery.prototype = new QUrlQuery_Wrapper(engine);
      QUrlQuery.prototype = new Object();


      QUrlQuery.getObjectType = function() {
        return RJSType_QUrlQuery.getIdStatic();
      };

      QUrlQuery.prototype.getObjectType = function() {
        return RJSType_QUrlQuery.getIdStatic();
      };

      QUrlQuery.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QUrlQuery.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QUrlQuery.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.operator_assign");
          
              return this.__PROXY__.operator_assign(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.swap = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.isDetached = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.isDetached");
          
              return this.__PROXY__.isDetached(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.clear = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.query = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.query");
          
              return this.__PROXY__.query(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.setQuery = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.setQuery");
          
              return this.__PROXY__.setQuery(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.toString = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.toString");
          
              return this.__PROXY__.toString(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.setQueryDelimiters = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.setQueryDelimiters");
          
              return this.__PROXY__.setQueryDelimiters(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.queryValueDelimiter = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.queryValueDelimiter");
          
              return this.__PROXY__.queryValueDelimiter(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.queryPairDelimiter = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.queryPairDelimiter");
          
              return this.__PROXY__.queryPairDelimiter(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.setQueryItems = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.setQueryItems");
          
              return this.__PROXY__.setQueryItems(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.queryItems = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.queryItems");
          
              return this.__PROXY__.queryItems(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.hasQueryItem = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.hasQueryItem");
          
              return this.__PROXY__.hasQueryItem(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.addQueryItem = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.addQueryItem");
          
              return this.__PROXY__.addQueryItem(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.removeQueryItem = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.removeQueryItem");
          
              return this.__PROXY__.removeQueryItem(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.queryItemValue = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.queryItemValue");
          
              return this.__PROXY__.queryItemValue(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.allQueryItemValues = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.allQueryItemValues");
          
              return this.__PROXY__.allQueryItemValues(...args);
            
        };
    
        // function 
        QUrlQuery.prototype.removeAllQueryItems = function(...args) 
          
        {
          //print("JS: QUrlQuery.prototype.removeAllQueryItems");
          
              return this.__PROXY__.removeAllQueryItems(...args);
            
        };
    

      // static functions:
      QUrlQuery.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QUrlQuery.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QUrlQuery.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QUrlQuery.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QUrlQuery.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QUrlQuery.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      