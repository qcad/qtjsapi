
  // Auto generated
  
    #ifndef QBRUSH_H_WRAPPER
    #define QBRUSH_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QPixmap>
      
        #include <QGradient>
      
        #include <QVariant>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QBrush>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QBrush
    class QBrush_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QBrush_Wrapper(const QBrush_Wrapper&);

    public:
      // initialization of QBrush:
      static void init(RJSApi& handler);

      
        static QBrush* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QBrush.length(); i++) {
            RJSBasecaster_QBrush* basecaster = basecasters_QBrush[i];
            QBrush* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QBrush::getIdStatic()) {
            return (QBrush*)vp;
          }

          qWarning() << "QBrush_Wrapper::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QBrush* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QBrush*: wrapper wraps NULL";
          }

          QBrush* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QBrush*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QBrush_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QBrush_Wrapper(RJSApi& h, QBrush* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QBrush_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QBrush
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QBrush_Wrapper
                
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
    
    // Class: QBrush
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
            
    // Class: QBrush
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
            
    // Class: QBrush
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
            
    // Class: QBrush
    // Function: transform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  transform
              (

                
              )
              
                const
              
              ;
            
    // Class: QBrush
    // Function: setTransform
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTransform
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QBrush
    // Function: texture
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  texture
              (

                
              )
              
                const
              
              ;
            
    // Class: QBrush
    // Function: setTexture
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTexture
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QBrush
    // Function: textureImage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  textureImage
              (

                
              )
              
                const
              
              ;
            
    // Class: QBrush
    // Function: setTextureImage
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextureImage
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QBrush
    // Function: color
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  color
              (

                
              )
              
                const
              
              ;
            
    // Class: QBrush
    // Function: setColor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QBrush
    // Function: gradient
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  gradient
              (

                
              )
              
                const
              
              ;
            
    // Class: QBrush
    // Function: isOpaque
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isOpaque
              (

                
              )
              
                const
              
              ;
            
    // Class: QBrush
    // Function: isDetached
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDetached
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
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QBrush::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QBrush* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QBrush* getWrapped() const {
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
        QBrush* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QBrush*> basecasters_QBrush;

      public:
        static void registerBasecaster_QBrush(RJSBasecaster_QBrush* bc) {
          basecasters_QBrush.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QBrush_Wrapper*)

    Q_DECLARE_INTERFACE(QBrush_Wrapper, "org.qcad.QBrush_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QGradient>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QGradient
    class QGradient_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QGradient_Wrapper(const QGradient_Wrapper&);

    public:
      // initialization of QGradient:
      static void init(RJSApi& handler);

      
        static QGradient* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QLinearGradient::getIdStatic()) {
                return (QGradient*)(QLinearGradient*)vp;
              }
              
              if (t==RJSType_QRadialGradient::getIdStatic()) {
                return (QGradient*)(QRadialGradient*)vp;
              }
              
              if (t==RJSType_QConicalGradient::getIdStatic()) {
                return (QGradient*)(QConicalGradient*)vp;
              }
              

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QGradient.length(); i++) {
            RJSBasecaster_QGradient* basecaster = basecasters_QGradient[i];
            QGradient* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QGradient::getIdStatic()) {
            return (QGradient*)vp;
          }

          qWarning() << "QGradient_Wrapper::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QGradient* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QGradient*: wrapper wraps NULL";
          }

          QGradient* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QGradient*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    LinearGradient = QGradient::LinearGradient,
RadialGradient = QGradient::RadialGradient,
ConicalGradient = QGradient::ConicalGradient,
NoGradient = QGradient::NoGradient,

  };
  Q_ENUM(Type)

  enum Spread {
    PadSpread = QGradient::PadSpread,
ReflectSpread = QGradient::ReflectSpread,
RepeatSpread = QGradient::RepeatSpread,

  };
  Q_ENUM(Spread)

  enum CoordinateMode {
    LogicalMode = QGradient::LogicalMode,
StretchToDeviceMode = QGradient::StretchToDeviceMode,
ObjectBoundingMode = QGradient::ObjectBoundingMode,
ObjectMode = QGradient::ObjectMode,

  };
  Q_ENUM(CoordinateMode)

  enum InterpolationMode {
    ColorInterpolation = QGradient::ColorInterpolation,
ComponentInterpolation = QGradient::ComponentInterpolation,

  };
  Q_ENUM(InterpolationMode)

  enum Preset {
    WarmFlame = QGradient::WarmFlame,
NightFade = QGradient::NightFade,
SpringWarmth = QGradient::SpringWarmth,
JuicyPeach = QGradient::JuicyPeach,
YoungPassion = QGradient::YoungPassion,
LadyLips = QGradient::LadyLips,
SunnyMorning = QGradient::SunnyMorning,
RainyAshville = QGradient::RainyAshville,
FrozenDreams = QGradient::FrozenDreams,
WinterNeva = QGradient::WinterNeva,
DustyGrass = QGradient::DustyGrass,
TemptingAzure = QGradient::TemptingAzure,
HeavyRain = QGradient::HeavyRain,
AmyCrisp = QGradient::AmyCrisp,
MeanFruit = QGradient::MeanFruit,
DeepBlue = QGradient::DeepBlue,
RipeMalinka = QGradient::RipeMalinka,
CloudyKnoxville = QGradient::CloudyKnoxville,
MalibuBeach = QGradient::MalibuBeach,
NewLife = QGradient::NewLife,
TrueSunset = QGradient::TrueSunset,
MorpheusDen = QGradient::MorpheusDen,
RareWind = QGradient::RareWind,
NearMoon = QGradient::NearMoon,
WildApple = QGradient::WildApple,
SaintPetersburg = QGradient::SaintPetersburg,
PlumPlate = QGradient::PlumPlate,
EverlastingSky = QGradient::EverlastingSky,
HappyFisher = QGradient::HappyFisher,
Blessing = QGradient::Blessing,
SharpeyeEagle = QGradient::SharpeyeEagle,
LadogaBottom = QGradient::LadogaBottom,
LemonGate = QGradient::LemonGate,
ItmeoBranding = QGradient::ItmeoBranding,
ZeusMiracle = QGradient::ZeusMiracle,
OldHat = QGradient::OldHat,
StarWine = QGradient::StarWine,
HappyAcid = QGradient::HappyAcid,
AwesomePine = QGradient::AwesomePine,
NewYork = QGradient::NewYork,
ShyRainbow = QGradient::ShyRainbow,
MixedHopes = QGradient::MixedHopes,
FlyHigh = QGradient::FlyHigh,
StrongBliss = QGradient::StrongBliss,
FreshMilk = QGradient::FreshMilk,
SnowAgain = QGradient::SnowAgain,
FebruaryInk = QGradient::FebruaryInk,
KindSteel = QGradient::KindSteel,
SoftGrass = QGradient::SoftGrass,
GrownEarly = QGradient::GrownEarly,
SharpBlues = QGradient::SharpBlues,
ShadyWater = QGradient::ShadyWater,
DirtyBeauty = QGradient::DirtyBeauty,
GreatWhale = QGradient::GreatWhale,
TeenNotebook = QGradient::TeenNotebook,
PoliteRumors = QGradient::PoliteRumors,
SweetPeriod = QGradient::SweetPeriod,
WideMatrix = QGradient::WideMatrix,
SoftCherish = QGradient::SoftCherish,
RedSalvation = QGradient::RedSalvation,
BurningSpring = QGradient::BurningSpring,
NightParty = QGradient::NightParty,
SkyGlider = QGradient::SkyGlider,
HeavenPeach = QGradient::HeavenPeach,
PurpleDivision = QGradient::PurpleDivision,
AquaSplash = QGradient::AquaSplash,
SpikyNaga = QGradient::SpikyNaga,
LoveKiss = QGradient::LoveKiss,
CleanMirror = QGradient::CleanMirror,
PremiumDark = QGradient::PremiumDark,
ColdEvening = QGradient::ColdEvening,
CochitiLake = QGradient::CochitiLake,
SummerGames = QGradient::SummerGames,
PassionateBed = QGradient::PassionateBed,
MountainRock = QGradient::MountainRock,
DesertHump = QGradient::DesertHump,
JungleDay = QGradient::JungleDay,
PhoenixStart = QGradient::PhoenixStart,
OctoberSilence = QGradient::OctoberSilence,
FarawayRiver = QGradient::FarawayRiver,
AlchemistLab = QGradient::AlchemistLab,
OverSun = QGradient::OverSun,
PremiumWhite = QGradient::PremiumWhite,
MarsParty = QGradient::MarsParty,
EternalConstance = QGradient::EternalConstance,
JapanBlush = QGradient::JapanBlush,
SmilingRain = QGradient::SmilingRain,
CloudyApple = QGradient::CloudyApple,
BigMango = QGradient::BigMango,
HealthyWater = QGradient::HealthyWater,
AmourAmour = QGradient::AmourAmour,
RiskyConcrete = QGradient::RiskyConcrete,
StrongStick = QGradient::StrongStick,
ViciousStance = QGradient::ViciousStance,
PaloAlto = QGradient::PaloAlto,
HappyMemories = QGradient::HappyMemories,
MidnightBloom = QGradient::MidnightBloom,
Crystalline = QGradient::Crystalline,
PartyBliss = QGradient::PartyBliss,
ConfidentCloud = QGradient::ConfidentCloud,
LeCocktail = QGradient::LeCocktail,
RiverCity = QGradient::RiverCity,
FrozenBerry = QGradient::FrozenBerry,
ChildCare = QGradient::ChildCare,
FlyingLemon = QGradient::FlyingLemon,
NewRetrowave = QGradient::NewRetrowave,
HiddenJaguar = QGradient::HiddenJaguar,
AboveTheSky = QGradient::AboveTheSky,
Nega = QGradient::Nega,
DenseWater = QGradient::DenseWater,
Seashore = QGradient::Seashore,
MarbleWall = QGradient::MarbleWall,
CheerfulCaramel = QGradient::CheerfulCaramel,
NightSky = QGradient::NightSky,
MagicLake = QGradient::MagicLake,
YoungGrass = QGradient::YoungGrass,
ColorfulPeach = QGradient::ColorfulPeach,
GentleCare = QGradient::GentleCare,
PlumBath = QGradient::PlumBath,
HappyUnicorn = QGradient::HappyUnicorn,
AfricanField = QGradient::AfricanField,
SolidStone = QGradient::SolidStone,
OrangeJuice = QGradient::OrangeJuice,
GlassWater = QGradient::GlassWater,
NorthMiracle = QGradient::NorthMiracle,
FruitBlend = QGradient::FruitBlend,
MillenniumPine = QGradient::MillenniumPine,
HighFlight = QGradient::HighFlight,
MoleHall = QGradient::MoleHall,
SpaceShift = QGradient::SpaceShift,
ForestInei = QGradient::ForestInei,
RoyalGarden = QGradient::RoyalGarden,
RichMetal = QGradient::RichMetal,
JuicyCake = QGradient::JuicyCake,
SmartIndigo = QGradient::SmartIndigo,
SandStrike = QGradient::SandStrike,
NorseBeauty = QGradient::NorseBeauty,
AquaGuidance = QGradient::AquaGuidance,
SunVeggie = QGradient::SunVeggie,
SeaLord = QGradient::SeaLord,
BlackSea = QGradient::BlackSea,
GrassShampoo = QGradient::GrassShampoo,
LandingAircraft = QGradient::LandingAircraft,
WitchDance = QGradient::WitchDance,
SleeplessNight = QGradient::SleeplessNight,
AngelCare = QGradient::AngelCare,
CrystalRiver = QGradient::CrystalRiver,
SoftLipstick = QGradient::SoftLipstick,
SaltMountain = QGradient::SaltMountain,
PerfectWhite = QGradient::PerfectWhite,
FreshOasis = QGradient::FreshOasis,
StrictNovember = QGradient::StrictNovember,
MorningSalad = QGradient::MorningSalad,
DeepRelief = QGradient::DeepRelief,
SeaStrike = QGradient::SeaStrike,
NightCall = QGradient::NightCall,
SupremeSky = QGradient::SupremeSky,
LightBlue = QGradient::LightBlue,
MindCrawl = QGradient::MindCrawl,
LilyMeadow = QGradient::LilyMeadow,
SugarLollipop = QGradient::SugarLollipop,
SweetDessert = QGradient::SweetDessert,
MagicRay = QGradient::MagicRay,
TeenParty = QGradient::TeenParty,
FrozenHeat = QGradient::FrozenHeat,
GagarinView = QGradient::GagarinView,
FabledSunset = QGradient::FabledSunset,
PerfectBlue = QGradient::PerfectBlue,
NumPresets = QGradient::NumPresets,

  };
  Q_ENUM(Preset)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QGradient_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QGradient_Wrapper(RJSApi& h, QGradient* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QGradient_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QGradient
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QGradient_Wrapper
                
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
    
    // Class: QGradient
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
            
    // Class: QGradient
    // Function: setSpread
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSpread
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QGradient
    // Function: spread
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spread
              (

                
              )
              
                const
              
              ;
            
    // Class: QGradient
    // Function: setColorAt
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColorAt
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
            
    // Class: QGradient
    // Function: coordinateMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  coordinateMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QGradient
    // Function: setCoordinateMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCoordinateMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QGradient
    // Function: interpolationMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  interpolationMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QGradient
    // Function: setInterpolationMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setInterpolationMode
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
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QGradient::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QGradient* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QGradient* getWrapped() const {
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
        QGradient* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QGradient*> basecasters_QGradient;

      public:
        static void registerBasecaster_QGradient(RJSBasecaster_QGradient* bc) {
          basecasters_QGradient.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QGradient_Wrapper*)

    Q_DECLARE_INTERFACE(QGradient_Wrapper, "org.qcad.QGradient_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QLinearGradient>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QLinearGradient
    class QLinearGradient_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QLinearGradient_Wrapper(const QLinearGradient_Wrapper&);

    public:
      // initialization of QLinearGradient:
      static void init(RJSApi& handler);

      
        static QLinearGradient* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QLinearGradient.length(); i++) {
            RJSBasecaster_QLinearGradient* basecaster = basecasters_QLinearGradient[i];
            QLinearGradient* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QLinearGradient::getIdStatic()) {
            return (QLinearGradient*)vp;
          }

          qWarning() << "QLinearGradient_Wrapper::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QLinearGradient* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QLinearGradient*: wrapper wraps NULL";
          }

          QLinearGradient* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QLinearGradient*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    LinearGradient = QLinearGradient::LinearGradient,
RadialGradient = QLinearGradient::RadialGradient,
ConicalGradient = QLinearGradient::ConicalGradient,
NoGradient = QLinearGradient::NoGradient,

  };
  Q_ENUM(Type)

  enum Spread {
    PadSpread = QLinearGradient::PadSpread,
ReflectSpread = QLinearGradient::ReflectSpread,
RepeatSpread = QLinearGradient::RepeatSpread,

  };
  Q_ENUM(Spread)

  enum CoordinateMode {
    LogicalMode = QLinearGradient::LogicalMode,
StretchToDeviceMode = QLinearGradient::StretchToDeviceMode,
ObjectBoundingMode = QLinearGradient::ObjectBoundingMode,
ObjectMode = QLinearGradient::ObjectMode,

  };
  Q_ENUM(CoordinateMode)

  enum InterpolationMode {
    ColorInterpolation = QLinearGradient::ColorInterpolation,
ComponentInterpolation = QLinearGradient::ComponentInterpolation,

  };
  Q_ENUM(InterpolationMode)

  enum Preset {
    WarmFlame = QLinearGradient::WarmFlame,
NightFade = QLinearGradient::NightFade,
SpringWarmth = QLinearGradient::SpringWarmth,
JuicyPeach = QLinearGradient::JuicyPeach,
YoungPassion = QLinearGradient::YoungPassion,
LadyLips = QLinearGradient::LadyLips,
SunnyMorning = QLinearGradient::SunnyMorning,
RainyAshville = QLinearGradient::RainyAshville,
FrozenDreams = QLinearGradient::FrozenDreams,
WinterNeva = QLinearGradient::WinterNeva,
DustyGrass = QLinearGradient::DustyGrass,
TemptingAzure = QLinearGradient::TemptingAzure,
HeavyRain = QLinearGradient::HeavyRain,
AmyCrisp = QLinearGradient::AmyCrisp,
MeanFruit = QLinearGradient::MeanFruit,
DeepBlue = QLinearGradient::DeepBlue,
RipeMalinka = QLinearGradient::RipeMalinka,
CloudyKnoxville = QLinearGradient::CloudyKnoxville,
MalibuBeach = QLinearGradient::MalibuBeach,
NewLife = QLinearGradient::NewLife,
TrueSunset = QLinearGradient::TrueSunset,
MorpheusDen = QLinearGradient::MorpheusDen,
RareWind = QLinearGradient::RareWind,
NearMoon = QLinearGradient::NearMoon,
WildApple = QLinearGradient::WildApple,
SaintPetersburg = QLinearGradient::SaintPetersburg,
PlumPlate = QLinearGradient::PlumPlate,
EverlastingSky = QLinearGradient::EverlastingSky,
HappyFisher = QLinearGradient::HappyFisher,
Blessing = QLinearGradient::Blessing,
SharpeyeEagle = QLinearGradient::SharpeyeEagle,
LadogaBottom = QLinearGradient::LadogaBottom,
LemonGate = QLinearGradient::LemonGate,
ItmeoBranding = QLinearGradient::ItmeoBranding,
ZeusMiracle = QLinearGradient::ZeusMiracle,
OldHat = QLinearGradient::OldHat,
StarWine = QLinearGradient::StarWine,
HappyAcid = QLinearGradient::HappyAcid,
AwesomePine = QLinearGradient::AwesomePine,
NewYork = QLinearGradient::NewYork,
ShyRainbow = QLinearGradient::ShyRainbow,
MixedHopes = QLinearGradient::MixedHopes,
FlyHigh = QLinearGradient::FlyHigh,
StrongBliss = QLinearGradient::StrongBliss,
FreshMilk = QLinearGradient::FreshMilk,
SnowAgain = QLinearGradient::SnowAgain,
FebruaryInk = QLinearGradient::FebruaryInk,
KindSteel = QLinearGradient::KindSteel,
SoftGrass = QLinearGradient::SoftGrass,
GrownEarly = QLinearGradient::GrownEarly,
SharpBlues = QLinearGradient::SharpBlues,
ShadyWater = QLinearGradient::ShadyWater,
DirtyBeauty = QLinearGradient::DirtyBeauty,
GreatWhale = QLinearGradient::GreatWhale,
TeenNotebook = QLinearGradient::TeenNotebook,
PoliteRumors = QLinearGradient::PoliteRumors,
SweetPeriod = QLinearGradient::SweetPeriod,
WideMatrix = QLinearGradient::WideMatrix,
SoftCherish = QLinearGradient::SoftCherish,
RedSalvation = QLinearGradient::RedSalvation,
BurningSpring = QLinearGradient::BurningSpring,
NightParty = QLinearGradient::NightParty,
SkyGlider = QLinearGradient::SkyGlider,
HeavenPeach = QLinearGradient::HeavenPeach,
PurpleDivision = QLinearGradient::PurpleDivision,
AquaSplash = QLinearGradient::AquaSplash,
SpikyNaga = QLinearGradient::SpikyNaga,
LoveKiss = QLinearGradient::LoveKiss,
CleanMirror = QLinearGradient::CleanMirror,
PremiumDark = QLinearGradient::PremiumDark,
ColdEvening = QLinearGradient::ColdEvening,
CochitiLake = QLinearGradient::CochitiLake,
SummerGames = QLinearGradient::SummerGames,
PassionateBed = QLinearGradient::PassionateBed,
MountainRock = QLinearGradient::MountainRock,
DesertHump = QLinearGradient::DesertHump,
JungleDay = QLinearGradient::JungleDay,
PhoenixStart = QLinearGradient::PhoenixStart,
OctoberSilence = QLinearGradient::OctoberSilence,
FarawayRiver = QLinearGradient::FarawayRiver,
AlchemistLab = QLinearGradient::AlchemistLab,
OverSun = QLinearGradient::OverSun,
PremiumWhite = QLinearGradient::PremiumWhite,
MarsParty = QLinearGradient::MarsParty,
EternalConstance = QLinearGradient::EternalConstance,
JapanBlush = QLinearGradient::JapanBlush,
SmilingRain = QLinearGradient::SmilingRain,
CloudyApple = QLinearGradient::CloudyApple,
BigMango = QLinearGradient::BigMango,
HealthyWater = QLinearGradient::HealthyWater,
AmourAmour = QLinearGradient::AmourAmour,
RiskyConcrete = QLinearGradient::RiskyConcrete,
StrongStick = QLinearGradient::StrongStick,
ViciousStance = QLinearGradient::ViciousStance,
PaloAlto = QLinearGradient::PaloAlto,
HappyMemories = QLinearGradient::HappyMemories,
MidnightBloom = QLinearGradient::MidnightBloom,
Crystalline = QLinearGradient::Crystalline,
PartyBliss = QLinearGradient::PartyBliss,
ConfidentCloud = QLinearGradient::ConfidentCloud,
LeCocktail = QLinearGradient::LeCocktail,
RiverCity = QLinearGradient::RiverCity,
FrozenBerry = QLinearGradient::FrozenBerry,
ChildCare = QLinearGradient::ChildCare,
FlyingLemon = QLinearGradient::FlyingLemon,
NewRetrowave = QLinearGradient::NewRetrowave,
HiddenJaguar = QLinearGradient::HiddenJaguar,
AboveTheSky = QLinearGradient::AboveTheSky,
Nega = QLinearGradient::Nega,
DenseWater = QLinearGradient::DenseWater,
Seashore = QLinearGradient::Seashore,
MarbleWall = QLinearGradient::MarbleWall,
CheerfulCaramel = QLinearGradient::CheerfulCaramel,
NightSky = QLinearGradient::NightSky,
MagicLake = QLinearGradient::MagicLake,
YoungGrass = QLinearGradient::YoungGrass,
ColorfulPeach = QLinearGradient::ColorfulPeach,
GentleCare = QLinearGradient::GentleCare,
PlumBath = QLinearGradient::PlumBath,
HappyUnicorn = QLinearGradient::HappyUnicorn,
AfricanField = QLinearGradient::AfricanField,
SolidStone = QLinearGradient::SolidStone,
OrangeJuice = QLinearGradient::OrangeJuice,
GlassWater = QLinearGradient::GlassWater,
NorthMiracle = QLinearGradient::NorthMiracle,
FruitBlend = QLinearGradient::FruitBlend,
MillenniumPine = QLinearGradient::MillenniumPine,
HighFlight = QLinearGradient::HighFlight,
MoleHall = QLinearGradient::MoleHall,
SpaceShift = QLinearGradient::SpaceShift,
ForestInei = QLinearGradient::ForestInei,
RoyalGarden = QLinearGradient::RoyalGarden,
RichMetal = QLinearGradient::RichMetal,
JuicyCake = QLinearGradient::JuicyCake,
SmartIndigo = QLinearGradient::SmartIndigo,
SandStrike = QLinearGradient::SandStrike,
NorseBeauty = QLinearGradient::NorseBeauty,
AquaGuidance = QLinearGradient::AquaGuidance,
SunVeggie = QLinearGradient::SunVeggie,
SeaLord = QLinearGradient::SeaLord,
BlackSea = QLinearGradient::BlackSea,
GrassShampoo = QLinearGradient::GrassShampoo,
LandingAircraft = QLinearGradient::LandingAircraft,
WitchDance = QLinearGradient::WitchDance,
SleeplessNight = QLinearGradient::SleeplessNight,
AngelCare = QLinearGradient::AngelCare,
CrystalRiver = QLinearGradient::CrystalRiver,
SoftLipstick = QLinearGradient::SoftLipstick,
SaltMountain = QLinearGradient::SaltMountain,
PerfectWhite = QLinearGradient::PerfectWhite,
FreshOasis = QLinearGradient::FreshOasis,
StrictNovember = QLinearGradient::StrictNovember,
MorningSalad = QLinearGradient::MorningSalad,
DeepRelief = QLinearGradient::DeepRelief,
SeaStrike = QLinearGradient::SeaStrike,
NightCall = QLinearGradient::NightCall,
SupremeSky = QLinearGradient::SupremeSky,
LightBlue = QLinearGradient::LightBlue,
MindCrawl = QLinearGradient::MindCrawl,
LilyMeadow = QLinearGradient::LilyMeadow,
SugarLollipop = QLinearGradient::SugarLollipop,
SweetDessert = QLinearGradient::SweetDessert,
MagicRay = QLinearGradient::MagicRay,
TeenParty = QLinearGradient::TeenParty,
FrozenHeat = QLinearGradient::FrozenHeat,
GagarinView = QLinearGradient::GagarinView,
FabledSunset = QLinearGradient::FabledSunset,
PerfectBlue = QLinearGradient::PerfectBlue,
NumPresets = QLinearGradient::NumPresets,

  };
  Q_ENUM(Preset)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QLinearGradient_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QLinearGradient_Wrapper(RJSApi& h, QLinearGradient* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QLinearGradient_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QLinearGradient
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QLinearGradient_Wrapper
                
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
    
    // Class: QLinearGradient
    // Function: type
    // Source: QGradient
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
            
    // Class: QLinearGradient
    // Function: setSpread
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSpread
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QLinearGradient
    // Function: spread
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spread
              (

                
              )
              
                const
              
              ;
            
    // Class: QLinearGradient
    // Function: setColorAt
    // Source: QGradient
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColorAt
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
            
    // Class: QLinearGradient
    // Function: coordinateMode
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  coordinateMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QLinearGradient
    // Function: setCoordinateMode
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCoordinateMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QLinearGradient
    // Function: interpolationMode
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  interpolationMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QLinearGradient
    // Function: setInterpolationMode
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setInterpolationMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QLinearGradient
    // Function: start
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  start
              (

                
              )
              
                const
              
              ;
            
    // Class: QLinearGradient
    // Function: setStart
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStart
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
            
    // Class: QLinearGradient
    // Function: finalStop
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  finalStop
              (

                
              )
              
                const
              
              ;
            
    // Class: QLinearGradient
    // Function: setFinalStop
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFinalStop
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
          return RJSType_QLinearGradient::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QLinearGradient* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QLinearGradient* getWrapped() const {
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
        QLinearGradient* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QLinearGradient*> basecasters_QLinearGradient;

      public:
        static void registerBasecaster_QLinearGradient(RJSBasecaster_QLinearGradient* bc) {
          basecasters_QLinearGradient.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QLinearGradient_Wrapper*)

    Q_DECLARE_INTERFACE(QLinearGradient_Wrapper, "org.qcad.QLinearGradient_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QRadialGradient>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QRadialGradient
    class QRadialGradient_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QRadialGradient_Wrapper(const QRadialGradient_Wrapper&);

    public:
      // initialization of QRadialGradient:
      static void init(RJSApi& handler);

      
        static QRadialGradient* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QRadialGradient.length(); i++) {
            RJSBasecaster_QRadialGradient* basecaster = basecasters_QRadialGradient[i];
            QRadialGradient* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QRadialGradient::getIdStatic()) {
            return (QRadialGradient*)vp;
          }

          qWarning() << "QRadialGradient_Wrapper::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QRadialGradient* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QRadialGradient*: wrapper wraps NULL";
          }

          QRadialGradient* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QRadialGradient*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    LinearGradient = QRadialGradient::LinearGradient,
RadialGradient = QRadialGradient::RadialGradient,
ConicalGradient = QRadialGradient::ConicalGradient,
NoGradient = QRadialGradient::NoGradient,

  };
  Q_ENUM(Type)

  enum Spread {
    PadSpread = QRadialGradient::PadSpread,
ReflectSpread = QRadialGradient::ReflectSpread,
RepeatSpread = QRadialGradient::RepeatSpread,

  };
  Q_ENUM(Spread)

  enum CoordinateMode {
    LogicalMode = QRadialGradient::LogicalMode,
StretchToDeviceMode = QRadialGradient::StretchToDeviceMode,
ObjectBoundingMode = QRadialGradient::ObjectBoundingMode,
ObjectMode = QRadialGradient::ObjectMode,

  };
  Q_ENUM(CoordinateMode)

  enum InterpolationMode {
    ColorInterpolation = QRadialGradient::ColorInterpolation,
ComponentInterpolation = QRadialGradient::ComponentInterpolation,

  };
  Q_ENUM(InterpolationMode)

  enum Preset {
    WarmFlame = QRadialGradient::WarmFlame,
NightFade = QRadialGradient::NightFade,
SpringWarmth = QRadialGradient::SpringWarmth,
JuicyPeach = QRadialGradient::JuicyPeach,
YoungPassion = QRadialGradient::YoungPassion,
LadyLips = QRadialGradient::LadyLips,
SunnyMorning = QRadialGradient::SunnyMorning,
RainyAshville = QRadialGradient::RainyAshville,
FrozenDreams = QRadialGradient::FrozenDreams,
WinterNeva = QRadialGradient::WinterNeva,
DustyGrass = QRadialGradient::DustyGrass,
TemptingAzure = QRadialGradient::TemptingAzure,
HeavyRain = QRadialGradient::HeavyRain,
AmyCrisp = QRadialGradient::AmyCrisp,
MeanFruit = QRadialGradient::MeanFruit,
DeepBlue = QRadialGradient::DeepBlue,
RipeMalinka = QRadialGradient::RipeMalinka,
CloudyKnoxville = QRadialGradient::CloudyKnoxville,
MalibuBeach = QRadialGradient::MalibuBeach,
NewLife = QRadialGradient::NewLife,
TrueSunset = QRadialGradient::TrueSunset,
MorpheusDen = QRadialGradient::MorpheusDen,
RareWind = QRadialGradient::RareWind,
NearMoon = QRadialGradient::NearMoon,
WildApple = QRadialGradient::WildApple,
SaintPetersburg = QRadialGradient::SaintPetersburg,
PlumPlate = QRadialGradient::PlumPlate,
EverlastingSky = QRadialGradient::EverlastingSky,
HappyFisher = QRadialGradient::HappyFisher,
Blessing = QRadialGradient::Blessing,
SharpeyeEagle = QRadialGradient::SharpeyeEagle,
LadogaBottom = QRadialGradient::LadogaBottom,
LemonGate = QRadialGradient::LemonGate,
ItmeoBranding = QRadialGradient::ItmeoBranding,
ZeusMiracle = QRadialGradient::ZeusMiracle,
OldHat = QRadialGradient::OldHat,
StarWine = QRadialGradient::StarWine,
HappyAcid = QRadialGradient::HappyAcid,
AwesomePine = QRadialGradient::AwesomePine,
NewYork = QRadialGradient::NewYork,
ShyRainbow = QRadialGradient::ShyRainbow,
MixedHopes = QRadialGradient::MixedHopes,
FlyHigh = QRadialGradient::FlyHigh,
StrongBliss = QRadialGradient::StrongBliss,
FreshMilk = QRadialGradient::FreshMilk,
SnowAgain = QRadialGradient::SnowAgain,
FebruaryInk = QRadialGradient::FebruaryInk,
KindSteel = QRadialGradient::KindSteel,
SoftGrass = QRadialGradient::SoftGrass,
GrownEarly = QRadialGradient::GrownEarly,
SharpBlues = QRadialGradient::SharpBlues,
ShadyWater = QRadialGradient::ShadyWater,
DirtyBeauty = QRadialGradient::DirtyBeauty,
GreatWhale = QRadialGradient::GreatWhale,
TeenNotebook = QRadialGradient::TeenNotebook,
PoliteRumors = QRadialGradient::PoliteRumors,
SweetPeriod = QRadialGradient::SweetPeriod,
WideMatrix = QRadialGradient::WideMatrix,
SoftCherish = QRadialGradient::SoftCherish,
RedSalvation = QRadialGradient::RedSalvation,
BurningSpring = QRadialGradient::BurningSpring,
NightParty = QRadialGradient::NightParty,
SkyGlider = QRadialGradient::SkyGlider,
HeavenPeach = QRadialGradient::HeavenPeach,
PurpleDivision = QRadialGradient::PurpleDivision,
AquaSplash = QRadialGradient::AquaSplash,
SpikyNaga = QRadialGradient::SpikyNaga,
LoveKiss = QRadialGradient::LoveKiss,
CleanMirror = QRadialGradient::CleanMirror,
PremiumDark = QRadialGradient::PremiumDark,
ColdEvening = QRadialGradient::ColdEvening,
CochitiLake = QRadialGradient::CochitiLake,
SummerGames = QRadialGradient::SummerGames,
PassionateBed = QRadialGradient::PassionateBed,
MountainRock = QRadialGradient::MountainRock,
DesertHump = QRadialGradient::DesertHump,
JungleDay = QRadialGradient::JungleDay,
PhoenixStart = QRadialGradient::PhoenixStart,
OctoberSilence = QRadialGradient::OctoberSilence,
FarawayRiver = QRadialGradient::FarawayRiver,
AlchemistLab = QRadialGradient::AlchemistLab,
OverSun = QRadialGradient::OverSun,
PremiumWhite = QRadialGradient::PremiumWhite,
MarsParty = QRadialGradient::MarsParty,
EternalConstance = QRadialGradient::EternalConstance,
JapanBlush = QRadialGradient::JapanBlush,
SmilingRain = QRadialGradient::SmilingRain,
CloudyApple = QRadialGradient::CloudyApple,
BigMango = QRadialGradient::BigMango,
HealthyWater = QRadialGradient::HealthyWater,
AmourAmour = QRadialGradient::AmourAmour,
RiskyConcrete = QRadialGradient::RiskyConcrete,
StrongStick = QRadialGradient::StrongStick,
ViciousStance = QRadialGradient::ViciousStance,
PaloAlto = QRadialGradient::PaloAlto,
HappyMemories = QRadialGradient::HappyMemories,
MidnightBloom = QRadialGradient::MidnightBloom,
Crystalline = QRadialGradient::Crystalline,
PartyBliss = QRadialGradient::PartyBliss,
ConfidentCloud = QRadialGradient::ConfidentCloud,
LeCocktail = QRadialGradient::LeCocktail,
RiverCity = QRadialGradient::RiverCity,
FrozenBerry = QRadialGradient::FrozenBerry,
ChildCare = QRadialGradient::ChildCare,
FlyingLemon = QRadialGradient::FlyingLemon,
NewRetrowave = QRadialGradient::NewRetrowave,
HiddenJaguar = QRadialGradient::HiddenJaguar,
AboveTheSky = QRadialGradient::AboveTheSky,
Nega = QRadialGradient::Nega,
DenseWater = QRadialGradient::DenseWater,
Seashore = QRadialGradient::Seashore,
MarbleWall = QRadialGradient::MarbleWall,
CheerfulCaramel = QRadialGradient::CheerfulCaramel,
NightSky = QRadialGradient::NightSky,
MagicLake = QRadialGradient::MagicLake,
YoungGrass = QRadialGradient::YoungGrass,
ColorfulPeach = QRadialGradient::ColorfulPeach,
GentleCare = QRadialGradient::GentleCare,
PlumBath = QRadialGradient::PlumBath,
HappyUnicorn = QRadialGradient::HappyUnicorn,
AfricanField = QRadialGradient::AfricanField,
SolidStone = QRadialGradient::SolidStone,
OrangeJuice = QRadialGradient::OrangeJuice,
GlassWater = QRadialGradient::GlassWater,
NorthMiracle = QRadialGradient::NorthMiracle,
FruitBlend = QRadialGradient::FruitBlend,
MillenniumPine = QRadialGradient::MillenniumPine,
HighFlight = QRadialGradient::HighFlight,
MoleHall = QRadialGradient::MoleHall,
SpaceShift = QRadialGradient::SpaceShift,
ForestInei = QRadialGradient::ForestInei,
RoyalGarden = QRadialGradient::RoyalGarden,
RichMetal = QRadialGradient::RichMetal,
JuicyCake = QRadialGradient::JuicyCake,
SmartIndigo = QRadialGradient::SmartIndigo,
SandStrike = QRadialGradient::SandStrike,
NorseBeauty = QRadialGradient::NorseBeauty,
AquaGuidance = QRadialGradient::AquaGuidance,
SunVeggie = QRadialGradient::SunVeggie,
SeaLord = QRadialGradient::SeaLord,
BlackSea = QRadialGradient::BlackSea,
GrassShampoo = QRadialGradient::GrassShampoo,
LandingAircraft = QRadialGradient::LandingAircraft,
WitchDance = QRadialGradient::WitchDance,
SleeplessNight = QRadialGradient::SleeplessNight,
AngelCare = QRadialGradient::AngelCare,
CrystalRiver = QRadialGradient::CrystalRiver,
SoftLipstick = QRadialGradient::SoftLipstick,
SaltMountain = QRadialGradient::SaltMountain,
PerfectWhite = QRadialGradient::PerfectWhite,
FreshOasis = QRadialGradient::FreshOasis,
StrictNovember = QRadialGradient::StrictNovember,
MorningSalad = QRadialGradient::MorningSalad,
DeepRelief = QRadialGradient::DeepRelief,
SeaStrike = QRadialGradient::SeaStrike,
NightCall = QRadialGradient::NightCall,
SupremeSky = QRadialGradient::SupremeSky,
LightBlue = QRadialGradient::LightBlue,
MindCrawl = QRadialGradient::MindCrawl,
LilyMeadow = QRadialGradient::LilyMeadow,
SugarLollipop = QRadialGradient::SugarLollipop,
SweetDessert = QRadialGradient::SweetDessert,
MagicRay = QRadialGradient::MagicRay,
TeenParty = QRadialGradient::TeenParty,
FrozenHeat = QRadialGradient::FrozenHeat,
GagarinView = QRadialGradient::GagarinView,
FabledSunset = QRadialGradient::FabledSunset,
PerfectBlue = QRadialGradient::PerfectBlue,
NumPresets = QRadialGradient::NumPresets,

  };
  Q_ENUM(Preset)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QRadialGradient_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QRadialGradient_Wrapper(RJSApi& h, QRadialGradient* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QRadialGradient_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QRadialGradient
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QRadialGradient_Wrapper
                
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
    , 
  const QJSValue& 
  a5
      = QJSValue()
    , 
  const QJSValue& 
  a6
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QRadialGradient
    // Function: type
    // Source: QGradient
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
            
    // Class: QRadialGradient
    // Function: setSpread
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSpread
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QRadialGradient
    // Function: spread
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spread
              (

                
              )
              
                const
              
              ;
            
    // Class: QRadialGradient
    // Function: setColorAt
    // Source: QGradient
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColorAt
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
            
    // Class: QRadialGradient
    // Function: coordinateMode
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  coordinateMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QRadialGradient
    // Function: setCoordinateMode
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCoordinateMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QRadialGradient
    // Function: interpolationMode
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  interpolationMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QRadialGradient
    // Function: setInterpolationMode
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setInterpolationMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QRadialGradient
    // Function: center
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  center
              (

                
              )
              
                const
              
              ;
            
    // Class: QRadialGradient
    // Function: setCenter
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCenter
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
            
    // Class: QRadialGradient
    // Function: focalPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  focalPoint
              (

                
              )
              
                const
              
              ;
            
    // Class: QRadialGradient
    // Function: setFocalPoint
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFocalPoint
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
            
    // Class: QRadialGradient
    // Function: radius
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  radius
              (

                
              )
              
                const
              
              ;
            
    // Class: QRadialGradient
    // Function: setRadius
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRadius
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QRadialGradient
    // Function: centerRadius
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  centerRadius
              (

                
              )
              
                const
              
              ;
            
    // Class: QRadialGradient
    // Function: setCenterRadius
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCenterRadius
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QRadialGradient
    // Function: focalRadius
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  focalRadius
              (

                
              )
              
                const
              
              ;
            
    // Class: QRadialGradient
    // Function: setFocalRadius
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFocalRadius
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
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QRadialGradient::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QRadialGradient* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QRadialGradient* getWrapped() const {
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
        QRadialGradient* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QRadialGradient*> basecasters_QRadialGradient;

      public:
        static void registerBasecaster_QRadialGradient(RJSBasecaster_QRadialGradient* bc) {
          basecasters_QRadialGradient.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QRadialGradient_Wrapper*)

    Q_DECLARE_INTERFACE(QRadialGradient_Wrapper, "org.qcad.QRadialGradient_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QConicalGradient>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QConicalGradient
    class QConicalGradient_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QConicalGradient_Wrapper(const QConicalGradient_Wrapper&);

    public:
      // initialization of QConicalGradient:
      static void init(RJSApi& handler);

      
        static QConicalGradient* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QConicalGradient.length(); i++) {
            RJSBasecaster_QConicalGradient* basecaster = basecasters_QConicalGradient[i];
            QConicalGradient* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QConicalGradient::getIdStatic()) {
            return (QConicalGradient*)vp;
          }

          qWarning() << "QConicalGradient_Wrapper::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QConicalGradient* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QConicalGradient*: wrapper wraps NULL";
          }

          QConicalGradient* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QConicalGradient*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    LinearGradient = QConicalGradient::LinearGradient,
RadialGradient = QConicalGradient::RadialGradient,
ConicalGradient = QConicalGradient::ConicalGradient,
NoGradient = QConicalGradient::NoGradient,

  };
  Q_ENUM(Type)

  enum Spread {
    PadSpread = QConicalGradient::PadSpread,
ReflectSpread = QConicalGradient::ReflectSpread,
RepeatSpread = QConicalGradient::RepeatSpread,

  };
  Q_ENUM(Spread)

  enum CoordinateMode {
    LogicalMode = QConicalGradient::LogicalMode,
StretchToDeviceMode = QConicalGradient::StretchToDeviceMode,
ObjectBoundingMode = QConicalGradient::ObjectBoundingMode,
ObjectMode = QConicalGradient::ObjectMode,

  };
  Q_ENUM(CoordinateMode)

  enum InterpolationMode {
    ColorInterpolation = QConicalGradient::ColorInterpolation,
ComponentInterpolation = QConicalGradient::ComponentInterpolation,

  };
  Q_ENUM(InterpolationMode)

  enum Preset {
    WarmFlame = QConicalGradient::WarmFlame,
NightFade = QConicalGradient::NightFade,
SpringWarmth = QConicalGradient::SpringWarmth,
JuicyPeach = QConicalGradient::JuicyPeach,
YoungPassion = QConicalGradient::YoungPassion,
LadyLips = QConicalGradient::LadyLips,
SunnyMorning = QConicalGradient::SunnyMorning,
RainyAshville = QConicalGradient::RainyAshville,
FrozenDreams = QConicalGradient::FrozenDreams,
WinterNeva = QConicalGradient::WinterNeva,
DustyGrass = QConicalGradient::DustyGrass,
TemptingAzure = QConicalGradient::TemptingAzure,
HeavyRain = QConicalGradient::HeavyRain,
AmyCrisp = QConicalGradient::AmyCrisp,
MeanFruit = QConicalGradient::MeanFruit,
DeepBlue = QConicalGradient::DeepBlue,
RipeMalinka = QConicalGradient::RipeMalinka,
CloudyKnoxville = QConicalGradient::CloudyKnoxville,
MalibuBeach = QConicalGradient::MalibuBeach,
NewLife = QConicalGradient::NewLife,
TrueSunset = QConicalGradient::TrueSunset,
MorpheusDen = QConicalGradient::MorpheusDen,
RareWind = QConicalGradient::RareWind,
NearMoon = QConicalGradient::NearMoon,
WildApple = QConicalGradient::WildApple,
SaintPetersburg = QConicalGradient::SaintPetersburg,
PlumPlate = QConicalGradient::PlumPlate,
EverlastingSky = QConicalGradient::EverlastingSky,
HappyFisher = QConicalGradient::HappyFisher,
Blessing = QConicalGradient::Blessing,
SharpeyeEagle = QConicalGradient::SharpeyeEagle,
LadogaBottom = QConicalGradient::LadogaBottom,
LemonGate = QConicalGradient::LemonGate,
ItmeoBranding = QConicalGradient::ItmeoBranding,
ZeusMiracle = QConicalGradient::ZeusMiracle,
OldHat = QConicalGradient::OldHat,
StarWine = QConicalGradient::StarWine,
HappyAcid = QConicalGradient::HappyAcid,
AwesomePine = QConicalGradient::AwesomePine,
NewYork = QConicalGradient::NewYork,
ShyRainbow = QConicalGradient::ShyRainbow,
MixedHopes = QConicalGradient::MixedHopes,
FlyHigh = QConicalGradient::FlyHigh,
StrongBliss = QConicalGradient::StrongBliss,
FreshMilk = QConicalGradient::FreshMilk,
SnowAgain = QConicalGradient::SnowAgain,
FebruaryInk = QConicalGradient::FebruaryInk,
KindSteel = QConicalGradient::KindSteel,
SoftGrass = QConicalGradient::SoftGrass,
GrownEarly = QConicalGradient::GrownEarly,
SharpBlues = QConicalGradient::SharpBlues,
ShadyWater = QConicalGradient::ShadyWater,
DirtyBeauty = QConicalGradient::DirtyBeauty,
GreatWhale = QConicalGradient::GreatWhale,
TeenNotebook = QConicalGradient::TeenNotebook,
PoliteRumors = QConicalGradient::PoliteRumors,
SweetPeriod = QConicalGradient::SweetPeriod,
WideMatrix = QConicalGradient::WideMatrix,
SoftCherish = QConicalGradient::SoftCherish,
RedSalvation = QConicalGradient::RedSalvation,
BurningSpring = QConicalGradient::BurningSpring,
NightParty = QConicalGradient::NightParty,
SkyGlider = QConicalGradient::SkyGlider,
HeavenPeach = QConicalGradient::HeavenPeach,
PurpleDivision = QConicalGradient::PurpleDivision,
AquaSplash = QConicalGradient::AquaSplash,
SpikyNaga = QConicalGradient::SpikyNaga,
LoveKiss = QConicalGradient::LoveKiss,
CleanMirror = QConicalGradient::CleanMirror,
PremiumDark = QConicalGradient::PremiumDark,
ColdEvening = QConicalGradient::ColdEvening,
CochitiLake = QConicalGradient::CochitiLake,
SummerGames = QConicalGradient::SummerGames,
PassionateBed = QConicalGradient::PassionateBed,
MountainRock = QConicalGradient::MountainRock,
DesertHump = QConicalGradient::DesertHump,
JungleDay = QConicalGradient::JungleDay,
PhoenixStart = QConicalGradient::PhoenixStart,
OctoberSilence = QConicalGradient::OctoberSilence,
FarawayRiver = QConicalGradient::FarawayRiver,
AlchemistLab = QConicalGradient::AlchemistLab,
OverSun = QConicalGradient::OverSun,
PremiumWhite = QConicalGradient::PremiumWhite,
MarsParty = QConicalGradient::MarsParty,
EternalConstance = QConicalGradient::EternalConstance,
JapanBlush = QConicalGradient::JapanBlush,
SmilingRain = QConicalGradient::SmilingRain,
CloudyApple = QConicalGradient::CloudyApple,
BigMango = QConicalGradient::BigMango,
HealthyWater = QConicalGradient::HealthyWater,
AmourAmour = QConicalGradient::AmourAmour,
RiskyConcrete = QConicalGradient::RiskyConcrete,
StrongStick = QConicalGradient::StrongStick,
ViciousStance = QConicalGradient::ViciousStance,
PaloAlto = QConicalGradient::PaloAlto,
HappyMemories = QConicalGradient::HappyMemories,
MidnightBloom = QConicalGradient::MidnightBloom,
Crystalline = QConicalGradient::Crystalline,
PartyBliss = QConicalGradient::PartyBliss,
ConfidentCloud = QConicalGradient::ConfidentCloud,
LeCocktail = QConicalGradient::LeCocktail,
RiverCity = QConicalGradient::RiverCity,
FrozenBerry = QConicalGradient::FrozenBerry,
ChildCare = QConicalGradient::ChildCare,
FlyingLemon = QConicalGradient::FlyingLemon,
NewRetrowave = QConicalGradient::NewRetrowave,
HiddenJaguar = QConicalGradient::HiddenJaguar,
AboveTheSky = QConicalGradient::AboveTheSky,
Nega = QConicalGradient::Nega,
DenseWater = QConicalGradient::DenseWater,
Seashore = QConicalGradient::Seashore,
MarbleWall = QConicalGradient::MarbleWall,
CheerfulCaramel = QConicalGradient::CheerfulCaramel,
NightSky = QConicalGradient::NightSky,
MagicLake = QConicalGradient::MagicLake,
YoungGrass = QConicalGradient::YoungGrass,
ColorfulPeach = QConicalGradient::ColorfulPeach,
GentleCare = QConicalGradient::GentleCare,
PlumBath = QConicalGradient::PlumBath,
HappyUnicorn = QConicalGradient::HappyUnicorn,
AfricanField = QConicalGradient::AfricanField,
SolidStone = QConicalGradient::SolidStone,
OrangeJuice = QConicalGradient::OrangeJuice,
GlassWater = QConicalGradient::GlassWater,
NorthMiracle = QConicalGradient::NorthMiracle,
FruitBlend = QConicalGradient::FruitBlend,
MillenniumPine = QConicalGradient::MillenniumPine,
HighFlight = QConicalGradient::HighFlight,
MoleHall = QConicalGradient::MoleHall,
SpaceShift = QConicalGradient::SpaceShift,
ForestInei = QConicalGradient::ForestInei,
RoyalGarden = QConicalGradient::RoyalGarden,
RichMetal = QConicalGradient::RichMetal,
JuicyCake = QConicalGradient::JuicyCake,
SmartIndigo = QConicalGradient::SmartIndigo,
SandStrike = QConicalGradient::SandStrike,
NorseBeauty = QConicalGradient::NorseBeauty,
AquaGuidance = QConicalGradient::AquaGuidance,
SunVeggie = QConicalGradient::SunVeggie,
SeaLord = QConicalGradient::SeaLord,
BlackSea = QConicalGradient::BlackSea,
GrassShampoo = QConicalGradient::GrassShampoo,
LandingAircraft = QConicalGradient::LandingAircraft,
WitchDance = QConicalGradient::WitchDance,
SleeplessNight = QConicalGradient::SleeplessNight,
AngelCare = QConicalGradient::AngelCare,
CrystalRiver = QConicalGradient::CrystalRiver,
SoftLipstick = QConicalGradient::SoftLipstick,
SaltMountain = QConicalGradient::SaltMountain,
PerfectWhite = QConicalGradient::PerfectWhite,
FreshOasis = QConicalGradient::FreshOasis,
StrictNovember = QConicalGradient::StrictNovember,
MorningSalad = QConicalGradient::MorningSalad,
DeepRelief = QConicalGradient::DeepRelief,
SeaStrike = QConicalGradient::SeaStrike,
NightCall = QConicalGradient::NightCall,
SupremeSky = QConicalGradient::SupremeSky,
LightBlue = QConicalGradient::LightBlue,
MindCrawl = QConicalGradient::MindCrawl,
LilyMeadow = QConicalGradient::LilyMeadow,
SugarLollipop = QConicalGradient::SugarLollipop,
SweetDessert = QConicalGradient::SweetDessert,
MagicRay = QConicalGradient::MagicRay,
TeenParty = QConicalGradient::TeenParty,
FrozenHeat = QConicalGradient::FrozenHeat,
GagarinView = QConicalGradient::GagarinView,
FabledSunset = QConicalGradient::FabledSunset,
PerfectBlue = QConicalGradient::PerfectBlue,
NumPresets = QConicalGradient::NumPresets,

  };
  Q_ENUM(Preset)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QConicalGradient_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QConicalGradient_Wrapper(RJSApi& h, QConicalGradient* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QConicalGradient_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QConicalGradient
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QConicalGradient_Wrapper
                
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
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QConicalGradient
    // Function: type
    // Source: QGradient
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
            
    // Class: QConicalGradient
    // Function: setSpread
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSpread
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QConicalGradient
    // Function: spread
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spread
              (

                
              )
              
                const
              
              ;
            
    // Class: QConicalGradient
    // Function: setColorAt
    // Source: QGradient
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColorAt
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
            
    // Class: QConicalGradient
    // Function: coordinateMode
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  coordinateMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QConicalGradient
    // Function: setCoordinateMode
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCoordinateMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QConicalGradient
    // Function: interpolationMode
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  interpolationMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QConicalGradient
    // Function: setInterpolationMode
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setInterpolationMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QConicalGradient
    // Function: center
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  center
              (

                
              )
              
                const
              
              ;
            
    // Class: QConicalGradient
    // Function: setCenter
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCenter
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
            
    // Class: QConicalGradient
    // Function: angle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  angle
              (

                
              )
              
                const
              
              ;
            
    // Class: QConicalGradient
    // Function: setAngle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAngle
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
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QConicalGradient::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QConicalGradient* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QConicalGradient* getWrapped() const {
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
        QConicalGradient* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QConicalGradient*> basecasters_QConicalGradient;

      public:
        static void registerBasecaster_QConicalGradient(RJSBasecaster_QConicalGradient* bc) {
          basecasters_QConicalGradient.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QConicalGradient_Wrapper*)

    Q_DECLARE_INTERFACE(QConicalGradient_Wrapper, "org.qcad.QConicalGradient_Wrapper")

  
  #endif
  
