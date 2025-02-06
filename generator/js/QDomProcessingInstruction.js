
      // auto generated
      //var self;

      // class constructor:
      function QDomProcessingInstruction() {
        

        // should be QDomProcessingInstruction_BaseJs.call(this, engine):
        //QDomProcessingInstruction.prototype = new QDomProcessingInstruction_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomProcessingInstruction.getIdStatic()))) {

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
            qWarning("QDomProcessingInstruction.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomProcessingInstruction_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomProcessingInstruction);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomProcessingInstruction_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomProcessingInstruction);
  }

  
  else {
    
        print("QDomProcessingInstruction(): wrong number / type of arguments");
      
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

      //QDomProcessingInstruction.prototype = new QDomProcessingInstruction_BaseJs(engine);
      //QDomProcessingInstruction.prototype = new QDomProcessingInstruction_Wrapper(engine);
      QDomProcessingInstruction.prototype = new Object();

      QDomProcessingInstruction.prototype.toString = function() {
          //return "QDomProcessingInstruction [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomProcessingInstruction [JS]";
        };
      QDomProcessingInstruction.getObjectType = function() {
        return RJSType_QDomProcessingInstruction.getIdStatic();
      };

      QDomProcessingInstruction.prototype.getObjectType = function() {
        return RJSType_QDomProcessingInstruction.getIdStatic();
      };

      QDomProcessingInstruction.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomProcessingInstruction.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QDomNode.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomProcessingInstruction.ElementNode = QDomProcessingInstruction_Wrapper.ElementNode;
QDomProcessingInstruction.AttributeNode = QDomProcessingInstruction_Wrapper.AttributeNode;
QDomProcessingInstruction.TextNode = QDomProcessingInstruction_Wrapper.TextNode;
QDomProcessingInstruction.CDATASectionNode = QDomProcessingInstruction_Wrapper.CDATASectionNode;
QDomProcessingInstruction.EntityReferenceNode = QDomProcessingInstruction_Wrapper.EntityReferenceNode;
QDomProcessingInstruction.EntityNode = QDomProcessingInstruction_Wrapper.EntityNode;
QDomProcessingInstruction.ProcessingInstructionNode = QDomProcessingInstruction_Wrapper.ProcessingInstructionNode;
QDomProcessingInstruction.CommentNode = QDomProcessingInstruction_Wrapper.CommentNode;
QDomProcessingInstruction.DocumentNode = QDomProcessingInstruction_Wrapper.DocumentNode;
QDomProcessingInstruction.DocumentTypeNode = QDomProcessingInstruction_Wrapper.DocumentTypeNode;
QDomProcessingInstruction.DocumentFragmentNode = QDomProcessingInstruction_Wrapper.DocumentFragmentNode;
QDomProcessingInstruction.NotationNode = QDomProcessingInstruction_Wrapper.NotationNode;
QDomProcessingInstruction.BaseNode = QDomProcessingInstruction_Wrapper.BaseNode;
QDomProcessingInstruction.CharacterDataNode = QDomProcessingInstruction_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomProcessingInstruction.EncodingFromDocument = QDomProcessingInstruction_Wrapper.EncodingFromDocument;
QDomProcessingInstruction.EncodingFromTextStream = QDomProcessingInstruction_Wrapper.EncodingFromTextStream;


      // functions:
      
        // function 
        QDomProcessingInstruction.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.operator_equal");
          return this.__PROXY__.operator_equal(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.operator_unequal = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.operator_unequal");
          return this.__PROXY__.operator_unequal(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.insertBefore = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.insertBefore");
          return this.__PROXY__.insertBefore(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.insertAfter = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.insertAfter");
          return this.__PROXY__.insertAfter(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.replaceChild = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.replaceChild");
          return this.__PROXY__.replaceChild(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.removeChild = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.removeChild");
          return this.__PROXY__.removeChild(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.appendChild = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.appendChild");
          return this.__PROXY__.appendChild(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.hasChildNodes = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.hasChildNodes");
          return this.__PROXY__.hasChildNodes(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.cloneNode = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.cloneNode");
          return this.__PROXY__.cloneNode(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.normalize = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.isSupported = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.isSupported");
          return this.__PROXY__.isSupported(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.nodeName = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.nodeName");
          return this.__PROXY__.nodeName(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.parentNode = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.parentNode");
          return this.__PROXY__.parentNode(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.childNodes = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.childNodes");
          return this.__PROXY__.childNodes(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.firstChild = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.firstChild");
          return this.__PROXY__.firstChild(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.lastChild = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.lastChild");
          return this.__PROXY__.lastChild(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.previousSibling = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.previousSibling");
          return this.__PROXY__.previousSibling(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.nextSibling = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.nextSibling");
          return this.__PROXY__.nextSibling(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.attributes = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.attributes");
          return this.__PROXY__.attributes(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.ownerDocument = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.ownerDocument");
          return this.__PROXY__.ownerDocument(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.namespaceURI = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.namespaceURI");
          return this.__PROXY__.namespaceURI(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.localName = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.localName");
          return this.__PROXY__.localName(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.hasAttributes = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.hasAttributes");
          return this.__PROXY__.hasAttributes(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.nodeValue = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.nodeValue");
          return this.__PROXY__.nodeValue(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.setNodeValue = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.setNodeValue");
          return this.__PROXY__.setNodeValue(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.prefix = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.prefix");
          return this.__PROXY__.prefix(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.setPrefix = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.setPrefix");
          return this.__PROXY__.setPrefix(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.isAttr = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.isAttr");
          return this.__PROXY__.isAttr(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.isCDATASection = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.isCDATASection");
          return this.__PROXY__.isCDATASection(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.isDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.isDocumentFragment");
          return this.__PROXY__.isDocumentFragment(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.isDocument = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.isDocument");
          return this.__PROXY__.isDocument(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.isDocumentType = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.isDocumentType");
          return this.__PROXY__.isDocumentType(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.isElement = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.isElement");
          return this.__PROXY__.isElement(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.isEntityReference = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.isEntityReference");
          return this.__PROXY__.isEntityReference(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.isText = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.isText");
          return this.__PROXY__.isText(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.isEntity = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.isEntity");
          return this.__PROXY__.isEntity(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.isNotation = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.isNotation");
          return this.__PROXY__.isNotation(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.isProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.isProcessingInstruction");
          return this.__PROXY__.isProcessingInstruction(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.isCharacterData = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.isCharacterData");
          return this.__PROXY__.isCharacterData(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.isComment = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.isComment");
          return this.__PROXY__.isComment(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.namedItem = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.namedItem");
          return this.__PROXY__.namedItem(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.isNull = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.clear = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.toAttr = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.toAttr");
          return this.__PROXY__.toAttr(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.toCDATASection = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.toCDATASection");
          return this.__PROXY__.toCDATASection(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.toDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.toDocumentFragment");
          return this.__PROXY__.toDocumentFragment(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.toDocument = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.toDocument");
          return this.__PROXY__.toDocument(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.toDocumentType = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.toDocumentType");
          return this.__PROXY__.toDocumentType(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.toElement = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.toElement");
          return this.__PROXY__.toElement(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.toEntityReference = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.toEntityReference");
          return this.__PROXY__.toEntityReference(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.toText = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.toText");
          return this.__PROXY__.toText(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.toEntity = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.toEntity");
          return this.__PROXY__.toEntity(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.toNotation = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.toNotation");
          return this.__PROXY__.toNotation(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.toProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.toProcessingInstruction");
          return this.__PROXY__.toProcessingInstruction(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.toCharacterData = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.toCharacterData");
          return this.__PROXY__.toCharacterData(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.toComment = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.toComment");
          return this.__PROXY__.toComment(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.firstChildElement = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.firstChildElement");
          return this.__PROXY__.firstChildElement(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.lastChildElement = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.lastChildElement");
          return this.__PROXY__.lastChildElement(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.previousSiblingElement = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.previousSiblingElement");
          return this.__PROXY__.previousSiblingElement(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.nextSiblingElement = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.nextSiblingElement");
          return this.__PROXY__.nextSiblingElement(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.lineNumber = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.lineNumber");
          return this.__PROXY__.lineNumber(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.columnNumber = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.columnNumber");
          return this.__PROXY__.columnNumber(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.operator_assign");
          return this.__PROXY__.operator_assign(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.target = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.target");
          return this.__PROXY__.target(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.data = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.data");
          return this.__PROXY__.data(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.setData = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        QDomProcessingInstruction.prototype.nodeType = function(...args) 
          
        {
          //print("JS: QDomProcessingInstruction.prototype.nodeType");
          return this.__PROXY__.nodeType(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomProcessingInstruction.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomProcessingInstruction.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDomProcessingInstruction.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      