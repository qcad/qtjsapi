
      // auto generated
      //var self;

      // class constructor:
      function QDomNodeList() {
        

        // should be QDomNodeList_BaseJs.call(this, engine):
        //QDomNodeList.prototype = new QDomNodeList_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomNodeList.getIdStatic()))) {

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
            qWarning("QDomNodeList.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomNodeList_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomNodeList);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomNodeList_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomNodeList);
  }

  
  else {
    
        print("QDomNodeList(): wrong number / type of arguments");
      
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

      //QDomNodeList.prototype = new QDomNodeList_BaseJs(engine);
      //QDomNodeList.prototype = new QDomNodeList_Wrapper(engine);
      QDomNodeList.prototype = new Object();

      QDomNodeList.prototype.toString = function() {
          //return "QDomNodeList [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomNodeList [JS]";
        };
      QDomNodeList.getObjectType = function() {
        return RJSType_QDomNodeList.getIdStatic();
      };

      QDomNodeList.prototype.getObjectType = function() {
        return RJSType_QDomNodeList.getIdStatic();
      };

      QDomNodeList.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomNodeList.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QDomNodeList.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QDomNodeList.prototype.operator_assign");
          return this.__PROXY__.operator_assign(...args);
        };
    
        // function 
        QDomNodeList.prototype.item = function(...args) 
          
        {
          //print("JS: QDomNodeList.prototype.item");
          return this.__PROXY__.item(...args);
        };
    
        // function 
        QDomNodeList.prototype.at = function(...args) 
          
        {
          //print("JS: QDomNodeList.prototype.at");
          return this.__PROXY__.at(...args);
        };
    
        // function 
        QDomNodeList.prototype.length = function(...args) 
          
        {
          //print("JS: QDomNodeList.prototype.length");
          return this.__PROXY__.length(...args);
        };
    
        // function 
        QDomNodeList.prototype.count = function(...args) 
          
        {
          //print("JS: QDomNodeList.prototype.count");
          return this.__PROXY__.count(...args);
        };
    
        // function 
        QDomNodeList.prototype.size = function(...args) 
          
        {
          //print("JS: QDomNodeList.prototype.size");
          return this.__PROXY__.size(...args);
        };
    
        // function 
        QDomNodeList.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QDomNodeList.prototype.isEmpty");
          return this.__PROXY__.isEmpty(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomNodeList.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomNodeList.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDomNodeList.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      