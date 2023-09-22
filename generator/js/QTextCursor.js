
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
            arguments[2].getWrappedType()===
              
                  RJSType_QTextCursor.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTextCursor);
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
          

        copyProperties(this, wrapper, QTextCursor);

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
          

        copyProperties(this, wrapper, QTextCursor);

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
          

        copyProperties(this, wrapper, QTextCursor);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
      

      // static functions:
      

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
    