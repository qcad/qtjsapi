
      // auto generated
      //var self;

      // class constructor:
      function QTextListFormat() {
        

        // should be QTextListFormat_BaseJs.call(this, engine):
        //QTextListFormat.prototype = new QTextListFormat_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextListFormat.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTextListFormat);
            //}
          }
          else {
            qWarning("QTextListFormat.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTextListFormat_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTextListFormat);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextListFormat);
  }

  
  else {
    
        print("QTextListFormat(): wrong number / type of arguments");
      
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

      //QTextListFormat.prototype = new QTextListFormat_BaseJs(engine);
      //QTextListFormat.prototype = new QTextListFormat_Wrapper(engine);
      QTextListFormat.prototype = new Object();

      QTextListFormat.prototype.toString = function() {
          //return "QTextListFormat [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextListFormat [JS]";
        };
      QTextListFormat.getObjectType = function() {
        return RJSType_QTextListFormat.getIdStatic();
      };

      QTextListFormat.prototype.getObjectType = function() {
        return RJSType_QTextListFormat.getIdStatic();
      };

      QTextListFormat.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextListFormat.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QTextFormat.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: FormatType
QTextListFormat.InvalidFormat = QTextListFormat_Wrapper.InvalidFormat;
QTextListFormat.BlockFormat = QTextListFormat_Wrapper.BlockFormat;
QTextListFormat.CharFormat = QTextListFormat_Wrapper.CharFormat;
QTextListFormat.ListFormat = QTextListFormat_Wrapper.ListFormat;
QTextListFormat.FrameFormat = QTextListFormat_Wrapper.FrameFormat;
QTextListFormat.UserFormat = QTextListFormat_Wrapper.UserFormat;

  // enum: Property
QTextListFormat.ObjectIndex = QTextListFormat_Wrapper.ObjectIndex;
QTextListFormat.CssFloat = QTextListFormat_Wrapper.CssFloat;
QTextListFormat.LayoutDirection = QTextListFormat_Wrapper.LayoutDirection;
QTextListFormat.OutlinePen = QTextListFormat_Wrapper.OutlinePen;
QTextListFormat.BackgroundBrush = QTextListFormat_Wrapper.BackgroundBrush;
QTextListFormat.ForegroundBrush = QTextListFormat_Wrapper.ForegroundBrush;
QTextListFormat.BackgroundImageUrl = QTextListFormat_Wrapper.BackgroundImageUrl;
QTextListFormat.BlockAlignment = QTextListFormat_Wrapper.BlockAlignment;
QTextListFormat.BlockTopMargin = QTextListFormat_Wrapper.BlockTopMargin;
QTextListFormat.BlockBottomMargin = QTextListFormat_Wrapper.BlockBottomMargin;
QTextListFormat.BlockLeftMargin = QTextListFormat_Wrapper.BlockLeftMargin;
QTextListFormat.BlockRightMargin = QTextListFormat_Wrapper.BlockRightMargin;
QTextListFormat.TextIndent = QTextListFormat_Wrapper.TextIndent;
QTextListFormat.TabPositions = QTextListFormat_Wrapper.TabPositions;
QTextListFormat.BlockIndent = QTextListFormat_Wrapper.BlockIndent;
QTextListFormat.LineHeight = QTextListFormat_Wrapper.LineHeight;
QTextListFormat.LineHeightType = QTextListFormat_Wrapper.LineHeightType;
QTextListFormat.BlockNonBreakableLines = QTextListFormat_Wrapper.BlockNonBreakableLines;
QTextListFormat.BlockTrailingHorizontalRulerWidth = QTextListFormat_Wrapper.BlockTrailingHorizontalRulerWidth;
QTextListFormat.HeadingLevel = QTextListFormat_Wrapper.HeadingLevel;
QTextListFormat.BlockQuoteLevel = QTextListFormat_Wrapper.BlockQuoteLevel;
QTextListFormat.BlockCodeLanguage = QTextListFormat_Wrapper.BlockCodeLanguage;
QTextListFormat.BlockCodeFence = QTextListFormat_Wrapper.BlockCodeFence;
QTextListFormat.BlockMarker = QTextListFormat_Wrapper.BlockMarker;
QTextListFormat.FirstFontProperty = QTextListFormat_Wrapper.FirstFontProperty;
QTextListFormat.FontCapitalization = QTextListFormat_Wrapper.FontCapitalization;
QTextListFormat.FontLetterSpacing = QTextListFormat_Wrapper.FontLetterSpacing;
QTextListFormat.FontWordSpacing = QTextListFormat_Wrapper.FontWordSpacing;
QTextListFormat.FontStyleHint = QTextListFormat_Wrapper.FontStyleHint;
QTextListFormat.FontStyleStrategy = QTextListFormat_Wrapper.FontStyleStrategy;
QTextListFormat.FontKerning = QTextListFormat_Wrapper.FontKerning;
QTextListFormat.FontHintingPreference = QTextListFormat_Wrapper.FontHintingPreference;
QTextListFormat.FontFamilies = QTextListFormat_Wrapper.FontFamilies;
QTextListFormat.FontStyleName = QTextListFormat_Wrapper.FontStyleName;
QTextListFormat.FontLetterSpacingType = QTextListFormat_Wrapper.FontLetterSpacingType;
QTextListFormat.FontStretch = QTextListFormat_Wrapper.FontStretch;
QTextListFormat.FontPointSize = QTextListFormat_Wrapper.FontPointSize;
QTextListFormat.FontSizeAdjustment = QTextListFormat_Wrapper.FontSizeAdjustment;
QTextListFormat.FontSizeIncrement = QTextListFormat_Wrapper.FontSizeIncrement;
QTextListFormat.FontWeight = QTextListFormat_Wrapper.FontWeight;
QTextListFormat.FontItalic = QTextListFormat_Wrapper.FontItalic;
QTextListFormat.FontUnderline = QTextListFormat_Wrapper.FontUnderline;
QTextListFormat.FontOverline = QTextListFormat_Wrapper.FontOverline;
QTextListFormat.FontStrikeOut = QTextListFormat_Wrapper.FontStrikeOut;
QTextListFormat.FontFixedPitch = QTextListFormat_Wrapper.FontFixedPitch;
QTextListFormat.FontPixelSize = QTextListFormat_Wrapper.FontPixelSize;
QTextListFormat.LastFontProperty = QTextListFormat_Wrapper.LastFontProperty;
QTextListFormat.TextUnderlineColor = QTextListFormat_Wrapper.TextUnderlineColor;
QTextListFormat.TextVerticalAlignment = QTextListFormat_Wrapper.TextVerticalAlignment;
QTextListFormat.TextOutline = QTextListFormat_Wrapper.TextOutline;
QTextListFormat.TextUnderlineStyle = QTextListFormat_Wrapper.TextUnderlineStyle;
QTextListFormat.TextToolTip = QTextListFormat_Wrapper.TextToolTip;
QTextListFormat.TextSuperScriptBaseline = QTextListFormat_Wrapper.TextSuperScriptBaseline;
QTextListFormat.TextSubScriptBaseline = QTextListFormat_Wrapper.TextSubScriptBaseline;
QTextListFormat.TextBaselineOffset = QTextListFormat_Wrapper.TextBaselineOffset;
QTextListFormat.IsAnchor = QTextListFormat_Wrapper.IsAnchor;
QTextListFormat.AnchorHref = QTextListFormat_Wrapper.AnchorHref;
QTextListFormat.AnchorName = QTextListFormat_Wrapper.AnchorName;
QTextListFormat.OldFontLetterSpacingType = QTextListFormat_Wrapper.OldFontLetterSpacingType;
QTextListFormat.OldFontStretch = QTextListFormat_Wrapper.OldFontStretch;
QTextListFormat.OldTextUnderlineColor = QTextListFormat_Wrapper.OldTextUnderlineColor;
QTextListFormat.ObjectType = QTextListFormat_Wrapper.ObjectType;
QTextListFormat.ListStyle = QTextListFormat_Wrapper.ListStyle;
QTextListFormat.ListIndent = QTextListFormat_Wrapper.ListIndent;
QTextListFormat.ListNumberPrefix = QTextListFormat_Wrapper.ListNumberPrefix;
QTextListFormat.ListNumberSuffix = QTextListFormat_Wrapper.ListNumberSuffix;
QTextListFormat.FrameBorder = QTextListFormat_Wrapper.FrameBorder;
QTextListFormat.FrameMargin = QTextListFormat_Wrapper.FrameMargin;
QTextListFormat.FramePadding = QTextListFormat_Wrapper.FramePadding;
QTextListFormat.FrameWidth = QTextListFormat_Wrapper.FrameWidth;
QTextListFormat.FrameHeight = QTextListFormat_Wrapper.FrameHeight;
QTextListFormat.FrameTopMargin = QTextListFormat_Wrapper.FrameTopMargin;
QTextListFormat.FrameBottomMargin = QTextListFormat_Wrapper.FrameBottomMargin;
QTextListFormat.FrameLeftMargin = QTextListFormat_Wrapper.FrameLeftMargin;
QTextListFormat.FrameRightMargin = QTextListFormat_Wrapper.FrameRightMargin;
QTextListFormat.FrameBorderBrush = QTextListFormat_Wrapper.FrameBorderBrush;
QTextListFormat.FrameBorderStyle = QTextListFormat_Wrapper.FrameBorderStyle;
QTextListFormat.TableColumns = QTextListFormat_Wrapper.TableColumns;
QTextListFormat.TableColumnWidthConstraints = QTextListFormat_Wrapper.TableColumnWidthConstraints;
QTextListFormat.TableCellSpacing = QTextListFormat_Wrapper.TableCellSpacing;
QTextListFormat.TableCellPadding = QTextListFormat_Wrapper.TableCellPadding;
QTextListFormat.TableHeaderRowCount = QTextListFormat_Wrapper.TableHeaderRowCount;
QTextListFormat.TableBorderCollapse = QTextListFormat_Wrapper.TableBorderCollapse;
QTextListFormat.TableCellRowSpan = QTextListFormat_Wrapper.TableCellRowSpan;
QTextListFormat.TableCellColumnSpan = QTextListFormat_Wrapper.TableCellColumnSpan;
QTextListFormat.TableCellTopPadding = QTextListFormat_Wrapper.TableCellTopPadding;
QTextListFormat.TableCellBottomPadding = QTextListFormat_Wrapper.TableCellBottomPadding;
QTextListFormat.TableCellLeftPadding = QTextListFormat_Wrapper.TableCellLeftPadding;
QTextListFormat.TableCellRightPadding = QTextListFormat_Wrapper.TableCellRightPadding;
QTextListFormat.TableCellTopBorder = QTextListFormat_Wrapper.TableCellTopBorder;
QTextListFormat.TableCellBottomBorder = QTextListFormat_Wrapper.TableCellBottomBorder;
QTextListFormat.TableCellLeftBorder = QTextListFormat_Wrapper.TableCellLeftBorder;
QTextListFormat.TableCellRightBorder = QTextListFormat_Wrapper.TableCellRightBorder;
QTextListFormat.TableCellTopBorderStyle = QTextListFormat_Wrapper.TableCellTopBorderStyle;
QTextListFormat.TableCellBottomBorderStyle = QTextListFormat_Wrapper.TableCellBottomBorderStyle;
QTextListFormat.TableCellLeftBorderStyle = QTextListFormat_Wrapper.TableCellLeftBorderStyle;
QTextListFormat.TableCellRightBorderStyle = QTextListFormat_Wrapper.TableCellRightBorderStyle;
QTextListFormat.TableCellTopBorderBrush = QTextListFormat_Wrapper.TableCellTopBorderBrush;
QTextListFormat.TableCellBottomBorderBrush = QTextListFormat_Wrapper.TableCellBottomBorderBrush;
QTextListFormat.TableCellLeftBorderBrush = QTextListFormat_Wrapper.TableCellLeftBorderBrush;
QTextListFormat.TableCellRightBorderBrush = QTextListFormat_Wrapper.TableCellRightBorderBrush;
QTextListFormat.ImageName = QTextListFormat_Wrapper.ImageName;
QTextListFormat.ImageTitle = QTextListFormat_Wrapper.ImageTitle;
QTextListFormat.ImageAltText = QTextListFormat_Wrapper.ImageAltText;
QTextListFormat.ImageWidth = QTextListFormat_Wrapper.ImageWidth;
QTextListFormat.ImageHeight = QTextListFormat_Wrapper.ImageHeight;
QTextListFormat.ImageQuality = QTextListFormat_Wrapper.ImageQuality;
QTextListFormat.FullWidthSelection = QTextListFormat_Wrapper.FullWidthSelection;
QTextListFormat.PageBreakPolicy = QTextListFormat_Wrapper.PageBreakPolicy;
QTextListFormat.UserProperty = QTextListFormat_Wrapper.UserProperty;

  // enum: ObjectTypes
QTextListFormat.NoObject = QTextListFormat_Wrapper.NoObject;
QTextListFormat.ImageObject = QTextListFormat_Wrapper.ImageObject;
QTextListFormat.TableObject = QTextListFormat_Wrapper.TableObject;
QTextListFormat.TableCellObject = QTextListFormat_Wrapper.TableCellObject;
QTextListFormat.UserObject = QTextListFormat_Wrapper.UserObject;

  // enum: PageBreakFlag
QTextListFormat.PageBreak_Auto = QTextListFormat_Wrapper.PageBreak_Auto;
QTextListFormat.PageBreak_AlwaysBefore = QTextListFormat_Wrapper.PageBreak_AlwaysBefore;
QTextListFormat.PageBreak_AlwaysAfter = QTextListFormat_Wrapper.PageBreak_AlwaysAfter;

  // enum: Style
QTextListFormat.ListDisc = QTextListFormat_Wrapper.ListDisc;
QTextListFormat.ListCircle = QTextListFormat_Wrapper.ListCircle;
QTextListFormat.ListSquare = QTextListFormat_Wrapper.ListSquare;
QTextListFormat.ListDecimal = QTextListFormat_Wrapper.ListDecimal;
QTextListFormat.ListLowerAlpha = QTextListFormat_Wrapper.ListLowerAlpha;
QTextListFormat.ListUpperAlpha = QTextListFormat_Wrapper.ListUpperAlpha;
QTextListFormat.ListLowerRoman = QTextListFormat_Wrapper.ListLowerRoman;
QTextListFormat.ListUpperRoman = QTextListFormat_Wrapper.ListUpperRoman;
QTextListFormat.ListStyleUndefined = QTextListFormat_Wrapper.ListStyleUndefined;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextListFormat.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextListFormat.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    