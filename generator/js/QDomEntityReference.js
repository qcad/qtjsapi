
      // auto generated
      //var self;

      // class constructor:
      function QDomEntityReference() {
        

        // should be QDomEntityReference_BaseJs.call(this, engine):
        //QDomEntityReference.prototype = new QDomEntityReference_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomEntityReference.getIdStatic()))) {

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
            qWarning("QDomEntityReference.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomEntityReference_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomEntityReference);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomEntityReference_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomEntityReference);
  }

  
  else {
    
        print("QDomEntityReference(): wrong number / type of arguments");
      
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

      //QDomEntityReference.prototype = new QDomEntityReference_BaseJs(engine);
      //QDomEntityReference.prototype = new QDomEntityReference_Wrapper(engine);
      QDomEntityReference.prototype = new Object();

      QDomEntityReference.prototype.toString = function() {
          //return "QDomEntityReference [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomEntityReference [JS]";
        };
      QDomEntityReference.getObjectType = function() {
        return RJSType_QDomEntityReference.getIdStatic();
      };

      QDomEntityReference.prototype.getObjectType = function() {
        return RJSType_QDomEntityReference.getIdStatic();
      };

      QDomEntityReference.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomEntityReference.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QDomNode.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomEntityReference.ElementNode = QDomEntityReference_Wrapper.ElementNode;
QDomEntityReference.AttributeNode = QDomEntityReference_Wrapper.AttributeNode;
QDomEntityReference.TextNode = QDomEntityReference_Wrapper.TextNode;
QDomEntityReference.CDATASectionNode = QDomEntityReference_Wrapper.CDATASectionNode;
QDomEntityReference.EntityReferenceNode = QDomEntityReference_Wrapper.EntityReferenceNode;
QDomEntityReference.EntityNode = QDomEntityReference_Wrapper.EntityNode;
QDomEntityReference.ProcessingInstructionNode = QDomEntityReference_Wrapper.ProcessingInstructionNode;
QDomEntityReference.CommentNode = QDomEntityReference_Wrapper.CommentNode;
QDomEntityReference.DocumentNode = QDomEntityReference_Wrapper.DocumentNode;
QDomEntityReference.DocumentTypeNode = QDomEntityReference_Wrapper.DocumentTypeNode;
QDomEntityReference.DocumentFragmentNode = QDomEntityReference_Wrapper.DocumentFragmentNode;
QDomEntityReference.NotationNode = QDomEntityReference_Wrapper.NotationNode;
QDomEntityReference.BaseNode = QDomEntityReference_Wrapper.BaseNode;
QDomEntityReference.CharacterDataNode = QDomEntityReference_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomEntityReference.EncodingFromDocument = QDomEntityReference_Wrapper.EncodingFromDocument;
QDomEntityReference.EncodingFromTextStream = QDomEntityReference_Wrapper.EncodingFromTextStream;


      // functions:
      
        // function 
        QDomEntityReference.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.operator_equal");
          return this.__PROXY__.operator_equal(...args);
        };
    
        // function 
        QDomEntityReference.prototype.operator_unequal = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.operator_unequal");
          return this.__PROXY__.operator_unequal(...args);
        };
    
        // function 
        QDomEntityReference.prototype.insertBefore = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.insertBefore");
          return this.__PROXY__.insertBefore(...args);
        };
    
        // function 
        QDomEntityReference.prototype.insertAfter = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.insertAfter");
          return this.__PROXY__.insertAfter(...args);
        };
    
        // function 
        QDomEntityReference.prototype.replaceChild = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.replaceChild");
          return this.__PROXY__.replaceChild(...args);
        };
    
        // function 
        QDomEntityReference.prototype.removeChild = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.removeChild");
          return this.__PROXY__.removeChild(...args);
        };
    
        // function 
        QDomEntityReference.prototype.appendChild = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.appendChild");
          return this.__PROXY__.appendChild(...args);
        };
    
        // function 
        QDomEntityReference.prototype.hasChildNodes = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.hasChildNodes");
          return this.__PROXY__.hasChildNodes(...args);
        };
    
        // function 
        QDomEntityReference.prototype.cloneNode = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.cloneNode");
          return this.__PROXY__.cloneNode(...args);
        };
    
        // function 
        QDomEntityReference.prototype.normalize = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        QDomEntityReference.prototype.isSupported = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.isSupported");
          return this.__PROXY__.isSupported(...args);
        };
    
        // function 
        QDomEntityReference.prototype.nodeName = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.nodeName");
          return this.__PROXY__.nodeName(...args);
        };
    
        // function 
        QDomEntityReference.prototype.parentNode = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.parentNode");
          return this.__PROXY__.parentNode(...args);
        };
    
        // function 
        QDomEntityReference.prototype.childNodes = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.childNodes");
          return this.__PROXY__.childNodes(...args);
        };
    
        // function 
        QDomEntityReference.prototype.firstChild = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.firstChild");
          return this.__PROXY__.firstChild(...args);
        };
    
        // function 
        QDomEntityReference.prototype.lastChild = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.lastChild");
          return this.__PROXY__.lastChild(...args);
        };
    
        // function 
        QDomEntityReference.prototype.previousSibling = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.previousSibling");
          return this.__PROXY__.previousSibling(...args);
        };
    
        // function 
        QDomEntityReference.prototype.nextSibling = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.nextSibling");
          return this.__PROXY__.nextSibling(...args);
        };
    
        // function 
        QDomEntityReference.prototype.attributes = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.attributes");
          return this.__PROXY__.attributes(...args);
        };
    
        // function 
        QDomEntityReference.prototype.ownerDocument = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.ownerDocument");
          return this.__PROXY__.ownerDocument(...args);
        };
    
        // function 
        QDomEntityReference.prototype.namespaceURI = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.namespaceURI");
          return this.__PROXY__.namespaceURI(...args);
        };
    
        // function 
        QDomEntityReference.prototype.localName = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.localName");
          return this.__PROXY__.localName(...args);
        };
    
        // function 
        QDomEntityReference.prototype.hasAttributes = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.hasAttributes");
          return this.__PROXY__.hasAttributes(...args);
        };
    
        // function 
        QDomEntityReference.prototype.nodeValue = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.nodeValue");
          return this.__PROXY__.nodeValue(...args);
        };
    
        // function 
        QDomEntityReference.prototype.setNodeValue = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.setNodeValue");
          return this.__PROXY__.setNodeValue(...args);
        };
    
        // function 
        QDomEntityReference.prototype.prefix = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.prefix");
          return this.__PROXY__.prefix(...args);
        };
    
        // function 
        QDomEntityReference.prototype.setPrefix = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.setPrefix");
          return this.__PROXY__.setPrefix(...args);
        };
    
        // function 
        QDomEntityReference.prototype.isAttr = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.isAttr");
          return this.__PROXY__.isAttr(...args);
        };
    
        // function 
        QDomEntityReference.prototype.isCDATASection = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.isCDATASection");
          return this.__PROXY__.isCDATASection(...args);
        };
    
        // function 
        QDomEntityReference.prototype.isDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.isDocumentFragment");
          return this.__PROXY__.isDocumentFragment(...args);
        };
    
        // function 
        QDomEntityReference.prototype.isDocument = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.isDocument");
          return this.__PROXY__.isDocument(...args);
        };
    
        // function 
        QDomEntityReference.prototype.isDocumentType = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.isDocumentType");
          return this.__PROXY__.isDocumentType(...args);
        };
    
        // function 
        QDomEntityReference.prototype.isElement = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.isElement");
          return this.__PROXY__.isElement(...args);
        };
    
        // function 
        QDomEntityReference.prototype.isEntityReference = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.isEntityReference");
          return this.__PROXY__.isEntityReference(...args);
        };
    
        // function 
        QDomEntityReference.prototype.isText = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.isText");
          return this.__PROXY__.isText(...args);
        };
    
        // function 
        QDomEntityReference.prototype.isEntity = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.isEntity");
          return this.__PROXY__.isEntity(...args);
        };
    
        // function 
        QDomEntityReference.prototype.isNotation = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.isNotation");
          return this.__PROXY__.isNotation(...args);
        };
    
        // function 
        QDomEntityReference.prototype.isProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.isProcessingInstruction");
          return this.__PROXY__.isProcessingInstruction(...args);
        };
    
        // function 
        QDomEntityReference.prototype.isCharacterData = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.isCharacterData");
          return this.__PROXY__.isCharacterData(...args);
        };
    
        // function 
        QDomEntityReference.prototype.isComment = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.isComment");
          return this.__PROXY__.isComment(...args);
        };
    
        // function 
        QDomEntityReference.prototype.namedItem = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.namedItem");
          return this.__PROXY__.namedItem(...args);
        };
    
        // function 
        QDomEntityReference.prototype.isNull = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QDomEntityReference.prototype.clear = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QDomEntityReference.prototype.toAttr = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.toAttr");
          return this.__PROXY__.toAttr(...args);
        };
    
        // function 
        QDomEntityReference.prototype.toCDATASection = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.toCDATASection");
          return this.__PROXY__.toCDATASection(...args);
        };
    
        // function 
        QDomEntityReference.prototype.toDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.toDocumentFragment");
          return this.__PROXY__.toDocumentFragment(...args);
        };
    
        // function 
        QDomEntityReference.prototype.toDocument = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.toDocument");
          return this.__PROXY__.toDocument(...args);
        };
    
        // function 
        QDomEntityReference.prototype.toDocumentType = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.toDocumentType");
          return this.__PROXY__.toDocumentType(...args);
        };
    
        // function 
        QDomEntityReference.prototype.toElement = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.toElement");
          return this.__PROXY__.toElement(...args);
        };
    
        // function 
        QDomEntityReference.prototype.toEntityReference = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.toEntityReference");
          return this.__PROXY__.toEntityReference(...args);
        };
    
        // function 
        QDomEntityReference.prototype.toText = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.toText");
          return this.__PROXY__.toText(...args);
        };
    
        // function 
        QDomEntityReference.prototype.toEntity = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.toEntity");
          return this.__PROXY__.toEntity(...args);
        };
    
        // function 
        QDomEntityReference.prototype.toNotation = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.toNotation");
          return this.__PROXY__.toNotation(...args);
        };
    
        // function 
        QDomEntityReference.prototype.toProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.toProcessingInstruction");
          return this.__PROXY__.toProcessingInstruction(...args);
        };
    
        // function 
        QDomEntityReference.prototype.toCharacterData = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.toCharacterData");
          return this.__PROXY__.toCharacterData(...args);
        };
    
        // function 
        QDomEntityReference.prototype.toComment = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.toComment");
          return this.__PROXY__.toComment(...args);
        };
    
        // function 
        QDomEntityReference.prototype.firstChildElement = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.firstChildElement");
          return this.__PROXY__.firstChildElement(...args);
        };
    
        // function 
        QDomEntityReference.prototype.lastChildElement = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.lastChildElement");
          return this.__PROXY__.lastChildElement(...args);
        };
    
        // function 
        QDomEntityReference.prototype.previousSiblingElement = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.previousSiblingElement");
          return this.__PROXY__.previousSiblingElement(...args);
        };
    
        // function 
        QDomEntityReference.prototype.nextSiblingElement = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.nextSiblingElement");
          return this.__PROXY__.nextSiblingElement(...args);
        };
    
        // function 
        QDomEntityReference.prototype.lineNumber = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.lineNumber");
          return this.__PROXY__.lineNumber(...args);
        };
    
        // function 
        QDomEntityReference.prototype.columnNumber = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.columnNumber");
          return this.__PROXY__.columnNumber(...args);
        };
    
        // function 
        QDomEntityReference.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.operator_assign");
          return this.__PROXY__.operator_assign(...args);
        };
    
        // function 
        QDomEntityReference.prototype.nodeType = function(...args) 
          
        {
          //print("JS: QDomEntityReference.prototype.nodeType");
          return this.__PROXY__.nodeType(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomEntityReference.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomEntityReference.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDomEntityReference.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      