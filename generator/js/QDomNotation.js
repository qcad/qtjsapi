
      // auto generated
      //var self;

      // class constructor:
      function QDomNotation() {
        

        // should be QDomNotation_BaseJs.call(this, engine):
        //QDomNotation.prototype = new QDomNotation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomNotation.getIdStatic()))) {

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
            qWarning("QDomNotation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomNotation_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomNotation);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomNotation_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomNotation);
  }

  
  else {
    
        print("QDomNotation(): wrong number / type of arguments");
      
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

      //QDomNotation.prototype = new QDomNotation_BaseJs(engine);
      //QDomNotation.prototype = new QDomNotation_Wrapper(engine);
      QDomNotation.prototype = new Object();

      QDomNotation.prototype.toString = function() {
          //return "QDomNotation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomNotation [JS]";
        };
      QDomNotation.getObjectType = function() {
        return RJSType_QDomNotation.getIdStatic();
      };

      QDomNotation.prototype.getObjectType = function() {
        return RJSType_QDomNotation.getIdStatic();
      };

      QDomNotation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomNotation.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QDomNode.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomNotation.ElementNode = QDomNotation_Wrapper.ElementNode;
QDomNotation.AttributeNode = QDomNotation_Wrapper.AttributeNode;
QDomNotation.TextNode = QDomNotation_Wrapper.TextNode;
QDomNotation.CDATASectionNode = QDomNotation_Wrapper.CDATASectionNode;
QDomNotation.EntityReferenceNode = QDomNotation_Wrapper.EntityReferenceNode;
QDomNotation.EntityNode = QDomNotation_Wrapper.EntityNode;
QDomNotation.ProcessingInstructionNode = QDomNotation_Wrapper.ProcessingInstructionNode;
QDomNotation.CommentNode = QDomNotation_Wrapper.CommentNode;
QDomNotation.DocumentNode = QDomNotation_Wrapper.DocumentNode;
QDomNotation.DocumentTypeNode = QDomNotation_Wrapper.DocumentTypeNode;
QDomNotation.DocumentFragmentNode = QDomNotation_Wrapper.DocumentFragmentNode;
QDomNotation.NotationNode = QDomNotation_Wrapper.NotationNode;
QDomNotation.BaseNode = QDomNotation_Wrapper.BaseNode;
QDomNotation.CharacterDataNode = QDomNotation_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomNotation.EncodingFromDocument = QDomNotation_Wrapper.EncodingFromDocument;
QDomNotation.EncodingFromTextStream = QDomNotation_Wrapper.EncodingFromTextStream;


      // functions:
      
        // function 
        QDomNotation.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.operator_equal");
          return this.__PROXY__.operator_equal(...args);
        };
    
        // function 
        QDomNotation.prototype.operator_unequal = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.operator_unequal");
          return this.__PROXY__.operator_unequal(...args);
        };
    
        // function 
        QDomNotation.prototype.insertBefore = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.insertBefore");
          return this.__PROXY__.insertBefore(...args);
        };
    
        // function 
        QDomNotation.prototype.insertAfter = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.insertAfter");
          return this.__PROXY__.insertAfter(...args);
        };
    
        // function 
        QDomNotation.prototype.replaceChild = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.replaceChild");
          return this.__PROXY__.replaceChild(...args);
        };
    
        // function 
        QDomNotation.prototype.removeChild = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.removeChild");
          return this.__PROXY__.removeChild(...args);
        };
    
        // function 
        QDomNotation.prototype.appendChild = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.appendChild");
          return this.__PROXY__.appendChild(...args);
        };
    
        // function 
        QDomNotation.prototype.hasChildNodes = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.hasChildNodes");
          return this.__PROXY__.hasChildNodes(...args);
        };
    
        // function 
        QDomNotation.prototype.cloneNode = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.cloneNode");
          return this.__PROXY__.cloneNode(...args);
        };
    
        // function 
        QDomNotation.prototype.normalize = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        QDomNotation.prototype.isSupported = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.isSupported");
          return this.__PROXY__.isSupported(...args);
        };
    
        // function 
        QDomNotation.prototype.nodeName = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.nodeName");
          return this.__PROXY__.nodeName(...args);
        };
    
        // function 
        QDomNotation.prototype.parentNode = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.parentNode");
          return this.__PROXY__.parentNode(...args);
        };
    
        // function 
        QDomNotation.prototype.childNodes = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.childNodes");
          return this.__PROXY__.childNodes(...args);
        };
    
        // function 
        QDomNotation.prototype.firstChild = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.firstChild");
          return this.__PROXY__.firstChild(...args);
        };
    
        // function 
        QDomNotation.prototype.lastChild = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.lastChild");
          return this.__PROXY__.lastChild(...args);
        };
    
        // function 
        QDomNotation.prototype.previousSibling = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.previousSibling");
          return this.__PROXY__.previousSibling(...args);
        };
    
        // function 
        QDomNotation.prototype.nextSibling = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.nextSibling");
          return this.__PROXY__.nextSibling(...args);
        };
    
        // function 
        QDomNotation.prototype.attributes = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.attributes");
          return this.__PROXY__.attributes(...args);
        };
    
        // function 
        QDomNotation.prototype.ownerDocument = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.ownerDocument");
          return this.__PROXY__.ownerDocument(...args);
        };
    
        // function 
        QDomNotation.prototype.namespaceURI = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.namespaceURI");
          return this.__PROXY__.namespaceURI(...args);
        };
    
        // function 
        QDomNotation.prototype.localName = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.localName");
          return this.__PROXY__.localName(...args);
        };
    
        // function 
        QDomNotation.prototype.hasAttributes = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.hasAttributes");
          return this.__PROXY__.hasAttributes(...args);
        };
    
        // function 
        QDomNotation.prototype.nodeValue = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.nodeValue");
          return this.__PROXY__.nodeValue(...args);
        };
    
        // function 
        QDomNotation.prototype.setNodeValue = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.setNodeValue");
          return this.__PROXY__.setNodeValue(...args);
        };
    
        // function 
        QDomNotation.prototype.prefix = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.prefix");
          return this.__PROXY__.prefix(...args);
        };
    
        // function 
        QDomNotation.prototype.setPrefix = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.setPrefix");
          return this.__PROXY__.setPrefix(...args);
        };
    
        // function 
        QDomNotation.prototype.isAttr = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.isAttr");
          return this.__PROXY__.isAttr(...args);
        };
    
        // function 
        QDomNotation.prototype.isCDATASection = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.isCDATASection");
          return this.__PROXY__.isCDATASection(...args);
        };
    
        // function 
        QDomNotation.prototype.isDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.isDocumentFragment");
          return this.__PROXY__.isDocumentFragment(...args);
        };
    
        // function 
        QDomNotation.prototype.isDocument = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.isDocument");
          return this.__PROXY__.isDocument(...args);
        };
    
        // function 
        QDomNotation.prototype.isDocumentType = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.isDocumentType");
          return this.__PROXY__.isDocumentType(...args);
        };
    
        // function 
        QDomNotation.prototype.isElement = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.isElement");
          return this.__PROXY__.isElement(...args);
        };
    
        // function 
        QDomNotation.prototype.isEntityReference = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.isEntityReference");
          return this.__PROXY__.isEntityReference(...args);
        };
    
        // function 
        QDomNotation.prototype.isText = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.isText");
          return this.__PROXY__.isText(...args);
        };
    
        // function 
        QDomNotation.prototype.isEntity = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.isEntity");
          return this.__PROXY__.isEntity(...args);
        };
    
        // function 
        QDomNotation.prototype.isNotation = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.isNotation");
          return this.__PROXY__.isNotation(...args);
        };
    
        // function 
        QDomNotation.prototype.isProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.isProcessingInstruction");
          return this.__PROXY__.isProcessingInstruction(...args);
        };
    
        // function 
        QDomNotation.prototype.isCharacterData = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.isCharacterData");
          return this.__PROXY__.isCharacterData(...args);
        };
    
        // function 
        QDomNotation.prototype.isComment = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.isComment");
          return this.__PROXY__.isComment(...args);
        };
    
        // function 
        QDomNotation.prototype.namedItem = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.namedItem");
          return this.__PROXY__.namedItem(...args);
        };
    
        // function 
        QDomNotation.prototype.isNull = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QDomNotation.prototype.clear = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QDomNotation.prototype.toAttr = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.toAttr");
          return this.__PROXY__.toAttr(...args);
        };
    
        // function 
        QDomNotation.prototype.toCDATASection = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.toCDATASection");
          return this.__PROXY__.toCDATASection(...args);
        };
    
        // function 
        QDomNotation.prototype.toDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.toDocumentFragment");
          return this.__PROXY__.toDocumentFragment(...args);
        };
    
        // function 
        QDomNotation.prototype.toDocument = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.toDocument");
          return this.__PROXY__.toDocument(...args);
        };
    
        // function 
        QDomNotation.prototype.toDocumentType = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.toDocumentType");
          return this.__PROXY__.toDocumentType(...args);
        };
    
        // function 
        QDomNotation.prototype.toElement = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.toElement");
          return this.__PROXY__.toElement(...args);
        };
    
        // function 
        QDomNotation.prototype.toEntityReference = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.toEntityReference");
          return this.__PROXY__.toEntityReference(...args);
        };
    
        // function 
        QDomNotation.prototype.toText = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.toText");
          return this.__PROXY__.toText(...args);
        };
    
        // function 
        QDomNotation.prototype.toEntity = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.toEntity");
          return this.__PROXY__.toEntity(...args);
        };
    
        // function 
        QDomNotation.prototype.toNotation = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.toNotation");
          return this.__PROXY__.toNotation(...args);
        };
    
        // function 
        QDomNotation.prototype.toProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.toProcessingInstruction");
          return this.__PROXY__.toProcessingInstruction(...args);
        };
    
        // function 
        QDomNotation.prototype.toCharacterData = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.toCharacterData");
          return this.__PROXY__.toCharacterData(...args);
        };
    
        // function 
        QDomNotation.prototype.toComment = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.toComment");
          return this.__PROXY__.toComment(...args);
        };
    
        // function 
        QDomNotation.prototype.firstChildElement = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.firstChildElement");
          return this.__PROXY__.firstChildElement(...args);
        };
    
        // function 
        QDomNotation.prototype.lastChildElement = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.lastChildElement");
          return this.__PROXY__.lastChildElement(...args);
        };
    
        // function 
        QDomNotation.prototype.previousSiblingElement = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.previousSiblingElement");
          return this.__PROXY__.previousSiblingElement(...args);
        };
    
        // function 
        QDomNotation.prototype.nextSiblingElement = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.nextSiblingElement");
          return this.__PROXY__.nextSiblingElement(...args);
        };
    
        // function 
        QDomNotation.prototype.lineNumber = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.lineNumber");
          return this.__PROXY__.lineNumber(...args);
        };
    
        // function 
        QDomNotation.prototype.columnNumber = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.columnNumber");
          return this.__PROXY__.columnNumber(...args);
        };
    
        // function 
        QDomNotation.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.operator_assign");
          return this.__PROXY__.operator_assign(...args);
        };
    
        // function 
        QDomNotation.prototype.publicId = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.publicId");
          return this.__PROXY__.publicId(...args);
        };
    
        // function 
        QDomNotation.prototype.systemId = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.systemId");
          return this.__PROXY__.systemId(...args);
        };
    
        // function 
        QDomNotation.prototype.nodeType = function(...args) 
          
        {
          //print("JS: QDomNotation.prototype.nodeType");
          return this.__PROXY__.nodeType(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomNotation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomNotation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDomNotation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      