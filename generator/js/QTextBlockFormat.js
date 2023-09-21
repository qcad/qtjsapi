
      // auto generated
      //var self;

      // class constructor:
      function QTextBlockFormat() {
        

        // should be QTextBlockFormat_BaseJs.call(this, engine):
        //QTextBlockFormat.prototype = new QTextBlockFormat_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QTextBlockFormat_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTextBlockFormat);
            //}
          }
          else {
            qWarning("QTextBlockFormat.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTextBlockFormat_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTextBlockFormat);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextBlockFormat);
  }

  
  else {
    
        print("QTextBlockFormat(): wrong number / type of arguments");
      
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

      //QTextBlockFormat.prototype = new QTextBlockFormat_BaseJs(engine);
      //QTextBlockFormat.prototype = new QTextBlockFormat_Wrapper(engine);
      QTextBlockFormat.prototype = new Object();

      QTextBlockFormat.prototype.toString = function() {
          //return "QTextBlockFormat [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextBlockFormat [JS]";
        };
      QTextBlockFormat.getObjectType = function() {
        
            return RJSType.QTextBlockFormat_Type;
          
      };

      QTextBlockFormat.prototype.getObjectType = function() {
        
            return RJSType.QTextBlockFormat_Type;
          
      };

      QTextBlockFormat.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QTextBlockFormat_Type:
              return true;
          
        case RJSType.QTextFormat_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QTextBlockFormat_Type, 
          
            RJSType.QTextFormat_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: FormatType
QTextBlockFormat.InvalidFormat = QTextBlockFormat_Wrapper.InvalidFormat;
QTextBlockFormat.BlockFormat = QTextBlockFormat_Wrapper.BlockFormat;
QTextBlockFormat.CharFormat = QTextBlockFormat_Wrapper.CharFormat;
QTextBlockFormat.ListFormat = QTextBlockFormat_Wrapper.ListFormat;
QTextBlockFormat.FrameFormat = QTextBlockFormat_Wrapper.FrameFormat;
QTextBlockFormat.UserFormat = QTextBlockFormat_Wrapper.UserFormat;

  // enum: Property
QTextBlockFormat.ObjectIndex = QTextBlockFormat_Wrapper.ObjectIndex;
QTextBlockFormat.CssFloat = QTextBlockFormat_Wrapper.CssFloat;
QTextBlockFormat.LayoutDirection = QTextBlockFormat_Wrapper.LayoutDirection;
QTextBlockFormat.OutlinePen = QTextBlockFormat_Wrapper.OutlinePen;
QTextBlockFormat.BackgroundBrush = QTextBlockFormat_Wrapper.BackgroundBrush;
QTextBlockFormat.ForegroundBrush = QTextBlockFormat_Wrapper.ForegroundBrush;
QTextBlockFormat.BackgroundImageUrl = QTextBlockFormat_Wrapper.BackgroundImageUrl;
QTextBlockFormat.BlockAlignment = QTextBlockFormat_Wrapper.BlockAlignment;
QTextBlockFormat.BlockTopMargin = QTextBlockFormat_Wrapper.BlockTopMargin;
QTextBlockFormat.BlockBottomMargin = QTextBlockFormat_Wrapper.BlockBottomMargin;
QTextBlockFormat.BlockLeftMargin = QTextBlockFormat_Wrapper.BlockLeftMargin;
QTextBlockFormat.BlockRightMargin = QTextBlockFormat_Wrapper.BlockRightMargin;
QTextBlockFormat.TextIndent = QTextBlockFormat_Wrapper.TextIndent;
QTextBlockFormat.TabPositions = QTextBlockFormat_Wrapper.TabPositions;
QTextBlockFormat.BlockIndent = QTextBlockFormat_Wrapper.BlockIndent;
QTextBlockFormat.LineHeight = QTextBlockFormat_Wrapper.LineHeight;
QTextBlockFormat.LineHeightType = QTextBlockFormat_Wrapper.LineHeightType;
QTextBlockFormat.BlockNonBreakableLines = QTextBlockFormat_Wrapper.BlockNonBreakableLines;
QTextBlockFormat.BlockTrailingHorizontalRulerWidth = QTextBlockFormat_Wrapper.BlockTrailingHorizontalRulerWidth;
QTextBlockFormat.HeadingLevel = QTextBlockFormat_Wrapper.HeadingLevel;
QTextBlockFormat.BlockQuoteLevel = QTextBlockFormat_Wrapper.BlockQuoteLevel;
QTextBlockFormat.BlockCodeLanguage = QTextBlockFormat_Wrapper.BlockCodeLanguage;
QTextBlockFormat.BlockCodeFence = QTextBlockFormat_Wrapper.BlockCodeFence;
QTextBlockFormat.BlockMarker = QTextBlockFormat_Wrapper.BlockMarker;
QTextBlockFormat.FirstFontProperty = QTextBlockFormat_Wrapper.FirstFontProperty;
QTextBlockFormat.FontCapitalization = QTextBlockFormat_Wrapper.FontCapitalization;
QTextBlockFormat.FontLetterSpacing = QTextBlockFormat_Wrapper.FontLetterSpacing;
QTextBlockFormat.FontWordSpacing = QTextBlockFormat_Wrapper.FontWordSpacing;
QTextBlockFormat.FontStyleHint = QTextBlockFormat_Wrapper.FontStyleHint;
QTextBlockFormat.FontStyleStrategy = QTextBlockFormat_Wrapper.FontStyleStrategy;
QTextBlockFormat.FontKerning = QTextBlockFormat_Wrapper.FontKerning;
QTextBlockFormat.FontHintingPreference = QTextBlockFormat_Wrapper.FontHintingPreference;
QTextBlockFormat.FontFamilies = QTextBlockFormat_Wrapper.FontFamilies;
QTextBlockFormat.FontStyleName = QTextBlockFormat_Wrapper.FontStyleName;
QTextBlockFormat.FontLetterSpacingType = QTextBlockFormat_Wrapper.FontLetterSpacingType;
QTextBlockFormat.FontStretch = QTextBlockFormat_Wrapper.FontStretch;
QTextBlockFormat.FontPointSize = QTextBlockFormat_Wrapper.FontPointSize;
QTextBlockFormat.FontSizeAdjustment = QTextBlockFormat_Wrapper.FontSizeAdjustment;
QTextBlockFormat.FontSizeIncrement = QTextBlockFormat_Wrapper.FontSizeIncrement;
QTextBlockFormat.FontWeight = QTextBlockFormat_Wrapper.FontWeight;
QTextBlockFormat.FontItalic = QTextBlockFormat_Wrapper.FontItalic;
QTextBlockFormat.FontUnderline = QTextBlockFormat_Wrapper.FontUnderline;
QTextBlockFormat.FontOverline = QTextBlockFormat_Wrapper.FontOverline;
QTextBlockFormat.FontStrikeOut = QTextBlockFormat_Wrapper.FontStrikeOut;
QTextBlockFormat.FontFixedPitch = QTextBlockFormat_Wrapper.FontFixedPitch;
QTextBlockFormat.FontPixelSize = QTextBlockFormat_Wrapper.FontPixelSize;
QTextBlockFormat.LastFontProperty = QTextBlockFormat_Wrapper.LastFontProperty;
QTextBlockFormat.TextUnderlineColor = QTextBlockFormat_Wrapper.TextUnderlineColor;
QTextBlockFormat.TextVerticalAlignment = QTextBlockFormat_Wrapper.TextVerticalAlignment;
QTextBlockFormat.TextOutline = QTextBlockFormat_Wrapper.TextOutline;
QTextBlockFormat.TextUnderlineStyle = QTextBlockFormat_Wrapper.TextUnderlineStyle;
QTextBlockFormat.TextToolTip = QTextBlockFormat_Wrapper.TextToolTip;
QTextBlockFormat.TextSuperScriptBaseline = QTextBlockFormat_Wrapper.TextSuperScriptBaseline;
QTextBlockFormat.TextSubScriptBaseline = QTextBlockFormat_Wrapper.TextSubScriptBaseline;
QTextBlockFormat.TextBaselineOffset = QTextBlockFormat_Wrapper.TextBaselineOffset;
QTextBlockFormat.IsAnchor = QTextBlockFormat_Wrapper.IsAnchor;
QTextBlockFormat.AnchorHref = QTextBlockFormat_Wrapper.AnchorHref;
QTextBlockFormat.AnchorName = QTextBlockFormat_Wrapper.AnchorName;
QTextBlockFormat.OldFontLetterSpacingType = QTextBlockFormat_Wrapper.OldFontLetterSpacingType;
QTextBlockFormat.OldFontStretch = QTextBlockFormat_Wrapper.OldFontStretch;
QTextBlockFormat.OldTextUnderlineColor = QTextBlockFormat_Wrapper.OldTextUnderlineColor;
QTextBlockFormat.ObjectType = QTextBlockFormat_Wrapper.ObjectType;
QTextBlockFormat.ListStyle = QTextBlockFormat_Wrapper.ListStyle;
QTextBlockFormat.ListIndent = QTextBlockFormat_Wrapper.ListIndent;
QTextBlockFormat.ListNumberPrefix = QTextBlockFormat_Wrapper.ListNumberPrefix;
QTextBlockFormat.ListNumberSuffix = QTextBlockFormat_Wrapper.ListNumberSuffix;
QTextBlockFormat.FrameBorder = QTextBlockFormat_Wrapper.FrameBorder;
QTextBlockFormat.FrameMargin = QTextBlockFormat_Wrapper.FrameMargin;
QTextBlockFormat.FramePadding = QTextBlockFormat_Wrapper.FramePadding;
QTextBlockFormat.FrameWidth = QTextBlockFormat_Wrapper.FrameWidth;
QTextBlockFormat.FrameHeight = QTextBlockFormat_Wrapper.FrameHeight;
QTextBlockFormat.FrameTopMargin = QTextBlockFormat_Wrapper.FrameTopMargin;
QTextBlockFormat.FrameBottomMargin = QTextBlockFormat_Wrapper.FrameBottomMargin;
QTextBlockFormat.FrameLeftMargin = QTextBlockFormat_Wrapper.FrameLeftMargin;
QTextBlockFormat.FrameRightMargin = QTextBlockFormat_Wrapper.FrameRightMargin;
QTextBlockFormat.FrameBorderBrush = QTextBlockFormat_Wrapper.FrameBorderBrush;
QTextBlockFormat.FrameBorderStyle = QTextBlockFormat_Wrapper.FrameBorderStyle;
QTextBlockFormat.TableColumns = QTextBlockFormat_Wrapper.TableColumns;
QTextBlockFormat.TableColumnWidthConstraints = QTextBlockFormat_Wrapper.TableColumnWidthConstraints;
QTextBlockFormat.TableCellSpacing = QTextBlockFormat_Wrapper.TableCellSpacing;
QTextBlockFormat.TableCellPadding = QTextBlockFormat_Wrapper.TableCellPadding;
QTextBlockFormat.TableHeaderRowCount = QTextBlockFormat_Wrapper.TableHeaderRowCount;
QTextBlockFormat.TableBorderCollapse = QTextBlockFormat_Wrapper.TableBorderCollapse;
QTextBlockFormat.TableCellRowSpan = QTextBlockFormat_Wrapper.TableCellRowSpan;
QTextBlockFormat.TableCellColumnSpan = QTextBlockFormat_Wrapper.TableCellColumnSpan;
QTextBlockFormat.TableCellTopPadding = QTextBlockFormat_Wrapper.TableCellTopPadding;
QTextBlockFormat.TableCellBottomPadding = QTextBlockFormat_Wrapper.TableCellBottomPadding;
QTextBlockFormat.TableCellLeftPadding = QTextBlockFormat_Wrapper.TableCellLeftPadding;
QTextBlockFormat.TableCellRightPadding = QTextBlockFormat_Wrapper.TableCellRightPadding;
QTextBlockFormat.TableCellTopBorder = QTextBlockFormat_Wrapper.TableCellTopBorder;
QTextBlockFormat.TableCellBottomBorder = QTextBlockFormat_Wrapper.TableCellBottomBorder;
QTextBlockFormat.TableCellLeftBorder = QTextBlockFormat_Wrapper.TableCellLeftBorder;
QTextBlockFormat.TableCellRightBorder = QTextBlockFormat_Wrapper.TableCellRightBorder;
QTextBlockFormat.TableCellTopBorderStyle = QTextBlockFormat_Wrapper.TableCellTopBorderStyle;
QTextBlockFormat.TableCellBottomBorderStyle = QTextBlockFormat_Wrapper.TableCellBottomBorderStyle;
QTextBlockFormat.TableCellLeftBorderStyle = QTextBlockFormat_Wrapper.TableCellLeftBorderStyle;
QTextBlockFormat.TableCellRightBorderStyle = QTextBlockFormat_Wrapper.TableCellRightBorderStyle;
QTextBlockFormat.TableCellTopBorderBrush = QTextBlockFormat_Wrapper.TableCellTopBorderBrush;
QTextBlockFormat.TableCellBottomBorderBrush = QTextBlockFormat_Wrapper.TableCellBottomBorderBrush;
QTextBlockFormat.TableCellLeftBorderBrush = QTextBlockFormat_Wrapper.TableCellLeftBorderBrush;
QTextBlockFormat.TableCellRightBorderBrush = QTextBlockFormat_Wrapper.TableCellRightBorderBrush;
QTextBlockFormat.ImageName = QTextBlockFormat_Wrapper.ImageName;
QTextBlockFormat.ImageTitle = QTextBlockFormat_Wrapper.ImageTitle;
QTextBlockFormat.ImageAltText = QTextBlockFormat_Wrapper.ImageAltText;
QTextBlockFormat.ImageWidth = QTextBlockFormat_Wrapper.ImageWidth;
QTextBlockFormat.ImageHeight = QTextBlockFormat_Wrapper.ImageHeight;
QTextBlockFormat.ImageQuality = QTextBlockFormat_Wrapper.ImageQuality;
QTextBlockFormat.FullWidthSelection = QTextBlockFormat_Wrapper.FullWidthSelection;
QTextBlockFormat.PageBreakPolicy = QTextBlockFormat_Wrapper.PageBreakPolicy;
QTextBlockFormat.UserProperty = QTextBlockFormat_Wrapper.UserProperty;

  // enum: ObjectTypes
QTextBlockFormat.NoObject = QTextBlockFormat_Wrapper.NoObject;
QTextBlockFormat.ImageObject = QTextBlockFormat_Wrapper.ImageObject;
QTextBlockFormat.TableObject = QTextBlockFormat_Wrapper.TableObject;
QTextBlockFormat.TableCellObject = QTextBlockFormat_Wrapper.TableCellObject;
QTextBlockFormat.UserObject = QTextBlockFormat_Wrapper.UserObject;

  // enum: PageBreakFlag
QTextBlockFormat.PageBreak_Auto = QTextBlockFormat_Wrapper.PageBreak_Auto;
QTextBlockFormat.PageBreak_AlwaysBefore = QTextBlockFormat_Wrapper.PageBreak_AlwaysBefore;
QTextBlockFormat.PageBreak_AlwaysAfter = QTextBlockFormat_Wrapper.PageBreak_AlwaysAfter;

  // enum: LineHeightTypes
QTextBlockFormat.SingleHeight = QTextBlockFormat_Wrapper.SingleHeight;
QTextBlockFormat.ProportionalHeight = QTextBlockFormat_Wrapper.ProportionalHeight;
QTextBlockFormat.FixedHeight = QTextBlockFormat_Wrapper.FixedHeight;
QTextBlockFormat.MinimumHeight = QTextBlockFormat_Wrapper.MinimumHeight;
QTextBlockFormat.LineDistanceHeight = QTextBlockFormat_Wrapper.LineDistanceHeight;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextBlockFormat.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextBlockFormat.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    