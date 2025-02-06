
      // auto generated
      //var self;

      // class constructor:
      function QDomDocumentFragment() {
        

        // should be QDomDocumentFragment_BaseJs.call(this, engine):
        //QDomDocumentFragment.prototype = new QDomDocumentFragment_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomDocumentFragment.getIdStatic()))) {

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
            qWarning("QDomDocumentFragment.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomDocumentFragment_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomDocumentFragment);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomDocumentFragment_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomDocumentFragment);
  }

  
  else {
    
        print("QDomDocumentFragment(): wrong number / type of arguments");
      
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

      //QDomDocumentFragment.prototype = new QDomDocumentFragment_BaseJs(engine);
      //QDomDocumentFragment.prototype = new QDomDocumentFragment_Wrapper(engine);
      QDomDocumentFragment.prototype = new Object();

      QDomDocumentFragment.prototype.toString = function() {
          //return "QDomDocumentFragment [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomDocumentFragment [JS]";
        };
      QDomDocumentFragment.getObjectType = function() {
        return RJSType_QDomDocumentFragment.getIdStatic();
      };

      QDomDocumentFragment.prototype.getObjectType = function() {
        return RJSType_QDomDocumentFragment.getIdStatic();
      };

      QDomDocumentFragment.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomDocumentFragment.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QDomNode.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomDocumentFragment.ElementNode = QDomDocumentFragment_Wrapper.ElementNode;
QDomDocumentFragment.AttributeNode = QDomDocumentFragment_Wrapper.AttributeNode;
QDomDocumentFragment.TextNode = QDomDocumentFragment_Wrapper.TextNode;
QDomDocumentFragment.CDATASectionNode = QDomDocumentFragment_Wrapper.CDATASectionNode;
QDomDocumentFragment.EntityReferenceNode = QDomDocumentFragment_Wrapper.EntityReferenceNode;
QDomDocumentFragment.EntityNode = QDomDocumentFragment_Wrapper.EntityNode;
QDomDocumentFragment.ProcessingInstructionNode = QDomDocumentFragment_Wrapper.ProcessingInstructionNode;
QDomDocumentFragment.CommentNode = QDomDocumentFragment_Wrapper.CommentNode;
QDomDocumentFragment.DocumentNode = QDomDocumentFragment_Wrapper.DocumentNode;
QDomDocumentFragment.DocumentTypeNode = QDomDocumentFragment_Wrapper.DocumentTypeNode;
QDomDocumentFragment.DocumentFragmentNode = QDomDocumentFragment_Wrapper.DocumentFragmentNode;
QDomDocumentFragment.NotationNode = QDomDocumentFragment_Wrapper.NotationNode;
QDomDocumentFragment.BaseNode = QDomDocumentFragment_Wrapper.BaseNode;
QDomDocumentFragment.CharacterDataNode = QDomDocumentFragment_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomDocumentFragment.EncodingFromDocument = QDomDocumentFragment_Wrapper.EncodingFromDocument;
QDomDocumentFragment.EncodingFromTextStream = QDomDocumentFragment_Wrapper.EncodingFromTextStream;


      // functions:
      
        // function 
        QDomDocumentFragment.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.operator_equal");
          return this.__PROXY__.operator_equal(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.operator_unequal = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.operator_unequal");
          return this.__PROXY__.operator_unequal(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.insertBefore = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.insertBefore");
          return this.__PROXY__.insertBefore(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.insertAfter = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.insertAfter");
          return this.__PROXY__.insertAfter(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.replaceChild = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.replaceChild");
          return this.__PROXY__.replaceChild(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.removeChild = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.removeChild");
          return this.__PROXY__.removeChild(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.appendChild = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.appendChild");
          return this.__PROXY__.appendChild(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.hasChildNodes = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.hasChildNodes");
          return this.__PROXY__.hasChildNodes(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.cloneNode = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.cloneNode");
          return this.__PROXY__.cloneNode(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.normalize = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.isSupported = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.isSupported");
          return this.__PROXY__.isSupported(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.nodeName = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.nodeName");
          return this.__PROXY__.nodeName(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.parentNode = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.parentNode");
          return this.__PROXY__.parentNode(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.childNodes = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.childNodes");
          return this.__PROXY__.childNodes(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.firstChild = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.firstChild");
          return this.__PROXY__.firstChild(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.lastChild = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.lastChild");
          return this.__PROXY__.lastChild(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.previousSibling = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.previousSibling");
          return this.__PROXY__.previousSibling(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.nextSibling = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.nextSibling");
          return this.__PROXY__.nextSibling(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.attributes = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.attributes");
          return this.__PROXY__.attributes(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.ownerDocument = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.ownerDocument");
          return this.__PROXY__.ownerDocument(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.namespaceURI = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.namespaceURI");
          return this.__PROXY__.namespaceURI(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.localName = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.localName");
          return this.__PROXY__.localName(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.hasAttributes = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.hasAttributes");
          return this.__PROXY__.hasAttributes(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.nodeValue = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.nodeValue");
          return this.__PROXY__.nodeValue(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.setNodeValue = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.setNodeValue");
          return this.__PROXY__.setNodeValue(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.prefix = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.prefix");
          return this.__PROXY__.prefix(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.setPrefix = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.setPrefix");
          return this.__PROXY__.setPrefix(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.isAttr = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.isAttr");
          return this.__PROXY__.isAttr(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.isCDATASection = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.isCDATASection");
          return this.__PROXY__.isCDATASection(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.isDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.isDocumentFragment");
          return this.__PROXY__.isDocumentFragment(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.isDocument = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.isDocument");
          return this.__PROXY__.isDocument(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.isDocumentType = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.isDocumentType");
          return this.__PROXY__.isDocumentType(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.isElement = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.isElement");
          return this.__PROXY__.isElement(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.isEntityReference = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.isEntityReference");
          return this.__PROXY__.isEntityReference(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.isText = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.isText");
          return this.__PROXY__.isText(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.isEntity = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.isEntity");
          return this.__PROXY__.isEntity(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.isNotation = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.isNotation");
          return this.__PROXY__.isNotation(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.isProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.isProcessingInstruction");
          return this.__PROXY__.isProcessingInstruction(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.isCharacterData = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.isCharacterData");
          return this.__PROXY__.isCharacterData(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.isComment = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.isComment");
          return this.__PROXY__.isComment(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.namedItem = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.namedItem");
          return this.__PROXY__.namedItem(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.isNull = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.clear = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.toAttr = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.toAttr");
          return this.__PROXY__.toAttr(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.toCDATASection = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.toCDATASection");
          return this.__PROXY__.toCDATASection(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.toDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.toDocumentFragment");
          return this.__PROXY__.toDocumentFragment(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.toDocument = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.toDocument");
          return this.__PROXY__.toDocument(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.toDocumentType = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.toDocumentType");
          return this.__PROXY__.toDocumentType(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.toElement = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.toElement");
          return this.__PROXY__.toElement(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.toEntityReference = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.toEntityReference");
          return this.__PROXY__.toEntityReference(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.toText = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.toText");
          return this.__PROXY__.toText(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.toEntity = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.toEntity");
          return this.__PROXY__.toEntity(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.toNotation = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.toNotation");
          return this.__PROXY__.toNotation(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.toProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.toProcessingInstruction");
          return this.__PROXY__.toProcessingInstruction(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.toCharacterData = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.toCharacterData");
          return this.__PROXY__.toCharacterData(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.toComment = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.toComment");
          return this.__PROXY__.toComment(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.firstChildElement = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.firstChildElement");
          return this.__PROXY__.firstChildElement(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.lastChildElement = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.lastChildElement");
          return this.__PROXY__.lastChildElement(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.previousSiblingElement = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.previousSiblingElement");
          return this.__PROXY__.previousSiblingElement(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.nextSiblingElement = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.nextSiblingElement");
          return this.__PROXY__.nextSiblingElement(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.lineNumber = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.lineNumber");
          return this.__PROXY__.lineNumber(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.columnNumber = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.columnNumber");
          return this.__PROXY__.columnNumber(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.operator_assign");
          return this.__PROXY__.operator_assign(...args);
        };
    
        // function 
        QDomDocumentFragment.prototype.nodeType = function(...args) 
          
        {
          //print("JS: QDomDocumentFragment.prototype.nodeType");
          return this.__PROXY__.nodeType(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomDocumentFragment.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomDocumentFragment.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDomDocumentFragment.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      