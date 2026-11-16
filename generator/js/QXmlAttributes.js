
      // auto generated
      //var self;

      // class constructor:
      function QXmlAttributes() {
        

        // should be QXmlAttributes_BaseJs.call(this, engine):
        //QXmlAttributes.prototype = new QXmlAttributes_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QXmlAttributes.getIdStatic()))) {

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
            qWarning("QXmlAttributes.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QXmlAttributes_Wrapper(
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

      

        //copyProperties(this, wrapper, QXmlAttributes);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QXmlAttributes_Wrapper(
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

      

        //copyProperties(this, wrapper, QXmlAttributes);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QXmlAttributes_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QXmlAttributes);
  }

  
  else {
    
        print("QXmlAttributes(): wrong number / type of arguments");
      
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

      //QXmlAttributes.prototype = new QXmlAttributes_BaseJs(engine);
      //QXmlAttributes.prototype = new QXmlAttributes_Wrapper(engine);
      QXmlAttributes.prototype = new Object();


      QXmlAttributes.prototype.toString = function() {
          //return "QXmlAttributes [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlAttributes [JS]";
        };
      QXmlAttributes.getObjectType = function() {
        return RJSType_QXmlAttributes.getIdStatic();
      };

      QXmlAttributes.prototype.getObjectType = function() {
        return RJSType_QXmlAttributes.getIdStatic();
      };

      QXmlAttributes.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QXmlAttributes.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QXmlAttributes.prototype.swap = function(...args) 
          
        {
          //print("JS: QXmlAttributes.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
        
        // function 
        QXmlAttributes.prototype.index = function(...args) 
          
        {
          //print("JS: QXmlAttributes.prototype.index");
          
              return this.__PROXY__.index(...args);
            
        };
        
        // function 
        QXmlAttributes.prototype.length = function(...args) 
          
        {
          //print("JS: QXmlAttributes.prototype.length");
          
              return this.__PROXY__.length(...args);
            
        };
        
        // function 
        QXmlAttributes.prototype.count = function(...args) 
          
        {
          //print("JS: QXmlAttributes.prototype.count");
          
              return this.__PROXY__.count(...args);
            
        };
        
        // function 
        QXmlAttributes.prototype.localName = function(...args) 
          
        {
          //print("JS: QXmlAttributes.prototype.localName");
          
              return this.__PROXY__.localName(...args);
            
        };
        
        // function 
        QXmlAttributes.prototype.qName = function(...args) 
          
        {
          //print("JS: QXmlAttributes.prototype.qName");
          
              return this.__PROXY__.qName(...args);
            
        };
        
        // function 
        QXmlAttributes.prototype.uri = function(...args) 
          
        {
          //print("JS: QXmlAttributes.prototype.uri");
          
              return this.__PROXY__.uri(...args);
            
        };
        
        // function 
        QXmlAttributes.prototype.type = function(...args) 
          
        {
          //print("JS: QXmlAttributes.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
        
        // function 
        QXmlAttributes.prototype.value = function(...args) 
          
        {
          //print("JS: QXmlAttributes.prototype.value");
          
              return this.__PROXY__.value(...args);
            
        };
        
        // function 
        QXmlAttributes.prototype.clear = function(...args) 
          
        {
          //print("JS: QXmlAttributes.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        QXmlAttributes.prototype.append = function(...args) 
          
        {
          //print("JS: QXmlAttributes.prototype.append");
          
              return this.__PROXY__.append(...args);
            
        };
        

      // static functions:
      QXmlAttributes.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QXmlAttributes.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QXmlAttributes.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QXmlAttributes.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlAttributes.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QXmlAttributes.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      