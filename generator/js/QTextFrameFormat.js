
      // auto generated
      //var self;

      // class constructor:
      function QTextFrameFormat() {
        

        // should be QTextFrameFormat_BaseJs.call(this, engine):
        //QTextFrameFormat.prototype = new QTextFrameFormat_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextFrameFormat.getIdStatic()))) {

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
            qWarning("QTextFrameFormat.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTextFrameFormat_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextFrameFormat);
  }

  
  else {
    
        print("QTextFrameFormat(): wrong number / type of arguments");
      
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

      //QTextFrameFormat.prototype = new QTextFrameFormat_BaseJs(engine);
      //QTextFrameFormat.prototype = new QTextFrameFormat_Wrapper(engine);
      QTextFrameFormat.prototype = new Object();


      QTextFrameFormat.prototype.toString = function() {
          //return "QTextFrameFormat [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextFrameFormat [JS]";
        };
      QTextFrameFormat.getObjectType = function() {
        return RJSType_QTextFrameFormat.getIdStatic();
      };

      QTextFrameFormat.prototype.getObjectType = function() {
        return RJSType_QTextFrameFormat.getIdStatic();
      };

      QTextFrameFormat.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextFrameFormat.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QTextFormat.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: FormatType
QTextFrameFormat.InvalidFormat = QTextFrameFormat_Wrapper.InvalidFormat;
QTextFrameFormat.BlockFormat = QTextFrameFormat_Wrapper.BlockFormat;
QTextFrameFormat.CharFormat = QTextFrameFormat_Wrapper.CharFormat;
QTextFrameFormat.ListFormat = QTextFrameFormat_Wrapper.ListFormat;
QTextFrameFormat.FrameFormat = QTextFrameFormat_Wrapper.FrameFormat;
QTextFrameFormat.UserFormat = QTextFrameFormat_Wrapper.UserFormat;

  // enum: Property
QTextFrameFormat.ObjectIndex = QTextFrameFormat_Wrapper.ObjectIndex;
QTextFrameFormat.CssFloat = QTextFrameFormat_Wrapper.CssFloat;
QTextFrameFormat.LayoutDirection = QTextFrameFormat_Wrapper.LayoutDirection;
QTextFrameFormat.OutlinePen = QTextFrameFormat_Wrapper.OutlinePen;
QTextFrameFormat.BackgroundBrush = QTextFrameFormat_Wrapper.BackgroundBrush;
QTextFrameFormat.ForegroundBrush = QTextFrameFormat_Wrapper.ForegroundBrush;
QTextFrameFormat.BackgroundImageUrl = QTextFrameFormat_Wrapper.BackgroundImageUrl;
QTextFrameFormat.BlockAlignment = QTextFrameFormat_Wrapper.BlockAlignment;
QTextFrameFormat.BlockTopMargin = QTextFrameFormat_Wrapper.BlockTopMargin;
QTextFrameFormat.BlockBottomMargin = QTextFrameFormat_Wrapper.BlockBottomMargin;
QTextFrameFormat.BlockLeftMargin = QTextFrameFormat_Wrapper.BlockLeftMargin;
QTextFrameFormat.BlockRightMargin = QTextFrameFormat_Wrapper.BlockRightMargin;
QTextFrameFormat.TextIndent = QTextFrameFormat_Wrapper.TextIndent;
QTextFrameFormat.TabPositions = QTextFrameFormat_Wrapper.TabPositions;
QTextFrameFormat.BlockIndent = QTextFrameFormat_Wrapper.BlockIndent;
QTextFrameFormat.LineHeight = QTextFrameFormat_Wrapper.LineHeight;
QTextFrameFormat.LineHeightType = QTextFrameFormat_Wrapper.LineHeightType;
QTextFrameFormat.BlockNonBreakableLines = QTextFrameFormat_Wrapper.BlockNonBreakableLines;
QTextFrameFormat.BlockTrailingHorizontalRulerWidth = QTextFrameFormat_Wrapper.BlockTrailingHorizontalRulerWidth;
QTextFrameFormat.HeadingLevel = QTextFrameFormat_Wrapper.HeadingLevel;
QTextFrameFormat.BlockQuoteLevel = QTextFrameFormat_Wrapper.BlockQuoteLevel;
QTextFrameFormat.BlockCodeLanguage = QTextFrameFormat_Wrapper.BlockCodeLanguage;
QTextFrameFormat.BlockCodeFence = QTextFrameFormat_Wrapper.BlockCodeFence;
QTextFrameFormat.BlockMarker = QTextFrameFormat_Wrapper.BlockMarker;
QTextFrameFormat.FirstFontProperty = QTextFrameFormat_Wrapper.FirstFontProperty;
QTextFrameFormat.FontCapitalization = QTextFrameFormat_Wrapper.FontCapitalization;
QTextFrameFormat.FontLetterSpacing = QTextFrameFormat_Wrapper.FontLetterSpacing;
QTextFrameFormat.FontWordSpacing = QTextFrameFormat_Wrapper.FontWordSpacing;
QTextFrameFormat.FontStyleHint = QTextFrameFormat_Wrapper.FontStyleHint;
QTextFrameFormat.FontStyleStrategy = QTextFrameFormat_Wrapper.FontStyleStrategy;
QTextFrameFormat.FontKerning = QTextFrameFormat_Wrapper.FontKerning;
QTextFrameFormat.FontHintingPreference = QTextFrameFormat_Wrapper.FontHintingPreference;
QTextFrameFormat.FontFamilies = QTextFrameFormat_Wrapper.FontFamilies;
QTextFrameFormat.FontStyleName = QTextFrameFormat_Wrapper.FontStyleName;
QTextFrameFormat.FontLetterSpacingType = QTextFrameFormat_Wrapper.FontLetterSpacingType;
QTextFrameFormat.FontStretch = QTextFrameFormat_Wrapper.FontStretch;
QTextFrameFormat.FontPointSize = QTextFrameFormat_Wrapper.FontPointSize;
QTextFrameFormat.FontSizeAdjustment = QTextFrameFormat_Wrapper.FontSizeAdjustment;
QTextFrameFormat.FontSizeIncrement = QTextFrameFormat_Wrapper.FontSizeIncrement;
QTextFrameFormat.FontWeight = QTextFrameFormat_Wrapper.FontWeight;
QTextFrameFormat.FontItalic = QTextFrameFormat_Wrapper.FontItalic;
QTextFrameFormat.FontUnderline = QTextFrameFormat_Wrapper.FontUnderline;
QTextFrameFormat.FontOverline = QTextFrameFormat_Wrapper.FontOverline;
QTextFrameFormat.FontStrikeOut = QTextFrameFormat_Wrapper.FontStrikeOut;
QTextFrameFormat.FontFixedPitch = QTextFrameFormat_Wrapper.FontFixedPitch;
QTextFrameFormat.FontPixelSize = QTextFrameFormat_Wrapper.FontPixelSize;
QTextFrameFormat.LastFontProperty = QTextFrameFormat_Wrapper.LastFontProperty;
QTextFrameFormat.TextUnderlineColor = QTextFrameFormat_Wrapper.TextUnderlineColor;
QTextFrameFormat.TextVerticalAlignment = QTextFrameFormat_Wrapper.TextVerticalAlignment;
QTextFrameFormat.TextOutline = QTextFrameFormat_Wrapper.TextOutline;
QTextFrameFormat.TextUnderlineStyle = QTextFrameFormat_Wrapper.TextUnderlineStyle;
QTextFrameFormat.TextToolTip = QTextFrameFormat_Wrapper.TextToolTip;
QTextFrameFormat.TextSuperScriptBaseline = QTextFrameFormat_Wrapper.TextSuperScriptBaseline;
QTextFrameFormat.TextSubScriptBaseline = QTextFrameFormat_Wrapper.TextSubScriptBaseline;
QTextFrameFormat.TextBaselineOffset = QTextFrameFormat_Wrapper.TextBaselineOffset;
QTextFrameFormat.IsAnchor = QTextFrameFormat_Wrapper.IsAnchor;
QTextFrameFormat.AnchorHref = QTextFrameFormat_Wrapper.AnchorHref;
QTextFrameFormat.AnchorName = QTextFrameFormat_Wrapper.AnchorName;
QTextFrameFormat.OldFontLetterSpacingType = QTextFrameFormat_Wrapper.OldFontLetterSpacingType;
QTextFrameFormat.OldFontStretch = QTextFrameFormat_Wrapper.OldFontStretch;
QTextFrameFormat.OldTextUnderlineColor = QTextFrameFormat_Wrapper.OldTextUnderlineColor;
QTextFrameFormat.ObjectType = QTextFrameFormat_Wrapper.ObjectType;
QTextFrameFormat.ListStyle = QTextFrameFormat_Wrapper.ListStyle;
QTextFrameFormat.ListIndent = QTextFrameFormat_Wrapper.ListIndent;
QTextFrameFormat.ListNumberPrefix = QTextFrameFormat_Wrapper.ListNumberPrefix;
QTextFrameFormat.ListNumberSuffix = QTextFrameFormat_Wrapper.ListNumberSuffix;
QTextFrameFormat.FrameBorder = QTextFrameFormat_Wrapper.FrameBorder;
QTextFrameFormat.FrameMargin = QTextFrameFormat_Wrapper.FrameMargin;
QTextFrameFormat.FramePadding = QTextFrameFormat_Wrapper.FramePadding;
QTextFrameFormat.FrameWidth = QTextFrameFormat_Wrapper.FrameWidth;
QTextFrameFormat.FrameHeight = QTextFrameFormat_Wrapper.FrameHeight;
QTextFrameFormat.FrameTopMargin = QTextFrameFormat_Wrapper.FrameTopMargin;
QTextFrameFormat.FrameBottomMargin = QTextFrameFormat_Wrapper.FrameBottomMargin;
QTextFrameFormat.FrameLeftMargin = QTextFrameFormat_Wrapper.FrameLeftMargin;
QTextFrameFormat.FrameRightMargin = QTextFrameFormat_Wrapper.FrameRightMargin;
QTextFrameFormat.FrameBorderBrush = QTextFrameFormat_Wrapper.FrameBorderBrush;
QTextFrameFormat.FrameBorderStyle = QTextFrameFormat_Wrapper.FrameBorderStyle;
QTextFrameFormat.TableColumns = QTextFrameFormat_Wrapper.TableColumns;
QTextFrameFormat.TableColumnWidthConstraints = QTextFrameFormat_Wrapper.TableColumnWidthConstraints;
QTextFrameFormat.TableCellSpacing = QTextFrameFormat_Wrapper.TableCellSpacing;
QTextFrameFormat.TableCellPadding = QTextFrameFormat_Wrapper.TableCellPadding;
QTextFrameFormat.TableHeaderRowCount = QTextFrameFormat_Wrapper.TableHeaderRowCount;
QTextFrameFormat.TableBorderCollapse = QTextFrameFormat_Wrapper.TableBorderCollapse;
QTextFrameFormat.TableCellRowSpan = QTextFrameFormat_Wrapper.TableCellRowSpan;
QTextFrameFormat.TableCellColumnSpan = QTextFrameFormat_Wrapper.TableCellColumnSpan;
QTextFrameFormat.TableCellTopPadding = QTextFrameFormat_Wrapper.TableCellTopPadding;
QTextFrameFormat.TableCellBottomPadding = QTextFrameFormat_Wrapper.TableCellBottomPadding;
QTextFrameFormat.TableCellLeftPadding = QTextFrameFormat_Wrapper.TableCellLeftPadding;
QTextFrameFormat.TableCellRightPadding = QTextFrameFormat_Wrapper.TableCellRightPadding;
QTextFrameFormat.TableCellTopBorder = QTextFrameFormat_Wrapper.TableCellTopBorder;
QTextFrameFormat.TableCellBottomBorder = QTextFrameFormat_Wrapper.TableCellBottomBorder;
QTextFrameFormat.TableCellLeftBorder = QTextFrameFormat_Wrapper.TableCellLeftBorder;
QTextFrameFormat.TableCellRightBorder = QTextFrameFormat_Wrapper.TableCellRightBorder;
QTextFrameFormat.TableCellTopBorderStyle = QTextFrameFormat_Wrapper.TableCellTopBorderStyle;
QTextFrameFormat.TableCellBottomBorderStyle = QTextFrameFormat_Wrapper.TableCellBottomBorderStyle;
QTextFrameFormat.TableCellLeftBorderStyle = QTextFrameFormat_Wrapper.TableCellLeftBorderStyle;
QTextFrameFormat.TableCellRightBorderStyle = QTextFrameFormat_Wrapper.TableCellRightBorderStyle;
QTextFrameFormat.TableCellTopBorderBrush = QTextFrameFormat_Wrapper.TableCellTopBorderBrush;
QTextFrameFormat.TableCellBottomBorderBrush = QTextFrameFormat_Wrapper.TableCellBottomBorderBrush;
QTextFrameFormat.TableCellLeftBorderBrush = QTextFrameFormat_Wrapper.TableCellLeftBorderBrush;
QTextFrameFormat.TableCellRightBorderBrush = QTextFrameFormat_Wrapper.TableCellRightBorderBrush;
QTextFrameFormat.ImageName = QTextFrameFormat_Wrapper.ImageName;
QTextFrameFormat.ImageTitle = QTextFrameFormat_Wrapper.ImageTitle;
QTextFrameFormat.ImageAltText = QTextFrameFormat_Wrapper.ImageAltText;
QTextFrameFormat.ImageWidth = QTextFrameFormat_Wrapper.ImageWidth;
QTextFrameFormat.ImageHeight = QTextFrameFormat_Wrapper.ImageHeight;
QTextFrameFormat.ImageQuality = QTextFrameFormat_Wrapper.ImageQuality;
QTextFrameFormat.FullWidthSelection = QTextFrameFormat_Wrapper.FullWidthSelection;
QTextFrameFormat.PageBreakPolicy = QTextFrameFormat_Wrapper.PageBreakPolicy;
QTextFrameFormat.UserProperty = QTextFrameFormat_Wrapper.UserProperty;

  // enum: ObjectTypes
QTextFrameFormat.NoObject = QTextFrameFormat_Wrapper.NoObject;
QTextFrameFormat.ImageObject = QTextFrameFormat_Wrapper.ImageObject;
QTextFrameFormat.TableObject = QTextFrameFormat_Wrapper.TableObject;
QTextFrameFormat.TableCellObject = QTextFrameFormat_Wrapper.TableCellObject;
QTextFrameFormat.UserObject = QTextFrameFormat_Wrapper.UserObject;

  // enum: PageBreakFlag
QTextFrameFormat.PageBreak_Auto = QTextFrameFormat_Wrapper.PageBreak_Auto;
QTextFrameFormat.PageBreak_AlwaysBefore = QTextFrameFormat_Wrapper.PageBreak_AlwaysBefore;
QTextFrameFormat.PageBreak_AlwaysAfter = QTextFrameFormat_Wrapper.PageBreak_AlwaysAfter;

  // enum: Position
QTextFrameFormat.InFlow = QTextFrameFormat_Wrapper.InFlow;
QTextFrameFormat.FloatLeft = QTextFrameFormat_Wrapper.FloatLeft;
QTextFrameFormat.FloatRight = QTextFrameFormat_Wrapper.FloatRight;

  // enum: BorderStyle
QTextFrameFormat.BorderStyle_None = QTextFrameFormat_Wrapper.BorderStyle_None;
QTextFrameFormat.BorderStyle_Dotted = QTextFrameFormat_Wrapper.BorderStyle_Dotted;
QTextFrameFormat.BorderStyle_Dashed = QTextFrameFormat_Wrapper.BorderStyle_Dashed;
QTextFrameFormat.BorderStyle_Solid = QTextFrameFormat_Wrapper.BorderStyle_Solid;
QTextFrameFormat.BorderStyle_Double = QTextFrameFormat_Wrapper.BorderStyle_Double;
QTextFrameFormat.BorderStyle_DotDash = QTextFrameFormat_Wrapper.BorderStyle_DotDash;
QTextFrameFormat.BorderStyle_DotDotDash = QTextFrameFormat_Wrapper.BorderStyle_DotDotDash;
QTextFrameFormat.BorderStyle_Groove = QTextFrameFormat_Wrapper.BorderStyle_Groove;
QTextFrameFormat.BorderStyle_Ridge = QTextFrameFormat_Wrapper.BorderStyle_Ridge;
QTextFrameFormat.BorderStyle_Inset = QTextFrameFormat_Wrapper.BorderStyle_Inset;
QTextFrameFormat.BorderStyle_Outset = QTextFrameFormat_Wrapper.BorderStyle_Outset;


      // functions:
      
        // function 
        QTextFrameFormat.prototype.swap = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.merge = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.merge");
          
              return this.__PROXY__.merge(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.type = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.objectIndex = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.objectIndex");
          
              return this.__PROXY__.objectIndex(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setObjectIndex = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setObjectIndex");
          
              return this.__PROXY__.setObjectIndex(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.property = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.clearProperty = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.clearProperty");
          
              return this.__PROXY__.clearProperty(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.hasProperty = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.hasProperty");
          
              return this.__PROXY__.hasProperty(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.boolProperty = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.boolProperty");
          
              return this.__PROXY__.boolProperty(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.intProperty = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.intProperty");
          
              return this.__PROXY__.intProperty(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.doubleProperty = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.doubleProperty");
          
              return this.__PROXY__.doubleProperty(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.stringProperty = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.stringProperty");
          
              return this.__PROXY__.stringProperty(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.colorProperty = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.colorProperty");
          
              return this.__PROXY__.colorProperty(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.penProperty = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.penProperty");
          
              return this.__PROXY__.penProperty(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.brushProperty = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.brushProperty");
          
              return this.__PROXY__.brushProperty(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.lengthProperty = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.lengthProperty");
          
              return this.__PROXY__.lengthProperty(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.lengthVectorProperty = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.lengthVectorProperty");
          
              return this.__PROXY__.lengthVectorProperty(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.propertyCount = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.propertyCount");
          
              return this.__PROXY__.propertyCount(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setObjectType = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setObjectType");
          
              return this.__PROXY__.setObjectType(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.objectType = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.objectType");
          
              return this.__PROXY__.objectType(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.isCharFormat = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.isCharFormat");
          
              return this.__PROXY__.isCharFormat(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.isBlockFormat = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.isBlockFormat");
          
              return this.__PROXY__.isBlockFormat(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.isListFormat = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.isListFormat");
          
              return this.__PROXY__.isListFormat(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.isFrameFormat = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.isFrameFormat");
          
              return this.__PROXY__.isFrameFormat(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.isImageFormat = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.isImageFormat");
          
              return this.__PROXY__.isImageFormat(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.isTableFormat = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.isTableFormat");
          
              return this.__PROXY__.isTableFormat(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.isTableCellFormat = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.isTableCellFormat");
          
              return this.__PROXY__.isTableCellFormat(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.toBlockFormat = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.toBlockFormat");
          
              return this.__PROXY__.toBlockFormat(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.toCharFormat = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.toCharFormat");
          
              return this.__PROXY__.toCharFormat(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.toListFormat = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.toListFormat");
          
              return this.__PROXY__.toListFormat(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.toTableFormat = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.toTableFormat");
          
              return this.__PROXY__.toTableFormat(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.toFrameFormat = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.toFrameFormat");
          
              return this.__PROXY__.toFrameFormat(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.toImageFormat = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.toImageFormat");
          
              return this.__PROXY__.toImageFormat(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.toTableCellFormat = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.toTableCellFormat");
          
              return this.__PROXY__.toTableCellFormat(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.layoutDirection = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.layoutDirection");
          
              return this.__PROXY__.layoutDirection(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setBackground = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setBackground");
          
              return this.__PROXY__.setBackground(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.background = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.background");
          
              return this.__PROXY__.background(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.clearBackground = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.clearBackground");
          
              return this.__PROXY__.clearBackground(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setForeground = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setForeground");
          
              return this.__PROXY__.setForeground(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.foreground = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.foreground");
          
              return this.__PROXY__.foreground(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.clearForeground = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.clearForeground");
          
              return this.__PROXY__.clearForeground(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.isValid = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setPosition = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setPosition");
          
              return this.__PROXY__.setPosition(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.position = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.position");
          
              return this.__PROXY__.position(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setBorder = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setBorder");
          
              return this.__PROXY__.setBorder(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.border = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.border");
          
              return this.__PROXY__.border(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setBorderBrush = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setBorderBrush");
          
              return this.__PROXY__.setBorderBrush(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.borderBrush = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.borderBrush");
          
              return this.__PROXY__.borderBrush(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setBorderStyle = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setBorderStyle");
          
              return this.__PROXY__.setBorderStyle(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.borderStyle = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.borderStyle");
          
              return this.__PROXY__.borderStyle(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setMargin = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setMargin");
          
              return this.__PROXY__.setMargin(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.margin = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.margin");
          
              return this.__PROXY__.margin(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setTopMargin = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setTopMargin");
          
              return this.__PROXY__.setTopMargin(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.topMargin = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.topMargin");
          
              return this.__PROXY__.topMargin(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setBottomMargin = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setBottomMargin");
          
              return this.__PROXY__.setBottomMargin(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.bottomMargin = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.bottomMargin");
          
              return this.__PROXY__.bottomMargin(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setLeftMargin = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setLeftMargin");
          
              return this.__PROXY__.setLeftMargin(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.leftMargin = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.leftMargin");
          
              return this.__PROXY__.leftMargin(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setRightMargin = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setRightMargin");
          
              return this.__PROXY__.setRightMargin(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.rightMargin = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.rightMargin");
          
              return this.__PROXY__.rightMargin(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setPadding = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setPadding");
          
              return this.__PROXY__.setPadding(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.padding = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.padding");
          
              return this.__PROXY__.padding(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setWidth = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setWidth");
          
              return this.__PROXY__.setWidth(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.width = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.width");
          
              return this.__PROXY__.width(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setHeight = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setHeight");
          
              return this.__PROXY__.setHeight(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.height = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.height");
          
              return this.__PROXY__.height(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.setPageBreakPolicy = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.setPageBreakPolicy");
          
              return this.__PROXY__.setPageBreakPolicy(...args);
            
        };
    
        // function 
        QTextFrameFormat.prototype.pageBreakPolicy = function(...args) 
          
        {
          //print("JS: QTextFrameFormat.prototype.pageBreakPolicy");
          
              return this.__PROXY__.pageBreakPolicy(...args);
            
        };
    

      // static functions:
      QTextFrameFormat.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTextFrameFormat.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTextFrameFormat.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextFrameFormat.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextFrameFormat.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTextFrameFormat.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      