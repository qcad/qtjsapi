
      // auto generated
      //var self;

      // class constructor:
      function QDomElement() {
        

        // should be QDomElement_BaseJs.call(this, engine):
        //QDomElement.prototype = new QDomElement_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomElement.getIdStatic()))) {

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
            qWarning("QDomElement.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomElement_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomElement);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomElement_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomElement);
  }

  
  else {
    
        print("QDomElement(): wrong number / type of arguments");
      
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

      //QDomElement.prototype = new QDomElement_BaseJs(engine);
      //QDomElement.prototype = new QDomElement_Wrapper(engine);
      QDomElement.prototype = new Object();

      QDomElement.prototype.toString = function() {
          //return "QDomElement [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomElement [JS]";
        };
      QDomElement.getObjectType = function() {
        return RJSType_QDomElement.getIdStatic();
      };

      QDomElement.prototype.getObjectType = function() {
        return RJSType_QDomElement.getIdStatic();
      };

      QDomElement.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomElement.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QDomNode.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomElement.ElementNode = QDomElement_Wrapper.ElementNode;
QDomElement.AttributeNode = QDomElement_Wrapper.AttributeNode;
QDomElement.TextNode = QDomElement_Wrapper.TextNode;
QDomElement.CDATASectionNode = QDomElement_Wrapper.CDATASectionNode;
QDomElement.EntityReferenceNode = QDomElement_Wrapper.EntityReferenceNode;
QDomElement.EntityNode = QDomElement_Wrapper.EntityNode;
QDomElement.ProcessingInstructionNode = QDomElement_Wrapper.ProcessingInstructionNode;
QDomElement.CommentNode = QDomElement_Wrapper.CommentNode;
QDomElement.DocumentNode = QDomElement_Wrapper.DocumentNode;
QDomElement.DocumentTypeNode = QDomElement_Wrapper.DocumentTypeNode;
QDomElement.DocumentFragmentNode = QDomElement_Wrapper.DocumentFragmentNode;
QDomElement.NotationNode = QDomElement_Wrapper.NotationNode;
QDomElement.BaseNode = QDomElement_Wrapper.BaseNode;
QDomElement.CharacterDataNode = QDomElement_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomElement.EncodingFromDocument = QDomElement_Wrapper.EncodingFromDocument;
QDomElement.EncodingFromTextStream = QDomElement_Wrapper.EncodingFromTextStream;


      // functions:
      
        // function 
        QDomElement.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.operator_equal");
          return this.__PROXY__.operator_equal(...args);
        };
    
        // function 
        QDomElement.prototype.operator_unequal = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.operator_unequal");
          return this.__PROXY__.operator_unequal(...args);
        };
    
        // function 
        QDomElement.prototype.insertBefore = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.insertBefore");
          return this.__PROXY__.insertBefore(...args);
        };
    
        // function 
        QDomElement.prototype.insertAfter = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.insertAfter");
          return this.__PROXY__.insertAfter(...args);
        };
    
        // function 
        QDomElement.prototype.replaceChild = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.replaceChild");
          return this.__PROXY__.replaceChild(...args);
        };
    
        // function 
        QDomElement.prototype.removeChild = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.removeChild");
          return this.__PROXY__.removeChild(...args);
        };
    
        // function 
        QDomElement.prototype.appendChild = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.appendChild");
          return this.__PROXY__.appendChild(...args);
        };
    
        // function 
        QDomElement.prototype.hasChildNodes = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.hasChildNodes");
          return this.__PROXY__.hasChildNodes(...args);
        };
    
        // function 
        QDomElement.prototype.cloneNode = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.cloneNode");
          return this.__PROXY__.cloneNode(...args);
        };
    
        // function 
        QDomElement.prototype.normalize = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        QDomElement.prototype.isSupported = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.isSupported");
          return this.__PROXY__.isSupported(...args);
        };
    
        // function 
        QDomElement.prototype.nodeName = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.nodeName");
          return this.__PROXY__.nodeName(...args);
        };
    
        // function 
        QDomElement.prototype.parentNode = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.parentNode");
          return this.__PROXY__.parentNode(...args);
        };
    
        // function 
        QDomElement.prototype.childNodes = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.childNodes");
          return this.__PROXY__.childNodes(...args);
        };
    
        // function 
        QDomElement.prototype.firstChild = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.firstChild");
          return this.__PROXY__.firstChild(...args);
        };
    
        // function 
        QDomElement.prototype.lastChild = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.lastChild");
          return this.__PROXY__.lastChild(...args);
        };
    
        // function 
        QDomElement.prototype.previousSibling = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.previousSibling");
          return this.__PROXY__.previousSibling(...args);
        };
    
        // function 
        QDomElement.prototype.nextSibling = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.nextSibling");
          return this.__PROXY__.nextSibling(...args);
        };
    
        // function 
        QDomElement.prototype.ownerDocument = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.ownerDocument");
          return this.__PROXY__.ownerDocument(...args);
        };
    
        // function 
        QDomElement.prototype.namespaceURI = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.namespaceURI");
          return this.__PROXY__.namespaceURI(...args);
        };
    
        // function 
        QDomElement.prototype.localName = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.localName");
          return this.__PROXY__.localName(...args);
        };
    
        // function 
        QDomElement.prototype.hasAttributes = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.hasAttributes");
          return this.__PROXY__.hasAttributes(...args);
        };
    
        // function 
        QDomElement.prototype.nodeValue = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.nodeValue");
          return this.__PROXY__.nodeValue(...args);
        };
    
        // function 
        QDomElement.prototype.setNodeValue = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.setNodeValue");
          return this.__PROXY__.setNodeValue(...args);
        };
    
        // function 
        QDomElement.prototype.prefix = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.prefix");
          return this.__PROXY__.prefix(...args);
        };
    
        // function 
        QDomElement.prototype.setPrefix = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.setPrefix");
          return this.__PROXY__.setPrefix(...args);
        };
    
        // function 
        QDomElement.prototype.isAttr = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.isAttr");
          return this.__PROXY__.isAttr(...args);
        };
    
        // function 
        QDomElement.prototype.isCDATASection = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.isCDATASection");
          return this.__PROXY__.isCDATASection(...args);
        };
    
        // function 
        QDomElement.prototype.isDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.isDocumentFragment");
          return this.__PROXY__.isDocumentFragment(...args);
        };
    
        // function 
        QDomElement.prototype.isDocument = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.isDocument");
          return this.__PROXY__.isDocument(...args);
        };
    
        // function 
        QDomElement.prototype.isDocumentType = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.isDocumentType");
          return this.__PROXY__.isDocumentType(...args);
        };
    
        // function 
        QDomElement.prototype.isElement = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.isElement");
          return this.__PROXY__.isElement(...args);
        };
    
        // function 
        QDomElement.prototype.isEntityReference = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.isEntityReference");
          return this.__PROXY__.isEntityReference(...args);
        };
    
        // function 
        QDomElement.prototype.isText = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.isText");
          return this.__PROXY__.isText(...args);
        };
    
        // function 
        QDomElement.prototype.isEntity = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.isEntity");
          return this.__PROXY__.isEntity(...args);
        };
    
        // function 
        QDomElement.prototype.isNotation = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.isNotation");
          return this.__PROXY__.isNotation(...args);
        };
    
        // function 
        QDomElement.prototype.isProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.isProcessingInstruction");
          return this.__PROXY__.isProcessingInstruction(...args);
        };
    
        // function 
        QDomElement.prototype.isCharacterData = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.isCharacterData");
          return this.__PROXY__.isCharacterData(...args);
        };
    
        // function 
        QDomElement.prototype.isComment = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.isComment");
          return this.__PROXY__.isComment(...args);
        };
    
        // function 
        QDomElement.prototype.namedItem = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.namedItem");
          return this.__PROXY__.namedItem(...args);
        };
    
        // function 
        QDomElement.prototype.isNull = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QDomElement.prototype.clear = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QDomElement.prototype.toAttr = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.toAttr");
          return this.__PROXY__.toAttr(...args);
        };
    
        // function 
        QDomElement.prototype.toCDATASection = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.toCDATASection");
          return this.__PROXY__.toCDATASection(...args);
        };
    
        // function 
        QDomElement.prototype.toDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.toDocumentFragment");
          return this.__PROXY__.toDocumentFragment(...args);
        };
    
        // function 
        QDomElement.prototype.toDocument = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.toDocument");
          return this.__PROXY__.toDocument(...args);
        };
    
        // function 
        QDomElement.prototype.toDocumentType = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.toDocumentType");
          return this.__PROXY__.toDocumentType(...args);
        };
    
        // function 
        QDomElement.prototype.toElement = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.toElement");
          return this.__PROXY__.toElement(...args);
        };
    
        // function 
        QDomElement.prototype.toEntityReference = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.toEntityReference");
          return this.__PROXY__.toEntityReference(...args);
        };
    
        // function 
        QDomElement.prototype.toText = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.toText");
          return this.__PROXY__.toText(...args);
        };
    
        // function 
        QDomElement.prototype.toEntity = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.toEntity");
          return this.__PROXY__.toEntity(...args);
        };
    
        // function 
        QDomElement.prototype.toNotation = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.toNotation");
          return this.__PROXY__.toNotation(...args);
        };
    
        // function 
        QDomElement.prototype.toProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.toProcessingInstruction");
          return this.__PROXY__.toProcessingInstruction(...args);
        };
    
        // function 
        QDomElement.prototype.toCharacterData = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.toCharacterData");
          return this.__PROXY__.toCharacterData(...args);
        };
    
        // function 
        QDomElement.prototype.toComment = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.toComment");
          return this.__PROXY__.toComment(...args);
        };
    
        // function 
        QDomElement.prototype.firstChildElement = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.firstChildElement");
          return this.__PROXY__.firstChildElement(...args);
        };
    
        // function 
        QDomElement.prototype.lastChildElement = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.lastChildElement");
          return this.__PROXY__.lastChildElement(...args);
        };
    
        // function 
        QDomElement.prototype.previousSiblingElement = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.previousSiblingElement");
          return this.__PROXY__.previousSiblingElement(...args);
        };
    
        // function 
        QDomElement.prototype.nextSiblingElement = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.nextSiblingElement");
          return this.__PROXY__.nextSiblingElement(...args);
        };
    
        // function 
        QDomElement.prototype.lineNumber = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.lineNumber");
          return this.__PROXY__.lineNumber(...args);
        };
    
        // function 
        QDomElement.prototype.columnNumber = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.columnNumber");
          return this.__PROXY__.columnNumber(...args);
        };
    
        // function 
        QDomElement.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.operator_assign");
          return this.__PROXY__.operator_assign(...args);
        };
    
        // function 
        QDomElement.prototype.attribute = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.attribute");
          return this.__PROXY__.attribute(...args);
        };
    
        // function 
        QDomElement.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.setAttribute");
          return this.__PROXY__.setAttribute(...args);
        };
    
        // function 
        QDomElement.prototype.removeAttribute = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.removeAttribute");
          return this.__PROXY__.removeAttribute(...args);
        };
    
        // function 
        QDomElement.prototype.attributeNode = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.attributeNode");
          return this.__PROXY__.attributeNode(...args);
        };
    
        // function 
        QDomElement.prototype.setAttributeNode = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.setAttributeNode");
          return this.__PROXY__.setAttributeNode(...args);
        };
    
        // function 
        QDomElement.prototype.removeAttributeNode = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.removeAttributeNode");
          return this.__PROXY__.removeAttributeNode(...args);
        };
    
        // function 
        QDomElement.prototype.elementsByTagName = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.elementsByTagName");
          return this.__PROXY__.elementsByTagName(...args);
        };
    
        // function 
        QDomElement.prototype.hasAttribute = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.hasAttribute");
          return this.__PROXY__.hasAttribute(...args);
        };
    
        // function 
        QDomElement.prototype.attributeNS = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.attributeNS");
          return this.__PROXY__.attributeNS(...args);
        };
    
        // function 
        QDomElement.prototype.setAttributeNS = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.setAttributeNS");
          return this.__PROXY__.setAttributeNS(...args);
        };
    
        // function 
        QDomElement.prototype.removeAttributeNS = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.removeAttributeNS");
          return this.__PROXY__.removeAttributeNS(...args);
        };
    
        // function 
        QDomElement.prototype.attributeNodeNS = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.attributeNodeNS");
          return this.__PROXY__.attributeNodeNS(...args);
        };
    
        // function 
        QDomElement.prototype.setAttributeNodeNS = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.setAttributeNodeNS");
          return this.__PROXY__.setAttributeNodeNS(...args);
        };
    
        // function 
        QDomElement.prototype.elementsByTagNameNS = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.elementsByTagNameNS");
          return this.__PROXY__.elementsByTagNameNS(...args);
        };
    
        // function 
        QDomElement.prototype.hasAttributeNS = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.hasAttributeNS");
          return this.__PROXY__.hasAttributeNS(...args);
        };
    
        // function 
        QDomElement.prototype.tagName = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.tagName");
          return this.__PROXY__.tagName(...args);
        };
    
        // function 
        QDomElement.prototype.setTagName = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.setTagName");
          return this.__PROXY__.setTagName(...args);
        };
    
        // function 
        QDomElement.prototype.attributes = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.attributes");
          return this.__PROXY__.attributes(...args);
        };
    
        // function 
        QDomElement.prototype.nodeType = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.nodeType");
          return this.__PROXY__.nodeType(...args);
        };
    
        // function 
        QDomElement.prototype.text = function(...args) 
          
        {
          //print("JS: QDomElement.prototype.text");
          return this.__PROXY__.text(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomElement.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomElement.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDomElement.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      