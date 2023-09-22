
      // auto generated
      //var self;

      // class constructor:
      function QPageSize() {
        

        // should be QPageSize_BaseJs.call(this, engine):
        //QPageSize.prototype = new QPageSize_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QPageSize.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QPageSize);
            //}
          }
          else {
            qWarning("QPageSize.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QPageSize_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPageSize);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPageSize);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QPageSize_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPageSize);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPageSize);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPageSize_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPageSize);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPageSize);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPageSize_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPageSize);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPageSize);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPageSize_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPageSize);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPageSize);
  }

  
  else {
    
        print("QPageSize(): wrong number / type of arguments");
      
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

      //QPageSize.prototype = new QPageSize_BaseJs(engine);
      //QPageSize.prototype = new QPageSize_Wrapper(engine);
      QPageSize.prototype = new Object();

      QPageSize.prototype.toString = function() {
          //return "QPageSize [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPageSize [JS]";
        };
      QPageSize.getObjectType = function() {
        
            return RJSType_QPageSize.getIdStatic();
          
      };

      QPageSize.prototype.getObjectType = function() {
        
            return RJSType_QPageSize.getIdStatic();
          
      };

      QPageSize.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QPageSize.getIdStatic()) {
              return true;
            }
          

        return false;


        
      };

      // enum values:
      
  // enum: PageSizeId
QPageSize.Letter = QPageSize_Wrapper.Letter;
QPageSize.Legal = QPageSize_Wrapper.Legal;
QPageSize.Executive = QPageSize_Wrapper.Executive;
QPageSize.A0 = QPageSize_Wrapper.A0;
QPageSize.A1 = QPageSize_Wrapper.A1;
QPageSize.A2 = QPageSize_Wrapper.A2;
QPageSize.A3 = QPageSize_Wrapper.A3;
QPageSize.A4 = QPageSize_Wrapper.A4;
QPageSize.A5 = QPageSize_Wrapper.A5;
QPageSize.A6 = QPageSize_Wrapper.A6;
QPageSize.A7 = QPageSize_Wrapper.A7;
QPageSize.A8 = QPageSize_Wrapper.A8;
QPageSize.A9 = QPageSize_Wrapper.A9;
QPageSize.A10 = QPageSize_Wrapper.A10;
QPageSize.B0 = QPageSize_Wrapper.B0;
QPageSize.B1 = QPageSize_Wrapper.B1;
QPageSize.B2 = QPageSize_Wrapper.B2;
QPageSize.B3 = QPageSize_Wrapper.B3;
QPageSize.B4 = QPageSize_Wrapper.B4;
QPageSize.B5 = QPageSize_Wrapper.B5;
QPageSize.B6 = QPageSize_Wrapper.B6;
QPageSize.B7 = QPageSize_Wrapper.B7;
QPageSize.B8 = QPageSize_Wrapper.B8;
QPageSize.B9 = QPageSize_Wrapper.B9;
QPageSize.B10 = QPageSize_Wrapper.B10;
QPageSize.C5E = QPageSize_Wrapper.C5E;
QPageSize.Comm10E = QPageSize_Wrapper.Comm10E;
QPageSize.DLE = QPageSize_Wrapper.DLE;
QPageSize.Folio = QPageSize_Wrapper.Folio;
QPageSize.Ledger = QPageSize_Wrapper.Ledger;
QPageSize.Tabloid = QPageSize_Wrapper.Tabloid;
QPageSize.Custom = QPageSize_Wrapper.Custom;
QPageSize.A3Extra = QPageSize_Wrapper.A3Extra;
QPageSize.A4Extra = QPageSize_Wrapper.A4Extra;
QPageSize.A4Plus = QPageSize_Wrapper.A4Plus;
QPageSize.A4Small = QPageSize_Wrapper.A4Small;
QPageSize.A5Extra = QPageSize_Wrapper.A5Extra;
QPageSize.B5Extra = QPageSize_Wrapper.B5Extra;
QPageSize.JisB0 = QPageSize_Wrapper.JisB0;
QPageSize.JisB1 = QPageSize_Wrapper.JisB1;
QPageSize.JisB2 = QPageSize_Wrapper.JisB2;
QPageSize.JisB3 = QPageSize_Wrapper.JisB3;
QPageSize.JisB4 = QPageSize_Wrapper.JisB4;
QPageSize.JisB5 = QPageSize_Wrapper.JisB5;
QPageSize.JisB6 = QPageSize_Wrapper.JisB6;
QPageSize.JisB7 = QPageSize_Wrapper.JisB7;
QPageSize.JisB8 = QPageSize_Wrapper.JisB8;
QPageSize.JisB9 = QPageSize_Wrapper.JisB9;
QPageSize.JisB10 = QPageSize_Wrapper.JisB10;
QPageSize.AnsiC = QPageSize_Wrapper.AnsiC;
QPageSize.AnsiD = QPageSize_Wrapper.AnsiD;
QPageSize.AnsiE = QPageSize_Wrapper.AnsiE;
QPageSize.LegalExtra = QPageSize_Wrapper.LegalExtra;
QPageSize.LetterExtra = QPageSize_Wrapper.LetterExtra;
QPageSize.LetterPlus = QPageSize_Wrapper.LetterPlus;
QPageSize.LetterSmall = QPageSize_Wrapper.LetterSmall;
QPageSize.TabloidExtra = QPageSize_Wrapper.TabloidExtra;
QPageSize.ArchA = QPageSize_Wrapper.ArchA;
QPageSize.ArchB = QPageSize_Wrapper.ArchB;
QPageSize.ArchC = QPageSize_Wrapper.ArchC;
QPageSize.ArchD = QPageSize_Wrapper.ArchD;
QPageSize.ArchE = QPageSize_Wrapper.ArchE;
QPageSize.Imperial7x9 = QPageSize_Wrapper.Imperial7x9;
QPageSize.Imperial8x10 = QPageSize_Wrapper.Imperial8x10;
QPageSize.Imperial9x11 = QPageSize_Wrapper.Imperial9x11;
QPageSize.Imperial9x12 = QPageSize_Wrapper.Imperial9x12;
QPageSize.Imperial10x11 = QPageSize_Wrapper.Imperial10x11;
QPageSize.Imperial10x13 = QPageSize_Wrapper.Imperial10x13;
QPageSize.Imperial10x14 = QPageSize_Wrapper.Imperial10x14;
QPageSize.Imperial12x11 = QPageSize_Wrapper.Imperial12x11;
QPageSize.Imperial15x11 = QPageSize_Wrapper.Imperial15x11;
QPageSize.ExecutiveStandard = QPageSize_Wrapper.ExecutiveStandard;
QPageSize.Note = QPageSize_Wrapper.Note;
QPageSize.Quarto = QPageSize_Wrapper.Quarto;
QPageSize.Statement = QPageSize_Wrapper.Statement;
QPageSize.SuperA = QPageSize_Wrapper.SuperA;
QPageSize.SuperB = QPageSize_Wrapper.SuperB;
QPageSize.Postcard = QPageSize_Wrapper.Postcard;
QPageSize.DoublePostcard = QPageSize_Wrapper.DoublePostcard;
QPageSize.Prc16K = QPageSize_Wrapper.Prc16K;
QPageSize.Prc32K = QPageSize_Wrapper.Prc32K;
QPageSize.Prc32KBig = QPageSize_Wrapper.Prc32KBig;
QPageSize.FanFoldUS = QPageSize_Wrapper.FanFoldUS;
QPageSize.FanFoldGerman = QPageSize_Wrapper.FanFoldGerman;
QPageSize.FanFoldGermanLegal = QPageSize_Wrapper.FanFoldGermanLegal;
QPageSize.EnvelopeB4 = QPageSize_Wrapper.EnvelopeB4;
QPageSize.EnvelopeB5 = QPageSize_Wrapper.EnvelopeB5;
QPageSize.EnvelopeB6 = QPageSize_Wrapper.EnvelopeB6;
QPageSize.EnvelopeC0 = QPageSize_Wrapper.EnvelopeC0;
QPageSize.EnvelopeC1 = QPageSize_Wrapper.EnvelopeC1;
QPageSize.EnvelopeC2 = QPageSize_Wrapper.EnvelopeC2;
QPageSize.EnvelopeC3 = QPageSize_Wrapper.EnvelopeC3;
QPageSize.EnvelopeC4 = QPageSize_Wrapper.EnvelopeC4;
QPageSize.EnvelopeC6 = QPageSize_Wrapper.EnvelopeC6;
QPageSize.EnvelopeC65 = QPageSize_Wrapper.EnvelopeC65;
QPageSize.EnvelopeC7 = QPageSize_Wrapper.EnvelopeC7;
QPageSize.Envelope9 = QPageSize_Wrapper.Envelope9;
QPageSize.Envelope11 = QPageSize_Wrapper.Envelope11;
QPageSize.Envelope12 = QPageSize_Wrapper.Envelope12;
QPageSize.Envelope14 = QPageSize_Wrapper.Envelope14;
QPageSize.EnvelopeMonarch = QPageSize_Wrapper.EnvelopeMonarch;
QPageSize.EnvelopePersonal = QPageSize_Wrapper.EnvelopePersonal;
QPageSize.EnvelopeChou3 = QPageSize_Wrapper.EnvelopeChou3;
QPageSize.EnvelopeChou4 = QPageSize_Wrapper.EnvelopeChou4;
QPageSize.EnvelopeInvite = QPageSize_Wrapper.EnvelopeInvite;
QPageSize.EnvelopeItalian = QPageSize_Wrapper.EnvelopeItalian;
QPageSize.EnvelopeKaku2 = QPageSize_Wrapper.EnvelopeKaku2;
QPageSize.EnvelopeKaku3 = QPageSize_Wrapper.EnvelopeKaku3;
QPageSize.EnvelopePrc1 = QPageSize_Wrapper.EnvelopePrc1;
QPageSize.EnvelopePrc2 = QPageSize_Wrapper.EnvelopePrc2;
QPageSize.EnvelopePrc3 = QPageSize_Wrapper.EnvelopePrc3;
QPageSize.EnvelopePrc4 = QPageSize_Wrapper.EnvelopePrc4;
QPageSize.EnvelopePrc5 = QPageSize_Wrapper.EnvelopePrc5;
QPageSize.EnvelopePrc6 = QPageSize_Wrapper.EnvelopePrc6;
QPageSize.EnvelopePrc7 = QPageSize_Wrapper.EnvelopePrc7;
QPageSize.EnvelopePrc8 = QPageSize_Wrapper.EnvelopePrc8;
QPageSize.EnvelopePrc9 = QPageSize_Wrapper.EnvelopePrc9;
QPageSize.EnvelopePrc10 = QPageSize_Wrapper.EnvelopePrc10;
QPageSize.EnvelopeYou4 = QPageSize_Wrapper.EnvelopeYou4;
QPageSize.LastPageSize = QPageSize_Wrapper.LastPageSize;
QPageSize.AnsiA = QPageSize_Wrapper.AnsiA;
QPageSize.AnsiB = QPageSize_Wrapper.AnsiB;
QPageSize.EnvelopeC5 = QPageSize_Wrapper.EnvelopeC5;
QPageSize.EnvelopeDL = QPageSize_Wrapper.EnvelopeDL;
QPageSize.Envelope10 = QPageSize_Wrapper.Envelope10;

  // enum: Unit
QPageSize.Millimeter = QPageSize_Wrapper.Millimeter;
QPageSize.Point = QPageSize_Wrapper.Point;
QPageSize.Inch = QPageSize_Wrapper.Inch;
QPageSize.Pica = QPageSize_Wrapper.Pica;
QPageSize.Didot = QPageSize_Wrapper.Didot;
QPageSize.Cicero = QPageSize_Wrapper.Cicero;

  // enum: SizeMatchPolicy
QPageSize.FuzzyMatch = QPageSize_Wrapper.FuzzyMatch;
QPageSize.FuzzyOrientationMatch = QPageSize_Wrapper.FuzzyOrientationMatch;
QPageSize.ExactMatch = QPageSize_Wrapper.ExactMatch;


      // functions:
      

      // static functions:
      

        // static function 
        QPageSize.key = function() 
          
        {
          //print("JS: QPageSize.key");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QPageSize_WrapperSingletonInstance.key(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QPageSize);
  }

  
  else {
    
        print("QPageSize.key(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPageSize.name = function() 
          
        {
          //print("JS: QPageSize.name");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QPageSize_WrapperSingletonInstance.name(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QPageSize);
  }

  
  else {
    
        print("QPageSize.name(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPageSize.id = function() 
          
        {
          //print("JS: QPageSize.id");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QPageSize_WrapperSingletonInstance.id(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QPageSize);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QPageSize_WrapperSingletonInstance.id(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QPageSize);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QPageSize_WrapperSingletonInstance.id(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QPageSize);
  }

  
  else {
    
        print("QPageSize.id(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPageSize.windowsId = function() 
          
        {
          //print("JS: QPageSize.windowsId");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QPageSize_WrapperSingletonInstance.windowsId(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QPageSize);
  }

  
  else {
    
        print("QPageSize.windowsId(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPageSize.definitionSize = function() 
          
        {
          //print("JS: QPageSize.definitionSize");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QPageSize_WrapperSingletonInstance.definitionSize(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QPageSize);
  }

  
  else {
    
        print("QPageSize.definitionSize(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPageSize.definitionUnits = function() 
          
        {
          //print("JS: QPageSize.definitionUnits");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QPageSize_WrapperSingletonInstance.definitionUnits(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QPageSize);
  }

  
  else {
    
        print("QPageSize.definitionUnits(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPageSize.size = function() 
          
        {
          //print("JS: QPageSize.size");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QPageSize_WrapperSingletonInstance.size(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QPageSize);
  }

  
  else {
    
        print("QPageSize.size(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPageSize.sizePoints = function() 
          
        {
          //print("JS: QPageSize.sizePoints");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QPageSize_WrapperSingletonInstance.sizePoints(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QPageSize);
  }

  
  else {
    
        print("QPageSize.sizePoints(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPageSize.sizePixels = function() 
          
        {
          //print("JS: QPageSize.sizePixels");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QPageSize_WrapperSingletonInstance.sizePixels(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QPageSize);
  }

  
  else {
    
        print("QPageSize.sizePixels(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPageSize.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPageSize.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    