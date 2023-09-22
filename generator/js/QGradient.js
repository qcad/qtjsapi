
      // auto generated
      //var self;

      // class constructor:
      function QGradient() {
        

        // should be QGradient_BaseJs.call(this, engine):
        //QGradient.prototype = new QGradient_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QGradient.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QGradient);
            //}
          }
          else {
            qWarning("QGradient.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QGradient_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QGradient);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGradient);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QGradient_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QGradient);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGradient);
  }

  
  else {
    
        print("QGradient(): wrong number / type of arguments");
      
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

      //QGradient.prototype = new QGradient_BaseJs(engine);
      //QGradient.prototype = new QGradient_Wrapper(engine);
      QGradient.prototype = new Object();

      QGradient.prototype.toString = function() {
          //return "QGradient [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QGradient [JS]";
        };
      QGradient.getObjectType = function() {
        
            return RJSType_QGradient.getIdStatic();
          
      };

      QGradient.prototype.getObjectType = function() {
        
            return RJSType_QGradient.getIdStatic();
          
      };

      QGradient.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QGradient.getIdStatic()) {
              return true;
            }
          

        return false;


        
      };

      // enum values:
      
  // enum: Type
QGradient.LinearGradient = QGradient_Wrapper.LinearGradient;
QGradient.RadialGradient = QGradient_Wrapper.RadialGradient;
QGradient.ConicalGradient = QGradient_Wrapper.ConicalGradient;
QGradient.NoGradient = QGradient_Wrapper.NoGradient;

  // enum: Spread
QGradient.PadSpread = QGradient_Wrapper.PadSpread;
QGradient.ReflectSpread = QGradient_Wrapper.ReflectSpread;
QGradient.RepeatSpread = QGradient_Wrapper.RepeatSpread;

  // enum: CoordinateMode
QGradient.LogicalMode = QGradient_Wrapper.LogicalMode;
QGradient.StretchToDeviceMode = QGradient_Wrapper.StretchToDeviceMode;
QGradient.ObjectBoundingMode = QGradient_Wrapper.ObjectBoundingMode;
QGradient.ObjectMode = QGradient_Wrapper.ObjectMode;

  // enum: InterpolationMode
QGradient.ColorInterpolation = QGradient_Wrapper.ColorInterpolation;
QGradient.ComponentInterpolation = QGradient_Wrapper.ComponentInterpolation;

  // enum: Preset
QGradient.WarmFlame = QGradient_Wrapper.WarmFlame;
QGradient.NightFade = QGradient_Wrapper.NightFade;
QGradient.SpringWarmth = QGradient_Wrapper.SpringWarmth;
QGradient.JuicyPeach = QGradient_Wrapper.JuicyPeach;
QGradient.YoungPassion = QGradient_Wrapper.YoungPassion;
QGradient.LadyLips = QGradient_Wrapper.LadyLips;
QGradient.SunnyMorning = QGradient_Wrapper.SunnyMorning;
QGradient.RainyAshville = QGradient_Wrapper.RainyAshville;
QGradient.FrozenDreams = QGradient_Wrapper.FrozenDreams;
QGradient.WinterNeva = QGradient_Wrapper.WinterNeva;
QGradient.DustyGrass = QGradient_Wrapper.DustyGrass;
QGradient.TemptingAzure = QGradient_Wrapper.TemptingAzure;
QGradient.HeavyRain = QGradient_Wrapper.HeavyRain;
QGradient.AmyCrisp = QGradient_Wrapper.AmyCrisp;
QGradient.MeanFruit = QGradient_Wrapper.MeanFruit;
QGradient.DeepBlue = QGradient_Wrapper.DeepBlue;
QGradient.RipeMalinka = QGradient_Wrapper.RipeMalinka;
QGradient.CloudyKnoxville = QGradient_Wrapper.CloudyKnoxville;
QGradient.MalibuBeach = QGradient_Wrapper.MalibuBeach;
QGradient.NewLife = QGradient_Wrapper.NewLife;
QGradient.TrueSunset = QGradient_Wrapper.TrueSunset;
QGradient.MorpheusDen = QGradient_Wrapper.MorpheusDen;
QGradient.RareWind = QGradient_Wrapper.RareWind;
QGradient.NearMoon = QGradient_Wrapper.NearMoon;
QGradient.WildApple = QGradient_Wrapper.WildApple;
QGradient.SaintPetersburg = QGradient_Wrapper.SaintPetersburg;
QGradient.PlumPlate = QGradient_Wrapper.PlumPlate;
QGradient.EverlastingSky = QGradient_Wrapper.EverlastingSky;
QGradient.HappyFisher = QGradient_Wrapper.HappyFisher;
QGradient.Blessing = QGradient_Wrapper.Blessing;
QGradient.SharpeyeEagle = QGradient_Wrapper.SharpeyeEagle;
QGradient.LadogaBottom = QGradient_Wrapper.LadogaBottom;
QGradient.LemonGate = QGradient_Wrapper.LemonGate;
QGradient.ItmeoBranding = QGradient_Wrapper.ItmeoBranding;
QGradient.ZeusMiracle = QGradient_Wrapper.ZeusMiracle;
QGradient.OldHat = QGradient_Wrapper.OldHat;
QGradient.StarWine = QGradient_Wrapper.StarWine;
QGradient.HappyAcid = QGradient_Wrapper.HappyAcid;
QGradient.AwesomePine = QGradient_Wrapper.AwesomePine;
QGradient.NewYork = QGradient_Wrapper.NewYork;
QGradient.ShyRainbow = QGradient_Wrapper.ShyRainbow;
QGradient.MixedHopes = QGradient_Wrapper.MixedHopes;
QGradient.FlyHigh = QGradient_Wrapper.FlyHigh;
QGradient.StrongBliss = QGradient_Wrapper.StrongBliss;
QGradient.FreshMilk = QGradient_Wrapper.FreshMilk;
QGradient.SnowAgain = QGradient_Wrapper.SnowAgain;
QGradient.FebruaryInk = QGradient_Wrapper.FebruaryInk;
QGradient.KindSteel = QGradient_Wrapper.KindSteel;
QGradient.SoftGrass = QGradient_Wrapper.SoftGrass;
QGradient.GrownEarly = QGradient_Wrapper.GrownEarly;
QGradient.SharpBlues = QGradient_Wrapper.SharpBlues;
QGradient.ShadyWater = QGradient_Wrapper.ShadyWater;
QGradient.DirtyBeauty = QGradient_Wrapper.DirtyBeauty;
QGradient.GreatWhale = QGradient_Wrapper.GreatWhale;
QGradient.TeenNotebook = QGradient_Wrapper.TeenNotebook;
QGradient.PoliteRumors = QGradient_Wrapper.PoliteRumors;
QGradient.SweetPeriod = QGradient_Wrapper.SweetPeriod;
QGradient.WideMatrix = QGradient_Wrapper.WideMatrix;
QGradient.SoftCherish = QGradient_Wrapper.SoftCherish;
QGradient.RedSalvation = QGradient_Wrapper.RedSalvation;
QGradient.BurningSpring = QGradient_Wrapper.BurningSpring;
QGradient.NightParty = QGradient_Wrapper.NightParty;
QGradient.SkyGlider = QGradient_Wrapper.SkyGlider;
QGradient.HeavenPeach = QGradient_Wrapper.HeavenPeach;
QGradient.PurpleDivision = QGradient_Wrapper.PurpleDivision;
QGradient.AquaSplash = QGradient_Wrapper.AquaSplash;
QGradient.SpikyNaga = QGradient_Wrapper.SpikyNaga;
QGradient.LoveKiss = QGradient_Wrapper.LoveKiss;
QGradient.CleanMirror = QGradient_Wrapper.CleanMirror;
QGradient.PremiumDark = QGradient_Wrapper.PremiumDark;
QGradient.ColdEvening = QGradient_Wrapper.ColdEvening;
QGradient.CochitiLake = QGradient_Wrapper.CochitiLake;
QGradient.SummerGames = QGradient_Wrapper.SummerGames;
QGradient.PassionateBed = QGradient_Wrapper.PassionateBed;
QGradient.MountainRock = QGradient_Wrapper.MountainRock;
QGradient.DesertHump = QGradient_Wrapper.DesertHump;
QGradient.JungleDay = QGradient_Wrapper.JungleDay;
QGradient.PhoenixStart = QGradient_Wrapper.PhoenixStart;
QGradient.OctoberSilence = QGradient_Wrapper.OctoberSilence;
QGradient.FarawayRiver = QGradient_Wrapper.FarawayRiver;
QGradient.AlchemistLab = QGradient_Wrapper.AlchemistLab;
QGradient.OverSun = QGradient_Wrapper.OverSun;
QGradient.PremiumWhite = QGradient_Wrapper.PremiumWhite;
QGradient.MarsParty = QGradient_Wrapper.MarsParty;
QGradient.EternalConstance = QGradient_Wrapper.EternalConstance;
QGradient.JapanBlush = QGradient_Wrapper.JapanBlush;
QGradient.SmilingRain = QGradient_Wrapper.SmilingRain;
QGradient.CloudyApple = QGradient_Wrapper.CloudyApple;
QGradient.BigMango = QGradient_Wrapper.BigMango;
QGradient.HealthyWater = QGradient_Wrapper.HealthyWater;
QGradient.AmourAmour = QGradient_Wrapper.AmourAmour;
QGradient.RiskyConcrete = QGradient_Wrapper.RiskyConcrete;
QGradient.StrongStick = QGradient_Wrapper.StrongStick;
QGradient.ViciousStance = QGradient_Wrapper.ViciousStance;
QGradient.PaloAlto = QGradient_Wrapper.PaloAlto;
QGradient.HappyMemories = QGradient_Wrapper.HappyMemories;
QGradient.MidnightBloom = QGradient_Wrapper.MidnightBloom;
QGradient.Crystalline = QGradient_Wrapper.Crystalline;
QGradient.PartyBliss = QGradient_Wrapper.PartyBliss;
QGradient.ConfidentCloud = QGradient_Wrapper.ConfidentCloud;
QGradient.LeCocktail = QGradient_Wrapper.LeCocktail;
QGradient.RiverCity = QGradient_Wrapper.RiverCity;
QGradient.FrozenBerry = QGradient_Wrapper.FrozenBerry;
QGradient.ChildCare = QGradient_Wrapper.ChildCare;
QGradient.FlyingLemon = QGradient_Wrapper.FlyingLemon;
QGradient.NewRetrowave = QGradient_Wrapper.NewRetrowave;
QGradient.HiddenJaguar = QGradient_Wrapper.HiddenJaguar;
QGradient.AboveTheSky = QGradient_Wrapper.AboveTheSky;
QGradient.Nega = QGradient_Wrapper.Nega;
QGradient.DenseWater = QGradient_Wrapper.DenseWater;
QGradient.Seashore = QGradient_Wrapper.Seashore;
QGradient.MarbleWall = QGradient_Wrapper.MarbleWall;
QGradient.CheerfulCaramel = QGradient_Wrapper.CheerfulCaramel;
QGradient.NightSky = QGradient_Wrapper.NightSky;
QGradient.MagicLake = QGradient_Wrapper.MagicLake;
QGradient.YoungGrass = QGradient_Wrapper.YoungGrass;
QGradient.ColorfulPeach = QGradient_Wrapper.ColorfulPeach;
QGradient.GentleCare = QGradient_Wrapper.GentleCare;
QGradient.PlumBath = QGradient_Wrapper.PlumBath;
QGradient.HappyUnicorn = QGradient_Wrapper.HappyUnicorn;
QGradient.AfricanField = QGradient_Wrapper.AfricanField;
QGradient.SolidStone = QGradient_Wrapper.SolidStone;
QGradient.OrangeJuice = QGradient_Wrapper.OrangeJuice;
QGradient.GlassWater = QGradient_Wrapper.GlassWater;
QGradient.NorthMiracle = QGradient_Wrapper.NorthMiracle;
QGradient.FruitBlend = QGradient_Wrapper.FruitBlend;
QGradient.MillenniumPine = QGradient_Wrapper.MillenniumPine;
QGradient.HighFlight = QGradient_Wrapper.HighFlight;
QGradient.MoleHall = QGradient_Wrapper.MoleHall;
QGradient.SpaceShift = QGradient_Wrapper.SpaceShift;
QGradient.ForestInei = QGradient_Wrapper.ForestInei;
QGradient.RoyalGarden = QGradient_Wrapper.RoyalGarden;
QGradient.RichMetal = QGradient_Wrapper.RichMetal;
QGradient.JuicyCake = QGradient_Wrapper.JuicyCake;
QGradient.SmartIndigo = QGradient_Wrapper.SmartIndigo;
QGradient.SandStrike = QGradient_Wrapper.SandStrike;
QGradient.NorseBeauty = QGradient_Wrapper.NorseBeauty;
QGradient.AquaGuidance = QGradient_Wrapper.AquaGuidance;
QGradient.SunVeggie = QGradient_Wrapper.SunVeggie;
QGradient.SeaLord = QGradient_Wrapper.SeaLord;
QGradient.BlackSea = QGradient_Wrapper.BlackSea;
QGradient.GrassShampoo = QGradient_Wrapper.GrassShampoo;
QGradient.LandingAircraft = QGradient_Wrapper.LandingAircraft;
QGradient.WitchDance = QGradient_Wrapper.WitchDance;
QGradient.SleeplessNight = QGradient_Wrapper.SleeplessNight;
QGradient.AngelCare = QGradient_Wrapper.AngelCare;
QGradient.CrystalRiver = QGradient_Wrapper.CrystalRiver;
QGradient.SoftLipstick = QGradient_Wrapper.SoftLipstick;
QGradient.SaltMountain = QGradient_Wrapper.SaltMountain;
QGradient.PerfectWhite = QGradient_Wrapper.PerfectWhite;
QGradient.FreshOasis = QGradient_Wrapper.FreshOasis;
QGradient.StrictNovember = QGradient_Wrapper.StrictNovember;
QGradient.MorningSalad = QGradient_Wrapper.MorningSalad;
QGradient.DeepRelief = QGradient_Wrapper.DeepRelief;
QGradient.SeaStrike = QGradient_Wrapper.SeaStrike;
QGradient.NightCall = QGradient_Wrapper.NightCall;
QGradient.SupremeSky = QGradient_Wrapper.SupremeSky;
QGradient.LightBlue = QGradient_Wrapper.LightBlue;
QGradient.MindCrawl = QGradient_Wrapper.MindCrawl;
QGradient.LilyMeadow = QGradient_Wrapper.LilyMeadow;
QGradient.SugarLollipop = QGradient_Wrapper.SugarLollipop;
QGradient.SweetDessert = QGradient_Wrapper.SweetDessert;
QGradient.MagicRay = QGradient_Wrapper.MagicRay;
QGradient.TeenParty = QGradient_Wrapper.TeenParty;
QGradient.FrozenHeat = QGradient_Wrapper.FrozenHeat;
QGradient.GagarinView = QGradient_Wrapper.GagarinView;
QGradient.FabledSunset = QGradient_Wrapper.FabledSunset;
QGradient.PerfectBlue = QGradient_Wrapper.PerfectBlue;
QGradient.NumPresets = QGradient_Wrapper.NumPresets;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGradient.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGradient.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    