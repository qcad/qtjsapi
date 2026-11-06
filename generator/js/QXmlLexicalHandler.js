
      // auto generated
      //var self;

      // class constructor:
      function QXmlLexicalHandler() {
        

        // should be QXmlLexicalHandler_BaseJs.call(this, engine):
        //QXmlLexicalHandler.prototype = new QXmlLexicalHandler_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QXmlLexicalHandler.getIdStatic()))) {

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
            qWarning("QXmlLexicalHandler.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QXmlLexicalHandler.js: No constructor found for class QXmlLexicalHandler");
            
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

      //QXmlLexicalHandler.prototype = new QXmlLexicalHandler_BaseJs(engine);
      //QXmlLexicalHandler.prototype = new QXmlLexicalHandler_Wrapper(engine);
      QXmlLexicalHandler.prototype = new Object();


      QXmlLexicalHandler.prototype.toString = function() {
          //return "QXmlLexicalHandler [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlLexicalHandler [JS]";
        };
      QXmlLexicalHandler.getObjectType = function() {
        return RJSType_QXmlLexicalHandler.getIdStatic();
      };

      QXmlLexicalHandler.prototype.getObjectType = function() {
        return RJSType_QXmlLexicalHandler.getIdStatic();
      };

      QXmlLexicalHandler.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QXmlLexicalHandler.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QXmlLexicalHandler.prototype.startDTD = function(...args) 
          
        {
          //print("JS: QXmlLexicalHandler.prototype.startDTD");
          
              return this.__PROXY__.startDTD(...args);
            
        };
    
        // function 
        QXmlLexicalHandler.prototype.endDTD = function(...args) 
          
        {
          //print("JS: QXmlLexicalHandler.prototype.endDTD");
          
              return this.__PROXY__.endDTD(...args);
            
        };
    
        // function 
        QXmlLexicalHandler.prototype.startEntity = function(...args) 
          
        {
          //print("JS: QXmlLexicalHandler.prototype.startEntity");
          
              return this.__PROXY__.startEntity(...args);
            
        };
    
        // function 
        QXmlLexicalHandler.prototype.endEntity = function(...args) 
          
        {
          //print("JS: QXmlLexicalHandler.prototype.endEntity");
          
              return this.__PROXY__.endEntity(...args);
            
        };
    
        // function 
        QXmlLexicalHandler.prototype.startCDATA = function(...args) 
          
        {
          //print("JS: QXmlLexicalHandler.prototype.startCDATA");
          
              return this.__PROXY__.startCDATA(...args);
            
        };
    
        // function 
        QXmlLexicalHandler.prototype.endCDATA = function(...args) 
          
        {
          //print("JS: QXmlLexicalHandler.prototype.endCDATA");
          
              return this.__PROXY__.endCDATA(...args);
            
        };
    
        // function 
        QXmlLexicalHandler.prototype.comment = function(...args) 
          
        {
          //print("JS: QXmlLexicalHandler.prototype.comment");
          
              return this.__PROXY__.comment(...args);
            
        };
    
        // function 
        QXmlLexicalHandler.prototype.errorString = function(...args) 
          
        {
          //print("JS: QXmlLexicalHandler.prototype.errorString");
          
              return this.__PROXY__.errorString(...args);
            
        };
    

      // static functions:
      QXmlLexicalHandler.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QXmlLexicalHandler.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QXmlLexicalHandler.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QXmlLexicalHandler.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlLexicalHandler.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QXmlLexicalHandler.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      