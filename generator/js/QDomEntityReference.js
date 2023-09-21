
      // auto generated
      //var self;

      // class constructor:
      function QDomEntityReference() {
        

        // should be QDomEntityReference_BaseJs.call(this, engine):
        //QDomEntityReference.prototype = new QDomEntityReference_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QDomEntityReference_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDomEntityReference);
            //}
          }
          else {
            qWarning("QDomEntityReference.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomEntityReference_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomEntityReference);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomEntityReference);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomEntityReference_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomEntityReference);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomEntityReference);
  }

  
  else {
    
        print("QDomEntityReference(): wrong number / type of arguments");
      
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

      //QDomEntityReference.prototype = new QDomEntityReference_BaseJs(engine);
      //QDomEntityReference.prototype = new QDomEntityReference_Wrapper(engine);
      QDomEntityReference.prototype = new Object();

      QDomEntityReference.prototype.toString = function() {
          //return "QDomEntityReference [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomEntityReference [JS]";
        };
      QDomEntityReference.getObjectType = function() {
        
            return RJSType.QDomEntityReference_Type;
          
      };

      QDomEntityReference.prototype.getObjectType = function() {
        
            return RJSType.QDomEntityReference_Type;
          
      };

      QDomEntityReference.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QDomEntityReference_Type:
              return true;
          
        case RJSType.QDomNode_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QDomEntityReference_Type, 
          
            RJSType.QDomNode_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: NodeType
QDomEntityReference.ElementNode = QDomEntityReference_Wrapper.ElementNode;
QDomEntityReference.AttributeNode = QDomEntityReference_Wrapper.AttributeNode;
QDomEntityReference.TextNode = QDomEntityReference_Wrapper.TextNode;
QDomEntityReference.CDATASectionNode = QDomEntityReference_Wrapper.CDATASectionNode;
QDomEntityReference.EntityReferenceNode = QDomEntityReference_Wrapper.EntityReferenceNode;
QDomEntityReference.EntityNode = QDomEntityReference_Wrapper.EntityNode;
QDomEntityReference.ProcessingInstructionNode = QDomEntityReference_Wrapper.ProcessingInstructionNode;
QDomEntityReference.CommentNode = QDomEntityReference_Wrapper.CommentNode;
QDomEntityReference.DocumentNode = QDomEntityReference_Wrapper.DocumentNode;
QDomEntityReference.DocumentTypeNode = QDomEntityReference_Wrapper.DocumentTypeNode;
QDomEntityReference.DocumentFragmentNode = QDomEntityReference_Wrapper.DocumentFragmentNode;
QDomEntityReference.NotationNode = QDomEntityReference_Wrapper.NotationNode;
QDomEntityReference.BaseNode = QDomEntityReference_Wrapper.BaseNode;
QDomEntityReference.CharacterDataNode = QDomEntityReference_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomEntityReference.EncodingFromDocument = QDomEntityReference_Wrapper.EncodingFromDocument;
QDomEntityReference.EncodingFromTextStream = QDomEntityReference_Wrapper.EncodingFromTextStream;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomEntityReference.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomEntityReference.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    