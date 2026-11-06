
      // auto generated
      //var self;

      // class constructor:
      function QTextLayout() {
        

        // should be QTextLayout_BaseJs.call(this, engine):
        //QTextLayout.prototype = new QTextLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextLayout.getIdStatic()))) {

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
            qWarning("QTextLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QTextLayout_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextLayout);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QTextLayout_Wrapper(
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

      

        //copyProperties(this, wrapper, QTextLayout);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTextLayout_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextLayout);
  }

  
  else {
    
        print("QTextLayout(): wrong number / type of arguments");
      
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

      //QTextLayout.prototype = new QTextLayout_BaseJs(engine);
      //QTextLayout.prototype = new QTextLayout_Wrapper(engine);
      QTextLayout.prototype = new Object();


      QTextLayout.prototype.toString = function() {
          //return "QTextLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextLayout [JS]";
        };
      QTextLayout.getObjectType = function() {
        return RJSType_QTextLayout.getIdStatic();
      };

      QTextLayout.prototype.getObjectType = function() {
        return RJSType_QTextLayout.getIdStatic();
      };

      QTextLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextLayout.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QTextLayout.prototype.setFont = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QTextLayout.prototype.font = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.font");
          
              return this.__PROXY__.font(...args);
            
        };
    
        // function 
        QTextLayout.prototype.setText = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        QTextLayout.prototype.text = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.text");
          
              return this.__PROXY__.text(...args);
            
        };
    
        // function 
        QTextLayout.prototype.setPreeditArea = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.setPreeditArea");
          
              return this.__PROXY__.setPreeditArea(...args);
            
        };
    
        // function 
        QTextLayout.prototype.preeditAreaPosition = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.preeditAreaPosition");
          
              return this.__PROXY__.preeditAreaPosition(...args);
            
        };
    
        // function 
        QTextLayout.prototype.preeditAreaText = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.preeditAreaText");
          
              return this.__PROXY__.preeditAreaText(...args);
            
        };
    
        // function 
        QTextLayout.prototype.clearFormats = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.clearFormats");
          
              return this.__PROXY__.clearFormats(...args);
            
        };
    
        // function 
        QTextLayout.prototype.setCacheEnabled = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.setCacheEnabled");
          
              return this.__PROXY__.setCacheEnabled(...args);
            
        };
    
        // function 
        QTextLayout.prototype.cacheEnabled = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.cacheEnabled");
          
              return this.__PROXY__.cacheEnabled(...args);
            
        };
    
        // function 
        QTextLayout.prototype.setCursorMoveStyle = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.setCursorMoveStyle");
          
              return this.__PROXY__.setCursorMoveStyle(...args);
            
        };
    
        // function 
        QTextLayout.prototype.cursorMoveStyle = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.cursorMoveStyle");
          
              return this.__PROXY__.cursorMoveStyle(...args);
            
        };
    
        // function 
        QTextLayout.prototype.beginLayout = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.beginLayout");
          
              return this.__PROXY__.beginLayout(...args);
            
        };
    
        // function 
        QTextLayout.prototype.endLayout = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.endLayout");
          
              return this.__PROXY__.endLayout(...args);
            
        };
    
        // function 
        QTextLayout.prototype.clearLayout = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.clearLayout");
          
              return this.__PROXY__.clearLayout(...args);
            
        };
    
        // function 
        QTextLayout.prototype.lineCount = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.lineCount");
          
              return this.__PROXY__.lineCount(...args);
            
        };
    
        // function 
        QTextLayout.prototype.isValidCursorPosition = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.isValidCursorPosition");
          
              return this.__PROXY__.isValidCursorPosition(...args);
            
        };
    
        // function 
        QTextLayout.prototype.nextCursorPosition = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.nextCursorPosition");
          
              return this.__PROXY__.nextCursorPosition(...args);
            
        };
    
        // function 
        QTextLayout.prototype.previousCursorPosition = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.previousCursorPosition");
          
              return this.__PROXY__.previousCursorPosition(...args);
            
        };
    
        // function 
        QTextLayout.prototype.leftCursorPosition = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.leftCursorPosition");
          
              return this.__PROXY__.leftCursorPosition(...args);
            
        };
    
        // function 
        QTextLayout.prototype.rightCursorPosition = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.rightCursorPosition");
          
              return this.__PROXY__.rightCursorPosition(...args);
            
        };
    
        // function 
        QTextLayout.prototype.drawCursor = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.drawCursor");
          
              return this.__PROXY__.drawCursor(...args);
            
        };
    
        // function 
        QTextLayout.prototype.position = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.position");
          
              return this.__PROXY__.position(...args);
            
        };
    
        // function 
        QTextLayout.prototype.setPosition = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.setPosition");
          
              return this.__PROXY__.setPosition(...args);
            
        };
    
        // function 
        QTextLayout.prototype.boundingRect = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.boundingRect");
          
              return this.__PROXY__.boundingRect(...args);
            
        };
    
        // function 
        QTextLayout.prototype.minimumWidth = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.minimumWidth");
          
              return this.__PROXY__.minimumWidth(...args);
            
        };
    
        // function 
        QTextLayout.prototype.maximumWidth = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.maximumWidth");
          
              return this.__PROXY__.maximumWidth(...args);
            
        };
    
        // function 
        QTextLayout.prototype.setFlags = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.setFlags");
          
              return this.__PROXY__.setFlags(...args);
            
        };
    
        // function 
        QTextLayout.prototype.qt_format_text = function(...args) 
          
        {
          //print("JS: QTextLayout.prototype.qt_format_text");
          
              return this.__PROXY__.qt_format_text(...args);
            
        };
    

      // static functions:
      QTextLayout.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTextLayout.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTextLayout.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTextLayout.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      