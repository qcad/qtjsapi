
      // auto generated
      //var self;

      // class constructor:
      function QTextDocument() {
        

        // should be QTextDocument_BaseJs.call(this, engine):
        //QTextDocument.prototype = new QTextDocument_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QTextDocument.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTextDocument);
            //}
          }
          else {
            qWarning("QTextDocument.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QTextDocument_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTextDocument);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextDocument);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTextDocument_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTextDocument);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextDocument);
  }

  
  else {
    
        print("QTextDocument(): wrong number / type of arguments");
      
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
            
    this["contentsChange(int,int,int)"] = Object.getPrototypeOf(this).contentsChange;
  
    this["undoAvailable(bool)"] = Object.getPrototypeOf(this).undoAvailable;
  
    this["redoAvailable(bool)"] = Object.getPrototypeOf(this).redoAvailable;
  
    this["modificationChanged(bool)"] = Object.getPrototypeOf(this).modificationChanged;
  
    this["cursorPositionChanged(QTextCursor)"] = Object.getPrototypeOf(this).cursorPositionChanged;
  
    this["blockCountChanged(int)"] = Object.getPrototypeOf(this).blockCountChanged;
  
    this["baseUrlChanged(QUrl)"] = Object.getPrototypeOf(this).baseUrlChanged;
  
          }
        }
      }

      //QTextDocument.prototype = new QTextDocument_BaseJs(engine);
      //QTextDocument.prototype = new QTextDocument_Wrapper(engine);
      QTextDocument.prototype = new Object();

      QTextDocument.prototype.toString = function() {
          //return "QTextDocument [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextDocument [JS]";
        };
      QTextDocument.getObjectType = function() {
        
            return RJSType_QTextDocument.getIdStatic();
          
      };

      QTextDocument.prototype.getObjectType = function() {
        
            return RJSType_QTextDocument.getIdStatic();
          
      };

      QTextDocument.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QTextDocument.getIdStatic()) {
              return true;
            }
          
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: MetaInformation
QTextDocument.DocumentTitle = QTextDocument_Wrapper.DocumentTitle;
QTextDocument.DocumentUrl = QTextDocument_Wrapper.DocumentUrl;

  // enum: MarkdownFeature
QTextDocument.MarkdownNoHTML = QTextDocument_Wrapper.MarkdownNoHTML;
QTextDocument.MarkdownDialectCommonMark = QTextDocument_Wrapper.MarkdownDialectCommonMark;
QTextDocument.MarkdownDialectGitHub = QTextDocument_Wrapper.MarkdownDialectGitHub;

  // enum: FindFlag
QTextDocument.FindBackward = QTextDocument_Wrapper.FindBackward;
QTextDocument.FindCaseSensitively = QTextDocument_Wrapper.FindCaseSensitively;
QTextDocument.FindWholeWords = QTextDocument_Wrapper.FindWholeWords;

  // enum: ResourceType
QTextDocument.UnknownResource = QTextDocument_Wrapper.UnknownResource;
QTextDocument.HtmlResource = QTextDocument_Wrapper.HtmlResource;
QTextDocument.ImageResource = QTextDocument_Wrapper.ImageResource;
QTextDocument.StyleSheetResource = QTextDocument_Wrapper.StyleSheetResource;
QTextDocument.MarkdownResource = QTextDocument_Wrapper.MarkdownResource;
QTextDocument.UserResource = QTextDocument_Wrapper.UserResource;

  // enum: Stacks
QTextDocument.UndoStack = QTextDocument_Wrapper.UndoStack;
QTextDocument.RedoStack = QTextDocument_Wrapper.RedoStack;
QTextDocument.UndoAndRedoStacks = QTextDocument_Wrapper.UndoAndRedoStacks;


      // functions:
      

      // static functions:
      

        // static function 
        QTextDocument.tr = function() 
          
        {
          //print("JS: QTextDocument.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QTextDocument_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QTextDocument);
  }

  
  else {
    
        print("QTextDocument.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextDocument.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextDocument.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    