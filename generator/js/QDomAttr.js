
      // auto generated
      //var self;

      // class constructor:
      function QDomAttr() {
        

        // should be QDomAttr_BaseJs.call(this, engine):
        //QDomAttr.prototype = new QDomAttr_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QDomAttr.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDomAttr);
            //}
          }
          else {
            qWarning("QDomAttr.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomAttr_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomAttr);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomAttr);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomAttr_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomAttr);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomAttr);
  }

  
  else {
    
        print("QDomAttr(): wrong number / type of arguments");
      
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

      //QDomAttr.prototype = new QDomAttr_BaseJs(engine);
      //QDomAttr.prototype = new QDomAttr_Wrapper(engine);
      QDomAttr.prototype = new Object();

      QDomAttr.prototype.toString = function() {
          //return "QDomAttr [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomAttr [JS]";
        };
      QDomAttr.getObjectType = function() {
        
            return RJSType_QDomAttr.getIdStatic();
          
      };

      QDomAttr.prototype.getObjectType = function() {
        
            return RJSType_QDomAttr.getIdStatic();
          
      };

      QDomAttr.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QDomAttr.getIdStatic()) {
              return true;
            }
          
          if (t===RJSType_QDomNode.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomAttr.ElementNode = QDomAttr_Wrapper.ElementNode;
QDomAttr.AttributeNode = QDomAttr_Wrapper.AttributeNode;
QDomAttr.TextNode = QDomAttr_Wrapper.TextNode;
QDomAttr.CDATASectionNode = QDomAttr_Wrapper.CDATASectionNode;
QDomAttr.EntityReferenceNode = QDomAttr_Wrapper.EntityReferenceNode;
QDomAttr.EntityNode = QDomAttr_Wrapper.EntityNode;
QDomAttr.ProcessingInstructionNode = QDomAttr_Wrapper.ProcessingInstructionNode;
QDomAttr.CommentNode = QDomAttr_Wrapper.CommentNode;
QDomAttr.DocumentNode = QDomAttr_Wrapper.DocumentNode;
QDomAttr.DocumentTypeNode = QDomAttr_Wrapper.DocumentTypeNode;
QDomAttr.DocumentFragmentNode = QDomAttr_Wrapper.DocumentFragmentNode;
QDomAttr.NotationNode = QDomAttr_Wrapper.NotationNode;
QDomAttr.BaseNode = QDomAttr_Wrapper.BaseNode;
QDomAttr.CharacterDataNode = QDomAttr_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomAttr.EncodingFromDocument = QDomAttr_Wrapper.EncodingFromDocument;
QDomAttr.EncodingFromTextStream = QDomAttr_Wrapper.EncodingFromTextStream;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomAttr.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomAttr.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    