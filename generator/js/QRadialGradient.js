
      // auto generated
      //var self;

      // class constructor:
      function QRadialGradient() {
        

        // should be QRadialGradient_BaseJs.call(this, engine):
        //QRadialGradient.prototype = new QRadialGradient_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QRadialGradient_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QRadialGradient);
            //}
          }
          else {
            qWarning("QRadialGradient.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 6) {
    
            self = this;
            wrapper = new QRadialGradient_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRadialGradient);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRadialGradient);
  }

  
  else 
  
      if (arguments.length == 5) {
    
            self = this;
            wrapper = new QRadialGradient_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRadialGradient);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRadialGradient);
  }

  
  else 
  
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QRadialGradient_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRadialGradient);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRadialGradient);
  }

  
  else 
  
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new QRadialGradient_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRadialGradient);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRadialGradient);
  }

  
  else 
  
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new QRadialGradient_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRadialGradient);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRadialGradient);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QRadialGradient_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRadialGradient);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRadialGradient);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QRadialGradient_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRadialGradient);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRadialGradient);
  }

  
  else {
    
        print("QRadialGradient(): wrong number / type of arguments");
      
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

      //QRadialGradient.prototype = new QRadialGradient_BaseJs(engine);
      //QRadialGradient.prototype = new QRadialGradient_Wrapper(engine);
      QRadialGradient.prototype = new Object();

      QRadialGradient.prototype.toString = function() {
          //return "QRadialGradient [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QRadialGradient [JS]";
        };
      QRadialGradient.getObjectType = function() {
        
            return RJSType.QRadialGradient_Type;
          
      };

      QRadialGradient.prototype.getObjectType = function() {
        
            return RJSType.QRadialGradient_Type;
          
      };

      QRadialGradient.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QRadialGradient_Type:
              return true;
          
        case RJSType.QGradient_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QRadialGradient_Type, 
          
            RJSType.QGradient_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: Type
QRadialGradient.LinearGradient = QRadialGradient_Wrapper.LinearGradient;
QRadialGradient.RadialGradient = QRadialGradient_Wrapper.RadialGradient;
QRadialGradient.ConicalGradient = QRadialGradient_Wrapper.ConicalGradient;
QRadialGradient.NoGradient = QRadialGradient_Wrapper.NoGradient;

  // enum: Spread
QRadialGradient.PadSpread = QRadialGradient_Wrapper.PadSpread;
QRadialGradient.ReflectSpread = QRadialGradient_Wrapper.ReflectSpread;
QRadialGradient.RepeatSpread = QRadialGradient_Wrapper.RepeatSpread;

  // enum: CoordinateMode
QRadialGradient.LogicalMode = QRadialGradient_Wrapper.LogicalMode;
QRadialGradient.StretchToDeviceMode = QRadialGradient_Wrapper.StretchToDeviceMode;
QRadialGradient.ObjectBoundingMode = QRadialGradient_Wrapper.ObjectBoundingMode;
QRadialGradient.ObjectMode = QRadialGradient_Wrapper.ObjectMode;

  // enum: InterpolationMode
QRadialGradient.ColorInterpolation = QRadialGradient_Wrapper.ColorInterpolation;
QRadialGradient.ComponentInterpolation = QRadialGradient_Wrapper.ComponentInterpolation;

  // enum: Preset
QRadialGradient.WarmFlame = QRadialGradient_Wrapper.WarmFlame;
QRadialGradient.NightFade = QRadialGradient_Wrapper.NightFade;
QRadialGradient.SpringWarmth = QRadialGradient_Wrapper.SpringWarmth;
QRadialGradient.JuicyPeach = QRadialGradient_Wrapper.JuicyPeach;
QRadialGradient.YoungPassion = QRadialGradient_Wrapper.YoungPassion;
QRadialGradient.LadyLips = QRadialGradient_Wrapper.LadyLips;
QRadialGradient.SunnyMorning = QRadialGradient_Wrapper.SunnyMorning;
QRadialGradient.RainyAshville = QRadialGradient_Wrapper.RainyAshville;
QRadialGradient.FrozenDreams = QRadialGradient_Wrapper.FrozenDreams;
QRadialGradient.WinterNeva = QRadialGradient_Wrapper.WinterNeva;
QRadialGradient.DustyGrass = QRadialGradient_Wrapper.DustyGrass;
QRadialGradient.TemptingAzure = QRadialGradient_Wrapper.TemptingAzure;
QRadialGradient.HeavyRain = QRadialGradient_Wrapper.HeavyRain;
QRadialGradient.AmyCrisp = QRadialGradient_Wrapper.AmyCrisp;
QRadialGradient.MeanFruit = QRadialGradient_Wrapper.MeanFruit;
QRadialGradient.DeepBlue = QRadialGradient_Wrapper.DeepBlue;
QRadialGradient.RipeMalinka = QRadialGradient_Wrapper.RipeMalinka;
QRadialGradient.CloudyKnoxville = QRadialGradient_Wrapper.CloudyKnoxville;
QRadialGradient.MalibuBeach = QRadialGradient_Wrapper.MalibuBeach;
QRadialGradient.NewLife = QRadialGradient_Wrapper.NewLife;
QRadialGradient.TrueSunset = QRadialGradient_Wrapper.TrueSunset;
QRadialGradient.MorpheusDen = QRadialGradient_Wrapper.MorpheusDen;
QRadialGradient.RareWind = QRadialGradient_Wrapper.RareWind;
QRadialGradient.NearMoon = QRadialGradient_Wrapper.NearMoon;
QRadialGradient.WildApple = QRadialGradient_Wrapper.WildApple;
QRadialGradient.SaintPetersburg = QRadialGradient_Wrapper.SaintPetersburg;
QRadialGradient.PlumPlate = QRadialGradient_Wrapper.PlumPlate;
QRadialGradient.EverlastingSky = QRadialGradient_Wrapper.EverlastingSky;
QRadialGradient.HappyFisher = QRadialGradient_Wrapper.HappyFisher;
QRadialGradient.Blessing = QRadialGradient_Wrapper.Blessing;
QRadialGradient.SharpeyeEagle = QRadialGradient_Wrapper.SharpeyeEagle;
QRadialGradient.LadogaBottom = QRadialGradient_Wrapper.LadogaBottom;
QRadialGradient.LemonGate = QRadialGradient_Wrapper.LemonGate;
QRadialGradient.ItmeoBranding = QRadialGradient_Wrapper.ItmeoBranding;
QRadialGradient.ZeusMiracle = QRadialGradient_Wrapper.ZeusMiracle;
QRadialGradient.OldHat = QRadialGradient_Wrapper.OldHat;
QRadialGradient.StarWine = QRadialGradient_Wrapper.StarWine;
QRadialGradient.HappyAcid = QRadialGradient_Wrapper.HappyAcid;
QRadialGradient.AwesomePine = QRadialGradient_Wrapper.AwesomePine;
QRadialGradient.NewYork = QRadialGradient_Wrapper.NewYork;
QRadialGradient.ShyRainbow = QRadialGradient_Wrapper.ShyRainbow;
QRadialGradient.MixedHopes = QRadialGradient_Wrapper.MixedHopes;
QRadialGradient.FlyHigh = QRadialGradient_Wrapper.FlyHigh;
QRadialGradient.StrongBliss = QRadialGradient_Wrapper.StrongBliss;
QRadialGradient.FreshMilk = QRadialGradient_Wrapper.FreshMilk;
QRadialGradient.SnowAgain = QRadialGradient_Wrapper.SnowAgain;
QRadialGradient.FebruaryInk = QRadialGradient_Wrapper.FebruaryInk;
QRadialGradient.KindSteel = QRadialGradient_Wrapper.KindSteel;
QRadialGradient.SoftGrass = QRadialGradient_Wrapper.SoftGrass;
QRadialGradient.GrownEarly = QRadialGradient_Wrapper.GrownEarly;
QRadialGradient.SharpBlues = QRadialGradient_Wrapper.SharpBlues;
QRadialGradient.ShadyWater = QRadialGradient_Wrapper.ShadyWater;
QRadialGradient.DirtyBeauty = QRadialGradient_Wrapper.DirtyBeauty;
QRadialGradient.GreatWhale = QRadialGradient_Wrapper.GreatWhale;
QRadialGradient.TeenNotebook = QRadialGradient_Wrapper.TeenNotebook;
QRadialGradient.PoliteRumors = QRadialGradient_Wrapper.PoliteRumors;
QRadialGradient.SweetPeriod = QRadialGradient_Wrapper.SweetPeriod;
QRadialGradient.WideMatrix = QRadialGradient_Wrapper.WideMatrix;
QRadialGradient.SoftCherish = QRadialGradient_Wrapper.SoftCherish;
QRadialGradient.RedSalvation = QRadialGradient_Wrapper.RedSalvation;
QRadialGradient.BurningSpring = QRadialGradient_Wrapper.BurningSpring;
QRadialGradient.NightParty = QRadialGradient_Wrapper.NightParty;
QRadialGradient.SkyGlider = QRadialGradient_Wrapper.SkyGlider;
QRadialGradient.HeavenPeach = QRadialGradient_Wrapper.HeavenPeach;
QRadialGradient.PurpleDivision = QRadialGradient_Wrapper.PurpleDivision;
QRadialGradient.AquaSplash = QRadialGradient_Wrapper.AquaSplash;
QRadialGradient.SpikyNaga = QRadialGradient_Wrapper.SpikyNaga;
QRadialGradient.LoveKiss = QRadialGradient_Wrapper.LoveKiss;
QRadialGradient.CleanMirror = QRadialGradient_Wrapper.CleanMirror;
QRadialGradient.PremiumDark = QRadialGradient_Wrapper.PremiumDark;
QRadialGradient.ColdEvening = QRadialGradient_Wrapper.ColdEvening;
QRadialGradient.CochitiLake = QRadialGradient_Wrapper.CochitiLake;
QRadialGradient.SummerGames = QRadialGradient_Wrapper.SummerGames;
QRadialGradient.PassionateBed = QRadialGradient_Wrapper.PassionateBed;
QRadialGradient.MountainRock = QRadialGradient_Wrapper.MountainRock;
QRadialGradient.DesertHump = QRadialGradient_Wrapper.DesertHump;
QRadialGradient.JungleDay = QRadialGradient_Wrapper.JungleDay;
QRadialGradient.PhoenixStart = QRadialGradient_Wrapper.PhoenixStart;
QRadialGradient.OctoberSilence = QRadialGradient_Wrapper.OctoberSilence;
QRadialGradient.FarawayRiver = QRadialGradient_Wrapper.FarawayRiver;
QRadialGradient.AlchemistLab = QRadialGradient_Wrapper.AlchemistLab;
QRadialGradient.OverSun = QRadialGradient_Wrapper.OverSun;
QRadialGradient.PremiumWhite = QRadialGradient_Wrapper.PremiumWhite;
QRadialGradient.MarsParty = QRadialGradient_Wrapper.MarsParty;
QRadialGradient.EternalConstance = QRadialGradient_Wrapper.EternalConstance;
QRadialGradient.JapanBlush = QRadialGradient_Wrapper.JapanBlush;
QRadialGradient.SmilingRain = QRadialGradient_Wrapper.SmilingRain;
QRadialGradient.CloudyApple = QRadialGradient_Wrapper.CloudyApple;
QRadialGradient.BigMango = QRadialGradient_Wrapper.BigMango;
QRadialGradient.HealthyWater = QRadialGradient_Wrapper.HealthyWater;
QRadialGradient.AmourAmour = QRadialGradient_Wrapper.AmourAmour;
QRadialGradient.RiskyConcrete = QRadialGradient_Wrapper.RiskyConcrete;
QRadialGradient.StrongStick = QRadialGradient_Wrapper.StrongStick;
QRadialGradient.ViciousStance = QRadialGradient_Wrapper.ViciousStance;
QRadialGradient.PaloAlto = QRadialGradient_Wrapper.PaloAlto;
QRadialGradient.HappyMemories = QRadialGradient_Wrapper.HappyMemories;
QRadialGradient.MidnightBloom = QRadialGradient_Wrapper.MidnightBloom;
QRadialGradient.Crystalline = QRadialGradient_Wrapper.Crystalline;
QRadialGradient.PartyBliss = QRadialGradient_Wrapper.PartyBliss;
QRadialGradient.ConfidentCloud = QRadialGradient_Wrapper.ConfidentCloud;
QRadialGradient.LeCocktail = QRadialGradient_Wrapper.LeCocktail;
QRadialGradient.RiverCity = QRadialGradient_Wrapper.RiverCity;
QRadialGradient.FrozenBerry = QRadialGradient_Wrapper.FrozenBerry;
QRadialGradient.ChildCare = QRadialGradient_Wrapper.ChildCare;
QRadialGradient.FlyingLemon = QRadialGradient_Wrapper.FlyingLemon;
QRadialGradient.NewRetrowave = QRadialGradient_Wrapper.NewRetrowave;
QRadialGradient.HiddenJaguar = QRadialGradient_Wrapper.HiddenJaguar;
QRadialGradient.AboveTheSky = QRadialGradient_Wrapper.AboveTheSky;
QRadialGradient.Nega = QRadialGradient_Wrapper.Nega;
QRadialGradient.DenseWater = QRadialGradient_Wrapper.DenseWater;
QRadialGradient.Seashore = QRadialGradient_Wrapper.Seashore;
QRadialGradient.MarbleWall = QRadialGradient_Wrapper.MarbleWall;
QRadialGradient.CheerfulCaramel = QRadialGradient_Wrapper.CheerfulCaramel;
QRadialGradient.NightSky = QRadialGradient_Wrapper.NightSky;
QRadialGradient.MagicLake = QRadialGradient_Wrapper.MagicLake;
QRadialGradient.YoungGrass = QRadialGradient_Wrapper.YoungGrass;
QRadialGradient.ColorfulPeach = QRadialGradient_Wrapper.ColorfulPeach;
QRadialGradient.GentleCare = QRadialGradient_Wrapper.GentleCare;
QRadialGradient.PlumBath = QRadialGradient_Wrapper.PlumBath;
QRadialGradient.HappyUnicorn = QRadialGradient_Wrapper.HappyUnicorn;
QRadialGradient.AfricanField = QRadialGradient_Wrapper.AfricanField;
QRadialGradient.SolidStone = QRadialGradient_Wrapper.SolidStone;
QRadialGradient.OrangeJuice = QRadialGradient_Wrapper.OrangeJuice;
QRadialGradient.GlassWater = QRadialGradient_Wrapper.GlassWater;
QRadialGradient.NorthMiracle = QRadialGradient_Wrapper.NorthMiracle;
QRadialGradient.FruitBlend = QRadialGradient_Wrapper.FruitBlend;
QRadialGradient.MillenniumPine = QRadialGradient_Wrapper.MillenniumPine;
QRadialGradient.HighFlight = QRadialGradient_Wrapper.HighFlight;
QRadialGradient.MoleHall = QRadialGradient_Wrapper.MoleHall;
QRadialGradient.SpaceShift = QRadialGradient_Wrapper.SpaceShift;
QRadialGradient.ForestInei = QRadialGradient_Wrapper.ForestInei;
QRadialGradient.RoyalGarden = QRadialGradient_Wrapper.RoyalGarden;
QRadialGradient.RichMetal = QRadialGradient_Wrapper.RichMetal;
QRadialGradient.JuicyCake = QRadialGradient_Wrapper.JuicyCake;
QRadialGradient.SmartIndigo = QRadialGradient_Wrapper.SmartIndigo;
QRadialGradient.SandStrike = QRadialGradient_Wrapper.SandStrike;
QRadialGradient.NorseBeauty = QRadialGradient_Wrapper.NorseBeauty;
QRadialGradient.AquaGuidance = QRadialGradient_Wrapper.AquaGuidance;
QRadialGradient.SunVeggie = QRadialGradient_Wrapper.SunVeggie;
QRadialGradient.SeaLord = QRadialGradient_Wrapper.SeaLord;
QRadialGradient.BlackSea = QRadialGradient_Wrapper.BlackSea;
QRadialGradient.GrassShampoo = QRadialGradient_Wrapper.GrassShampoo;
QRadialGradient.LandingAircraft = QRadialGradient_Wrapper.LandingAircraft;
QRadialGradient.WitchDance = QRadialGradient_Wrapper.WitchDance;
QRadialGradient.SleeplessNight = QRadialGradient_Wrapper.SleeplessNight;
QRadialGradient.AngelCare = QRadialGradient_Wrapper.AngelCare;
QRadialGradient.CrystalRiver = QRadialGradient_Wrapper.CrystalRiver;
QRadialGradient.SoftLipstick = QRadialGradient_Wrapper.SoftLipstick;
QRadialGradient.SaltMountain = QRadialGradient_Wrapper.SaltMountain;
QRadialGradient.PerfectWhite = QRadialGradient_Wrapper.PerfectWhite;
QRadialGradient.FreshOasis = QRadialGradient_Wrapper.FreshOasis;
QRadialGradient.StrictNovember = QRadialGradient_Wrapper.StrictNovember;
QRadialGradient.MorningSalad = QRadialGradient_Wrapper.MorningSalad;
QRadialGradient.DeepRelief = QRadialGradient_Wrapper.DeepRelief;
QRadialGradient.SeaStrike = QRadialGradient_Wrapper.SeaStrike;
QRadialGradient.NightCall = QRadialGradient_Wrapper.NightCall;
QRadialGradient.SupremeSky = QRadialGradient_Wrapper.SupremeSky;
QRadialGradient.LightBlue = QRadialGradient_Wrapper.LightBlue;
QRadialGradient.MindCrawl = QRadialGradient_Wrapper.MindCrawl;
QRadialGradient.LilyMeadow = QRadialGradient_Wrapper.LilyMeadow;
QRadialGradient.SugarLollipop = QRadialGradient_Wrapper.SugarLollipop;
QRadialGradient.SweetDessert = QRadialGradient_Wrapper.SweetDessert;
QRadialGradient.MagicRay = QRadialGradient_Wrapper.MagicRay;
QRadialGradient.TeenParty = QRadialGradient_Wrapper.TeenParty;
QRadialGradient.FrozenHeat = QRadialGradient_Wrapper.FrozenHeat;
QRadialGradient.GagarinView = QRadialGradient_Wrapper.GagarinView;
QRadialGradient.FabledSunset = QRadialGradient_Wrapper.FabledSunset;
QRadialGradient.PerfectBlue = QRadialGradient_Wrapper.PerfectBlue;
QRadialGradient.NumPresets = QRadialGradient_Wrapper.NumPresets;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QRadialGradient.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QRadialGradient.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    