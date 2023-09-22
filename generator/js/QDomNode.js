
      // auto generated
      //var self;

      // class constructor:
      function QDomNode() {
        

        // should be QDomNode_BaseJs.call(this, engine):
        //QDomNode.prototype = new QDomNode_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QDomNode.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDomNode);
            //}
          }
          else {
            qWarning("QDomNode.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomNode_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomNode);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomNode);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomNode_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomNode);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomNode);
  }

  
  else {
    
        print("QDomNode(): wrong number / type of arguments");
      
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

      //QDomNode.prototype = new QDomNode_BaseJs(engine);
      //QDomNode.prototype = new QDomNode_Wrapper(engine);
      QDomNode.prototype = new Object();

      QDomNode.prototype.toString = function() {
          //return "QDomNode [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomNode [JS]";
        };
      QDomNode.getObjectType = function() {
        
            return RJSType_QDomNode.getIdStatic();
          
      };

      QDomNode.prototype.getObjectType = function() {
        
            return RJSType_QDomNode.getIdStatic();
          
      };

      QDomNode.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QDomNode.getIdStatic()) {
              return true;
            }
          

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomNode.ElementNode = QDomNode_Wrapper.ElementNode;
QDomNode.AttributeNode = QDomNode_Wrapper.AttributeNode;
QDomNode.TextNode = QDomNode_Wrapper.TextNode;
QDomNode.CDATASectionNode = QDomNode_Wrapper.CDATASectionNode;
QDomNode.EntityReferenceNode = QDomNode_Wrapper.EntityReferenceNode;
QDomNode.EntityNode = QDomNode_Wrapper.EntityNode;
QDomNode.ProcessingInstructionNode = QDomNode_Wrapper.ProcessingInstructionNode;
QDomNode.CommentNode = QDomNode_Wrapper.CommentNode;
QDomNode.DocumentNode = QDomNode_Wrapper.DocumentNode;
QDomNode.DocumentTypeNode = QDomNode_Wrapper.DocumentTypeNode;
QDomNode.DocumentFragmentNode = QDomNode_Wrapper.DocumentFragmentNode;
QDomNode.NotationNode = QDomNode_Wrapper.NotationNode;
QDomNode.BaseNode = QDomNode_Wrapper.BaseNode;
QDomNode.CharacterDataNode = QDomNode_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomNode.EncodingFromDocument = QDomNode_Wrapper.EncodingFromDocument;
QDomNode.EncodingFromTextStream = QDomNode_Wrapper.EncodingFromTextStream;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomNode.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomNode.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    