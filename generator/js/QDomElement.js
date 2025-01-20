
      // auto generated
      //var self;

      // class constructor:
      function QDomElement() {
        

        // should be QDomElement_BaseJs.call(this, engine):
        //QDomElement.prototype = new QDomElement_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomElement.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QDomElement);
                
            //}
          }
          else {
            qWarning("QDomElement.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomElement_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QDomElement);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomElement);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomElement_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QDomElement);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomElement);
  }

  
  else {
    
        print("QDomElement(): wrong number / type of arguments");
      
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

      //QDomElement.prototype = new QDomElement_BaseJs(engine);
      //QDomElement.prototype = new QDomElement_Wrapper(engine);
      QDomElement.prototype = new Object();

      QDomElement.prototype.toString = function() {
          //return "QDomElement [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomElement [JS]";
        };
      QDomElement.getObjectType = function() {
        return RJSType_QDomElement.getIdStatic();
      };

      QDomElement.prototype.getObjectType = function() {
        return RJSType_QDomElement.getIdStatic();
      };

      QDomElement.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomElement.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QDomNode.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomElement.ElementNode = QDomElement_Wrapper.ElementNode;
QDomElement.AttributeNode = QDomElement_Wrapper.AttributeNode;
QDomElement.TextNode = QDomElement_Wrapper.TextNode;
QDomElement.CDATASectionNode = QDomElement_Wrapper.CDATASectionNode;
QDomElement.EntityReferenceNode = QDomElement_Wrapper.EntityReferenceNode;
QDomElement.EntityNode = QDomElement_Wrapper.EntityNode;
QDomElement.ProcessingInstructionNode = QDomElement_Wrapper.ProcessingInstructionNode;
QDomElement.CommentNode = QDomElement_Wrapper.CommentNode;
QDomElement.DocumentNode = QDomElement_Wrapper.DocumentNode;
QDomElement.DocumentTypeNode = QDomElement_Wrapper.DocumentTypeNode;
QDomElement.DocumentFragmentNode = QDomElement_Wrapper.DocumentFragmentNode;
QDomElement.NotationNode = QDomElement_Wrapper.NotationNode;
QDomElement.BaseNode = QDomElement_Wrapper.BaseNode;
QDomElement.CharacterDataNode = QDomElement_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomElement.EncodingFromDocument = QDomElement_Wrapper.EncodingFromDocument;
QDomElement.EncodingFromTextStream = QDomElement_Wrapper.EncodingFromTextStream;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomElement.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomElement.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      