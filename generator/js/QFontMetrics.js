
      // auto generated
      //var self;

      // class constructor:
      function QFontMetrics() {
        

        // should be QFontMetrics_BaseJs.call(this, engine):
        //QFontMetrics.prototype = new QFontMetrics_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFontMetrics.getIdStatic()))) {

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
            qWarning("QFontMetrics.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QFontMetrics_Wrapper(
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

      

        //copyProperties(this, wrapper, QFontMetrics);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QFontMetrics_Wrapper(
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

      

        //copyProperties(this, wrapper, QFontMetrics);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QFontMetrics_Wrapper(
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

      

        //copyProperties(this, wrapper, QFontMetrics);
  }

  
  else {
    
        print("QFontMetrics(): wrong number / type of arguments");
      
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

      //QFontMetrics.prototype = new QFontMetrics_BaseJs(engine);
      //QFontMetrics.prototype = new QFontMetrics_Wrapper(engine);
      QFontMetrics.prototype = new Object();

      QFontMetrics.prototype.toString = function() {
          //return "QFontMetrics [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFontMetrics [JS]";
        };
      QFontMetrics.getObjectType = function() {
        return RJSType_QFontMetrics.getIdStatic();
      };

      QFontMetrics.prototype.getObjectType = function() {
        return RJSType_QFontMetrics.getIdStatic();
      };

      QFontMetrics.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFontMetrics.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QFontMetrics.prototype.ascent = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.ascent");
          return this.__PROXY__.ascent(...args);
        };
    
        // function 
        QFontMetrics.prototype.capHeight = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.capHeight");
          return this.__PROXY__.capHeight(...args);
        };
    
        // function 
        QFontMetrics.prototype.descent = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.descent");
          return this.__PROXY__.descent(...args);
        };
    
        // function 
        QFontMetrics.prototype.height = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.height");
          return this.__PROXY__.height(...args);
        };
    
        // function 
        QFontMetrics.prototype.leading = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.leading");
          return this.__PROXY__.leading(...args);
        };
    
        // function 
        QFontMetrics.prototype.lineSpacing = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.lineSpacing");
          return this.__PROXY__.lineSpacing(...args);
        };
    
        // function 
        QFontMetrics.prototype.minLeftBearing = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.minLeftBearing");
          return this.__PROXY__.minLeftBearing(...args);
        };
    
        // function 
        QFontMetrics.prototype.minRightBearing = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.minRightBearing");
          return this.__PROXY__.minRightBearing(...args);
        };
    
        // function 
        QFontMetrics.prototype.maxWidth = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.maxWidth");
          return this.__PROXY__.maxWidth(...args);
        };
    
        // function 
        QFontMetrics.prototype.xHeight = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.xHeight");
          return this.__PROXY__.xHeight(...args);
        };
    
        // function 
        QFontMetrics.prototype.averageCharWidth = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.averageCharWidth");
          return this.__PROXY__.averageCharWidth(...args);
        };
    
        // function 
        QFontMetrics.prototype.inFont = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.inFont");
          return this.__PROXY__.inFont(...args);
        };
    
        // function 
        QFontMetrics.prototype.inFontUcs4 = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.inFontUcs4");
          return this.__PROXY__.inFontUcs4(...args);
        };
    
        // function 
        QFontMetrics.prototype.leftBearing = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.leftBearing");
          return this.__PROXY__.leftBearing(...args);
        };
    
        // function 
        QFontMetrics.prototype.rightBearing = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.rightBearing");
          return this.__PROXY__.rightBearing(...args);
        };
    
        // function 
        QFontMetrics.prototype.horizontalAdvance = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.horizontalAdvance");
          return this.__PROXY__.horizontalAdvance(...args);
        };
    
        // function 
        QFontMetrics.prototype.boundingRect = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.boundingRect");
          return this.__PROXY__.boundingRect(...args);
        };
    
        // function 
        QFontMetrics.prototype.size = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.size");
          return this.__PROXY__.size(...args);
        };
    
        // function 
        QFontMetrics.prototype.tightBoundingRect = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.tightBoundingRect");
          return this.__PROXY__.tightBoundingRect(...args);
        };
    
        // function 
        QFontMetrics.prototype.elidedText = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.elidedText");
          return this.__PROXY__.elidedText(...args);
        };
    
        // function 
        QFontMetrics.prototype.underlinePos = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.underlinePos");
          return this.__PROXY__.underlinePos(...args);
        };
    
        // function 
        QFontMetrics.prototype.overlinePos = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.overlinePos");
          return this.__PROXY__.overlinePos(...args);
        };
    
        // function 
        QFontMetrics.prototype.strikeOutPos = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.strikeOutPos");
          return this.__PROXY__.strikeOutPos(...args);
        };
    
        // function 
        QFontMetrics.prototype.lineWidth = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.lineWidth");
          return this.__PROXY__.lineWidth(...args);
        };
    
        // function 
        QFontMetrics.prototype.fontDpi = function(...args) 
          
        {
          //print("JS: QFontMetrics.prototype.fontDpi");
          return this.__PROXY__.fontDpi(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFontMetrics.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFontMetrics.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QFontMetrics.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      