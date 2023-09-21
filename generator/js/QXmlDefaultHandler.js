
      // auto generated
      //var self;

      // class constructor:
      function QXmlDefaultHandler() {
        

        // should be QXmlDefaultHandler_BaseJs.call(this, engine):
        //QXmlDefaultHandler.prototype = new QXmlDefaultHandler_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QXmlDefaultHandler_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QXmlDefaultHandler);
            //}
          }
          else {
            qWarning("QXmlDefaultHandler.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QXmlDefaultHandler_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QXmlDefaultHandler);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler(): wrong number / type of arguments");
      
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

      //QXmlDefaultHandler.prototype = new QXmlDefaultHandler_BaseJs(engine);
      //QXmlDefaultHandler.prototype = new QXmlDefaultHandler_Wrapper(engine);
      QXmlDefaultHandler.prototype = new Object();

      QXmlDefaultHandler.prototype.toString = function() {
          //return "QXmlDefaultHandler [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlDefaultHandler [JS]";
        };
      QXmlDefaultHandler.getObjectType = function() {
        
            return RJSType.QXmlDefaultHandler_Type;
          
      };

      QXmlDefaultHandler.prototype.getObjectType = function() {
        
            return RJSType.QXmlDefaultHandler_Type;
          
      };

      QXmlDefaultHandler.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QXmlDefaultHandler_Type:
              return true;
          
        case RJSType.QXmlContentHandler_Type:
          return true;
        
        case RJSType.QXmlErrorHandler_Type:
          return true;
        
        case RJSType.QXmlDTDHandler_Type:
          return true;
        
        case RJSType.QXmlEntityResolver_Type:
          return true;
        
        case RJSType.QXmlLexicalHandler_Type:
          return true;
        
        case RJSType.QXmlDeclHandler_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QXmlDefaultHandler_Type, 
          
            RJSType.QXmlContentHandler_Type
            ,
            RJSType.QXmlErrorHandler_Type
            ,
            RJSType.QXmlDTDHandler_Type
            ,
            RJSType.QXmlEntityResolver_Type
            ,
            RJSType.QXmlLexicalHandler_Type
            ,
            RJSType.QXmlDeclHandler_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      
        // function 
        QXmlDefaultHandler.prototype.setDocumentLocator = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.setDocumentLocator");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.setDocumentLocator(
                // call highest level JS implementation:
                //return this.setDocumentLocatorBase(
                return this.setDocumentLocatorSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.setDocumentLocator(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.startDocument = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.startDocument");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.startDocument(
                // call highest level JS implementation:
                //return this.startDocumentBase(
                return this.startDocumentSuper(
                  
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.startDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.endDocument = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.endDocument");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endDocument(
                // call highest level JS implementation:
                //return this.endDocumentBase(
                return this.endDocumentSuper(
                  
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.endDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.startPrefixMapping = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.startPrefixMapping");
          
      if (arguments.length == 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.startPrefixMapping(
                // call highest level JS implementation:
                //return this.startPrefixMappingBase(
                return this.startPrefixMappingSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.startPrefixMapping(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.endPrefixMapping = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.endPrefixMapping");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endPrefixMapping(
                // call highest level JS implementation:
                //return this.endPrefixMappingBase(
                return this.endPrefixMappingSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.endPrefixMapping(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.startElement = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.startElement");
          
      if (arguments.length == 4) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.startElement(
                // call highest level JS implementation:
                //return this.startElementBase(
                return this.startElementSuper(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.startElement(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.endElement = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.endElement");
          
      if (arguments.length == 3) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endElement(
                // call highest level JS implementation:
                //return this.endElementBase(
                return this.endElementSuper(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.endElement(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.characters = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.characters");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.characters(
                // call highest level JS implementation:
                //return this.charactersBase(
                return this.charactersSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.characters(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.ignorableWhitespace = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.ignorableWhitespace");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.ignorableWhitespace(
                // call highest level JS implementation:
                //return this.ignorableWhitespaceBase(
                return this.ignorableWhitespaceSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.ignorableWhitespace(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.processingInstruction = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.processingInstruction");
          
      if (arguments.length == 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.processingInstruction(
                // call highest level JS implementation:
                //return this.processingInstructionBase(
                return this.processingInstructionSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.processingInstruction(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.skippedEntity = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.skippedEntity");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.skippedEntity(
                // call highest level JS implementation:
                //return this.skippedEntityBase(
                return this.skippedEntitySuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.skippedEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.notationDecl = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.notationDecl");
          
      if (arguments.length == 3) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.notationDecl(
                // call highest level JS implementation:
                //return this.notationDeclBase(
                return this.notationDeclSuper(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.notationDecl(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.unparsedEntityDecl = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.unparsedEntityDecl");
          
      if (arguments.length == 4) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.unparsedEntityDecl(
                // call highest level JS implementation:
                //return this.unparsedEntityDeclBase(
                return this.unparsedEntityDeclSuper(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.unparsedEntityDecl(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.startDTD = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.startDTD");
          
      if (arguments.length == 3) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.startDTD(
                // call highest level JS implementation:
                //return this.startDTDBase(
                return this.startDTDSuper(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.startDTD(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.endDTD = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.endDTD");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endDTD(
                // call highest level JS implementation:
                //return this.endDTDBase(
                return this.endDTDSuper(
                  
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.endDTD(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.startEntity = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.startEntity");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.startEntity(
                // call highest level JS implementation:
                //return this.startEntityBase(
                return this.startEntitySuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.startEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.endEntity = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.endEntity");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endEntity(
                // call highest level JS implementation:
                //return this.endEntityBase(
                return this.endEntitySuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.endEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.startCDATA = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.startCDATA");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.startCDATA(
                // call highest level JS implementation:
                //return this.startCDATABase(
                return this.startCDATASuper(
                  
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.startCDATA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.endCDATA = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.endCDATA");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endCDATA(
                // call highest level JS implementation:
                //return this.endCDATABase(
                return this.endCDATASuper(
                  
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.endCDATA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.comment = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.comment");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.comment(
                // call highest level JS implementation:
                //return this.commentBase(
                return this.commentSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.comment(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.attributeDecl = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.attributeDecl");
          
      if (arguments.length == 5) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.attributeDecl(
                // call highest level JS implementation:
                //return this.attributeDeclBase(
                return this.attributeDeclSuper(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.attributeDecl(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.internalEntityDecl = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.internalEntityDecl");
          
      if (arguments.length == 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.internalEntityDecl(
                // call highest level JS implementation:
                //return this.internalEntityDeclBase(
                return this.internalEntityDeclSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.internalEntityDecl(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.externalEntityDecl = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.externalEntityDecl");
          
      if (arguments.length == 3) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.externalEntityDecl(
                // call highest level JS implementation:
                //return this.externalEntityDeclBase(
                return this.externalEntityDeclSuper(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.externalEntityDecl(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QXmlDefaultHandler.prototype.errorString = function() 
          
        {
          //print("JS: QXmlDefaultHandler.prototype.errorString");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.errorString(
                // call highest level JS implementation:
                //return this.errorStringBase(
                return this.errorStringSuper(
                  
                );
              

        //copyProperties(this, wrapper, QXmlDefaultHandler);
  }

  
  else {
    
        print("QXmlDefaultHandler.errorString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QXmlDefaultHandler.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlDefaultHandler.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    