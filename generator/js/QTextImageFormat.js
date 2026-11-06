
      // auto generated
      //var self;

      // class constructor:
      function QTextImageFormat() {
        

        // should be QTextImageFormat_BaseJs.call(this, engine):
        //QTextImageFormat.prototype = new QTextImageFormat_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextImageFormat.getIdStatic()))) {

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
            qWarning("QTextImageFormat.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTextImageFormat_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextImageFormat);
  }

  
  else {
    
        print("QTextImageFormat(): wrong number / type of arguments");
      
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

      //QTextImageFormat.prototype = new QTextImageFormat_BaseJs(engine);
      //QTextImageFormat.prototype = new QTextImageFormat_Wrapper(engine);
      QTextImageFormat.prototype = new Object();


      QTextImageFormat.prototype.toString = function() {
          //return "QTextImageFormat [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextImageFormat [JS]";
        };
      QTextImageFormat.getObjectType = function() {
        return RJSType_QTextImageFormat.getIdStatic();
      };

      QTextImageFormat.prototype.getObjectType = function() {
        return RJSType_QTextImageFormat.getIdStatic();
      };

      QTextImageFormat.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextImageFormat.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QTextCharFormat.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: VerticalAlignment
QTextImageFormat.AlignNormal = QTextImageFormat_Wrapper.AlignNormal;
QTextImageFormat.AlignSuperScript = QTextImageFormat_Wrapper.AlignSuperScript;
QTextImageFormat.AlignSubScript = QTextImageFormat_Wrapper.AlignSubScript;
QTextImageFormat.AlignMiddle = QTextImageFormat_Wrapper.AlignMiddle;
QTextImageFormat.AlignTop = QTextImageFormat_Wrapper.AlignTop;
QTextImageFormat.AlignBottom = QTextImageFormat_Wrapper.AlignBottom;
QTextImageFormat.AlignBaseline = QTextImageFormat_Wrapper.AlignBaseline;

  // enum: UnderlineStyle
QTextImageFormat.NoUnderline = QTextImageFormat_Wrapper.NoUnderline;
QTextImageFormat.SingleUnderline = QTextImageFormat_Wrapper.SingleUnderline;
QTextImageFormat.DashUnderline = QTextImageFormat_Wrapper.DashUnderline;
QTextImageFormat.DotLine = QTextImageFormat_Wrapper.DotLine;
QTextImageFormat.DashDotLine = QTextImageFormat_Wrapper.DashDotLine;
QTextImageFormat.DashDotDotLine = QTextImageFormat_Wrapper.DashDotDotLine;
QTextImageFormat.WaveUnderline = QTextImageFormat_Wrapper.WaveUnderline;
QTextImageFormat.SpellCheckUnderline = QTextImageFormat_Wrapper.SpellCheckUnderline;

  // enum: FontPropertiesInheritanceBehavior
QTextImageFormat.FontPropertiesSpecifiedOnly = QTextImageFormat_Wrapper.FontPropertiesSpecifiedOnly;
QTextImageFormat.FontPropertiesAll = QTextImageFormat_Wrapper.FontPropertiesAll;


      // functions:
      
        // function 
        QTextImageFormat.prototype.setFont = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.font = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.font");
          
              return this.__PROXY__.font(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontFamilies = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontFamilies");
          
              return this.__PROXY__.setFontFamilies(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontFamilies = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontFamilies");
          
              return this.__PROXY__.fontFamilies(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontStyleName = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontStyleName");
          
              return this.__PROXY__.setFontStyleName(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontStyleName = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontStyleName");
          
              return this.__PROXY__.fontStyleName(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontPointSize = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontPointSize");
          
              return this.__PROXY__.setFontPointSize(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontPointSize = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontPointSize");
          
              return this.__PROXY__.fontPointSize(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontWeight = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontWeight");
          
              return this.__PROXY__.setFontWeight(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontWeight = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontWeight");
          
              return this.__PROXY__.fontWeight(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontItalic = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontItalic");
          
              return this.__PROXY__.setFontItalic(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontItalic = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontItalic");
          
              return this.__PROXY__.fontItalic(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontCapitalization = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontCapitalization");
          
              return this.__PROXY__.setFontCapitalization(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontCapitalization = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontCapitalization");
          
              return this.__PROXY__.fontCapitalization(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontLetterSpacingType = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontLetterSpacingType");
          
              return this.__PROXY__.setFontLetterSpacingType(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontLetterSpacingType = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontLetterSpacingType");
          
              return this.__PROXY__.fontLetterSpacingType(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontLetterSpacing = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontLetterSpacing");
          
              return this.__PROXY__.setFontLetterSpacing(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontLetterSpacing = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontLetterSpacing");
          
              return this.__PROXY__.fontLetterSpacing(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontWordSpacing = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontWordSpacing");
          
              return this.__PROXY__.setFontWordSpacing(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontWordSpacing = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontWordSpacing");
          
              return this.__PROXY__.fontWordSpacing(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontUnderline = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontUnderline");
          
              return this.__PROXY__.setFontUnderline(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontUnderline = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontUnderline");
          
              return this.__PROXY__.fontUnderline(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontOverline = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontOverline");
          
              return this.__PROXY__.setFontOverline(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontOverline = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontOverline");
          
              return this.__PROXY__.fontOverline(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontStrikeOut = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontStrikeOut");
          
              return this.__PROXY__.setFontStrikeOut(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontStrikeOut = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontStrikeOut");
          
              return this.__PROXY__.fontStrikeOut(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setUnderlineColor = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setUnderlineColor");
          
              return this.__PROXY__.setUnderlineColor(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.underlineColor = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.underlineColor");
          
              return this.__PROXY__.underlineColor(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontFixedPitch = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontFixedPitch");
          
              return this.__PROXY__.setFontFixedPitch(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontFixedPitch = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontFixedPitch");
          
              return this.__PROXY__.fontFixedPitch(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontStretch = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontStretch");
          
              return this.__PROXY__.setFontStretch(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontStretch = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontStretch");
          
              return this.__PROXY__.fontStretch(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontStyleHint = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontStyleHint");
          
              return this.__PROXY__.setFontStyleHint(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontStyleStrategy = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontStyleStrategy");
          
              return this.__PROXY__.setFontStyleStrategy(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontStyleHint = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontStyleHint");
          
              return this.__PROXY__.fontStyleHint(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontStyleStrategy = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontStyleStrategy");
          
              return this.__PROXY__.fontStyleStrategy(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontHintingPreference = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontHintingPreference");
          
              return this.__PROXY__.setFontHintingPreference(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontHintingPreference = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontHintingPreference");
          
              return this.__PROXY__.fontHintingPreference(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setFontKerning = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setFontKerning");
          
              return this.__PROXY__.setFontKerning(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.fontKerning = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.fontKerning");
          
              return this.__PROXY__.fontKerning(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setUnderlineStyle = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setUnderlineStyle");
          
              return this.__PROXY__.setUnderlineStyle(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.underlineStyle = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.underlineStyle");
          
              return this.__PROXY__.underlineStyle(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setVerticalAlignment = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setVerticalAlignment");
          
              return this.__PROXY__.setVerticalAlignment(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.verticalAlignment = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.verticalAlignment");
          
              return this.__PROXY__.verticalAlignment(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setTextOutline = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setTextOutline");
          
              return this.__PROXY__.setTextOutline(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.textOutline = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.textOutline");
          
              return this.__PROXY__.textOutline(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.toolTip = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.toolTip");
          
              return this.__PROXY__.toolTip(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setSuperScriptBaseline = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setSuperScriptBaseline");
          
              return this.__PROXY__.setSuperScriptBaseline(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.superScriptBaseline = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.superScriptBaseline");
          
              return this.__PROXY__.superScriptBaseline(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setSubScriptBaseline = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setSubScriptBaseline");
          
              return this.__PROXY__.setSubScriptBaseline(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.subScriptBaseline = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.subScriptBaseline");
          
              return this.__PROXY__.subScriptBaseline(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setBaselineOffset = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setBaselineOffset");
          
              return this.__PROXY__.setBaselineOffset(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.baselineOffset = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.baselineOffset");
          
              return this.__PROXY__.baselineOffset(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setAnchor = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setAnchor");
          
              return this.__PROXY__.setAnchor(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.isAnchor = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.isAnchor");
          
              return this.__PROXY__.isAnchor(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setAnchorHref = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setAnchorHref");
          
              return this.__PROXY__.setAnchorHref(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.anchorHref = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.anchorHref");
          
              return this.__PROXY__.anchorHref(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setAnchorNames = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setAnchorNames");
          
              return this.__PROXY__.setAnchorNames(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.anchorNames = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.anchorNames");
          
              return this.__PROXY__.anchorNames(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setTableCellRowSpan = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setTableCellRowSpan");
          
              return this.__PROXY__.setTableCellRowSpan(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.tableCellRowSpan = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.tableCellRowSpan");
          
              return this.__PROXY__.tableCellRowSpan(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setTableCellColumnSpan = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setTableCellColumnSpan");
          
              return this.__PROXY__.setTableCellColumnSpan(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.tableCellColumnSpan = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.tableCellColumnSpan");
          
              return this.__PROXY__.tableCellColumnSpan(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.isValid = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setName = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setName");
          
              return this.__PROXY__.setName(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.name = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.name");
          
              return this.__PROXY__.name(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setWidth = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setWidth");
          
              return this.__PROXY__.setWidth(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.width = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.width");
          
              return this.__PROXY__.width(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setHeight = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setHeight");
          
              return this.__PROXY__.setHeight(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.height = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.height");
          
              return this.__PROXY__.height(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.setQuality = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.setQuality");
          
              return this.__PROXY__.setQuality(...args);
            
        };
    
        // function 
        QTextImageFormat.prototype.quality = function(...args) 
          
        {
          //print("JS: QTextImageFormat.prototype.quality");
          
              return this.__PROXY__.quality(...args);
            
        };
    

      // static functions:
      QTextImageFormat.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTextImageFormat.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTextImageFormat.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextImageFormat.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextImageFormat.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTextImageFormat.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      