
      // auto generated
      //var self;

      // class constructor:
      function QDomNotation() {
        

        // should be QDomNotation_BaseJs.call(this, engine):
        //QDomNotation.prototype = new QDomNotation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QDomNotation_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDomNotation);
            //}
          }
          else {
            qWarning("QDomNotation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomNotation_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomNotation);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomNotation);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomNotation_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomNotation);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomNotation);
  }

  
  else {
    
        print("QDomNotation(): wrong number / type of arguments");
      
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

      //QDomNotation.prototype = new QDomNotation_BaseJs(engine);
      //QDomNotation.prototype = new QDomNotation_Wrapper(engine);
      QDomNotation.prototype = new Object();

      QDomNotation.prototype.toString = function() {
          //return "QDomNotation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomNotation [JS]";
        };
      QDomNotation.getObjectType = function() {
        
            return RJSType.QDomNotation_Type;
          
      };

      QDomNotation.prototype.getObjectType = function() {
        
            return RJSType.QDomNotation_Type;
          
      };

      QDomNotation.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QDomNotation_Type:
              return true;
          
        case RJSType.QDomNode_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QDomNotation_Type, 
          
            RJSType.QDomNode_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: NodeType
QDomNotation.ElementNode = QDomNotation_Wrapper.ElementNode;
QDomNotation.AttributeNode = QDomNotation_Wrapper.AttributeNode;
QDomNotation.TextNode = QDomNotation_Wrapper.TextNode;
QDomNotation.CDATASectionNode = QDomNotation_Wrapper.CDATASectionNode;
QDomNotation.EntityReferenceNode = QDomNotation_Wrapper.EntityReferenceNode;
QDomNotation.EntityNode = QDomNotation_Wrapper.EntityNode;
QDomNotation.ProcessingInstructionNode = QDomNotation_Wrapper.ProcessingInstructionNode;
QDomNotation.CommentNode = QDomNotation_Wrapper.CommentNode;
QDomNotation.DocumentNode = QDomNotation_Wrapper.DocumentNode;
QDomNotation.DocumentTypeNode = QDomNotation_Wrapper.DocumentTypeNode;
QDomNotation.DocumentFragmentNode = QDomNotation_Wrapper.DocumentFragmentNode;
QDomNotation.NotationNode = QDomNotation_Wrapper.NotationNode;
QDomNotation.BaseNode = QDomNotation_Wrapper.BaseNode;
QDomNotation.CharacterDataNode = QDomNotation_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomNotation.EncodingFromDocument = QDomNotation_Wrapper.EncodingFromDocument;
QDomNotation.EncodingFromTextStream = QDomNotation_Wrapper.EncodingFromTextStream;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomNotation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomNotation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    