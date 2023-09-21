
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
            arguments[2].getWrappedType()===
              
                  RJSType.QTextCharFormat_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTextCharFormat);
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
          

        copyProperties(this, wrapper, QTextCharFormat);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
        
            return RJSType.QTextCharFormat_Type;
          
      };

      QTextCharFormat.prototype.getObjectType = function() {
        
            return RJSType.QTextCharFormat_Type;
          
      };

      QTextCharFormat.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QTextCharFormat_Type:
              return true;
          
        case RJSType.QTextFormat_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QTextCharFormat_Type, 
          
            RJSType.QTextFormat_Type
            
        ].includes(t);
        */
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
      

      // static functions:
      

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
    