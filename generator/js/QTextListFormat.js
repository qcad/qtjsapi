
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QTextListFormat.prototype.swap = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.merge = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.merge");
          
              return this.__PROXY__.merge(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.type = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.objectIndex = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.objectIndex");
          
              return this.__PROXY__.objectIndex(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.setObjectIndex = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.setObjectIndex");
          
              return this.__PROXY__.setObjectIndex(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.property = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.clearProperty = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.clearProperty");
          
              return this.__PROXY__.clearProperty(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.hasProperty = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.hasProperty");
          
              return this.__PROXY__.hasProperty(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.boolProperty = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.boolProperty");
          
              return this.__PROXY__.boolProperty(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.intProperty = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.intProperty");
          
              return this.__PROXY__.intProperty(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.doubleProperty = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.doubleProperty");
          
              return this.__PROXY__.doubleProperty(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.stringProperty = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.stringProperty");
          
              return this.__PROXY__.stringProperty(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.colorProperty = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.colorProperty");
          
              return this.__PROXY__.colorProperty(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.penProperty = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.penProperty");
          
              return this.__PROXY__.penProperty(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.brushProperty = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.brushProperty");
          
              return this.__PROXY__.brushProperty(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.lengthProperty = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.lengthProperty");
          
              return this.__PROXY__.lengthProperty(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.lengthVectorProperty = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.lengthVectorProperty");
          
              return this.__PROXY__.lengthVectorProperty(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.propertyCount = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.propertyCount");
          
              return this.__PROXY__.propertyCount(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.setObjectType = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.setObjectType");
          
              return this.__PROXY__.setObjectType(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.objectType = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.objectType");
          
              return this.__PROXY__.objectType(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.isCharFormat = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.isCharFormat");
          
              return this.__PROXY__.isCharFormat(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.isBlockFormat = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.isBlockFormat");
          
              return this.__PROXY__.isBlockFormat(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.isListFormat = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.isListFormat");
          
              return this.__PROXY__.isListFormat(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.isFrameFormat = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.isFrameFormat");
          
              return this.__PROXY__.isFrameFormat(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.isImageFormat = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.isImageFormat");
          
              return this.__PROXY__.isImageFormat(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.isTableFormat = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.isTableFormat");
          
              return this.__PROXY__.isTableFormat(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.isTableCellFormat = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.isTableCellFormat");
          
              return this.__PROXY__.isTableCellFormat(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.toBlockFormat = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.toBlockFormat");
          
              return this.__PROXY__.toBlockFormat(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.toCharFormat = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.toCharFormat");
          
              return this.__PROXY__.toCharFormat(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.toListFormat = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.toListFormat");
          
              return this.__PROXY__.toListFormat(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.toTableFormat = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.toTableFormat");
          
              return this.__PROXY__.toTableFormat(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.toFrameFormat = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.toFrameFormat");
          
              return this.__PROXY__.toFrameFormat(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.toImageFormat = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.toImageFormat");
          
              return this.__PROXY__.toImageFormat(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.toTableCellFormat = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.toTableCellFormat");
          
              return this.__PROXY__.toTableCellFormat(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.layoutDirection = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.layoutDirection");
          
              return this.__PROXY__.layoutDirection(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.setBackground = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.setBackground");
          
              return this.__PROXY__.setBackground(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.background = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.background");
          
              return this.__PROXY__.background(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.clearBackground = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.clearBackground");
          
              return this.__PROXY__.clearBackground(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.setForeground = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.setForeground");
          
              return this.__PROXY__.setForeground(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.foreground = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.foreground");
          
              return this.__PROXY__.foreground(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.clearForeground = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.clearForeground");
          
              return this.__PROXY__.clearForeground(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.isValid = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.setStyle = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.setStyle");
          
              return this.__PROXY__.setStyle(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.style = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.style");
          
              return this.__PROXY__.style(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.setIndent = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.setIndent");
          
              return this.__PROXY__.setIndent(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.indent = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.indent");
          
              return this.__PROXY__.indent(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.setNumberPrefix = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.setNumberPrefix");
          
              return this.__PROXY__.setNumberPrefix(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.numberPrefix = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.numberPrefix");
          
              return this.__PROXY__.numberPrefix(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.setNumberSuffix = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.setNumberSuffix");
          
              return this.__PROXY__.setNumberSuffix(...args);
            
        };
        
        // function 
        QTextListFormat.prototype.numberSuffix = function(...args) 
          
        {
          //print("JS: QTextListFormat.prototype.numberSuffix");
          
              return this.__PROXY__.numberSuffix(...args);
            
        };
        

      // static functions:
      QTextListFormat.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTextListFormat.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTextListFormat.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

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

      QTextListFormat.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      