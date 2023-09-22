
  // Auto generated
  
  #ifndef QLOCALE_H_WRAPPER
  #define QLOCALE_H_WRAPPER

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    

  #include "RJSWrapperObj.h"
  
        #include <QCalendar>
      
        #include <QDate>
      
        #include <QDateTime>
      
        #include <QLocale>
      
        #include <QTime>
      
        #include <QVariant>
      
        #include <QTextStream>
      
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QLocale>
      
      // singleton class wrapper for static functions:
      class QLocale_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QLocale_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
#if QT_DEPRECATED_SINCE(6,6)

#endif

#if QT_DEPRECATED_SINCE(6,6)

#endif

#if QT_STRINGVIEW_LEVEL<2

#endif

#if QT_STRINGVIEW_LEVEL<2

#endif

#if QT_CONFIG(datestring)

#endif

    // Class: QLocale
    // Function: languageToCode
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  languageToCode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QLocale
    // Function: territoryToCode
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  territoryToCode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#if QT_DEPRECATED_SINCE(6,6)

    // Class: QLocale
    // Function: countryToCode
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  countryToCode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#endif

    // Class: QLocale
    // Function: scriptToCode
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scriptToCode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QLocale
    // Function: languageToString
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  languageToString
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QLocale
    // Function: territoryToString
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  territoryToString
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#if QT_DEPRECATED_SINCE(6,6)

    // Class: QLocale
    // Function: countryToString
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  countryToString
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#endif

    // Class: QLocale
    // Function: scriptToString
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scriptToString
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QLocale
    // Function: setDefault
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDefault
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QLocale
    // Function: c
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  c
              (

                
              )
              
              ;
            
    // Class: QLocale
    // Function: system
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  system
              (

                
              )
              
              ;
            
    // Class: QLocale
    // Function: matchingLocales
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  matchingLocales
              (

                
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
    
              )
              
              ;
            
#if QT_DEPRECATED_SINCE(6,6)

    // Class: QLocale
    // Function: countriesForLanguage
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  countriesForLanguage
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#endif


      private:
          RJSApi& handler;
          //static QLocale_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QLocale
    class QLocale_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QLocale_Wrapper(const QLocale_Wrapper&);

    public:
      // initialization of QLocale:
      static void init(RJSApi& handler);

      
        static QLocale* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              if (t==RJSType_QLocale::getIdStatic()) {
                return (QLocale*)vp;
              }
              

          return nullptr;
          
        }

        static QLocale* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QLocale*: wrapper wraps NULL";
          }

          QLocale* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QLocale*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Language {
    AnyLanguage = QLocale::AnyLanguage,
C = QLocale::C,
Abkhazian = QLocale::Abkhazian,
Afar = QLocale::Afar,
Afrikaans = QLocale::Afrikaans,
Aghem = QLocale::Aghem,
Akan = QLocale::Akan,
Akkadian = QLocale::Akkadian,
Akoose = QLocale::Akoose,
Albanian = QLocale::Albanian,
AmericanSignLanguage = QLocale::AmericanSignLanguage,
Amharic = QLocale::Amharic,
AncientEgyptian = QLocale::AncientEgyptian,
AncientGreek = QLocale::AncientGreek,
Arabic = QLocale::Arabic,
Aragonese = QLocale::Aragonese,
Aramaic = QLocale::Aramaic,
Armenian = QLocale::Armenian,
Assamese = QLocale::Assamese,
Asturian = QLocale::Asturian,
Asu = QLocale::Asu,
Atsam = QLocale::Atsam,
Avaric = QLocale::Avaric,
Avestan = QLocale::Avestan,
Aymara = QLocale::Aymara,
Azerbaijani = QLocale::Azerbaijani,
Bafia = QLocale::Bafia,
Balinese = QLocale::Balinese,
Bambara = QLocale::Bambara,
Bamun = QLocale::Bamun,
Bangla = QLocale::Bangla,
Basaa = QLocale::Basaa,
Bashkir = QLocale::Bashkir,
Basque = QLocale::Basque,
BatakToba = QLocale::BatakToba,
Belarusian = QLocale::Belarusian,
Bemba = QLocale::Bemba,
Bena = QLocale::Bena,
Bhojpuri = QLocale::Bhojpuri,
Bislama = QLocale::Bislama,
Blin = QLocale::Blin,
Bodo = QLocale::Bodo,
Bosnian = QLocale::Bosnian,
Breton = QLocale::Breton,
Buginese = QLocale::Buginese,
Bulgarian = QLocale::Bulgarian,
Burmese = QLocale::Burmese,
Cantonese = QLocale::Cantonese,
Catalan = QLocale::Catalan,
Cebuano = QLocale::Cebuano,
CentralAtlasTamazight = QLocale::CentralAtlasTamazight,
CentralKurdish = QLocale::CentralKurdish,
Chakma = QLocale::Chakma,
Chamorro = QLocale::Chamorro,
Chechen = QLocale::Chechen,
Cherokee = QLocale::Cherokee,
Chickasaw = QLocale::Chickasaw,
Chiga = QLocale::Chiga,
Chinese = QLocale::Chinese,
Church = QLocale::Church,
Chuvash = QLocale::Chuvash,
Colognian = QLocale::Colognian,
Coptic = QLocale::Coptic,
Cornish = QLocale::Cornish,
Corsican = QLocale::Corsican,
Cree = QLocale::Cree,
Croatian = QLocale::Croatian,
Czech = QLocale::Czech,
Danish = QLocale::Danish,
Divehi = QLocale::Divehi,
Dogri = QLocale::Dogri,
Duala = QLocale::Duala,
Dutch = QLocale::Dutch,
Dzongkha = QLocale::Dzongkha,
Embu = QLocale::Embu,
English = QLocale::English,
Erzya = QLocale::Erzya,
Esperanto = QLocale::Esperanto,
Estonian = QLocale::Estonian,
Ewe = QLocale::Ewe,
Ewondo = QLocale::Ewondo,
Faroese = QLocale::Faroese,
Fijian = QLocale::Fijian,
Filipino = QLocale::Filipino,
Finnish = QLocale::Finnish,
French = QLocale::French,
Friulian = QLocale::Friulian,
Fulah = QLocale::Fulah,
Gaelic = QLocale::Gaelic,
Ga = QLocale::Ga,
Galician = QLocale::Galician,
Ganda = QLocale::Ganda,
Geez = QLocale::Geez,
Georgian = QLocale::Georgian,
German = QLocale::German,
Gothic = QLocale::Gothic,
Greek = QLocale::Greek,
Guarani = QLocale::Guarani,
Gujarati = QLocale::Gujarati,
Gusii = QLocale::Gusii,
Haitian = QLocale::Haitian,
Hausa = QLocale::Hausa,
Hawaiian = QLocale::Hawaiian,
Hebrew = QLocale::Hebrew,
Herero = QLocale::Herero,
Hindi = QLocale::Hindi,
HiriMotu = QLocale::HiriMotu,
Hungarian = QLocale::Hungarian,
Icelandic = QLocale::Icelandic,
Ido = QLocale::Ido,
Igbo = QLocale::Igbo,
InariSami = QLocale::InariSami,
Indonesian = QLocale::Indonesian,
Ingush = QLocale::Ingush,
Interlingua = QLocale::Interlingua,
Interlingue = QLocale::Interlingue,
Inuktitut = QLocale::Inuktitut,
Inupiaq = QLocale::Inupiaq,
Irish = QLocale::Irish,
Italian = QLocale::Italian,
Japanese = QLocale::Japanese,
Javanese = QLocale::Javanese,
Jju = QLocale::Jju,
JolaFonyi = QLocale::JolaFonyi,
Kabuverdianu = QLocale::Kabuverdianu,
Kabyle = QLocale::Kabyle,
Kako = QLocale::Kako,
Kalaallisut = QLocale::Kalaallisut,
Kalenjin = QLocale::Kalenjin,
Kamba = QLocale::Kamba,
Kannada = QLocale::Kannada,
Kanuri = QLocale::Kanuri,
Kashmiri = QLocale::Kashmiri,
Kazakh = QLocale::Kazakh,
Kenyang = QLocale::Kenyang,
Khmer = QLocale::Khmer,
Kiche = QLocale::Kiche,
Kikuyu = QLocale::Kikuyu,
Kinyarwanda = QLocale::Kinyarwanda,
Komi = QLocale::Komi,
Kongo = QLocale::Kongo,
Konkani = QLocale::Konkani,
Korean = QLocale::Korean,
Koro = QLocale::Koro,
KoyraboroSenni = QLocale::KoyraboroSenni,
KoyraChiini = QLocale::KoyraChiini,
Kpelle = QLocale::Kpelle,
Kuanyama = QLocale::Kuanyama,
Kurdish = QLocale::Kurdish,
Kwasio = QLocale::Kwasio,
Kyrgyz = QLocale::Kyrgyz,
Lakota = QLocale::Lakota,
Langi = QLocale::Langi,
Lao = QLocale::Lao,
Latin = QLocale::Latin,
Latvian = QLocale::Latvian,
Lezghian = QLocale::Lezghian,
Limburgish = QLocale::Limburgish,
Lingala = QLocale::Lingala,
LiteraryChinese = QLocale::LiteraryChinese,
Lithuanian = QLocale::Lithuanian,
Lojban = QLocale::Lojban,
LowerSorbian = QLocale::LowerSorbian,
LowGerman = QLocale::LowGerman,
LubaKatanga = QLocale::LubaKatanga,
LuleSami = QLocale::LuleSami,
Luo = QLocale::Luo,
Luxembourgish = QLocale::Luxembourgish,
Luyia = QLocale::Luyia,
Macedonian = QLocale::Macedonian,
Machame = QLocale::Machame,
Maithili = QLocale::Maithili,
MakhuwaMeetto = QLocale::MakhuwaMeetto,
Makonde = QLocale::Makonde,
Malagasy = QLocale::Malagasy,
Malayalam = QLocale::Malayalam,
Malay = QLocale::Malay,
Maltese = QLocale::Maltese,
Mandingo = QLocale::Mandingo,
Manipuri = QLocale::Manipuri,
Manx = QLocale::Manx,
Maori = QLocale::Maori,
Mapuche = QLocale::Mapuche,
Marathi = QLocale::Marathi,
Marshallese = QLocale::Marshallese,
Masai = QLocale::Masai,
Mazanderani = QLocale::Mazanderani,
Mende = QLocale::Mende,
Meru = QLocale::Meru,
Meta = QLocale::Meta,
Mohawk = QLocale::Mohawk,
Mongolian = QLocale::Mongolian,
Morisyen = QLocale::Morisyen,
Mundang = QLocale::Mundang,
Muscogee = QLocale::Muscogee,
Nama = QLocale::Nama,
NauruLanguage = QLocale::NauruLanguage,
Navajo = QLocale::Navajo,
Ndonga = QLocale::Ndonga,
Nepali = QLocale::Nepali,
Newari = QLocale::Newari,
Ngiemboon = QLocale::Ngiemboon,
Ngomba = QLocale::Ngomba,
NigerianPidgin = QLocale::NigerianPidgin,
Nko = QLocale::Nko,
NorthernLuri = QLocale::NorthernLuri,
NorthernSami = QLocale::NorthernSami,
NorthernSotho = QLocale::NorthernSotho,
NorthNdebele = QLocale::NorthNdebele,
NorwegianBokmal = QLocale::NorwegianBokmal,
NorwegianNynorsk = QLocale::NorwegianNynorsk,
Nuer = QLocale::Nuer,
Nyanja = QLocale::Nyanja,
Nyankole = QLocale::Nyankole,
Occitan = QLocale::Occitan,
Odia = QLocale::Odia,
Ojibwa = QLocale::Ojibwa,
OldIrish = QLocale::OldIrish,
OldNorse = QLocale::OldNorse,
OldPersian = QLocale::OldPersian,
Oromo = QLocale::Oromo,
Osage = QLocale::Osage,
Ossetic = QLocale::Ossetic,
Pahlavi = QLocale::Pahlavi,
Palauan = QLocale::Palauan,
Pali = QLocale::Pali,
Papiamento = QLocale::Papiamento,
Pashto = QLocale::Pashto,
Persian = QLocale::Persian,
Phoenician = QLocale::Phoenician,
Polish = QLocale::Polish,
Portuguese = QLocale::Portuguese,
Prussian = QLocale::Prussian,
Punjabi = QLocale::Punjabi,
Quechua = QLocale::Quechua,
Romanian = QLocale::Romanian,
Romansh = QLocale::Romansh,
Rombo = QLocale::Rombo,
Rundi = QLocale::Rundi,
Russian = QLocale::Russian,
Rwa = QLocale::Rwa,
Saho = QLocale::Saho,
Sakha = QLocale::Sakha,
Samburu = QLocale::Samburu,
Samoan = QLocale::Samoan,
Sango = QLocale::Sango,
Sangu = QLocale::Sangu,
Sanskrit = QLocale::Sanskrit,
Santali = QLocale::Santali,
Sardinian = QLocale::Sardinian,
Saurashtra = QLocale::Saurashtra,
Sena = QLocale::Sena,
Serbian = QLocale::Serbian,
Shambala = QLocale::Shambala,
Shona = QLocale::Shona,
SichuanYi = QLocale::SichuanYi,
Sicilian = QLocale::Sicilian,
Sidamo = QLocale::Sidamo,
Silesian = QLocale::Silesian,
Sindhi = QLocale::Sindhi,
Sinhala = QLocale::Sinhala,
SkoltSami = QLocale::SkoltSami,
Slovak = QLocale::Slovak,
Slovenian = QLocale::Slovenian,
Soga = QLocale::Soga,
Somali = QLocale::Somali,
SouthernKurdish = QLocale::SouthernKurdish,
SouthernSami = QLocale::SouthernSami,
SouthernSotho = QLocale::SouthernSotho,
SouthNdebele = QLocale::SouthNdebele,
Spanish = QLocale::Spanish,
StandardMoroccanTamazight = QLocale::StandardMoroccanTamazight,
Sundanese = QLocale::Sundanese,
Swahili = QLocale::Swahili,
Swati = QLocale::Swati,
Swedish = QLocale::Swedish,
SwissGerman = QLocale::SwissGerman,
Syriac = QLocale::Syriac,
Tachelhit = QLocale::Tachelhit,
Tahitian = QLocale::Tahitian,
TaiDam = QLocale::TaiDam,
Taita = QLocale::Taita,
Tajik = QLocale::Tajik,
Tamil = QLocale::Tamil,
Taroko = QLocale::Taroko,
Tasawaq = QLocale::Tasawaq,
Tatar = QLocale::Tatar,
Telugu = QLocale::Telugu,
Teso = QLocale::Teso,
Thai = QLocale::Thai,
Tibetan = QLocale::Tibetan,
Tigre = QLocale::Tigre,
Tigrinya = QLocale::Tigrinya,
TokelauLanguage = QLocale::TokelauLanguage,
TokPisin = QLocale::TokPisin,
Tongan = QLocale::Tongan,
Tsonga = QLocale::Tsonga,
Tswana = QLocale::Tswana,
Turkish = QLocale::Turkish,
Turkmen = QLocale::Turkmen,
TuvaluLanguage = QLocale::TuvaluLanguage,
Tyap = QLocale::Tyap,
Ugaritic = QLocale::Ugaritic,
Ukrainian = QLocale::Ukrainian,
UpperSorbian = QLocale::UpperSorbian,
Urdu = QLocale::Urdu,
Uyghur = QLocale::Uyghur,
Uzbek = QLocale::Uzbek,
Vai = QLocale::Vai,
Venda = QLocale::Venda,
Vietnamese = QLocale::Vietnamese,
Volapuk = QLocale::Volapuk,
Vunjo = QLocale::Vunjo,
Walloon = QLocale::Walloon,
Walser = QLocale::Walser,
Warlpiri = QLocale::Warlpiri,
Welsh = QLocale::Welsh,
WesternBalochi = QLocale::WesternBalochi,
WesternFrisian = QLocale::WesternFrisian,
Wolaytta = QLocale::Wolaytta,
Wolof = QLocale::Wolof,
Xhosa = QLocale::Xhosa,
Yangben = QLocale::Yangben,
Yiddish = QLocale::Yiddish,
Yoruba = QLocale::Yoruba,
Zarma = QLocale::Zarma,
Zhuang = QLocale::Zhuang,
Zulu = QLocale::Zulu,
Afan = QLocale::Afan,
Bengali = QLocale::Bengali,
Bhutani = QLocale::Bhutani,
Byelorussian = QLocale::Byelorussian,
Cambodian = QLocale::Cambodian,
CentralMoroccoTamazight = QLocale::CentralMoroccoTamazight,
Chewa = QLocale::Chewa,
Frisian = QLocale::Frisian,
Greenlandic = QLocale::Greenlandic,
Inupiak = QLocale::Inupiak,
Kirghiz = QLocale::Kirghiz,
Kurundi = QLocale::Kurundi,
Kwanyama = QLocale::Kwanyama,
Navaho = QLocale::Navaho,
Oriya = QLocale::Oriya,
RhaetoRomance = QLocale::RhaetoRomance,
Uighur = QLocale::Uighur,
Uigur = QLocale::Uigur,
Walamo = QLocale::Walamo,
LastLanguage = QLocale::LastLanguage,

  };
  Q_ENUM(Language)

  enum Script {
    AnyScript = QLocale::AnyScript,
AdlamScript = QLocale::AdlamScript,
AhomScript = QLocale::AhomScript,
AnatolianHieroglyphsScript = QLocale::AnatolianHieroglyphsScript,
ArabicScript = QLocale::ArabicScript,
ArmenianScript = QLocale::ArmenianScript,
AvestanScript = QLocale::AvestanScript,
BalineseScript = QLocale::BalineseScript,
BamumScript = QLocale::BamumScript,
BanglaScript = QLocale::BanglaScript,
BassaVahScript = QLocale::BassaVahScript,
BatakScript = QLocale::BatakScript,
BhaiksukiScript = QLocale::BhaiksukiScript,
BopomofoScript = QLocale::BopomofoScript,
BrahmiScript = QLocale::BrahmiScript,
BrailleScript = QLocale::BrailleScript,
BugineseScript = QLocale::BugineseScript,
BuhidScript = QLocale::BuhidScript,
CanadianAboriginalScript = QLocale::CanadianAboriginalScript,
CarianScript = QLocale::CarianScript,
CaucasianAlbanianScript = QLocale::CaucasianAlbanianScript,
ChakmaScript = QLocale::ChakmaScript,
ChamScript = QLocale::ChamScript,
CherokeeScript = QLocale::CherokeeScript,
CopticScript = QLocale::CopticScript,
CuneiformScript = QLocale::CuneiformScript,
CypriotScript = QLocale::CypriotScript,
CyrillicScript = QLocale::CyrillicScript,
DeseretScript = QLocale::DeseretScript,
DevanagariScript = QLocale::DevanagariScript,
DuployanScript = QLocale::DuployanScript,
EgyptianHieroglyphsScript = QLocale::EgyptianHieroglyphsScript,
ElbasanScript = QLocale::ElbasanScript,
EthiopicScript = QLocale::EthiopicScript,
FraserScript = QLocale::FraserScript,
GeorgianScript = QLocale::GeorgianScript,
GlagoliticScript = QLocale::GlagoliticScript,
GothicScript = QLocale::GothicScript,
GranthaScript = QLocale::GranthaScript,
GreekScript = QLocale::GreekScript,
GujaratiScript = QLocale::GujaratiScript,
GurmukhiScript = QLocale::GurmukhiScript,
HangulScript = QLocale::HangulScript,
HanScript = QLocale::HanScript,
HanunooScript = QLocale::HanunooScript,
HanWithBopomofoScript = QLocale::HanWithBopomofoScript,
HatranScript = QLocale::HatranScript,
HebrewScript = QLocale::HebrewScript,
HiraganaScript = QLocale::HiraganaScript,
ImperialAramaicScript = QLocale::ImperialAramaicScript,
InscriptionalPahlaviScript = QLocale::InscriptionalPahlaviScript,
InscriptionalParthianScript = QLocale::InscriptionalParthianScript,
JamoScript = QLocale::JamoScript,
JapaneseScript = QLocale::JapaneseScript,
JavaneseScript = QLocale::JavaneseScript,
KaithiScript = QLocale::KaithiScript,
KannadaScript = QLocale::KannadaScript,
KatakanaScript = QLocale::KatakanaScript,
KayahLiScript = QLocale::KayahLiScript,
KharoshthiScript = QLocale::KharoshthiScript,
KhmerScript = QLocale::KhmerScript,
KhojkiScript = QLocale::KhojkiScript,
KhudawadiScript = QLocale::KhudawadiScript,
KoreanScript = QLocale::KoreanScript,
LannaScript = QLocale::LannaScript,
LaoScript = QLocale::LaoScript,
LatinScript = QLocale::LatinScript,
LepchaScript = QLocale::LepchaScript,
LimbuScript = QLocale::LimbuScript,
LinearAScript = QLocale::LinearAScript,
LinearBScript = QLocale::LinearBScript,
LycianScript = QLocale::LycianScript,
LydianScript = QLocale::LydianScript,
MahajaniScript = QLocale::MahajaniScript,
MalayalamScript = QLocale::MalayalamScript,
MandaeanScript = QLocale::MandaeanScript,
ManichaeanScript = QLocale::ManichaeanScript,
MarchenScript = QLocale::MarchenScript,
MeiteiMayekScript = QLocale::MeiteiMayekScript,
MendeScript = QLocale::MendeScript,
MeroiticCursiveScript = QLocale::MeroiticCursiveScript,
MeroiticScript = QLocale::MeroiticScript,
ModiScript = QLocale::ModiScript,
MongolianScript = QLocale::MongolianScript,
MroScript = QLocale::MroScript,
MultaniScript = QLocale::MultaniScript,
MyanmarScript = QLocale::MyanmarScript,
NabataeanScript = QLocale::NabataeanScript,
NewaScript = QLocale::NewaScript,
NewTaiLueScript = QLocale::NewTaiLueScript,
NkoScript = QLocale::NkoScript,
OdiaScript = QLocale::OdiaScript,
OghamScript = QLocale::OghamScript,
OlChikiScript = QLocale::OlChikiScript,
OldHungarianScript = QLocale::OldHungarianScript,
OldItalicScript = QLocale::OldItalicScript,
OldNorthArabianScript = QLocale::OldNorthArabianScript,
OldPermicScript = QLocale::OldPermicScript,
OldPersianScript = QLocale::OldPersianScript,
OldSouthArabianScript = QLocale::OldSouthArabianScript,
OrkhonScript = QLocale::OrkhonScript,
OsageScript = QLocale::OsageScript,
OsmanyaScript = QLocale::OsmanyaScript,
PahawhHmongScript = QLocale::PahawhHmongScript,
PalmyreneScript = QLocale::PalmyreneScript,
PauCinHauScript = QLocale::PauCinHauScript,
PhagsPaScript = QLocale::PhagsPaScript,
PhoenicianScript = QLocale::PhoenicianScript,
PollardPhoneticScript = QLocale::PollardPhoneticScript,
PsalterPahlaviScript = QLocale::PsalterPahlaviScript,
RejangScript = QLocale::RejangScript,
RunicScript = QLocale::RunicScript,
SamaritanScript = QLocale::SamaritanScript,
SaurashtraScript = QLocale::SaurashtraScript,
SharadaScript = QLocale::SharadaScript,
ShavianScript = QLocale::ShavianScript,
SiddhamScript = QLocale::SiddhamScript,
SignWritingScript = QLocale::SignWritingScript,
SimplifiedHanScript = QLocale::SimplifiedHanScript,
SinhalaScript = QLocale::SinhalaScript,
SoraSompengScript = QLocale::SoraSompengScript,
SundaneseScript = QLocale::SundaneseScript,
SylotiNagriScript = QLocale::SylotiNagriScript,
SyriacScript = QLocale::SyriacScript,
TagalogScript = QLocale::TagalogScript,
TagbanwaScript = QLocale::TagbanwaScript,
TaiLeScript = QLocale::TaiLeScript,
TaiVietScript = QLocale::TaiVietScript,
TakriScript = QLocale::TakriScript,
TamilScript = QLocale::TamilScript,
TangutScript = QLocale::TangutScript,
TeluguScript = QLocale::TeluguScript,
ThaanaScript = QLocale::ThaanaScript,
ThaiScript = QLocale::ThaiScript,
TibetanScript = QLocale::TibetanScript,
TifinaghScript = QLocale::TifinaghScript,
TirhutaScript = QLocale::TirhutaScript,
TraditionalHanScript = QLocale::TraditionalHanScript,
UgariticScript = QLocale::UgariticScript,
VaiScript = QLocale::VaiScript,
VarangKshitiScript = QLocale::VarangKshitiScript,
YiScript = QLocale::YiScript,
BengaliScript = QLocale::BengaliScript,
MendeKikakuiScript = QLocale::MendeKikakuiScript,
OriyaScript = QLocale::OriyaScript,
SimplifiedChineseScript = QLocale::SimplifiedChineseScript,
TraditionalChineseScript = QLocale::TraditionalChineseScript,
LastScript = QLocale::LastScript,

  };
  Q_ENUM(Script)

  enum Country {
    AnyTerritory = QLocale::AnyTerritory,
Afghanistan = QLocale::Afghanistan,
AlandIslands = QLocale::AlandIslands,
Albania = QLocale::Albania,
Algeria = QLocale::Algeria,
AmericanSamoa = QLocale::AmericanSamoa,
Andorra = QLocale::Andorra,
Angola = QLocale::Angola,
Anguilla = QLocale::Anguilla,
Antarctica = QLocale::Antarctica,
AntiguaAndBarbuda = QLocale::AntiguaAndBarbuda,
Argentina = QLocale::Argentina,
Armenia = QLocale::Armenia,
Aruba = QLocale::Aruba,
AscensionIsland = QLocale::AscensionIsland,
Australia = QLocale::Australia,
Austria = QLocale::Austria,
Azerbaijan = QLocale::Azerbaijan,
Bahamas = QLocale::Bahamas,
Bahrain = QLocale::Bahrain,
Bangladesh = QLocale::Bangladesh,
Barbados = QLocale::Barbados,
Belarus = QLocale::Belarus,
Belgium = QLocale::Belgium,
Belize = QLocale::Belize,
Benin = QLocale::Benin,
Bermuda = QLocale::Bermuda,
Bhutan = QLocale::Bhutan,
Bolivia = QLocale::Bolivia,
BosniaAndHerzegovina = QLocale::BosniaAndHerzegovina,
Botswana = QLocale::Botswana,
BouvetIsland = QLocale::BouvetIsland,
Brazil = QLocale::Brazil,
BritishIndianOceanTerritory = QLocale::BritishIndianOceanTerritory,
BritishVirginIslands = QLocale::BritishVirginIslands,
Brunei = QLocale::Brunei,
Bulgaria = QLocale::Bulgaria,
BurkinaFaso = QLocale::BurkinaFaso,
Burundi = QLocale::Burundi,
Cambodia = QLocale::Cambodia,
Cameroon = QLocale::Cameroon,
Canada = QLocale::Canada,
CanaryIslands = QLocale::CanaryIslands,
CapeVerde = QLocale::CapeVerde,
CaribbeanNetherlands = QLocale::CaribbeanNetherlands,
CaymanIslands = QLocale::CaymanIslands,
CentralAfricanRepublic = QLocale::CentralAfricanRepublic,
CeutaAndMelilla = QLocale::CeutaAndMelilla,
Chad = QLocale::Chad,
Chile = QLocale::Chile,
China = QLocale::China,
ChristmasIsland = QLocale::ChristmasIsland,
ClippertonIsland = QLocale::ClippertonIsland,
CocosIslands = QLocale::CocosIslands,
Colombia = QLocale::Colombia,
Comoros = QLocale::Comoros,
CongoBrazzaville = QLocale::CongoBrazzaville,
CongoKinshasa = QLocale::CongoKinshasa,
CookIslands = QLocale::CookIslands,
CostaRica = QLocale::CostaRica,
Croatia = QLocale::Croatia,
Cuba = QLocale::Cuba,
Curacao = QLocale::Curacao,
Cyprus = QLocale::Cyprus,
Czechia = QLocale::Czechia,
Denmark = QLocale::Denmark,
DiegoGarcia = QLocale::DiegoGarcia,
Djibouti = QLocale::Djibouti,
Dominica = QLocale::Dominica,
DominicanRepublic = QLocale::DominicanRepublic,
Ecuador = QLocale::Ecuador,
Egypt = QLocale::Egypt,
ElSalvador = QLocale::ElSalvador,
EquatorialGuinea = QLocale::EquatorialGuinea,
Eritrea = QLocale::Eritrea,
Estonia = QLocale::Estonia,
Eswatini = QLocale::Eswatini,
Ethiopia = QLocale::Ethiopia,
Europe = QLocale::Europe,
EuropeanUnion = QLocale::EuropeanUnion,
FalklandIslands = QLocale::FalklandIslands,
FaroeIslands = QLocale::FaroeIslands,
Fiji = QLocale::Fiji,
Finland = QLocale::Finland,
France = QLocale::France,
FrenchGuiana = QLocale::FrenchGuiana,
FrenchPolynesia = QLocale::FrenchPolynesia,
FrenchSouthernTerritories = QLocale::FrenchSouthernTerritories,
Gabon = QLocale::Gabon,
Gambia = QLocale::Gambia,
Georgia = QLocale::Georgia,
Germany = QLocale::Germany,
Ghana = QLocale::Ghana,
Gibraltar = QLocale::Gibraltar,
Greece = QLocale::Greece,
Greenland = QLocale::Greenland,
Grenada = QLocale::Grenada,
Guadeloupe = QLocale::Guadeloupe,
Guam = QLocale::Guam,
Guatemala = QLocale::Guatemala,
Guernsey = QLocale::Guernsey,
GuineaBissau = QLocale::GuineaBissau,
Guinea = QLocale::Guinea,
Guyana = QLocale::Guyana,
Haiti = QLocale::Haiti,
HeardAndMcDonaldIslands = QLocale::HeardAndMcDonaldIslands,
Honduras = QLocale::Honduras,
HongKong = QLocale::HongKong,
Hungary = QLocale::Hungary,
Iceland = QLocale::Iceland,
India = QLocale::India,
Indonesia = QLocale::Indonesia,
Iran = QLocale::Iran,
Iraq = QLocale::Iraq,
Ireland = QLocale::Ireland,
IsleOfMan = QLocale::IsleOfMan,
Israel = QLocale::Israel,
Italy = QLocale::Italy,
IvoryCoast = QLocale::IvoryCoast,
Jamaica = QLocale::Jamaica,
Japan = QLocale::Japan,
Jersey = QLocale::Jersey,
Jordan = QLocale::Jordan,
Kazakhstan = QLocale::Kazakhstan,
Kenya = QLocale::Kenya,
Kiribati = QLocale::Kiribati,
Kosovo = QLocale::Kosovo,
Kuwait = QLocale::Kuwait,
Kyrgyzstan = QLocale::Kyrgyzstan,
Laos = QLocale::Laos,
LatinAmerica = QLocale::LatinAmerica,
Latvia = QLocale::Latvia,
Lebanon = QLocale::Lebanon,
Lesotho = QLocale::Lesotho,
Liberia = QLocale::Liberia,
Libya = QLocale::Libya,
Liechtenstein = QLocale::Liechtenstein,
Lithuania = QLocale::Lithuania,
Luxembourg = QLocale::Luxembourg,
Macao = QLocale::Macao,
Macedonia = QLocale::Macedonia,
Madagascar = QLocale::Madagascar,
Malawi = QLocale::Malawi,
Malaysia = QLocale::Malaysia,
Maldives = QLocale::Maldives,
Mali = QLocale::Mali,
Malta = QLocale::Malta,
MarshallIslands = QLocale::MarshallIslands,
Martinique = QLocale::Martinique,
Mauritania = QLocale::Mauritania,
Mauritius = QLocale::Mauritius,
Mayotte = QLocale::Mayotte,
Mexico = QLocale::Mexico,
Micronesia = QLocale::Micronesia,
Moldova = QLocale::Moldova,
Monaco = QLocale::Monaco,
Mongolia = QLocale::Mongolia,
Montenegro = QLocale::Montenegro,
Montserrat = QLocale::Montserrat,
Morocco = QLocale::Morocco,
Mozambique = QLocale::Mozambique,
Myanmar = QLocale::Myanmar,
Namibia = QLocale::Namibia,
NauruTerritory = QLocale::NauruTerritory,
Nepal = QLocale::Nepal,
Netherlands = QLocale::Netherlands,
NewCaledonia = QLocale::NewCaledonia,
NewZealand = QLocale::NewZealand,
Nicaragua = QLocale::Nicaragua,
Nigeria = QLocale::Nigeria,
Niger = QLocale::Niger,
Niue = QLocale::Niue,
NorfolkIsland = QLocale::NorfolkIsland,
NorthernMarianaIslands = QLocale::NorthernMarianaIslands,
NorthKorea = QLocale::NorthKorea,
Norway = QLocale::Norway,
Oman = QLocale::Oman,
OutlyingOceania = QLocale::OutlyingOceania,
Pakistan = QLocale::Pakistan,
Palau = QLocale::Palau,
PalestinianTerritories = QLocale::PalestinianTerritories,
Panama = QLocale::Panama,
PapuaNewGuinea = QLocale::PapuaNewGuinea,
Paraguay = QLocale::Paraguay,
Peru = QLocale::Peru,
Philippines = QLocale::Philippines,
Pitcairn = QLocale::Pitcairn,
Poland = QLocale::Poland,
Portugal = QLocale::Portugal,
PuertoRico = QLocale::PuertoRico,
Qatar = QLocale::Qatar,
Reunion = QLocale::Reunion,
Romania = QLocale::Romania,
Russia = QLocale::Russia,
Rwanda = QLocale::Rwanda,
SaintBarthelemy = QLocale::SaintBarthelemy,
SaintHelena = QLocale::SaintHelena,
SaintKittsAndNevis = QLocale::SaintKittsAndNevis,
SaintLucia = QLocale::SaintLucia,
SaintMartin = QLocale::SaintMartin,
SaintPierreAndMiquelon = QLocale::SaintPierreAndMiquelon,
SaintVincentAndGrenadines = QLocale::SaintVincentAndGrenadines,
Samoa = QLocale::Samoa,
SanMarino = QLocale::SanMarino,
SaoTomeAndPrincipe = QLocale::SaoTomeAndPrincipe,
SaudiArabia = QLocale::SaudiArabia,
Senegal = QLocale::Senegal,
Serbia = QLocale::Serbia,
Seychelles = QLocale::Seychelles,
SierraLeone = QLocale::SierraLeone,
Singapore = QLocale::Singapore,
SintMaarten = QLocale::SintMaarten,
Slovakia = QLocale::Slovakia,
Slovenia = QLocale::Slovenia,
SolomonIslands = QLocale::SolomonIslands,
Somalia = QLocale::Somalia,
SouthAfrica = QLocale::SouthAfrica,
SouthGeorgiaAndSouthSandwichIslands = QLocale::SouthGeorgiaAndSouthSandwichIslands,
SouthKorea = QLocale::SouthKorea,
SouthSudan = QLocale::SouthSudan,
Spain = QLocale::Spain,
SriLanka = QLocale::SriLanka,
Sudan = QLocale::Sudan,
Suriname = QLocale::Suriname,
SvalbardAndJanMayen = QLocale::SvalbardAndJanMayen,
Sweden = QLocale::Sweden,
Switzerland = QLocale::Switzerland,
Syria = QLocale::Syria,
Taiwan = QLocale::Taiwan,
Tajikistan = QLocale::Tajikistan,
Tanzania = QLocale::Tanzania,
Thailand = QLocale::Thailand,
TimorLeste = QLocale::TimorLeste,
Togo = QLocale::Togo,
TokelauTerritory = QLocale::TokelauTerritory,
Tonga = QLocale::Tonga,
TrinidadAndTobago = QLocale::TrinidadAndTobago,
TristanDaCunha = QLocale::TristanDaCunha,
Tunisia = QLocale::Tunisia,
Turkey = QLocale::Turkey,
Turkmenistan = QLocale::Turkmenistan,
TurksAndCaicosIslands = QLocale::TurksAndCaicosIslands,
TuvaluTerritory = QLocale::TuvaluTerritory,
Uganda = QLocale::Uganda,
Ukraine = QLocale::Ukraine,
UnitedArabEmirates = QLocale::UnitedArabEmirates,
UnitedKingdom = QLocale::UnitedKingdom,
UnitedStatesOutlyingIslands = QLocale::UnitedStatesOutlyingIslands,
UnitedStates = QLocale::UnitedStates,
UnitedStatesVirginIslands = QLocale::UnitedStatesVirginIslands,
Uruguay = QLocale::Uruguay,
Uzbekistan = QLocale::Uzbekistan,
Vanuatu = QLocale::Vanuatu,
VaticanCity = QLocale::VaticanCity,
Venezuela = QLocale::Venezuela,
Vietnam = QLocale::Vietnam,
WallisAndFutuna = QLocale::WallisAndFutuna,
WesternSahara = QLocale::WesternSahara,
World = QLocale::World,
Yemen = QLocale::Yemen,
Zambia = QLocale::Zambia,
Zimbabwe = QLocale::Zimbabwe,
AnyCountry = QLocale::AnyCountry,
Bonaire = QLocale::Bonaire,
BosniaAndHerzegowina = QLocale::BosniaAndHerzegowina,
CuraSao = QLocale::CuraSao,
CzechRepublic = QLocale::CzechRepublic,
DemocraticRepublicOfCongo = QLocale::DemocraticRepublicOfCongo,
DemocraticRepublicOfKorea = QLocale::DemocraticRepublicOfKorea,
EastTimor = QLocale::EastTimor,
LatinAmericaAndTheCaribbean = QLocale::LatinAmericaAndTheCaribbean,
Macau = QLocale::Macau,
NauruCountry = QLocale::NauruCountry,
PeoplesRepublicOfCongo = QLocale::PeoplesRepublicOfCongo,
RepublicOfKorea = QLocale::RepublicOfKorea,
RussianFederation = QLocale::RussianFederation,
SaintVincentAndTheGrenadines = QLocale::SaintVincentAndTheGrenadines,
SouthGeorgiaAndTheSouthSandwichIslands = QLocale::SouthGeorgiaAndTheSouthSandwichIslands,
SvalbardAndJanMayenIslands = QLocale::SvalbardAndJanMayenIslands,
Swaziland = QLocale::Swaziland,
SyrianArabRepublic = QLocale::SyrianArabRepublic,
TokelauCountry = QLocale::TokelauCountry,
TuvaluCountry = QLocale::TuvaluCountry,
UnitedStatesMinorOutlyingIslands = QLocale::UnitedStatesMinorOutlyingIslands,
VaticanCityState = QLocale::VaticanCityState,
WallisAndFutunaIslands = QLocale::WallisAndFutunaIslands,
LastTerritory = QLocale::LastTerritory,
LastCountry = QLocale::LastCountry,

  };
  Q_ENUM(Country)

  enum MeasurementSystem {
    MetricSystem = QLocale::MetricSystem,
ImperialUSSystem = QLocale::ImperialUSSystem,
ImperialUKSystem = QLocale::ImperialUKSystem,
ImperialSystem = QLocale::ImperialSystem,

  };
  Q_ENUM(MeasurementSystem)

  enum FormatType {
    LongFormat = QLocale::LongFormat,
ShortFormat = QLocale::ShortFormat,
NarrowFormat = QLocale::NarrowFormat,

  };
  Q_ENUM(FormatType)

  enum NumberOption {
    DefaultNumberOptions = QLocale::DefaultNumberOptions,
OmitGroupSeparator = QLocale::OmitGroupSeparator,
RejectGroupSeparator = QLocale::RejectGroupSeparator,
OmitLeadingZeroInExponent = QLocale::OmitLeadingZeroInExponent,
RejectLeadingZeroInExponent = QLocale::RejectLeadingZeroInExponent,
IncludeTrailingZeroesAfterDot = QLocale::IncludeTrailingZeroesAfterDot,
RejectTrailingZeroesAfterDot = QLocale::RejectTrailingZeroesAfterDot,

  };
  Q_ENUM(NumberOption)

  enum FloatingPointPrecisionOption {
    FloatingPointShortest = QLocale::FloatingPointShortest,

  };
  Q_ENUM(FloatingPointPrecisionOption)

  enum CurrencySymbolFormat {
    CurrencyIsoCode = QLocale::CurrencyIsoCode,
CurrencySymbol = QLocale::CurrencySymbol,
CurrencyDisplayName = QLocale::CurrencyDisplayName,

  };
  Q_ENUM(CurrencySymbolFormat)

  enum DataSizeFormat {
    DataSizeBase1000 = QLocale::DataSizeBase1000,
DataSizeSIQuantifiers = QLocale::DataSizeSIQuantifiers,
DataSizeIecFormat = QLocale::DataSizeIecFormat,
DataSizeTraditionalFormat = QLocale::DataSizeTraditionalFormat,
DataSizeSIFormat = QLocale::DataSizeSIFormat,

  };
  Q_ENUM(DataSizeFormat)

  enum QuotationStyle {
    StandardQuotation = QLocale::StandardQuotation,
AlternateQuotation = QLocale::AlternateQuotation,

  };
  Q_ENUM(QuotationStyle)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QLocale_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QLocale_Wrapper(RJSApi& h, QLocale* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QLocale_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QLocale
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QLocale_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#if QT_DEPRECATED_SINCE(6,6)

#endif

#if QT_DEPRECATED_SINCE(6,6)

#endif

#if QT_STRINGVIEW_LEVEL<2

#endif

#if QT_STRINGVIEW_LEVEL<2

#endif

#if QT_CONFIG(datestring)

#endif

#if QT_DEPRECATED_SINCE(6,6)

#endif

#if QT_DEPRECATED_SINCE(6,6)

#endif

#if QT_DEPRECATED_SINCE(6,6)

#endif


    // non-static functions:
    
    // Class: QLocale
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
            
    // Class: QLocale
    // Function: language
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  language
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: script
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  script
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: territory
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  territory
              (

                
              )
              
                const
              
              ;
            
#if QT_DEPRECATED_SINCE(6,6)

    // Class: QLocale
    // Function: country
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  country
              (

                
              )
              
                const
              
              ;
            
#endif

    // Class: QLocale
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
            
    // Class: QLocale
    // Function: bcp47Name
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bcp47Name
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: nativeLanguageName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nativeLanguageName
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: nativeTerritoryName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nativeTerritoryName
              (

                
              )
              
                const
              
              ;
            
#if QT_DEPRECATED_SINCE(6,6)

    // Class: QLocale
    // Function: nativeCountryName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nativeCountryName
              (

                
              )
              
                const
              
              ;
            
#endif

#if QT_STRINGVIEW_LEVEL<2

    // Class: QLocale
    // Function: toShort
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toShort
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: toUShort
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toUShort
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: toInt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toInt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: toUInt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toUInt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: toLong
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toLong
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: toULong
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toULong
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: toLongLong
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toLongLong
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: toULongLong
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toULongLong
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: toFloat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toFloat
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: toDouble
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDouble
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
#endif

    // Class: QLocale
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toString
              (

                
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
    
              )
              
                const
              
              ;
            
#if QT_STRINGVIEW_LEVEL<2

#endif

    // Class: QLocale
    // Function: dateFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dateFormat
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: timeFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  timeFormat
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: dateTimeFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dateTimeFormat
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
#if QT_CONFIG(datestring)

    // Class: QLocale
    // Function: toDate
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDate
              (

                
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
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: toTime
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toTime
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
            
    // Class: QLocale
    // Function: toDateTime
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDateTime
              (

                
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
    
              )
              
                const
              
              ;
            
#endif

    // Class: QLocale
    // Function: decimalPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  decimalPoint
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: groupSeparator
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  groupSeparator
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: percent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  percent
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: zeroDigit
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  zeroDigit
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: negativeSign
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  negativeSign
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: positiveSign
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  positiveSign
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: exponential
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exponential
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: monthName
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  monthName
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
            
    // Class: QLocale
    // Function: standaloneMonthName
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  standaloneMonthName
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
            
    // Class: QLocale
    // Function: dayName
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dayName
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
            
    // Class: QLocale
    // Function: standaloneDayName
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  standaloneDayName
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
            
    // Class: QLocale
    // Function: firstDayOfWeek
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstDayOfWeek
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: weekdays
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  weekdays
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: amText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  amText
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: pmText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pmText
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: measurementSystem
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  measurementSystem
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: collation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  collation
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: textDirection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  textDirection
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: toUpper
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toUpper
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: toLower
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toLower
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: currencySymbol
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  currencySymbol
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: toCurrencyString
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCurrencyString
              (

                
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
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: formattedDataSize
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  formattedDataSize
              (

                
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
    
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: uiLanguages
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  uiLanguages
              (

                
              )
              
                const
              
              ;
            
#if QT_DEPRECATED_SINCE(6,6)

#endif

#if QT_DEPRECATED_SINCE(6,6)

#endif

#if QT_DEPRECATED_SINCE(6,6)

#endif

    // Class: QLocale
    // Function: setNumberOptions
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNumberOptions
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QLocale
    // Function: numberOptions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  numberOptions
              (

                
              )
              
                const
              
              ;
            
    // Class: QLocale
    // Function: quoteString
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  quoteString
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
            
    // Class: QLocale
    // Function: createSeparatedList
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createSeparatedList
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
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
        virtual /*RJSType ID*/ int getWrappedType() const {
          
              return RJSType_QLocale::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QLocale* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QLocale* getWrapped() const {
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
        QLocale* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QLocale_Wrapper*)

    Q_DECLARE_INTERFACE(QLocale_Wrapper, "org.qcad.QLocale_Wrapper")

  
  #endif
  