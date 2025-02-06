
      // auto generated
      //var self;

      // class constructor:
      function QDomCDATASection() {
        

        // should be QDomCDATASection_BaseJs.call(this, engine):
        //QDomCDATASection.prototype = new QDomCDATASection_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomCDATASection.getIdStatic()))) {

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
            qWarning("QDomCDATASection.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomCDATASection_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomCDATASection);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomCDATASection_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomCDATASection);
  }

  
  else {
    
        print("QDomCDATASection(): wrong number / type of arguments");
      
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

      //QDomCDATASection.prototype = new QDomCDATASection_BaseJs(engine);
      //QDomCDATASection.prototype = new QDomCDATASection_Wrapper(engine);
      QDomCDATASection.prototype = new Object();

      QDomCDATASection.prototype.toString = function() {
          //return "QDomCDATASection [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomCDATASection [JS]";
        };
      QDomCDATASection.getObjectType = function() {
        return RJSType_QDomCDATASection.getIdStatic();
      };

      QDomCDATASection.prototype.getObjectType = function() {
        return RJSType_QDomCDATASection.getIdStatic();
      };

      QDomCDATASection.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomCDATASection.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QDomNode.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QDomCharacterData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QDomText.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomCDATASection.ElementNode = QDomCDATASection_Wrapper.ElementNode;
QDomCDATASection.AttributeNode = QDomCDATASection_Wrapper.AttributeNode;
QDomCDATASection.TextNode = QDomCDATASection_Wrapper.TextNode;
QDomCDATASection.CDATASectionNode = QDomCDATASection_Wrapper.CDATASectionNode;
QDomCDATASection.EntityReferenceNode = QDomCDATASection_Wrapper.EntityReferenceNode;
QDomCDATASection.EntityNode = QDomCDATASection_Wrapper.EntityNode;
QDomCDATASection.ProcessingInstructionNode = QDomCDATASection_Wrapper.ProcessingInstructionNode;
QDomCDATASection.CommentNode = QDomCDATASection_Wrapper.CommentNode;
QDomCDATASection.DocumentNode = QDomCDATASection_Wrapper.DocumentNode;
QDomCDATASection.DocumentTypeNode = QDomCDATASection_Wrapper.DocumentTypeNode;
QDomCDATASection.DocumentFragmentNode = QDomCDATASection_Wrapper.DocumentFragmentNode;
QDomCDATASection.NotationNode = QDomCDATASection_Wrapper.NotationNode;
QDomCDATASection.BaseNode = QDomCDATASection_Wrapper.BaseNode;
QDomCDATASection.CharacterDataNode = QDomCDATASection_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomCDATASection.EncodingFromDocument = QDomCDATASection_Wrapper.EncodingFromDocument;
QDomCDATASection.EncodingFromTextStream = QDomCDATASection_Wrapper.EncodingFromTextStream;


      // functions:
      
        // function 
        QDomCDATASection.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.operator_equal");
          return this.__PROXY__.operator_equal(...args);
        };
    
        // function 
        QDomCDATASection.prototype.operator_unequal = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.operator_unequal");
          return this.__PROXY__.operator_unequal(...args);
        };
    
        // function 
        QDomCDATASection.prototype.insertBefore = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.insertBefore");
          return this.__PROXY__.insertBefore(...args);
        };
    
        // function 
        QDomCDATASection.prototype.insertAfter = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.insertAfter");
          return this.__PROXY__.insertAfter(...args);
        };
    
        // function 
        QDomCDATASection.prototype.replaceChild = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.replaceChild");
          return this.__PROXY__.replaceChild(...args);
        };
    
        // function 
        QDomCDATASection.prototype.removeChild = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.removeChild");
          return this.__PROXY__.removeChild(...args);
        };
    
        // function 
        QDomCDATASection.prototype.appendChild = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.appendChild");
          return this.__PROXY__.appendChild(...args);
        };
    
        // function 
        QDomCDATASection.prototype.hasChildNodes = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.hasChildNodes");
          return this.__PROXY__.hasChildNodes(...args);
        };
    
        // function 
        QDomCDATASection.prototype.cloneNode = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.cloneNode");
          return this.__PROXY__.cloneNode(...args);
        };
    
        // function 
        QDomCDATASection.prototype.normalize = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        QDomCDATASection.prototype.isSupported = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.isSupported");
          return this.__PROXY__.isSupported(...args);
        };
    
        // function 
        QDomCDATASection.prototype.nodeName = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.nodeName");
          return this.__PROXY__.nodeName(...args);
        };
    
        // function 
        QDomCDATASection.prototype.parentNode = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.parentNode");
          return this.__PROXY__.parentNode(...args);
        };
    
        // function 
        QDomCDATASection.prototype.childNodes = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.childNodes");
          return this.__PROXY__.childNodes(...args);
        };
    
        // function 
        QDomCDATASection.prototype.firstChild = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.firstChild");
          return this.__PROXY__.firstChild(...args);
        };
    
        // function 
        QDomCDATASection.prototype.lastChild = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.lastChild");
          return this.__PROXY__.lastChild(...args);
        };
    
        // function 
        QDomCDATASection.prototype.previousSibling = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.previousSibling");
          return this.__PROXY__.previousSibling(...args);
        };
    
        // function 
        QDomCDATASection.prototype.nextSibling = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.nextSibling");
          return this.__PROXY__.nextSibling(...args);
        };
    
        // function 
        QDomCDATASection.prototype.attributes = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.attributes");
          return this.__PROXY__.attributes(...args);
        };
    
        // function 
        QDomCDATASection.prototype.ownerDocument = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.ownerDocument");
          return this.__PROXY__.ownerDocument(...args);
        };
    
        // function 
        QDomCDATASection.prototype.namespaceURI = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.namespaceURI");
          return this.__PROXY__.namespaceURI(...args);
        };
    
        // function 
        QDomCDATASection.prototype.localName = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.localName");
          return this.__PROXY__.localName(...args);
        };
    
        // function 
        QDomCDATASection.prototype.hasAttributes = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.hasAttributes");
          return this.__PROXY__.hasAttributes(...args);
        };
    
        // function 
        QDomCDATASection.prototype.nodeValue = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.nodeValue");
          return this.__PROXY__.nodeValue(...args);
        };
    
        // function 
        QDomCDATASection.prototype.setNodeValue = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.setNodeValue");
          return this.__PROXY__.setNodeValue(...args);
        };
    
        // function 
        QDomCDATASection.prototype.prefix = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.prefix");
          return this.__PROXY__.prefix(...args);
        };
    
        // function 
        QDomCDATASection.prototype.setPrefix = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.setPrefix");
          return this.__PROXY__.setPrefix(...args);
        };
    
        // function 
        QDomCDATASection.prototype.isAttr = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.isAttr");
          return this.__PROXY__.isAttr(...args);
        };
    
        // function 
        QDomCDATASection.prototype.isCDATASection = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.isCDATASection");
          return this.__PROXY__.isCDATASection(...args);
        };
    
        // function 
        QDomCDATASection.prototype.isDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.isDocumentFragment");
          return this.__PROXY__.isDocumentFragment(...args);
        };
    
        // function 
        QDomCDATASection.prototype.isDocument = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.isDocument");
          return this.__PROXY__.isDocument(...args);
        };
    
        // function 
        QDomCDATASection.prototype.isDocumentType = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.isDocumentType");
          return this.__PROXY__.isDocumentType(...args);
        };
    
        // function 
        QDomCDATASection.prototype.isElement = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.isElement");
          return this.__PROXY__.isElement(...args);
        };
    
        // function 
        QDomCDATASection.prototype.isEntityReference = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.isEntityReference");
          return this.__PROXY__.isEntityReference(...args);
        };
    
        // function 
        QDomCDATASection.prototype.isText = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.isText");
          return this.__PROXY__.isText(...args);
        };
    
        // function 
        QDomCDATASection.prototype.isEntity = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.isEntity");
          return this.__PROXY__.isEntity(...args);
        };
    
        // function 
        QDomCDATASection.prototype.isNotation = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.isNotation");
          return this.__PROXY__.isNotation(...args);
        };
    
        // function 
        QDomCDATASection.prototype.isProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.isProcessingInstruction");
          return this.__PROXY__.isProcessingInstruction(...args);
        };
    
        // function 
        QDomCDATASection.prototype.isCharacterData = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.isCharacterData");
          return this.__PROXY__.isCharacterData(...args);
        };
    
        // function 
        QDomCDATASection.prototype.isComment = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.isComment");
          return this.__PROXY__.isComment(...args);
        };
    
        // function 
        QDomCDATASection.prototype.namedItem = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.namedItem");
          return this.__PROXY__.namedItem(...args);
        };
    
        // function 
        QDomCDATASection.prototype.isNull = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QDomCDATASection.prototype.clear = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QDomCDATASection.prototype.toAttr = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.toAttr");
          return this.__PROXY__.toAttr(...args);
        };
    
        // function 
        QDomCDATASection.prototype.toCDATASection = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.toCDATASection");
          return this.__PROXY__.toCDATASection(...args);
        };
    
        // function 
        QDomCDATASection.prototype.toDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.toDocumentFragment");
          return this.__PROXY__.toDocumentFragment(...args);
        };
    
        // function 
        QDomCDATASection.prototype.toDocument = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.toDocument");
          return this.__PROXY__.toDocument(...args);
        };
    
        // function 
        QDomCDATASection.prototype.toDocumentType = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.toDocumentType");
          return this.__PROXY__.toDocumentType(...args);
        };
    
        // function 
        QDomCDATASection.prototype.toElement = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.toElement");
          return this.__PROXY__.toElement(...args);
        };
    
        // function 
        QDomCDATASection.prototype.toEntityReference = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.toEntityReference");
          return this.__PROXY__.toEntityReference(...args);
        };
    
        // function 
        QDomCDATASection.prototype.toText = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.toText");
          return this.__PROXY__.toText(...args);
        };
    
        // function 
        QDomCDATASection.prototype.toEntity = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.toEntity");
          return this.__PROXY__.toEntity(...args);
        };
    
        // function 
        QDomCDATASection.prototype.toNotation = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.toNotation");
          return this.__PROXY__.toNotation(...args);
        };
    
        // function 
        QDomCDATASection.prototype.toProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.toProcessingInstruction");
          return this.__PROXY__.toProcessingInstruction(...args);
        };
    
        // function 
        QDomCDATASection.prototype.toCharacterData = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.toCharacterData");
          return this.__PROXY__.toCharacterData(...args);
        };
    
        // function 
        QDomCDATASection.prototype.toComment = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.toComment");
          return this.__PROXY__.toComment(...args);
        };
    
        // function 
        QDomCDATASection.prototype.firstChildElement = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.firstChildElement");
          return this.__PROXY__.firstChildElement(...args);
        };
    
        // function 
        QDomCDATASection.prototype.lastChildElement = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.lastChildElement");
          return this.__PROXY__.lastChildElement(...args);
        };
    
        // function 
        QDomCDATASection.prototype.previousSiblingElement = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.previousSiblingElement");
          return this.__PROXY__.previousSiblingElement(...args);
        };
    
        // function 
        QDomCDATASection.prototype.nextSiblingElement = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.nextSiblingElement");
          return this.__PROXY__.nextSiblingElement(...args);
        };
    
        // function 
        QDomCDATASection.prototype.lineNumber = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.lineNumber");
          return this.__PROXY__.lineNumber(...args);
        };
    
        // function 
        QDomCDATASection.prototype.columnNumber = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.columnNumber");
          return this.__PROXY__.columnNumber(...args);
        };
    
        // function 
        QDomCDATASection.prototype.substringData = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.substringData");
          return this.__PROXY__.substringData(...args);
        };
    
        // function 
        QDomCDATASection.prototype.appendData = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.appendData");
          return this.__PROXY__.appendData(...args);
        };
    
        // function 
        QDomCDATASection.prototype.insertData = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.insertData");
          return this.__PROXY__.insertData(...args);
        };
    
        // function 
        QDomCDATASection.prototype.deleteData = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.deleteData");
          return this.__PROXY__.deleteData(...args);
        };
    
        // function 
        QDomCDATASection.prototype.replaceData = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.replaceData");
          return this.__PROXY__.replaceData(...args);
        };
    
        // function 
        QDomCDATASection.prototype.length = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.length");
          return this.__PROXY__.length(...args);
        };
    
        // function 
        QDomCDATASection.prototype.data = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.data");
          return this.__PROXY__.data(...args);
        };
    
        // function 
        QDomCDATASection.prototype.setData = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        QDomCDATASection.prototype.splitText = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.splitText");
          return this.__PROXY__.splitText(...args);
        };
    
        // function 
        QDomCDATASection.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.operator_assign");
          return this.__PROXY__.operator_assign(...args);
        };
    
        // function 
        QDomCDATASection.prototype.nodeType = function(...args) 
          
        {
          //print("JS: QDomCDATASection.prototype.nodeType");
          return this.__PROXY__.nodeType(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomCDATASection.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomCDATASection.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDomCDATASection.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      