
      // auto generated
      //var self;

      // class constructor:
      function QDomDocument() {
        

        // should be QDomDocument_BaseJs.call(this, engine):
        //QDomDocument.prototype = new QDomDocument_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomDocument.getIdStatic()))) {

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
            qWarning("QDomDocument.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomDocument_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomDocument);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomDocument_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomDocument);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomDocument_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomDocument);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomDocument_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomDocument);
  }

  
  else {
    
        print("QDomDocument(): wrong number / type of arguments");
      
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

      //QDomDocument.prototype = new QDomDocument_BaseJs(engine);
      //QDomDocument.prototype = new QDomDocument_Wrapper(engine);
      QDomDocument.prototype = new Object();

      
        // function with alias name in CPP wrapper:
        QDomDocument.prototype.toString = function() {
          
              return this.__PROXY__.toStr.apply(this, arguments);
            
        }
      QDomDocument.getObjectType = function() {
        return RJSType_QDomDocument.getIdStatic();
      };

      QDomDocument.prototype.getObjectType = function() {
        return RJSType_QDomDocument.getIdStatic();
      };

      QDomDocument.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomDocument.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QDomNode.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomDocument.ElementNode = QDomDocument_Wrapper.ElementNode;
QDomDocument.AttributeNode = QDomDocument_Wrapper.AttributeNode;
QDomDocument.TextNode = QDomDocument_Wrapper.TextNode;
QDomDocument.CDATASectionNode = QDomDocument_Wrapper.CDATASectionNode;
QDomDocument.EntityReferenceNode = QDomDocument_Wrapper.EntityReferenceNode;
QDomDocument.EntityNode = QDomDocument_Wrapper.EntityNode;
QDomDocument.ProcessingInstructionNode = QDomDocument_Wrapper.ProcessingInstructionNode;
QDomDocument.CommentNode = QDomDocument_Wrapper.CommentNode;
QDomDocument.DocumentNode = QDomDocument_Wrapper.DocumentNode;
QDomDocument.DocumentTypeNode = QDomDocument_Wrapper.DocumentTypeNode;
QDomDocument.DocumentFragmentNode = QDomDocument_Wrapper.DocumentFragmentNode;
QDomDocument.NotationNode = QDomDocument_Wrapper.NotationNode;
QDomDocument.BaseNode = QDomDocument_Wrapper.BaseNode;
QDomDocument.CharacterDataNode = QDomDocument_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomDocument.EncodingFromDocument = QDomDocument_Wrapper.EncodingFromDocument;
QDomDocument.EncodingFromTextStream = QDomDocument_Wrapper.EncodingFromTextStream;


      // functions:
      
        // function 
        QDomDocument.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.operator_equal");
          return this.__PROXY__.operator_equal(...args);
        };
    
        // function 
        QDomDocument.prototype.operator_unequal = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.operator_unequal");
          return this.__PROXY__.operator_unequal(...args);
        };
    
        // function 
        QDomDocument.prototype.insertBefore = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.insertBefore");
          return this.__PROXY__.insertBefore(...args);
        };
    
        // function 
        QDomDocument.prototype.insertAfter = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.insertAfter");
          return this.__PROXY__.insertAfter(...args);
        };
    
        // function 
        QDomDocument.prototype.replaceChild = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.replaceChild");
          return this.__PROXY__.replaceChild(...args);
        };
    
        // function 
        QDomDocument.prototype.removeChild = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.removeChild");
          return this.__PROXY__.removeChild(...args);
        };
    
        // function 
        QDomDocument.prototype.appendChild = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.appendChild");
          return this.__PROXY__.appendChild(...args);
        };
    
        // function 
        QDomDocument.prototype.hasChildNodes = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.hasChildNodes");
          return this.__PROXY__.hasChildNodes(...args);
        };
    
        // function 
        QDomDocument.prototype.cloneNode = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.cloneNode");
          return this.__PROXY__.cloneNode(...args);
        };
    
        // function 
        QDomDocument.prototype.normalize = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        QDomDocument.prototype.isSupported = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.isSupported");
          return this.__PROXY__.isSupported(...args);
        };
    
        // function 
        QDomDocument.prototype.nodeName = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.nodeName");
          return this.__PROXY__.nodeName(...args);
        };
    
        // function 
        QDomDocument.prototype.parentNode = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.parentNode");
          return this.__PROXY__.parentNode(...args);
        };
    
        // function 
        QDomDocument.prototype.childNodes = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.childNodes");
          return this.__PROXY__.childNodes(...args);
        };
    
        // function 
        QDomDocument.prototype.firstChild = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.firstChild");
          return this.__PROXY__.firstChild(...args);
        };
    
        // function 
        QDomDocument.prototype.lastChild = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.lastChild");
          return this.__PROXY__.lastChild(...args);
        };
    
        // function 
        QDomDocument.prototype.previousSibling = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.previousSibling");
          return this.__PROXY__.previousSibling(...args);
        };
    
        // function 
        QDomDocument.prototype.nextSibling = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.nextSibling");
          return this.__PROXY__.nextSibling(...args);
        };
    
        // function 
        QDomDocument.prototype.attributes = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.attributes");
          return this.__PROXY__.attributes(...args);
        };
    
        // function 
        QDomDocument.prototype.ownerDocument = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.ownerDocument");
          return this.__PROXY__.ownerDocument(...args);
        };
    
        // function 
        QDomDocument.prototype.namespaceURI = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.namespaceURI");
          return this.__PROXY__.namespaceURI(...args);
        };
    
        // function 
        QDomDocument.prototype.localName = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.localName");
          return this.__PROXY__.localName(...args);
        };
    
        // function 
        QDomDocument.prototype.hasAttributes = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.hasAttributes");
          return this.__PROXY__.hasAttributes(...args);
        };
    
        // function 
        QDomDocument.prototype.nodeValue = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.nodeValue");
          return this.__PROXY__.nodeValue(...args);
        };
    
        // function 
        QDomDocument.prototype.setNodeValue = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.setNodeValue");
          return this.__PROXY__.setNodeValue(...args);
        };
    
        // function 
        QDomDocument.prototype.prefix = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.prefix");
          return this.__PROXY__.prefix(...args);
        };
    
        // function 
        QDomDocument.prototype.setPrefix = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.setPrefix");
          return this.__PROXY__.setPrefix(...args);
        };
    
        // function 
        QDomDocument.prototype.isAttr = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.isAttr");
          return this.__PROXY__.isAttr(...args);
        };
    
        // function 
        QDomDocument.prototype.isCDATASection = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.isCDATASection");
          return this.__PROXY__.isCDATASection(...args);
        };
    
        // function 
        QDomDocument.prototype.isDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.isDocumentFragment");
          return this.__PROXY__.isDocumentFragment(...args);
        };
    
        // function 
        QDomDocument.prototype.isDocument = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.isDocument");
          return this.__PROXY__.isDocument(...args);
        };
    
        // function 
        QDomDocument.prototype.isDocumentType = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.isDocumentType");
          return this.__PROXY__.isDocumentType(...args);
        };
    
        // function 
        QDomDocument.prototype.isElement = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.isElement");
          return this.__PROXY__.isElement(...args);
        };
    
        // function 
        QDomDocument.prototype.isEntityReference = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.isEntityReference");
          return this.__PROXY__.isEntityReference(...args);
        };
    
        // function 
        QDomDocument.prototype.isText = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.isText");
          return this.__PROXY__.isText(...args);
        };
    
        // function 
        QDomDocument.prototype.isEntity = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.isEntity");
          return this.__PROXY__.isEntity(...args);
        };
    
        // function 
        QDomDocument.prototype.isNotation = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.isNotation");
          return this.__PROXY__.isNotation(...args);
        };
    
        // function 
        QDomDocument.prototype.isProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.isProcessingInstruction");
          return this.__PROXY__.isProcessingInstruction(...args);
        };
    
        // function 
        QDomDocument.prototype.isCharacterData = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.isCharacterData");
          return this.__PROXY__.isCharacterData(...args);
        };
    
        // function 
        QDomDocument.prototype.isComment = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.isComment");
          return this.__PROXY__.isComment(...args);
        };
    
        // function 
        QDomDocument.prototype.namedItem = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.namedItem");
          return this.__PROXY__.namedItem(...args);
        };
    
        // function 
        QDomDocument.prototype.isNull = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QDomDocument.prototype.clear = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QDomDocument.prototype.toAttr = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.toAttr");
          return this.__PROXY__.toAttr(...args);
        };
    
        // function 
        QDomDocument.prototype.toCDATASection = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.toCDATASection");
          return this.__PROXY__.toCDATASection(...args);
        };
    
        // function 
        QDomDocument.prototype.toDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.toDocumentFragment");
          return this.__PROXY__.toDocumentFragment(...args);
        };
    
        // function 
        QDomDocument.prototype.toDocument = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.toDocument");
          return this.__PROXY__.toDocument(...args);
        };
    
        // function 
        QDomDocument.prototype.toDocumentType = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.toDocumentType");
          return this.__PROXY__.toDocumentType(...args);
        };
    
        // function 
        QDomDocument.prototype.toElement = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.toElement");
          return this.__PROXY__.toElement(...args);
        };
    
        // function 
        QDomDocument.prototype.toEntityReference = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.toEntityReference");
          return this.__PROXY__.toEntityReference(...args);
        };
    
        // function 
        QDomDocument.prototype.toText = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.toText");
          return this.__PROXY__.toText(...args);
        };
    
        // function 
        QDomDocument.prototype.toEntity = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.toEntity");
          return this.__PROXY__.toEntity(...args);
        };
    
        // function 
        QDomDocument.prototype.toNotation = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.toNotation");
          return this.__PROXY__.toNotation(...args);
        };
    
        // function 
        QDomDocument.prototype.toProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.toProcessingInstruction");
          return this.__PROXY__.toProcessingInstruction(...args);
        };
    
        // function 
        QDomDocument.prototype.toCharacterData = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.toCharacterData");
          return this.__PROXY__.toCharacterData(...args);
        };
    
        // function 
        QDomDocument.prototype.toComment = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.toComment");
          return this.__PROXY__.toComment(...args);
        };
    
        // function 
        QDomDocument.prototype.firstChildElement = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.firstChildElement");
          return this.__PROXY__.firstChildElement(...args);
        };
    
        // function 
        QDomDocument.prototype.lastChildElement = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.lastChildElement");
          return this.__PROXY__.lastChildElement(...args);
        };
    
        // function 
        QDomDocument.prototype.previousSiblingElement = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.previousSiblingElement");
          return this.__PROXY__.previousSiblingElement(...args);
        };
    
        // function 
        QDomDocument.prototype.nextSiblingElement = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.nextSiblingElement");
          return this.__PROXY__.nextSiblingElement(...args);
        };
    
        // function 
        QDomDocument.prototype.lineNumber = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.lineNumber");
          return this.__PROXY__.lineNumber(...args);
        };
    
        // function 
        QDomDocument.prototype.columnNumber = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.columnNumber");
          return this.__PROXY__.columnNumber(...args);
        };
    
        // function 
        QDomDocument.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.operator_assign");
          return this.__PROXY__.operator_assign(...args);
        };
    
        // function 
        QDomDocument.prototype.createElement = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.createElement");
          return this.__PROXY__.createElement(...args);
        };
    
        // function 
        QDomDocument.prototype.createDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.createDocumentFragment");
          return this.__PROXY__.createDocumentFragment(...args);
        };
    
        // function 
        QDomDocument.prototype.createTextNode = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.createTextNode");
          return this.__PROXY__.createTextNode(...args);
        };
    
        // function 
        QDomDocument.prototype.createComment = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.createComment");
          return this.__PROXY__.createComment(...args);
        };
    
        // function 
        QDomDocument.prototype.createCDATASection = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.createCDATASection");
          return this.__PROXY__.createCDATASection(...args);
        };
    
        // function 
        QDomDocument.prototype.createProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.createProcessingInstruction");
          return this.__PROXY__.createProcessingInstruction(...args);
        };
    
        // function 
        QDomDocument.prototype.createAttribute = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.createAttribute");
          return this.__PROXY__.createAttribute(...args);
        };
    
        // function 
        QDomDocument.prototype.createEntityReference = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.createEntityReference");
          return this.__PROXY__.createEntityReference(...args);
        };
    
        // function 
        QDomDocument.prototype.elementsByTagName = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.elementsByTagName");
          return this.__PROXY__.elementsByTagName(...args);
        };
    
        // function 
        QDomDocument.prototype.importNode = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.importNode");
          return this.__PROXY__.importNode(...args);
        };
    
        // function 
        QDomDocument.prototype.createElementNS = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.createElementNS");
          return this.__PROXY__.createElementNS(...args);
        };
    
        // function 
        QDomDocument.prototype.createAttributeNS = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.createAttributeNS");
          return this.__PROXY__.createAttributeNS(...args);
        };
    
        // function 
        QDomDocument.prototype.elementsByTagNameNS = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.elementsByTagNameNS");
          return this.__PROXY__.elementsByTagNameNS(...args);
        };
    
        // function 
        QDomDocument.prototype.elementById = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.elementById");
          return this.__PROXY__.elementById(...args);
        };
    
        // function 
        QDomDocument.prototype.doctype = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.doctype");
          return this.__PROXY__.doctype(...args);
        };
    
        // function 
        QDomDocument.prototype.implementation = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.implementation");
          return this.__PROXY__.implementation(...args);
        };
    
        // function 
        QDomDocument.prototype.documentElement = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.documentElement");
          return this.__PROXY__.documentElement(...args);
        };
    
        // function 
        QDomDocument.prototype.nodeType = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.nodeType");
          return this.__PROXY__.nodeType(...args);
        };
    
        // function 
        QDomDocument.prototype.setContent = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.setContent");
          return this.__PROXY__.setContent(...args);
        };
    
        // function 
        QDomDocument.prototype.toByteArray = function(...args) 
          
        {
          //print("JS: QDomDocument.prototype.toByteArray");
          return this.__PROXY__.toByteArray(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomDocument.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomDocument.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDomDocument.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      