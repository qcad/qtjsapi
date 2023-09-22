
      // auto generated
      //var self;

      // class constructor:
      function QFontDatabase() {
        

        // should be QFontDatabase_BaseJs.call(this, engine):
        //QFontDatabase.prototype = new QFontDatabase_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QFontDatabase.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QFontDatabase);
            //}
          }
          else {
            qWarning("QFontDatabase.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QFontDatabase_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFontDatabase);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase(): wrong number / type of arguments");
      
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

      //QFontDatabase.prototype = new QFontDatabase_BaseJs(engine);
      //QFontDatabase.prototype = new QFontDatabase_Wrapper(engine);
      QFontDatabase.prototype = new Object();

      QFontDatabase.prototype.toString = function() {
          //return "QFontDatabase [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFontDatabase [JS]";
        };
      QFontDatabase.getObjectType = function() {
        
            return RJSType_QFontDatabase.getIdStatic();
          
      };

      QFontDatabase.prototype.getObjectType = function() {
        
            return RJSType_QFontDatabase.getIdStatic();
          
      };

      QFontDatabase.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QFontDatabase.getIdStatic()) {
              return true;
            }
          

        return false;


        
      };

      // enum values:
      
  // enum: WritingSystem
QFontDatabase.Any = QFontDatabase_Wrapper.Any;
QFontDatabase.Latin = QFontDatabase_Wrapper.Latin;
QFontDatabase.Greek = QFontDatabase_Wrapper.Greek;
QFontDatabase.Cyrillic = QFontDatabase_Wrapper.Cyrillic;
QFontDatabase.Armenian = QFontDatabase_Wrapper.Armenian;
QFontDatabase.Hebrew = QFontDatabase_Wrapper.Hebrew;
QFontDatabase.Arabic = QFontDatabase_Wrapper.Arabic;
QFontDatabase.Syriac = QFontDatabase_Wrapper.Syriac;
QFontDatabase.Thaana = QFontDatabase_Wrapper.Thaana;
QFontDatabase.Devanagari = QFontDatabase_Wrapper.Devanagari;
QFontDatabase.Bengali = QFontDatabase_Wrapper.Bengali;
QFontDatabase.Gurmukhi = QFontDatabase_Wrapper.Gurmukhi;
QFontDatabase.Gujarati = QFontDatabase_Wrapper.Gujarati;
QFontDatabase.Oriya = QFontDatabase_Wrapper.Oriya;
QFontDatabase.Tamil = QFontDatabase_Wrapper.Tamil;
QFontDatabase.Telugu = QFontDatabase_Wrapper.Telugu;
QFontDatabase.Kannada = QFontDatabase_Wrapper.Kannada;
QFontDatabase.Malayalam = QFontDatabase_Wrapper.Malayalam;
QFontDatabase.Sinhala = QFontDatabase_Wrapper.Sinhala;
QFontDatabase.Thai = QFontDatabase_Wrapper.Thai;
QFontDatabase.Lao = QFontDatabase_Wrapper.Lao;
QFontDatabase.Tibetan = QFontDatabase_Wrapper.Tibetan;
QFontDatabase.Myanmar = QFontDatabase_Wrapper.Myanmar;
QFontDatabase.Georgian = QFontDatabase_Wrapper.Georgian;
QFontDatabase.Khmer = QFontDatabase_Wrapper.Khmer;
QFontDatabase.SimplifiedChinese = QFontDatabase_Wrapper.SimplifiedChinese;
QFontDatabase.TraditionalChinese = QFontDatabase_Wrapper.TraditionalChinese;
QFontDatabase.Japanese = QFontDatabase_Wrapper.Japanese;
QFontDatabase.Korean = QFontDatabase_Wrapper.Korean;
QFontDatabase.Vietnamese = QFontDatabase_Wrapper.Vietnamese;
QFontDatabase.Symbol = QFontDatabase_Wrapper.Symbol;
QFontDatabase.Other = QFontDatabase_Wrapper.Other;
QFontDatabase.Ogham = QFontDatabase_Wrapper.Ogham;
QFontDatabase.Runic = QFontDatabase_Wrapper.Runic;
QFontDatabase.Nko = QFontDatabase_Wrapper.Nko;
QFontDatabase.WritingSystemsCount = QFontDatabase_Wrapper.WritingSystemsCount;

  // enum: SystemFont
QFontDatabase.GeneralFont = QFontDatabase_Wrapper.GeneralFont;
QFontDatabase.FixedFont = QFontDatabase_Wrapper.FixedFont;
QFontDatabase.TitleFont = QFontDatabase_Wrapper.TitleFont;
QFontDatabase.SmallestReadableFont = QFontDatabase_Wrapper.SmallestReadableFont;


      // functions:
      

      // static functions:
      

        // static function 
        QFontDatabase.standardSizes = function() 
          
        {
          //print("JS: QFontDatabase.standardSizes");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.standardSizes(
                  
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.standardSizes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.writingSystems = function() 
          
        {
          //print("JS: QFontDatabase.writingSystems");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.writingSystems(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else 
  
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.writingSystems(
                  
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.writingSystems(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.families = function() 
          
        {
          //print("JS: QFontDatabase.families");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.families(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.families(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.styles = function() 
          
        {
          //print("JS: QFontDatabase.styles");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.styles(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.styles(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.pointSizes = function() 
          
        {
          //print("JS: QFontDatabase.pointSizes");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.pointSizes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.pointSizes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.smoothSizes = function() 
          
        {
          //print("JS: QFontDatabase.smoothSizes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.smoothSizes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.smoothSizes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.styleString = function() 
          
        {
          //print("JS: QFontDatabase.styleString");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.styleString(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.styleString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.font = function() 
          
        {
          //print("JS: QFontDatabase.font");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.font(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.font(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.isBitmapScalable = function() 
          
        {
          //print("JS: QFontDatabase.isBitmapScalable");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.isBitmapScalable(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.isBitmapScalable(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.isSmoothlyScalable = function() 
          
        {
          //print("JS: QFontDatabase.isSmoothlyScalable");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.isSmoothlyScalable(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.isSmoothlyScalable(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.isScalable = function() 
          
        {
          //print("JS: QFontDatabase.isScalable");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.isScalable(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.isScalable(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.isFixedPitch = function() 
          
        {
          //print("JS: QFontDatabase.isFixedPitch");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.isFixedPitch(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.isFixedPitch(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.italic = function() 
          
        {
          //print("JS: QFontDatabase.italic");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.italic(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.italic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.bold = function() 
          
        {
          //print("JS: QFontDatabase.bold");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.bold(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.bold(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.weight = function() 
          
        {
          //print("JS: QFontDatabase.weight");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.weight(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.weight(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.hasFamily = function() 
          
        {
          //print("JS: QFontDatabase.hasFamily");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.hasFamily(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.hasFamily(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.isPrivateFamily = function() 
          
        {
          //print("JS: QFontDatabase.isPrivateFamily");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.isPrivateFamily(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.isPrivateFamily(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.writingSystemName = function() 
          
        {
          //print("JS: QFontDatabase.writingSystemName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.writingSystemName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.writingSystemName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.writingSystemSample = function() 
          
        {
          //print("JS: QFontDatabase.writingSystemSample");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.writingSystemSample(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.writingSystemSample(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.addApplicationFont = function() 
          
        {
          //print("JS: QFontDatabase.addApplicationFont");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.addApplicationFont(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.addApplicationFont(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.addApplicationFontFromData = function() 
          
        {
          //print("JS: QFontDatabase.addApplicationFontFromData");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.addApplicationFontFromData(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.addApplicationFontFromData(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.applicationFontFamilies = function() 
          
        {
          //print("JS: QFontDatabase.applicationFontFamilies");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.applicationFontFamilies(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.applicationFontFamilies(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.removeApplicationFont = function() 
          
        {
          //print("JS: QFontDatabase.removeApplicationFont");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.removeApplicationFont(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.removeApplicationFont(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.removeAllApplicationFonts = function() 
          
        {
          //print("JS: QFontDatabase.removeAllApplicationFonts");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.removeAllApplicationFonts(
                  
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.removeAllApplicationFonts(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFontDatabase.systemFont = function() 
          
        {
          //print("JS: QFontDatabase.systemFont");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QFontDatabase_WrapperSingletonInstance.systemFont(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFontDatabase);
  }

  
  else {
    
        print("QFontDatabase.systemFont(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFontDatabase.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFontDatabase.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    