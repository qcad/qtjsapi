
  // Auto generated
  
    #ifndef QFONT_H_WRAPPER
    #define QFONT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QVariant>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QFont>
      
      // singleton class wrapper for static functions:
      class QTJSAPI_EXPORT QFont_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QFont_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QFont
    // Function: substitute
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  substitute
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: substitutes
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  substitutes
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: substitutions
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  substitutions
              (

                
              )
              
              ;
            
    // Class: QFont
    // Function: insertSubstitution
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertSubstitution
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
            
    // Class: QFont
    // Function: insertSubstitutions
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertSubstitutions
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
            
    // Class: QFont
    // Function: removeSubstitutions
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeSubstitutions
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: initialize
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initialize
              (

                
              )
              
              ;
            
    // Class: QFont
    // Function: cleanup
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cleanup
              (

                
              )
              
              ;
            
    // Class: QFont
    // Function: cacheStatistics
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cacheStatistics
              (

                
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QFont_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QFont
    class QTJSAPI_EXPORT QFont_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QFont_Wrapper(const QFont_Wrapper&);

    public:
      // initialization of QFont:
      static void init(RJSApi& handler);

      
        static QFont* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QFont:
          for (int i=0; i<basecasters_QFont.length(); i++) {
            RJSBasecaster_QFont* basecaster = basecasters_QFont[i];
            QFont* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QFont:
          if (t==RJSType_QFont::getIdStatic()) {
            return (QFont*)vp;
          }

          qWarning() << "QFont_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QFont* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QFont*: wrapper wraps NULL";
          }

          QFont* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QFont*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum StyleHint {
    Helvetica = QFont::Helvetica,
SansSerif = QFont::SansSerif,
Times = QFont::Times,
Serif = QFont::Serif,
Courier = QFont::Courier,
TypeWriter = QFont::TypeWriter,
OldEnglish = QFont::OldEnglish,
Decorative = QFont::Decorative,
System = QFont::System,
AnyStyle = QFont::AnyStyle,
Cursive = QFont::Cursive,
Monospace = QFont::Monospace,
Fantasy = QFont::Fantasy,

  };
  Q_ENUM(StyleHint)

  enum StyleStrategy {
    PreferDefault = QFont::PreferDefault,
PreferBitmap = QFont::PreferBitmap,
PreferDevice = QFont::PreferDevice,
PreferOutline = QFont::PreferOutline,
ForceOutline = QFont::ForceOutline,
PreferMatch = QFont::PreferMatch,
PreferQuality = QFont::PreferQuality,
PreferAntialias = QFont::PreferAntialias,
NoAntialias = QFont::NoAntialias,
NoSubpixelAntialias = QFont::NoSubpixelAntialias,
PreferNoShaping = QFont::PreferNoShaping,
NoFontMerging = QFont::NoFontMerging,

  };
  Q_ENUM(StyleStrategy)

  enum HintingPreference {
    PreferDefaultHinting = QFont::PreferDefaultHinting,
PreferNoHinting = QFont::PreferNoHinting,
PreferVerticalHinting = QFont::PreferVerticalHinting,
PreferFullHinting = QFont::PreferFullHinting,

  };
  Q_ENUM(HintingPreference)

  enum Weight {
    Thin = QFont::Thin,
ExtraLight = QFont::ExtraLight,
Light = QFont::Light,
Normal = QFont::Normal,
Medium = QFont::Medium,
DemiBold = QFont::DemiBold,
Bold = QFont::Bold,
ExtraBold = QFont::ExtraBold,
Black = QFont::Black,

  };
  Q_ENUM(Weight)

  enum Style {
    StyleNormal = QFont::StyleNormal,
StyleItalic = QFont::StyleItalic,
StyleOblique = QFont::StyleOblique,

  };
  Q_ENUM(Style)

  enum Stretch {
    AnyStretch = QFont::AnyStretch,
UltraCondensed = QFont::UltraCondensed,
ExtraCondensed = QFont::ExtraCondensed,
Condensed = QFont::Condensed,
SemiCondensed = QFont::SemiCondensed,
Unstretched = QFont::Unstretched,
SemiExpanded = QFont::SemiExpanded,
Expanded = QFont::Expanded,
ExtraExpanded = QFont::ExtraExpanded,
UltraExpanded = QFont::UltraExpanded,

  };
  Q_ENUM(Stretch)

  enum Capitalization {
    MixedCase = QFont::MixedCase,
AllUppercase = QFont::AllUppercase,
AllLowercase = QFont::AllLowercase,
SmallCaps = QFont::SmallCaps,
Capitalize = QFont::Capitalize,

  };
  Q_ENUM(Capitalization)

  enum SpacingType {
    PercentageSpacing = QFont::PercentageSpacing,
AbsoluteSpacing = QFont::AbsoluteSpacing,

  };
  Q_ENUM(SpacingType)

  enum ResolveProperties {
    NoPropertiesResolved = QFont::NoPropertiesResolved,
FamilyResolved = QFont::FamilyResolved,
SizeResolved = QFont::SizeResolved,
StyleHintResolved = QFont::StyleHintResolved,
StyleStrategyResolved = QFont::StyleStrategyResolved,
WeightResolved = QFont::WeightResolved,
StyleResolved = QFont::StyleResolved,
UnderlineResolved = QFont::UnderlineResolved,
OverlineResolved = QFont::OverlineResolved,
StrikeOutResolved = QFont::StrikeOutResolved,
FixedPitchResolved = QFont::FixedPitchResolved,
StretchResolved = QFont::StretchResolved,
KerningResolved = QFont::KerningResolved,
CapitalizationResolved = QFont::CapitalizationResolved,
LetterSpacingResolved = QFont::LetterSpacingResolved,
WordSpacingResolved = QFont::WordSpacingResolved,
HintingPreferenceResolved = QFont::HintingPreferenceResolved,
StyleNameResolved = QFont::StyleNameResolved,
FamiliesResolved = QFont::FamiliesResolved,
AllPropertiesResolved = QFont::AllPropertiesResolved,

  };
  Q_ENUM(ResolveProperties)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QFont_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QFont_Wrapper(RJSApi& h, QFont* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QFont_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QFont
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QFont_Wrapper
                
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
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QFont
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
            
    // Class: QFont
    // Function: family
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  family
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setFamily
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFamily
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: families
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  families
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setFamilies
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFamilies
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: styleName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  styleName
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setStyleName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStyleName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: pointSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pointSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setPointSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPointSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: pointSizeF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pointSizeF
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setPointSizeF
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPointSizeF
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: pixelSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pixelSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setPixelSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPixelSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: weight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  weight
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setWeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: bold
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bold
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setBold
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBold
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
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
            
    // Class: QFont
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
            
    // Class: QFont
    // Function: italic
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  italic
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setItalic
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setItalic
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: underline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  underline
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setUnderline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUnderline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: overline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  overline
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setOverline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOverline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: strikeOut
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  strikeOut
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setStrikeOut
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStrikeOut
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: fixedPitch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fixedPitch
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setFixedPitch
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFixedPitch
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: kerning
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  kerning
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setKerning
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setKerning
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: styleHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  styleHint
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: styleStrategy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  styleStrategy
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setStyleHint
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStyleHint
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
            
    // Class: QFont
    // Function: setStyleStrategy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStyleStrategy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: stretch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  stretch
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setStretch
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStretch
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: letterSpacing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  letterSpacing
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: letterSpacingType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  letterSpacingType
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setLetterSpacing
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLetterSpacing
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
            
    // Class: QFont
    // Function: wordSpacing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  wordSpacing
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setWordSpacing
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWordSpacing
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: setCapitalization
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCapitalization
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: capitalization
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  capitalization
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setHintingPreference
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHintingPreference
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: hintingPreference
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hintingPreference
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: exactMatch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exactMatch
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: isCopyOf
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCopyOf
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: key
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  key
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toString
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: fromString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fromString
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFont
    // Function: defaultFamily
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  defaultFamily
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: resolve
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resolve
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: resolveMask
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resolveMask
              (

                
              )
              
                const
              
              ;
            
    // Class: QFont
    // Function: setResolveMask
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setResolveMask
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

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
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QFont::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QFont* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QFont* getWrapped() const {
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
        QFont* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QFont*> basecasters_QFont;

      public:
        static void registerBasecaster_QFont(RJSBasecaster_QFont* bc) {
          basecasters_QFont.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QFont_Wrapper*)

    Q_DECLARE_INTERFACE(QFont_Wrapper, "org.qcad.QFont_Wrapper")

  
  #endif
  
