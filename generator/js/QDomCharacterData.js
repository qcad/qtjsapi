
      // auto generated
      //var self;

      // class constructor:
      function QDomCharacterData() {
        

        // should be QDomCharacterData_BaseJs.call(this, engine):
        //QDomCharacterData.prototype = new QDomCharacterData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QDomCharacterData.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDomCharacterData);
            //}
          }
          else {
            qWarning("QDomCharacterData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomCharacterData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomCharacterData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomCharacterData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomCharacterData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomCharacterData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomCharacterData);
  }

  
  else {
    
        print("QDomCharacterData(): wrong number / type of arguments");
      
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

      //QDomCharacterData.prototype = new QDomCharacterData_BaseJs(engine);
      //QDomCharacterData.prototype = new QDomCharacterData_Wrapper(engine);
      QDomCharacterData.prototype = new Object();

      QDomCharacterData.prototype.toString = function() {
          //return "QDomCharacterData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomCharacterData [JS]";
        };
      QDomCharacterData.getObjectType = function() {
        
            return RJSType_QDomCharacterData.getIdStatic();
          
      };

      QDomCharacterData.prototype.getObjectType = function() {
        
            return RJSType_QDomCharacterData.getIdStatic();
          
      };

      QDomCharacterData.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QDomCharacterData.getIdStatic()) {
              return true;
            }
          
          if (t===RJSType_QDomNode.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomCharacterData.ElementNode = QDomCharacterData_Wrapper.ElementNode;
QDomCharacterData.AttributeNode = QDomCharacterData_Wrapper.AttributeNode;
QDomCharacterData.TextNode = QDomCharacterData_Wrapper.TextNode;
QDomCharacterData.CDATASectionNode = QDomCharacterData_Wrapper.CDATASectionNode;
QDomCharacterData.EntityReferenceNode = QDomCharacterData_Wrapper.EntityReferenceNode;
QDomCharacterData.EntityNode = QDomCharacterData_Wrapper.EntityNode;
QDomCharacterData.ProcessingInstructionNode = QDomCharacterData_Wrapper.ProcessingInstructionNode;
QDomCharacterData.CommentNode = QDomCharacterData_Wrapper.CommentNode;
QDomCharacterData.DocumentNode = QDomCharacterData_Wrapper.DocumentNode;
QDomCharacterData.DocumentTypeNode = QDomCharacterData_Wrapper.DocumentTypeNode;
QDomCharacterData.DocumentFragmentNode = QDomCharacterData_Wrapper.DocumentFragmentNode;
QDomCharacterData.NotationNode = QDomCharacterData_Wrapper.NotationNode;
QDomCharacterData.BaseNode = QDomCharacterData_Wrapper.BaseNode;
QDomCharacterData.CharacterDataNode = QDomCharacterData_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomCharacterData.EncodingFromDocument = QDomCharacterData_Wrapper.EncodingFromDocument;
QDomCharacterData.EncodingFromTextStream = QDomCharacterData_Wrapper.EncodingFromTextStream;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomCharacterData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomCharacterData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    