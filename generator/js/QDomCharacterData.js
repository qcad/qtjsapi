
      // auto generated
      //var self;

      // class constructor:
      function QDomCharacterData() {
        

        // should be QDomCharacterData_BaseJs.call(this, engine):
        //QDomCharacterData.prototype = new QDomCharacterData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomCharacterData.getIdStatic()))) {

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
            qWarning("QDomCharacterData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomCharacterData_Wrapper(
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

      

        //copyProperties(this, wrapper, QDomCharacterData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomCharacterData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomCharacterData);
  }

  
  else {
    
        print("QDomCharacterData(): wrong number / type of arguments");
      
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

      //QDomCharacterData.prototype = new QDomCharacterData_BaseJs(engine);
      //QDomCharacterData.prototype = new QDomCharacterData_Wrapper(engine);
      QDomCharacterData.prototype = new Object();

      QDomCharacterData.prototype.toString = function() {
          //return "QDomCharacterData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomCharacterData [JS]";
        };
      QDomCharacterData.getObjectType = function() {
        return RJSType_QDomCharacterData.getIdStatic();
      };

      QDomCharacterData.prototype.getObjectType = function() {
        return RJSType_QDomCharacterData.getIdStatic();
      };

      QDomCharacterData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomCharacterData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QDomNode.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomCharacterData.ElementNode = QDomCharacterData_Wrapper.ElementNode;
QDomCharacterData.AttributeNode = QDomCharacterData_Wrapper.AttributeNode;
QDomCharacterData.TextNode = QDomCharacterData_Wrapper.TextNode;
QDomCharacterData.CDATASectionNode = QDomCharacterData_Wrapper.CDATASectionNode;
QDomCharacterData.EntityReferenceNode = QDomCharacterData_Wrapper.EntityReferenceNode;
QDomCharacterData.EntityNode = QDomCharacterData_Wrapper.EntityNode;
QDomCharacterData.ProcessingInstructionNode = QDomCharacterData_Wrapper.ProcessingInstructionNode;
QDomCharacterData.CommentNode = QDomCharacterData_Wrapper.CommentNode;
QDomCharacterData.DocumentNode = QDomCharacterData_Wrapper.DocumentNode;
QDomCharacterData.DocumentTypeNode = QDomCharacterData_Wrapper.DocumentTypeNode;
QDomCharacterData.DocumentFragmentNode = QDomCharacterData_Wrapper.DocumentFragmentNode;
QDomCharacterData.NotationNode = QDomCharacterData_Wrapper.NotationNode;
QDomCharacterData.BaseNode = QDomCharacterData_Wrapper.BaseNode;
QDomCharacterData.CharacterDataNode = QDomCharacterData_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomCharacterData.EncodingFromDocument = QDomCharacterData_Wrapper.EncodingFromDocument;
QDomCharacterData.EncodingFromTextStream = QDomCharacterData_Wrapper.EncodingFromTextStream;


      // functions:
      
        // function 
        QDomCharacterData.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.operator_equal");
          return this.__PROXY__.operator_equal(...args);
        };
    
        // function 
        QDomCharacterData.prototype.operator_unequal = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.operator_unequal");
          return this.__PROXY__.operator_unequal(...args);
        };
    
        // function 
        QDomCharacterData.prototype.insertBefore = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.insertBefore");
          return this.__PROXY__.insertBefore(...args);
        };
    
        // function 
        QDomCharacterData.prototype.insertAfter = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.insertAfter");
          return this.__PROXY__.insertAfter(...args);
        };
    
        // function 
        QDomCharacterData.prototype.replaceChild = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.replaceChild");
          return this.__PROXY__.replaceChild(...args);
        };
    
        // function 
        QDomCharacterData.prototype.removeChild = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.removeChild");
          return this.__PROXY__.removeChild(...args);
        };
    
        // function 
        QDomCharacterData.prototype.appendChild = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.appendChild");
          return this.__PROXY__.appendChild(...args);
        };
    
        // function 
        QDomCharacterData.prototype.hasChildNodes = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.hasChildNodes");
          return this.__PROXY__.hasChildNodes(...args);
        };
    
        // function 
        QDomCharacterData.prototype.cloneNode = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.cloneNode");
          return this.__PROXY__.cloneNode(...args);
        };
    
        // function 
        QDomCharacterData.prototype.normalize = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        QDomCharacterData.prototype.isSupported = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.isSupported");
          return this.__PROXY__.isSupported(...args);
        };
    
        // function 
        QDomCharacterData.prototype.nodeName = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.nodeName");
          return this.__PROXY__.nodeName(...args);
        };
    
        // function 
        QDomCharacterData.prototype.parentNode = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.parentNode");
          return this.__PROXY__.parentNode(...args);
        };
    
        // function 
        QDomCharacterData.prototype.childNodes = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.childNodes");
          return this.__PROXY__.childNodes(...args);
        };
    
        // function 
        QDomCharacterData.prototype.firstChild = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.firstChild");
          return this.__PROXY__.firstChild(...args);
        };
    
        // function 
        QDomCharacterData.prototype.lastChild = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.lastChild");
          return this.__PROXY__.lastChild(...args);
        };
    
        // function 
        QDomCharacterData.prototype.previousSibling = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.previousSibling");
          return this.__PROXY__.previousSibling(...args);
        };
    
        // function 
        QDomCharacterData.prototype.nextSibling = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.nextSibling");
          return this.__PROXY__.nextSibling(...args);
        };
    
        // function 
        QDomCharacterData.prototype.attributes = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.attributes");
          return this.__PROXY__.attributes(...args);
        };
    
        // function 
        QDomCharacterData.prototype.ownerDocument = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.ownerDocument");
          return this.__PROXY__.ownerDocument(...args);
        };
    
        // function 
        QDomCharacterData.prototype.namespaceURI = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.namespaceURI");
          return this.__PROXY__.namespaceURI(...args);
        };
    
        // function 
        QDomCharacterData.prototype.localName = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.localName");
          return this.__PROXY__.localName(...args);
        };
    
        // function 
        QDomCharacterData.prototype.hasAttributes = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.hasAttributes");
          return this.__PROXY__.hasAttributes(...args);
        };
    
        // function 
        QDomCharacterData.prototype.nodeValue = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.nodeValue");
          return this.__PROXY__.nodeValue(...args);
        };
    
        // function 
        QDomCharacterData.prototype.setNodeValue = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.setNodeValue");
          return this.__PROXY__.setNodeValue(...args);
        };
    
        // function 
        QDomCharacterData.prototype.prefix = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.prefix");
          return this.__PROXY__.prefix(...args);
        };
    
        // function 
        QDomCharacterData.prototype.setPrefix = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.setPrefix");
          return this.__PROXY__.setPrefix(...args);
        };
    
        // function 
        QDomCharacterData.prototype.isAttr = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.isAttr");
          return this.__PROXY__.isAttr(...args);
        };
    
        // function 
        QDomCharacterData.prototype.isCDATASection = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.isCDATASection");
          return this.__PROXY__.isCDATASection(...args);
        };
    
        // function 
        QDomCharacterData.prototype.isDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.isDocumentFragment");
          return this.__PROXY__.isDocumentFragment(...args);
        };
    
        // function 
        QDomCharacterData.prototype.isDocument = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.isDocument");
          return this.__PROXY__.isDocument(...args);
        };
    
        // function 
        QDomCharacterData.prototype.isDocumentType = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.isDocumentType");
          return this.__PROXY__.isDocumentType(...args);
        };
    
        // function 
        QDomCharacterData.prototype.isElement = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.isElement");
          return this.__PROXY__.isElement(...args);
        };
    
        // function 
        QDomCharacterData.prototype.isEntityReference = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.isEntityReference");
          return this.__PROXY__.isEntityReference(...args);
        };
    
        // function 
        QDomCharacterData.prototype.isText = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.isText");
          return this.__PROXY__.isText(...args);
        };
    
        // function 
        QDomCharacterData.prototype.isEntity = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.isEntity");
          return this.__PROXY__.isEntity(...args);
        };
    
        // function 
        QDomCharacterData.prototype.isNotation = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.isNotation");
          return this.__PROXY__.isNotation(...args);
        };
    
        // function 
        QDomCharacterData.prototype.isProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.isProcessingInstruction");
          return this.__PROXY__.isProcessingInstruction(...args);
        };
    
        // function 
        QDomCharacterData.prototype.isCharacterData = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.isCharacterData");
          return this.__PROXY__.isCharacterData(...args);
        };
    
        // function 
        QDomCharacterData.prototype.isComment = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.isComment");
          return this.__PROXY__.isComment(...args);
        };
    
        // function 
        QDomCharacterData.prototype.namedItem = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.namedItem");
          return this.__PROXY__.namedItem(...args);
        };
    
        // function 
        QDomCharacterData.prototype.isNull = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QDomCharacterData.prototype.clear = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QDomCharacterData.prototype.toAttr = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.toAttr");
          return this.__PROXY__.toAttr(...args);
        };
    
        // function 
        QDomCharacterData.prototype.toCDATASection = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.toCDATASection");
          return this.__PROXY__.toCDATASection(...args);
        };
    
        // function 
        QDomCharacterData.prototype.toDocumentFragment = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.toDocumentFragment");
          return this.__PROXY__.toDocumentFragment(...args);
        };
    
        // function 
        QDomCharacterData.prototype.toDocument = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.toDocument");
          return this.__PROXY__.toDocument(...args);
        };
    
        // function 
        QDomCharacterData.prototype.toDocumentType = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.toDocumentType");
          return this.__PROXY__.toDocumentType(...args);
        };
    
        // function 
        QDomCharacterData.prototype.toElement = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.toElement");
          return this.__PROXY__.toElement(...args);
        };
    
        // function 
        QDomCharacterData.prototype.toEntityReference = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.toEntityReference");
          return this.__PROXY__.toEntityReference(...args);
        };
    
        // function 
        QDomCharacterData.prototype.toText = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.toText");
          return this.__PROXY__.toText(...args);
        };
    
        // function 
        QDomCharacterData.prototype.toEntity = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.toEntity");
          return this.__PROXY__.toEntity(...args);
        };
    
        // function 
        QDomCharacterData.prototype.toNotation = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.toNotation");
          return this.__PROXY__.toNotation(...args);
        };
    
        // function 
        QDomCharacterData.prototype.toProcessingInstruction = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.toProcessingInstruction");
          return this.__PROXY__.toProcessingInstruction(...args);
        };
    
        // function 
        QDomCharacterData.prototype.toCharacterData = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.toCharacterData");
          return this.__PROXY__.toCharacterData(...args);
        };
    
        // function 
        QDomCharacterData.prototype.toComment = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.toComment");
          return this.__PROXY__.toComment(...args);
        };
    
        // function 
        QDomCharacterData.prototype.firstChildElement = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.firstChildElement");
          return this.__PROXY__.firstChildElement(...args);
        };
    
        // function 
        QDomCharacterData.prototype.lastChildElement = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.lastChildElement");
          return this.__PROXY__.lastChildElement(...args);
        };
    
        // function 
        QDomCharacterData.prototype.previousSiblingElement = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.previousSiblingElement");
          return this.__PROXY__.previousSiblingElement(...args);
        };
    
        // function 
        QDomCharacterData.prototype.nextSiblingElement = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.nextSiblingElement");
          return this.__PROXY__.nextSiblingElement(...args);
        };
    
        // function 
        QDomCharacterData.prototype.lineNumber = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.lineNumber");
          return this.__PROXY__.lineNumber(...args);
        };
    
        // function 
        QDomCharacterData.prototype.columnNumber = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.columnNumber");
          return this.__PROXY__.columnNumber(...args);
        };
    
        // function 
        QDomCharacterData.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.operator_assign");
          return this.__PROXY__.operator_assign(...args);
        };
    
        // function 
        QDomCharacterData.prototype.substringData = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.substringData");
          return this.__PROXY__.substringData(...args);
        };
    
        // function 
        QDomCharacterData.prototype.appendData = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.appendData");
          return this.__PROXY__.appendData(...args);
        };
    
        // function 
        QDomCharacterData.prototype.insertData = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.insertData");
          return this.__PROXY__.insertData(...args);
        };
    
        // function 
        QDomCharacterData.prototype.deleteData = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.deleteData");
          return this.__PROXY__.deleteData(...args);
        };
    
        // function 
        QDomCharacterData.prototype.replaceData = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.replaceData");
          return this.__PROXY__.replaceData(...args);
        };
    
        // function 
        QDomCharacterData.prototype.length = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.length");
          return this.__PROXY__.length(...args);
        };
    
        // function 
        QDomCharacterData.prototype.data = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.data");
          return this.__PROXY__.data(...args);
        };
    
        // function 
        QDomCharacterData.prototype.setData = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        QDomCharacterData.prototype.nodeType = function(...args) 
          
        {
          //print("JS: QDomCharacterData.prototype.nodeType");
          return this.__PROXY__.nodeType(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomCharacterData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomCharacterData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDomCharacterData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      