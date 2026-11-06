
      // auto generated
      //var self;

      // class constructor:
      function QXmlSimpleReader() {
        

        // should be QXmlSimpleReader_BaseJs.call(this, engine):
        //QXmlSimpleReader.prototype = new QXmlSimpleReader_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QXmlSimpleReader.getIdStatic()))) {

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
            qWarning("QXmlSimpleReader.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QXmlSimpleReader_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QXmlSimpleReader);
  }

  
  else {
    
        print("QXmlSimpleReader(): wrong number / type of arguments");
      
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

      //QXmlSimpleReader.prototype = new QXmlSimpleReader_BaseJs(engine);
      //QXmlSimpleReader.prototype = new QXmlSimpleReader_Wrapper(engine);
      QXmlSimpleReader.prototype = new Object();


      QXmlSimpleReader.prototype.toString = function() {
          //return "QXmlSimpleReader [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlSimpleReader [JS]";
        };
      QXmlSimpleReader.getObjectType = function() {
        return RJSType_QXmlSimpleReader.getIdStatic();
      };

      QXmlSimpleReader.prototype.getObjectType = function() {
        return RJSType_QXmlSimpleReader.getIdStatic();
      };

      QXmlSimpleReader.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QXmlSimpleReader.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QXmlReader.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QXmlSimpleReader.prototype.feature = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.feature");
          
              return this.__PROXY__.feature(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.setFeature = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.setFeature");
          
              return this.__PROXY__.setFeature(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.hasFeature = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.hasFeature");
          
              return this.__PROXY__.hasFeature(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.hasProperty = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.hasProperty");
          
              return this.__PROXY__.hasProperty(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.setEntityResolver = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.setEntityResolver");
          
              return this.__PROXY__.setEntityResolver(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.entityResolver = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.entityResolver");
          
              return this.__PROXY__.entityResolver(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.setDTDHandler = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.setDTDHandler");
          
              return this.__PROXY__.setDTDHandler(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.DTDHandler = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.DTDHandler");
          
              return this.__PROXY__.DTDHandler(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.setContentHandler = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.setContentHandler");
          
              return this.__PROXY__.setContentHandler(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.contentHandler = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.contentHandler");
          
              return this.__PROXY__.contentHandler(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.setErrorHandler = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.setErrorHandler");
          
              return this.__PROXY__.setErrorHandler(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.errorHandler = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.errorHandler");
          
              return this.__PROXY__.errorHandler(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.setLexicalHandler = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.setLexicalHandler");
          
              return this.__PROXY__.setLexicalHandler(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.lexicalHandler = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.lexicalHandler");
          
              return this.__PROXY__.lexicalHandler(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.setDeclHandler = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.setDeclHandler");
          
              return this.__PROXY__.setDeclHandler(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.declHandler = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.declHandler");
          
              return this.__PROXY__.declHandler(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.parse = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.parse");
          
              return this.__PROXY__.parse(...args);
            
        };
    
        // function 
        QXmlSimpleReader.prototype.parseContinue = function(...args) 
          
        {
          //print("JS: QXmlSimpleReader.prototype.parseContinue");
          
              return this.__PROXY__.parseContinue(...args);
            
        };
    

      // static functions:
      QXmlSimpleReader.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QXmlSimpleReader.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QXmlSimpleReader.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QXmlSimpleReader.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlSimpleReader.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QXmlSimpleReader.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      