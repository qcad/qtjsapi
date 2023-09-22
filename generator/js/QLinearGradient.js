
      // auto generated
      //var self;

      // class constructor:
      function QLinearGradient() {
        

        // should be QLinearGradient_BaseJs.call(this, engine):
        //QLinearGradient.prototype = new QLinearGradient_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QLinearGradient.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QLinearGradient);
            //}
          }
          else {
            qWarning("QLinearGradient.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QLinearGradient_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QLinearGradient);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLinearGradient);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QLinearGradient_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QLinearGradient);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLinearGradient);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QLinearGradient_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QLinearGradient);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLinearGradient);
  }

  
  else {
    
        print("QLinearGradient(): wrong number / type of arguments");
      
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

      //QLinearGradient.prototype = new QLinearGradient_BaseJs(engine);
      //QLinearGradient.prototype = new QLinearGradient_Wrapper(engine);
      QLinearGradient.prototype = new Object();

      QLinearGradient.prototype.toString = function() {
          //return "QLinearGradient [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QLinearGradient [JS]";
        };
      QLinearGradient.getObjectType = function() {
        
            return RJSType_QLinearGradient.getIdStatic();
          
      };

      QLinearGradient.prototype.getObjectType = function() {
        
            return RJSType_QLinearGradient.getIdStatic();
          
      };

      QLinearGradient.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QLinearGradient.getIdStatic()) {
              return true;
            }
          
          if (t===RJSType_QGradient.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
QLinearGradient.LinearGradient = QLinearGradient_Wrapper.LinearGradient;
QLinearGradient.RadialGradient = QLinearGradient_Wrapper.RadialGradient;
QLinearGradient.ConicalGradient = QLinearGradient_Wrapper.ConicalGradient;
QLinearGradient.NoGradient = QLinearGradient_Wrapper.NoGradient;

  // enum: Spread
QLinearGradient.PadSpread = QLinearGradient_Wrapper.PadSpread;
QLinearGradient.ReflectSpread = QLinearGradient_Wrapper.ReflectSpread;
QLinearGradient.RepeatSpread = QLinearGradient_Wrapper.RepeatSpread;

  // enum: CoordinateMode
QLinearGradient.LogicalMode = QLinearGradient_Wrapper.LogicalMode;
QLinearGradient.StretchToDeviceMode = QLinearGradient_Wrapper.StretchToDeviceMode;
QLinearGradient.ObjectBoundingMode = QLinearGradient_Wrapper.ObjectBoundingMode;
QLinearGradient.ObjectMode = QLinearGradient_Wrapper.ObjectMode;

  // enum: InterpolationMode
QLinearGradient.ColorInterpolation = QLinearGradient_Wrapper.ColorInterpolation;
QLinearGradient.ComponentInterpolation = QLinearGradient_Wrapper.ComponentInterpolation;

  // enum: Preset
QLinearGradient.WarmFlame = QLinearGradient_Wrapper.WarmFlame;
QLinearGradient.NightFade = QLinearGradient_Wrapper.NightFade;
QLinearGradient.SpringWarmth = QLinearGradient_Wrapper.SpringWarmth;
QLinearGradient.JuicyPeach = QLinearGradient_Wrapper.JuicyPeach;
QLinearGradient.YoungPassion = QLinearGradient_Wrapper.YoungPassion;
QLinearGradient.LadyLips = QLinearGradient_Wrapper.LadyLips;
QLinearGradient.SunnyMorning = QLinearGradient_Wrapper.SunnyMorning;
QLinearGradient.RainyAshville = QLinearGradient_Wrapper.RainyAshville;
QLinearGradient.FrozenDreams = QLinearGradient_Wrapper.FrozenDreams;
QLinearGradient.WinterNeva = QLinearGradient_Wrapper.WinterNeva;
QLinearGradient.DustyGrass = QLinearGradient_Wrapper.DustyGrass;
QLinearGradient.TemptingAzure = QLinearGradient_Wrapper.TemptingAzure;
QLinearGradient.HeavyRain = QLinearGradient_Wrapper.HeavyRain;
QLinearGradient.AmyCrisp = QLinearGradient_Wrapper.AmyCrisp;
QLinearGradient.MeanFruit = QLinearGradient_Wrapper.MeanFruit;
QLinearGradient.DeepBlue = QLinearGradient_Wrapper.DeepBlue;
QLinearGradient.RipeMalinka = QLinearGradient_Wrapper.RipeMalinka;
QLinearGradient.CloudyKnoxville = QLinearGradient_Wrapper.CloudyKnoxville;
QLinearGradient.MalibuBeach = QLinearGradient_Wrapper.MalibuBeach;
QLinearGradient.NewLife = QLinearGradient_Wrapper.NewLife;
QLinearGradient.TrueSunset = QLinearGradient_Wrapper.TrueSunset;
QLinearGradient.MorpheusDen = QLinearGradient_Wrapper.MorpheusDen;
QLinearGradient.RareWind = QLinearGradient_Wrapper.RareWind;
QLinearGradient.NearMoon = QLinearGradient_Wrapper.NearMoon;
QLinearGradient.WildApple = QLinearGradient_Wrapper.WildApple;
QLinearGradient.SaintPetersburg = QLinearGradient_Wrapper.SaintPetersburg;
QLinearGradient.PlumPlate = QLinearGradient_Wrapper.PlumPlate;
QLinearGradient.EverlastingSky = QLinearGradient_Wrapper.EverlastingSky;
QLinearGradient.HappyFisher = QLinearGradient_Wrapper.HappyFisher;
QLinearGradient.Blessing = QLinearGradient_Wrapper.Blessing;
QLinearGradient.SharpeyeEagle = QLinearGradient_Wrapper.SharpeyeEagle;
QLinearGradient.LadogaBottom = QLinearGradient_Wrapper.LadogaBottom;
QLinearGradient.LemonGate = QLinearGradient_Wrapper.LemonGate;
QLinearGradient.ItmeoBranding = QLinearGradient_Wrapper.ItmeoBranding;
QLinearGradient.ZeusMiracle = QLinearGradient_Wrapper.ZeusMiracle;
QLinearGradient.OldHat = QLinearGradient_Wrapper.OldHat;
QLinearGradient.StarWine = QLinearGradient_Wrapper.StarWine;
QLinearGradient.HappyAcid = QLinearGradient_Wrapper.HappyAcid;
QLinearGradient.AwesomePine = QLinearGradient_Wrapper.AwesomePine;
QLinearGradient.NewYork = QLinearGradient_Wrapper.NewYork;
QLinearGradient.ShyRainbow = QLinearGradient_Wrapper.ShyRainbow;
QLinearGradient.MixedHopes = QLinearGradient_Wrapper.MixedHopes;
QLinearGradient.FlyHigh = QLinearGradient_Wrapper.FlyHigh;
QLinearGradient.StrongBliss = QLinearGradient_Wrapper.StrongBliss;
QLinearGradient.FreshMilk = QLinearGradient_Wrapper.FreshMilk;
QLinearGradient.SnowAgain = QLinearGradient_Wrapper.SnowAgain;
QLinearGradient.FebruaryInk = QLinearGradient_Wrapper.FebruaryInk;
QLinearGradient.KindSteel = QLinearGradient_Wrapper.KindSteel;
QLinearGradient.SoftGrass = QLinearGradient_Wrapper.SoftGrass;
QLinearGradient.GrownEarly = QLinearGradient_Wrapper.GrownEarly;
QLinearGradient.SharpBlues = QLinearGradient_Wrapper.SharpBlues;
QLinearGradient.ShadyWater = QLinearGradient_Wrapper.ShadyWater;
QLinearGradient.DirtyBeauty = QLinearGradient_Wrapper.DirtyBeauty;
QLinearGradient.GreatWhale = QLinearGradient_Wrapper.GreatWhale;
QLinearGradient.TeenNotebook = QLinearGradient_Wrapper.TeenNotebook;
QLinearGradient.PoliteRumors = QLinearGradient_Wrapper.PoliteRumors;
QLinearGradient.SweetPeriod = QLinearGradient_Wrapper.SweetPeriod;
QLinearGradient.WideMatrix = QLinearGradient_Wrapper.WideMatrix;
QLinearGradient.SoftCherish = QLinearGradient_Wrapper.SoftCherish;
QLinearGradient.RedSalvation = QLinearGradient_Wrapper.RedSalvation;
QLinearGradient.BurningSpring = QLinearGradient_Wrapper.BurningSpring;
QLinearGradient.NightParty = QLinearGradient_Wrapper.NightParty;
QLinearGradient.SkyGlider = QLinearGradient_Wrapper.SkyGlider;
QLinearGradient.HeavenPeach = QLinearGradient_Wrapper.HeavenPeach;
QLinearGradient.PurpleDivision = QLinearGradient_Wrapper.PurpleDivision;
QLinearGradient.AquaSplash = QLinearGradient_Wrapper.AquaSplash;
QLinearGradient.SpikyNaga = QLinearGradient_Wrapper.SpikyNaga;
QLinearGradient.LoveKiss = QLinearGradient_Wrapper.LoveKiss;
QLinearGradient.CleanMirror = QLinearGradient_Wrapper.CleanMirror;
QLinearGradient.PremiumDark = QLinearGradient_Wrapper.PremiumDark;
QLinearGradient.ColdEvening = QLinearGradient_Wrapper.ColdEvening;
QLinearGradient.CochitiLake = QLinearGradient_Wrapper.CochitiLake;
QLinearGradient.SummerGames = QLinearGradient_Wrapper.SummerGames;
QLinearGradient.PassionateBed = QLinearGradient_Wrapper.PassionateBed;
QLinearGradient.MountainRock = QLinearGradient_Wrapper.MountainRock;
QLinearGradient.DesertHump = QLinearGradient_Wrapper.DesertHump;
QLinearGradient.JungleDay = QLinearGradient_Wrapper.JungleDay;
QLinearGradient.PhoenixStart = QLinearGradient_Wrapper.PhoenixStart;
QLinearGradient.OctoberSilence = QLinearGradient_Wrapper.OctoberSilence;
QLinearGradient.FarawayRiver = QLinearGradient_Wrapper.FarawayRiver;
QLinearGradient.AlchemistLab = QLinearGradient_Wrapper.AlchemistLab;
QLinearGradient.OverSun = QLinearGradient_Wrapper.OverSun;
QLinearGradient.PremiumWhite = QLinearGradient_Wrapper.PremiumWhite;
QLinearGradient.MarsParty = QLinearGradient_Wrapper.MarsParty;
QLinearGradient.EternalConstance = QLinearGradient_Wrapper.EternalConstance;
QLinearGradient.JapanBlush = QLinearGradient_Wrapper.JapanBlush;
QLinearGradient.SmilingRain = QLinearGradient_Wrapper.SmilingRain;
QLinearGradient.CloudyApple = QLinearGradient_Wrapper.CloudyApple;
QLinearGradient.BigMango = QLinearGradient_Wrapper.BigMango;
QLinearGradient.HealthyWater = QLinearGradient_Wrapper.HealthyWater;
QLinearGradient.AmourAmour = QLinearGradient_Wrapper.AmourAmour;
QLinearGradient.RiskyConcrete = QLinearGradient_Wrapper.RiskyConcrete;
QLinearGradient.StrongStick = QLinearGradient_Wrapper.StrongStick;
QLinearGradient.ViciousStance = QLinearGradient_Wrapper.ViciousStance;
QLinearGradient.PaloAlto = QLinearGradient_Wrapper.PaloAlto;
QLinearGradient.HappyMemories = QLinearGradient_Wrapper.HappyMemories;
QLinearGradient.MidnightBloom = QLinearGradient_Wrapper.MidnightBloom;
QLinearGradient.Crystalline = QLinearGradient_Wrapper.Crystalline;
QLinearGradient.PartyBliss = QLinearGradient_Wrapper.PartyBliss;
QLinearGradient.ConfidentCloud = QLinearGradient_Wrapper.ConfidentCloud;
QLinearGradient.LeCocktail = QLinearGradient_Wrapper.LeCocktail;
QLinearGradient.RiverCity = QLinearGradient_Wrapper.RiverCity;
QLinearGradient.FrozenBerry = QLinearGradient_Wrapper.FrozenBerry;
QLinearGradient.ChildCare = QLinearGradient_Wrapper.ChildCare;
QLinearGradient.FlyingLemon = QLinearGradient_Wrapper.FlyingLemon;
QLinearGradient.NewRetrowave = QLinearGradient_Wrapper.NewRetrowave;
QLinearGradient.HiddenJaguar = QLinearGradient_Wrapper.HiddenJaguar;
QLinearGradient.AboveTheSky = QLinearGradient_Wrapper.AboveTheSky;
QLinearGradient.Nega = QLinearGradient_Wrapper.Nega;
QLinearGradient.DenseWater = QLinearGradient_Wrapper.DenseWater;
QLinearGradient.Seashore = QLinearGradient_Wrapper.Seashore;
QLinearGradient.MarbleWall = QLinearGradient_Wrapper.MarbleWall;
QLinearGradient.CheerfulCaramel = QLinearGradient_Wrapper.CheerfulCaramel;
QLinearGradient.NightSky = QLinearGradient_Wrapper.NightSky;
QLinearGradient.MagicLake = QLinearGradient_Wrapper.MagicLake;
QLinearGradient.YoungGrass = QLinearGradient_Wrapper.YoungGrass;
QLinearGradient.ColorfulPeach = QLinearGradient_Wrapper.ColorfulPeach;
QLinearGradient.GentleCare = QLinearGradient_Wrapper.GentleCare;
QLinearGradient.PlumBath = QLinearGradient_Wrapper.PlumBath;
QLinearGradient.HappyUnicorn = QLinearGradient_Wrapper.HappyUnicorn;
QLinearGradient.AfricanField = QLinearGradient_Wrapper.AfricanField;
QLinearGradient.SolidStone = QLinearGradient_Wrapper.SolidStone;
QLinearGradient.OrangeJuice = QLinearGradient_Wrapper.OrangeJuice;
QLinearGradient.GlassWater = QLinearGradient_Wrapper.GlassWater;
QLinearGradient.NorthMiracle = QLinearGradient_Wrapper.NorthMiracle;
QLinearGradient.FruitBlend = QLinearGradient_Wrapper.FruitBlend;
QLinearGradient.MillenniumPine = QLinearGradient_Wrapper.MillenniumPine;
QLinearGradient.HighFlight = QLinearGradient_Wrapper.HighFlight;
QLinearGradient.MoleHall = QLinearGradient_Wrapper.MoleHall;
QLinearGradient.SpaceShift = QLinearGradient_Wrapper.SpaceShift;
QLinearGradient.ForestInei = QLinearGradient_Wrapper.ForestInei;
QLinearGradient.RoyalGarden = QLinearGradient_Wrapper.RoyalGarden;
QLinearGradient.RichMetal = QLinearGradient_Wrapper.RichMetal;
QLinearGradient.JuicyCake = QLinearGradient_Wrapper.JuicyCake;
QLinearGradient.SmartIndigo = QLinearGradient_Wrapper.SmartIndigo;
QLinearGradient.SandStrike = QLinearGradient_Wrapper.SandStrike;
QLinearGradient.NorseBeauty = QLinearGradient_Wrapper.NorseBeauty;
QLinearGradient.AquaGuidance = QLinearGradient_Wrapper.AquaGuidance;
QLinearGradient.SunVeggie = QLinearGradient_Wrapper.SunVeggie;
QLinearGradient.SeaLord = QLinearGradient_Wrapper.SeaLord;
QLinearGradient.BlackSea = QLinearGradient_Wrapper.BlackSea;
QLinearGradient.GrassShampoo = QLinearGradient_Wrapper.GrassShampoo;
QLinearGradient.LandingAircraft = QLinearGradient_Wrapper.LandingAircraft;
QLinearGradient.WitchDance = QLinearGradient_Wrapper.WitchDance;
QLinearGradient.SleeplessNight = QLinearGradient_Wrapper.SleeplessNight;
QLinearGradient.AngelCare = QLinearGradient_Wrapper.AngelCare;
QLinearGradient.CrystalRiver = QLinearGradient_Wrapper.CrystalRiver;
QLinearGradient.SoftLipstick = QLinearGradient_Wrapper.SoftLipstick;
QLinearGradient.SaltMountain = QLinearGradient_Wrapper.SaltMountain;
QLinearGradient.PerfectWhite = QLinearGradient_Wrapper.PerfectWhite;
QLinearGradient.FreshOasis = QLinearGradient_Wrapper.FreshOasis;
QLinearGradient.StrictNovember = QLinearGradient_Wrapper.StrictNovember;
QLinearGradient.MorningSalad = QLinearGradient_Wrapper.MorningSalad;
QLinearGradient.DeepRelief = QLinearGradient_Wrapper.DeepRelief;
QLinearGradient.SeaStrike = QLinearGradient_Wrapper.SeaStrike;
QLinearGradient.NightCall = QLinearGradient_Wrapper.NightCall;
QLinearGradient.SupremeSky = QLinearGradient_Wrapper.SupremeSky;
QLinearGradient.LightBlue = QLinearGradient_Wrapper.LightBlue;
QLinearGradient.MindCrawl = QLinearGradient_Wrapper.MindCrawl;
QLinearGradient.LilyMeadow = QLinearGradient_Wrapper.LilyMeadow;
QLinearGradient.SugarLollipop = QLinearGradient_Wrapper.SugarLollipop;
QLinearGradient.SweetDessert = QLinearGradient_Wrapper.SweetDessert;
QLinearGradient.MagicRay = QLinearGradient_Wrapper.MagicRay;
QLinearGradient.TeenParty = QLinearGradient_Wrapper.TeenParty;
QLinearGradient.FrozenHeat = QLinearGradient_Wrapper.FrozenHeat;
QLinearGradient.GagarinView = QLinearGradient_Wrapper.GagarinView;
QLinearGradient.FabledSunset = QLinearGradient_Wrapper.FabledSunset;
QLinearGradient.PerfectBlue = QLinearGradient_Wrapper.PerfectBlue;
QLinearGradient.NumPresets = QLinearGradient_Wrapper.NumPresets;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QLinearGradient.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QLinearGradient.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    