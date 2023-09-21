
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
            arguments[2].getWrappedType()===
              
                  RJSType.QDomDocumentType_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDomDocumentType);
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
          

        copyProperties(this, wrapper, QDomDocumentType);

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
          

        copyProperties(this, wrapper, QDomDocumentType);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
        
            return RJSType.QDomDocumentType_Type;
          
      };

      QDomDocumentType.prototype.getObjectType = function() {
        
            return RJSType.QDomDocumentType_Type;
          
      };

      QDomDocumentType.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QDomDocumentType_Type:
              return true;
          
        case RJSType.QDomNode_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QDomDocumentType_Type, 
          
            RJSType.QDomNode_Type
            
        ].includes(t);
        */
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
    