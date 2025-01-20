
      // auto generated
      //var self;

      // class constructor:
      function QFontMetricsF() {
        

        // should be QFontMetricsF_BaseJs.call(this, engine):
        //QFontMetricsF.prototype = new QFontMetricsF_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFontMetricsF.getIdStatic()))) {

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
            qWarning("QFontMetricsF.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QFontMetricsF_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFontMetricsF);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QFontMetricsF_Wrapper(
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

      

        //copyProperties(this, wrapper, QFontMetricsF);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QFontMetricsF_Wrapper(
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

      

        //copyProperties(this, wrapper, QFontMetricsF);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QFontMetricsF_Wrapper(
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

      

        //copyProperties(this, wrapper, QFontMetricsF);
  }

  
  else {
    
        print("QFontMetricsF(): wrong number / type of arguments");
      
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

      //QFontMetricsF.prototype = new QFontMetricsF_BaseJs(engine);
      //QFontMetricsF.prototype = new QFontMetricsF_Wrapper(engine);
      QFontMetricsF.prototype = new Object();

      QFontMetricsF.prototype.toString = function() {
          //return "QFontMetricsF [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFontMetricsF [JS]";
        };
      QFontMetricsF.getObjectType = function() {
        return RJSType_QFontMetricsF.getIdStatic();
      };

      QFontMetricsF.prototype.getObjectType = function() {
        return RJSType_QFontMetricsF.getIdStatic();
      };

      QFontMetricsF.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFontMetricsF.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QFontMetricsF.prototype.swap = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QFontMetricsF.prototype.ascent = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.ascent");
          return this.__PROXY__.ascent(...args);
        };
    
        // function 
        QFontMetricsF.prototype.capHeight = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.capHeight");
          return this.__PROXY__.capHeight(...args);
        };
    
        // function 
        QFontMetricsF.prototype.descent = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.descent");
          return this.__PROXY__.descent(...args);
        };
    
        // function 
        QFontMetricsF.prototype.height = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.height");
          return this.__PROXY__.height(...args);
        };
    
        // function 
        QFontMetricsF.prototype.leading = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.leading");
          return this.__PROXY__.leading(...args);
        };
    
        // function 
        QFontMetricsF.prototype.lineSpacing = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.lineSpacing");
          return this.__PROXY__.lineSpacing(...args);
        };
    
        // function 
        QFontMetricsF.prototype.minLeftBearing = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.minLeftBearing");
          return this.__PROXY__.minLeftBearing(...args);
        };
    
        // function 
        QFontMetricsF.prototype.minRightBearing = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.minRightBearing");
          return this.__PROXY__.minRightBearing(...args);
        };
    
        // function 
        QFontMetricsF.prototype.maxWidth = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.maxWidth");
          return this.__PROXY__.maxWidth(...args);
        };
    
        // function 
        QFontMetricsF.prototype.xHeight = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.xHeight");
          return this.__PROXY__.xHeight(...args);
        };
    
        // function 
        QFontMetricsF.prototype.averageCharWidth = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.averageCharWidth");
          return this.__PROXY__.averageCharWidth(...args);
        };
    
        // function 
        QFontMetricsF.prototype.inFont = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.inFont");
          return this.__PROXY__.inFont(...args);
        };
    
        // function 
        QFontMetricsF.prototype.inFontUcs4 = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.inFontUcs4");
          return this.__PROXY__.inFontUcs4(...args);
        };
    
        // function 
        QFontMetricsF.prototype.leftBearing = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.leftBearing");
          return this.__PROXY__.leftBearing(...args);
        };
    
        // function 
        QFontMetricsF.prototype.rightBearing = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.rightBearing");
          return this.__PROXY__.rightBearing(...args);
        };
    
        // function 
        QFontMetricsF.prototype.horizontalAdvance = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.horizontalAdvance");
          return this.__PROXY__.horizontalAdvance(...args);
        };
    
        // function 
        QFontMetricsF.prototype.boundingRect = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.boundingRect");
          return this.__PROXY__.boundingRect(...args);
        };
    
        // function 
        QFontMetricsF.prototype.size = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.size");
          return this.__PROXY__.size(...args);
        };
    
        // function 
        QFontMetricsF.prototype.tightBoundingRect = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.tightBoundingRect");
          return this.__PROXY__.tightBoundingRect(...args);
        };
    
        // function 
        QFontMetricsF.prototype.elidedText = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.elidedText");
          return this.__PROXY__.elidedText(...args);
        };
    
        // function 
        QFontMetricsF.prototype.underlinePos = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.underlinePos");
          return this.__PROXY__.underlinePos(...args);
        };
    
        // function 
        QFontMetricsF.prototype.overlinePos = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.overlinePos");
          return this.__PROXY__.overlinePos(...args);
        };
    
        // function 
        QFontMetricsF.prototype.strikeOutPos = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.strikeOutPos");
          return this.__PROXY__.strikeOutPos(...args);
        };
    
        // function 
        QFontMetricsF.prototype.lineWidth = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.lineWidth");
          return this.__PROXY__.lineWidth(...args);
        };
    
        // function 
        QFontMetricsF.prototype.fontDpi = function(...args) 
          
        {
          //print("JS: QFontMetricsF.prototype.fontDpi");
          return this.__PROXY__.fontDpi(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFontMetricsF.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFontMetricsF.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QFontMetricsF.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      