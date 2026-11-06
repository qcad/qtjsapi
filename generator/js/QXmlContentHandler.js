
      // auto generated
      //var self;

      // class constructor:
      function QXmlContentHandler() {
        

        // should be QXmlContentHandler_BaseJs.call(this, engine):
        //QXmlContentHandler.prototype = new QXmlContentHandler_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QXmlContentHandler.getIdStatic()))) {

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
            qWarning("QXmlContentHandler.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QXmlContentHandler.js: No constructor found for class QXmlContentHandler");
            
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

      //QXmlContentHandler.prototype = new QXmlContentHandler_BaseJs(engine);
      //QXmlContentHandler.prototype = new QXmlContentHandler_Wrapper(engine);
      QXmlContentHandler.prototype = new Object();


      QXmlContentHandler.prototype.toString = function() {
          //return "QXmlContentHandler [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlContentHandler [JS]";
        };
      QXmlContentHandler.getObjectType = function() {
        return RJSType_QXmlContentHandler.getIdStatic();
      };

      QXmlContentHandler.prototype.getObjectType = function() {
        return RJSType_QXmlContentHandler.getIdStatic();
      };

      QXmlContentHandler.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QXmlContentHandler.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QXmlContentHandler.prototype.setDocumentLocator = function(...args) 
          
        {
          //print("JS: QXmlContentHandler.prototype.setDocumentLocator");
          
              return this.__PROXY__.setDocumentLocator(...args);
            
        };
    
        // function 
        QXmlContentHandler.prototype.startDocument = function(...args) 
          
        {
          //print("JS: QXmlContentHandler.prototype.startDocument");
          
              return this.__PROXY__.startDocument(...args);
            
        };
    
        // function 
        QXmlContentHandler.prototype.endDocument = function(...args) 
          
        {
          //print("JS: QXmlContentHandler.prototype.endDocument");
          
              return this.__PROXY__.endDocument(...args);
            
        };
    
        // function 
        QXmlContentHandler.prototype.startPrefixMapping = function(...args) 
          
        {
          //print("JS: QXmlContentHandler.prototype.startPrefixMapping");
          
              return this.__PROXY__.startPrefixMapping(...args);
            
        };
    
        // function 
        QXmlContentHandler.prototype.endPrefixMapping = function(...args) 
          
        {
          //print("JS: QXmlContentHandler.prototype.endPrefixMapping");
          
              return this.__PROXY__.endPrefixMapping(...args);
            
        };
    
        // function 
        QXmlContentHandler.prototype.startElement = function(...args) 
          
        {
          //print("JS: QXmlContentHandler.prototype.startElement");
          
              return this.__PROXY__.startElement(...args);
            
        };
    
        // function 
        QXmlContentHandler.prototype.endElement = function(...args) 
          
        {
          //print("JS: QXmlContentHandler.prototype.endElement");
          
              return this.__PROXY__.endElement(...args);
            
        };
    
        // function 
        QXmlContentHandler.prototype.characters = function(...args) 
          
        {
          //print("JS: QXmlContentHandler.prototype.characters");
          
              return this.__PROXY__.characters(...args);
            
        };
    
        // function 
        QXmlContentHandler.prototype.ignorableWhitespace = function(...args) 
          
        {
          //print("JS: QXmlContentHandler.prototype.ignorableWhitespace");
          
              return this.__PROXY__.ignorableWhitespace(...args);
            
        };
    
        // function 
        QXmlContentHandler.prototype.processingInstruction = function(...args) 
          
        {
          //print("JS: QXmlContentHandler.prototype.processingInstruction");
          
              return this.__PROXY__.processingInstruction(...args);
            
        };
    
        // function 
        QXmlContentHandler.prototype.skippedEntity = function(...args) 
          
        {
          //print("JS: QXmlContentHandler.prototype.skippedEntity");
          
              return this.__PROXY__.skippedEntity(...args);
            
        };
    
        // function 
        QXmlContentHandler.prototype.errorString = function(...args) 
          
        {
          //print("JS: QXmlContentHandler.prototype.errorString");
          
              return this.__PROXY__.errorString(...args);
            
        };
    

      // static functions:
      QXmlContentHandler.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QXmlContentHandler.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QXmlContentHandler.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QXmlContentHandler.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlContentHandler.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QXmlContentHandler.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      