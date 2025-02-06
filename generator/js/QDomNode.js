
      // auto generated
      //var self;

      // class constructor:
      function QDomNode() {
        

        // should be QDomNode_BaseJs.call(this, engine):
        //QDomNode.prototype = new QDomNode_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomNode.getIdStatic()))) {

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
            qWarning("QDomNode.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomNode_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomNode);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomNode_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomNode);
  }

  
  else {
    
        print("QDomNode(): wrong number / type of arguments");
      
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

      //QDomNode.prototype = new QDomNode_BaseJs(engine);
      //QDomNode.prototype = new QDomNode_Wrapper(engine);
      QDomNode.prototype = new Object();

      QDomNode.prototype.toString = function() {
          //return "QDomNode [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomNode [JS]";
        };
      QDomNode.getObjectType = function() {
        return RJSType_QDomNode.getIdStatic();
      };

      QDomNode.prototype.getObjectType = function() {
        return RJSType_QDomNode.getIdStatic();
      };

      QDomNode.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomNode.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomNode.ElementNode = QDomNode_Wrapper.ElementNode;
QDomNode.AttributeNode = QDomNode_Wrapper.AttributeNode;
QDomNode.TextNode = QDomNode_Wrapper.TextNode;
QDomNode.CDATASectionNode = QDomNode_Wrapper.CDATASectionNode;
QDomNode.EntityReferenceNode = QDomNode_Wrapper.EntityReferenceNode;
QDomNode.EntityNode = QDomNode_Wrapper.EntityNode;
QDomNode.ProcessingInstructionNode = QDomNode_Wrapper.ProcessingInstructionNode;
QDomNode.CommentNode = QDomNode_Wrapper.CommentNode;
QDomNode.DocumentNode = QDomNode_Wrapper.DocumentNode;
QDomNode.DocumentTypeNode = QDomNode_Wrapper.DocumentTypeNode;
QDomNode.DocumentFragmentNode = QDomNode_Wrapper.DocumentFragmentNode;
QDomNode.NotationNode = QDomNode_Wrapper.NotationNode;
QDomNode.BaseNode = QDomNode_Wrapper.BaseNode;
QDomNode.CharacterDataNode = QDomNode_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomNode.EncodingFromDocument = QDomNode_Wrapper.EncodingFromDocument;
QDomNode.EncodingFromTextStream = QDomNode_Wrapper.EncodingFromTextStream;


      // functions:
      
        // function 
        QDomNode.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.operator_assign");
          return this.__PROXY__.operator_assign(...args);
        };
    
        // function 
        QDomNode.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.operator_equal");
          return this.__PROXY__.operator_equal(...args);
        };
    
        // function 
        QDomNode.prototype.operator_unequal = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.operator_unequal");
          return this.__PROXY__.operator_unequal(...args);
        };
    
        // function 
        QDomNode.prototype.insertBefore = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.insertBefore");
          return this.__PROXY__.insertBefore(...args);
        };
    
        // function 
        QDomNode.prototype.insertAfter = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.insertAfter");
          return this.__PROXY__.insertAfter(...args);
        };
    
        // function 
        QDomNode.prototype.replaceChild = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.replaceChild");
          return this.__PROXY__.replaceChild(...args);
        };
    
        // function 
        QDomNode.prototype.removeChild = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.removeChild");
          return this.__PROXY__.removeChild(...args);
        };
    
        // function 
        QDomNode.prototype.appendChild = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.appendChild");
          return this.__PROXY__.appendChild(...args);
        };
    
        // function 
        QDomNode.prototype.hasChildNodes = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.hasChildNodes");
          return this.__PROXY__.hasChildNodes(...args);
        };
    
        // function 
        QDomNode.prototype.cloneNode = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.cloneNode");
          return this.__PROXY__.cloneNode(...args);
        };
    
        // function 
        QDomNode.prototype.normalize = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        QDomNode.prototype.isSupported = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.isSupported");
          return this.__PROXY__.isSupported(...args);
        };
    
        // function 
        QDomNode.prototype.nodeName = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.nodeName");
          return this.__PROXY__.nodeName(...args);
        };
    
        // function 
        QDomNode.prototype.nodeType = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.nodeType");
          return this.__PROXY__.nodeType(...args);
        };
    
        // function 
        QDomNode.prototype.parentNode = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.parentNode");
          return this.__PROXY__.parentNode(...args);
        };
    
        // function 
        QDomNode.prototype.childNodes = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.childNodes");
          return this.__PROXY__.childNodes(...args);
        };
    
        // function 
        QDomNode.prototype.firstChild = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.firstChild");
          return this.__PROXY__.firstChild(...args);
        };
    
        // function 
        QDomNode.prototype.lastChild = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.lastChild");
          return this.__PROXY__.lastChild(...args);
        };
    
        // function 
        QDomNode.prototype.previousSibling = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.previousSibling");
          return this.__PROXY__.previousSibling(...args);
        };
    
        // function 
        QDomNode.prototype.nextSibling = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.nextSibling");
          return this.__PROXY__.nextSibling(...args);
        };
    
        // function 
        QDomNode.prototype.attributes = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.attributes");
          return this.__PROXY__.attributes(...args);
        };
    
        // function 
        QDomNode.prototype.ownerDocument = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.ownerDocument");
          return this.__PROXY__.ownerDocument(...args);
        };
    
        // function 
        QDomNode.prototype.namespaceURI = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.namespaceURI");
          return this.__PROXY__.namespaceURI(...args);
        };
    
        // function 
        QDomNode.prototype.localName = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.localName");
          return this.__PROXY__.localName(...args);
        };
    
        // function 
        QDomNode.prototype.hasAttributes = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.hasAttributes");
          return this.__PROXY__.hasAttributes(...args);
        };
    
        // function 
        QDomNode.prototype.nodeValue = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.nodeValue");
          return this.__PROXY__.nodeValue(...args);
        };
    
        // function 
        QDomNode.prototype.setNodeValue = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.setNodeValue");
          return this.__PROXY__.setNodeValue(...args);
        };
    
        // function 
        QDomNode.prototype.prefix = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.prefix");
          return this.__PROXY__.prefix(...args);
        };
    
        // function 
        QDomNode.prototype.setPrefix = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.setPrefix");
          return this.__PROXY__.setPrefix(...args);
        };
    
        // function 
        QDomNode.prototype.isAttr = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.isAttr");
          return this.__PROXY__.isAttr(...args);
        };
    
        // function 
        QDomNode.prototype.isCDATASection = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.isCDATASection");
          return this.__PROXY__.isCDATASection(...args);
        };
    
        // function 
        QDomNode.prototype.isDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.isDocumentFragment");
          return this.__PROXY__.isDocumentFragment(...args);
        };
    
        // function 
        QDomNode.prototype.isDocument = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.isDocument");
          return this.__PROXY__.isDocument(...args);
        };
    
        // function 
        QDomNode.prototype.isDocumentType = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.isDocumentType");
          return this.__PROXY__.isDocumentType(...args);
        };
    
        // function 
        QDomNode.prototype.isElement = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.isElement");
          return this.__PROXY__.isElement(...args);
        };
    
        // function 
        QDomNode.prototype.isEntityReference = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.isEntityReference");
          return this.__PROXY__.isEntityReference(...args);
        };
    
        // function 
        QDomNode.prototype.isText = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.isText");
          return this.__PROXY__.isText(...args);
        };
    
        // function 
        QDomNode.prototype.isEntity = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.isEntity");
          return this.__PROXY__.isEntity(...args);
        };
    
        // function 
        QDomNode.prototype.isNotation = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.isNotation");
          return this.__PROXY__.isNotation(...args);
        };
    
        // function 
        QDomNode.prototype.isProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.isProcessingInstruction");
          return this.__PROXY__.isProcessingInstruction(...args);
        };
    
        // function 
        QDomNode.prototype.isCharacterData = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.isCharacterData");
          return this.__PROXY__.isCharacterData(...args);
        };
    
        // function 
        QDomNode.prototype.isComment = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.isComment");
          return this.__PROXY__.isComment(...args);
        };
    
        // function 
        QDomNode.prototype.namedItem = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.namedItem");
          return this.__PROXY__.namedItem(...args);
        };
    
        // function 
        QDomNode.prototype.isNull = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QDomNode.prototype.clear = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QDomNode.prototype.toAttr = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.toAttr");
          return this.__PROXY__.toAttr(...args);
        };
    
        // function 
        QDomNode.prototype.toCDATASection = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.toCDATASection");
          return this.__PROXY__.toCDATASection(...args);
        };
    
        // function 
        QDomNode.prototype.toDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.toDocumentFragment");
          return this.__PROXY__.toDocumentFragment(...args);
        };
    
        // function 
        QDomNode.prototype.toDocument = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.toDocument");
          return this.__PROXY__.toDocument(...args);
        };
    
        // function 
        QDomNode.prototype.toDocumentType = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.toDocumentType");
          return this.__PROXY__.toDocumentType(...args);
        };
    
        // function 
        QDomNode.prototype.toElement = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.toElement");
          return this.__PROXY__.toElement(...args);
        };
    
        // function 
        QDomNode.prototype.toEntityReference = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.toEntityReference");
          return this.__PROXY__.toEntityReference(...args);
        };
    
        // function 
        QDomNode.prototype.toText = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.toText");
          return this.__PROXY__.toText(...args);
        };
    
        // function 
        QDomNode.prototype.toEntity = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.toEntity");
          return this.__PROXY__.toEntity(...args);
        };
    
        // function 
        QDomNode.prototype.toNotation = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.toNotation");
          return this.__PROXY__.toNotation(...args);
        };
    
        // function 
        QDomNode.prototype.toProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.toProcessingInstruction");
          return this.__PROXY__.toProcessingInstruction(...args);
        };
    
        // function 
        QDomNode.prototype.toCharacterData = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.toCharacterData");
          return this.__PROXY__.toCharacterData(...args);
        };
    
        // function 
        QDomNode.prototype.toComment = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.toComment");
          return this.__PROXY__.toComment(...args);
        };
    
        // function 
        QDomNode.prototype.firstChildElement = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.firstChildElement");
          return this.__PROXY__.firstChildElement(...args);
        };
    
        // function 
        QDomNode.prototype.lastChildElement = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.lastChildElement");
          return this.__PROXY__.lastChildElement(...args);
        };
    
        // function 
        QDomNode.prototype.previousSiblingElement = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.previousSiblingElement");
          return this.__PROXY__.previousSiblingElement(...args);
        };
    
        // function 
        QDomNode.prototype.nextSiblingElement = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.nextSiblingElement");
          return this.__PROXY__.nextSiblingElement(...args);
        };
    
        // function 
        QDomNode.prototype.lineNumber = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.lineNumber");
          return this.__PROXY__.lineNumber(...args);
        };
    
        // function 
        QDomNode.prototype.columnNumber = function(...args) 
          
        {
          //print("JS: QDomNode.prototype.columnNumber");
          return this.__PROXY__.columnNumber(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomNode.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomNode.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDomNode.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      