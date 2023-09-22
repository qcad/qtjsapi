
      // auto generated
      //var self;

      // class constructor:
      function QKeySequence() {
        

        // should be QKeySequence_BaseJs.call(this, engine):
        //QKeySequence.prototype = new QKeySequence_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QKeySequence.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QKeySequence);
            //}
          }
          else {
            qWarning("QKeySequence.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QKeySequence_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QKeySequence);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QKeySequence);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QKeySequence_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QKeySequence);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QKeySequence);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QKeySequence_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QKeySequence);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QKeySequence);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QKeySequence_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QKeySequence);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QKeySequence);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QKeySequence_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QKeySequence);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QKeySequence);
  }

  
  else {
    
        print("QKeySequence(): wrong number / type of arguments");
      
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

      //QKeySequence.prototype = new QKeySequence_BaseJs(engine);
      //QKeySequence.prototype = new QKeySequence_Wrapper(engine);
      QKeySequence.prototype = new Object();

      
        // function with alias name in CPP wrapper:
        QKeySequence.prototype.toString = function() {
          return this.toStr.apply(this, arguments);
        }
      QKeySequence.getObjectType = function() {
        
            return RJSType_QKeySequence.getIdStatic();
          
      };

      QKeySequence.prototype.getObjectType = function() {
        
            return RJSType_QKeySequence.getIdStatic();
          
      };

      QKeySequence.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QKeySequence.getIdStatic()) {
              return true;
            }
          

        return false;


        
      };

      // enum values:
      
  // enum: StandardKey
QKeySequence.UnknownKey = QKeySequence_Wrapper.UnknownKey;
QKeySequence.HelpContents = QKeySequence_Wrapper.HelpContents;
QKeySequence.WhatsThis = QKeySequence_Wrapper.WhatsThis;
QKeySequence.Open = QKeySequence_Wrapper.Open;
QKeySequence.Close = QKeySequence_Wrapper.Close;
QKeySequence.Save = QKeySequence_Wrapper.Save;
QKeySequence.New = QKeySequence_Wrapper.New;
QKeySequence.Delete = QKeySequence_Wrapper.Delete;
QKeySequence.Cut = QKeySequence_Wrapper.Cut;
QKeySequence.Copy = QKeySequence_Wrapper.Copy;
QKeySequence.Paste = QKeySequence_Wrapper.Paste;
QKeySequence.Undo = QKeySequence_Wrapper.Undo;
QKeySequence.Redo = QKeySequence_Wrapper.Redo;
QKeySequence.Back = QKeySequence_Wrapper.Back;
QKeySequence.Forward = QKeySequence_Wrapper.Forward;
QKeySequence.Refresh = QKeySequence_Wrapper.Refresh;
QKeySequence.ZoomIn = QKeySequence_Wrapper.ZoomIn;
QKeySequence.ZoomOut = QKeySequence_Wrapper.ZoomOut;
QKeySequence.Print = QKeySequence_Wrapper.Print;
QKeySequence.AddTab = QKeySequence_Wrapper.AddTab;
QKeySequence.NextChild = QKeySequence_Wrapper.NextChild;
QKeySequence.PreviousChild = QKeySequence_Wrapper.PreviousChild;
QKeySequence.Find = QKeySequence_Wrapper.Find;
QKeySequence.FindNext = QKeySequence_Wrapper.FindNext;
QKeySequence.FindPrevious = QKeySequence_Wrapper.FindPrevious;
QKeySequence.Replace = QKeySequence_Wrapper.Replace;
QKeySequence.SelectAll = QKeySequence_Wrapper.SelectAll;
QKeySequence.Bold = QKeySequence_Wrapper.Bold;
QKeySequence.Italic = QKeySequence_Wrapper.Italic;
QKeySequence.Underline = QKeySequence_Wrapper.Underline;
QKeySequence.MoveToNextChar = QKeySequence_Wrapper.MoveToNextChar;
QKeySequence.MoveToPreviousChar = QKeySequence_Wrapper.MoveToPreviousChar;
QKeySequence.MoveToNextWord = QKeySequence_Wrapper.MoveToNextWord;
QKeySequence.MoveToPreviousWord = QKeySequence_Wrapper.MoveToPreviousWord;
QKeySequence.MoveToNextLine = QKeySequence_Wrapper.MoveToNextLine;
QKeySequence.MoveToPreviousLine = QKeySequence_Wrapper.MoveToPreviousLine;
QKeySequence.MoveToNextPage = QKeySequence_Wrapper.MoveToNextPage;
QKeySequence.MoveToPreviousPage = QKeySequence_Wrapper.MoveToPreviousPage;
QKeySequence.MoveToStartOfLine = QKeySequence_Wrapper.MoveToStartOfLine;
QKeySequence.MoveToEndOfLine = QKeySequence_Wrapper.MoveToEndOfLine;
QKeySequence.MoveToStartOfBlock = QKeySequence_Wrapper.MoveToStartOfBlock;
QKeySequence.MoveToEndOfBlock = QKeySequence_Wrapper.MoveToEndOfBlock;
QKeySequence.MoveToStartOfDocument = QKeySequence_Wrapper.MoveToStartOfDocument;
QKeySequence.MoveToEndOfDocument = QKeySequence_Wrapper.MoveToEndOfDocument;
QKeySequence.SelectNextChar = QKeySequence_Wrapper.SelectNextChar;
QKeySequence.SelectPreviousChar = QKeySequence_Wrapper.SelectPreviousChar;
QKeySequence.SelectNextWord = QKeySequence_Wrapper.SelectNextWord;
QKeySequence.SelectPreviousWord = QKeySequence_Wrapper.SelectPreviousWord;
QKeySequence.SelectNextLine = QKeySequence_Wrapper.SelectNextLine;
QKeySequence.SelectPreviousLine = QKeySequence_Wrapper.SelectPreviousLine;
QKeySequence.SelectNextPage = QKeySequence_Wrapper.SelectNextPage;
QKeySequence.SelectPreviousPage = QKeySequence_Wrapper.SelectPreviousPage;
QKeySequence.SelectStartOfLine = QKeySequence_Wrapper.SelectStartOfLine;
QKeySequence.SelectEndOfLine = QKeySequence_Wrapper.SelectEndOfLine;
QKeySequence.SelectStartOfBlock = QKeySequence_Wrapper.SelectStartOfBlock;
QKeySequence.SelectEndOfBlock = QKeySequence_Wrapper.SelectEndOfBlock;
QKeySequence.SelectStartOfDocument = QKeySequence_Wrapper.SelectStartOfDocument;
QKeySequence.SelectEndOfDocument = QKeySequence_Wrapper.SelectEndOfDocument;
QKeySequence.DeleteStartOfWord = QKeySequence_Wrapper.DeleteStartOfWord;
QKeySequence.DeleteEndOfWord = QKeySequence_Wrapper.DeleteEndOfWord;
QKeySequence.DeleteEndOfLine = QKeySequence_Wrapper.DeleteEndOfLine;
QKeySequence.InsertParagraphSeparator = QKeySequence_Wrapper.InsertParagraphSeparator;
QKeySequence.InsertLineSeparator = QKeySequence_Wrapper.InsertLineSeparator;
QKeySequence.SaveAs = QKeySequence_Wrapper.SaveAs;
QKeySequence.Preferences = QKeySequence_Wrapper.Preferences;
QKeySequence.Quit = QKeySequence_Wrapper.Quit;
QKeySequence.FullScreen = QKeySequence_Wrapper.FullScreen;
QKeySequence.Deselect = QKeySequence_Wrapper.Deselect;
QKeySequence.DeleteCompleteLine = QKeySequence_Wrapper.DeleteCompleteLine;
QKeySequence.Backspace = QKeySequence_Wrapper.Backspace;
QKeySequence.Cancel = QKeySequence_Wrapper.Cancel;

  // enum: SequenceFormat
QKeySequence.NativeText = QKeySequence_Wrapper.NativeText;
QKeySequence.PortableText = QKeySequence_Wrapper.PortableText;

  // enum: SequenceMatch
QKeySequence.NoMatch = QKeySequence_Wrapper.NoMatch;
QKeySequence.PartialMatch = QKeySequence_Wrapper.PartialMatch;
QKeySequence.ExactMatch = QKeySequence_Wrapper.ExactMatch;


      // functions:
      

      // static functions:
      

        // static function 
        QKeySequence.fromString = function() 
          
        {
          //print("JS: QKeySequence.fromString");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QKeySequence_WrapperSingletonInstance.fromString(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QKeySequence);
  }

  
  else {
    
        print("QKeySequence.fromString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QKeySequence.listFromString = function() 
          
        {
          //print("JS: QKeySequence.listFromString");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QKeySequence_WrapperSingletonInstance.listFromString(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QKeySequence);
  }

  
  else {
    
        print("QKeySequence.listFromString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QKeySequence.listToString = function() 
          
        {
          //print("JS: QKeySequence.listToString");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QKeySequence_WrapperSingletonInstance.listToString(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QKeySequence);
  }

  
  else {
    
        print("QKeySequence.listToString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QKeySequence.mnemonic = function() 
          
        {
          //print("JS: QKeySequence.mnemonic");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QKeySequence_WrapperSingletonInstance.mnemonic(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QKeySequence);
  }

  
  else {
    
        print("QKeySequence.mnemonic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QKeySequence.keyBindings = function() 
          
        {
          //print("JS: QKeySequence.keyBindings");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QKeySequence_WrapperSingletonInstance.keyBindings(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QKeySequence);
  }

  
  else {
    
        print("QKeySequence.keyBindings(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QKeySequence.decodeString = function() 
          
        {
          //print("JS: QKeySequence.decodeString");
          
        };
      

        // static function 
        QKeySequence.encodeString = function() 
          
        {
          //print("JS: QKeySequence.encodeString");
          
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QKeySequence.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QKeySequence.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    