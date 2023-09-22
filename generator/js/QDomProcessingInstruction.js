
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
            arguments[2].getWrappedType()===
              
                  RJSType_QDomProcessingInstruction.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDomProcessingInstruction);
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
          

        copyProperties(this, wrapper, QDomProcessingInstruction);

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
          

        copyProperties(this, wrapper, QDomProcessingInstruction);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
    