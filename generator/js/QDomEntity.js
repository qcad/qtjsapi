
      // auto generated
      //var self;

      // class constructor:
      function QDomEntity() {
        

        // should be QDomEntity_BaseJs.call(this, engine):
        //QDomEntity.prototype = new QDomEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QDomEntity_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDomEntity);
            //}
          }
          else {
            qWarning("QDomEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomEntity);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomEntity_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomEntity);
  }

  
  else {
    
        print("QDomEntity(): wrong number / type of arguments");
      
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

      //QDomEntity.prototype = new QDomEntity_BaseJs(engine);
      //QDomEntity.prototype = new QDomEntity_Wrapper(engine);
      QDomEntity.prototype = new Object();

      QDomEntity.prototype.toString = function() {
          //return "QDomEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomEntity [JS]";
        };
      QDomEntity.getObjectType = function() {
        
            return RJSType.QDomEntity_Type;
          
      };

      QDomEntity.prototype.getObjectType = function() {
        
            return RJSType.QDomEntity_Type;
          
      };

      QDomEntity.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QDomEntity_Type:
              return true;
          
        case RJSType.QDomNode_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QDomEntity_Type, 
          
            RJSType.QDomNode_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: NodeType
QDomEntity.ElementNode = QDomEntity_Wrapper.ElementNode;
QDomEntity.AttributeNode = QDomEntity_Wrapper.AttributeNode;
QDomEntity.TextNode = QDomEntity_Wrapper.TextNode;
QDomEntity.CDATASectionNode = QDomEntity_Wrapper.CDATASectionNode;
QDomEntity.EntityReferenceNode = QDomEntity_Wrapper.EntityReferenceNode;
QDomEntity.EntityNode = QDomEntity_Wrapper.EntityNode;
QDomEntity.ProcessingInstructionNode = QDomEntity_Wrapper.ProcessingInstructionNode;
QDomEntity.CommentNode = QDomEntity_Wrapper.CommentNode;
QDomEntity.DocumentNode = QDomEntity_Wrapper.DocumentNode;
QDomEntity.DocumentTypeNode = QDomEntity_Wrapper.DocumentTypeNode;
QDomEntity.DocumentFragmentNode = QDomEntity_Wrapper.DocumentFragmentNode;
QDomEntity.NotationNode = QDomEntity_Wrapper.NotationNode;
QDomEntity.BaseNode = QDomEntity_Wrapper.BaseNode;
QDomEntity.CharacterDataNode = QDomEntity_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomEntity.EncodingFromDocument = QDomEntity_Wrapper.EncodingFromDocument;
QDomEntity.EncodingFromTextStream = QDomEntity_Wrapper.EncodingFromTextStream;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    