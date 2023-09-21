
  // Auto generated
  
  #ifndef QTEXTFORMAT_H_WRAPPER
  #define QTEXTFORMAT_H_WRAPPER

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    

  #include "RJSWrapperObj.h"
  
        #include <QString>
      
        #include <QVariant>
      
        #include <QFont>
      
        #include <QTextBlockFormat>
      
        #include <QTextCharFormat>
      
        #include <QTextListFormat>
      
        #include <QTextTableFormat>
      
        #include <QTextFrameFormat>
      
        #include <QTextImageFormat>
      
        #include <QTextTableCellFormat>
      
        #include <QTextFormat>
      
        #include <QTextObject>
      
        #include <QTextCursor>
      
        #include <QTextDocument>
      
        #include <QTextLength>
      
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QTextLength>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QTextLength
    class QTextLength_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QTextLength_Wrapper(const QTextLength_Wrapper&);

    public:
      // initialization of QTextLength:
      static void init(RJSApi& handler);

      
        static QTextLength* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              case RJSType::QTextLength_Type:
                return (QTextLength*)vp;
            

          default:
            return nullptr;
          }
        }

        static QTextLength* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QTextLength*: wrapper wraps NULL";
          }

          QTextLength* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QTextLength*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    VariableLength = QTextLength::VariableLength,
FixedLength = QTextLength::FixedLength,
PercentageLength = QTextLength::PercentageLength,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QTextLength_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QTextLength_Wrapper(RJSApi& h, QTextLength* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QTextLength_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QTextLength
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QTextLength_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QTextLength
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextLength
    // Function: value
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  value
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextLength
    // Function: rawValue
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rawValue
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QTextLength_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QTextLength* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QTextLength* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QTextLength* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QTextLength_Wrapper*)

    Q_DECLARE_INTERFACE(QTextLength_Wrapper, "org.qcad.QTextLength_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QTextFormat>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QTextFormat
    class QTextFormat_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QTextFormat_Wrapper(const QTextFormat_Wrapper&);

    public:
      // initialization of QTextFormat:
      static void init(RJSApi& handler);

      
        static QTextFormat* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          
            case RJSType::QTextCharFormat_Type:
              return (QTextFormat*)(QTextCharFormat*)vp;
          
            case RJSType::QTextBlockFormat_Type:
              return (QTextFormat*)(QTextBlockFormat*)vp;
          
            case RJSType::QTextListFormat_Type:
              return (QTextFormat*)(QTextListFormat*)vp;
          
            case RJSType::QTextFrameFormat_Type:
              return (QTextFormat*)(QTextFrameFormat*)vp;
          

          // pointer to desired type:
          
              case RJSType::QTextFormat_Type:
                return (QTextFormat*)vp;
            

          default:
            return nullptr;
          }
        }

        static QTextFormat* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QTextFormat*: wrapper wraps NULL";
          }

          QTextFormat* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QTextFormat*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum FormatType {
    InvalidFormat = QTextFormat::InvalidFormat,
BlockFormat = QTextFormat::BlockFormat,
CharFormat = QTextFormat::CharFormat,
ListFormat = QTextFormat::ListFormat,
FrameFormat = QTextFormat::FrameFormat,
UserFormat = QTextFormat::UserFormat,

  };
  Q_ENUM(FormatType)

  enum Property {
    ObjectIndex = QTextFormat::ObjectIndex,
CssFloat = QTextFormat::CssFloat,
LayoutDirection = QTextFormat::LayoutDirection,
OutlinePen = QTextFormat::OutlinePen,
BackgroundBrush = QTextFormat::BackgroundBrush,
ForegroundBrush = QTextFormat::ForegroundBrush,
BackgroundImageUrl = QTextFormat::BackgroundImageUrl,
BlockAlignment = QTextFormat::BlockAlignment,
BlockTopMargin = QTextFormat::BlockTopMargin,
BlockBottomMargin = QTextFormat::BlockBottomMargin,
BlockLeftMargin = QTextFormat::BlockLeftMargin,
BlockRightMargin = QTextFormat::BlockRightMargin,
TextIndent = QTextFormat::TextIndent,
TabPositions = QTextFormat::TabPositions,
BlockIndent = QTextFormat::BlockIndent,
LineHeight = QTextFormat::LineHeight,
LineHeightType = QTextFormat::LineHeightType,
BlockNonBreakableLines = QTextFormat::BlockNonBreakableLines,
BlockTrailingHorizontalRulerWidth = QTextFormat::BlockTrailingHorizontalRulerWidth,
HeadingLevel = QTextFormat::HeadingLevel,
BlockQuoteLevel = QTextFormat::BlockQuoteLevel,
BlockCodeLanguage = QTextFormat::BlockCodeLanguage,
BlockCodeFence = QTextFormat::BlockCodeFence,
BlockMarker = QTextFormat::BlockMarker,
FirstFontProperty = QTextFormat::FirstFontProperty,
FontCapitalization = QTextFormat::FontCapitalization,
FontLetterSpacing = QTextFormat::FontLetterSpacing,
FontWordSpacing = QTextFormat::FontWordSpacing,
FontStyleHint = QTextFormat::FontStyleHint,
FontStyleStrategy = QTextFormat::FontStyleStrategy,
FontKerning = QTextFormat::FontKerning,
FontHintingPreference = QTextFormat::FontHintingPreference,
FontFamilies = QTextFormat::FontFamilies,
FontStyleName = QTextFormat::FontStyleName,
FontLetterSpacingType = QTextFormat::FontLetterSpacingType,
FontStretch = QTextFormat::FontStretch,
FontPointSize = QTextFormat::FontPointSize,
FontSizeAdjustment = QTextFormat::FontSizeAdjustment,
FontSizeIncrement = QTextFormat::FontSizeIncrement,
FontWeight = QTextFormat::FontWeight,
FontItalic = QTextFormat::FontItalic,
FontUnderline = QTextFormat::FontUnderline,
FontOverline = QTextFormat::FontOverline,
FontStrikeOut = QTextFormat::FontStrikeOut,
FontFixedPitch = QTextFormat::FontFixedPitch,
FontPixelSize = QTextFormat::FontPixelSize,
LastFontProperty = QTextFormat::LastFontProperty,
TextUnderlineColor = QTextFormat::TextUnderlineColor,
TextVerticalAlignment = QTextFormat::TextVerticalAlignment,
TextOutline = QTextFormat::TextOutline,
TextUnderlineStyle = QTextFormat::TextUnderlineStyle,
TextToolTip = QTextFormat::TextToolTip,
TextSuperScriptBaseline = QTextFormat::TextSuperScriptBaseline,
TextSubScriptBaseline = QTextFormat::TextSubScriptBaseline,
TextBaselineOffset = QTextFormat::TextBaselineOffset,
IsAnchor = QTextFormat::IsAnchor,
AnchorHref = QTextFormat::AnchorHref,
AnchorName = QTextFormat::AnchorName,
OldFontLetterSpacingType = QTextFormat::OldFontLetterSpacingType,
OldFontStretch = QTextFormat::OldFontStretch,
OldTextUnderlineColor = QTextFormat::OldTextUnderlineColor,
ObjectType = QTextFormat::ObjectType,
ListStyle = QTextFormat::ListStyle,
ListIndent = QTextFormat::ListIndent,
ListNumberPrefix = QTextFormat::ListNumberPrefix,
ListNumberSuffix = QTextFormat::ListNumberSuffix,
FrameBorder = QTextFormat::FrameBorder,
FrameMargin = QTextFormat::FrameMargin,
FramePadding = QTextFormat::FramePadding,
FrameWidth = QTextFormat::FrameWidth,
FrameHeight = QTextFormat::FrameHeight,
FrameTopMargin = QTextFormat::FrameTopMargin,
FrameBottomMargin = QTextFormat::FrameBottomMargin,
FrameLeftMargin = QTextFormat::FrameLeftMargin,
FrameRightMargin = QTextFormat::FrameRightMargin,
FrameBorderBrush = QTextFormat::FrameBorderBrush,
FrameBorderStyle = QTextFormat::FrameBorderStyle,
TableColumns = QTextFormat::TableColumns,
TableColumnWidthConstraints = QTextFormat::TableColumnWidthConstraints,
TableCellSpacing = QTextFormat::TableCellSpacing,
TableCellPadding = QTextFormat::TableCellPadding,
TableHeaderRowCount = QTextFormat::TableHeaderRowCount,
TableBorderCollapse = QTextFormat::TableBorderCollapse,
TableCellRowSpan = QTextFormat::TableCellRowSpan,
TableCellColumnSpan = QTextFormat::TableCellColumnSpan,
TableCellTopPadding = QTextFormat::TableCellTopPadding,
TableCellBottomPadding = QTextFormat::TableCellBottomPadding,
TableCellLeftPadding = QTextFormat::TableCellLeftPadding,
TableCellRightPadding = QTextFormat::TableCellRightPadding,
TableCellTopBorder = QTextFormat::TableCellTopBorder,
TableCellBottomBorder = QTextFormat::TableCellBottomBorder,
TableCellLeftBorder = QTextFormat::TableCellLeftBorder,
TableCellRightBorder = QTextFormat::TableCellRightBorder,
TableCellTopBorderStyle = QTextFormat::TableCellTopBorderStyle,
TableCellBottomBorderStyle = QTextFormat::TableCellBottomBorderStyle,
TableCellLeftBorderStyle = QTextFormat::TableCellLeftBorderStyle,
TableCellRightBorderStyle = QTextFormat::TableCellRightBorderStyle,
TableCellTopBorderBrush = QTextFormat::TableCellTopBorderBrush,
TableCellBottomBorderBrush = QTextFormat::TableCellBottomBorderBrush,
TableCellLeftBorderBrush = QTextFormat::TableCellLeftBorderBrush,
TableCellRightBorderBrush = QTextFormat::TableCellRightBorderBrush,
ImageName = QTextFormat::ImageName,
ImageTitle = QTextFormat::ImageTitle,
ImageAltText = QTextFormat::ImageAltText,
ImageWidth = QTextFormat::ImageWidth,
ImageHeight = QTextFormat::ImageHeight,
ImageQuality = QTextFormat::ImageQuality,
FullWidthSelection = QTextFormat::FullWidthSelection,
PageBreakPolicy = QTextFormat::PageBreakPolicy,
UserProperty = QTextFormat::UserProperty,

  };
  Q_ENUM(Property)

  enum ObjectTypes {
    NoObject = QTextFormat::NoObject,
ImageObject = QTextFormat::ImageObject,
TableObject = QTextFormat::TableObject,
TableCellObject = QTextFormat::TableCellObject,
UserObject = QTextFormat::UserObject,

  };
  Q_ENUM(ObjectTypes)

  enum PageBreakFlag {
    PageBreak_Auto = QTextFormat::PageBreak_Auto,
PageBreak_AlwaysBefore = QTextFormat::PageBreak_AlwaysBefore,
PageBreak_AlwaysAfter = QTextFormat::PageBreak_AlwaysAfter,

  };
  Q_ENUM(PageBreakFlag)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QTextFormat_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QTextFormat_Wrapper(RJSApi& h, QTextFormat* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QTextFormat_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QTextFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QTextFormat_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QTextFormat
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  swap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFormat
    // Function: merge
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  merge
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFormat
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isValid
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEmpty
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: objectIndex
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectIndex
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: setObjectIndex
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectIndex
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFormat
    // Function: property
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  property
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: setProperty
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFormat
    // Function: clearProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFormat
    // Function: hasProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: boolProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boolProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: intProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  intProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: doubleProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  doubleProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: stringProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  stringProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: colorProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  colorProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: penProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  penProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: brushProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  brushProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: lengthProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lengthProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: lengthVectorProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lengthVectorProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: propertyCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  propertyCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: setObjectType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFormat
    // Function: objectType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectType
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: isCharFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: isBlockFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBlockFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: isListFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isListFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: isFrameFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isFrameFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: isImageFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isImageFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: isTableFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTableFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: isTableCellFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTableCellFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: toBlockFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toBlockFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: toCharFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: toListFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toListFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: toTableFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toTableFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: toFrameFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toFrameFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: toImageFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toImageFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: toTableCellFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toTableCellFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: setLayoutDirection
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLayoutDirection
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFormat
    // Function: layoutDirection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  layoutDirection
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: setBackground
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBackground
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFormat
    // Function: background
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  background
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: clearBackground
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearBackground
              (

                
              )
              
              ;
            
    // Class: QTextFormat
    // Function: setForeground
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setForeground
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFormat
    // Function: foreground
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  foreground
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFormat
    // Function: clearForeground
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearForeground
              (

                
              )
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QTextFormat_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QTextFormat* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QTextFormat* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QTextFormat* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QTextFormat_Wrapper*)

    Q_DECLARE_INTERFACE(QTextFormat_Wrapper, "org.qcad.QTextFormat_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QTextCharFormat>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QTextCharFormat
    class QTextCharFormat_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QTextCharFormat_Wrapper(const QTextCharFormat_Wrapper&);

    public:
      // initialization of QTextCharFormat:
      static void init(RJSApi& handler);

      
        static QTextCharFormat* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          
            case RJSType::QTextImageFormat_Type:
              return (QTextCharFormat*)(QTextImageFormat*)vp;
          
            case RJSType::QTextTableCellFormat_Type:
              return (QTextCharFormat*)(QTextTableCellFormat*)vp;
          

          // pointer to desired type:
          
              case RJSType::QTextCharFormat_Type:
                return (QTextCharFormat*)vp;
            

          default:
            return nullptr;
          }
        }

        static QTextCharFormat* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QTextCharFormat*: wrapper wraps NULL";
          }

          QTextCharFormat* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QTextCharFormat*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum FormatType {
    InvalidFormat = QTextCharFormat::InvalidFormat,
BlockFormat = QTextCharFormat::BlockFormat,
CharFormat = QTextCharFormat::CharFormat,
ListFormat = QTextCharFormat::ListFormat,
FrameFormat = QTextCharFormat::FrameFormat,
UserFormat = QTextCharFormat::UserFormat,

  };
  Q_ENUM(FormatType)

  enum Property {
    ObjectIndex = QTextCharFormat::ObjectIndex,
CssFloat = QTextCharFormat::CssFloat,
LayoutDirection = QTextCharFormat::LayoutDirection,
OutlinePen = QTextCharFormat::OutlinePen,
BackgroundBrush = QTextCharFormat::BackgroundBrush,
ForegroundBrush = QTextCharFormat::ForegroundBrush,
BackgroundImageUrl = QTextCharFormat::BackgroundImageUrl,
BlockAlignment = QTextCharFormat::BlockAlignment,
BlockTopMargin = QTextCharFormat::BlockTopMargin,
BlockBottomMargin = QTextCharFormat::BlockBottomMargin,
BlockLeftMargin = QTextCharFormat::BlockLeftMargin,
BlockRightMargin = QTextCharFormat::BlockRightMargin,
TextIndent = QTextCharFormat::TextIndent,
TabPositions = QTextCharFormat::TabPositions,
BlockIndent = QTextCharFormat::BlockIndent,
LineHeight = QTextCharFormat::LineHeight,
LineHeightType = QTextCharFormat::LineHeightType,
BlockNonBreakableLines = QTextCharFormat::BlockNonBreakableLines,
BlockTrailingHorizontalRulerWidth = QTextCharFormat::BlockTrailingHorizontalRulerWidth,
HeadingLevel = QTextCharFormat::HeadingLevel,
BlockQuoteLevel = QTextCharFormat::BlockQuoteLevel,
BlockCodeLanguage = QTextCharFormat::BlockCodeLanguage,
BlockCodeFence = QTextCharFormat::BlockCodeFence,
BlockMarker = QTextCharFormat::BlockMarker,
FirstFontProperty = QTextCharFormat::FirstFontProperty,
FontCapitalization = QTextCharFormat::FontCapitalization,
FontLetterSpacing = QTextCharFormat::FontLetterSpacing,
FontWordSpacing = QTextCharFormat::FontWordSpacing,
FontStyleHint = QTextCharFormat::FontStyleHint,
FontStyleStrategy = QTextCharFormat::FontStyleStrategy,
FontKerning = QTextCharFormat::FontKerning,
FontHintingPreference = QTextCharFormat::FontHintingPreference,
FontFamilies = QTextCharFormat::FontFamilies,
FontStyleName = QTextCharFormat::FontStyleName,
FontLetterSpacingType = QTextCharFormat::FontLetterSpacingType,
FontStretch = QTextCharFormat::FontStretch,
FontPointSize = QTextCharFormat::FontPointSize,
FontSizeAdjustment = QTextCharFormat::FontSizeAdjustment,
FontSizeIncrement = QTextCharFormat::FontSizeIncrement,
FontWeight = QTextCharFormat::FontWeight,
FontItalic = QTextCharFormat::FontItalic,
FontUnderline = QTextCharFormat::FontUnderline,
FontOverline = QTextCharFormat::FontOverline,
FontStrikeOut = QTextCharFormat::FontStrikeOut,
FontFixedPitch = QTextCharFormat::FontFixedPitch,
FontPixelSize = QTextCharFormat::FontPixelSize,
LastFontProperty = QTextCharFormat::LastFontProperty,
TextUnderlineColor = QTextCharFormat::TextUnderlineColor,
TextVerticalAlignment = QTextCharFormat::TextVerticalAlignment,
TextOutline = QTextCharFormat::TextOutline,
TextUnderlineStyle = QTextCharFormat::TextUnderlineStyle,
TextToolTip = QTextCharFormat::TextToolTip,
TextSuperScriptBaseline = QTextCharFormat::TextSuperScriptBaseline,
TextSubScriptBaseline = QTextCharFormat::TextSubScriptBaseline,
TextBaselineOffset = QTextCharFormat::TextBaselineOffset,
IsAnchor = QTextCharFormat::IsAnchor,
AnchorHref = QTextCharFormat::AnchorHref,
AnchorName = QTextCharFormat::AnchorName,
OldFontLetterSpacingType = QTextCharFormat::OldFontLetterSpacingType,
OldFontStretch = QTextCharFormat::OldFontStretch,
OldTextUnderlineColor = QTextCharFormat::OldTextUnderlineColor,
ObjectType = QTextCharFormat::ObjectType,
ListStyle = QTextCharFormat::ListStyle,
ListIndent = QTextCharFormat::ListIndent,
ListNumberPrefix = QTextCharFormat::ListNumberPrefix,
ListNumberSuffix = QTextCharFormat::ListNumberSuffix,
FrameBorder = QTextCharFormat::FrameBorder,
FrameMargin = QTextCharFormat::FrameMargin,
FramePadding = QTextCharFormat::FramePadding,
FrameWidth = QTextCharFormat::FrameWidth,
FrameHeight = QTextCharFormat::FrameHeight,
FrameTopMargin = QTextCharFormat::FrameTopMargin,
FrameBottomMargin = QTextCharFormat::FrameBottomMargin,
FrameLeftMargin = QTextCharFormat::FrameLeftMargin,
FrameRightMargin = QTextCharFormat::FrameRightMargin,
FrameBorderBrush = QTextCharFormat::FrameBorderBrush,
FrameBorderStyle = QTextCharFormat::FrameBorderStyle,
TableColumns = QTextCharFormat::TableColumns,
TableColumnWidthConstraints = QTextCharFormat::TableColumnWidthConstraints,
TableCellSpacing = QTextCharFormat::TableCellSpacing,
TableCellPadding = QTextCharFormat::TableCellPadding,
TableHeaderRowCount = QTextCharFormat::TableHeaderRowCount,
TableBorderCollapse = QTextCharFormat::TableBorderCollapse,
TableCellRowSpan = QTextCharFormat::TableCellRowSpan,
TableCellColumnSpan = QTextCharFormat::TableCellColumnSpan,
TableCellTopPadding = QTextCharFormat::TableCellTopPadding,
TableCellBottomPadding = QTextCharFormat::TableCellBottomPadding,
TableCellLeftPadding = QTextCharFormat::TableCellLeftPadding,
TableCellRightPadding = QTextCharFormat::TableCellRightPadding,
TableCellTopBorder = QTextCharFormat::TableCellTopBorder,
TableCellBottomBorder = QTextCharFormat::TableCellBottomBorder,
TableCellLeftBorder = QTextCharFormat::TableCellLeftBorder,
TableCellRightBorder = QTextCharFormat::TableCellRightBorder,
TableCellTopBorderStyle = QTextCharFormat::TableCellTopBorderStyle,
TableCellBottomBorderStyle = QTextCharFormat::TableCellBottomBorderStyle,
TableCellLeftBorderStyle = QTextCharFormat::TableCellLeftBorderStyle,
TableCellRightBorderStyle = QTextCharFormat::TableCellRightBorderStyle,
TableCellTopBorderBrush = QTextCharFormat::TableCellTopBorderBrush,
TableCellBottomBorderBrush = QTextCharFormat::TableCellBottomBorderBrush,
TableCellLeftBorderBrush = QTextCharFormat::TableCellLeftBorderBrush,
TableCellRightBorderBrush = QTextCharFormat::TableCellRightBorderBrush,
ImageName = QTextCharFormat::ImageName,
ImageTitle = QTextCharFormat::ImageTitle,
ImageAltText = QTextCharFormat::ImageAltText,
ImageWidth = QTextCharFormat::ImageWidth,
ImageHeight = QTextCharFormat::ImageHeight,
ImageQuality = QTextCharFormat::ImageQuality,
FullWidthSelection = QTextCharFormat::FullWidthSelection,
PageBreakPolicy = QTextCharFormat::PageBreakPolicy,
UserProperty = QTextCharFormat::UserProperty,

  };
  Q_ENUM(Property)

  enum ObjectTypes {
    NoObject = QTextCharFormat::NoObject,
ImageObject = QTextCharFormat::ImageObject,
TableObject = QTextCharFormat::TableObject,
TableCellObject = QTextCharFormat::TableCellObject,
UserObject = QTextCharFormat::UserObject,

  };
  Q_ENUM(ObjectTypes)

  enum PageBreakFlag {
    PageBreak_Auto = QTextCharFormat::PageBreak_Auto,
PageBreak_AlwaysBefore = QTextCharFormat::PageBreak_AlwaysBefore,
PageBreak_AlwaysAfter = QTextCharFormat::PageBreak_AlwaysAfter,

  };
  Q_ENUM(PageBreakFlag)

  enum VerticalAlignment {
    AlignNormal = QTextCharFormat::AlignNormal,
AlignSuperScript = QTextCharFormat::AlignSuperScript,
AlignSubScript = QTextCharFormat::AlignSubScript,
AlignMiddle = QTextCharFormat::AlignMiddle,
AlignTop = QTextCharFormat::AlignTop,
AlignBottom = QTextCharFormat::AlignBottom,
AlignBaseline = QTextCharFormat::AlignBaseline,

  };
  Q_ENUM(VerticalAlignment)

  enum UnderlineStyle {
    NoUnderline = QTextCharFormat::NoUnderline,
SingleUnderline = QTextCharFormat::SingleUnderline,
DashUnderline = QTextCharFormat::DashUnderline,
DotLine = QTextCharFormat::DotLine,
DashDotLine = QTextCharFormat::DashDotLine,
DashDotDotLine = QTextCharFormat::DashDotDotLine,
WaveUnderline = QTextCharFormat::WaveUnderline,
SpellCheckUnderline = QTextCharFormat::SpellCheckUnderline,

  };
  Q_ENUM(UnderlineStyle)

  enum FontPropertiesInheritanceBehavior {
    FontPropertiesSpecifiedOnly = QTextCharFormat::FontPropertiesSpecifiedOnly,
FontPropertiesAll = QTextCharFormat::FontPropertiesAll,

  };
  Q_ENUM(FontPropertiesInheritanceBehavior)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QTextCharFormat_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QTextCharFormat_Wrapper(RJSApi& h, QTextCharFormat* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QTextCharFormat_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QTextCharFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QTextCharFormat_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: QTextCharFormat
    // Function: swap
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  swap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: merge
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  merge
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: isEmpty
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEmpty
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: type
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: objectIndex
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectIndex
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setObjectIndex
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectIndex
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: property
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  property
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: clearProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: hasProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: boolProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boolProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: intProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  intProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: doubleProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  doubleProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: stringProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  stringProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: colorProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  colorProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: penProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  penProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: brushProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  brushProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: lengthProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lengthProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: lengthVectorProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lengthVectorProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: propertyCount
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  propertyCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setObjectType
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: objectType
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectType
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: isCharFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: isBlockFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBlockFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: isListFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isListFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: isFrameFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isFrameFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: isImageFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isImageFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: isTableFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTableFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: isTableCellFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTableCellFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: toBlockFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toBlockFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: toCharFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: toListFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toListFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: toTableFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toTableFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: toFrameFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toFrameFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: toImageFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toImageFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: toTableCellFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toTableCellFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setLayoutDirection
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLayoutDirection
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: layoutDirection
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  layoutDirection
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setBackground
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBackground
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: background
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  background
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: clearBackground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearBackground
              (

                
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: setForeground
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setForeground
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: foreground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  foreground
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: clearForeground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearForeground
              (

                
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isValid
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFont
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFont
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: font
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  font
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontFamilies
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontFamilies
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontFamilies
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontFamilies
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontStyleName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontStyleName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontStyleName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontStyleName
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontPointSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontPointSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontPointSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontPointSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontWeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontWeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontWeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontWeight
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontItalic
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontItalic
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontItalic
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontItalic
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontCapitalization
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontCapitalization
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontCapitalization
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontCapitalization
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontLetterSpacingType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontLetterSpacingType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontLetterSpacingType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontLetterSpacingType
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontLetterSpacing
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontLetterSpacing
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontLetterSpacing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontLetterSpacing
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontWordSpacing
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontWordSpacing
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontWordSpacing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontWordSpacing
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontUnderline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontUnderline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontUnderline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontUnderline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontOverline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontOverline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontOverline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontOverline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontStrikeOut
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontStrikeOut
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontStrikeOut
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontStrikeOut
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setUnderlineColor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUnderlineColor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: underlineColor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  underlineColor
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontFixedPitch
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontFixedPitch
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontFixedPitch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontFixedPitch
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontStretch
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontStretch
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontStretch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontStretch
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontStyleHint
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontStyleHint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontStyleStrategy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontStyleStrategy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontStyleHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontStyleHint
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontStyleStrategy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontStyleStrategy
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontHintingPreference
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontHintingPreference
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontHintingPreference
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontHintingPreference
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setFontKerning
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontKerning
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: fontKerning
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontKerning
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setUnderlineStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUnderlineStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: underlineStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  underlineStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setVerticalAlignment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVerticalAlignment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: verticalAlignment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  verticalAlignment
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setTextOutline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextOutline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: textOutline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  textOutline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setToolTip
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setToolTip
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: toolTip
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toolTip
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setSuperScriptBaseline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSuperScriptBaseline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: superScriptBaseline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  superScriptBaseline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setSubScriptBaseline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSubScriptBaseline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: subScriptBaseline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  subScriptBaseline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setBaselineOffset
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBaselineOffset
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: baselineOffset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  baselineOffset
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setAnchor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAnchor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: isAnchor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAnchor
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setAnchorHref
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAnchorHref
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: anchorHref
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  anchorHref
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setAnchorNames
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAnchorNames
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: anchorNames
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  anchorNames
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setTableCellRowSpan
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTableCellRowSpan
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: tableCellRowSpan
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tableCellRowSpan
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCharFormat
    // Function: setTableCellColumnSpan
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTableCellColumnSpan
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCharFormat
    // Function: tableCellColumnSpan
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tableCellColumnSpan
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QTextCharFormat_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QTextCharFormat* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QTextCharFormat* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QTextCharFormat* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QTextCharFormat_Wrapper*)

    Q_DECLARE_INTERFACE(QTextCharFormat_Wrapper, "org.qcad.QTextCharFormat_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QTextBlockFormat>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QTextBlockFormat
    class QTextBlockFormat_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QTextBlockFormat_Wrapper(const QTextBlockFormat_Wrapper&);

    public:
      // initialization of QTextBlockFormat:
      static void init(RJSApi& handler);

      
        static QTextBlockFormat* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              case RJSType::QTextBlockFormat_Type:
                return (QTextBlockFormat*)vp;
            

          default:
            return nullptr;
          }
        }

        static QTextBlockFormat* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QTextBlockFormat*: wrapper wraps NULL";
          }

          QTextBlockFormat* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QTextBlockFormat*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum FormatType {
    InvalidFormat = QTextBlockFormat::InvalidFormat,
BlockFormat = QTextBlockFormat::BlockFormat,
CharFormat = QTextBlockFormat::CharFormat,
ListFormat = QTextBlockFormat::ListFormat,
FrameFormat = QTextBlockFormat::FrameFormat,
UserFormat = QTextBlockFormat::UserFormat,

  };
  Q_ENUM(FormatType)

  enum Property {
    ObjectIndex = QTextBlockFormat::ObjectIndex,
CssFloat = QTextBlockFormat::CssFloat,
LayoutDirection = QTextBlockFormat::LayoutDirection,
OutlinePen = QTextBlockFormat::OutlinePen,
BackgroundBrush = QTextBlockFormat::BackgroundBrush,
ForegroundBrush = QTextBlockFormat::ForegroundBrush,
BackgroundImageUrl = QTextBlockFormat::BackgroundImageUrl,
BlockAlignment = QTextBlockFormat::BlockAlignment,
BlockTopMargin = QTextBlockFormat::BlockTopMargin,
BlockBottomMargin = QTextBlockFormat::BlockBottomMargin,
BlockLeftMargin = QTextBlockFormat::BlockLeftMargin,
BlockRightMargin = QTextBlockFormat::BlockRightMargin,
TextIndent = QTextBlockFormat::TextIndent,
TabPositions = QTextBlockFormat::TabPositions,
BlockIndent = QTextBlockFormat::BlockIndent,
LineHeight = QTextBlockFormat::LineHeight,
LineHeightType = QTextBlockFormat::LineHeightType,
BlockNonBreakableLines = QTextBlockFormat::BlockNonBreakableLines,
BlockTrailingHorizontalRulerWidth = QTextBlockFormat::BlockTrailingHorizontalRulerWidth,
HeadingLevel = QTextBlockFormat::HeadingLevel,
BlockQuoteLevel = QTextBlockFormat::BlockQuoteLevel,
BlockCodeLanguage = QTextBlockFormat::BlockCodeLanguage,
BlockCodeFence = QTextBlockFormat::BlockCodeFence,
BlockMarker = QTextBlockFormat::BlockMarker,
FirstFontProperty = QTextBlockFormat::FirstFontProperty,
FontCapitalization = QTextBlockFormat::FontCapitalization,
FontLetterSpacing = QTextBlockFormat::FontLetterSpacing,
FontWordSpacing = QTextBlockFormat::FontWordSpacing,
FontStyleHint = QTextBlockFormat::FontStyleHint,
FontStyleStrategy = QTextBlockFormat::FontStyleStrategy,
FontKerning = QTextBlockFormat::FontKerning,
FontHintingPreference = QTextBlockFormat::FontHintingPreference,
FontFamilies = QTextBlockFormat::FontFamilies,
FontStyleName = QTextBlockFormat::FontStyleName,
FontLetterSpacingType = QTextBlockFormat::FontLetterSpacingType,
FontStretch = QTextBlockFormat::FontStretch,
FontPointSize = QTextBlockFormat::FontPointSize,
FontSizeAdjustment = QTextBlockFormat::FontSizeAdjustment,
FontSizeIncrement = QTextBlockFormat::FontSizeIncrement,
FontWeight = QTextBlockFormat::FontWeight,
FontItalic = QTextBlockFormat::FontItalic,
FontUnderline = QTextBlockFormat::FontUnderline,
FontOverline = QTextBlockFormat::FontOverline,
FontStrikeOut = QTextBlockFormat::FontStrikeOut,
FontFixedPitch = QTextBlockFormat::FontFixedPitch,
FontPixelSize = QTextBlockFormat::FontPixelSize,
LastFontProperty = QTextBlockFormat::LastFontProperty,
TextUnderlineColor = QTextBlockFormat::TextUnderlineColor,
TextVerticalAlignment = QTextBlockFormat::TextVerticalAlignment,
TextOutline = QTextBlockFormat::TextOutline,
TextUnderlineStyle = QTextBlockFormat::TextUnderlineStyle,
TextToolTip = QTextBlockFormat::TextToolTip,
TextSuperScriptBaseline = QTextBlockFormat::TextSuperScriptBaseline,
TextSubScriptBaseline = QTextBlockFormat::TextSubScriptBaseline,
TextBaselineOffset = QTextBlockFormat::TextBaselineOffset,
IsAnchor = QTextBlockFormat::IsAnchor,
AnchorHref = QTextBlockFormat::AnchorHref,
AnchorName = QTextBlockFormat::AnchorName,
OldFontLetterSpacingType = QTextBlockFormat::OldFontLetterSpacingType,
OldFontStretch = QTextBlockFormat::OldFontStretch,
OldTextUnderlineColor = QTextBlockFormat::OldTextUnderlineColor,
ObjectType = QTextBlockFormat::ObjectType,
ListStyle = QTextBlockFormat::ListStyle,
ListIndent = QTextBlockFormat::ListIndent,
ListNumberPrefix = QTextBlockFormat::ListNumberPrefix,
ListNumberSuffix = QTextBlockFormat::ListNumberSuffix,
FrameBorder = QTextBlockFormat::FrameBorder,
FrameMargin = QTextBlockFormat::FrameMargin,
FramePadding = QTextBlockFormat::FramePadding,
FrameWidth = QTextBlockFormat::FrameWidth,
FrameHeight = QTextBlockFormat::FrameHeight,
FrameTopMargin = QTextBlockFormat::FrameTopMargin,
FrameBottomMargin = QTextBlockFormat::FrameBottomMargin,
FrameLeftMargin = QTextBlockFormat::FrameLeftMargin,
FrameRightMargin = QTextBlockFormat::FrameRightMargin,
FrameBorderBrush = QTextBlockFormat::FrameBorderBrush,
FrameBorderStyle = QTextBlockFormat::FrameBorderStyle,
TableColumns = QTextBlockFormat::TableColumns,
TableColumnWidthConstraints = QTextBlockFormat::TableColumnWidthConstraints,
TableCellSpacing = QTextBlockFormat::TableCellSpacing,
TableCellPadding = QTextBlockFormat::TableCellPadding,
TableHeaderRowCount = QTextBlockFormat::TableHeaderRowCount,
TableBorderCollapse = QTextBlockFormat::TableBorderCollapse,
TableCellRowSpan = QTextBlockFormat::TableCellRowSpan,
TableCellColumnSpan = QTextBlockFormat::TableCellColumnSpan,
TableCellTopPadding = QTextBlockFormat::TableCellTopPadding,
TableCellBottomPadding = QTextBlockFormat::TableCellBottomPadding,
TableCellLeftPadding = QTextBlockFormat::TableCellLeftPadding,
TableCellRightPadding = QTextBlockFormat::TableCellRightPadding,
TableCellTopBorder = QTextBlockFormat::TableCellTopBorder,
TableCellBottomBorder = QTextBlockFormat::TableCellBottomBorder,
TableCellLeftBorder = QTextBlockFormat::TableCellLeftBorder,
TableCellRightBorder = QTextBlockFormat::TableCellRightBorder,
TableCellTopBorderStyle = QTextBlockFormat::TableCellTopBorderStyle,
TableCellBottomBorderStyle = QTextBlockFormat::TableCellBottomBorderStyle,
TableCellLeftBorderStyle = QTextBlockFormat::TableCellLeftBorderStyle,
TableCellRightBorderStyle = QTextBlockFormat::TableCellRightBorderStyle,
TableCellTopBorderBrush = QTextBlockFormat::TableCellTopBorderBrush,
TableCellBottomBorderBrush = QTextBlockFormat::TableCellBottomBorderBrush,
TableCellLeftBorderBrush = QTextBlockFormat::TableCellLeftBorderBrush,
TableCellRightBorderBrush = QTextBlockFormat::TableCellRightBorderBrush,
ImageName = QTextBlockFormat::ImageName,
ImageTitle = QTextBlockFormat::ImageTitle,
ImageAltText = QTextBlockFormat::ImageAltText,
ImageWidth = QTextBlockFormat::ImageWidth,
ImageHeight = QTextBlockFormat::ImageHeight,
ImageQuality = QTextBlockFormat::ImageQuality,
FullWidthSelection = QTextBlockFormat::FullWidthSelection,
PageBreakPolicy = QTextBlockFormat::PageBreakPolicy,
UserProperty = QTextBlockFormat::UserProperty,

  };
  Q_ENUM(Property)

  enum ObjectTypes {
    NoObject = QTextBlockFormat::NoObject,
ImageObject = QTextBlockFormat::ImageObject,
TableObject = QTextBlockFormat::TableObject,
TableCellObject = QTextBlockFormat::TableCellObject,
UserObject = QTextBlockFormat::UserObject,

  };
  Q_ENUM(ObjectTypes)

  enum PageBreakFlag {
    PageBreak_Auto = QTextBlockFormat::PageBreak_Auto,
PageBreak_AlwaysBefore = QTextBlockFormat::PageBreak_AlwaysBefore,
PageBreak_AlwaysAfter = QTextBlockFormat::PageBreak_AlwaysAfter,

  };
  Q_ENUM(PageBreakFlag)

  enum LineHeightTypes {
    SingleHeight = QTextBlockFormat::SingleHeight,
ProportionalHeight = QTextBlockFormat::ProportionalHeight,
FixedHeight = QTextBlockFormat::FixedHeight,
MinimumHeight = QTextBlockFormat::MinimumHeight,
LineDistanceHeight = QTextBlockFormat::LineDistanceHeight,

  };
  Q_ENUM(LineHeightTypes)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QTextBlockFormat_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QTextBlockFormat_Wrapper(RJSApi& h, QTextBlockFormat* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QTextBlockFormat_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QTextBlockFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QTextBlockFormat_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: QTextBlockFormat
    // Function: swap
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  swap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: merge
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  merge
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: isEmpty
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEmpty
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: type
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: objectIndex
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectIndex
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setObjectIndex
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectIndex
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: property
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  property
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: clearProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: hasProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: boolProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boolProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: intProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  intProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: doubleProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  doubleProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: stringProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  stringProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: colorProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  colorProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: penProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  penProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: brushProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  brushProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: lengthProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lengthProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: lengthVectorProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lengthVectorProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: propertyCount
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  propertyCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setObjectType
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: objectType
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectType
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: isCharFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: isBlockFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBlockFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: isListFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isListFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: isFrameFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isFrameFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: isImageFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isImageFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: isTableFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTableFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: isTableCellFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTableCellFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: toBlockFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toBlockFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: toCharFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: toListFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toListFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: toTableFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toTableFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: toFrameFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toFrameFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: toImageFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toImageFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: toTableCellFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toTableCellFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setLayoutDirection
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLayoutDirection
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: layoutDirection
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  layoutDirection
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setBackground
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBackground
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: background
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  background
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: clearBackground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearBackground
              (

                
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setForeground
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setForeground
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: foreground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  foreground
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: clearForeground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearForeground
              (

                
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isValid
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setAlignment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAlignment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: alignment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  alignment
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setTopMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTopMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: topMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  topMargin
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setBottomMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBottomMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: bottomMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bottomMargin
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setLeftMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLeftMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: leftMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  leftMargin
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setRightMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRightMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: rightMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rightMargin
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setTextIndent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextIndent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: textIndent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  textIndent
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setIndent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setIndent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: indent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  indent
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setHeadingLevel
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHeadingLevel
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: headingLevel
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  headingLevel
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setLineHeight
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLineHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: lineHeight
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: lineHeightType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineHeightType
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setNonBreakableLines
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNonBreakableLines
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: nonBreakableLines
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nonBreakableLines
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextBlockFormat
    // Function: setPageBreakPolicy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPageBreakPolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextBlockFormat
    // Function: pageBreakPolicy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pageBreakPolicy
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QTextBlockFormat_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QTextBlockFormat* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QTextBlockFormat* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QTextBlockFormat* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QTextBlockFormat_Wrapper*)

    Q_DECLARE_INTERFACE(QTextBlockFormat_Wrapper, "org.qcad.QTextBlockFormat_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QTextListFormat>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QTextListFormat
    class QTextListFormat_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QTextListFormat_Wrapper(const QTextListFormat_Wrapper&);

    public:
      // initialization of QTextListFormat:
      static void init(RJSApi& handler);

      
        static QTextListFormat* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              case RJSType::QTextListFormat_Type:
                return (QTextListFormat*)vp;
            

          default:
            return nullptr;
          }
        }

        static QTextListFormat* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QTextListFormat*: wrapper wraps NULL";
          }

          QTextListFormat* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QTextListFormat*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum FormatType {
    InvalidFormat = QTextListFormat::InvalidFormat,
BlockFormat = QTextListFormat::BlockFormat,
CharFormat = QTextListFormat::CharFormat,
ListFormat = QTextListFormat::ListFormat,
FrameFormat = QTextListFormat::FrameFormat,
UserFormat = QTextListFormat::UserFormat,

  };
  Q_ENUM(FormatType)

  enum Property {
    ObjectIndex = QTextListFormat::ObjectIndex,
CssFloat = QTextListFormat::CssFloat,
LayoutDirection = QTextListFormat::LayoutDirection,
OutlinePen = QTextListFormat::OutlinePen,
BackgroundBrush = QTextListFormat::BackgroundBrush,
ForegroundBrush = QTextListFormat::ForegroundBrush,
BackgroundImageUrl = QTextListFormat::BackgroundImageUrl,
BlockAlignment = QTextListFormat::BlockAlignment,
BlockTopMargin = QTextListFormat::BlockTopMargin,
BlockBottomMargin = QTextListFormat::BlockBottomMargin,
BlockLeftMargin = QTextListFormat::BlockLeftMargin,
BlockRightMargin = QTextListFormat::BlockRightMargin,
TextIndent = QTextListFormat::TextIndent,
TabPositions = QTextListFormat::TabPositions,
BlockIndent = QTextListFormat::BlockIndent,
LineHeight = QTextListFormat::LineHeight,
LineHeightType = QTextListFormat::LineHeightType,
BlockNonBreakableLines = QTextListFormat::BlockNonBreakableLines,
BlockTrailingHorizontalRulerWidth = QTextListFormat::BlockTrailingHorizontalRulerWidth,
HeadingLevel = QTextListFormat::HeadingLevel,
BlockQuoteLevel = QTextListFormat::BlockQuoteLevel,
BlockCodeLanguage = QTextListFormat::BlockCodeLanguage,
BlockCodeFence = QTextListFormat::BlockCodeFence,
BlockMarker = QTextListFormat::BlockMarker,
FirstFontProperty = QTextListFormat::FirstFontProperty,
FontCapitalization = QTextListFormat::FontCapitalization,
FontLetterSpacing = QTextListFormat::FontLetterSpacing,
FontWordSpacing = QTextListFormat::FontWordSpacing,
FontStyleHint = QTextListFormat::FontStyleHint,
FontStyleStrategy = QTextListFormat::FontStyleStrategy,
FontKerning = QTextListFormat::FontKerning,
FontHintingPreference = QTextListFormat::FontHintingPreference,
FontFamilies = QTextListFormat::FontFamilies,
FontStyleName = QTextListFormat::FontStyleName,
FontLetterSpacingType = QTextListFormat::FontLetterSpacingType,
FontStretch = QTextListFormat::FontStretch,
FontPointSize = QTextListFormat::FontPointSize,
FontSizeAdjustment = QTextListFormat::FontSizeAdjustment,
FontSizeIncrement = QTextListFormat::FontSizeIncrement,
FontWeight = QTextListFormat::FontWeight,
FontItalic = QTextListFormat::FontItalic,
FontUnderline = QTextListFormat::FontUnderline,
FontOverline = QTextListFormat::FontOverline,
FontStrikeOut = QTextListFormat::FontStrikeOut,
FontFixedPitch = QTextListFormat::FontFixedPitch,
FontPixelSize = QTextListFormat::FontPixelSize,
LastFontProperty = QTextListFormat::LastFontProperty,
TextUnderlineColor = QTextListFormat::TextUnderlineColor,
TextVerticalAlignment = QTextListFormat::TextVerticalAlignment,
TextOutline = QTextListFormat::TextOutline,
TextUnderlineStyle = QTextListFormat::TextUnderlineStyle,
TextToolTip = QTextListFormat::TextToolTip,
TextSuperScriptBaseline = QTextListFormat::TextSuperScriptBaseline,
TextSubScriptBaseline = QTextListFormat::TextSubScriptBaseline,
TextBaselineOffset = QTextListFormat::TextBaselineOffset,
IsAnchor = QTextListFormat::IsAnchor,
AnchorHref = QTextListFormat::AnchorHref,
AnchorName = QTextListFormat::AnchorName,
OldFontLetterSpacingType = QTextListFormat::OldFontLetterSpacingType,
OldFontStretch = QTextListFormat::OldFontStretch,
OldTextUnderlineColor = QTextListFormat::OldTextUnderlineColor,
ObjectType = QTextListFormat::ObjectType,
ListStyle = QTextListFormat::ListStyle,
ListIndent = QTextListFormat::ListIndent,
ListNumberPrefix = QTextListFormat::ListNumberPrefix,
ListNumberSuffix = QTextListFormat::ListNumberSuffix,
FrameBorder = QTextListFormat::FrameBorder,
FrameMargin = QTextListFormat::FrameMargin,
FramePadding = QTextListFormat::FramePadding,
FrameWidth = QTextListFormat::FrameWidth,
FrameHeight = QTextListFormat::FrameHeight,
FrameTopMargin = QTextListFormat::FrameTopMargin,
FrameBottomMargin = QTextListFormat::FrameBottomMargin,
FrameLeftMargin = QTextListFormat::FrameLeftMargin,
FrameRightMargin = QTextListFormat::FrameRightMargin,
FrameBorderBrush = QTextListFormat::FrameBorderBrush,
FrameBorderStyle = QTextListFormat::FrameBorderStyle,
TableColumns = QTextListFormat::TableColumns,
TableColumnWidthConstraints = QTextListFormat::TableColumnWidthConstraints,
TableCellSpacing = QTextListFormat::TableCellSpacing,
TableCellPadding = QTextListFormat::TableCellPadding,
TableHeaderRowCount = QTextListFormat::TableHeaderRowCount,
TableBorderCollapse = QTextListFormat::TableBorderCollapse,
TableCellRowSpan = QTextListFormat::TableCellRowSpan,
TableCellColumnSpan = QTextListFormat::TableCellColumnSpan,
TableCellTopPadding = QTextListFormat::TableCellTopPadding,
TableCellBottomPadding = QTextListFormat::TableCellBottomPadding,
TableCellLeftPadding = QTextListFormat::TableCellLeftPadding,
TableCellRightPadding = QTextListFormat::TableCellRightPadding,
TableCellTopBorder = QTextListFormat::TableCellTopBorder,
TableCellBottomBorder = QTextListFormat::TableCellBottomBorder,
TableCellLeftBorder = QTextListFormat::TableCellLeftBorder,
TableCellRightBorder = QTextListFormat::TableCellRightBorder,
TableCellTopBorderStyle = QTextListFormat::TableCellTopBorderStyle,
TableCellBottomBorderStyle = QTextListFormat::TableCellBottomBorderStyle,
TableCellLeftBorderStyle = QTextListFormat::TableCellLeftBorderStyle,
TableCellRightBorderStyle = QTextListFormat::TableCellRightBorderStyle,
TableCellTopBorderBrush = QTextListFormat::TableCellTopBorderBrush,
TableCellBottomBorderBrush = QTextListFormat::TableCellBottomBorderBrush,
TableCellLeftBorderBrush = QTextListFormat::TableCellLeftBorderBrush,
TableCellRightBorderBrush = QTextListFormat::TableCellRightBorderBrush,
ImageName = QTextListFormat::ImageName,
ImageTitle = QTextListFormat::ImageTitle,
ImageAltText = QTextListFormat::ImageAltText,
ImageWidth = QTextListFormat::ImageWidth,
ImageHeight = QTextListFormat::ImageHeight,
ImageQuality = QTextListFormat::ImageQuality,
FullWidthSelection = QTextListFormat::FullWidthSelection,
PageBreakPolicy = QTextListFormat::PageBreakPolicy,
UserProperty = QTextListFormat::UserProperty,

  };
  Q_ENUM(Property)

  enum ObjectTypes {
    NoObject = QTextListFormat::NoObject,
ImageObject = QTextListFormat::ImageObject,
TableObject = QTextListFormat::TableObject,
TableCellObject = QTextListFormat::TableCellObject,
UserObject = QTextListFormat::UserObject,

  };
  Q_ENUM(ObjectTypes)

  enum PageBreakFlag {
    PageBreak_Auto = QTextListFormat::PageBreak_Auto,
PageBreak_AlwaysBefore = QTextListFormat::PageBreak_AlwaysBefore,
PageBreak_AlwaysAfter = QTextListFormat::PageBreak_AlwaysAfter,

  };
  Q_ENUM(PageBreakFlag)

  enum Style {
    ListDisc = QTextListFormat::ListDisc,
ListCircle = QTextListFormat::ListCircle,
ListSquare = QTextListFormat::ListSquare,
ListDecimal = QTextListFormat::ListDecimal,
ListLowerAlpha = QTextListFormat::ListLowerAlpha,
ListUpperAlpha = QTextListFormat::ListUpperAlpha,
ListLowerRoman = QTextListFormat::ListLowerRoman,
ListUpperRoman = QTextListFormat::ListUpperRoman,
ListStyleUndefined = QTextListFormat::ListStyleUndefined,

  };
  Q_ENUM(Style)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QTextListFormat_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QTextListFormat_Wrapper(RJSApi& h, QTextListFormat* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QTextListFormat_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QTextListFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QTextListFormat_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: QTextListFormat
    // Function: swap
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  swap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextListFormat
    // Function: merge
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  merge
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextListFormat
    // Function: isEmpty
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEmpty
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: type
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: objectIndex
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectIndex
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: setObjectIndex
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectIndex
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextListFormat
    // Function: property
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  property
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: setProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextListFormat
    // Function: clearProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextListFormat
    // Function: hasProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: boolProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boolProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: intProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  intProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: doubleProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  doubleProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: stringProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  stringProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: colorProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  colorProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: penProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  penProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: brushProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  brushProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: lengthProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lengthProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: lengthVectorProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lengthVectorProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: propertyCount
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  propertyCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: setObjectType
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextListFormat
    // Function: objectType
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectType
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: isCharFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: isBlockFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBlockFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: isListFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isListFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: isFrameFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isFrameFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: isImageFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isImageFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: isTableFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTableFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: isTableCellFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTableCellFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: toBlockFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toBlockFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: toCharFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: toListFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toListFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: toTableFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toTableFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: toFrameFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toFrameFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: toImageFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toImageFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: toTableCellFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toTableCellFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: setLayoutDirection
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLayoutDirection
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextListFormat
    // Function: layoutDirection
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  layoutDirection
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: setBackground
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBackground
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextListFormat
    // Function: background
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  background
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: clearBackground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearBackground
              (

                
              )
              
              ;
            
    // Class: QTextListFormat
    // Function: setForeground
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setForeground
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextListFormat
    // Function: foreground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  foreground
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: clearForeground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearForeground
              (

                
              )
              
              ;
            
    // Class: QTextListFormat
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isValid
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: setStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextListFormat
    // Function: style
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  style
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: setIndent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setIndent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextListFormat
    // Function: indent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  indent
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: setNumberPrefix
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNumberPrefix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextListFormat
    // Function: numberPrefix
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  numberPrefix
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextListFormat
    // Function: setNumberSuffix
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNumberSuffix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextListFormat
    // Function: numberSuffix
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  numberSuffix
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QTextListFormat_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QTextListFormat* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QTextListFormat* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QTextListFormat* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QTextListFormat_Wrapper*)

    Q_DECLARE_INTERFACE(QTextListFormat_Wrapper, "org.qcad.QTextListFormat_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QTextImageFormat>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QTextImageFormat
    class QTextImageFormat_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QTextImageFormat_Wrapper(const QTextImageFormat_Wrapper&);

    public:
      // initialization of QTextImageFormat:
      static void init(RJSApi& handler);

      
        static QTextImageFormat* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              case RJSType::QTextImageFormat_Type:
                return (QTextImageFormat*)vp;
            

          default:
            return nullptr;
          }
        }

        static QTextImageFormat* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QTextImageFormat*: wrapper wraps NULL";
          }

          QTextImageFormat* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QTextImageFormat*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum VerticalAlignment {
    AlignNormal = QTextImageFormat::AlignNormal,
AlignSuperScript = QTextImageFormat::AlignSuperScript,
AlignSubScript = QTextImageFormat::AlignSubScript,
AlignMiddle = QTextImageFormat::AlignMiddle,
AlignTop = QTextImageFormat::AlignTop,
AlignBottom = QTextImageFormat::AlignBottom,
AlignBaseline = QTextImageFormat::AlignBaseline,

  };
  Q_ENUM(VerticalAlignment)

  enum UnderlineStyle {
    NoUnderline = QTextImageFormat::NoUnderline,
SingleUnderline = QTextImageFormat::SingleUnderline,
DashUnderline = QTextImageFormat::DashUnderline,
DotLine = QTextImageFormat::DotLine,
DashDotLine = QTextImageFormat::DashDotLine,
DashDotDotLine = QTextImageFormat::DashDotDotLine,
WaveUnderline = QTextImageFormat::WaveUnderline,
SpellCheckUnderline = QTextImageFormat::SpellCheckUnderline,

  };
  Q_ENUM(UnderlineStyle)

  enum FontPropertiesInheritanceBehavior {
    FontPropertiesSpecifiedOnly = QTextImageFormat::FontPropertiesSpecifiedOnly,
FontPropertiesAll = QTextImageFormat::FontPropertiesAll,

  };
  Q_ENUM(FontPropertiesInheritanceBehavior)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QTextImageFormat_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QTextImageFormat_Wrapper(RJSApi& h, QTextImageFormat* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QTextImageFormat_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QTextImageFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QTextImageFormat_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: QTextImageFormat
    // Function: setFont
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFont
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: font
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  font
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontFamilies
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontFamilies
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontFamilies
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontFamilies
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontStyleName
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontStyleName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontStyleName
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontStyleName
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontPointSize
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontPointSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontPointSize
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontPointSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontWeight
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontWeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontWeight
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontWeight
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontItalic
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontItalic
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontItalic
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontItalic
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontCapitalization
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontCapitalization
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontCapitalization
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontCapitalization
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontLetterSpacingType
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontLetterSpacingType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontLetterSpacingType
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontLetterSpacingType
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontLetterSpacing
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontLetterSpacing
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontLetterSpacing
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontLetterSpacing
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontWordSpacing
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontWordSpacing
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontWordSpacing
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontWordSpacing
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontUnderline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontUnderline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontUnderline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontUnderline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontOverline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontOverline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontOverline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontOverline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontStrikeOut
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontStrikeOut
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontStrikeOut
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontStrikeOut
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setUnderlineColor
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUnderlineColor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: underlineColor
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  underlineColor
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontFixedPitch
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontFixedPitch
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontFixedPitch
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontFixedPitch
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontStretch
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontStretch
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontStretch
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontStretch
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontStyleHint
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontStyleHint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontStyleStrategy
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontStyleStrategy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontStyleHint
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontStyleHint
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontStyleStrategy
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontStyleStrategy
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontHintingPreference
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontHintingPreference
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontHintingPreference
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontHintingPreference
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setFontKerning
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontKerning
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: fontKerning
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontKerning
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setUnderlineStyle
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUnderlineStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: underlineStyle
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  underlineStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setVerticalAlignment
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVerticalAlignment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: verticalAlignment
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  verticalAlignment
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setTextOutline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextOutline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: textOutline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  textOutline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setToolTip
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setToolTip
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: toolTip
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toolTip
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setSuperScriptBaseline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSuperScriptBaseline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: superScriptBaseline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  superScriptBaseline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setSubScriptBaseline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSubScriptBaseline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: subScriptBaseline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  subScriptBaseline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setBaselineOffset
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBaselineOffset
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: baselineOffset
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  baselineOffset
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setAnchor
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAnchor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: isAnchor
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAnchor
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setAnchorHref
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAnchorHref
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: anchorHref
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  anchorHref
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setAnchorNames
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAnchorNames
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: anchorNames
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  anchorNames
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setTableCellRowSpan
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTableCellRowSpan
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: tableCellRowSpan
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tableCellRowSpan
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setTableCellColumnSpan
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTableCellColumnSpan
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: tableCellColumnSpan
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tableCellColumnSpan
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isValid
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: name
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  name
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: width
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  width
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: height
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  height
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextImageFormat
    // Function: setQuality
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setQuality
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextImageFormat
    // Function: quality
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  quality
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QTextImageFormat_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QTextImageFormat* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QTextImageFormat* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QTextImageFormat* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QTextImageFormat_Wrapper*)

    Q_DECLARE_INTERFACE(QTextImageFormat_Wrapper, "org.qcad.QTextImageFormat_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QTextFrameFormat>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QTextFrameFormat
    class QTextFrameFormat_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QTextFrameFormat_Wrapper(const QTextFrameFormat_Wrapper&);

    public:
      // initialization of QTextFrameFormat:
      static void init(RJSApi& handler);

      
        static QTextFrameFormat* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          
            case RJSType::QTextTableFormat_Type:
              return (QTextFrameFormat*)(QTextTableFormat*)vp;
          

          // pointer to desired type:
          
              case RJSType::QTextFrameFormat_Type:
                return (QTextFrameFormat*)vp;
            

          default:
            return nullptr;
          }
        }

        static QTextFrameFormat* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QTextFrameFormat*: wrapper wraps NULL";
          }

          QTextFrameFormat* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QTextFrameFormat*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum FormatType {
    InvalidFormat = QTextFrameFormat::InvalidFormat,
BlockFormat = QTextFrameFormat::BlockFormat,
CharFormat = QTextFrameFormat::CharFormat,
ListFormat = QTextFrameFormat::ListFormat,
FrameFormat = QTextFrameFormat::FrameFormat,
UserFormat = QTextFrameFormat::UserFormat,

  };
  Q_ENUM(FormatType)

  enum Property {
    ObjectIndex = QTextFrameFormat::ObjectIndex,
CssFloat = QTextFrameFormat::CssFloat,
LayoutDirection = QTextFrameFormat::LayoutDirection,
OutlinePen = QTextFrameFormat::OutlinePen,
BackgroundBrush = QTextFrameFormat::BackgroundBrush,
ForegroundBrush = QTextFrameFormat::ForegroundBrush,
BackgroundImageUrl = QTextFrameFormat::BackgroundImageUrl,
BlockAlignment = QTextFrameFormat::BlockAlignment,
BlockTopMargin = QTextFrameFormat::BlockTopMargin,
BlockBottomMargin = QTextFrameFormat::BlockBottomMargin,
BlockLeftMargin = QTextFrameFormat::BlockLeftMargin,
BlockRightMargin = QTextFrameFormat::BlockRightMargin,
TextIndent = QTextFrameFormat::TextIndent,
TabPositions = QTextFrameFormat::TabPositions,
BlockIndent = QTextFrameFormat::BlockIndent,
LineHeight = QTextFrameFormat::LineHeight,
LineHeightType = QTextFrameFormat::LineHeightType,
BlockNonBreakableLines = QTextFrameFormat::BlockNonBreakableLines,
BlockTrailingHorizontalRulerWidth = QTextFrameFormat::BlockTrailingHorizontalRulerWidth,
HeadingLevel = QTextFrameFormat::HeadingLevel,
BlockQuoteLevel = QTextFrameFormat::BlockQuoteLevel,
BlockCodeLanguage = QTextFrameFormat::BlockCodeLanguage,
BlockCodeFence = QTextFrameFormat::BlockCodeFence,
BlockMarker = QTextFrameFormat::BlockMarker,
FirstFontProperty = QTextFrameFormat::FirstFontProperty,
FontCapitalization = QTextFrameFormat::FontCapitalization,
FontLetterSpacing = QTextFrameFormat::FontLetterSpacing,
FontWordSpacing = QTextFrameFormat::FontWordSpacing,
FontStyleHint = QTextFrameFormat::FontStyleHint,
FontStyleStrategy = QTextFrameFormat::FontStyleStrategy,
FontKerning = QTextFrameFormat::FontKerning,
FontHintingPreference = QTextFrameFormat::FontHintingPreference,
FontFamilies = QTextFrameFormat::FontFamilies,
FontStyleName = QTextFrameFormat::FontStyleName,
FontLetterSpacingType = QTextFrameFormat::FontLetterSpacingType,
FontStretch = QTextFrameFormat::FontStretch,
FontPointSize = QTextFrameFormat::FontPointSize,
FontSizeAdjustment = QTextFrameFormat::FontSizeAdjustment,
FontSizeIncrement = QTextFrameFormat::FontSizeIncrement,
FontWeight = QTextFrameFormat::FontWeight,
FontItalic = QTextFrameFormat::FontItalic,
FontUnderline = QTextFrameFormat::FontUnderline,
FontOverline = QTextFrameFormat::FontOverline,
FontStrikeOut = QTextFrameFormat::FontStrikeOut,
FontFixedPitch = QTextFrameFormat::FontFixedPitch,
FontPixelSize = QTextFrameFormat::FontPixelSize,
LastFontProperty = QTextFrameFormat::LastFontProperty,
TextUnderlineColor = QTextFrameFormat::TextUnderlineColor,
TextVerticalAlignment = QTextFrameFormat::TextVerticalAlignment,
TextOutline = QTextFrameFormat::TextOutline,
TextUnderlineStyle = QTextFrameFormat::TextUnderlineStyle,
TextToolTip = QTextFrameFormat::TextToolTip,
TextSuperScriptBaseline = QTextFrameFormat::TextSuperScriptBaseline,
TextSubScriptBaseline = QTextFrameFormat::TextSubScriptBaseline,
TextBaselineOffset = QTextFrameFormat::TextBaselineOffset,
IsAnchor = QTextFrameFormat::IsAnchor,
AnchorHref = QTextFrameFormat::AnchorHref,
AnchorName = QTextFrameFormat::AnchorName,
OldFontLetterSpacingType = QTextFrameFormat::OldFontLetterSpacingType,
OldFontStretch = QTextFrameFormat::OldFontStretch,
OldTextUnderlineColor = QTextFrameFormat::OldTextUnderlineColor,
ObjectType = QTextFrameFormat::ObjectType,
ListStyle = QTextFrameFormat::ListStyle,
ListIndent = QTextFrameFormat::ListIndent,
ListNumberPrefix = QTextFrameFormat::ListNumberPrefix,
ListNumberSuffix = QTextFrameFormat::ListNumberSuffix,
FrameBorder = QTextFrameFormat::FrameBorder,
FrameMargin = QTextFrameFormat::FrameMargin,
FramePadding = QTextFrameFormat::FramePadding,
FrameWidth = QTextFrameFormat::FrameWidth,
FrameHeight = QTextFrameFormat::FrameHeight,
FrameTopMargin = QTextFrameFormat::FrameTopMargin,
FrameBottomMargin = QTextFrameFormat::FrameBottomMargin,
FrameLeftMargin = QTextFrameFormat::FrameLeftMargin,
FrameRightMargin = QTextFrameFormat::FrameRightMargin,
FrameBorderBrush = QTextFrameFormat::FrameBorderBrush,
FrameBorderStyle = QTextFrameFormat::FrameBorderStyle,
TableColumns = QTextFrameFormat::TableColumns,
TableColumnWidthConstraints = QTextFrameFormat::TableColumnWidthConstraints,
TableCellSpacing = QTextFrameFormat::TableCellSpacing,
TableCellPadding = QTextFrameFormat::TableCellPadding,
TableHeaderRowCount = QTextFrameFormat::TableHeaderRowCount,
TableBorderCollapse = QTextFrameFormat::TableBorderCollapse,
TableCellRowSpan = QTextFrameFormat::TableCellRowSpan,
TableCellColumnSpan = QTextFrameFormat::TableCellColumnSpan,
TableCellTopPadding = QTextFrameFormat::TableCellTopPadding,
TableCellBottomPadding = QTextFrameFormat::TableCellBottomPadding,
TableCellLeftPadding = QTextFrameFormat::TableCellLeftPadding,
TableCellRightPadding = QTextFrameFormat::TableCellRightPadding,
TableCellTopBorder = QTextFrameFormat::TableCellTopBorder,
TableCellBottomBorder = QTextFrameFormat::TableCellBottomBorder,
TableCellLeftBorder = QTextFrameFormat::TableCellLeftBorder,
TableCellRightBorder = QTextFrameFormat::TableCellRightBorder,
TableCellTopBorderStyle = QTextFrameFormat::TableCellTopBorderStyle,
TableCellBottomBorderStyle = QTextFrameFormat::TableCellBottomBorderStyle,
TableCellLeftBorderStyle = QTextFrameFormat::TableCellLeftBorderStyle,
TableCellRightBorderStyle = QTextFrameFormat::TableCellRightBorderStyle,
TableCellTopBorderBrush = QTextFrameFormat::TableCellTopBorderBrush,
TableCellBottomBorderBrush = QTextFrameFormat::TableCellBottomBorderBrush,
TableCellLeftBorderBrush = QTextFrameFormat::TableCellLeftBorderBrush,
TableCellRightBorderBrush = QTextFrameFormat::TableCellRightBorderBrush,
ImageName = QTextFrameFormat::ImageName,
ImageTitle = QTextFrameFormat::ImageTitle,
ImageAltText = QTextFrameFormat::ImageAltText,
ImageWidth = QTextFrameFormat::ImageWidth,
ImageHeight = QTextFrameFormat::ImageHeight,
ImageQuality = QTextFrameFormat::ImageQuality,
FullWidthSelection = QTextFrameFormat::FullWidthSelection,
PageBreakPolicy = QTextFrameFormat::PageBreakPolicy,
UserProperty = QTextFrameFormat::UserProperty,

  };
  Q_ENUM(Property)

  enum ObjectTypes {
    NoObject = QTextFrameFormat::NoObject,
ImageObject = QTextFrameFormat::ImageObject,
TableObject = QTextFrameFormat::TableObject,
TableCellObject = QTextFrameFormat::TableCellObject,
UserObject = QTextFrameFormat::UserObject,

  };
  Q_ENUM(ObjectTypes)

  enum PageBreakFlag {
    PageBreak_Auto = QTextFrameFormat::PageBreak_Auto,
PageBreak_AlwaysBefore = QTextFrameFormat::PageBreak_AlwaysBefore,
PageBreak_AlwaysAfter = QTextFrameFormat::PageBreak_AlwaysAfter,

  };
  Q_ENUM(PageBreakFlag)

  enum Position {
    InFlow = QTextFrameFormat::InFlow,
FloatLeft = QTextFrameFormat::FloatLeft,
FloatRight = QTextFrameFormat::FloatRight,

  };
  Q_ENUM(Position)

  enum BorderStyle {
    BorderStyle_None = QTextFrameFormat::BorderStyle_None,
BorderStyle_Dotted = QTextFrameFormat::BorderStyle_Dotted,
BorderStyle_Dashed = QTextFrameFormat::BorderStyle_Dashed,
BorderStyle_Solid = QTextFrameFormat::BorderStyle_Solid,
BorderStyle_Double = QTextFrameFormat::BorderStyle_Double,
BorderStyle_DotDash = QTextFrameFormat::BorderStyle_DotDash,
BorderStyle_DotDotDash = QTextFrameFormat::BorderStyle_DotDotDash,
BorderStyle_Groove = QTextFrameFormat::BorderStyle_Groove,
BorderStyle_Ridge = QTextFrameFormat::BorderStyle_Ridge,
BorderStyle_Inset = QTextFrameFormat::BorderStyle_Inset,
BorderStyle_Outset = QTextFrameFormat::BorderStyle_Outset,

  };
  Q_ENUM(BorderStyle)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QTextFrameFormat_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QTextFrameFormat_Wrapper(RJSApi& h, QTextFrameFormat* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QTextFrameFormat_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QTextFrameFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QTextFrameFormat_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: QTextFrameFormat
    // Function: swap
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  swap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: merge
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  merge
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: isEmpty
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEmpty
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: type
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: objectIndex
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectIndex
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setObjectIndex
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectIndex
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: property
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  property
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: clearProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: hasProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: boolProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boolProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: intProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  intProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: doubleProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  doubleProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: stringProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  stringProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: colorProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  colorProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: penProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  penProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: brushProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  brushProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: lengthProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lengthProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: lengthVectorProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lengthVectorProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: propertyCount
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  propertyCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setObjectType
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: objectType
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectType
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: isCharFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: isBlockFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBlockFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: isListFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isListFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: isFrameFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isFrameFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: isImageFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isImageFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: isTableFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTableFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: isTableCellFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTableCellFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: toBlockFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toBlockFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: toCharFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: toListFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toListFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: toTableFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toTableFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: toFrameFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toFrameFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: toImageFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toImageFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: toTableCellFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toTableCellFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setLayoutDirection
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLayoutDirection
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: layoutDirection
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  layoutDirection
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setBackground
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBackground
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: background
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  background
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: clearBackground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearBackground
              (

                
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setForeground
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setForeground
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: foreground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  foreground
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: clearForeground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearForeground
              (

                
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isValid
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setPosition
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: position
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  position
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setBorder
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBorder
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: border
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  border
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setBorderBrush
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBorderBrush
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: borderBrush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  borderBrush
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setBorderStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBorderStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: borderStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  borderStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: margin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  margin
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setTopMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTopMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: topMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  topMargin
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setBottomMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBottomMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: bottomMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bottomMargin
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setLeftMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLeftMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: leftMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  leftMargin
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setRightMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRightMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: rightMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rightMargin
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setPadding
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPadding
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: padding
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  padding
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: width
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  width
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: height
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  height
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextFrameFormat
    // Function: setPageBreakPolicy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPageBreakPolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextFrameFormat
    // Function: pageBreakPolicy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pageBreakPolicy
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QTextFrameFormat_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QTextFrameFormat* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QTextFrameFormat* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QTextFrameFormat* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QTextFrameFormat_Wrapper*)

    Q_DECLARE_INTERFACE(QTextFrameFormat_Wrapper, "org.qcad.QTextFrameFormat_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QTextTableFormat>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QTextTableFormat
    class QTextTableFormat_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QTextTableFormat_Wrapper(const QTextTableFormat_Wrapper&);

    public:
      // initialization of QTextTableFormat:
      static void init(RJSApi& handler);

      
        static QTextTableFormat* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              case RJSType::QTextTableFormat_Type:
                return (QTextTableFormat*)vp;
            

          default:
            return nullptr;
          }
        }

        static QTextTableFormat* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QTextTableFormat*: wrapper wraps NULL";
          }

          QTextTableFormat* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QTextTableFormat*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Position {
    InFlow = QTextTableFormat::InFlow,
FloatLeft = QTextTableFormat::FloatLeft,
FloatRight = QTextTableFormat::FloatRight,

  };
  Q_ENUM(Position)

  enum BorderStyle {
    BorderStyle_None = QTextTableFormat::BorderStyle_None,
BorderStyle_Dotted = QTextTableFormat::BorderStyle_Dotted,
BorderStyle_Dashed = QTextTableFormat::BorderStyle_Dashed,
BorderStyle_Solid = QTextTableFormat::BorderStyle_Solid,
BorderStyle_Double = QTextTableFormat::BorderStyle_Double,
BorderStyle_DotDash = QTextTableFormat::BorderStyle_DotDash,
BorderStyle_DotDotDash = QTextTableFormat::BorderStyle_DotDotDash,
BorderStyle_Groove = QTextTableFormat::BorderStyle_Groove,
BorderStyle_Ridge = QTextTableFormat::BorderStyle_Ridge,
BorderStyle_Inset = QTextTableFormat::BorderStyle_Inset,
BorderStyle_Outset = QTextTableFormat::BorderStyle_Outset,

  };
  Q_ENUM(BorderStyle)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QTextTableFormat_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QTextTableFormat_Wrapper(RJSApi& h, QTextTableFormat* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QTextTableFormat_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QTextTableFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QTextTableFormat_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: QTextTableFormat
    // Function: setPosition
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: position
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  position
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setBorder
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBorder
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: border
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  border
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setBorderBrush
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBorderBrush
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: borderBrush
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  borderBrush
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setBorderStyle
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBorderStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: borderStyle
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  borderStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: margin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  margin
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setTopMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTopMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: topMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  topMargin
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setBottomMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBottomMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: bottomMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bottomMargin
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setLeftMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLeftMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: leftMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  leftMargin
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setRightMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRightMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: rightMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rightMargin
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setPadding
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPadding
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: padding
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  padding
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setWidth
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: width
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  width
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setHeight
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: height
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  height
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setPageBreakPolicy
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPageBreakPolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: pageBreakPolicy
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pageBreakPolicy
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isValid
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: columns
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columns
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setColumns
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColumns
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: setColumnWidthConstraints
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColumnWidthConstraints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: columnWidthConstraints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnWidthConstraints
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: clearColumnWidthConstraints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearColumnWidthConstraints
              (

                
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: cellSpacing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cellSpacing
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setCellSpacing
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCellSpacing
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: cellPadding
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cellPadding
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setCellPadding
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCellPadding
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: setAlignment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAlignment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: alignment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  alignment
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setHeaderRowCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHeaderRowCount
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: headerRowCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  headerRowCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableFormat
    // Function: setBorderCollapse
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBorderCollapse
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableFormat
    // Function: borderCollapse
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  borderCollapse
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QTextTableFormat_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QTextTableFormat* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QTextTableFormat* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QTextTableFormat* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QTextTableFormat_Wrapper*)

    Q_DECLARE_INTERFACE(QTextTableFormat_Wrapper, "org.qcad.QTextTableFormat_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QTextTableCellFormat>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QTextTableCellFormat
    class QTextTableCellFormat_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QTextTableCellFormat_Wrapper(const QTextTableCellFormat_Wrapper&);

    public:
      // initialization of QTextTableCellFormat:
      static void init(RJSApi& handler);

      
        static QTextTableCellFormat* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              case RJSType::QTextTableCellFormat_Type:
                return (QTextTableCellFormat*)vp;
            

          default:
            return nullptr;
          }
        }

        static QTextTableCellFormat* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QTextTableCellFormat*: wrapper wraps NULL";
          }

          QTextTableCellFormat* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QTextTableCellFormat*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum VerticalAlignment {
    AlignNormal = QTextTableCellFormat::AlignNormal,
AlignSuperScript = QTextTableCellFormat::AlignSuperScript,
AlignSubScript = QTextTableCellFormat::AlignSubScript,
AlignMiddle = QTextTableCellFormat::AlignMiddle,
AlignTop = QTextTableCellFormat::AlignTop,
AlignBottom = QTextTableCellFormat::AlignBottom,
AlignBaseline = QTextTableCellFormat::AlignBaseline,

  };
  Q_ENUM(VerticalAlignment)

  enum UnderlineStyle {
    NoUnderline = QTextTableCellFormat::NoUnderline,
SingleUnderline = QTextTableCellFormat::SingleUnderline,
DashUnderline = QTextTableCellFormat::DashUnderline,
DotLine = QTextTableCellFormat::DotLine,
DashDotLine = QTextTableCellFormat::DashDotLine,
DashDotDotLine = QTextTableCellFormat::DashDotDotLine,
WaveUnderline = QTextTableCellFormat::WaveUnderline,
SpellCheckUnderline = QTextTableCellFormat::SpellCheckUnderline,

  };
  Q_ENUM(UnderlineStyle)

  enum FontPropertiesInheritanceBehavior {
    FontPropertiesSpecifiedOnly = QTextTableCellFormat::FontPropertiesSpecifiedOnly,
FontPropertiesAll = QTextTableCellFormat::FontPropertiesAll,

  };
  Q_ENUM(FontPropertiesInheritanceBehavior)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QTextTableCellFormat_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QTextTableCellFormat_Wrapper(RJSApi& h, QTextTableCellFormat* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QTextTableCellFormat_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QTextTableCellFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QTextTableCellFormat_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: QTextTableCellFormat
    // Function: setFont
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFont
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: font
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  font
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontFamilies
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontFamilies
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontFamilies
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontFamilies
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontStyleName
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontStyleName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontStyleName
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontStyleName
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontPointSize
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontPointSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontPointSize
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontPointSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontWeight
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontWeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontWeight
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontWeight
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontItalic
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontItalic
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontItalic
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontItalic
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontCapitalization
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontCapitalization
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontCapitalization
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontCapitalization
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontLetterSpacingType
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontLetterSpacingType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontLetterSpacingType
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontLetterSpacingType
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontLetterSpacing
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontLetterSpacing
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontLetterSpacing
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontLetterSpacing
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontWordSpacing
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontWordSpacing
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontWordSpacing
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontWordSpacing
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontUnderline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontUnderline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontUnderline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontUnderline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontOverline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontOverline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontOverline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontOverline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontStrikeOut
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontStrikeOut
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontStrikeOut
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontStrikeOut
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setUnderlineColor
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUnderlineColor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: underlineColor
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  underlineColor
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontFixedPitch
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontFixedPitch
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontFixedPitch
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontFixedPitch
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontStretch
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontStretch
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontStretch
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontStretch
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontStyleHint
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontStyleHint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontStyleStrategy
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontStyleStrategy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontStyleHint
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontStyleHint
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontStyleStrategy
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontStyleStrategy
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontHintingPreference
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontHintingPreference
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontHintingPreference
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontHintingPreference
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setFontKerning
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontKerning
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: fontKerning
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontKerning
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setUnderlineStyle
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUnderlineStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: underlineStyle
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  underlineStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setVerticalAlignment
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVerticalAlignment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: verticalAlignment
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  verticalAlignment
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setTextOutline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextOutline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: textOutline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  textOutline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setToolTip
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setToolTip
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: toolTip
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toolTip
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setSuperScriptBaseline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSuperScriptBaseline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: superScriptBaseline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  superScriptBaseline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setSubScriptBaseline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSubScriptBaseline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: subScriptBaseline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  subScriptBaseline
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setBaselineOffset
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBaselineOffset
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: baselineOffset
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  baselineOffset
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setAnchor
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAnchor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: isAnchor
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAnchor
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setAnchorHref
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAnchorHref
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: anchorHref
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  anchorHref
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setAnchorNames
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAnchorNames
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: anchorNames
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  anchorNames
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setTableCellRowSpan
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTableCellRowSpan
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: tableCellRowSpan
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tableCellRowSpan
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setTableCellColumnSpan
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTableCellColumnSpan
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: tableCellColumnSpan
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tableCellColumnSpan
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isValid
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setTopPadding
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTopPadding
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: topPadding
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  topPadding
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setBottomPadding
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBottomPadding
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: bottomPadding
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bottomPadding
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setLeftPadding
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLeftPadding
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: leftPadding
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  leftPadding
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setRightPadding
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRightPadding
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: rightPadding
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rightPadding
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setPadding
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPadding
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setTopBorder
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTopBorder
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: topBorder
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  topBorder
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setBottomBorder
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBottomBorder
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: bottomBorder
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bottomBorder
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setLeftBorder
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLeftBorder
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: leftBorder
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  leftBorder
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setRightBorder
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRightBorder
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: rightBorder
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rightBorder
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setBorder
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBorder
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setTopBorderStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTopBorderStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: topBorderStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  topBorderStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setBottomBorderStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBottomBorderStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: bottomBorderStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bottomBorderStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setLeftBorderStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLeftBorderStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: leftBorderStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  leftBorderStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setRightBorderStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRightBorderStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: rightBorderStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rightBorderStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setBorderStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBorderStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setTopBorderBrush
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTopBorderBrush
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: topBorderBrush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  topBorderBrush
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setBottomBorderBrush
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBottomBorderBrush
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: bottomBorderBrush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bottomBorderBrush
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setLeftBorderBrush
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLeftBorderBrush
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: leftBorderBrush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  leftBorderBrush
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setRightBorderBrush
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRightBorderBrush
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: rightBorderBrush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rightBorderBrush
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextTableCellFormat
    // Function: setBorderBrush
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBorderBrush
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QTextTableCellFormat_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QTextTableCellFormat* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QTextTableCellFormat* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QTextTableCellFormat* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QTextTableCellFormat_Wrapper*)

    Q_DECLARE_INTERFACE(QTextTableCellFormat_Wrapper, "org.qcad.QTextTableCellFormat_Wrapper")

  
  #endif
  