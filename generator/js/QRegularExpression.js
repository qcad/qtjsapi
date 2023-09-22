
      // auto generated
      //var self;

      // class constructor:
      function QRegularExpression() {
        

        // should be QRegularExpression_BaseJs.call(this, engine):
        //QRegularExpression.prototype = new QRegularExpression_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QRegularExpression.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QRegularExpression);
            //}
          }
          else {
            qWarning("QRegularExpression.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QRegularExpression_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRegularExpression);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRegularExpression);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QRegularExpression_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRegularExpression);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRegularExpression);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QRegularExpression_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRegularExpression);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRegularExpression);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QRegularExpression_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRegularExpression);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRegularExpression);
  }

  
  else {
    
        print("QRegularExpression(): wrong number / type of arguments");
      
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

      //QRegularExpression.prototype = new QRegularExpression_BaseJs(engine);
      //QRegularExpression.prototype = new QRegularExpression_Wrapper(engine);
      QRegularExpression.prototype = new Object();

      QRegularExpression.prototype.toString = function() {
          //return "QRegularExpression [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QRegularExpression [JS]";
        };
      QRegularExpression.getObjectType = function() {
        
            return RJSType_QRegularExpression.getIdStatic();
          
      };

      QRegularExpression.prototype.getObjectType = function() {
        
            return RJSType_QRegularExpression.getIdStatic();
          
      };

      QRegularExpression.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QRegularExpression.getIdStatic()) {
              return true;
            }
          

        return false;


        
      };

      // enum values:
      
  // enum: PatternOption
QRegularExpression.NoPatternOption = QRegularExpression_Wrapper.NoPatternOption;
QRegularExpression.CaseInsensitiveOption = QRegularExpression_Wrapper.CaseInsensitiveOption;
QRegularExpression.DotMatchesEverythingOption = QRegularExpression_Wrapper.DotMatchesEverythingOption;
QRegularExpression.MultilineOption = QRegularExpression_Wrapper.MultilineOption;
QRegularExpression.ExtendedPatternSyntaxOption = QRegularExpression_Wrapper.ExtendedPatternSyntaxOption;
QRegularExpression.InvertedGreedinessOption = QRegularExpression_Wrapper.InvertedGreedinessOption;
QRegularExpression.DontCaptureOption = QRegularExpression_Wrapper.DontCaptureOption;
QRegularExpression.UseUnicodePropertiesOption = QRegularExpression_Wrapper.UseUnicodePropertiesOption;

  // enum: MatchType
QRegularExpression.NormalMatch = QRegularExpression_Wrapper.NormalMatch;
QRegularExpression.PartialPreferCompleteMatch = QRegularExpression_Wrapper.PartialPreferCompleteMatch;
QRegularExpression.PartialPreferFirstMatch = QRegularExpression_Wrapper.PartialPreferFirstMatch;
QRegularExpression.NoMatch = QRegularExpression_Wrapper.NoMatch;

  // enum: MatchOption
QRegularExpression.NoMatchOption = QRegularExpression_Wrapper.NoMatchOption;
QRegularExpression.AnchorAtOffsetMatchOption = QRegularExpression_Wrapper.AnchorAtOffsetMatchOption;
QRegularExpression.DontCheckSubjectStringMatchOption = QRegularExpression_Wrapper.DontCheckSubjectStringMatchOption;

  // enum: WildcardConversionOption
QRegularExpression.DefaultWildcardConversion = QRegularExpression_Wrapper.DefaultWildcardConversion;
QRegularExpression.UnanchoredWildcardConversion = QRegularExpression_Wrapper.UnanchoredWildcardConversion;


      // functions:
      

      // static functions:
      

        // static function 
        QRegularExpression.escape = function() 
          
        {
          //print("JS: QRegularExpression.escape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QRegularExpression_WrapperSingletonInstance.escape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QRegularExpression);
  }

  
  else {
    
        print("QRegularExpression.escape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QRegularExpression.wildcardToRegularExpression = function() 
          
        {
          //print("JS: QRegularExpression.wildcardToRegularExpression");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QRegularExpression_WrapperSingletonInstance.wildcardToRegularExpression(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QRegularExpression);
  }

  
  else {
    
        print("QRegularExpression.wildcardToRegularExpression(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QRegularExpression.anchoredPattern = function() 
          
        {
          //print("JS: QRegularExpression.anchoredPattern");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QRegularExpression_WrapperSingletonInstance.anchoredPattern(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QRegularExpression);
  }

  
  else {
    
        print("QRegularExpression.anchoredPattern(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QRegularExpression.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QRegularExpression.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    