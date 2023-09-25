
      // auto generated
      //var self;

      // class constructor:
      function QDomDocument() {
        

        // should be QDomDocument_BaseJs.call(this, engine):
        //QDomDocument.prototype = new QDomDocument_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomDocument.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDomDocument);
            //}
          }
          else {
            qWarning("QDomDocument.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomDocument_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomDocument);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomDocument);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomDocument_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomDocument);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomDocument);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomDocument_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomDocument);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomDocument);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomDocument_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomDocument);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomDocument);
  }

  
  else {
    
        print("QDomDocument(): wrong number / type of arguments");
      
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

      //QDomDocument.prototype = new QDomDocument_BaseJs(engine);
      //QDomDocument.prototype = new QDomDocument_Wrapper(engine);
      QDomDocument.prototype = new Object();

      
        // function with alias name in CPP wrapper:
        QDomDocument.prototype.toString = function() {
          return this.toStr.apply(this, arguments);
        }
      QDomDocument.getObjectType = function() {
        return RJSType_QDomDocument.getIdStatic();
      };

      QDomDocument.prototype.getObjectType = function() {
        return RJSType_QDomDocument.getIdStatic();
      };

      QDomDocument.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomDocument.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QDomNode.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: NodeType
QDomDocument.ElementNode = QDomDocument_Wrapper.ElementNode;
QDomDocument.AttributeNode = QDomDocument_Wrapper.AttributeNode;
QDomDocument.TextNode = QDomDocument_Wrapper.TextNode;
QDomDocument.CDATASectionNode = QDomDocument_Wrapper.CDATASectionNode;
QDomDocument.EntityReferenceNode = QDomDocument_Wrapper.EntityReferenceNode;
QDomDocument.EntityNode = QDomDocument_Wrapper.EntityNode;
QDomDocument.ProcessingInstructionNode = QDomDocument_Wrapper.ProcessingInstructionNode;
QDomDocument.CommentNode = QDomDocument_Wrapper.CommentNode;
QDomDocument.DocumentNode = QDomDocument_Wrapper.DocumentNode;
QDomDocument.DocumentTypeNode = QDomDocument_Wrapper.DocumentTypeNode;
QDomDocument.DocumentFragmentNode = QDomDocument_Wrapper.DocumentFragmentNode;
QDomDocument.NotationNode = QDomDocument_Wrapper.NotationNode;
QDomDocument.BaseNode = QDomDocument_Wrapper.BaseNode;
QDomDocument.CharacterDataNode = QDomDocument_Wrapper.CharacterDataNode;

  // enum: EncodingPolicy
QDomDocument.EncodingFromDocument = QDomDocument_Wrapper.EncodingFromDocument;
QDomDocument.EncodingFromTextStream = QDomDocument_Wrapper.EncodingFromTextStream;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomDocument.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomDocument.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    