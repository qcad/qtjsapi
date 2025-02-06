
      // auto generated
      //var self;

      // class constructor:
      function QDomDocumentType() {
        

        // should be QDomDocumentType_BaseJs.call(this, engine):
        //QDomDocumentType.prototype = new QDomDocumentType_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomDocumentType.getIdStatic()))) {

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
            qWarning("QDomDocumentType.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomDocumentType_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomDocumentType);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomDocumentType_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomDocumentType);
  }

  
  else {
    
        print("QDomDocumentType(): wrong number / type of arguments");
      
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

      //QDomDocumentType.prototype = new QDomDocumentType_BaseJs(engine);
      //QDomDocumentType.prototype = new QDomDocumentType_Wrapper(engine);
      QDomDocumentType.prototype = new Object();

      QDomDocumentType.prototype.toString = function() {
          //return "QDomDocumentType [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomDocumentType [JS]";
        };
      QDomDocumentType.getObjectType = function() {
        return RJSType_QDomDocumentType.getIdStatic();
      };

      QDomDocumentType.prototype.getObjectType = function() {
        return RJSType_QDomDocumentType.getIdStatic();
      };

      QDomDocumentType.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomDocumentType.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QDomNode.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomDocumentType.ElementNode = QDomDocumentType_Wrapper.ElementNode;
QDomDocumentType.AttributeNode = QDomDocumentType_Wrapper.AttributeNode;
QDomDocumentType.TextNode = QDomDocumentType_Wrapper.TextNode;
QDomDocumentType.CDATASectionNode = QDomDocumentType_Wrapper.CDATASectionNode;
QDomDocumentType.EntityReferenceNode = QDomDocumentType_Wrapper.EntityReferenceNode;
QDomDocumentType.EntityNode = QDomDocumentType_Wrapper.EntityNode;
QDomDocumentType.ProcessingInstructionNode = QDomDocumentType_Wrapper.ProcessingInstructionNode;
QDomDocumentType.CommentNode = QDomDocumentType_Wrapper.CommentNode;
QDomDocumentType.DocumentNode = QDomDocumentType_Wrapper.DocumentNode;
QDomDocumentType.DocumentTypeNode = QDomDocumentType_Wrapper.DocumentTypeNode;
QDomDocumentType.DocumentFragmentNode = QDomDocumentType_Wrapper.DocumentFragmentNode;
QDomDocumentType.NotationNode = QDomDocumentType_Wrapper.NotationNode;
QDomDocumentType.BaseNode = QDomDocumentType_Wrapper.BaseNode;
QDomDocumentType.CharacterDataNode = QDomDocumentType_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomDocumentType.EncodingFromDocument = QDomDocumentType_Wrapper.EncodingFromDocument;
QDomDocumentType.EncodingFromTextStream = QDomDocumentType_Wrapper.EncodingFromTextStream;


      // functions:
      
        // function 
        QDomDocumentType.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.operator_equal");
          return this.__PROXY__.operator_equal(...args);
        };
    
        // function 
        QDomDocumentType.prototype.operator_unequal = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.operator_unequal");
          return this.__PROXY__.operator_unequal(...args);
        };
    
        // function 
        QDomDocumentType.prototype.insertBefore = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.insertBefore");
          return this.__PROXY__.insertBefore(...args);
        };
    
        // function 
        QDomDocumentType.prototype.insertAfter = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.insertAfter");
          return this.__PROXY__.insertAfter(...args);
        };
    
        // function 
        QDomDocumentType.prototype.replaceChild = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.replaceChild");
          return this.__PROXY__.replaceChild(...args);
        };
    
        // function 
        QDomDocumentType.prototype.removeChild = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.removeChild");
          return this.__PROXY__.removeChild(...args);
        };
    
        // function 
        QDomDocumentType.prototype.appendChild = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.appendChild");
          return this.__PROXY__.appendChild(...args);
        };
    
        // function 
        QDomDocumentType.prototype.hasChildNodes = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.hasChildNodes");
          return this.__PROXY__.hasChildNodes(...args);
        };
    
        // function 
        QDomDocumentType.prototype.cloneNode = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.cloneNode");
          return this.__PROXY__.cloneNode(...args);
        };
    
        // function 
        QDomDocumentType.prototype.normalize = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        QDomDocumentType.prototype.isSupported = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.isSupported");
          return this.__PROXY__.isSupported(...args);
        };
    
        // function 
        QDomDocumentType.prototype.nodeName = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.nodeName");
          return this.__PROXY__.nodeName(...args);
        };
    
        // function 
        QDomDocumentType.prototype.parentNode = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.parentNode");
          return this.__PROXY__.parentNode(...args);
        };
    
        // function 
        QDomDocumentType.prototype.childNodes = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.childNodes");
          return this.__PROXY__.childNodes(...args);
        };
    
        // function 
        QDomDocumentType.prototype.firstChild = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.firstChild");
          return this.__PROXY__.firstChild(...args);
        };
    
        // function 
        QDomDocumentType.prototype.lastChild = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.lastChild");
          return this.__PROXY__.lastChild(...args);
        };
    
        // function 
        QDomDocumentType.prototype.previousSibling = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.previousSibling");
          return this.__PROXY__.previousSibling(...args);
        };
    
        // function 
        QDomDocumentType.prototype.nextSibling = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.nextSibling");
          return this.__PROXY__.nextSibling(...args);
        };
    
        // function 
        QDomDocumentType.prototype.attributes = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.attributes");
          return this.__PROXY__.attributes(...args);
        };
    
        // function 
        QDomDocumentType.prototype.ownerDocument = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.ownerDocument");
          return this.__PROXY__.ownerDocument(...args);
        };
    
        // function 
        QDomDocumentType.prototype.namespaceURI = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.namespaceURI");
          return this.__PROXY__.namespaceURI(...args);
        };
    
        // function 
        QDomDocumentType.prototype.localName = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.localName");
          return this.__PROXY__.localName(...args);
        };
    
        // function 
        QDomDocumentType.prototype.hasAttributes = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.hasAttributes");
          return this.__PROXY__.hasAttributes(...args);
        };
    
        // function 
        QDomDocumentType.prototype.nodeValue = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.nodeValue");
          return this.__PROXY__.nodeValue(...args);
        };
    
        // function 
        QDomDocumentType.prototype.setNodeValue = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.setNodeValue");
          return this.__PROXY__.setNodeValue(...args);
        };
    
        // function 
        QDomDocumentType.prototype.prefix = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.prefix");
          return this.__PROXY__.prefix(...args);
        };
    
        // function 
        QDomDocumentType.prototype.setPrefix = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.setPrefix");
          return this.__PROXY__.setPrefix(...args);
        };
    
        // function 
        QDomDocumentType.prototype.isAttr = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.isAttr");
          return this.__PROXY__.isAttr(...args);
        };
    
        // function 
        QDomDocumentType.prototype.isCDATASection = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.isCDATASection");
          return this.__PROXY__.isCDATASection(...args);
        };
    
        // function 
        QDomDocumentType.prototype.isDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.isDocumentFragment");
          return this.__PROXY__.isDocumentFragment(...args);
        };
    
        // function 
        QDomDocumentType.prototype.isDocument = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.isDocument");
          return this.__PROXY__.isDocument(...args);
        };
    
        // function 
        QDomDocumentType.prototype.isDocumentType = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.isDocumentType");
          return this.__PROXY__.isDocumentType(...args);
        };
    
        // function 
        QDomDocumentType.prototype.isElement = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.isElement");
          return this.__PROXY__.isElement(...args);
        };
    
        // function 
        QDomDocumentType.prototype.isEntityReference = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.isEntityReference");
          return this.__PROXY__.isEntityReference(...args);
        };
    
        // function 
        QDomDocumentType.prototype.isText = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.isText");
          return this.__PROXY__.isText(...args);
        };
    
        // function 
        QDomDocumentType.prototype.isEntity = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.isEntity");
          return this.__PROXY__.isEntity(...args);
        };
    
        // function 
        QDomDocumentType.prototype.isNotation = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.isNotation");
          return this.__PROXY__.isNotation(...args);
        };
    
        // function 
        QDomDocumentType.prototype.isProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.isProcessingInstruction");
          return this.__PROXY__.isProcessingInstruction(...args);
        };
    
        // function 
        QDomDocumentType.prototype.isCharacterData = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.isCharacterData");
          return this.__PROXY__.isCharacterData(...args);
        };
    
        // function 
        QDomDocumentType.prototype.isComment = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.isComment");
          return this.__PROXY__.isComment(...args);
        };
    
        // function 
        QDomDocumentType.prototype.namedItem = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.namedItem");
          return this.__PROXY__.namedItem(...args);
        };
    
        // function 
        QDomDocumentType.prototype.isNull = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QDomDocumentType.prototype.clear = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QDomDocumentType.prototype.toAttr = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.toAttr");
          return this.__PROXY__.toAttr(...args);
        };
    
        // function 
        QDomDocumentType.prototype.toCDATASection = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.toCDATASection");
          return this.__PROXY__.toCDATASection(...args);
        };
    
        // function 
        QDomDocumentType.prototype.toDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.toDocumentFragment");
          return this.__PROXY__.toDocumentFragment(...args);
        };
    
        // function 
        QDomDocumentType.prototype.toDocument = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.toDocument");
          return this.__PROXY__.toDocument(...args);
        };
    
        // function 
        QDomDocumentType.prototype.toDocumentType = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.toDocumentType");
          return this.__PROXY__.toDocumentType(...args);
        };
    
        // function 
        QDomDocumentType.prototype.toElement = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.toElement");
          return this.__PROXY__.toElement(...args);
        };
    
        // function 
        QDomDocumentType.prototype.toEntityReference = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.toEntityReference");
          return this.__PROXY__.toEntityReference(...args);
        };
    
        // function 
        QDomDocumentType.prototype.toText = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.toText");
          return this.__PROXY__.toText(...args);
        };
    
        // function 
        QDomDocumentType.prototype.toEntity = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.toEntity");
          return this.__PROXY__.toEntity(...args);
        };
    
        // function 
        QDomDocumentType.prototype.toNotation = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.toNotation");
          return this.__PROXY__.toNotation(...args);
        };
    
        // function 
        QDomDocumentType.prototype.toProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.toProcessingInstruction");
          return this.__PROXY__.toProcessingInstruction(...args);
        };
    
        // function 
        QDomDocumentType.prototype.toCharacterData = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.toCharacterData");
          return this.__PROXY__.toCharacterData(...args);
        };
    
        // function 
        QDomDocumentType.prototype.toComment = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.toComment");
          return this.__PROXY__.toComment(...args);
        };
    
        // function 
        QDomDocumentType.prototype.firstChildElement = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.firstChildElement");
          return this.__PROXY__.firstChildElement(...args);
        };
    
        // function 
        QDomDocumentType.prototype.lastChildElement = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.lastChildElement");
          return this.__PROXY__.lastChildElement(...args);
        };
    
        // function 
        QDomDocumentType.prototype.previousSiblingElement = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.previousSiblingElement");
          return this.__PROXY__.previousSiblingElement(...args);
        };
    
        // function 
        QDomDocumentType.prototype.nextSiblingElement = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.nextSiblingElement");
          return this.__PROXY__.nextSiblingElement(...args);
        };
    
        // function 
        QDomDocumentType.prototype.lineNumber = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.lineNumber");
          return this.__PROXY__.lineNumber(...args);
        };
    
        // function 
        QDomDocumentType.prototype.columnNumber = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.columnNumber");
          return this.__PROXY__.columnNumber(...args);
        };
    
        // function 
        QDomDocumentType.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.operator_assign");
          return this.__PROXY__.operator_assign(...args);
        };
    
        // function 
        QDomDocumentType.prototype.name = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.name");
          return this.__PROXY__.name(...args);
        };
    
        // function 
        QDomDocumentType.prototype.entities = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.entities");
          return this.__PROXY__.entities(...args);
        };
    
        // function 
        QDomDocumentType.prototype.notations = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.notations");
          return this.__PROXY__.notations(...args);
        };
    
        // function 
        QDomDocumentType.prototype.publicId = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.publicId");
          return this.__PROXY__.publicId(...args);
        };
    
        // function 
        QDomDocumentType.prototype.systemId = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.systemId");
          return this.__PROXY__.systemId(...args);
        };
    
        // function 
        QDomDocumentType.prototype.internalSubset = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.internalSubset");
          return this.__PROXY__.internalSubset(...args);
        };
    
        // function 
        QDomDocumentType.prototype.nodeType = function(...args) 
          
        {
          //print("JS: QDomDocumentType.prototype.nodeType");
          return this.__PROXY__.nodeType(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomDocumentType.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomDocumentType.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDomDocumentType.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      