
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
            arguments[2].getWrappedType()===
              
                  RJSType_QXmlStreamReader.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QXmlStreamReader);
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
          

        copyProperties(this, wrapper, QXmlStreamReader);

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
          

        copyProperties(this, wrapper, QXmlStreamReader);

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
          

        copyProperties(this, wrapper, QXmlStreamReader);

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
          

        copyProperties(this, wrapper, QXmlStreamReader);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
      

      // static functions:
      

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
    