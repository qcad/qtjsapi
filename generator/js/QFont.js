
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
        }

        

      }

      //QFont.prototype = new QFont_BaseJs(engine);
      //QFont.prototype = new QFont_Wrapper(engine);
      QFont.prototype = new Object();

      
        // function with alias name in CPP wrapper:
        QFont.prototype.toString = function() {
          
              return this.__PROXY__.toStr.apply(this, arguments);
            
        }
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
      
        // function 
        QFont.prototype.swap = function(...args) 
          
        {
          //print("JS: QFont.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QFont.prototype.family = function(...args) 
          
        {
          //print("JS: QFont.prototype.family");
          return this.__PROXY__.family(...args);
        };
    
        // function 
        QFont.prototype.setFamily = function(...args) 
          
        {
          //print("JS: QFont.prototype.setFamily");
          return this.__PROXY__.setFamily(...args);
        };
    
        // function 
        QFont.prototype.families = function(...args) 
          
        {
          //print("JS: QFont.prototype.families");
          return this.__PROXY__.families(...args);
        };
    
        // function 
        QFont.prototype.setFamilies = function(...args) 
          
        {
          //print("JS: QFont.prototype.setFamilies");
          return this.__PROXY__.setFamilies(...args);
        };
    
        // function 
        QFont.prototype.styleName = function(...args) 
          
        {
          //print("JS: QFont.prototype.styleName");
          return this.__PROXY__.styleName(...args);
        };
    
        // function 
        QFont.prototype.setStyleName = function(...args) 
          
        {
          //print("JS: QFont.prototype.setStyleName");
          return this.__PROXY__.setStyleName(...args);
        };
    
        // function 
        QFont.prototype.pointSize = function(...args) 
          
        {
          //print("JS: QFont.prototype.pointSize");
          return this.__PROXY__.pointSize(...args);
        };
    
        // function 
        QFont.prototype.setPointSize = function(...args) 
          
        {
          //print("JS: QFont.prototype.setPointSize");
          return this.__PROXY__.setPointSize(...args);
        };
    
        // function 
        QFont.prototype.pointSizeF = function(...args) 
          
        {
          //print("JS: QFont.prototype.pointSizeF");
          return this.__PROXY__.pointSizeF(...args);
        };
    
        // function 
        QFont.prototype.setPointSizeF = function(...args) 
          
        {
          //print("JS: QFont.prototype.setPointSizeF");
          return this.__PROXY__.setPointSizeF(...args);
        };
    
        // function 
        QFont.prototype.pixelSize = function(...args) 
          
        {
          //print("JS: QFont.prototype.pixelSize");
          return this.__PROXY__.pixelSize(...args);
        };
    
        // function 
        QFont.prototype.setPixelSize = function(...args) 
          
        {
          //print("JS: QFont.prototype.setPixelSize");
          return this.__PROXY__.setPixelSize(...args);
        };
    
        // function 
        QFont.prototype.weight = function(...args) 
          
        {
          //print("JS: QFont.prototype.weight");
          return this.__PROXY__.weight(...args);
        };
    
        // function 
        QFont.prototype.setWeight = function(...args) 
          
        {
          //print("JS: QFont.prototype.setWeight");
          return this.__PROXY__.setWeight(...args);
        };
    
        // function 
        QFont.prototype.bold = function(...args) 
          
        {
          //print("JS: QFont.prototype.bold");
          return this.__PROXY__.bold(...args);
        };
    
        // function 
        QFont.prototype.setBold = function(...args) 
          
        {
          //print("JS: QFont.prototype.setBold");
          return this.__PROXY__.setBold(...args);
        };
    
        // function 
        QFont.prototype.setStyle = function(...args) 
          
        {
          //print("JS: QFont.prototype.setStyle");
          return this.__PROXY__.setStyle(...args);
        };
    
        // function 
        QFont.prototype.style = function(...args) 
          
        {
          //print("JS: QFont.prototype.style");
          return this.__PROXY__.style(...args);
        };
    
        // function 
        QFont.prototype.italic = function(...args) 
          
        {
          //print("JS: QFont.prototype.italic");
          return this.__PROXY__.italic(...args);
        };
    
        // function 
        QFont.prototype.setItalic = function(...args) 
          
        {
          //print("JS: QFont.prototype.setItalic");
          return this.__PROXY__.setItalic(...args);
        };
    
        // function 
        QFont.prototype.underline = function(...args) 
          
        {
          //print("JS: QFont.prototype.underline");
          return this.__PROXY__.underline(...args);
        };
    
        // function 
        QFont.prototype.setUnderline = function(...args) 
          
        {
          //print("JS: QFont.prototype.setUnderline");
          return this.__PROXY__.setUnderline(...args);
        };
    
        // function 
        QFont.prototype.overline = function(...args) 
          
        {
          //print("JS: QFont.prototype.overline");
          return this.__PROXY__.overline(...args);
        };
    
        // function 
        QFont.prototype.setOverline = function(...args) 
          
        {
          //print("JS: QFont.prototype.setOverline");
          return this.__PROXY__.setOverline(...args);
        };
    
        // function 
        QFont.prototype.strikeOut = function(...args) 
          
        {
          //print("JS: QFont.prototype.strikeOut");
          return this.__PROXY__.strikeOut(...args);
        };
    
        // function 
        QFont.prototype.setStrikeOut = function(...args) 
          
        {
          //print("JS: QFont.prototype.setStrikeOut");
          return this.__PROXY__.setStrikeOut(...args);
        };
    
        // function 
        QFont.prototype.fixedPitch = function(...args) 
          
        {
          //print("JS: QFont.prototype.fixedPitch");
          return this.__PROXY__.fixedPitch(...args);
        };
    
        // function 
        QFont.prototype.setFixedPitch = function(...args) 
          
        {
          //print("JS: QFont.prototype.setFixedPitch");
          return this.__PROXY__.setFixedPitch(...args);
        };
    
        // function 
        QFont.prototype.kerning = function(...args) 
          
        {
          //print("JS: QFont.prototype.kerning");
          return this.__PROXY__.kerning(...args);
        };
    
        // function 
        QFont.prototype.setKerning = function(...args) 
          
        {
          //print("JS: QFont.prototype.setKerning");
          return this.__PROXY__.setKerning(...args);
        };
    
        // function 
        QFont.prototype.styleHint = function(...args) 
          
        {
          //print("JS: QFont.prototype.styleHint");
          return this.__PROXY__.styleHint(...args);
        };
    
        // function 
        QFont.prototype.styleStrategy = function(...args) 
          
        {
          //print("JS: QFont.prototype.styleStrategy");
          return this.__PROXY__.styleStrategy(...args);
        };
    
        // function 
        QFont.prototype.setStyleHint = function(...args) 
          
        {
          //print("JS: QFont.prototype.setStyleHint");
          return this.__PROXY__.setStyleHint(...args);
        };
    
        // function 
        QFont.prototype.setStyleStrategy = function(...args) 
          
        {
          //print("JS: QFont.prototype.setStyleStrategy");
          return this.__PROXY__.setStyleStrategy(...args);
        };
    
        // function 
        QFont.prototype.stretch = function(...args) 
          
        {
          //print("JS: QFont.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        QFont.prototype.setStretch = function(...args) 
          
        {
          //print("JS: QFont.prototype.setStretch");
          return this.__PROXY__.setStretch(...args);
        };
    
        // function 
        QFont.prototype.letterSpacing = function(...args) 
          
        {
          //print("JS: QFont.prototype.letterSpacing");
          return this.__PROXY__.letterSpacing(...args);
        };
    
        // function 
        QFont.prototype.letterSpacingType = function(...args) 
          
        {
          //print("JS: QFont.prototype.letterSpacingType");
          return this.__PROXY__.letterSpacingType(...args);
        };
    
        // function 
        QFont.prototype.setLetterSpacing = function(...args) 
          
        {
          //print("JS: QFont.prototype.setLetterSpacing");
          return this.__PROXY__.setLetterSpacing(...args);
        };
    
        // function 
        QFont.prototype.wordSpacing = function(...args) 
          
        {
          //print("JS: QFont.prototype.wordSpacing");
          return this.__PROXY__.wordSpacing(...args);
        };
    
        // function 
        QFont.prototype.setWordSpacing = function(...args) 
          
        {
          //print("JS: QFont.prototype.setWordSpacing");
          return this.__PROXY__.setWordSpacing(...args);
        };
    
        // function 
        QFont.prototype.setCapitalization = function(...args) 
          
        {
          //print("JS: QFont.prototype.setCapitalization");
          return this.__PROXY__.setCapitalization(...args);
        };
    
        // function 
        QFont.prototype.capitalization = function(...args) 
          
        {
          //print("JS: QFont.prototype.capitalization");
          return this.__PROXY__.capitalization(...args);
        };
    
        // function 
        QFont.prototype.setHintingPreference = function(...args) 
          
        {
          //print("JS: QFont.prototype.setHintingPreference");
          return this.__PROXY__.setHintingPreference(...args);
        };
    
        // function 
        QFont.prototype.hintingPreference = function(...args) 
          
        {
          //print("JS: QFont.prototype.hintingPreference");
          return this.__PROXY__.hintingPreference(...args);
        };
    
        // function 
        QFont.prototype.exactMatch = function(...args) 
          
        {
          //print("JS: QFont.prototype.exactMatch");
          return this.__PROXY__.exactMatch(...args);
        };
    
        // function 
        QFont.prototype.isCopyOf = function(...args) 
          
        {
          //print("JS: QFont.prototype.isCopyOf");
          return this.__PROXY__.isCopyOf(...args);
        };
    
        // function 
        QFont.prototype.key = function(...args) 
          
        {
          //print("JS: QFont.prototype.key");
          return this.__PROXY__.key(...args);
        };
    
        // function 
        QFont.prototype.fromString = function(...args) 
          
        {
          //print("JS: QFont.prototype.fromString");
          return this.__PROXY__.fromString(...args);
        };
    
        // function 
        QFont.prototype.substitute = function(...args) 
          
        {
          //print("JS: QFont.prototype.substitute");
          return this.__PROXY__.substitute(...args);
        };
    
        // function 
        QFont.prototype.substitutes = function(...args) 
          
        {
          //print("JS: QFont.prototype.substitutes");
          return this.__PROXY__.substitutes(...args);
        };
    
        // function 
        QFont.prototype.substitutions = function(...args) 
          
        {
          //print("JS: QFont.prototype.substitutions");
          return this.__PROXY__.substitutions(...args);
        };
    
        // function 
        QFont.prototype.insertSubstitution = function(...args) 
          
        {
          //print("JS: QFont.prototype.insertSubstitution");
          return this.__PROXY__.insertSubstitution(...args);
        };
    
        // function 
        QFont.prototype.insertSubstitutions = function(...args) 
          
        {
          //print("JS: QFont.prototype.insertSubstitutions");
          return this.__PROXY__.insertSubstitutions(...args);
        };
    
        // function 
        QFont.prototype.removeSubstitutions = function(...args) 
          
        {
          //print("JS: QFont.prototype.removeSubstitutions");
          return this.__PROXY__.removeSubstitutions(...args);
        };
    
        // function 
        QFont.prototype.initialize = function(...args) 
          
        {
          //print("JS: QFont.prototype.initialize");
          return this.__PROXY__.initialize(...args);
        };
    
        // function 
        QFont.prototype.cleanup = function(...args) 
          
        {
          //print("JS: QFont.prototype.cleanup");
          return this.__PROXY__.cleanup(...args);
        };
    
        // function 
        QFont.prototype.cacheStatistics = function(...args) 
          
        {
          //print("JS: QFont.prototype.cacheStatistics");
          return this.__PROXY__.cacheStatistics(...args);
        };
    
        // function 
        QFont.prototype.defaultFamily = function(...args) 
          
        {
          //print("JS: QFont.prototype.defaultFamily");
          return this.__PROXY__.defaultFamily(...args);
        };
    
        // function 
        QFont.prototype.resolve = function(...args) 
          
        {
          //print("JS: QFont.prototype.resolve");
          return this.__PROXY__.resolve(...args);
        };
    
        // function 
        QFont.prototype.resolveMask = function(...args) 
          
        {
          //print("JS: QFont.prototype.resolveMask");
          return this.__PROXY__.resolveMask(...args);
        };
    
        // function 
        QFont.prototype.setResolveMask = function(...args) 
          
        {
          //print("JS: QFont.prototype.setResolveMask");
          return this.__PROXY__.setResolveMask(...args);
        };
    
        // function 
        QFont.prototype.detach = function(...args) 
          
        {
          //print("JS: QFont.prototype.detach");
          return this.__PROXY__.detach(...args);
        };
    

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

      QFont.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      