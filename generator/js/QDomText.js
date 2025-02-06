
      // auto generated
      //var self;

      // class constructor:
      function QDomText() {
        

        // should be QDomText_BaseJs.call(this, engine):
        //QDomText.prototype = new QDomText_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomText.getIdStatic()))) {

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
            qWarning("QDomText.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomText_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomText);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomText_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomText);
  }

  
  else {
    
        print("QDomText(): wrong number / type of arguments");
      
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

      //QDomText.prototype = new QDomText_BaseJs(engine);
      //QDomText.prototype = new QDomText_Wrapper(engine);
      QDomText.prototype = new Object();

      QDomText.prototype.toString = function() {
          //return "QDomText [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomText [JS]";
        };
      QDomText.getObjectType = function() {
        return RJSType_QDomText.getIdStatic();
      };

      QDomText.prototype.getObjectType = function() {
        return RJSType_QDomText.getIdStatic();
      };

      QDomText.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomText.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QDomNode.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QDomCharacterData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomText.ElementNode = QDomText_Wrapper.ElementNode;
QDomText.AttributeNode = QDomText_Wrapper.AttributeNode;
QDomText.TextNode = QDomText_Wrapper.TextNode;
QDomText.CDATASectionNode = QDomText_Wrapper.CDATASectionNode;
QDomText.EntityReferenceNode = QDomText_Wrapper.EntityReferenceNode;
QDomText.EntityNode = QDomText_Wrapper.EntityNode;
QDomText.ProcessingInstructionNode = QDomText_Wrapper.ProcessingInstructionNode;
QDomText.CommentNode = QDomText_Wrapper.CommentNode;
QDomText.DocumentNode = QDomText_Wrapper.DocumentNode;
QDomText.DocumentTypeNode = QDomText_Wrapper.DocumentTypeNode;
QDomText.DocumentFragmentNode = QDomText_Wrapper.DocumentFragmentNode;
QDomText.NotationNode = QDomText_Wrapper.NotationNode;
QDomText.BaseNode = QDomText_Wrapper.BaseNode;
QDomText.CharacterDataNode = QDomText_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomText.EncodingFromDocument = QDomText_Wrapper.EncodingFromDocument;
QDomText.EncodingFromTextStream = QDomText_Wrapper.EncodingFromTextStream;


      // functions:
      
        // function 
        QDomText.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: QDomText.prototype.operator_equal");
          return this.__PROXY__.operator_equal(...args);
        };
    
        // function 
        QDomText.prototype.operator_unequal = function(...args) 
          
        {
          //print("JS: QDomText.prototype.operator_unequal");
          return this.__PROXY__.operator_unequal(...args);
        };
    
        // function 
        QDomText.prototype.insertBefore = function(...args) 
          
        {
          //print("JS: QDomText.prototype.insertBefore");
          return this.__PROXY__.insertBefore(...args);
        };
    
        // function 
        QDomText.prototype.insertAfter = function(...args) 
          
        {
          //print("JS: QDomText.prototype.insertAfter");
          return this.__PROXY__.insertAfter(...args);
        };
    
        // function 
        QDomText.prototype.replaceChild = function(...args) 
          
        {
          //print("JS: QDomText.prototype.replaceChild");
          return this.__PROXY__.replaceChild(...args);
        };
    
        // function 
        QDomText.prototype.removeChild = function(...args) 
          
        {
          //print("JS: QDomText.prototype.removeChild");
          return this.__PROXY__.removeChild(...args);
        };
    
        // function 
        QDomText.prototype.appendChild = function(...args) 
          
        {
          //print("JS: QDomText.prototype.appendChild");
          return this.__PROXY__.appendChild(...args);
        };
    
        // function 
        QDomText.prototype.hasChildNodes = function(...args) 
          
        {
          //print("JS: QDomText.prototype.hasChildNodes");
          return this.__PROXY__.hasChildNodes(...args);
        };
    
        // function 
        QDomText.prototype.cloneNode = function(...args) 
          
        {
          //print("JS: QDomText.prototype.cloneNode");
          return this.__PROXY__.cloneNode(...args);
        };
    
        // function 
        QDomText.prototype.normalize = function(...args) 
          
        {
          //print("JS: QDomText.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        QDomText.prototype.isSupported = function(...args) 
          
        {
          //print("JS: QDomText.prototype.isSupported");
          return this.__PROXY__.isSupported(...args);
        };
    
        // function 
        QDomText.prototype.nodeName = function(...args) 
          
        {
          //print("JS: QDomText.prototype.nodeName");
          return this.__PROXY__.nodeName(...args);
        };
    
        // function 
        QDomText.prototype.parentNode = function(...args) 
          
        {
          //print("JS: QDomText.prototype.parentNode");
          return this.__PROXY__.parentNode(...args);
        };
    
        // function 
        QDomText.prototype.childNodes = function(...args) 
          
        {
          //print("JS: QDomText.prototype.childNodes");
          return this.__PROXY__.childNodes(...args);
        };
    
        // function 
        QDomText.prototype.firstChild = function(...args) 
          
        {
          //print("JS: QDomText.prototype.firstChild");
          return this.__PROXY__.firstChild(...args);
        };
    
        // function 
        QDomText.prototype.lastChild = function(...args) 
          
        {
          //print("JS: QDomText.prototype.lastChild");
          return this.__PROXY__.lastChild(...args);
        };
    
        // function 
        QDomText.prototype.previousSibling = function(...args) 
          
        {
          //print("JS: QDomText.prototype.previousSibling");
          return this.__PROXY__.previousSibling(...args);
        };
    
        // function 
        QDomText.prototype.nextSibling = function(...args) 
          
        {
          //print("JS: QDomText.prototype.nextSibling");
          return this.__PROXY__.nextSibling(...args);
        };
    
        // function 
        QDomText.prototype.attributes = function(...args) 
          
        {
          //print("JS: QDomText.prototype.attributes");
          return this.__PROXY__.attributes(...args);
        };
    
        // function 
        QDomText.prototype.ownerDocument = function(...args) 
          
        {
          //print("JS: QDomText.prototype.ownerDocument");
          return this.__PROXY__.ownerDocument(...args);
        };
    
        // function 
        QDomText.prototype.namespaceURI = function(...args) 
          
        {
          //print("JS: QDomText.prototype.namespaceURI");
          return this.__PROXY__.namespaceURI(...args);
        };
    
        // function 
        QDomText.prototype.localName = function(...args) 
          
        {
          //print("JS: QDomText.prototype.localName");
          return this.__PROXY__.localName(...args);
        };
    
        // function 
        QDomText.prototype.hasAttributes = function(...args) 
          
        {
          //print("JS: QDomText.prototype.hasAttributes");
          return this.__PROXY__.hasAttributes(...args);
        };
    
        // function 
        QDomText.prototype.nodeValue = function(...args) 
          
        {
          //print("JS: QDomText.prototype.nodeValue");
          return this.__PROXY__.nodeValue(...args);
        };
    
        // function 
        QDomText.prototype.setNodeValue = function(...args) 
          
        {
          //print("JS: QDomText.prototype.setNodeValue");
          return this.__PROXY__.setNodeValue(...args);
        };
    
        // function 
        QDomText.prototype.prefix = function(...args) 
          
        {
          //print("JS: QDomText.prototype.prefix");
          return this.__PROXY__.prefix(...args);
        };
    
        // function 
        QDomText.prototype.setPrefix = function(...args) 
          
        {
          //print("JS: QDomText.prototype.setPrefix");
          return this.__PROXY__.setPrefix(...args);
        };
    
        // function 
        QDomText.prototype.isAttr = function(...args) 
          
        {
          //print("JS: QDomText.prototype.isAttr");
          return this.__PROXY__.isAttr(...args);
        };
    
        // function 
        QDomText.prototype.isCDATASection = function(...args) 
          
        {
          //print("JS: QDomText.prototype.isCDATASection");
          return this.__PROXY__.isCDATASection(...args);
        };
    
        // function 
        QDomText.prototype.isDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomText.prototype.isDocumentFragment");
          return this.__PROXY__.isDocumentFragment(...args);
        };
    
        // function 
        QDomText.prototype.isDocument = function(...args) 
          
        {
          //print("JS: QDomText.prototype.isDocument");
          return this.__PROXY__.isDocument(...args);
        };
    
        // function 
        QDomText.prototype.isDocumentType = function(...args) 
          
        {
          //print("JS: QDomText.prototype.isDocumentType");
          return this.__PROXY__.isDocumentType(...args);
        };
    
        // function 
        QDomText.prototype.isElement = function(...args) 
          
        {
          //print("JS: QDomText.prototype.isElement");
          return this.__PROXY__.isElement(...args);
        };
    
        // function 
        QDomText.prototype.isEntityReference = function(...args) 
          
        {
          //print("JS: QDomText.prototype.isEntityReference");
          return this.__PROXY__.isEntityReference(...args);
        };
    
        // function 
        QDomText.prototype.isText = function(...args) 
          
        {
          //print("JS: QDomText.prototype.isText");
          return this.__PROXY__.isText(...args);
        };
    
        // function 
        QDomText.prototype.isEntity = function(...args) 
          
        {
          //print("JS: QDomText.prototype.isEntity");
          return this.__PROXY__.isEntity(...args);
        };
    
        // function 
        QDomText.prototype.isNotation = function(...args) 
          
        {
          //print("JS: QDomText.prototype.isNotation");
          return this.__PROXY__.isNotation(...args);
        };
    
        // function 
        QDomText.prototype.isProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomText.prototype.isProcessingInstruction");
          return this.__PROXY__.isProcessingInstruction(...args);
        };
    
        // function 
        QDomText.prototype.isCharacterData = function(...args) 
          
        {
          //print("JS: QDomText.prototype.isCharacterData");
          return this.__PROXY__.isCharacterData(...args);
        };
    
        // function 
        QDomText.prototype.isComment = function(...args) 
          
        {
          //print("JS: QDomText.prototype.isComment");
          return this.__PROXY__.isComment(...args);
        };
    
        // function 
        QDomText.prototype.namedItem = function(...args) 
          
        {
          //print("JS: QDomText.prototype.namedItem");
          return this.__PROXY__.namedItem(...args);
        };
    
        // function 
        QDomText.prototype.isNull = function(...args) 
          
        {
          //print("JS: QDomText.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QDomText.prototype.clear = function(...args) 
          
        {
          //print("JS: QDomText.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QDomText.prototype.toAttr = function(...args) 
          
        {
          //print("JS: QDomText.prototype.toAttr");
          return this.__PROXY__.toAttr(...args);
        };
    
        // function 
        QDomText.prototype.toCDATASection = function(...args) 
          
        {
          //print("JS: QDomText.prototype.toCDATASection");
          return this.__PROXY__.toCDATASection(...args);
        };
    
        // function 
        QDomText.prototype.toDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomText.prototype.toDocumentFragment");
          return this.__PROXY__.toDocumentFragment(...args);
        };
    
        // function 
        QDomText.prototype.toDocument = function(...args) 
          
        {
          //print("JS: QDomText.prototype.toDocument");
          return this.__PROXY__.toDocument(...args);
        };
    
        // function 
        QDomText.prototype.toDocumentType = function(...args) 
          
        {
          //print("JS: QDomText.prototype.toDocumentType");
          return this.__PROXY__.toDocumentType(...args);
        };
    
        // function 
        QDomText.prototype.toElement = function(...args) 
          
        {
          //print("JS: QDomText.prototype.toElement");
          return this.__PROXY__.toElement(...args);
        };
    
        // function 
        QDomText.prototype.toEntityReference = function(...args) 
          
        {
          //print("JS: QDomText.prototype.toEntityReference");
          return this.__PROXY__.toEntityReference(...args);
        };
    
        // function 
        QDomText.prototype.toText = function(...args) 
          
        {
          //print("JS: QDomText.prototype.toText");
          return this.__PROXY__.toText(...args);
        };
    
        // function 
        QDomText.prototype.toEntity = function(...args) 
          
        {
          //print("JS: QDomText.prototype.toEntity");
          return this.__PROXY__.toEntity(...args);
        };
    
        // function 
        QDomText.prototype.toNotation = function(...args) 
          
        {
          //print("JS: QDomText.prototype.toNotation");
          return this.__PROXY__.toNotation(...args);
        };
    
        // function 
        QDomText.prototype.toProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomText.prototype.toProcessingInstruction");
          return this.__PROXY__.toProcessingInstruction(...args);
        };
    
        // function 
        QDomText.prototype.toCharacterData = function(...args) 
          
        {
          //print("JS: QDomText.prototype.toCharacterData");
          return this.__PROXY__.toCharacterData(...args);
        };
    
        // function 
        QDomText.prototype.toComment = function(...args) 
          
        {
          //print("JS: QDomText.prototype.toComment");
          return this.__PROXY__.toComment(...args);
        };
    
        // function 
        QDomText.prototype.firstChildElement = function(...args) 
          
        {
          //print("JS: QDomText.prototype.firstChildElement");
          return this.__PROXY__.firstChildElement(...args);
        };
    
        // function 
        QDomText.prototype.lastChildElement = function(...args) 
          
        {
          //print("JS: QDomText.prototype.lastChildElement");
          return this.__PROXY__.lastChildElement(...args);
        };
    
        // function 
        QDomText.prototype.previousSiblingElement = function(...args) 
          
        {
          //print("JS: QDomText.prototype.previousSiblingElement");
          return this.__PROXY__.previousSiblingElement(...args);
        };
    
        // function 
        QDomText.prototype.nextSiblingElement = function(...args) 
          
        {
          //print("JS: QDomText.prototype.nextSiblingElement");
          return this.__PROXY__.nextSiblingElement(...args);
        };
    
        // function 
        QDomText.prototype.lineNumber = function(...args) 
          
        {
          //print("JS: QDomText.prototype.lineNumber");
          return this.__PROXY__.lineNumber(...args);
        };
    
        // function 
        QDomText.prototype.columnNumber = function(...args) 
          
        {
          //print("JS: QDomText.prototype.columnNumber");
          return this.__PROXY__.columnNumber(...args);
        };
    
        // function 
        QDomText.prototype.substringData = function(...args) 
          
        {
          //print("JS: QDomText.prototype.substringData");
          return this.__PROXY__.substringData(...args);
        };
    
        // function 
        QDomText.prototype.appendData = function(...args) 
          
        {
          //print("JS: QDomText.prototype.appendData");
          return this.__PROXY__.appendData(...args);
        };
    
        // function 
        QDomText.prototype.insertData = function(...args) 
          
        {
          //print("JS: QDomText.prototype.insertData");
          return this.__PROXY__.insertData(...args);
        };
    
        // function 
        QDomText.prototype.deleteData = function(...args) 
          
        {
          //print("JS: QDomText.prototype.deleteData");
          return this.__PROXY__.deleteData(...args);
        };
    
        // function 
        QDomText.prototype.replaceData = function(...args) 
          
        {
          //print("JS: QDomText.prototype.replaceData");
          return this.__PROXY__.replaceData(...args);
        };
    
        // function 
        QDomText.prototype.length = function(...args) 
          
        {
          //print("JS: QDomText.prototype.length");
          return this.__PROXY__.length(...args);
        };
    
        // function 
        QDomText.prototype.data = function(...args) 
          
        {
          //print("JS: QDomText.prototype.data");
          return this.__PROXY__.data(...args);
        };
    
        // function 
        QDomText.prototype.setData = function(...args) 
          
        {
          //print("JS: QDomText.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        QDomText.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QDomText.prototype.operator_assign");
          return this.__PROXY__.operator_assign(...args);
        };
    
        // function 
        QDomText.prototype.splitText = function(...args) 
          
        {
          //print("JS: QDomText.prototype.splitText");
          return this.__PROXY__.splitText(...args);
        };
    
        // function 
        QDomText.prototype.nodeType = function(...args) 
          
        {
          //print("JS: QDomText.prototype.nodeType");
          return this.__PROXY__.nodeType(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomText.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomText.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDomText.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      