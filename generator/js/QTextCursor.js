
      // auto generated
      //var self;

      // class constructor:
      function QTextCursor() {
        

        // should be QTextCursor_BaseJs.call(this, engine):
        //QTextCursor.prototype = new QTextCursor_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextCursor.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("QTextCursor.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QTextCursor_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextCursor);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QTextCursor_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextCursor);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTextCursor_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextCursor);
  }

  
  else {
    
        print("QTextCursor(): wrong number / type of arguments");
      
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

      //QTextCursor.prototype = new QTextCursor_BaseJs(engine);
      //QTextCursor.prototype = new QTextCursor_Wrapper(engine);
      QTextCursor.prototype = new Object();


      QTextCursor.prototype.toString = function() {
          //return "QTextCursor [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextCursor [JS]";
        };
      QTextCursor.getObjectType = function() {
        return RJSType_QTextCursor.getIdStatic();
      };

      QTextCursor.prototype.getObjectType = function() {
        return RJSType_QTextCursor.getIdStatic();
      };

      QTextCursor.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextCursor.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: MoveMode
QTextCursor.MoveAnchor = QTextCursor_Wrapper.MoveAnchor;
QTextCursor.KeepAnchor = QTextCursor_Wrapper.KeepAnchor;

  // enum: MoveOperation
QTextCursor.NoMove = QTextCursor_Wrapper.NoMove;
QTextCursor.Start = QTextCursor_Wrapper.Start;
QTextCursor.Up = QTextCursor_Wrapper.Up;
QTextCursor.StartOfLine = QTextCursor_Wrapper.StartOfLine;
QTextCursor.StartOfBlock = QTextCursor_Wrapper.StartOfBlock;
QTextCursor.StartOfWord = QTextCursor_Wrapper.StartOfWord;
QTextCursor.PreviousBlock = QTextCursor_Wrapper.PreviousBlock;
QTextCursor.PreviousCharacter = QTextCursor_Wrapper.PreviousCharacter;
QTextCursor.PreviousWord = QTextCursor_Wrapper.PreviousWord;
QTextCursor.Left = QTextCursor_Wrapper.Left;
QTextCursor.WordLeft = QTextCursor_Wrapper.WordLeft;
QTextCursor.End = QTextCursor_Wrapper.End;
QTextCursor.Down = QTextCursor_Wrapper.Down;
QTextCursor.EndOfLine = QTextCursor_Wrapper.EndOfLine;
QTextCursor.EndOfWord = QTextCursor_Wrapper.EndOfWord;
QTextCursor.EndOfBlock = QTextCursor_Wrapper.EndOfBlock;
QTextCursor.NextBlock = QTextCursor_Wrapper.NextBlock;
QTextCursor.NextCharacter = QTextCursor_Wrapper.NextCharacter;
QTextCursor.NextWord = QTextCursor_Wrapper.NextWord;
QTextCursor.Right = QTextCursor_Wrapper.Right;
QTextCursor.WordRight = QTextCursor_Wrapper.WordRight;
QTextCursor.NextCell = QTextCursor_Wrapper.NextCell;
QTextCursor.PreviousCell = QTextCursor_Wrapper.PreviousCell;
QTextCursor.NextRow = QTextCursor_Wrapper.NextRow;
QTextCursor.PreviousRow = QTextCursor_Wrapper.PreviousRow;

  // enum: SelectionType
QTextCursor.WordUnderCursor = QTextCursor_Wrapper.WordUnderCursor;
QTextCursor.LineUnderCursor = QTextCursor_Wrapper.LineUnderCursor;
QTextCursor.BlockUnderCursor = QTextCursor_Wrapper.BlockUnderCursor;
QTextCursor.Document = QTextCursor_Wrapper.Document;


      // functions:
      
        // function 
        QTextCursor.prototype.swap = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
        
        // function 
        QTextCursor.prototype.isNull = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.isNull");
          
              return this.__PROXY__.isNull(...args);
            
        };
        
        // function 
        QTextCursor.prototype.setPosition = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.setPosition");
          
              return this.__PROXY__.setPosition(...args);
            
        };
        
        // function 
        QTextCursor.prototype.position = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.position");
          
              return this.__PROXY__.position(...args);
            
        };
        
        // function 
        QTextCursor.prototype.positionInBlock = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.positionInBlock");
          
              return this.__PROXY__.positionInBlock(...args);
            
        };
        
        // function 
        QTextCursor.prototype.anchor = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.anchor");
          
              return this.__PROXY__.anchor(...args);
            
        };
        
        // function 
        QTextCursor.prototype.insertText = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.insertText");
          
              return this.__PROXY__.insertText(...args);
            
        };
        
        // function 
        QTextCursor.prototype.movePosition = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.movePosition");
          
              return this.__PROXY__.movePosition(...args);
            
        };
        
        // function 
        QTextCursor.prototype.visualNavigation = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.visualNavigation");
          
              return this.__PROXY__.visualNavigation(...args);
            
        };
        
        // function 
        QTextCursor.prototype.setVisualNavigation = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.setVisualNavigation");
          
              return this.__PROXY__.setVisualNavigation(...args);
            
        };
        
        // function 
        QTextCursor.prototype.setVerticalMovementX = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.setVerticalMovementX");
          
              return this.__PROXY__.setVerticalMovementX(...args);
            
        };
        
        // function 
        QTextCursor.prototype.verticalMovementX = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.verticalMovementX");
          
              return this.__PROXY__.verticalMovementX(...args);
            
        };
        
        // function 
        QTextCursor.prototype.setKeepPositionOnInsert = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.setKeepPositionOnInsert");
          
              return this.__PROXY__.setKeepPositionOnInsert(...args);
            
        };
        
        // function 
        QTextCursor.prototype.keepPositionOnInsert = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.keepPositionOnInsert");
          
              return this.__PROXY__.keepPositionOnInsert(...args);
            
        };
        
        // function 
        QTextCursor.prototype.deleteChar = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.deleteChar");
          
              return this.__PROXY__.deleteChar(...args);
            
        };
        
        // function 
        QTextCursor.prototype.deletePreviousChar = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.deletePreviousChar");
          
              return this.__PROXY__.deletePreviousChar(...args);
            
        };
        
        // function 
        QTextCursor.prototype.select = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.select");
          
              return this.__PROXY__.select(...args);
            
        };
        
        // function 
        QTextCursor.prototype.hasSelection = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.hasSelection");
          
              return this.__PROXY__.hasSelection(...args);
            
        };
        
        // function 
        QTextCursor.prototype.hasComplexSelection = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.hasComplexSelection");
          
              return this.__PROXY__.hasComplexSelection(...args);
            
        };
        
        // function 
        QTextCursor.prototype.removeSelectedText = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.removeSelectedText");
          
              return this.__PROXY__.removeSelectedText(...args);
            
        };
        
        // function 
        QTextCursor.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.clearSelection");
          
              return this.__PROXY__.clearSelection(...args);
            
        };
        
        // function 
        QTextCursor.prototype.selectionStart = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.selectionStart");
          
              return this.__PROXY__.selectionStart(...args);
            
        };
        
        // function 
        QTextCursor.prototype.selectionEnd = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.selectionEnd");
          
              return this.__PROXY__.selectionEnd(...args);
            
        };
        
        // function 
        QTextCursor.prototype.selectedText = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.selectedText");
          
              return this.__PROXY__.selectedText(...args);
            
        };
        
        // function 
        QTextCursor.prototype.charFormat = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.charFormat");
          
              return this.__PROXY__.charFormat(...args);
            
        };
        
        // function 
        QTextCursor.prototype.setCharFormat = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.setCharFormat");
          
              return this.__PROXY__.setCharFormat(...args);
            
        };
        
        // function 
        QTextCursor.prototype.mergeCharFormat = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.mergeCharFormat");
          
              return this.__PROXY__.mergeCharFormat(...args);
            
        };
        
        // function 
        QTextCursor.prototype.blockFormat = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.blockFormat");
          
              return this.__PROXY__.blockFormat(...args);
            
        };
        
        // function 
        QTextCursor.prototype.setBlockFormat = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.setBlockFormat");
          
              return this.__PROXY__.setBlockFormat(...args);
            
        };
        
        // function 
        QTextCursor.prototype.mergeBlockFormat = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.mergeBlockFormat");
          
              return this.__PROXY__.mergeBlockFormat(...args);
            
        };
        
        // function 
        QTextCursor.prototype.blockCharFormat = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.blockCharFormat");
          
              return this.__PROXY__.blockCharFormat(...args);
            
        };
        
        // function 
        QTextCursor.prototype.setBlockCharFormat = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.setBlockCharFormat");
          
              return this.__PROXY__.setBlockCharFormat(...args);
            
        };
        
        // function 
        QTextCursor.prototype.mergeBlockCharFormat = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.mergeBlockCharFormat");
          
              return this.__PROXY__.mergeBlockCharFormat(...args);
            
        };
        
        // function 
        QTextCursor.prototype.atBlockStart = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.atBlockStart");
          
              return this.__PROXY__.atBlockStart(...args);
            
        };
        
        // function 
        QTextCursor.prototype.atBlockEnd = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.atBlockEnd");
          
              return this.__PROXY__.atBlockEnd(...args);
            
        };
        
        // function 
        QTextCursor.prototype.atStart = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.atStart");
          
              return this.__PROXY__.atStart(...args);
            
        };
        
        // function 
        QTextCursor.prototype.atEnd = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.atEnd");
          
              return this.__PROXY__.atEnd(...args);
            
        };
        
        // function 
        QTextCursor.prototype.insertBlock = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.insertBlock");
          
              return this.__PROXY__.insertBlock(...args);
            
        };
        
        // function 
        QTextCursor.prototype.insertHtml = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.insertHtml");
          
              return this.__PROXY__.insertHtml(...args);
            
        };
        
        // function 
        QTextCursor.prototype.insertImage = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.insertImage");
          
              return this.__PROXY__.insertImage(...args);
            
        };
        
        // function 
        QTextCursor.prototype.beginEditBlock = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.beginEditBlock");
          
              return this.__PROXY__.beginEditBlock(...args);
            
        };
        
        // function 
        QTextCursor.prototype.joinPreviousEditBlock = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.joinPreviousEditBlock");
          
              return this.__PROXY__.joinPreviousEditBlock(...args);
            
        };
        
        // function 
        QTextCursor.prototype.endEditBlock = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.endEditBlock");
          
              return this.__PROXY__.endEditBlock(...args);
            
        };
        
        // function 
        QTextCursor.prototype.isCopyOf = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.isCopyOf");
          
              return this.__PROXY__.isCopyOf(...args);
            
        };
        
        // function 
        QTextCursor.prototype.blockNumber = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.blockNumber");
          
              return this.__PROXY__.blockNumber(...args);
            
        };
        
        // function 
        QTextCursor.prototype.columnNumber = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.columnNumber");
          
              return this.__PROXY__.columnNumber(...args);
            
        };
        
        // function 
        QTextCursor.prototype.document = function(...args) 
          
        {
          //print("JS: QTextCursor.prototype.document");
          
              return this.__PROXY__.document(...args);
            
        };
        

      // static functions:
      QTextCursor.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTextCursor.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTextCursor.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextCursor.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextCursor.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTextCursor.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      