
      // auto generated
      //var self;

      // class constructor:
      function QDomNamedNodeMap() {
        

        // should be QDomNamedNodeMap_BaseJs.call(this, engine):
        //QDomNamedNodeMap.prototype = new QDomNamedNodeMap_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomNamedNodeMap.getIdStatic()))) {

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
            qWarning("QDomNamedNodeMap.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomNamedNodeMap_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomNamedNodeMap);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomNamedNodeMap_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomNamedNodeMap);
  }

  
  else {
    
        print("QDomNamedNodeMap(): wrong number / type of arguments");
      
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

      //QDomNamedNodeMap.prototype = new QDomNamedNodeMap_BaseJs(engine);
      //QDomNamedNodeMap.prototype = new QDomNamedNodeMap_Wrapper(engine);
      QDomNamedNodeMap.prototype = new Object();

      QDomNamedNodeMap.prototype.toString = function() {
          //return "QDomNamedNodeMap [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomNamedNodeMap [JS]";
        };
      QDomNamedNodeMap.getObjectType = function() {
        return RJSType_QDomNamedNodeMap.getIdStatic();
      };

      QDomNamedNodeMap.prototype.getObjectType = function() {
        return RJSType_QDomNamedNodeMap.getIdStatic();
      };

      QDomNamedNodeMap.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomNamedNodeMap.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QDomNamedNodeMap.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QDomNamedNodeMap.prototype.operator_assign");
          return this.__PROXY__.operator_assign(...args);
        };
    
        // function 
        QDomNamedNodeMap.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: QDomNamedNodeMap.prototype.operator_equal");
          return this.__PROXY__.operator_equal(...args);
        };
    
        // function 
        QDomNamedNodeMap.prototype.operator_unequal = function(...args) 
          
        {
          //print("JS: QDomNamedNodeMap.prototype.operator_unequal");
          return this.__PROXY__.operator_unequal(...args);
        };
    
        // function 
        QDomNamedNodeMap.prototype.namedItem = function(...args) 
          
        {
          //print("JS: QDomNamedNodeMap.prototype.namedItem");
          return this.__PROXY__.namedItem(...args);
        };
    
        // function 
        QDomNamedNodeMap.prototype.setNamedItem = function(...args) 
          
        {
          //print("JS: QDomNamedNodeMap.prototype.setNamedItem");
          return this.__PROXY__.setNamedItem(...args);
        };
    
        // function 
        QDomNamedNodeMap.prototype.removeNamedItem = function(...args) 
          
        {
          //print("JS: QDomNamedNodeMap.prototype.removeNamedItem");
          return this.__PROXY__.removeNamedItem(...args);
        };
    
        // function 
        QDomNamedNodeMap.prototype.item = function(...args) 
          
        {
          //print("JS: QDomNamedNodeMap.prototype.item");
          return this.__PROXY__.item(...args);
        };
    
        // function 
        QDomNamedNodeMap.prototype.namedItemNS = function(...args) 
          
        {
          //print("JS: QDomNamedNodeMap.prototype.namedItemNS");
          return this.__PROXY__.namedItemNS(...args);
        };
    
        // function 
        QDomNamedNodeMap.prototype.setNamedItemNS = function(...args) 
          
        {
          //print("JS: QDomNamedNodeMap.prototype.setNamedItemNS");
          return this.__PROXY__.setNamedItemNS(...args);
        };
    
        // function 
        QDomNamedNodeMap.prototype.removeNamedItemNS = function(...args) 
          
        {
          //print("JS: QDomNamedNodeMap.prototype.removeNamedItemNS");
          return this.__PROXY__.removeNamedItemNS(...args);
        };
    
        // function 
        QDomNamedNodeMap.prototype.length = function(...args) 
          
        {
          //print("JS: QDomNamedNodeMap.prototype.length");
          return this.__PROXY__.length(...args);
        };
    
        // function 
        QDomNamedNodeMap.prototype.count = function(...args) 
          
        {
          //print("JS: QDomNamedNodeMap.prototype.count");
          return this.__PROXY__.count(...args);
        };
    
        // function 
        QDomNamedNodeMap.prototype.size = function(...args) 
          
        {
          //print("JS: QDomNamedNodeMap.prototype.size");
          return this.__PROXY__.size(...args);
        };
    
        // function 
        QDomNamedNodeMap.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QDomNamedNodeMap.prototype.isEmpty");
          return this.__PROXY__.isEmpty(...args);
        };
    
        // function 
        QDomNamedNodeMap.prototype.contains = function(...args) 
          
        {
          //print("JS: QDomNamedNodeMap.prototype.contains");
          return this.__PROXY__.contains(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomNamedNodeMap.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomNamedNodeMap.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDomNamedNodeMap.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      