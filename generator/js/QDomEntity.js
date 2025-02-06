
      // auto generated
      //var self;

      // class constructor:
      function QDomEntity() {
        

        // should be QDomEntity_BaseJs.call(this, engine):
        //QDomEntity.prototype = new QDomEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomEntity.getIdStatic()))) {

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
            qWarning("QDomEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomEntity);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomEntity_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomEntity);
  }

  
  else {
    
        print("QDomEntity(): wrong number / type of arguments");
      
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

      //QDomEntity.prototype = new QDomEntity_BaseJs(engine);
      //QDomEntity.prototype = new QDomEntity_Wrapper(engine);
      QDomEntity.prototype = new Object();

      QDomEntity.prototype.toString = function() {
          //return "QDomEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomEntity [JS]";
        };
      QDomEntity.getObjectType = function() {
        return RJSType_QDomEntity.getIdStatic();
      };

      QDomEntity.prototype.getObjectType = function() {
        return RJSType_QDomEntity.getIdStatic();
      };

      QDomEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomEntity.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QDomNode.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomEntity.ElementNode = QDomEntity_Wrapper.ElementNode;
QDomEntity.AttributeNode = QDomEntity_Wrapper.AttributeNode;
QDomEntity.TextNode = QDomEntity_Wrapper.TextNode;
QDomEntity.CDATASectionNode = QDomEntity_Wrapper.CDATASectionNode;
QDomEntity.EntityReferenceNode = QDomEntity_Wrapper.EntityReferenceNode;
QDomEntity.EntityNode = QDomEntity_Wrapper.EntityNode;
QDomEntity.ProcessingInstructionNode = QDomEntity_Wrapper.ProcessingInstructionNode;
QDomEntity.CommentNode = QDomEntity_Wrapper.CommentNode;
QDomEntity.DocumentNode = QDomEntity_Wrapper.DocumentNode;
QDomEntity.DocumentTypeNode = QDomEntity_Wrapper.DocumentTypeNode;
QDomEntity.DocumentFragmentNode = QDomEntity_Wrapper.DocumentFragmentNode;
QDomEntity.NotationNode = QDomEntity_Wrapper.NotationNode;
QDomEntity.BaseNode = QDomEntity_Wrapper.BaseNode;
QDomEntity.CharacterDataNode = QDomEntity_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomEntity.EncodingFromDocument = QDomEntity_Wrapper.EncodingFromDocument;
QDomEntity.EncodingFromTextStream = QDomEntity_Wrapper.EncodingFromTextStream;


      // functions:
      
        // function 
        QDomEntity.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.operator_equal");
          return this.__PROXY__.operator_equal(...args);
        };
    
        // function 
        QDomEntity.prototype.operator_unequal = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.operator_unequal");
          return this.__PROXY__.operator_unequal(...args);
        };
    
        // function 
        QDomEntity.prototype.insertBefore = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.insertBefore");
          return this.__PROXY__.insertBefore(...args);
        };
    
        // function 
        QDomEntity.prototype.insertAfter = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.insertAfter");
          return this.__PROXY__.insertAfter(...args);
        };
    
        // function 
        QDomEntity.prototype.replaceChild = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.replaceChild");
          return this.__PROXY__.replaceChild(...args);
        };
    
        // function 
        QDomEntity.prototype.removeChild = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.removeChild");
          return this.__PROXY__.removeChild(...args);
        };
    
        // function 
        QDomEntity.prototype.appendChild = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.appendChild");
          return this.__PROXY__.appendChild(...args);
        };
    
        // function 
        QDomEntity.prototype.hasChildNodes = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.hasChildNodes");
          return this.__PROXY__.hasChildNodes(...args);
        };
    
        // function 
        QDomEntity.prototype.cloneNode = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.cloneNode");
          return this.__PROXY__.cloneNode(...args);
        };
    
        // function 
        QDomEntity.prototype.normalize = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        QDomEntity.prototype.isSupported = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.isSupported");
          return this.__PROXY__.isSupported(...args);
        };
    
        // function 
        QDomEntity.prototype.nodeName = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.nodeName");
          return this.__PROXY__.nodeName(...args);
        };
    
        // function 
        QDomEntity.prototype.parentNode = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.parentNode");
          return this.__PROXY__.parentNode(...args);
        };
    
        // function 
        QDomEntity.prototype.childNodes = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.childNodes");
          return this.__PROXY__.childNodes(...args);
        };
    
        // function 
        QDomEntity.prototype.firstChild = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.firstChild");
          return this.__PROXY__.firstChild(...args);
        };
    
        // function 
        QDomEntity.prototype.lastChild = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.lastChild");
          return this.__PROXY__.lastChild(...args);
        };
    
        // function 
        QDomEntity.prototype.previousSibling = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.previousSibling");
          return this.__PROXY__.previousSibling(...args);
        };
    
        // function 
        QDomEntity.prototype.nextSibling = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.nextSibling");
          return this.__PROXY__.nextSibling(...args);
        };
    
        // function 
        QDomEntity.prototype.attributes = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.attributes");
          return this.__PROXY__.attributes(...args);
        };
    
        // function 
        QDomEntity.prototype.ownerDocument = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.ownerDocument");
          return this.__PROXY__.ownerDocument(...args);
        };
    
        // function 
        QDomEntity.prototype.namespaceURI = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.namespaceURI");
          return this.__PROXY__.namespaceURI(...args);
        };
    
        // function 
        QDomEntity.prototype.localName = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.localName");
          return this.__PROXY__.localName(...args);
        };
    
        // function 
        QDomEntity.prototype.hasAttributes = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.hasAttributes");
          return this.__PROXY__.hasAttributes(...args);
        };
    
        // function 
        QDomEntity.prototype.nodeValue = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.nodeValue");
          return this.__PROXY__.nodeValue(...args);
        };
    
        // function 
        QDomEntity.prototype.setNodeValue = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.setNodeValue");
          return this.__PROXY__.setNodeValue(...args);
        };
    
        // function 
        QDomEntity.prototype.prefix = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.prefix");
          return this.__PROXY__.prefix(...args);
        };
    
        // function 
        QDomEntity.prototype.setPrefix = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.setPrefix");
          return this.__PROXY__.setPrefix(...args);
        };
    
        // function 
        QDomEntity.prototype.isAttr = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.isAttr");
          return this.__PROXY__.isAttr(...args);
        };
    
        // function 
        QDomEntity.prototype.isCDATASection = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.isCDATASection");
          return this.__PROXY__.isCDATASection(...args);
        };
    
        // function 
        QDomEntity.prototype.isDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.isDocumentFragment");
          return this.__PROXY__.isDocumentFragment(...args);
        };
    
        // function 
        QDomEntity.prototype.isDocument = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.isDocument");
          return this.__PROXY__.isDocument(...args);
        };
    
        // function 
        QDomEntity.prototype.isDocumentType = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.isDocumentType");
          return this.__PROXY__.isDocumentType(...args);
        };
    
        // function 
        QDomEntity.prototype.isElement = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.isElement");
          return this.__PROXY__.isElement(...args);
        };
    
        // function 
        QDomEntity.prototype.isEntityReference = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.isEntityReference");
          return this.__PROXY__.isEntityReference(...args);
        };
    
        // function 
        QDomEntity.prototype.isText = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.isText");
          return this.__PROXY__.isText(...args);
        };
    
        // function 
        QDomEntity.prototype.isEntity = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.isEntity");
          return this.__PROXY__.isEntity(...args);
        };
    
        // function 
        QDomEntity.prototype.isNotation = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.isNotation");
          return this.__PROXY__.isNotation(...args);
        };
    
        // function 
        QDomEntity.prototype.isProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.isProcessingInstruction");
          return this.__PROXY__.isProcessingInstruction(...args);
        };
    
        // function 
        QDomEntity.prototype.isCharacterData = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.isCharacterData");
          return this.__PROXY__.isCharacterData(...args);
        };
    
        // function 
        QDomEntity.prototype.isComment = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.isComment");
          return this.__PROXY__.isComment(...args);
        };
    
        // function 
        QDomEntity.prototype.namedItem = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.namedItem");
          return this.__PROXY__.namedItem(...args);
        };
    
        // function 
        QDomEntity.prototype.isNull = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QDomEntity.prototype.clear = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QDomEntity.prototype.toAttr = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.toAttr");
          return this.__PROXY__.toAttr(...args);
        };
    
        // function 
        QDomEntity.prototype.toCDATASection = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.toCDATASection");
          return this.__PROXY__.toCDATASection(...args);
        };
    
        // function 
        QDomEntity.prototype.toDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.toDocumentFragment");
          return this.__PROXY__.toDocumentFragment(...args);
        };
    
        // function 
        QDomEntity.prototype.toDocument = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.toDocument");
          return this.__PROXY__.toDocument(...args);
        };
    
        // function 
        QDomEntity.prototype.toDocumentType = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.toDocumentType");
          return this.__PROXY__.toDocumentType(...args);
        };
    
        // function 
        QDomEntity.prototype.toElement = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.toElement");
          return this.__PROXY__.toElement(...args);
        };
    
        // function 
        QDomEntity.prototype.toEntityReference = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.toEntityReference");
          return this.__PROXY__.toEntityReference(...args);
        };
    
        // function 
        QDomEntity.prototype.toText = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.toText");
          return this.__PROXY__.toText(...args);
        };
    
        // function 
        QDomEntity.prototype.toEntity = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.toEntity");
          return this.__PROXY__.toEntity(...args);
        };
    
        // function 
        QDomEntity.prototype.toNotation = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.toNotation");
          return this.__PROXY__.toNotation(...args);
        };
    
        // function 
        QDomEntity.prototype.toProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.toProcessingInstruction");
          return this.__PROXY__.toProcessingInstruction(...args);
        };
    
        // function 
        QDomEntity.prototype.toCharacterData = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.toCharacterData");
          return this.__PROXY__.toCharacterData(...args);
        };
    
        // function 
        QDomEntity.prototype.toComment = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.toComment");
          return this.__PROXY__.toComment(...args);
        };
    
        // function 
        QDomEntity.prototype.firstChildElement = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.firstChildElement");
          return this.__PROXY__.firstChildElement(...args);
        };
    
        // function 
        QDomEntity.prototype.lastChildElement = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.lastChildElement");
          return this.__PROXY__.lastChildElement(...args);
        };
    
        // function 
        QDomEntity.prototype.previousSiblingElement = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.previousSiblingElement");
          return this.__PROXY__.previousSiblingElement(...args);
        };
    
        // function 
        QDomEntity.prototype.nextSiblingElement = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.nextSiblingElement");
          return this.__PROXY__.nextSiblingElement(...args);
        };
    
        // function 
        QDomEntity.prototype.lineNumber = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.lineNumber");
          return this.__PROXY__.lineNumber(...args);
        };
    
        // function 
        QDomEntity.prototype.columnNumber = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.columnNumber");
          return this.__PROXY__.columnNumber(...args);
        };
    
        // function 
        QDomEntity.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.operator_assign");
          return this.__PROXY__.operator_assign(...args);
        };
    
        // function 
        QDomEntity.prototype.publicId = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.publicId");
          return this.__PROXY__.publicId(...args);
        };
    
        // function 
        QDomEntity.prototype.systemId = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.systemId");
          return this.__PROXY__.systemId(...args);
        };
    
        // function 
        QDomEntity.prototype.notationName = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.notationName");
          return this.__PROXY__.notationName(...args);
        };
    
        // function 
        QDomEntity.prototype.nodeType = function(...args) 
          
        {
          //print("JS: QDomEntity.prototype.nodeType");
          return this.__PROXY__.nodeType(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDomEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      