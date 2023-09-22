
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
            arguments[2].getWrappedType()===
              
                  RJSType_QDomText.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDomText);
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
          

        copyProperties(this, wrapper, QDomText);

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
          

        copyProperties(this, wrapper, QDomText);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
    