
      // auto generated
      //var self;

      // class constructor:
      function QXmlReader() {
        

        // should be QXmlReader_BaseJs.call(this, engine):
        //QXmlReader.prototype = new QXmlReader_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QXmlReader.getIdStatic()))) {

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
            qWarning("QXmlReader.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QXmlReader.js: No constructor found for class QXmlReader");
            
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

      //QXmlReader.prototype = new QXmlReader_BaseJs(engine);
      //QXmlReader.prototype = new QXmlReader_Wrapper(engine);
      QXmlReader.prototype = new Object();


      QXmlReader.prototype.toString = function() {
          //return "QXmlReader [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlReader [JS]";
        };
      QXmlReader.getObjectType = function() {
        return RJSType_QXmlReader.getIdStatic();
      };

      QXmlReader.prototype.getObjectType = function() {
        return RJSType_QXmlReader.getIdStatic();
      };

      QXmlReader.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QXmlReader.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QXmlReader.prototype.feature = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.feature");
          
              return this.__PROXY__.feature(...args);
            
        };
        
        // function 
        QXmlReader.prototype.setFeature = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.setFeature");
          
              return this.__PROXY__.setFeature(...args);
            
        };
        
        // function 
        QXmlReader.prototype.hasFeature = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.hasFeature");
          
              return this.__PROXY__.hasFeature(...args);
            
        };
        
        // function 
        QXmlReader.prototype.hasProperty = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.hasProperty");
          
              return this.__PROXY__.hasProperty(...args);
            
        };
        
        // function 
        QXmlReader.prototype.setEntityResolver = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.setEntityResolver");
          
              return this.__PROXY__.setEntityResolver(...args);
            
        };
        
        // function 
        QXmlReader.prototype.entityResolver = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.entityResolver");
          
              return this.__PROXY__.entityResolver(...args);
            
        };
        
        // function 
        QXmlReader.prototype.setDTDHandler = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.setDTDHandler");
          
              return this.__PROXY__.setDTDHandler(...args);
            
        };
        
        // function 
        QXmlReader.prototype.DTDHandler = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.DTDHandler");
          
              return this.__PROXY__.DTDHandler(...args);
            
        };
        
        // function 
        QXmlReader.prototype.setContentHandler = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.setContentHandler");
          
              return this.__PROXY__.setContentHandler(...args);
            
        };
        
        // function 
        QXmlReader.prototype.contentHandler = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.contentHandler");
          
              return this.__PROXY__.contentHandler(...args);
            
        };
        
        // function 
        QXmlReader.prototype.setErrorHandler = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.setErrorHandler");
          
              return this.__PROXY__.setErrorHandler(...args);
            
        };
        
        // function 
        QXmlReader.prototype.errorHandler = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.errorHandler");
          
              return this.__PROXY__.errorHandler(...args);
            
        };
        
        // function 
        QXmlReader.prototype.setLexicalHandler = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.setLexicalHandler");
          
              return this.__PROXY__.setLexicalHandler(...args);
            
        };
        
        // function 
        QXmlReader.prototype.lexicalHandler = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.lexicalHandler");
          
              return this.__PROXY__.lexicalHandler(...args);
            
        };
        
        // function 
        QXmlReader.prototype.setDeclHandler = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.setDeclHandler");
          
              return this.__PROXY__.setDeclHandler(...args);
            
        };
        
        // function 
        QXmlReader.prototype.declHandler = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.declHandler");
          
              return this.__PROXY__.declHandler(...args);
            
        };
        
        // function 
        QXmlReader.prototype.parse = function(...args) 
          
        {
          //print("JS: QXmlReader.prototype.parse");
          
              return this.__PROXY__.parse(...args);
            
        };
        

      // static functions:
      QXmlReader.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QXmlReader.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QXmlReader.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QXmlReader.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlReader.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QXmlReader.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      