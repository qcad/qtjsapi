
      // auto generated
      //var self;

      // class constructor:
      function QXmlStreamWriter() {
        

        // should be QXmlStreamWriter_BaseJs.call(this, engine):
        //QXmlStreamWriter.prototype = new QXmlStreamWriter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QXmlStreamWriter.getIdStatic()))) {

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
            qWarning("QXmlStreamWriter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QXmlStreamWriter_Wrapper(
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

      

        //copyProperties(this, wrapper, QXmlStreamWriter);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QXmlStreamWriter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QXmlStreamWriter);
  }

  
  else {
    
        print("QXmlStreamWriter(): wrong number / type of arguments");
      
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

      //QXmlStreamWriter.prototype = new QXmlStreamWriter_BaseJs(engine);
      //QXmlStreamWriter.prototype = new QXmlStreamWriter_Wrapper(engine);
      QXmlStreamWriter.prototype = new Object();


      QXmlStreamWriter.prototype.toString = function() {
          //return "QXmlStreamWriter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlStreamWriter [JS]";
        };
      QXmlStreamWriter.getObjectType = function() {
        return RJSType_QXmlStreamWriter.getIdStatic();
      };

      QXmlStreamWriter.prototype.getObjectType = function() {
        return RJSType_QXmlStreamWriter.getIdStatic();
      };

      QXmlStreamWriter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QXmlStreamWriter.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QXmlStreamWriter.prototype.setDevice = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.setDevice");
          
              return this.__PROXY__.setDevice(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.device = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.device");
          
              return this.__PROXY__.device(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.setAutoFormatting = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.setAutoFormatting");
          
              return this.__PROXY__.setAutoFormatting(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.autoFormatting = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.autoFormatting");
          
              return this.__PROXY__.autoFormatting(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.setAutoFormattingIndent = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.setAutoFormattingIndent");
          
              return this.__PROXY__.setAutoFormattingIndent(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.autoFormattingIndent = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.autoFormattingIndent");
          
              return this.__PROXY__.autoFormattingIndent(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeAttribute = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeAttribute");
          
              return this.__PROXY__.writeAttribute(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeAttributes = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeAttributes");
          
              return this.__PROXY__.writeAttributes(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeCDATA = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeCDATA");
          
              return this.__PROXY__.writeCDATA(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeCharacters = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeCharacters");
          
              return this.__PROXY__.writeCharacters(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeComment = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeComment");
          
              return this.__PROXY__.writeComment(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeDTD = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeDTD");
          
              return this.__PROXY__.writeDTD(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeEmptyElement = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeEmptyElement");
          
              return this.__PROXY__.writeEmptyElement(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeTextElement = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeTextElement");
          
              return this.__PROXY__.writeTextElement(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeEndDocument = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeEndDocument");
          
              return this.__PROXY__.writeEndDocument(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeEndElement = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeEndElement");
          
              return this.__PROXY__.writeEndElement(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeEntityReference = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeEntityReference");
          
              return this.__PROXY__.writeEntityReference(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeNamespace = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeNamespace");
          
              return this.__PROXY__.writeNamespace(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeDefaultNamespace = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeDefaultNamespace");
          
              return this.__PROXY__.writeDefaultNamespace(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeProcessingInstruction = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeProcessingInstruction");
          
              return this.__PROXY__.writeProcessingInstruction(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeStartDocument = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeStartDocument");
          
              return this.__PROXY__.writeStartDocument(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeStartElement = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeStartElement");
          
              return this.__PROXY__.writeStartElement(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.writeCurrentToken = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.writeCurrentToken");
          
              return this.__PROXY__.writeCurrentToken(...args);
            
        };
    
        // function 
        QXmlStreamWriter.prototype.hasError = function(...args) 
          
        {
          //print("JS: QXmlStreamWriter.prototype.hasError");
          
              return this.__PROXY__.hasError(...args);
            
        };
    

      // static functions:
      QXmlStreamWriter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QXmlStreamWriter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QXmlStreamWriter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QXmlStreamWriter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlStreamWriter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QXmlStreamWriter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      