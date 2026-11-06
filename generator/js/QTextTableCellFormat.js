
      // auto generated
      //var self;

      // class constructor:
      function QTextTableCellFormat() {
        

        // should be QTextTableCellFormat_BaseJs.call(this, engine):
        //QTextTableCellFormat.prototype = new QTextTableCellFormat_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextTableCellFormat.getIdStatic()))) {

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
            qWarning("QTextTableCellFormat.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTextTableCellFormat_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextTableCellFormat);
  }

  
  else {
    
        print("QTextTableCellFormat(): wrong number / type of arguments");
      
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

      //QTextTableCellFormat.prototype = new QTextTableCellFormat_BaseJs(engine);
      //QTextTableCellFormat.prototype = new QTextTableCellFormat_Wrapper(engine);
      QTextTableCellFormat.prototype = new Object();


      QTextTableCellFormat.prototype.toString = function() {
          //return "QTextTableCellFormat [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextTableCellFormat [JS]";
        };
      QTextTableCellFormat.getObjectType = function() {
        return RJSType_QTextTableCellFormat.getIdStatic();
      };

      QTextTableCellFormat.prototype.getObjectType = function() {
        return RJSType_QTextTableCellFormat.getIdStatic();
      };

      QTextTableCellFormat.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextTableCellFormat.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QTextCharFormat.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: VerticalAlignment
QTextTableCellFormat.AlignNormal = QTextTableCellFormat_Wrapper.AlignNormal;
QTextTableCellFormat.AlignSuperScript = QTextTableCellFormat_Wrapper.AlignSuperScript;
QTextTableCellFormat.AlignSubScript = QTextTableCellFormat_Wrapper.AlignSubScript;
QTextTableCellFormat.AlignMiddle = QTextTableCellFormat_Wrapper.AlignMiddle;
QTextTableCellFormat.AlignTop = QTextTableCellFormat_Wrapper.AlignTop;
QTextTableCellFormat.AlignBottom = QTextTableCellFormat_Wrapper.AlignBottom;
QTextTableCellFormat.AlignBaseline = QTextTableCellFormat_Wrapper.AlignBaseline;

  // enum: UnderlineStyle
QTextTableCellFormat.NoUnderline = QTextTableCellFormat_Wrapper.NoUnderline;
QTextTableCellFormat.SingleUnderline = QTextTableCellFormat_Wrapper.SingleUnderline;
QTextTableCellFormat.DashUnderline = QTextTableCellFormat_Wrapper.DashUnderline;
QTextTableCellFormat.DotLine = QTextTableCellFormat_Wrapper.DotLine;
QTextTableCellFormat.DashDotLine = QTextTableCellFormat_Wrapper.DashDotLine;
QTextTableCellFormat.DashDotDotLine = QTextTableCellFormat_Wrapper.DashDotDotLine;
QTextTableCellFormat.WaveUnderline = QTextTableCellFormat_Wrapper.WaveUnderline;
QTextTableCellFormat.SpellCheckUnderline = QTextTableCellFormat_Wrapper.SpellCheckUnderline;

  // enum: FontPropertiesInheritanceBehavior
QTextTableCellFormat.FontPropertiesSpecifiedOnly = QTextTableCellFormat_Wrapper.FontPropertiesSpecifiedOnly;
QTextTableCellFormat.FontPropertiesAll = QTextTableCellFormat_Wrapper.FontPropertiesAll;


      // functions:
      
        // function 
        QTextTableCellFormat.prototype.setFont = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.font = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.font");
          
              return this.__PROXY__.font(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontFamilies = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontFamilies");
          
              return this.__PROXY__.setFontFamilies(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontFamilies = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontFamilies");
          
              return this.__PROXY__.fontFamilies(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontStyleName = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontStyleName");
          
              return this.__PROXY__.setFontStyleName(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontStyleName = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontStyleName");
          
              return this.__PROXY__.fontStyleName(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontPointSize = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontPointSize");
          
              return this.__PROXY__.setFontPointSize(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontPointSize = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontPointSize");
          
              return this.__PROXY__.fontPointSize(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontWeight = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontWeight");
          
              return this.__PROXY__.setFontWeight(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontWeight = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontWeight");
          
              return this.__PROXY__.fontWeight(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontItalic = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontItalic");
          
              return this.__PROXY__.setFontItalic(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontItalic = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontItalic");
          
              return this.__PROXY__.fontItalic(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontCapitalization = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontCapitalization");
          
              return this.__PROXY__.setFontCapitalization(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontCapitalization = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontCapitalization");
          
              return this.__PROXY__.fontCapitalization(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontLetterSpacingType = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontLetterSpacingType");
          
              return this.__PROXY__.setFontLetterSpacingType(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontLetterSpacingType = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontLetterSpacingType");
          
              return this.__PROXY__.fontLetterSpacingType(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontLetterSpacing = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontLetterSpacing");
          
              return this.__PROXY__.setFontLetterSpacing(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontLetterSpacing = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontLetterSpacing");
          
              return this.__PROXY__.fontLetterSpacing(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontWordSpacing = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontWordSpacing");
          
              return this.__PROXY__.setFontWordSpacing(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontWordSpacing = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontWordSpacing");
          
              return this.__PROXY__.fontWordSpacing(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontUnderline = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontUnderline");
          
              return this.__PROXY__.setFontUnderline(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontUnderline = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontUnderline");
          
              return this.__PROXY__.fontUnderline(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontOverline = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontOverline");
          
              return this.__PROXY__.setFontOverline(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontOverline = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontOverline");
          
              return this.__PROXY__.fontOverline(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontStrikeOut = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontStrikeOut");
          
              return this.__PROXY__.setFontStrikeOut(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontStrikeOut = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontStrikeOut");
          
              return this.__PROXY__.fontStrikeOut(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setUnderlineColor = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setUnderlineColor");
          
              return this.__PROXY__.setUnderlineColor(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.underlineColor = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.underlineColor");
          
              return this.__PROXY__.underlineColor(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontFixedPitch = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontFixedPitch");
          
              return this.__PROXY__.setFontFixedPitch(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontFixedPitch = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontFixedPitch");
          
              return this.__PROXY__.fontFixedPitch(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontStretch = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontStretch");
          
              return this.__PROXY__.setFontStretch(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontStretch = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontStretch");
          
              return this.__PROXY__.fontStretch(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontStyleHint = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontStyleHint");
          
              return this.__PROXY__.setFontStyleHint(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontStyleStrategy = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontStyleStrategy");
          
              return this.__PROXY__.setFontStyleStrategy(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontStyleHint = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontStyleHint");
          
              return this.__PROXY__.fontStyleHint(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontStyleStrategy = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontStyleStrategy");
          
              return this.__PROXY__.fontStyleStrategy(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontHintingPreference = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontHintingPreference");
          
              return this.__PROXY__.setFontHintingPreference(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontHintingPreference = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontHintingPreference");
          
              return this.__PROXY__.fontHintingPreference(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setFontKerning = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setFontKerning");
          
              return this.__PROXY__.setFontKerning(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.fontKerning = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.fontKerning");
          
              return this.__PROXY__.fontKerning(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setUnderlineStyle = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setUnderlineStyle");
          
              return this.__PROXY__.setUnderlineStyle(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.underlineStyle = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.underlineStyle");
          
              return this.__PROXY__.underlineStyle(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setVerticalAlignment = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setVerticalAlignment");
          
              return this.__PROXY__.setVerticalAlignment(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.verticalAlignment = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.verticalAlignment");
          
              return this.__PROXY__.verticalAlignment(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setTextOutline = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setTextOutline");
          
              return this.__PROXY__.setTextOutline(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.textOutline = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.textOutline");
          
              return this.__PROXY__.textOutline(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.toolTip = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.toolTip");
          
              return this.__PROXY__.toolTip(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setSuperScriptBaseline = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setSuperScriptBaseline");
          
              return this.__PROXY__.setSuperScriptBaseline(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.superScriptBaseline = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.superScriptBaseline");
          
              return this.__PROXY__.superScriptBaseline(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setSubScriptBaseline = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setSubScriptBaseline");
          
              return this.__PROXY__.setSubScriptBaseline(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.subScriptBaseline = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.subScriptBaseline");
          
              return this.__PROXY__.subScriptBaseline(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setBaselineOffset = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setBaselineOffset");
          
              return this.__PROXY__.setBaselineOffset(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.baselineOffset = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.baselineOffset");
          
              return this.__PROXY__.baselineOffset(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setAnchor = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setAnchor");
          
              return this.__PROXY__.setAnchor(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.isAnchor = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.isAnchor");
          
              return this.__PROXY__.isAnchor(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setAnchorHref = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setAnchorHref");
          
              return this.__PROXY__.setAnchorHref(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.anchorHref = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.anchorHref");
          
              return this.__PROXY__.anchorHref(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setAnchorNames = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setAnchorNames");
          
              return this.__PROXY__.setAnchorNames(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.anchorNames = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.anchorNames");
          
              return this.__PROXY__.anchorNames(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setTableCellRowSpan = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setTableCellRowSpan");
          
              return this.__PROXY__.setTableCellRowSpan(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.tableCellRowSpan = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.tableCellRowSpan");
          
              return this.__PROXY__.tableCellRowSpan(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setTableCellColumnSpan = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setTableCellColumnSpan");
          
              return this.__PROXY__.setTableCellColumnSpan(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.tableCellColumnSpan = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.tableCellColumnSpan");
          
              return this.__PROXY__.tableCellColumnSpan(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.isValid = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setTopPadding = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setTopPadding");
          
              return this.__PROXY__.setTopPadding(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.topPadding = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.topPadding");
          
              return this.__PROXY__.topPadding(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setBottomPadding = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setBottomPadding");
          
              return this.__PROXY__.setBottomPadding(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.bottomPadding = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.bottomPadding");
          
              return this.__PROXY__.bottomPadding(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setLeftPadding = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setLeftPadding");
          
              return this.__PROXY__.setLeftPadding(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.leftPadding = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.leftPadding");
          
              return this.__PROXY__.leftPadding(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setRightPadding = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setRightPadding");
          
              return this.__PROXY__.setRightPadding(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.rightPadding = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.rightPadding");
          
              return this.__PROXY__.rightPadding(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setPadding = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setPadding");
          
              return this.__PROXY__.setPadding(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setTopBorder = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setTopBorder");
          
              return this.__PROXY__.setTopBorder(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.topBorder = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.topBorder");
          
              return this.__PROXY__.topBorder(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setBottomBorder = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setBottomBorder");
          
              return this.__PROXY__.setBottomBorder(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.bottomBorder = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.bottomBorder");
          
              return this.__PROXY__.bottomBorder(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setLeftBorder = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setLeftBorder");
          
              return this.__PROXY__.setLeftBorder(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.leftBorder = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.leftBorder");
          
              return this.__PROXY__.leftBorder(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setRightBorder = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setRightBorder");
          
              return this.__PROXY__.setRightBorder(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.rightBorder = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.rightBorder");
          
              return this.__PROXY__.rightBorder(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setBorder = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setBorder");
          
              return this.__PROXY__.setBorder(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setTopBorderStyle = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setTopBorderStyle");
          
              return this.__PROXY__.setTopBorderStyle(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.topBorderStyle = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.topBorderStyle");
          
              return this.__PROXY__.topBorderStyle(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setBottomBorderStyle = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setBottomBorderStyle");
          
              return this.__PROXY__.setBottomBorderStyle(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.bottomBorderStyle = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.bottomBorderStyle");
          
              return this.__PROXY__.bottomBorderStyle(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setLeftBorderStyle = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setLeftBorderStyle");
          
              return this.__PROXY__.setLeftBorderStyle(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.leftBorderStyle = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.leftBorderStyle");
          
              return this.__PROXY__.leftBorderStyle(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setRightBorderStyle = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setRightBorderStyle");
          
              return this.__PROXY__.setRightBorderStyle(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.rightBorderStyle = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.rightBorderStyle");
          
              return this.__PROXY__.rightBorderStyle(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setBorderStyle = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setBorderStyle");
          
              return this.__PROXY__.setBorderStyle(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setTopBorderBrush = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setTopBorderBrush");
          
              return this.__PROXY__.setTopBorderBrush(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.topBorderBrush = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.topBorderBrush");
          
              return this.__PROXY__.topBorderBrush(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setBottomBorderBrush = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setBottomBorderBrush");
          
              return this.__PROXY__.setBottomBorderBrush(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.bottomBorderBrush = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.bottomBorderBrush");
          
              return this.__PROXY__.bottomBorderBrush(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setLeftBorderBrush = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setLeftBorderBrush");
          
              return this.__PROXY__.setLeftBorderBrush(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.leftBorderBrush = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.leftBorderBrush");
          
              return this.__PROXY__.leftBorderBrush(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setRightBorderBrush = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setRightBorderBrush");
          
              return this.__PROXY__.setRightBorderBrush(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.rightBorderBrush = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.rightBorderBrush");
          
              return this.__PROXY__.rightBorderBrush(...args);
            
        };
    
        // function 
        QTextTableCellFormat.prototype.setBorderBrush = function(...args) 
          
        {
          //print("JS: QTextTableCellFormat.prototype.setBorderBrush");
          
              return this.__PROXY__.setBorderBrush(...args);
            
        };
    

      // static functions:
      QTextTableCellFormat.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTextTableCellFormat.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTextTableCellFormat.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextTableCellFormat.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextTableCellFormat.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTextTableCellFormat.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      