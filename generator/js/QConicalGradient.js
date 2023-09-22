
      // auto generated
      //var self;

      // class constructor:
      function QConicalGradient() {
        

        // should be QConicalGradient_BaseJs.call(this, engine):
        //QConicalGradient.prototype = new QConicalGradient_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QConicalGradient.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QConicalGradient);
            //}
          }
          else {
            qWarning("QConicalGradient.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new QConicalGradient_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QConicalGradient);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QConicalGradient);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QConicalGradient_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QConicalGradient);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QConicalGradient);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QConicalGradient_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QConicalGradient);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QConicalGradient);
  }

  
  else {
    
        print("QConicalGradient(): wrong number / type of arguments");
      
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

      //QConicalGradient.prototype = new QConicalGradient_BaseJs(engine);
      //QConicalGradient.prototype = new QConicalGradient_Wrapper(engine);
      QConicalGradient.prototype = new Object();

      QConicalGradient.prototype.toString = function() {
          //return "QConicalGradient [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QConicalGradient [JS]";
        };
      QConicalGradient.getObjectType = function() {
        
            return RJSType_QConicalGradient.getIdStatic();
          
      };

      QConicalGradient.prototype.getObjectType = function() {
        
            return RJSType_QConicalGradient.getIdStatic();
          
      };

      QConicalGradient.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QConicalGradient.getIdStatic()) {
              return true;
            }
          
          if (t===RJSType_QGradient.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
QConicalGradient.LinearGradient = QConicalGradient_Wrapper.LinearGradient;
QConicalGradient.RadialGradient = QConicalGradient_Wrapper.RadialGradient;
QConicalGradient.ConicalGradient = QConicalGradient_Wrapper.ConicalGradient;
QConicalGradient.NoGradient = QConicalGradient_Wrapper.NoGradient;

  // enum: Spread
QConicalGradient.PadSpread = QConicalGradient_Wrapper.PadSpread;
QConicalGradient.ReflectSpread = QConicalGradient_Wrapper.ReflectSpread;
QConicalGradient.RepeatSpread = QConicalGradient_Wrapper.RepeatSpread;

  // enum: CoordinateMode
QConicalGradient.LogicalMode = QConicalGradient_Wrapper.LogicalMode;
QConicalGradient.StretchToDeviceMode = QConicalGradient_Wrapper.StretchToDeviceMode;
QConicalGradient.ObjectBoundingMode = QConicalGradient_Wrapper.ObjectBoundingMode;
QConicalGradient.ObjectMode = QConicalGradient_Wrapper.ObjectMode;

  // enum: InterpolationMode
QConicalGradient.ColorInterpolation = QConicalGradient_Wrapper.ColorInterpolation;
QConicalGradient.ComponentInterpolation = QConicalGradient_Wrapper.ComponentInterpolation;

  // enum: Preset
QConicalGradient.WarmFlame = QConicalGradient_Wrapper.WarmFlame;
QConicalGradient.NightFade = QConicalGradient_Wrapper.NightFade;
QConicalGradient.SpringWarmth = QConicalGradient_Wrapper.SpringWarmth;
QConicalGradient.JuicyPeach = QConicalGradient_Wrapper.JuicyPeach;
QConicalGradient.YoungPassion = QConicalGradient_Wrapper.YoungPassion;
QConicalGradient.LadyLips = QConicalGradient_Wrapper.LadyLips;
QConicalGradient.SunnyMorning = QConicalGradient_Wrapper.SunnyMorning;
QConicalGradient.RainyAshville = QConicalGradient_Wrapper.RainyAshville;
QConicalGradient.FrozenDreams = QConicalGradient_Wrapper.FrozenDreams;
QConicalGradient.WinterNeva = QConicalGradient_Wrapper.WinterNeva;
QConicalGradient.DustyGrass = QConicalGradient_Wrapper.DustyGrass;
QConicalGradient.TemptingAzure = QConicalGradient_Wrapper.TemptingAzure;
QConicalGradient.HeavyRain = QConicalGradient_Wrapper.HeavyRain;
QConicalGradient.AmyCrisp = QConicalGradient_Wrapper.AmyCrisp;
QConicalGradient.MeanFruit = QConicalGradient_Wrapper.MeanFruit;
QConicalGradient.DeepBlue = QConicalGradient_Wrapper.DeepBlue;
QConicalGradient.RipeMalinka = QConicalGradient_Wrapper.RipeMalinka;
QConicalGradient.CloudyKnoxville = QConicalGradient_Wrapper.CloudyKnoxville;
QConicalGradient.MalibuBeach = QConicalGradient_Wrapper.MalibuBeach;
QConicalGradient.NewLife = QConicalGradient_Wrapper.NewLife;
QConicalGradient.TrueSunset = QConicalGradient_Wrapper.TrueSunset;
QConicalGradient.MorpheusDen = QConicalGradient_Wrapper.MorpheusDen;
QConicalGradient.RareWind = QConicalGradient_Wrapper.RareWind;
QConicalGradient.NearMoon = QConicalGradient_Wrapper.NearMoon;
QConicalGradient.WildApple = QConicalGradient_Wrapper.WildApple;
QConicalGradient.SaintPetersburg = QConicalGradient_Wrapper.SaintPetersburg;
QConicalGradient.PlumPlate = QConicalGradient_Wrapper.PlumPlate;
QConicalGradient.EverlastingSky = QConicalGradient_Wrapper.EverlastingSky;
QConicalGradient.HappyFisher = QConicalGradient_Wrapper.HappyFisher;
QConicalGradient.Blessing = QConicalGradient_Wrapper.Blessing;
QConicalGradient.SharpeyeEagle = QConicalGradient_Wrapper.SharpeyeEagle;
QConicalGradient.LadogaBottom = QConicalGradient_Wrapper.LadogaBottom;
QConicalGradient.LemonGate = QConicalGradient_Wrapper.LemonGate;
QConicalGradient.ItmeoBranding = QConicalGradient_Wrapper.ItmeoBranding;
QConicalGradient.ZeusMiracle = QConicalGradient_Wrapper.ZeusMiracle;
QConicalGradient.OldHat = QConicalGradient_Wrapper.OldHat;
QConicalGradient.StarWine = QConicalGradient_Wrapper.StarWine;
QConicalGradient.HappyAcid = QConicalGradient_Wrapper.HappyAcid;
QConicalGradient.AwesomePine = QConicalGradient_Wrapper.AwesomePine;
QConicalGradient.NewYork = QConicalGradient_Wrapper.NewYork;
QConicalGradient.ShyRainbow = QConicalGradient_Wrapper.ShyRainbow;
QConicalGradient.MixedHopes = QConicalGradient_Wrapper.MixedHopes;
QConicalGradient.FlyHigh = QConicalGradient_Wrapper.FlyHigh;
QConicalGradient.StrongBliss = QConicalGradient_Wrapper.StrongBliss;
QConicalGradient.FreshMilk = QConicalGradient_Wrapper.FreshMilk;
QConicalGradient.SnowAgain = QConicalGradient_Wrapper.SnowAgain;
QConicalGradient.FebruaryInk = QConicalGradient_Wrapper.FebruaryInk;
QConicalGradient.KindSteel = QConicalGradient_Wrapper.KindSteel;
QConicalGradient.SoftGrass = QConicalGradient_Wrapper.SoftGrass;
QConicalGradient.GrownEarly = QConicalGradient_Wrapper.GrownEarly;
QConicalGradient.SharpBlues = QConicalGradient_Wrapper.SharpBlues;
QConicalGradient.ShadyWater = QConicalGradient_Wrapper.ShadyWater;
QConicalGradient.DirtyBeauty = QConicalGradient_Wrapper.DirtyBeauty;
QConicalGradient.GreatWhale = QConicalGradient_Wrapper.GreatWhale;
QConicalGradient.TeenNotebook = QConicalGradient_Wrapper.TeenNotebook;
QConicalGradient.PoliteRumors = QConicalGradient_Wrapper.PoliteRumors;
QConicalGradient.SweetPeriod = QConicalGradient_Wrapper.SweetPeriod;
QConicalGradient.WideMatrix = QConicalGradient_Wrapper.WideMatrix;
QConicalGradient.SoftCherish = QConicalGradient_Wrapper.SoftCherish;
QConicalGradient.RedSalvation = QConicalGradient_Wrapper.RedSalvation;
QConicalGradient.BurningSpring = QConicalGradient_Wrapper.BurningSpring;
QConicalGradient.NightParty = QConicalGradient_Wrapper.NightParty;
QConicalGradient.SkyGlider = QConicalGradient_Wrapper.SkyGlider;
QConicalGradient.HeavenPeach = QConicalGradient_Wrapper.HeavenPeach;
QConicalGradient.PurpleDivision = QConicalGradient_Wrapper.PurpleDivision;
QConicalGradient.AquaSplash = QConicalGradient_Wrapper.AquaSplash;
QConicalGradient.SpikyNaga = QConicalGradient_Wrapper.SpikyNaga;
QConicalGradient.LoveKiss = QConicalGradient_Wrapper.LoveKiss;
QConicalGradient.CleanMirror = QConicalGradient_Wrapper.CleanMirror;
QConicalGradient.PremiumDark = QConicalGradient_Wrapper.PremiumDark;
QConicalGradient.ColdEvening = QConicalGradient_Wrapper.ColdEvening;
QConicalGradient.CochitiLake = QConicalGradient_Wrapper.CochitiLake;
QConicalGradient.SummerGames = QConicalGradient_Wrapper.SummerGames;
QConicalGradient.PassionateBed = QConicalGradient_Wrapper.PassionateBed;
QConicalGradient.MountainRock = QConicalGradient_Wrapper.MountainRock;
QConicalGradient.DesertHump = QConicalGradient_Wrapper.DesertHump;
QConicalGradient.JungleDay = QConicalGradient_Wrapper.JungleDay;
QConicalGradient.PhoenixStart = QConicalGradient_Wrapper.PhoenixStart;
QConicalGradient.OctoberSilence = QConicalGradient_Wrapper.OctoberSilence;
QConicalGradient.FarawayRiver = QConicalGradient_Wrapper.FarawayRiver;
QConicalGradient.AlchemistLab = QConicalGradient_Wrapper.AlchemistLab;
QConicalGradient.OverSun = QConicalGradient_Wrapper.OverSun;
QConicalGradient.PremiumWhite = QConicalGradient_Wrapper.PremiumWhite;
QConicalGradient.MarsParty = QConicalGradient_Wrapper.MarsParty;
QConicalGradient.EternalConstance = QConicalGradient_Wrapper.EternalConstance;
QConicalGradient.JapanBlush = QConicalGradient_Wrapper.JapanBlush;
QConicalGradient.SmilingRain = QConicalGradient_Wrapper.SmilingRain;
QConicalGradient.CloudyApple = QConicalGradient_Wrapper.CloudyApple;
QConicalGradient.BigMango = QConicalGradient_Wrapper.BigMango;
QConicalGradient.HealthyWater = QConicalGradient_Wrapper.HealthyWater;
QConicalGradient.AmourAmour = QConicalGradient_Wrapper.AmourAmour;
QConicalGradient.RiskyConcrete = QConicalGradient_Wrapper.RiskyConcrete;
QConicalGradient.StrongStick = QConicalGradient_Wrapper.StrongStick;
QConicalGradient.ViciousStance = QConicalGradient_Wrapper.ViciousStance;
QConicalGradient.PaloAlto = QConicalGradient_Wrapper.PaloAlto;
QConicalGradient.HappyMemories = QConicalGradient_Wrapper.HappyMemories;
QConicalGradient.MidnightBloom = QConicalGradient_Wrapper.MidnightBloom;
QConicalGradient.Crystalline = QConicalGradient_Wrapper.Crystalline;
QConicalGradient.PartyBliss = QConicalGradient_Wrapper.PartyBliss;
QConicalGradient.ConfidentCloud = QConicalGradient_Wrapper.ConfidentCloud;
QConicalGradient.LeCocktail = QConicalGradient_Wrapper.LeCocktail;
QConicalGradient.RiverCity = QConicalGradient_Wrapper.RiverCity;
QConicalGradient.FrozenBerry = QConicalGradient_Wrapper.FrozenBerry;
QConicalGradient.ChildCare = QConicalGradient_Wrapper.ChildCare;
QConicalGradient.FlyingLemon = QConicalGradient_Wrapper.FlyingLemon;
QConicalGradient.NewRetrowave = QConicalGradient_Wrapper.NewRetrowave;
QConicalGradient.HiddenJaguar = QConicalGradient_Wrapper.HiddenJaguar;
QConicalGradient.AboveTheSky = QConicalGradient_Wrapper.AboveTheSky;
QConicalGradient.Nega = QConicalGradient_Wrapper.Nega;
QConicalGradient.DenseWater = QConicalGradient_Wrapper.DenseWater;
QConicalGradient.Seashore = QConicalGradient_Wrapper.Seashore;
QConicalGradient.MarbleWall = QConicalGradient_Wrapper.MarbleWall;
QConicalGradient.CheerfulCaramel = QConicalGradient_Wrapper.CheerfulCaramel;
QConicalGradient.NightSky = QConicalGradient_Wrapper.NightSky;
QConicalGradient.MagicLake = QConicalGradient_Wrapper.MagicLake;
QConicalGradient.YoungGrass = QConicalGradient_Wrapper.YoungGrass;
QConicalGradient.ColorfulPeach = QConicalGradient_Wrapper.ColorfulPeach;
QConicalGradient.GentleCare = QConicalGradient_Wrapper.GentleCare;
QConicalGradient.PlumBath = QConicalGradient_Wrapper.PlumBath;
QConicalGradient.HappyUnicorn = QConicalGradient_Wrapper.HappyUnicorn;
QConicalGradient.AfricanField = QConicalGradient_Wrapper.AfricanField;
QConicalGradient.SolidStone = QConicalGradient_Wrapper.SolidStone;
QConicalGradient.OrangeJuice = QConicalGradient_Wrapper.OrangeJuice;
QConicalGradient.GlassWater = QConicalGradient_Wrapper.GlassWater;
QConicalGradient.NorthMiracle = QConicalGradient_Wrapper.NorthMiracle;
QConicalGradient.FruitBlend = QConicalGradient_Wrapper.FruitBlend;
QConicalGradient.MillenniumPine = QConicalGradient_Wrapper.MillenniumPine;
QConicalGradient.HighFlight = QConicalGradient_Wrapper.HighFlight;
QConicalGradient.MoleHall = QConicalGradient_Wrapper.MoleHall;
QConicalGradient.SpaceShift = QConicalGradient_Wrapper.SpaceShift;
QConicalGradient.ForestInei = QConicalGradient_Wrapper.ForestInei;
QConicalGradient.RoyalGarden = QConicalGradient_Wrapper.RoyalGarden;
QConicalGradient.RichMetal = QConicalGradient_Wrapper.RichMetal;
QConicalGradient.JuicyCake = QConicalGradient_Wrapper.JuicyCake;
QConicalGradient.SmartIndigo = QConicalGradient_Wrapper.SmartIndigo;
QConicalGradient.SandStrike = QConicalGradient_Wrapper.SandStrike;
QConicalGradient.NorseBeauty = QConicalGradient_Wrapper.NorseBeauty;
QConicalGradient.AquaGuidance = QConicalGradient_Wrapper.AquaGuidance;
QConicalGradient.SunVeggie = QConicalGradient_Wrapper.SunVeggie;
QConicalGradient.SeaLord = QConicalGradient_Wrapper.SeaLord;
QConicalGradient.BlackSea = QConicalGradient_Wrapper.BlackSea;
QConicalGradient.GrassShampoo = QConicalGradient_Wrapper.GrassShampoo;
QConicalGradient.LandingAircraft = QConicalGradient_Wrapper.LandingAircraft;
QConicalGradient.WitchDance = QConicalGradient_Wrapper.WitchDance;
QConicalGradient.SleeplessNight = QConicalGradient_Wrapper.SleeplessNight;
QConicalGradient.AngelCare = QConicalGradient_Wrapper.AngelCare;
QConicalGradient.CrystalRiver = QConicalGradient_Wrapper.CrystalRiver;
QConicalGradient.SoftLipstick = QConicalGradient_Wrapper.SoftLipstick;
QConicalGradient.SaltMountain = QConicalGradient_Wrapper.SaltMountain;
QConicalGradient.PerfectWhite = QConicalGradient_Wrapper.PerfectWhite;
QConicalGradient.FreshOasis = QConicalGradient_Wrapper.FreshOasis;
QConicalGradient.StrictNovember = QConicalGradient_Wrapper.StrictNovember;
QConicalGradient.MorningSalad = QConicalGradient_Wrapper.MorningSalad;
QConicalGradient.DeepRelief = QConicalGradient_Wrapper.DeepRelief;
QConicalGradient.SeaStrike = QConicalGradient_Wrapper.SeaStrike;
QConicalGradient.NightCall = QConicalGradient_Wrapper.NightCall;
QConicalGradient.SupremeSky = QConicalGradient_Wrapper.SupremeSky;
QConicalGradient.LightBlue = QConicalGradient_Wrapper.LightBlue;
QConicalGradient.MindCrawl = QConicalGradient_Wrapper.MindCrawl;
QConicalGradient.LilyMeadow = QConicalGradient_Wrapper.LilyMeadow;
QConicalGradient.SugarLollipop = QConicalGradient_Wrapper.SugarLollipop;
QConicalGradient.SweetDessert = QConicalGradient_Wrapper.SweetDessert;
QConicalGradient.MagicRay = QConicalGradient_Wrapper.MagicRay;
QConicalGradient.TeenParty = QConicalGradient_Wrapper.TeenParty;
QConicalGradient.FrozenHeat = QConicalGradient_Wrapper.FrozenHeat;
QConicalGradient.GagarinView = QConicalGradient_Wrapper.GagarinView;
QConicalGradient.FabledSunset = QConicalGradient_Wrapper.FabledSunset;
QConicalGradient.PerfectBlue = QConicalGradient_Wrapper.PerfectBlue;
QConicalGradient.NumPresets = QConicalGradient_Wrapper.NumPresets;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QConicalGradient.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QConicalGradient.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    