
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
            arguments[2].getWrappedType()===RJSType_QTextBlockFormat.getIdStatic()))) {

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
          
            this.__PROXY__ = wrapper;
          

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
        return RJSType_QTextBlockFormat.getIdStatic();
      };

      QTextBlockFormat.prototype.getObjectType = function() {
        return RJSType_QTextBlockFormat.getIdStatic();
      };

      QTextBlockFormat.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextBlockFormat.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QTextFormat.getIdStatic()) {
            return true;
          }
        

        return false;


        
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
      
        // function 
        QTextBlockFormat.prototype.swap = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.merge = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.merge");
          
              return this.__PROXY__.merge(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.type = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.objectIndex = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.objectIndex");
          
              return this.__PROXY__.objectIndex(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setObjectIndex = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setObjectIndex");
          
              return this.__PROXY__.setObjectIndex(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.property = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.clearProperty = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.clearProperty");
          
              return this.__PROXY__.clearProperty(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.hasProperty = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.hasProperty");
          
              return this.__PROXY__.hasProperty(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.boolProperty = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.boolProperty");
          
              return this.__PROXY__.boolProperty(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.intProperty = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.intProperty");
          
              return this.__PROXY__.intProperty(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.doubleProperty = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.doubleProperty");
          
              return this.__PROXY__.doubleProperty(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.stringProperty = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.stringProperty");
          
              return this.__PROXY__.stringProperty(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.colorProperty = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.colorProperty");
          
              return this.__PROXY__.colorProperty(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.penProperty = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.penProperty");
          
              return this.__PROXY__.penProperty(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.brushProperty = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.brushProperty");
          
              return this.__PROXY__.brushProperty(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.lengthProperty = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.lengthProperty");
          
              return this.__PROXY__.lengthProperty(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.lengthVectorProperty = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.lengthVectorProperty");
          
              return this.__PROXY__.lengthVectorProperty(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.propertyCount = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.propertyCount");
          
              return this.__PROXY__.propertyCount(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setObjectType = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setObjectType");
          
              return this.__PROXY__.setObjectType(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.objectType = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.objectType");
          
              return this.__PROXY__.objectType(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.isCharFormat = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.isCharFormat");
          
              return this.__PROXY__.isCharFormat(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.isBlockFormat = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.isBlockFormat");
          
              return this.__PROXY__.isBlockFormat(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.isListFormat = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.isListFormat");
          
              return this.__PROXY__.isListFormat(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.isFrameFormat = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.isFrameFormat");
          
              return this.__PROXY__.isFrameFormat(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.isImageFormat = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.isImageFormat");
          
              return this.__PROXY__.isImageFormat(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.isTableFormat = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.isTableFormat");
          
              return this.__PROXY__.isTableFormat(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.isTableCellFormat = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.isTableCellFormat");
          
              return this.__PROXY__.isTableCellFormat(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.toBlockFormat = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.toBlockFormat");
          
              return this.__PROXY__.toBlockFormat(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.toCharFormat = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.toCharFormat");
          
              return this.__PROXY__.toCharFormat(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.toListFormat = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.toListFormat");
          
              return this.__PROXY__.toListFormat(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.toTableFormat = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.toTableFormat");
          
              return this.__PROXY__.toTableFormat(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.toFrameFormat = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.toFrameFormat");
          
              return this.__PROXY__.toFrameFormat(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.toImageFormat = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.toImageFormat");
          
              return this.__PROXY__.toImageFormat(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.toTableCellFormat = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.toTableCellFormat");
          
              return this.__PROXY__.toTableCellFormat(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.layoutDirection = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.layoutDirection");
          
              return this.__PROXY__.layoutDirection(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setBackground = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setBackground");
          
              return this.__PROXY__.setBackground(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.background = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.background");
          
              return this.__PROXY__.background(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.clearBackground = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.clearBackground");
          
              return this.__PROXY__.clearBackground(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setForeground = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setForeground");
          
              return this.__PROXY__.setForeground(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.foreground = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.foreground");
          
              return this.__PROXY__.foreground(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.clearForeground = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.clearForeground");
          
              return this.__PROXY__.clearForeground(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.isValid = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.alignment = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.alignment");
          
              return this.__PROXY__.alignment(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setTopMargin = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setTopMargin");
          
              return this.__PROXY__.setTopMargin(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.topMargin = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.topMargin");
          
              return this.__PROXY__.topMargin(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setBottomMargin = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setBottomMargin");
          
              return this.__PROXY__.setBottomMargin(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.bottomMargin = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.bottomMargin");
          
              return this.__PROXY__.bottomMargin(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setLeftMargin = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setLeftMargin");
          
              return this.__PROXY__.setLeftMargin(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.leftMargin = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.leftMargin");
          
              return this.__PROXY__.leftMargin(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setRightMargin = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setRightMargin");
          
              return this.__PROXY__.setRightMargin(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.rightMargin = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.rightMargin");
          
              return this.__PROXY__.rightMargin(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setTextIndent = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setTextIndent");
          
              return this.__PROXY__.setTextIndent(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.textIndent = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.textIndent");
          
              return this.__PROXY__.textIndent(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setIndent = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setIndent");
          
              return this.__PROXY__.setIndent(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.indent = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.indent");
          
              return this.__PROXY__.indent(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setHeadingLevel = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setHeadingLevel");
          
              return this.__PROXY__.setHeadingLevel(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.headingLevel = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.headingLevel");
          
              return this.__PROXY__.headingLevel(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setLineHeight = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setLineHeight");
          
              return this.__PROXY__.setLineHeight(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.lineHeight = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.lineHeight");
          
              return this.__PROXY__.lineHeight(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.lineHeightType = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.lineHeightType");
          
              return this.__PROXY__.lineHeightType(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setNonBreakableLines = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setNonBreakableLines");
          
              return this.__PROXY__.setNonBreakableLines(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.nonBreakableLines = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.nonBreakableLines");
          
              return this.__PROXY__.nonBreakableLines(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.setPageBreakPolicy = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.setPageBreakPolicy");
          
              return this.__PROXY__.setPageBreakPolicy(...args);
            
        };
    
        // function 
        QTextBlockFormat.prototype.pageBreakPolicy = function(...args) 
          
        {
          //print("JS: QTextBlockFormat.prototype.pageBreakPolicy");
          
              return this.__PROXY__.pageBreakPolicy(...args);
            
        };
    

      // static functions:
      QTextBlockFormat.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTextBlockFormat.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTextBlockFormat.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

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

      QTextBlockFormat.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      