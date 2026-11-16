
      // auto generated
      //var self;

      // class constructor:
      function QTextCharFormat() {
        

        // should be QTextCharFormat_BaseJs.call(this, engine):
        //QTextCharFormat.prototype = new QTextCharFormat_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextCharFormat.getIdStatic()))) {

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
            qWarning("QTextCharFormat.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTextCharFormat_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextCharFormat);
  }

  
  else {
    
        print("QTextCharFormat(): wrong number / type of arguments");
      
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

      //QTextCharFormat.prototype = new QTextCharFormat_BaseJs(engine);
      //QTextCharFormat.prototype = new QTextCharFormat_Wrapper(engine);
      QTextCharFormat.prototype = new Object();


      QTextCharFormat.prototype.toString = function() {
          //return "QTextCharFormat [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextCharFormat [JS]";
        };
      QTextCharFormat.getObjectType = function() {
        return RJSType_QTextCharFormat.getIdStatic();
      };

      QTextCharFormat.prototype.getObjectType = function() {
        return RJSType_QTextCharFormat.getIdStatic();
      };

      QTextCharFormat.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextCharFormat.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QTextFormat.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: FormatType
QTextCharFormat.InvalidFormat = QTextCharFormat_Wrapper.InvalidFormat;
QTextCharFormat.BlockFormat = QTextCharFormat_Wrapper.BlockFormat;
QTextCharFormat.CharFormat = QTextCharFormat_Wrapper.CharFormat;
QTextCharFormat.ListFormat = QTextCharFormat_Wrapper.ListFormat;
QTextCharFormat.FrameFormat = QTextCharFormat_Wrapper.FrameFormat;
QTextCharFormat.UserFormat = QTextCharFormat_Wrapper.UserFormat;

  // enum: Property
QTextCharFormat.ObjectIndex = QTextCharFormat_Wrapper.ObjectIndex;
QTextCharFormat.CssFloat = QTextCharFormat_Wrapper.CssFloat;
QTextCharFormat.LayoutDirection = QTextCharFormat_Wrapper.LayoutDirection;
QTextCharFormat.OutlinePen = QTextCharFormat_Wrapper.OutlinePen;
QTextCharFormat.BackgroundBrush = QTextCharFormat_Wrapper.BackgroundBrush;
QTextCharFormat.ForegroundBrush = QTextCharFormat_Wrapper.ForegroundBrush;
QTextCharFormat.BackgroundImageUrl = QTextCharFormat_Wrapper.BackgroundImageUrl;
QTextCharFormat.BlockAlignment = QTextCharFormat_Wrapper.BlockAlignment;
QTextCharFormat.BlockTopMargin = QTextCharFormat_Wrapper.BlockTopMargin;
QTextCharFormat.BlockBottomMargin = QTextCharFormat_Wrapper.BlockBottomMargin;
QTextCharFormat.BlockLeftMargin = QTextCharFormat_Wrapper.BlockLeftMargin;
QTextCharFormat.BlockRightMargin = QTextCharFormat_Wrapper.BlockRightMargin;
QTextCharFormat.TextIndent = QTextCharFormat_Wrapper.TextIndent;
QTextCharFormat.TabPositions = QTextCharFormat_Wrapper.TabPositions;
QTextCharFormat.BlockIndent = QTextCharFormat_Wrapper.BlockIndent;
QTextCharFormat.LineHeight = QTextCharFormat_Wrapper.LineHeight;
QTextCharFormat.LineHeightType = QTextCharFormat_Wrapper.LineHeightType;
QTextCharFormat.BlockNonBreakableLines = QTextCharFormat_Wrapper.BlockNonBreakableLines;
QTextCharFormat.BlockTrailingHorizontalRulerWidth = QTextCharFormat_Wrapper.BlockTrailingHorizontalRulerWidth;
QTextCharFormat.HeadingLevel = QTextCharFormat_Wrapper.HeadingLevel;
QTextCharFormat.BlockQuoteLevel = QTextCharFormat_Wrapper.BlockQuoteLevel;
QTextCharFormat.BlockCodeLanguage = QTextCharFormat_Wrapper.BlockCodeLanguage;
QTextCharFormat.BlockCodeFence = QTextCharFormat_Wrapper.BlockCodeFence;
QTextCharFormat.BlockMarker = QTextCharFormat_Wrapper.BlockMarker;
QTextCharFormat.FirstFontProperty = QTextCharFormat_Wrapper.FirstFontProperty;
QTextCharFormat.FontCapitalization = QTextCharFormat_Wrapper.FontCapitalization;
QTextCharFormat.FontLetterSpacing = QTextCharFormat_Wrapper.FontLetterSpacing;
QTextCharFormat.FontWordSpacing = QTextCharFormat_Wrapper.FontWordSpacing;
QTextCharFormat.FontStyleHint = QTextCharFormat_Wrapper.FontStyleHint;
QTextCharFormat.FontStyleStrategy = QTextCharFormat_Wrapper.FontStyleStrategy;
QTextCharFormat.FontKerning = QTextCharFormat_Wrapper.FontKerning;
QTextCharFormat.FontHintingPreference = QTextCharFormat_Wrapper.FontHintingPreference;
QTextCharFormat.FontFamilies = QTextCharFormat_Wrapper.FontFamilies;
QTextCharFormat.FontStyleName = QTextCharFormat_Wrapper.FontStyleName;
QTextCharFormat.FontLetterSpacingType = QTextCharFormat_Wrapper.FontLetterSpacingType;
QTextCharFormat.FontStretch = QTextCharFormat_Wrapper.FontStretch;
QTextCharFormat.FontPointSize = QTextCharFormat_Wrapper.FontPointSize;
QTextCharFormat.FontSizeAdjustment = QTextCharFormat_Wrapper.FontSizeAdjustment;
QTextCharFormat.FontSizeIncrement = QTextCharFormat_Wrapper.FontSizeIncrement;
QTextCharFormat.FontWeight = QTextCharFormat_Wrapper.FontWeight;
QTextCharFormat.FontItalic = QTextCharFormat_Wrapper.FontItalic;
QTextCharFormat.FontUnderline = QTextCharFormat_Wrapper.FontUnderline;
QTextCharFormat.FontOverline = QTextCharFormat_Wrapper.FontOverline;
QTextCharFormat.FontStrikeOut = QTextCharFormat_Wrapper.FontStrikeOut;
QTextCharFormat.FontFixedPitch = QTextCharFormat_Wrapper.FontFixedPitch;
QTextCharFormat.FontPixelSize = QTextCharFormat_Wrapper.FontPixelSize;
QTextCharFormat.LastFontProperty = QTextCharFormat_Wrapper.LastFontProperty;
QTextCharFormat.TextUnderlineColor = QTextCharFormat_Wrapper.TextUnderlineColor;
QTextCharFormat.TextVerticalAlignment = QTextCharFormat_Wrapper.TextVerticalAlignment;
QTextCharFormat.TextOutline = QTextCharFormat_Wrapper.TextOutline;
QTextCharFormat.TextUnderlineStyle = QTextCharFormat_Wrapper.TextUnderlineStyle;
QTextCharFormat.TextToolTip = QTextCharFormat_Wrapper.TextToolTip;
QTextCharFormat.TextSuperScriptBaseline = QTextCharFormat_Wrapper.TextSuperScriptBaseline;
QTextCharFormat.TextSubScriptBaseline = QTextCharFormat_Wrapper.TextSubScriptBaseline;
QTextCharFormat.TextBaselineOffset = QTextCharFormat_Wrapper.TextBaselineOffset;
QTextCharFormat.IsAnchor = QTextCharFormat_Wrapper.IsAnchor;
QTextCharFormat.AnchorHref = QTextCharFormat_Wrapper.AnchorHref;
QTextCharFormat.AnchorName = QTextCharFormat_Wrapper.AnchorName;
QTextCharFormat.OldFontLetterSpacingType = QTextCharFormat_Wrapper.OldFontLetterSpacingType;
QTextCharFormat.OldFontStretch = QTextCharFormat_Wrapper.OldFontStretch;
QTextCharFormat.OldTextUnderlineColor = QTextCharFormat_Wrapper.OldTextUnderlineColor;
QTextCharFormat.ObjectType = QTextCharFormat_Wrapper.ObjectType;
QTextCharFormat.ListStyle = QTextCharFormat_Wrapper.ListStyle;
QTextCharFormat.ListIndent = QTextCharFormat_Wrapper.ListIndent;
QTextCharFormat.ListNumberPrefix = QTextCharFormat_Wrapper.ListNumberPrefix;
QTextCharFormat.ListNumberSuffix = QTextCharFormat_Wrapper.ListNumberSuffix;
QTextCharFormat.FrameBorder = QTextCharFormat_Wrapper.FrameBorder;
QTextCharFormat.FrameMargin = QTextCharFormat_Wrapper.FrameMargin;
QTextCharFormat.FramePadding = QTextCharFormat_Wrapper.FramePadding;
QTextCharFormat.FrameWidth = QTextCharFormat_Wrapper.FrameWidth;
QTextCharFormat.FrameHeight = QTextCharFormat_Wrapper.FrameHeight;
QTextCharFormat.FrameTopMargin = QTextCharFormat_Wrapper.FrameTopMargin;
QTextCharFormat.FrameBottomMargin = QTextCharFormat_Wrapper.FrameBottomMargin;
QTextCharFormat.FrameLeftMargin = QTextCharFormat_Wrapper.FrameLeftMargin;
QTextCharFormat.FrameRightMargin = QTextCharFormat_Wrapper.FrameRightMargin;
QTextCharFormat.FrameBorderBrush = QTextCharFormat_Wrapper.FrameBorderBrush;
QTextCharFormat.FrameBorderStyle = QTextCharFormat_Wrapper.FrameBorderStyle;
QTextCharFormat.TableColumns = QTextCharFormat_Wrapper.TableColumns;
QTextCharFormat.TableColumnWidthConstraints = QTextCharFormat_Wrapper.TableColumnWidthConstraints;
QTextCharFormat.TableCellSpacing = QTextCharFormat_Wrapper.TableCellSpacing;
QTextCharFormat.TableCellPadding = QTextCharFormat_Wrapper.TableCellPadding;
QTextCharFormat.TableHeaderRowCount = QTextCharFormat_Wrapper.TableHeaderRowCount;
QTextCharFormat.TableBorderCollapse = QTextCharFormat_Wrapper.TableBorderCollapse;
QTextCharFormat.TableCellRowSpan = QTextCharFormat_Wrapper.TableCellRowSpan;
QTextCharFormat.TableCellColumnSpan = QTextCharFormat_Wrapper.TableCellColumnSpan;
QTextCharFormat.TableCellTopPadding = QTextCharFormat_Wrapper.TableCellTopPadding;
QTextCharFormat.TableCellBottomPadding = QTextCharFormat_Wrapper.TableCellBottomPadding;
QTextCharFormat.TableCellLeftPadding = QTextCharFormat_Wrapper.TableCellLeftPadding;
QTextCharFormat.TableCellRightPadding = QTextCharFormat_Wrapper.TableCellRightPadding;
QTextCharFormat.TableCellTopBorder = QTextCharFormat_Wrapper.TableCellTopBorder;
QTextCharFormat.TableCellBottomBorder = QTextCharFormat_Wrapper.TableCellBottomBorder;
QTextCharFormat.TableCellLeftBorder = QTextCharFormat_Wrapper.TableCellLeftBorder;
QTextCharFormat.TableCellRightBorder = QTextCharFormat_Wrapper.TableCellRightBorder;
QTextCharFormat.TableCellTopBorderStyle = QTextCharFormat_Wrapper.TableCellTopBorderStyle;
QTextCharFormat.TableCellBottomBorderStyle = QTextCharFormat_Wrapper.TableCellBottomBorderStyle;
QTextCharFormat.TableCellLeftBorderStyle = QTextCharFormat_Wrapper.TableCellLeftBorderStyle;
QTextCharFormat.TableCellRightBorderStyle = QTextCharFormat_Wrapper.TableCellRightBorderStyle;
QTextCharFormat.TableCellTopBorderBrush = QTextCharFormat_Wrapper.TableCellTopBorderBrush;
QTextCharFormat.TableCellBottomBorderBrush = QTextCharFormat_Wrapper.TableCellBottomBorderBrush;
QTextCharFormat.TableCellLeftBorderBrush = QTextCharFormat_Wrapper.TableCellLeftBorderBrush;
QTextCharFormat.TableCellRightBorderBrush = QTextCharFormat_Wrapper.TableCellRightBorderBrush;
QTextCharFormat.ImageName = QTextCharFormat_Wrapper.ImageName;
QTextCharFormat.ImageTitle = QTextCharFormat_Wrapper.ImageTitle;
QTextCharFormat.ImageAltText = QTextCharFormat_Wrapper.ImageAltText;
QTextCharFormat.ImageWidth = QTextCharFormat_Wrapper.ImageWidth;
QTextCharFormat.ImageHeight = QTextCharFormat_Wrapper.ImageHeight;
QTextCharFormat.ImageQuality = QTextCharFormat_Wrapper.ImageQuality;
QTextCharFormat.FullWidthSelection = QTextCharFormat_Wrapper.FullWidthSelection;
QTextCharFormat.PageBreakPolicy = QTextCharFormat_Wrapper.PageBreakPolicy;
QTextCharFormat.UserProperty = QTextCharFormat_Wrapper.UserProperty;

  // enum: ObjectTypes
QTextCharFormat.NoObject = QTextCharFormat_Wrapper.NoObject;
QTextCharFormat.ImageObject = QTextCharFormat_Wrapper.ImageObject;
QTextCharFormat.TableObject = QTextCharFormat_Wrapper.TableObject;
QTextCharFormat.TableCellObject = QTextCharFormat_Wrapper.TableCellObject;
QTextCharFormat.UserObject = QTextCharFormat_Wrapper.UserObject;

  // enum: PageBreakFlag
QTextCharFormat.PageBreak_Auto = QTextCharFormat_Wrapper.PageBreak_Auto;
QTextCharFormat.PageBreak_AlwaysBefore = QTextCharFormat_Wrapper.PageBreak_AlwaysBefore;
QTextCharFormat.PageBreak_AlwaysAfter = QTextCharFormat_Wrapper.PageBreak_AlwaysAfter;

  // enum: VerticalAlignment
QTextCharFormat.AlignNormal = QTextCharFormat_Wrapper.AlignNormal;
QTextCharFormat.AlignSuperScript = QTextCharFormat_Wrapper.AlignSuperScript;
QTextCharFormat.AlignSubScript = QTextCharFormat_Wrapper.AlignSubScript;
QTextCharFormat.AlignMiddle = QTextCharFormat_Wrapper.AlignMiddle;
QTextCharFormat.AlignTop = QTextCharFormat_Wrapper.AlignTop;
QTextCharFormat.AlignBottom = QTextCharFormat_Wrapper.AlignBottom;
QTextCharFormat.AlignBaseline = QTextCharFormat_Wrapper.AlignBaseline;

  // enum: UnderlineStyle
QTextCharFormat.NoUnderline = QTextCharFormat_Wrapper.NoUnderline;
QTextCharFormat.SingleUnderline = QTextCharFormat_Wrapper.SingleUnderline;
QTextCharFormat.DashUnderline = QTextCharFormat_Wrapper.DashUnderline;
QTextCharFormat.DotLine = QTextCharFormat_Wrapper.DotLine;
QTextCharFormat.DashDotLine = QTextCharFormat_Wrapper.DashDotLine;
QTextCharFormat.DashDotDotLine = QTextCharFormat_Wrapper.DashDotDotLine;
QTextCharFormat.WaveUnderline = QTextCharFormat_Wrapper.WaveUnderline;
QTextCharFormat.SpellCheckUnderline = QTextCharFormat_Wrapper.SpellCheckUnderline;

  // enum: FontPropertiesInheritanceBehavior
QTextCharFormat.FontPropertiesSpecifiedOnly = QTextCharFormat_Wrapper.FontPropertiesSpecifiedOnly;
QTextCharFormat.FontPropertiesAll = QTextCharFormat_Wrapper.FontPropertiesAll;


      // functions:
      
        // function 
        QTextCharFormat.prototype.swap = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.merge = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.merge");
          
              return this.__PROXY__.merge(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.type = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.objectIndex = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.objectIndex");
          
              return this.__PROXY__.objectIndex(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setObjectIndex = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setObjectIndex");
          
              return this.__PROXY__.setObjectIndex(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.property = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.clearProperty = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.clearProperty");
          
              return this.__PROXY__.clearProperty(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.hasProperty = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.hasProperty");
          
              return this.__PROXY__.hasProperty(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.boolProperty = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.boolProperty");
          
              return this.__PROXY__.boolProperty(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.intProperty = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.intProperty");
          
              return this.__PROXY__.intProperty(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.doubleProperty = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.doubleProperty");
          
              return this.__PROXY__.doubleProperty(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.stringProperty = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.stringProperty");
          
              return this.__PROXY__.stringProperty(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.colorProperty = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.colorProperty");
          
              return this.__PROXY__.colorProperty(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.penProperty = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.penProperty");
          
              return this.__PROXY__.penProperty(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.brushProperty = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.brushProperty");
          
              return this.__PROXY__.brushProperty(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.lengthProperty = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.lengthProperty");
          
              return this.__PROXY__.lengthProperty(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.lengthVectorProperty = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.lengthVectorProperty");
          
              return this.__PROXY__.lengthVectorProperty(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.propertyCount = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.propertyCount");
          
              return this.__PROXY__.propertyCount(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setObjectType = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setObjectType");
          
              return this.__PROXY__.setObjectType(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.objectType = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.objectType");
          
              return this.__PROXY__.objectType(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.isCharFormat = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.isCharFormat");
          
              return this.__PROXY__.isCharFormat(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.isBlockFormat = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.isBlockFormat");
          
              return this.__PROXY__.isBlockFormat(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.isListFormat = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.isListFormat");
          
              return this.__PROXY__.isListFormat(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.isFrameFormat = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.isFrameFormat");
          
              return this.__PROXY__.isFrameFormat(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.isImageFormat = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.isImageFormat");
          
              return this.__PROXY__.isImageFormat(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.isTableFormat = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.isTableFormat");
          
              return this.__PROXY__.isTableFormat(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.isTableCellFormat = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.isTableCellFormat");
          
              return this.__PROXY__.isTableCellFormat(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.toBlockFormat = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.toBlockFormat");
          
              return this.__PROXY__.toBlockFormat(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.toCharFormat = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.toCharFormat");
          
              return this.__PROXY__.toCharFormat(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.toListFormat = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.toListFormat");
          
              return this.__PROXY__.toListFormat(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.toTableFormat = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.toTableFormat");
          
              return this.__PROXY__.toTableFormat(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.toFrameFormat = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.toFrameFormat");
          
              return this.__PROXY__.toFrameFormat(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.toImageFormat = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.toImageFormat");
          
              return this.__PROXY__.toImageFormat(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.toTableCellFormat = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.toTableCellFormat");
          
              return this.__PROXY__.toTableCellFormat(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.layoutDirection = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.layoutDirection");
          
              return this.__PROXY__.layoutDirection(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setBackground = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setBackground");
          
              return this.__PROXY__.setBackground(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.background = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.background");
          
              return this.__PROXY__.background(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.clearBackground = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.clearBackground");
          
              return this.__PROXY__.clearBackground(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setForeground = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setForeground");
          
              return this.__PROXY__.setForeground(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.foreground = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.foreground");
          
              return this.__PROXY__.foreground(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.clearForeground = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.clearForeground");
          
              return this.__PROXY__.clearForeground(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.isValid = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFont = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.font = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.font");
          
              return this.__PROXY__.font(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontFamilies = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontFamilies");
          
              return this.__PROXY__.setFontFamilies(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontFamilies = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontFamilies");
          
              return this.__PROXY__.fontFamilies(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontStyleName = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontStyleName");
          
              return this.__PROXY__.setFontStyleName(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontStyleName = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontStyleName");
          
              return this.__PROXY__.fontStyleName(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontPointSize = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontPointSize");
          
              return this.__PROXY__.setFontPointSize(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontPointSize = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontPointSize");
          
              return this.__PROXY__.fontPointSize(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontWeight = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontWeight");
          
              return this.__PROXY__.setFontWeight(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontWeight = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontWeight");
          
              return this.__PROXY__.fontWeight(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontItalic = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontItalic");
          
              return this.__PROXY__.setFontItalic(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontItalic = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontItalic");
          
              return this.__PROXY__.fontItalic(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontCapitalization = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontCapitalization");
          
              return this.__PROXY__.setFontCapitalization(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontCapitalization = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontCapitalization");
          
              return this.__PROXY__.fontCapitalization(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontLetterSpacingType = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontLetterSpacingType");
          
              return this.__PROXY__.setFontLetterSpacingType(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontLetterSpacingType = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontLetterSpacingType");
          
              return this.__PROXY__.fontLetterSpacingType(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontLetterSpacing = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontLetterSpacing");
          
              return this.__PROXY__.setFontLetterSpacing(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontLetterSpacing = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontLetterSpacing");
          
              return this.__PROXY__.fontLetterSpacing(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontWordSpacing = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontWordSpacing");
          
              return this.__PROXY__.setFontWordSpacing(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontWordSpacing = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontWordSpacing");
          
              return this.__PROXY__.fontWordSpacing(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontUnderline = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontUnderline");
          
              return this.__PROXY__.setFontUnderline(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontUnderline = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontUnderline");
          
              return this.__PROXY__.fontUnderline(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontOverline = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontOverline");
          
              return this.__PROXY__.setFontOverline(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontOverline = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontOverline");
          
              return this.__PROXY__.fontOverline(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontStrikeOut = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontStrikeOut");
          
              return this.__PROXY__.setFontStrikeOut(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontStrikeOut = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontStrikeOut");
          
              return this.__PROXY__.fontStrikeOut(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setUnderlineColor = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setUnderlineColor");
          
              return this.__PROXY__.setUnderlineColor(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.underlineColor = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.underlineColor");
          
              return this.__PROXY__.underlineColor(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontFixedPitch = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontFixedPitch");
          
              return this.__PROXY__.setFontFixedPitch(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontFixedPitch = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontFixedPitch");
          
              return this.__PROXY__.fontFixedPitch(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontStretch = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontStretch");
          
              return this.__PROXY__.setFontStretch(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontStretch = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontStretch");
          
              return this.__PROXY__.fontStretch(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontStyleHint = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontStyleHint");
          
              return this.__PROXY__.setFontStyleHint(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontStyleStrategy = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontStyleStrategy");
          
              return this.__PROXY__.setFontStyleStrategy(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontStyleHint = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontStyleHint");
          
              return this.__PROXY__.fontStyleHint(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontStyleStrategy = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontStyleStrategy");
          
              return this.__PROXY__.fontStyleStrategy(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontHintingPreference = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontHintingPreference");
          
              return this.__PROXY__.setFontHintingPreference(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontHintingPreference = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontHintingPreference");
          
              return this.__PROXY__.fontHintingPreference(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setFontKerning = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setFontKerning");
          
              return this.__PROXY__.setFontKerning(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.fontKerning = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.fontKerning");
          
              return this.__PROXY__.fontKerning(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setUnderlineStyle = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setUnderlineStyle");
          
              return this.__PROXY__.setUnderlineStyle(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.underlineStyle = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.underlineStyle");
          
              return this.__PROXY__.underlineStyle(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setVerticalAlignment = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setVerticalAlignment");
          
              return this.__PROXY__.setVerticalAlignment(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.verticalAlignment = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.verticalAlignment");
          
              return this.__PROXY__.verticalAlignment(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setTextOutline = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setTextOutline");
          
              return this.__PROXY__.setTextOutline(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.textOutline = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.textOutline");
          
              return this.__PROXY__.textOutline(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.toolTip = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.toolTip");
          
              return this.__PROXY__.toolTip(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setSuperScriptBaseline = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setSuperScriptBaseline");
          
              return this.__PROXY__.setSuperScriptBaseline(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.superScriptBaseline = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.superScriptBaseline");
          
              return this.__PROXY__.superScriptBaseline(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setSubScriptBaseline = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setSubScriptBaseline");
          
              return this.__PROXY__.setSubScriptBaseline(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.subScriptBaseline = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.subScriptBaseline");
          
              return this.__PROXY__.subScriptBaseline(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setBaselineOffset = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setBaselineOffset");
          
              return this.__PROXY__.setBaselineOffset(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.baselineOffset = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.baselineOffset");
          
              return this.__PROXY__.baselineOffset(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setAnchor = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setAnchor");
          
              return this.__PROXY__.setAnchor(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.isAnchor = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.isAnchor");
          
              return this.__PROXY__.isAnchor(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setAnchorHref = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setAnchorHref");
          
              return this.__PROXY__.setAnchorHref(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.anchorHref = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.anchorHref");
          
              return this.__PROXY__.anchorHref(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setAnchorNames = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setAnchorNames");
          
              return this.__PROXY__.setAnchorNames(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.anchorNames = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.anchorNames");
          
              return this.__PROXY__.anchorNames(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setTableCellRowSpan = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setTableCellRowSpan");
          
              return this.__PROXY__.setTableCellRowSpan(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.tableCellRowSpan = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.tableCellRowSpan");
          
              return this.__PROXY__.tableCellRowSpan(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.setTableCellColumnSpan = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.setTableCellColumnSpan");
          
              return this.__PROXY__.setTableCellColumnSpan(...args);
            
        };
        
        // function 
        QTextCharFormat.prototype.tableCellColumnSpan = function(...args) 
          
        {
          //print("JS: QTextCharFormat.prototype.tableCellColumnSpan");
          
              return this.__PROXY__.tableCellColumnSpan(...args);
            
        };
        

      // static functions:
      QTextCharFormat.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTextCharFormat.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTextCharFormat.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextCharFormat.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextCharFormat.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTextCharFormat.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      