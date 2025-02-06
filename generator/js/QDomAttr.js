
      // auto generated
      //var self;

      // class constructor:
      function QDomAttr() {
        

        // should be QDomAttr_BaseJs.call(this, engine):
        //QDomAttr.prototype = new QDomAttr_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomAttr.getIdStatic()))) {

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
            qWarning("QDomAttr.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomAttr_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomAttr);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomAttr_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomAttr);
  }

  
  else {
    
        print("QDomAttr(): wrong number / type of arguments");
      
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

      //QDomAttr.prototype = new QDomAttr_BaseJs(engine);
      //QDomAttr.prototype = new QDomAttr_Wrapper(engine);
      QDomAttr.prototype = new Object();

      QDomAttr.prototype.toString = function() {
          //return "QDomAttr [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomAttr [JS]";
        };
      QDomAttr.getObjectType = function() {
        return RJSType_QDomAttr.getIdStatic();
      };

      QDomAttr.prototype.getObjectType = function() {
        return RJSType_QDomAttr.getIdStatic();
      };

      QDomAttr.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomAttr.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QDomNode.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomAttr.ElementNode = QDomAttr_Wrapper.ElementNode;
QDomAttr.AttributeNode = QDomAttr_Wrapper.AttributeNode;
QDomAttr.TextNode = QDomAttr_Wrapper.TextNode;
QDomAttr.CDATASectionNode = QDomAttr_Wrapper.CDATASectionNode;
QDomAttr.EntityReferenceNode = QDomAttr_Wrapper.EntityReferenceNode;
QDomAttr.EntityNode = QDomAttr_Wrapper.EntityNode;
QDomAttr.ProcessingInstructionNode = QDomAttr_Wrapper.ProcessingInstructionNode;
QDomAttr.CommentNode = QDomAttr_Wrapper.CommentNode;
QDomAttr.DocumentNode = QDomAttr_Wrapper.DocumentNode;
QDomAttr.DocumentTypeNode = QDomAttr_Wrapper.DocumentTypeNode;
QDomAttr.DocumentFragmentNode = QDomAttr_Wrapper.DocumentFragmentNode;
QDomAttr.NotationNode = QDomAttr_Wrapper.NotationNode;
QDomAttr.BaseNode = QDomAttr_Wrapper.BaseNode;
QDomAttr.CharacterDataNode = QDomAttr_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomAttr.EncodingFromDocument = QDomAttr_Wrapper.EncodingFromDocument;
QDomAttr.EncodingFromTextStream = QDomAttr_Wrapper.EncodingFromTextStream;


      // functions:
      
        // function 
        QDomAttr.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.operator_equal");
          return this.__PROXY__.operator_equal(...args);
        };
    
        // function 
        QDomAttr.prototype.operator_unequal = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.operator_unequal");
          return this.__PROXY__.operator_unequal(...args);
        };
    
        // function 
        QDomAttr.prototype.insertBefore = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.insertBefore");
          return this.__PROXY__.insertBefore(...args);
        };
    
        // function 
        QDomAttr.prototype.insertAfter = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.insertAfter");
          return this.__PROXY__.insertAfter(...args);
        };
    
        // function 
        QDomAttr.prototype.replaceChild = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.replaceChild");
          return this.__PROXY__.replaceChild(...args);
        };
    
        // function 
        QDomAttr.prototype.removeChild = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.removeChild");
          return this.__PROXY__.removeChild(...args);
        };
    
        // function 
        QDomAttr.prototype.appendChild = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.appendChild");
          return this.__PROXY__.appendChild(...args);
        };
    
        // function 
        QDomAttr.prototype.hasChildNodes = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.hasChildNodes");
          return this.__PROXY__.hasChildNodes(...args);
        };
    
        // function 
        QDomAttr.prototype.cloneNode = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.cloneNode");
          return this.__PROXY__.cloneNode(...args);
        };
    
        // function 
        QDomAttr.prototype.normalize = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        QDomAttr.prototype.isSupported = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.isSupported");
          return this.__PROXY__.isSupported(...args);
        };
    
        // function 
        QDomAttr.prototype.nodeName = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.nodeName");
          return this.__PROXY__.nodeName(...args);
        };
    
        // function 
        QDomAttr.prototype.parentNode = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.parentNode");
          return this.__PROXY__.parentNode(...args);
        };
    
        // function 
        QDomAttr.prototype.childNodes = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.childNodes");
          return this.__PROXY__.childNodes(...args);
        };
    
        // function 
        QDomAttr.prototype.firstChild = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.firstChild");
          return this.__PROXY__.firstChild(...args);
        };
    
        // function 
        QDomAttr.prototype.lastChild = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.lastChild");
          return this.__PROXY__.lastChild(...args);
        };
    
        // function 
        QDomAttr.prototype.previousSibling = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.previousSibling");
          return this.__PROXY__.previousSibling(...args);
        };
    
        // function 
        QDomAttr.prototype.nextSibling = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.nextSibling");
          return this.__PROXY__.nextSibling(...args);
        };
    
        // function 
        QDomAttr.prototype.attributes = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.attributes");
          return this.__PROXY__.attributes(...args);
        };
    
        // function 
        QDomAttr.prototype.ownerDocument = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.ownerDocument");
          return this.__PROXY__.ownerDocument(...args);
        };
    
        // function 
        QDomAttr.prototype.namespaceURI = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.namespaceURI");
          return this.__PROXY__.namespaceURI(...args);
        };
    
        // function 
        QDomAttr.prototype.localName = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.localName");
          return this.__PROXY__.localName(...args);
        };
    
        // function 
        QDomAttr.prototype.hasAttributes = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.hasAttributes");
          return this.__PROXY__.hasAttributes(...args);
        };
    
        // function 
        QDomAttr.prototype.nodeValue = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.nodeValue");
          return this.__PROXY__.nodeValue(...args);
        };
    
        // function 
        QDomAttr.prototype.setNodeValue = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.setNodeValue");
          return this.__PROXY__.setNodeValue(...args);
        };
    
        // function 
        QDomAttr.prototype.prefix = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.prefix");
          return this.__PROXY__.prefix(...args);
        };
    
        // function 
        QDomAttr.prototype.setPrefix = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.setPrefix");
          return this.__PROXY__.setPrefix(...args);
        };
    
        // function 
        QDomAttr.prototype.isAttr = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.isAttr");
          return this.__PROXY__.isAttr(...args);
        };
    
        // function 
        QDomAttr.prototype.isCDATASection = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.isCDATASection");
          return this.__PROXY__.isCDATASection(...args);
        };
    
        // function 
        QDomAttr.prototype.isDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.isDocumentFragment");
          return this.__PROXY__.isDocumentFragment(...args);
        };
    
        // function 
        QDomAttr.prototype.isDocument = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.isDocument");
          return this.__PROXY__.isDocument(...args);
        };
    
        // function 
        QDomAttr.prototype.isDocumentType = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.isDocumentType");
          return this.__PROXY__.isDocumentType(...args);
        };
    
        // function 
        QDomAttr.prototype.isElement = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.isElement");
          return this.__PROXY__.isElement(...args);
        };
    
        // function 
        QDomAttr.prototype.isEntityReference = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.isEntityReference");
          return this.__PROXY__.isEntityReference(...args);
        };
    
        // function 
        QDomAttr.prototype.isText = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.isText");
          return this.__PROXY__.isText(...args);
        };
    
        // function 
        QDomAttr.prototype.isEntity = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.isEntity");
          return this.__PROXY__.isEntity(...args);
        };
    
        // function 
        QDomAttr.prototype.isNotation = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.isNotation");
          return this.__PROXY__.isNotation(...args);
        };
    
        // function 
        QDomAttr.prototype.isProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.isProcessingInstruction");
          return this.__PROXY__.isProcessingInstruction(...args);
        };
    
        // function 
        QDomAttr.prototype.isCharacterData = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.isCharacterData");
          return this.__PROXY__.isCharacterData(...args);
        };
    
        // function 
        QDomAttr.prototype.isComment = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.isComment");
          return this.__PROXY__.isComment(...args);
        };
    
        // function 
        QDomAttr.prototype.namedItem = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.namedItem");
          return this.__PROXY__.namedItem(...args);
        };
    
        // function 
        QDomAttr.prototype.isNull = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QDomAttr.prototype.clear = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QDomAttr.prototype.toAttr = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.toAttr");
          return this.__PROXY__.toAttr(...args);
        };
    
        // function 
        QDomAttr.prototype.toCDATASection = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.toCDATASection");
          return this.__PROXY__.toCDATASection(...args);
        };
    
        // function 
        QDomAttr.prototype.toDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.toDocumentFragment");
          return this.__PROXY__.toDocumentFragment(...args);
        };
    
        // function 
        QDomAttr.prototype.toDocument = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.toDocument");
          return this.__PROXY__.toDocument(...args);
        };
    
        // function 
        QDomAttr.prototype.toDocumentType = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.toDocumentType");
          return this.__PROXY__.toDocumentType(...args);
        };
    
        // function 
        QDomAttr.prototype.toElement = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.toElement");
          return this.__PROXY__.toElement(...args);
        };
    
        // function 
        QDomAttr.prototype.toEntityReference = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.toEntityReference");
          return this.__PROXY__.toEntityReference(...args);
        };
    
        // function 
        QDomAttr.prototype.toText = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.toText");
          return this.__PROXY__.toText(...args);
        };
    
        // function 
        QDomAttr.prototype.toEntity = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.toEntity");
          return this.__PROXY__.toEntity(...args);
        };
    
        // function 
        QDomAttr.prototype.toNotation = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.toNotation");
          return this.__PROXY__.toNotation(...args);
        };
    
        // function 
        QDomAttr.prototype.toProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.toProcessingInstruction");
          return this.__PROXY__.toProcessingInstruction(...args);
        };
    
        // function 
        QDomAttr.prototype.toCharacterData = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.toCharacterData");
          return this.__PROXY__.toCharacterData(...args);
        };
    
        // function 
        QDomAttr.prototype.toComment = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.toComment");
          return this.__PROXY__.toComment(...args);
        };
    
        // function 
        QDomAttr.prototype.firstChildElement = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.firstChildElement");
          return this.__PROXY__.firstChildElement(...args);
        };
    
        // function 
        QDomAttr.prototype.lastChildElement = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.lastChildElement");
          return this.__PROXY__.lastChildElement(...args);
        };
    
        // function 
        QDomAttr.prototype.previousSiblingElement = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.previousSiblingElement");
          return this.__PROXY__.previousSiblingElement(...args);
        };
    
        // function 
        QDomAttr.prototype.nextSiblingElement = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.nextSiblingElement");
          return this.__PROXY__.nextSiblingElement(...args);
        };
    
        // function 
        QDomAttr.prototype.lineNumber = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.lineNumber");
          return this.__PROXY__.lineNumber(...args);
        };
    
        // function 
        QDomAttr.prototype.columnNumber = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.columnNumber");
          return this.__PROXY__.columnNumber(...args);
        };
    
        // function 
        QDomAttr.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.operator_assign");
          return this.__PROXY__.operator_assign(...args);
        };
    
        // function 
        QDomAttr.prototype.name = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.name");
          return this.__PROXY__.name(...args);
        };
    
        // function 
        QDomAttr.prototype.specified = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.specified");
          return this.__PROXY__.specified(...args);
        };
    
        // function 
        QDomAttr.prototype.ownerElement = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.ownerElement");
          return this.__PROXY__.ownerElement(...args);
        };
    
        // function 
        QDomAttr.prototype.value = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.value");
          return this.__PROXY__.value(...args);
        };
    
        // function 
        QDomAttr.prototype.setValue = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.setValue");
          return this.__PROXY__.setValue(...args);
        };
    
        // function 
        QDomAttr.prototype.nodeType = function(...args) 
          
        {
          //print("JS: QDomAttr.prototype.nodeType");
          return this.__PROXY__.nodeType(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomAttr.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomAttr.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDomAttr.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      