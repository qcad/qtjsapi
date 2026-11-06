
      // auto generated
      //var self;

      // class constructor:
      function QXmlStreamReader() {
        

        // should be QXmlStreamReader_BaseJs.call(this, engine):
        //QXmlStreamReader.prototype = new QXmlStreamReader_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QXmlStreamReader.getIdStatic()))) {

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
            qWarning("QXmlStreamReader.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QXmlStreamReader_Wrapper(
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

      

        //copyProperties(this, wrapper, QXmlStreamReader);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QXmlStreamReader_Wrapper(
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

      

        //copyProperties(this, wrapper, QXmlStreamReader);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QXmlStreamReader_Wrapper(
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

      

        //copyProperties(this, wrapper, QXmlStreamReader);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QXmlStreamReader_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QXmlStreamReader);
  }

  
  else {
    
        print("QXmlStreamReader(): wrong number / type of arguments");
      
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

      //QXmlStreamReader.prototype = new QXmlStreamReader_BaseJs(engine);
      //QXmlStreamReader.prototype = new QXmlStreamReader_Wrapper(engine);
      QXmlStreamReader.prototype = new Object();


      QXmlStreamReader.prototype.toString = function() {
          //return "QXmlStreamReader [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlStreamReader [JS]";
        };
      QXmlStreamReader.getObjectType = function() {
        return RJSType_QXmlStreamReader.getIdStatic();
      };

      QXmlStreamReader.prototype.getObjectType = function() {
        return RJSType_QXmlStreamReader.getIdStatic();
      };

      QXmlStreamReader.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QXmlStreamReader.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: TokenType
QXmlStreamReader.NoToken = QXmlStreamReader_Wrapper.NoToken;
QXmlStreamReader.Invalid = QXmlStreamReader_Wrapper.Invalid;
QXmlStreamReader.StartDocument = QXmlStreamReader_Wrapper.StartDocument;
QXmlStreamReader.EndDocument = QXmlStreamReader_Wrapper.EndDocument;
QXmlStreamReader.StartElement = QXmlStreamReader_Wrapper.StartElement;
QXmlStreamReader.EndElement = QXmlStreamReader_Wrapper.EndElement;
QXmlStreamReader.Characters = QXmlStreamReader_Wrapper.Characters;
QXmlStreamReader.Comment = QXmlStreamReader_Wrapper.Comment;
QXmlStreamReader.DTD = QXmlStreamReader_Wrapper.DTD;
QXmlStreamReader.EntityReference = QXmlStreamReader_Wrapper.EntityReference;
QXmlStreamReader.ProcessingInstruction = QXmlStreamReader_Wrapper.ProcessingInstruction;

  // enum: ReadElementTextBehaviour
QXmlStreamReader.ErrorOnUnexpectedElement = QXmlStreamReader_Wrapper.ErrorOnUnexpectedElement;
QXmlStreamReader.IncludeChildElements = QXmlStreamReader_Wrapper.IncludeChildElements;
QXmlStreamReader.SkipChildElements = QXmlStreamReader_Wrapper.SkipChildElements;

  // enum: Error
QXmlStreamReader.NoError = QXmlStreamReader_Wrapper.NoError;
QXmlStreamReader.UnexpectedElementError = QXmlStreamReader_Wrapper.UnexpectedElementError;
QXmlStreamReader.CustomError = QXmlStreamReader_Wrapper.CustomError;
QXmlStreamReader.NotWellFormedError = QXmlStreamReader_Wrapper.NotWellFormedError;
QXmlStreamReader.PrematureEndOfDocumentError = QXmlStreamReader_Wrapper.PrematureEndOfDocumentError;


      // functions:
      
        // function 
        QXmlStreamReader.prototype.setDevice = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.setDevice");
          
              return this.__PROXY__.setDevice(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.device = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.device");
          
              return this.__PROXY__.device(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.addData = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.addData");
          
              return this.__PROXY__.addData(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.clear = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.atEnd = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.atEnd");
          
              return this.__PROXY__.atEnd(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.readNext = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.readNext");
          
              return this.__PROXY__.readNext(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.readNextStartElement = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.readNextStartElement");
          
              return this.__PROXY__.readNextStartElement(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.skipCurrentElement = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.skipCurrentElement");
          
              return this.__PROXY__.skipCurrentElement(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.tokenType = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.tokenType");
          
              return this.__PROXY__.tokenType(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.tokenString = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.tokenString");
          
              return this.__PROXY__.tokenString(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.setNamespaceProcessing = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.setNamespaceProcessing");
          
              return this.__PROXY__.setNamespaceProcessing(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.namespaceProcessing = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.namespaceProcessing");
          
              return this.__PROXY__.namespaceProcessing(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.isStartDocument = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.isStartDocument");
          
              return this.__PROXY__.isStartDocument(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.isEndDocument = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.isEndDocument");
          
              return this.__PROXY__.isEndDocument(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.isStartElement = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.isStartElement");
          
              return this.__PROXY__.isStartElement(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.isEndElement = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.isEndElement");
          
              return this.__PROXY__.isEndElement(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.isCharacters = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.isCharacters");
          
              return this.__PROXY__.isCharacters(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.isWhitespace = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.isWhitespace");
          
              return this.__PROXY__.isWhitespace(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.isCDATA = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.isCDATA");
          
              return this.__PROXY__.isCDATA(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.isComment = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.isComment");
          
              return this.__PROXY__.isComment(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.isDTD = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.isDTD");
          
              return this.__PROXY__.isDTD(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.isEntityReference = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.isEntityReference");
          
              return this.__PROXY__.isEntityReference(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.isProcessingInstruction = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.isProcessingInstruction");
          
              return this.__PROXY__.isProcessingInstruction(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.isStandaloneDocument = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.isStandaloneDocument");
          
              return this.__PROXY__.isStandaloneDocument(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.lineNumber = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.lineNumber");
          
              return this.__PROXY__.lineNumber(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.columnNumber = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.columnNumber");
          
              return this.__PROXY__.columnNumber(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.characterOffset = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.characterOffset");
          
              return this.__PROXY__.characterOffset(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.attributes = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.attributes");
          
              return this.__PROXY__.attributes(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.readElementText = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.readElementText");
          
              return this.__PROXY__.readElementText(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.text = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.text");
          
              return this.__PROXY__.text(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.entityExpansionLimit = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.entityExpansionLimit");
          
              return this.__PROXY__.entityExpansionLimit(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.setEntityExpansionLimit = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.setEntityExpansionLimit");
          
              return this.__PROXY__.setEntityExpansionLimit(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.raiseError = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.raiseError");
          
              return this.__PROXY__.raiseError(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.errorString = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.errorString");
          
              return this.__PROXY__.errorString(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.error = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.error");
          
              return this.__PROXY__.error(...args);
            
        };
    
        // function 
        QXmlStreamReader.prototype.hasError = function(...args) 
          
        {
          //print("JS: QXmlStreamReader.prototype.hasError");
          
              return this.__PROXY__.hasError(...args);
            
        };
    

      // static functions:
      QXmlStreamReader.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QXmlStreamReader.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QXmlStreamReader.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QXmlStreamReader.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlStreamReader.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QXmlStreamReader.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      