
      // auto generated
      //var self;

      // class constructor:
      function QTextFormat() {
        

        // should be QTextFormat_BaseJs.call(this, engine):
        //QTextFormat.prototype = new QTextFormat_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextFormat.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QTextFormat);
                
            //}
          }
          else {
            qWarning("QTextFormat.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QTextFormat_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QTextFormat);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextFormat);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QTextFormat_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QTextFormat);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextFormat);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTextFormat_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QTextFormat);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextFormat);
  }

  
  else {
    
        print("QTextFormat(): wrong number / type of arguments");
      
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

      //QTextFormat.prototype = new QTextFormat_BaseJs(engine);
      //QTextFormat.prototype = new QTextFormat_Wrapper(engine);
      QTextFormat.prototype = new Object();

      QTextFormat.prototype.toString = function() {
          //return "QTextFormat [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextFormat [JS]";
        };
      QTextFormat.getObjectType = function() {
        return RJSType_QTextFormat.getIdStatic();
      };

      QTextFormat.prototype.getObjectType = function() {
        return RJSType_QTextFormat.getIdStatic();
      };

      QTextFormat.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextFormat.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: FormatType
QTextFormat.InvalidFormat = QTextFormat_Wrapper.InvalidFormat;
QTextFormat.BlockFormat = QTextFormat_Wrapper.BlockFormat;
QTextFormat.CharFormat = QTextFormat_Wrapper.CharFormat;
QTextFormat.ListFormat = QTextFormat_Wrapper.ListFormat;
QTextFormat.FrameFormat = QTextFormat_Wrapper.FrameFormat;
QTextFormat.UserFormat = QTextFormat_Wrapper.UserFormat;

  // enum: Property
QTextFormat.ObjectIndex = QTextFormat_Wrapper.ObjectIndex;
QTextFormat.CssFloat = QTextFormat_Wrapper.CssFloat;
QTextFormat.LayoutDirection = QTextFormat_Wrapper.LayoutDirection;
QTextFormat.OutlinePen = QTextFormat_Wrapper.OutlinePen;
QTextFormat.BackgroundBrush = QTextFormat_Wrapper.BackgroundBrush;
QTextFormat.ForegroundBrush = QTextFormat_Wrapper.ForegroundBrush;
QTextFormat.BackgroundImageUrl = QTextFormat_Wrapper.BackgroundImageUrl;
QTextFormat.BlockAlignment = QTextFormat_Wrapper.BlockAlignment;
QTextFormat.BlockTopMargin = QTextFormat_Wrapper.BlockTopMargin;
QTextFormat.BlockBottomMargin = QTextFormat_Wrapper.BlockBottomMargin;
QTextFormat.BlockLeftMargin = QTextFormat_Wrapper.BlockLeftMargin;
QTextFormat.BlockRightMargin = QTextFormat_Wrapper.BlockRightMargin;
QTextFormat.TextIndent = QTextFormat_Wrapper.TextIndent;
QTextFormat.TabPositions = QTextFormat_Wrapper.TabPositions;
QTextFormat.BlockIndent = QTextFormat_Wrapper.BlockIndent;
QTextFormat.LineHeight = QTextFormat_Wrapper.LineHeight;
QTextFormat.LineHeightType = QTextFormat_Wrapper.LineHeightType;
QTextFormat.BlockNonBreakableLines = QTextFormat_Wrapper.BlockNonBreakableLines;
QTextFormat.BlockTrailingHorizontalRulerWidth = QTextFormat_Wrapper.BlockTrailingHorizontalRulerWidth;
QTextFormat.HeadingLevel = QTextFormat_Wrapper.HeadingLevel;
QTextFormat.BlockQuoteLevel = QTextFormat_Wrapper.BlockQuoteLevel;
QTextFormat.BlockCodeLanguage = QTextFormat_Wrapper.BlockCodeLanguage;
QTextFormat.BlockCodeFence = QTextFormat_Wrapper.BlockCodeFence;
QTextFormat.BlockMarker = QTextFormat_Wrapper.BlockMarker;
QTextFormat.FirstFontProperty = QTextFormat_Wrapper.FirstFontProperty;
QTextFormat.FontCapitalization = QTextFormat_Wrapper.FontCapitalization;
QTextFormat.FontLetterSpacing = QTextFormat_Wrapper.FontLetterSpacing;
QTextFormat.FontWordSpacing = QTextFormat_Wrapper.FontWordSpacing;
QTextFormat.FontStyleHint = QTextFormat_Wrapper.FontStyleHint;
QTextFormat.FontStyleStrategy = QTextFormat_Wrapper.FontStyleStrategy;
QTextFormat.FontKerning = QTextFormat_Wrapper.FontKerning;
QTextFormat.FontHintingPreference = QTextFormat_Wrapper.FontHintingPreference;
QTextFormat.FontFamilies = QTextFormat_Wrapper.FontFamilies;
QTextFormat.FontStyleName = QTextFormat_Wrapper.FontStyleName;
QTextFormat.FontLetterSpacingType = QTextFormat_Wrapper.FontLetterSpacingType;
QTextFormat.FontStretch = QTextFormat_Wrapper.FontStretch;
QTextFormat.FontPointSize = QTextFormat_Wrapper.FontPointSize;
QTextFormat.FontSizeAdjustment = QTextFormat_Wrapper.FontSizeAdjustment;
QTextFormat.FontSizeIncrement = QTextFormat_Wrapper.FontSizeIncrement;
QTextFormat.FontWeight = QTextFormat_Wrapper.FontWeight;
QTextFormat.FontItalic = QTextFormat_Wrapper.FontItalic;
QTextFormat.FontUnderline = QTextFormat_Wrapper.FontUnderline;
QTextFormat.FontOverline = QTextFormat_Wrapper.FontOverline;
QTextFormat.FontStrikeOut = QTextFormat_Wrapper.FontStrikeOut;
QTextFormat.FontFixedPitch = QTextFormat_Wrapper.FontFixedPitch;
QTextFormat.FontPixelSize = QTextFormat_Wrapper.FontPixelSize;
QTextFormat.LastFontProperty = QTextFormat_Wrapper.LastFontProperty;
QTextFormat.TextUnderlineColor = QTextFormat_Wrapper.TextUnderlineColor;
QTextFormat.TextVerticalAlignment = QTextFormat_Wrapper.TextVerticalAlignment;
QTextFormat.TextOutline = QTextFormat_Wrapper.TextOutline;
QTextFormat.TextUnderlineStyle = QTextFormat_Wrapper.TextUnderlineStyle;
QTextFormat.TextToolTip = QTextFormat_Wrapper.TextToolTip;
QTextFormat.TextSuperScriptBaseline = QTextFormat_Wrapper.TextSuperScriptBaseline;
QTextFormat.TextSubScriptBaseline = QTextFormat_Wrapper.TextSubScriptBaseline;
QTextFormat.TextBaselineOffset = QTextFormat_Wrapper.TextBaselineOffset;
QTextFormat.IsAnchor = QTextFormat_Wrapper.IsAnchor;
QTextFormat.AnchorHref = QTextFormat_Wrapper.AnchorHref;
QTextFormat.AnchorName = QTextFormat_Wrapper.AnchorName;
QTextFormat.OldFontLetterSpacingType = QTextFormat_Wrapper.OldFontLetterSpacingType;
QTextFormat.OldFontStretch = QTextFormat_Wrapper.OldFontStretch;
QTextFormat.OldTextUnderlineColor = QTextFormat_Wrapper.OldTextUnderlineColor;
QTextFormat.ObjectType = QTextFormat_Wrapper.ObjectType;
QTextFormat.ListStyle = QTextFormat_Wrapper.ListStyle;
QTextFormat.ListIndent = QTextFormat_Wrapper.ListIndent;
QTextFormat.ListNumberPrefix = QTextFormat_Wrapper.ListNumberPrefix;
QTextFormat.ListNumberSuffix = QTextFormat_Wrapper.ListNumberSuffix;
QTextFormat.FrameBorder = QTextFormat_Wrapper.FrameBorder;
QTextFormat.FrameMargin = QTextFormat_Wrapper.FrameMargin;
QTextFormat.FramePadding = QTextFormat_Wrapper.FramePadding;
QTextFormat.FrameWidth = QTextFormat_Wrapper.FrameWidth;
QTextFormat.FrameHeight = QTextFormat_Wrapper.FrameHeight;
QTextFormat.FrameTopMargin = QTextFormat_Wrapper.FrameTopMargin;
QTextFormat.FrameBottomMargin = QTextFormat_Wrapper.FrameBottomMargin;
QTextFormat.FrameLeftMargin = QTextFormat_Wrapper.FrameLeftMargin;
QTextFormat.FrameRightMargin = QTextFormat_Wrapper.FrameRightMargin;
QTextFormat.FrameBorderBrush = QTextFormat_Wrapper.FrameBorderBrush;
QTextFormat.FrameBorderStyle = QTextFormat_Wrapper.FrameBorderStyle;
QTextFormat.TableColumns = QTextFormat_Wrapper.TableColumns;
QTextFormat.TableColumnWidthConstraints = QTextFormat_Wrapper.TableColumnWidthConstraints;
QTextFormat.TableCellSpacing = QTextFormat_Wrapper.TableCellSpacing;
QTextFormat.TableCellPadding = QTextFormat_Wrapper.TableCellPadding;
QTextFormat.TableHeaderRowCount = QTextFormat_Wrapper.TableHeaderRowCount;
QTextFormat.TableBorderCollapse = QTextFormat_Wrapper.TableBorderCollapse;
QTextFormat.TableCellRowSpan = QTextFormat_Wrapper.TableCellRowSpan;
QTextFormat.TableCellColumnSpan = QTextFormat_Wrapper.TableCellColumnSpan;
QTextFormat.TableCellTopPadding = QTextFormat_Wrapper.TableCellTopPadding;
QTextFormat.TableCellBottomPadding = QTextFormat_Wrapper.TableCellBottomPadding;
QTextFormat.TableCellLeftPadding = QTextFormat_Wrapper.TableCellLeftPadding;
QTextFormat.TableCellRightPadding = QTextFormat_Wrapper.TableCellRightPadding;
QTextFormat.TableCellTopBorder = QTextFormat_Wrapper.TableCellTopBorder;
QTextFormat.TableCellBottomBorder = QTextFormat_Wrapper.TableCellBottomBorder;
QTextFormat.TableCellLeftBorder = QTextFormat_Wrapper.TableCellLeftBorder;
QTextFormat.TableCellRightBorder = QTextFormat_Wrapper.TableCellRightBorder;
QTextFormat.TableCellTopBorderStyle = QTextFormat_Wrapper.TableCellTopBorderStyle;
QTextFormat.TableCellBottomBorderStyle = QTextFormat_Wrapper.TableCellBottomBorderStyle;
QTextFormat.TableCellLeftBorderStyle = QTextFormat_Wrapper.TableCellLeftBorderStyle;
QTextFormat.TableCellRightBorderStyle = QTextFormat_Wrapper.TableCellRightBorderStyle;
QTextFormat.TableCellTopBorderBrush = QTextFormat_Wrapper.TableCellTopBorderBrush;
QTextFormat.TableCellBottomBorderBrush = QTextFormat_Wrapper.TableCellBottomBorderBrush;
QTextFormat.TableCellLeftBorderBrush = QTextFormat_Wrapper.TableCellLeftBorderBrush;
QTextFormat.TableCellRightBorderBrush = QTextFormat_Wrapper.TableCellRightBorderBrush;
QTextFormat.ImageName = QTextFormat_Wrapper.ImageName;
QTextFormat.ImageTitle = QTextFormat_Wrapper.ImageTitle;
QTextFormat.ImageAltText = QTextFormat_Wrapper.ImageAltText;
QTextFormat.ImageWidth = QTextFormat_Wrapper.ImageWidth;
QTextFormat.ImageHeight = QTextFormat_Wrapper.ImageHeight;
QTextFormat.ImageQuality = QTextFormat_Wrapper.ImageQuality;
QTextFormat.FullWidthSelection = QTextFormat_Wrapper.FullWidthSelection;
QTextFormat.PageBreakPolicy = QTextFormat_Wrapper.PageBreakPolicy;
QTextFormat.UserProperty = QTextFormat_Wrapper.UserProperty;

  // enum: ObjectTypes
QTextFormat.NoObject = QTextFormat_Wrapper.NoObject;
QTextFormat.ImageObject = QTextFormat_Wrapper.ImageObject;
QTextFormat.TableObject = QTextFormat_Wrapper.TableObject;
QTextFormat.TableCellObject = QTextFormat_Wrapper.TableCellObject;
QTextFormat.UserObject = QTextFormat_Wrapper.UserObject;

  // enum: PageBreakFlag
QTextFormat.PageBreak_Auto = QTextFormat_Wrapper.PageBreak_Auto;
QTextFormat.PageBreak_AlwaysBefore = QTextFormat_Wrapper.PageBreak_AlwaysBefore;
QTextFormat.PageBreak_AlwaysAfter = QTextFormat_Wrapper.PageBreak_AlwaysAfter;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextFormat.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextFormat.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      