
      // auto generated
      //var self;

      // class constructor:
      function QFont() {
        

        // should be QFont_BaseJs.call(this, engine):
        //QFont.prototype = new QFont_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFont.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QFont);
            //}
          }
          else {
            qWarning("QFont.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QFont_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFont);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFont);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QFont_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFont);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFont);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QFont_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFont);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFont);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QFont_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFont);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFont);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QFont_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFont);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFont);
  }

  
  else {
    
        print("QFont(): wrong number / type of arguments");
      
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

      //QFont.prototype = new QFont_BaseJs(engine);
      //QFont.prototype = new QFont_Wrapper(engine);
      QFont.prototype = new Object();

      QFont.getObjectType = function() {
        return RJSType_QFont.getIdStatic();
      };

      QFont.prototype.getObjectType = function() {
        return RJSType_QFont.getIdStatic();
      };

      QFont.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFont.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: StyleHint
QFont.Helvetica = QFont_Wrapper.Helvetica;
QFont.SansSerif = QFont_Wrapper.SansSerif;
QFont.Times = QFont_Wrapper.Times;
QFont.Serif = QFont_Wrapper.Serif;
QFont.Courier = QFont_Wrapper.Courier;
QFont.TypeWriter = QFont_Wrapper.TypeWriter;
QFont.OldEnglish = QFont_Wrapper.OldEnglish;
QFont.Decorative = QFont_Wrapper.Decorative;
QFont.System = QFont_Wrapper.System;
QFont.AnyStyle = QFont_Wrapper.AnyStyle;
QFont.Cursive = QFont_Wrapper.Cursive;
QFont.Monospace = QFont_Wrapper.Monospace;
QFont.Fantasy = QFont_Wrapper.Fantasy;

  // enum: StyleStrategy
QFont.PreferDefault = QFont_Wrapper.PreferDefault;
QFont.PreferBitmap = QFont_Wrapper.PreferBitmap;
QFont.PreferDevice = QFont_Wrapper.PreferDevice;
QFont.PreferOutline = QFont_Wrapper.PreferOutline;
QFont.ForceOutline = QFont_Wrapper.ForceOutline;
QFont.PreferMatch = QFont_Wrapper.PreferMatch;
QFont.PreferQuality = QFont_Wrapper.PreferQuality;
QFont.PreferAntialias = QFont_Wrapper.PreferAntialias;
QFont.NoAntialias = QFont_Wrapper.NoAntialias;
QFont.NoSubpixelAntialias = QFont_Wrapper.NoSubpixelAntialias;
QFont.PreferNoShaping = QFont_Wrapper.PreferNoShaping;
QFont.NoFontMerging = QFont_Wrapper.NoFontMerging;

  // enum: HintingPreference
QFont.PreferDefaultHinting = QFont_Wrapper.PreferDefaultHinting;
QFont.PreferNoHinting = QFont_Wrapper.PreferNoHinting;
QFont.PreferVerticalHinting = QFont_Wrapper.PreferVerticalHinting;
QFont.PreferFullHinting = QFont_Wrapper.PreferFullHinting;

  // enum: Weight
QFont.Thin = QFont_Wrapper.Thin;
QFont.ExtraLight = QFont_Wrapper.ExtraLight;
QFont.Light = QFont_Wrapper.Light;
QFont.Normal = QFont_Wrapper.Normal;
QFont.Medium = QFont_Wrapper.Medium;
QFont.DemiBold = QFont_Wrapper.DemiBold;
QFont.Bold = QFont_Wrapper.Bold;
QFont.ExtraBold = QFont_Wrapper.ExtraBold;
QFont.Black = QFont_Wrapper.Black;

  // enum: Style
QFont.StyleNormal = QFont_Wrapper.StyleNormal;
QFont.StyleItalic = QFont_Wrapper.StyleItalic;
QFont.StyleOblique = QFont_Wrapper.StyleOblique;

  // enum: Stretch
QFont.AnyStretch = QFont_Wrapper.AnyStretch;
QFont.UltraCondensed = QFont_Wrapper.UltraCondensed;
QFont.ExtraCondensed = QFont_Wrapper.ExtraCondensed;
QFont.Condensed = QFont_Wrapper.Condensed;
QFont.SemiCondensed = QFont_Wrapper.SemiCondensed;
QFont.Unstretched = QFont_Wrapper.Unstretched;
QFont.SemiExpanded = QFont_Wrapper.SemiExpanded;
QFont.Expanded = QFont_Wrapper.Expanded;
QFont.ExtraExpanded = QFont_Wrapper.ExtraExpanded;
QFont.UltraExpanded = QFont_Wrapper.UltraExpanded;

  // enum: Capitalization
QFont.MixedCase = QFont_Wrapper.MixedCase;
QFont.AllUppercase = QFont_Wrapper.AllUppercase;
QFont.AllLowercase = QFont_Wrapper.AllLowercase;
QFont.SmallCaps = QFont_Wrapper.SmallCaps;
QFont.Capitalize = QFont_Wrapper.Capitalize;

  // enum: SpacingType
QFont.PercentageSpacing = QFont_Wrapper.PercentageSpacing;
QFont.AbsoluteSpacing = QFont_Wrapper.AbsoluteSpacing;

  // enum: ResolveProperties
QFont.NoPropertiesResolved = QFont_Wrapper.NoPropertiesResolved;
QFont.FamilyResolved = QFont_Wrapper.FamilyResolved;
QFont.SizeResolved = QFont_Wrapper.SizeResolved;
QFont.StyleHintResolved = QFont_Wrapper.StyleHintResolved;
QFont.StyleStrategyResolved = QFont_Wrapper.StyleStrategyResolved;
QFont.WeightResolved = QFont_Wrapper.WeightResolved;
QFont.StyleResolved = QFont_Wrapper.StyleResolved;
QFont.UnderlineResolved = QFont_Wrapper.UnderlineResolved;
QFont.OverlineResolved = QFont_Wrapper.OverlineResolved;
QFont.StrikeOutResolved = QFont_Wrapper.StrikeOutResolved;
QFont.FixedPitchResolved = QFont_Wrapper.FixedPitchResolved;
QFont.StretchResolved = QFont_Wrapper.StretchResolved;
QFont.KerningResolved = QFont_Wrapper.KerningResolved;
QFont.CapitalizationResolved = QFont_Wrapper.CapitalizationResolved;
QFont.LetterSpacingResolved = QFont_Wrapper.LetterSpacingResolved;
QFont.WordSpacingResolved = QFont_Wrapper.WordSpacingResolved;
QFont.HintingPreferenceResolved = QFont_Wrapper.HintingPreferenceResolved;
QFont.StyleNameResolved = QFont_Wrapper.StyleNameResolved;
QFont.FamiliesResolved = QFont_Wrapper.FamiliesResolved;
QFont.AllPropertiesResolved = QFont_Wrapper.AllPropertiesResolved;


      // functions:
      

      // static functions:
      

        // static function 
        QFont.substitute = function() 
          
        {
          //print("JS: QFont.substitute");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFont_WrapperSingletonInstance.substitute(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFont);
  }

  
  else {
    
        print("QFont.substitute(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFont.substitutes = function() 
          
        {
          //print("JS: QFont.substitutes");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFont_WrapperSingletonInstance.substitutes(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFont);
  }

  
  else {
    
        print("QFont.substitutes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFont.substitutions = function() 
          
        {
          //print("JS: QFont.substitutions");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QFont_WrapperSingletonInstance.substitutions(
                  
                );
              

        //copyProperties(this, wrapper, QFont);
  }

  
  else {
    
        print("QFont.substitutions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFont.insertSubstitution = function() 
          
        {
          //print("JS: QFont.insertSubstitution");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QFont_WrapperSingletonInstance.insertSubstitution(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFont);
  }

  
  else {
    
        print("QFont.insertSubstitution(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFont.insertSubstitutions = function() 
          
        {
          //print("JS: QFont.insertSubstitutions");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QFont_WrapperSingletonInstance.insertSubstitutions(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFont);
  }

  
  else {
    
        print("QFont.insertSubstitutions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFont.removeSubstitutions = function() 
          
        {
          //print("JS: QFont.removeSubstitutions");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFont_WrapperSingletonInstance.removeSubstitutions(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFont);
  }

  
  else {
    
        print("QFont.removeSubstitutions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFont.initialize = function() 
          
        {
          //print("JS: QFont.initialize");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QFont_WrapperSingletonInstance.initialize(
                  
                );
              

        //copyProperties(this, wrapper, QFont);
  }

  
  else {
    
        print("QFont.initialize(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFont.cleanup = function() 
          
        {
          //print("JS: QFont.cleanup");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QFont_WrapperSingletonInstance.cleanup(
                  
                );
              

        //copyProperties(this, wrapper, QFont);
  }

  
  else {
    
        print("QFont.cleanup(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFont.cacheStatistics = function() 
          
        {
          //print("JS: QFont.cacheStatistics");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QFont_WrapperSingletonInstance.cacheStatistics(
                  
                );
              

        //copyProperties(this, wrapper, QFont);
  }

  
  else {
    
        print("QFont.cacheStatistics(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFont.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFont.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    