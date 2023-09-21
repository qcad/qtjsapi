
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
            arguments[2].getWrappedType()===
              
                  RJSType.QDomDocumentFragment_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDomDocumentFragment);
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
          

        copyProperties(this, wrapper, QDomDocumentFragment);

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
          

        copyProperties(this, wrapper, QDomDocumentFragment);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
        
            return RJSType.QDomDocumentFragment_Type;
          
      };

      QDomDocumentFragment.prototype.getObjectType = function() {
        
            return RJSType.QDomDocumentFragment_Type;
          
      };

      QDomDocumentFragment.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QDomDocumentFragment_Type:
              return true;
          
        case RJSType.QDomNode_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QDomDocumentFragment_Type, 
          
            RJSType.QDomNode_Type
            
        ].includes(t);
        */
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
    