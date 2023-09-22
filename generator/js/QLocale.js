
      // auto generated
      //var self;

      // class constructor:
      function QLocale() {
        

        // should be QLocale_BaseJs.call(this, engine):
        //QLocale.prototype = new QLocale_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QLocale.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QLocale);
            //}
          }
          else {
            qWarning("QLocale.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QLocale_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QLocale);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLocale);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QLocale_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QLocale);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLocale);
  }

  
  else {
    
        print("QLocale(): wrong number / type of arguments");
      
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

      //QLocale.prototype = new QLocale_BaseJs(engine);
      //QLocale.prototype = new QLocale_Wrapper(engine);
      QLocale.prototype = new Object();

      QLocale.getObjectType = function() {
        
            return RJSType_QLocale.getIdStatic();
          
      };

      QLocale.prototype.getObjectType = function() {
        
            return RJSType_QLocale.getIdStatic();
          
      };

      QLocale.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QLocale.getIdStatic()) {
              return true;
            }
          

        return false;


        
      };

      // enum values:
      
  // enum: Language
QLocale.AnyLanguage = QLocale_Wrapper.AnyLanguage;
QLocale.C = QLocale_Wrapper.C;
QLocale.Abkhazian = QLocale_Wrapper.Abkhazian;
QLocale.Afar = QLocale_Wrapper.Afar;
QLocale.Afrikaans = QLocale_Wrapper.Afrikaans;
QLocale.Aghem = QLocale_Wrapper.Aghem;
QLocale.Akan = QLocale_Wrapper.Akan;
QLocale.Akkadian = QLocale_Wrapper.Akkadian;
QLocale.Akoose = QLocale_Wrapper.Akoose;
QLocale.Albanian = QLocale_Wrapper.Albanian;
QLocale.AmericanSignLanguage = QLocale_Wrapper.AmericanSignLanguage;
QLocale.Amharic = QLocale_Wrapper.Amharic;
QLocale.AncientEgyptian = QLocale_Wrapper.AncientEgyptian;
QLocale.AncientGreek = QLocale_Wrapper.AncientGreek;
QLocale.Arabic = QLocale_Wrapper.Arabic;
QLocale.Aragonese = QLocale_Wrapper.Aragonese;
QLocale.Aramaic = QLocale_Wrapper.Aramaic;
QLocale.Armenian = QLocale_Wrapper.Armenian;
QLocale.Assamese = QLocale_Wrapper.Assamese;
QLocale.Asturian = QLocale_Wrapper.Asturian;
QLocale.Asu = QLocale_Wrapper.Asu;
QLocale.Atsam = QLocale_Wrapper.Atsam;
QLocale.Avaric = QLocale_Wrapper.Avaric;
QLocale.Avestan = QLocale_Wrapper.Avestan;
QLocale.Aymara = QLocale_Wrapper.Aymara;
QLocale.Azerbaijani = QLocale_Wrapper.Azerbaijani;
QLocale.Bafia = QLocale_Wrapper.Bafia;
QLocale.Balinese = QLocale_Wrapper.Balinese;
QLocale.Bambara = QLocale_Wrapper.Bambara;
QLocale.Bamun = QLocale_Wrapper.Bamun;
QLocale.Bangla = QLocale_Wrapper.Bangla;
QLocale.Basaa = QLocale_Wrapper.Basaa;
QLocale.Bashkir = QLocale_Wrapper.Bashkir;
QLocale.Basque = QLocale_Wrapper.Basque;
QLocale.BatakToba = QLocale_Wrapper.BatakToba;
QLocale.Belarusian = QLocale_Wrapper.Belarusian;
QLocale.Bemba = QLocale_Wrapper.Bemba;
QLocale.Bena = QLocale_Wrapper.Bena;
QLocale.Bhojpuri = QLocale_Wrapper.Bhojpuri;
QLocale.Bislama = QLocale_Wrapper.Bislama;
QLocale.Blin = QLocale_Wrapper.Blin;
QLocale.Bodo = QLocale_Wrapper.Bodo;
QLocale.Bosnian = QLocale_Wrapper.Bosnian;
QLocale.Breton = QLocale_Wrapper.Breton;
QLocale.Buginese = QLocale_Wrapper.Buginese;
QLocale.Bulgarian = QLocale_Wrapper.Bulgarian;
QLocale.Burmese = QLocale_Wrapper.Burmese;
QLocale.Cantonese = QLocale_Wrapper.Cantonese;
QLocale.Catalan = QLocale_Wrapper.Catalan;
QLocale.Cebuano = QLocale_Wrapper.Cebuano;
QLocale.CentralAtlasTamazight = QLocale_Wrapper.CentralAtlasTamazight;
QLocale.CentralKurdish = QLocale_Wrapper.CentralKurdish;
QLocale.Chakma = QLocale_Wrapper.Chakma;
QLocale.Chamorro = QLocale_Wrapper.Chamorro;
QLocale.Chechen = QLocale_Wrapper.Chechen;
QLocale.Cherokee = QLocale_Wrapper.Cherokee;
QLocale.Chickasaw = QLocale_Wrapper.Chickasaw;
QLocale.Chiga = QLocale_Wrapper.Chiga;
QLocale.Chinese = QLocale_Wrapper.Chinese;
QLocale.Church = QLocale_Wrapper.Church;
QLocale.Chuvash = QLocale_Wrapper.Chuvash;
QLocale.Colognian = QLocale_Wrapper.Colognian;
QLocale.Coptic = QLocale_Wrapper.Coptic;
QLocale.Cornish = QLocale_Wrapper.Cornish;
QLocale.Corsican = QLocale_Wrapper.Corsican;
QLocale.Cree = QLocale_Wrapper.Cree;
QLocale.Croatian = QLocale_Wrapper.Croatian;
QLocale.Czech = QLocale_Wrapper.Czech;
QLocale.Danish = QLocale_Wrapper.Danish;
QLocale.Divehi = QLocale_Wrapper.Divehi;
QLocale.Dogri = QLocale_Wrapper.Dogri;
QLocale.Duala = QLocale_Wrapper.Duala;
QLocale.Dutch = QLocale_Wrapper.Dutch;
QLocale.Dzongkha = QLocale_Wrapper.Dzongkha;
QLocale.Embu = QLocale_Wrapper.Embu;
QLocale.English = QLocale_Wrapper.English;
QLocale.Erzya = QLocale_Wrapper.Erzya;
QLocale.Esperanto = QLocale_Wrapper.Esperanto;
QLocale.Estonian = QLocale_Wrapper.Estonian;
QLocale.Ewe = QLocale_Wrapper.Ewe;
QLocale.Ewondo = QLocale_Wrapper.Ewondo;
QLocale.Faroese = QLocale_Wrapper.Faroese;
QLocale.Fijian = QLocale_Wrapper.Fijian;
QLocale.Filipino = QLocale_Wrapper.Filipino;
QLocale.Finnish = QLocale_Wrapper.Finnish;
QLocale.French = QLocale_Wrapper.French;
QLocale.Friulian = QLocale_Wrapper.Friulian;
QLocale.Fulah = QLocale_Wrapper.Fulah;
QLocale.Gaelic = QLocale_Wrapper.Gaelic;
QLocale.Ga = QLocale_Wrapper.Ga;
QLocale.Galician = QLocale_Wrapper.Galician;
QLocale.Ganda = QLocale_Wrapper.Ganda;
QLocale.Geez = QLocale_Wrapper.Geez;
QLocale.Georgian = QLocale_Wrapper.Georgian;
QLocale.German = QLocale_Wrapper.German;
QLocale.Gothic = QLocale_Wrapper.Gothic;
QLocale.Greek = QLocale_Wrapper.Greek;
QLocale.Guarani = QLocale_Wrapper.Guarani;
QLocale.Gujarati = QLocale_Wrapper.Gujarati;
QLocale.Gusii = QLocale_Wrapper.Gusii;
QLocale.Haitian = QLocale_Wrapper.Haitian;
QLocale.Hausa = QLocale_Wrapper.Hausa;
QLocale.Hawaiian = QLocale_Wrapper.Hawaiian;
QLocale.Hebrew = QLocale_Wrapper.Hebrew;
QLocale.Herero = QLocale_Wrapper.Herero;
QLocale.Hindi = QLocale_Wrapper.Hindi;
QLocale.HiriMotu = QLocale_Wrapper.HiriMotu;
QLocale.Hungarian = QLocale_Wrapper.Hungarian;
QLocale.Icelandic = QLocale_Wrapper.Icelandic;
QLocale.Ido = QLocale_Wrapper.Ido;
QLocale.Igbo = QLocale_Wrapper.Igbo;
QLocale.InariSami = QLocale_Wrapper.InariSami;
QLocale.Indonesian = QLocale_Wrapper.Indonesian;
QLocale.Ingush = QLocale_Wrapper.Ingush;
QLocale.Interlingua = QLocale_Wrapper.Interlingua;
QLocale.Interlingue = QLocale_Wrapper.Interlingue;
QLocale.Inuktitut = QLocale_Wrapper.Inuktitut;
QLocale.Inupiaq = QLocale_Wrapper.Inupiaq;
QLocale.Irish = QLocale_Wrapper.Irish;
QLocale.Italian = QLocale_Wrapper.Italian;
QLocale.Japanese = QLocale_Wrapper.Japanese;
QLocale.Javanese = QLocale_Wrapper.Javanese;
QLocale.Jju = QLocale_Wrapper.Jju;
QLocale.JolaFonyi = QLocale_Wrapper.JolaFonyi;
QLocale.Kabuverdianu = QLocale_Wrapper.Kabuverdianu;
QLocale.Kabyle = QLocale_Wrapper.Kabyle;
QLocale.Kako = QLocale_Wrapper.Kako;
QLocale.Kalaallisut = QLocale_Wrapper.Kalaallisut;
QLocale.Kalenjin = QLocale_Wrapper.Kalenjin;
QLocale.Kamba = QLocale_Wrapper.Kamba;
QLocale.Kannada = QLocale_Wrapper.Kannada;
QLocale.Kanuri = QLocale_Wrapper.Kanuri;
QLocale.Kashmiri = QLocale_Wrapper.Kashmiri;
QLocale.Kazakh = QLocale_Wrapper.Kazakh;
QLocale.Kenyang = QLocale_Wrapper.Kenyang;
QLocale.Khmer = QLocale_Wrapper.Khmer;
QLocale.Kiche = QLocale_Wrapper.Kiche;
QLocale.Kikuyu = QLocale_Wrapper.Kikuyu;
QLocale.Kinyarwanda = QLocale_Wrapper.Kinyarwanda;
QLocale.Komi = QLocale_Wrapper.Komi;
QLocale.Kongo = QLocale_Wrapper.Kongo;
QLocale.Konkani = QLocale_Wrapper.Konkani;
QLocale.Korean = QLocale_Wrapper.Korean;
QLocale.Koro = QLocale_Wrapper.Koro;
QLocale.KoyraboroSenni = QLocale_Wrapper.KoyraboroSenni;
QLocale.KoyraChiini = QLocale_Wrapper.KoyraChiini;
QLocale.Kpelle = QLocale_Wrapper.Kpelle;
QLocale.Kuanyama = QLocale_Wrapper.Kuanyama;
QLocale.Kurdish = QLocale_Wrapper.Kurdish;
QLocale.Kwasio = QLocale_Wrapper.Kwasio;
QLocale.Kyrgyz = QLocale_Wrapper.Kyrgyz;
QLocale.Lakota = QLocale_Wrapper.Lakota;
QLocale.Langi = QLocale_Wrapper.Langi;
QLocale.Lao = QLocale_Wrapper.Lao;
QLocale.Latin = QLocale_Wrapper.Latin;
QLocale.Latvian = QLocale_Wrapper.Latvian;
QLocale.Lezghian = QLocale_Wrapper.Lezghian;
QLocale.Limburgish = QLocale_Wrapper.Limburgish;
QLocale.Lingala = QLocale_Wrapper.Lingala;
QLocale.LiteraryChinese = QLocale_Wrapper.LiteraryChinese;
QLocale.Lithuanian = QLocale_Wrapper.Lithuanian;
QLocale.Lojban = QLocale_Wrapper.Lojban;
QLocale.LowerSorbian = QLocale_Wrapper.LowerSorbian;
QLocale.LowGerman = QLocale_Wrapper.LowGerman;
QLocale.LubaKatanga = QLocale_Wrapper.LubaKatanga;
QLocale.LuleSami = QLocale_Wrapper.LuleSami;
QLocale.Luo = QLocale_Wrapper.Luo;
QLocale.Luxembourgish = QLocale_Wrapper.Luxembourgish;
QLocale.Luyia = QLocale_Wrapper.Luyia;
QLocale.Macedonian = QLocale_Wrapper.Macedonian;
QLocale.Machame = QLocale_Wrapper.Machame;
QLocale.Maithili = QLocale_Wrapper.Maithili;
QLocale.MakhuwaMeetto = QLocale_Wrapper.MakhuwaMeetto;
QLocale.Makonde = QLocale_Wrapper.Makonde;
QLocale.Malagasy = QLocale_Wrapper.Malagasy;
QLocale.Malayalam = QLocale_Wrapper.Malayalam;
QLocale.Malay = QLocale_Wrapper.Malay;
QLocale.Maltese = QLocale_Wrapper.Maltese;
QLocale.Mandingo = QLocale_Wrapper.Mandingo;
QLocale.Manipuri = QLocale_Wrapper.Manipuri;
QLocale.Manx = QLocale_Wrapper.Manx;
QLocale.Maori = QLocale_Wrapper.Maori;
QLocale.Mapuche = QLocale_Wrapper.Mapuche;
QLocale.Marathi = QLocale_Wrapper.Marathi;
QLocale.Marshallese = QLocale_Wrapper.Marshallese;
QLocale.Masai = QLocale_Wrapper.Masai;
QLocale.Mazanderani = QLocale_Wrapper.Mazanderani;
QLocale.Mende = QLocale_Wrapper.Mende;
QLocale.Meru = QLocale_Wrapper.Meru;
QLocale.Meta = QLocale_Wrapper.Meta;
QLocale.Mohawk = QLocale_Wrapper.Mohawk;
QLocale.Mongolian = QLocale_Wrapper.Mongolian;
QLocale.Morisyen = QLocale_Wrapper.Morisyen;
QLocale.Mundang = QLocale_Wrapper.Mundang;
QLocale.Muscogee = QLocale_Wrapper.Muscogee;
QLocale.Nama = QLocale_Wrapper.Nama;
QLocale.NauruLanguage = QLocale_Wrapper.NauruLanguage;
QLocale.Navajo = QLocale_Wrapper.Navajo;
QLocale.Ndonga = QLocale_Wrapper.Ndonga;
QLocale.Nepali = QLocale_Wrapper.Nepali;
QLocale.Newari = QLocale_Wrapper.Newari;
QLocale.Ngiemboon = QLocale_Wrapper.Ngiemboon;
QLocale.Ngomba = QLocale_Wrapper.Ngomba;
QLocale.NigerianPidgin = QLocale_Wrapper.NigerianPidgin;
QLocale.Nko = QLocale_Wrapper.Nko;
QLocale.NorthernLuri = QLocale_Wrapper.NorthernLuri;
QLocale.NorthernSami = QLocale_Wrapper.NorthernSami;
QLocale.NorthernSotho = QLocale_Wrapper.NorthernSotho;
QLocale.NorthNdebele = QLocale_Wrapper.NorthNdebele;
QLocale.NorwegianBokmal = QLocale_Wrapper.NorwegianBokmal;
QLocale.NorwegianNynorsk = QLocale_Wrapper.NorwegianNynorsk;
QLocale.Nuer = QLocale_Wrapper.Nuer;
QLocale.Nyanja = QLocale_Wrapper.Nyanja;
QLocale.Nyankole = QLocale_Wrapper.Nyankole;
QLocale.Occitan = QLocale_Wrapper.Occitan;
QLocale.Odia = QLocale_Wrapper.Odia;
QLocale.Ojibwa = QLocale_Wrapper.Ojibwa;
QLocale.OldIrish = QLocale_Wrapper.OldIrish;
QLocale.OldNorse = QLocale_Wrapper.OldNorse;
QLocale.OldPersian = QLocale_Wrapper.OldPersian;
QLocale.Oromo = QLocale_Wrapper.Oromo;
QLocale.Osage = QLocale_Wrapper.Osage;
QLocale.Ossetic = QLocale_Wrapper.Ossetic;
QLocale.Pahlavi = QLocale_Wrapper.Pahlavi;
QLocale.Palauan = QLocale_Wrapper.Palauan;
QLocale.Pali = QLocale_Wrapper.Pali;
QLocale.Papiamento = QLocale_Wrapper.Papiamento;
QLocale.Pashto = QLocale_Wrapper.Pashto;
QLocale.Persian = QLocale_Wrapper.Persian;
QLocale.Phoenician = QLocale_Wrapper.Phoenician;
QLocale.Polish = QLocale_Wrapper.Polish;
QLocale.Portuguese = QLocale_Wrapper.Portuguese;
QLocale.Prussian = QLocale_Wrapper.Prussian;
QLocale.Punjabi = QLocale_Wrapper.Punjabi;
QLocale.Quechua = QLocale_Wrapper.Quechua;
QLocale.Romanian = QLocale_Wrapper.Romanian;
QLocale.Romansh = QLocale_Wrapper.Romansh;
QLocale.Rombo = QLocale_Wrapper.Rombo;
QLocale.Rundi = QLocale_Wrapper.Rundi;
QLocale.Russian = QLocale_Wrapper.Russian;
QLocale.Rwa = QLocale_Wrapper.Rwa;
QLocale.Saho = QLocale_Wrapper.Saho;
QLocale.Sakha = QLocale_Wrapper.Sakha;
QLocale.Samburu = QLocale_Wrapper.Samburu;
QLocale.Samoan = QLocale_Wrapper.Samoan;
QLocale.Sango = QLocale_Wrapper.Sango;
QLocale.Sangu = QLocale_Wrapper.Sangu;
QLocale.Sanskrit = QLocale_Wrapper.Sanskrit;
QLocale.Santali = QLocale_Wrapper.Santali;
QLocale.Sardinian = QLocale_Wrapper.Sardinian;
QLocale.Saurashtra = QLocale_Wrapper.Saurashtra;
QLocale.Sena = QLocale_Wrapper.Sena;
QLocale.Serbian = QLocale_Wrapper.Serbian;
QLocale.Shambala = QLocale_Wrapper.Shambala;
QLocale.Shona = QLocale_Wrapper.Shona;
QLocale.SichuanYi = QLocale_Wrapper.SichuanYi;
QLocale.Sicilian = QLocale_Wrapper.Sicilian;
QLocale.Sidamo = QLocale_Wrapper.Sidamo;
QLocale.Silesian = QLocale_Wrapper.Silesian;
QLocale.Sindhi = QLocale_Wrapper.Sindhi;
QLocale.Sinhala = QLocale_Wrapper.Sinhala;
QLocale.SkoltSami = QLocale_Wrapper.SkoltSami;
QLocale.Slovak = QLocale_Wrapper.Slovak;
QLocale.Slovenian = QLocale_Wrapper.Slovenian;
QLocale.Soga = QLocale_Wrapper.Soga;
QLocale.Somali = QLocale_Wrapper.Somali;
QLocale.SouthernKurdish = QLocale_Wrapper.SouthernKurdish;
QLocale.SouthernSami = QLocale_Wrapper.SouthernSami;
QLocale.SouthernSotho = QLocale_Wrapper.SouthernSotho;
QLocale.SouthNdebele = QLocale_Wrapper.SouthNdebele;
QLocale.Spanish = QLocale_Wrapper.Spanish;
QLocale.StandardMoroccanTamazight = QLocale_Wrapper.StandardMoroccanTamazight;
QLocale.Sundanese = QLocale_Wrapper.Sundanese;
QLocale.Swahili = QLocale_Wrapper.Swahili;
QLocale.Swati = QLocale_Wrapper.Swati;
QLocale.Swedish = QLocale_Wrapper.Swedish;
QLocale.SwissGerman = QLocale_Wrapper.SwissGerman;
QLocale.Syriac = QLocale_Wrapper.Syriac;
QLocale.Tachelhit = QLocale_Wrapper.Tachelhit;
QLocale.Tahitian = QLocale_Wrapper.Tahitian;
QLocale.TaiDam = QLocale_Wrapper.TaiDam;
QLocale.Taita = QLocale_Wrapper.Taita;
QLocale.Tajik = QLocale_Wrapper.Tajik;
QLocale.Tamil = QLocale_Wrapper.Tamil;
QLocale.Taroko = QLocale_Wrapper.Taroko;
QLocale.Tasawaq = QLocale_Wrapper.Tasawaq;
QLocale.Tatar = QLocale_Wrapper.Tatar;
QLocale.Telugu = QLocale_Wrapper.Telugu;
QLocale.Teso = QLocale_Wrapper.Teso;
QLocale.Thai = QLocale_Wrapper.Thai;
QLocale.Tibetan = QLocale_Wrapper.Tibetan;
QLocale.Tigre = QLocale_Wrapper.Tigre;
QLocale.Tigrinya = QLocale_Wrapper.Tigrinya;
QLocale.TokelauLanguage = QLocale_Wrapper.TokelauLanguage;
QLocale.TokPisin = QLocale_Wrapper.TokPisin;
QLocale.Tongan = QLocale_Wrapper.Tongan;
QLocale.Tsonga = QLocale_Wrapper.Tsonga;
QLocale.Tswana = QLocale_Wrapper.Tswana;
QLocale.Turkish = QLocale_Wrapper.Turkish;
QLocale.Turkmen = QLocale_Wrapper.Turkmen;
QLocale.TuvaluLanguage = QLocale_Wrapper.TuvaluLanguage;
QLocale.Tyap = QLocale_Wrapper.Tyap;
QLocale.Ugaritic = QLocale_Wrapper.Ugaritic;
QLocale.Ukrainian = QLocale_Wrapper.Ukrainian;
QLocale.UpperSorbian = QLocale_Wrapper.UpperSorbian;
QLocale.Urdu = QLocale_Wrapper.Urdu;
QLocale.Uyghur = QLocale_Wrapper.Uyghur;
QLocale.Uzbek = QLocale_Wrapper.Uzbek;
QLocale.Vai = QLocale_Wrapper.Vai;
QLocale.Venda = QLocale_Wrapper.Venda;
QLocale.Vietnamese = QLocale_Wrapper.Vietnamese;
QLocale.Volapuk = QLocale_Wrapper.Volapuk;
QLocale.Vunjo = QLocale_Wrapper.Vunjo;
QLocale.Walloon = QLocale_Wrapper.Walloon;
QLocale.Walser = QLocale_Wrapper.Walser;
QLocale.Warlpiri = QLocale_Wrapper.Warlpiri;
QLocale.Welsh = QLocale_Wrapper.Welsh;
QLocale.WesternBalochi = QLocale_Wrapper.WesternBalochi;
QLocale.WesternFrisian = QLocale_Wrapper.WesternFrisian;
QLocale.Wolaytta = QLocale_Wrapper.Wolaytta;
QLocale.Wolof = QLocale_Wrapper.Wolof;
QLocale.Xhosa = QLocale_Wrapper.Xhosa;
QLocale.Yangben = QLocale_Wrapper.Yangben;
QLocale.Yiddish = QLocale_Wrapper.Yiddish;
QLocale.Yoruba = QLocale_Wrapper.Yoruba;
QLocale.Zarma = QLocale_Wrapper.Zarma;
QLocale.Zhuang = QLocale_Wrapper.Zhuang;
QLocale.Zulu = QLocale_Wrapper.Zulu;
QLocale.Afan = QLocale_Wrapper.Afan;
QLocale.Bengali = QLocale_Wrapper.Bengali;
QLocale.Bhutani = QLocale_Wrapper.Bhutani;
QLocale.Byelorussian = QLocale_Wrapper.Byelorussian;
QLocale.Cambodian = QLocale_Wrapper.Cambodian;
QLocale.CentralMoroccoTamazight = QLocale_Wrapper.CentralMoroccoTamazight;
QLocale.Chewa = QLocale_Wrapper.Chewa;
QLocale.Frisian = QLocale_Wrapper.Frisian;
QLocale.Greenlandic = QLocale_Wrapper.Greenlandic;
QLocale.Inupiak = QLocale_Wrapper.Inupiak;
QLocale.Kirghiz = QLocale_Wrapper.Kirghiz;
QLocale.Kurundi = QLocale_Wrapper.Kurundi;
QLocale.Kwanyama = QLocale_Wrapper.Kwanyama;
QLocale.Navaho = QLocale_Wrapper.Navaho;
QLocale.Oriya = QLocale_Wrapper.Oriya;
QLocale.RhaetoRomance = QLocale_Wrapper.RhaetoRomance;
QLocale.Uighur = QLocale_Wrapper.Uighur;
QLocale.Uigur = QLocale_Wrapper.Uigur;
QLocale.Walamo = QLocale_Wrapper.Walamo;
QLocale.LastLanguage = QLocale_Wrapper.LastLanguage;

  // enum: Script
QLocale.AnyScript = QLocale_Wrapper.AnyScript;
QLocale.AdlamScript = QLocale_Wrapper.AdlamScript;
QLocale.AhomScript = QLocale_Wrapper.AhomScript;
QLocale.AnatolianHieroglyphsScript = QLocale_Wrapper.AnatolianHieroglyphsScript;
QLocale.ArabicScript = QLocale_Wrapper.ArabicScript;
QLocale.ArmenianScript = QLocale_Wrapper.ArmenianScript;
QLocale.AvestanScript = QLocale_Wrapper.AvestanScript;
QLocale.BalineseScript = QLocale_Wrapper.BalineseScript;
QLocale.BamumScript = QLocale_Wrapper.BamumScript;
QLocale.BanglaScript = QLocale_Wrapper.BanglaScript;
QLocale.BassaVahScript = QLocale_Wrapper.BassaVahScript;
QLocale.BatakScript = QLocale_Wrapper.BatakScript;
QLocale.BhaiksukiScript = QLocale_Wrapper.BhaiksukiScript;
QLocale.BopomofoScript = QLocale_Wrapper.BopomofoScript;
QLocale.BrahmiScript = QLocale_Wrapper.BrahmiScript;
QLocale.BrailleScript = QLocale_Wrapper.BrailleScript;
QLocale.BugineseScript = QLocale_Wrapper.BugineseScript;
QLocale.BuhidScript = QLocale_Wrapper.BuhidScript;
QLocale.CanadianAboriginalScript = QLocale_Wrapper.CanadianAboriginalScript;
QLocale.CarianScript = QLocale_Wrapper.CarianScript;
QLocale.CaucasianAlbanianScript = QLocale_Wrapper.CaucasianAlbanianScript;
QLocale.ChakmaScript = QLocale_Wrapper.ChakmaScript;
QLocale.ChamScript = QLocale_Wrapper.ChamScript;
QLocale.CherokeeScript = QLocale_Wrapper.CherokeeScript;
QLocale.CopticScript = QLocale_Wrapper.CopticScript;
QLocale.CuneiformScript = QLocale_Wrapper.CuneiformScript;
QLocale.CypriotScript = QLocale_Wrapper.CypriotScript;
QLocale.CyrillicScript = QLocale_Wrapper.CyrillicScript;
QLocale.DeseretScript = QLocale_Wrapper.DeseretScript;
QLocale.DevanagariScript = QLocale_Wrapper.DevanagariScript;
QLocale.DuployanScript = QLocale_Wrapper.DuployanScript;
QLocale.EgyptianHieroglyphsScript = QLocale_Wrapper.EgyptianHieroglyphsScript;
QLocale.ElbasanScript = QLocale_Wrapper.ElbasanScript;
QLocale.EthiopicScript = QLocale_Wrapper.EthiopicScript;
QLocale.FraserScript = QLocale_Wrapper.FraserScript;
QLocale.GeorgianScript = QLocale_Wrapper.GeorgianScript;
QLocale.GlagoliticScript = QLocale_Wrapper.GlagoliticScript;
QLocale.GothicScript = QLocale_Wrapper.GothicScript;
QLocale.GranthaScript = QLocale_Wrapper.GranthaScript;
QLocale.GreekScript = QLocale_Wrapper.GreekScript;
QLocale.GujaratiScript = QLocale_Wrapper.GujaratiScript;
QLocale.GurmukhiScript = QLocale_Wrapper.GurmukhiScript;
QLocale.HangulScript = QLocale_Wrapper.HangulScript;
QLocale.HanScript = QLocale_Wrapper.HanScript;
QLocale.HanunooScript = QLocale_Wrapper.HanunooScript;
QLocale.HanWithBopomofoScript = QLocale_Wrapper.HanWithBopomofoScript;
QLocale.HatranScript = QLocale_Wrapper.HatranScript;
QLocale.HebrewScript = QLocale_Wrapper.HebrewScript;
QLocale.HiraganaScript = QLocale_Wrapper.HiraganaScript;
QLocale.ImperialAramaicScript = QLocale_Wrapper.ImperialAramaicScript;
QLocale.InscriptionalPahlaviScript = QLocale_Wrapper.InscriptionalPahlaviScript;
QLocale.InscriptionalParthianScript = QLocale_Wrapper.InscriptionalParthianScript;
QLocale.JamoScript = QLocale_Wrapper.JamoScript;
QLocale.JapaneseScript = QLocale_Wrapper.JapaneseScript;
QLocale.JavaneseScript = QLocale_Wrapper.JavaneseScript;
QLocale.KaithiScript = QLocale_Wrapper.KaithiScript;
QLocale.KannadaScript = QLocale_Wrapper.KannadaScript;
QLocale.KatakanaScript = QLocale_Wrapper.KatakanaScript;
QLocale.KayahLiScript = QLocale_Wrapper.KayahLiScript;
QLocale.KharoshthiScript = QLocale_Wrapper.KharoshthiScript;
QLocale.KhmerScript = QLocale_Wrapper.KhmerScript;
QLocale.KhojkiScript = QLocale_Wrapper.KhojkiScript;
QLocale.KhudawadiScript = QLocale_Wrapper.KhudawadiScript;
QLocale.KoreanScript = QLocale_Wrapper.KoreanScript;
QLocale.LannaScript = QLocale_Wrapper.LannaScript;
QLocale.LaoScript = QLocale_Wrapper.LaoScript;
QLocale.LatinScript = QLocale_Wrapper.LatinScript;
QLocale.LepchaScript = QLocale_Wrapper.LepchaScript;
QLocale.LimbuScript = QLocale_Wrapper.LimbuScript;
QLocale.LinearAScript = QLocale_Wrapper.LinearAScript;
QLocale.LinearBScript = QLocale_Wrapper.LinearBScript;
QLocale.LycianScript = QLocale_Wrapper.LycianScript;
QLocale.LydianScript = QLocale_Wrapper.LydianScript;
QLocale.MahajaniScript = QLocale_Wrapper.MahajaniScript;
QLocale.MalayalamScript = QLocale_Wrapper.MalayalamScript;
QLocale.MandaeanScript = QLocale_Wrapper.MandaeanScript;
QLocale.ManichaeanScript = QLocale_Wrapper.ManichaeanScript;
QLocale.MarchenScript = QLocale_Wrapper.MarchenScript;
QLocale.MeiteiMayekScript = QLocale_Wrapper.MeiteiMayekScript;
QLocale.MendeScript = QLocale_Wrapper.MendeScript;
QLocale.MeroiticCursiveScript = QLocale_Wrapper.MeroiticCursiveScript;
QLocale.MeroiticScript = QLocale_Wrapper.MeroiticScript;
QLocale.ModiScript = QLocale_Wrapper.ModiScript;
QLocale.MongolianScript = QLocale_Wrapper.MongolianScript;
QLocale.MroScript = QLocale_Wrapper.MroScript;
QLocale.MultaniScript = QLocale_Wrapper.MultaniScript;
QLocale.MyanmarScript = QLocale_Wrapper.MyanmarScript;
QLocale.NabataeanScript = QLocale_Wrapper.NabataeanScript;
QLocale.NewaScript = QLocale_Wrapper.NewaScript;
QLocale.NewTaiLueScript = QLocale_Wrapper.NewTaiLueScript;
QLocale.NkoScript = QLocale_Wrapper.NkoScript;
QLocale.OdiaScript = QLocale_Wrapper.OdiaScript;
QLocale.OghamScript = QLocale_Wrapper.OghamScript;
QLocale.OlChikiScript = QLocale_Wrapper.OlChikiScript;
QLocale.OldHungarianScript = QLocale_Wrapper.OldHungarianScript;
QLocale.OldItalicScript = QLocale_Wrapper.OldItalicScript;
QLocale.OldNorthArabianScript = QLocale_Wrapper.OldNorthArabianScript;
QLocale.OldPermicScript = QLocale_Wrapper.OldPermicScript;
QLocale.OldPersianScript = QLocale_Wrapper.OldPersianScript;
QLocale.OldSouthArabianScript = QLocale_Wrapper.OldSouthArabianScript;
QLocale.OrkhonScript = QLocale_Wrapper.OrkhonScript;
QLocale.OsageScript = QLocale_Wrapper.OsageScript;
QLocale.OsmanyaScript = QLocale_Wrapper.OsmanyaScript;
QLocale.PahawhHmongScript = QLocale_Wrapper.PahawhHmongScript;
QLocale.PalmyreneScript = QLocale_Wrapper.PalmyreneScript;
QLocale.PauCinHauScript = QLocale_Wrapper.PauCinHauScript;
QLocale.PhagsPaScript = QLocale_Wrapper.PhagsPaScript;
QLocale.PhoenicianScript = QLocale_Wrapper.PhoenicianScript;
QLocale.PollardPhoneticScript = QLocale_Wrapper.PollardPhoneticScript;
QLocale.PsalterPahlaviScript = QLocale_Wrapper.PsalterPahlaviScript;
QLocale.RejangScript = QLocale_Wrapper.RejangScript;
QLocale.RunicScript = QLocale_Wrapper.RunicScript;
QLocale.SamaritanScript = QLocale_Wrapper.SamaritanScript;
QLocale.SaurashtraScript = QLocale_Wrapper.SaurashtraScript;
QLocale.SharadaScript = QLocale_Wrapper.SharadaScript;
QLocale.ShavianScript = QLocale_Wrapper.ShavianScript;
QLocale.SiddhamScript = QLocale_Wrapper.SiddhamScript;
QLocale.SignWritingScript = QLocale_Wrapper.SignWritingScript;
QLocale.SimplifiedHanScript = QLocale_Wrapper.SimplifiedHanScript;
QLocale.SinhalaScript = QLocale_Wrapper.SinhalaScript;
QLocale.SoraSompengScript = QLocale_Wrapper.SoraSompengScript;
QLocale.SundaneseScript = QLocale_Wrapper.SundaneseScript;
QLocale.SylotiNagriScript = QLocale_Wrapper.SylotiNagriScript;
QLocale.SyriacScript = QLocale_Wrapper.SyriacScript;
QLocale.TagalogScript = QLocale_Wrapper.TagalogScript;
QLocale.TagbanwaScript = QLocale_Wrapper.TagbanwaScript;
QLocale.TaiLeScript = QLocale_Wrapper.TaiLeScript;
QLocale.TaiVietScript = QLocale_Wrapper.TaiVietScript;
QLocale.TakriScript = QLocale_Wrapper.TakriScript;
QLocale.TamilScript = QLocale_Wrapper.TamilScript;
QLocale.TangutScript = QLocale_Wrapper.TangutScript;
QLocale.TeluguScript = QLocale_Wrapper.TeluguScript;
QLocale.ThaanaScript = QLocale_Wrapper.ThaanaScript;
QLocale.ThaiScript = QLocale_Wrapper.ThaiScript;
QLocale.TibetanScript = QLocale_Wrapper.TibetanScript;
QLocale.TifinaghScript = QLocale_Wrapper.TifinaghScript;
QLocale.TirhutaScript = QLocale_Wrapper.TirhutaScript;
QLocale.TraditionalHanScript = QLocale_Wrapper.TraditionalHanScript;
QLocale.UgariticScript = QLocale_Wrapper.UgariticScript;
QLocale.VaiScript = QLocale_Wrapper.VaiScript;
QLocale.VarangKshitiScript = QLocale_Wrapper.VarangKshitiScript;
QLocale.YiScript = QLocale_Wrapper.YiScript;
QLocale.BengaliScript = QLocale_Wrapper.BengaliScript;
QLocale.MendeKikakuiScript = QLocale_Wrapper.MendeKikakuiScript;
QLocale.OriyaScript = QLocale_Wrapper.OriyaScript;
QLocale.SimplifiedChineseScript = QLocale_Wrapper.SimplifiedChineseScript;
QLocale.TraditionalChineseScript = QLocale_Wrapper.TraditionalChineseScript;
QLocale.LastScript = QLocale_Wrapper.LastScript;

  // enum: Country
QLocale.AnyTerritory = QLocale_Wrapper.AnyTerritory;
QLocale.Afghanistan = QLocale_Wrapper.Afghanistan;
QLocale.AlandIslands = QLocale_Wrapper.AlandIslands;
QLocale.Albania = QLocale_Wrapper.Albania;
QLocale.Algeria = QLocale_Wrapper.Algeria;
QLocale.AmericanSamoa = QLocale_Wrapper.AmericanSamoa;
QLocale.Andorra = QLocale_Wrapper.Andorra;
QLocale.Angola = QLocale_Wrapper.Angola;
QLocale.Anguilla = QLocale_Wrapper.Anguilla;
QLocale.Antarctica = QLocale_Wrapper.Antarctica;
QLocale.AntiguaAndBarbuda = QLocale_Wrapper.AntiguaAndBarbuda;
QLocale.Argentina = QLocale_Wrapper.Argentina;
QLocale.Armenia = QLocale_Wrapper.Armenia;
QLocale.Aruba = QLocale_Wrapper.Aruba;
QLocale.AscensionIsland = QLocale_Wrapper.AscensionIsland;
QLocale.Australia = QLocale_Wrapper.Australia;
QLocale.Austria = QLocale_Wrapper.Austria;
QLocale.Azerbaijan = QLocale_Wrapper.Azerbaijan;
QLocale.Bahamas = QLocale_Wrapper.Bahamas;
QLocale.Bahrain = QLocale_Wrapper.Bahrain;
QLocale.Bangladesh = QLocale_Wrapper.Bangladesh;
QLocale.Barbados = QLocale_Wrapper.Barbados;
QLocale.Belarus = QLocale_Wrapper.Belarus;
QLocale.Belgium = QLocale_Wrapper.Belgium;
QLocale.Belize = QLocale_Wrapper.Belize;
QLocale.Benin = QLocale_Wrapper.Benin;
QLocale.Bermuda = QLocale_Wrapper.Bermuda;
QLocale.Bhutan = QLocale_Wrapper.Bhutan;
QLocale.Bolivia = QLocale_Wrapper.Bolivia;
QLocale.BosniaAndHerzegovina = QLocale_Wrapper.BosniaAndHerzegovina;
QLocale.Botswana = QLocale_Wrapper.Botswana;
QLocale.BouvetIsland = QLocale_Wrapper.BouvetIsland;
QLocale.Brazil = QLocale_Wrapper.Brazil;
QLocale.BritishIndianOceanTerritory = QLocale_Wrapper.BritishIndianOceanTerritory;
QLocale.BritishVirginIslands = QLocale_Wrapper.BritishVirginIslands;
QLocale.Brunei = QLocale_Wrapper.Brunei;
QLocale.Bulgaria = QLocale_Wrapper.Bulgaria;
QLocale.BurkinaFaso = QLocale_Wrapper.BurkinaFaso;
QLocale.Burundi = QLocale_Wrapper.Burundi;
QLocale.Cambodia = QLocale_Wrapper.Cambodia;
QLocale.Cameroon = QLocale_Wrapper.Cameroon;
QLocale.Canada = QLocale_Wrapper.Canada;
QLocale.CanaryIslands = QLocale_Wrapper.CanaryIslands;
QLocale.CapeVerde = QLocale_Wrapper.CapeVerde;
QLocale.CaribbeanNetherlands = QLocale_Wrapper.CaribbeanNetherlands;
QLocale.CaymanIslands = QLocale_Wrapper.CaymanIslands;
QLocale.CentralAfricanRepublic = QLocale_Wrapper.CentralAfricanRepublic;
QLocale.CeutaAndMelilla = QLocale_Wrapper.CeutaAndMelilla;
QLocale.Chad = QLocale_Wrapper.Chad;
QLocale.Chile = QLocale_Wrapper.Chile;
QLocale.China = QLocale_Wrapper.China;
QLocale.ChristmasIsland = QLocale_Wrapper.ChristmasIsland;
QLocale.ClippertonIsland = QLocale_Wrapper.ClippertonIsland;
QLocale.CocosIslands = QLocale_Wrapper.CocosIslands;
QLocale.Colombia = QLocale_Wrapper.Colombia;
QLocale.Comoros = QLocale_Wrapper.Comoros;
QLocale.CongoBrazzaville = QLocale_Wrapper.CongoBrazzaville;
QLocale.CongoKinshasa = QLocale_Wrapper.CongoKinshasa;
QLocale.CookIslands = QLocale_Wrapper.CookIslands;
QLocale.CostaRica = QLocale_Wrapper.CostaRica;
QLocale.Croatia = QLocale_Wrapper.Croatia;
QLocale.Cuba = QLocale_Wrapper.Cuba;
QLocale.Curacao = QLocale_Wrapper.Curacao;
QLocale.Cyprus = QLocale_Wrapper.Cyprus;
QLocale.Czechia = QLocale_Wrapper.Czechia;
QLocale.Denmark = QLocale_Wrapper.Denmark;
QLocale.DiegoGarcia = QLocale_Wrapper.DiegoGarcia;
QLocale.Djibouti = QLocale_Wrapper.Djibouti;
QLocale.Dominica = QLocale_Wrapper.Dominica;
QLocale.DominicanRepublic = QLocale_Wrapper.DominicanRepublic;
QLocale.Ecuador = QLocale_Wrapper.Ecuador;
QLocale.Egypt = QLocale_Wrapper.Egypt;
QLocale.ElSalvador = QLocale_Wrapper.ElSalvador;
QLocale.EquatorialGuinea = QLocale_Wrapper.EquatorialGuinea;
QLocale.Eritrea = QLocale_Wrapper.Eritrea;
QLocale.Estonia = QLocale_Wrapper.Estonia;
QLocale.Eswatini = QLocale_Wrapper.Eswatini;
QLocale.Ethiopia = QLocale_Wrapper.Ethiopia;
QLocale.Europe = QLocale_Wrapper.Europe;
QLocale.EuropeanUnion = QLocale_Wrapper.EuropeanUnion;
QLocale.FalklandIslands = QLocale_Wrapper.FalklandIslands;
QLocale.FaroeIslands = QLocale_Wrapper.FaroeIslands;
QLocale.Fiji = QLocale_Wrapper.Fiji;
QLocale.Finland = QLocale_Wrapper.Finland;
QLocale.France = QLocale_Wrapper.France;
QLocale.FrenchGuiana = QLocale_Wrapper.FrenchGuiana;
QLocale.FrenchPolynesia = QLocale_Wrapper.FrenchPolynesia;
QLocale.FrenchSouthernTerritories = QLocale_Wrapper.FrenchSouthernTerritories;
QLocale.Gabon = QLocale_Wrapper.Gabon;
QLocale.Gambia = QLocale_Wrapper.Gambia;
QLocale.Georgia = QLocale_Wrapper.Georgia;
QLocale.Germany = QLocale_Wrapper.Germany;
QLocale.Ghana = QLocale_Wrapper.Ghana;
QLocale.Gibraltar = QLocale_Wrapper.Gibraltar;
QLocale.Greece = QLocale_Wrapper.Greece;
QLocale.Greenland = QLocale_Wrapper.Greenland;
QLocale.Grenada = QLocale_Wrapper.Grenada;
QLocale.Guadeloupe = QLocale_Wrapper.Guadeloupe;
QLocale.Guam = QLocale_Wrapper.Guam;
QLocale.Guatemala = QLocale_Wrapper.Guatemala;
QLocale.Guernsey = QLocale_Wrapper.Guernsey;
QLocale.GuineaBissau = QLocale_Wrapper.GuineaBissau;
QLocale.Guinea = QLocale_Wrapper.Guinea;
QLocale.Guyana = QLocale_Wrapper.Guyana;
QLocale.Haiti = QLocale_Wrapper.Haiti;
QLocale.HeardAndMcDonaldIslands = QLocale_Wrapper.HeardAndMcDonaldIslands;
QLocale.Honduras = QLocale_Wrapper.Honduras;
QLocale.HongKong = QLocale_Wrapper.HongKong;
QLocale.Hungary = QLocale_Wrapper.Hungary;
QLocale.Iceland = QLocale_Wrapper.Iceland;
QLocale.India = QLocale_Wrapper.India;
QLocale.Indonesia = QLocale_Wrapper.Indonesia;
QLocale.Iran = QLocale_Wrapper.Iran;
QLocale.Iraq = QLocale_Wrapper.Iraq;
QLocale.Ireland = QLocale_Wrapper.Ireland;
QLocale.IsleOfMan = QLocale_Wrapper.IsleOfMan;
QLocale.Israel = QLocale_Wrapper.Israel;
QLocale.Italy = QLocale_Wrapper.Italy;
QLocale.IvoryCoast = QLocale_Wrapper.IvoryCoast;
QLocale.Jamaica = QLocale_Wrapper.Jamaica;
QLocale.Japan = QLocale_Wrapper.Japan;
QLocale.Jersey = QLocale_Wrapper.Jersey;
QLocale.Jordan = QLocale_Wrapper.Jordan;
QLocale.Kazakhstan = QLocale_Wrapper.Kazakhstan;
QLocale.Kenya = QLocale_Wrapper.Kenya;
QLocale.Kiribati = QLocale_Wrapper.Kiribati;
QLocale.Kosovo = QLocale_Wrapper.Kosovo;
QLocale.Kuwait = QLocale_Wrapper.Kuwait;
QLocale.Kyrgyzstan = QLocale_Wrapper.Kyrgyzstan;
QLocale.Laos = QLocale_Wrapper.Laos;
QLocale.LatinAmerica = QLocale_Wrapper.LatinAmerica;
QLocale.Latvia = QLocale_Wrapper.Latvia;
QLocale.Lebanon = QLocale_Wrapper.Lebanon;
QLocale.Lesotho = QLocale_Wrapper.Lesotho;
QLocale.Liberia = QLocale_Wrapper.Liberia;
QLocale.Libya = QLocale_Wrapper.Libya;
QLocale.Liechtenstein = QLocale_Wrapper.Liechtenstein;
QLocale.Lithuania = QLocale_Wrapper.Lithuania;
QLocale.Luxembourg = QLocale_Wrapper.Luxembourg;
QLocale.Macao = QLocale_Wrapper.Macao;
QLocale.Macedonia = QLocale_Wrapper.Macedonia;
QLocale.Madagascar = QLocale_Wrapper.Madagascar;
QLocale.Malawi = QLocale_Wrapper.Malawi;
QLocale.Malaysia = QLocale_Wrapper.Malaysia;
QLocale.Maldives = QLocale_Wrapper.Maldives;
QLocale.Mali = QLocale_Wrapper.Mali;
QLocale.Malta = QLocale_Wrapper.Malta;
QLocale.MarshallIslands = QLocale_Wrapper.MarshallIslands;
QLocale.Martinique = QLocale_Wrapper.Martinique;
QLocale.Mauritania = QLocale_Wrapper.Mauritania;
QLocale.Mauritius = QLocale_Wrapper.Mauritius;
QLocale.Mayotte = QLocale_Wrapper.Mayotte;
QLocale.Mexico = QLocale_Wrapper.Mexico;
QLocale.Micronesia = QLocale_Wrapper.Micronesia;
QLocale.Moldova = QLocale_Wrapper.Moldova;
QLocale.Monaco = QLocale_Wrapper.Monaco;
QLocale.Mongolia = QLocale_Wrapper.Mongolia;
QLocale.Montenegro = QLocale_Wrapper.Montenegro;
QLocale.Montserrat = QLocale_Wrapper.Montserrat;
QLocale.Morocco = QLocale_Wrapper.Morocco;
QLocale.Mozambique = QLocale_Wrapper.Mozambique;
QLocale.Myanmar = QLocale_Wrapper.Myanmar;
QLocale.Namibia = QLocale_Wrapper.Namibia;
QLocale.NauruTerritory = QLocale_Wrapper.NauruTerritory;
QLocale.Nepal = QLocale_Wrapper.Nepal;
QLocale.Netherlands = QLocale_Wrapper.Netherlands;
QLocale.NewCaledonia = QLocale_Wrapper.NewCaledonia;
QLocale.NewZealand = QLocale_Wrapper.NewZealand;
QLocale.Nicaragua = QLocale_Wrapper.Nicaragua;
QLocale.Nigeria = QLocale_Wrapper.Nigeria;
QLocale.Niger = QLocale_Wrapper.Niger;
QLocale.Niue = QLocale_Wrapper.Niue;
QLocale.NorfolkIsland = QLocale_Wrapper.NorfolkIsland;
QLocale.NorthernMarianaIslands = QLocale_Wrapper.NorthernMarianaIslands;
QLocale.NorthKorea = QLocale_Wrapper.NorthKorea;
QLocale.Norway = QLocale_Wrapper.Norway;
QLocale.Oman = QLocale_Wrapper.Oman;
QLocale.OutlyingOceania = QLocale_Wrapper.OutlyingOceania;
QLocale.Pakistan = QLocale_Wrapper.Pakistan;
QLocale.Palau = QLocale_Wrapper.Palau;
QLocale.PalestinianTerritories = QLocale_Wrapper.PalestinianTerritories;
QLocale.Panama = QLocale_Wrapper.Panama;
QLocale.PapuaNewGuinea = QLocale_Wrapper.PapuaNewGuinea;
QLocale.Paraguay = QLocale_Wrapper.Paraguay;
QLocale.Peru = QLocale_Wrapper.Peru;
QLocale.Philippines = QLocale_Wrapper.Philippines;
QLocale.Pitcairn = QLocale_Wrapper.Pitcairn;
QLocale.Poland = QLocale_Wrapper.Poland;
QLocale.Portugal = QLocale_Wrapper.Portugal;
QLocale.PuertoRico = QLocale_Wrapper.PuertoRico;
QLocale.Qatar = QLocale_Wrapper.Qatar;
QLocale.Reunion = QLocale_Wrapper.Reunion;
QLocale.Romania = QLocale_Wrapper.Romania;
QLocale.Russia = QLocale_Wrapper.Russia;
QLocale.Rwanda = QLocale_Wrapper.Rwanda;
QLocale.SaintBarthelemy = QLocale_Wrapper.SaintBarthelemy;
QLocale.SaintHelena = QLocale_Wrapper.SaintHelena;
QLocale.SaintKittsAndNevis = QLocale_Wrapper.SaintKittsAndNevis;
QLocale.SaintLucia = QLocale_Wrapper.SaintLucia;
QLocale.SaintMartin = QLocale_Wrapper.SaintMartin;
QLocale.SaintPierreAndMiquelon = QLocale_Wrapper.SaintPierreAndMiquelon;
QLocale.SaintVincentAndGrenadines = QLocale_Wrapper.SaintVincentAndGrenadines;
QLocale.Samoa = QLocale_Wrapper.Samoa;
QLocale.SanMarino = QLocale_Wrapper.SanMarino;
QLocale.SaoTomeAndPrincipe = QLocale_Wrapper.SaoTomeAndPrincipe;
QLocale.SaudiArabia = QLocale_Wrapper.SaudiArabia;
QLocale.Senegal = QLocale_Wrapper.Senegal;
QLocale.Serbia = QLocale_Wrapper.Serbia;
QLocale.Seychelles = QLocale_Wrapper.Seychelles;
QLocale.SierraLeone = QLocale_Wrapper.SierraLeone;
QLocale.Singapore = QLocale_Wrapper.Singapore;
QLocale.SintMaarten = QLocale_Wrapper.SintMaarten;
QLocale.Slovakia = QLocale_Wrapper.Slovakia;
QLocale.Slovenia = QLocale_Wrapper.Slovenia;
QLocale.SolomonIslands = QLocale_Wrapper.SolomonIslands;
QLocale.Somalia = QLocale_Wrapper.Somalia;
QLocale.SouthAfrica = QLocale_Wrapper.SouthAfrica;
QLocale.SouthGeorgiaAndSouthSandwichIslands = QLocale_Wrapper.SouthGeorgiaAndSouthSandwichIslands;
QLocale.SouthKorea = QLocale_Wrapper.SouthKorea;
QLocale.SouthSudan = QLocale_Wrapper.SouthSudan;
QLocale.Spain = QLocale_Wrapper.Spain;
QLocale.SriLanka = QLocale_Wrapper.SriLanka;
QLocale.Sudan = QLocale_Wrapper.Sudan;
QLocale.Suriname = QLocale_Wrapper.Suriname;
QLocale.SvalbardAndJanMayen = QLocale_Wrapper.SvalbardAndJanMayen;
QLocale.Sweden = QLocale_Wrapper.Sweden;
QLocale.Switzerland = QLocale_Wrapper.Switzerland;
QLocale.Syria = QLocale_Wrapper.Syria;
QLocale.Taiwan = QLocale_Wrapper.Taiwan;
QLocale.Tajikistan = QLocale_Wrapper.Tajikistan;
QLocale.Tanzania = QLocale_Wrapper.Tanzania;
QLocale.Thailand = QLocale_Wrapper.Thailand;
QLocale.TimorLeste = QLocale_Wrapper.TimorLeste;
QLocale.Togo = QLocale_Wrapper.Togo;
QLocale.TokelauTerritory = QLocale_Wrapper.TokelauTerritory;
QLocale.Tonga = QLocale_Wrapper.Tonga;
QLocale.TrinidadAndTobago = QLocale_Wrapper.TrinidadAndTobago;
QLocale.TristanDaCunha = QLocale_Wrapper.TristanDaCunha;
QLocale.Tunisia = QLocale_Wrapper.Tunisia;
QLocale.Turkey = QLocale_Wrapper.Turkey;
QLocale.Turkmenistan = QLocale_Wrapper.Turkmenistan;
QLocale.TurksAndCaicosIslands = QLocale_Wrapper.TurksAndCaicosIslands;
QLocale.TuvaluTerritory = QLocale_Wrapper.TuvaluTerritory;
QLocale.Uganda = QLocale_Wrapper.Uganda;
QLocale.Ukraine = QLocale_Wrapper.Ukraine;
QLocale.UnitedArabEmirates = QLocale_Wrapper.UnitedArabEmirates;
QLocale.UnitedKingdom = QLocale_Wrapper.UnitedKingdom;
QLocale.UnitedStatesOutlyingIslands = QLocale_Wrapper.UnitedStatesOutlyingIslands;
QLocale.UnitedStates = QLocale_Wrapper.UnitedStates;
QLocale.UnitedStatesVirginIslands = QLocale_Wrapper.UnitedStatesVirginIslands;
QLocale.Uruguay = QLocale_Wrapper.Uruguay;
QLocale.Uzbekistan = QLocale_Wrapper.Uzbekistan;
QLocale.Vanuatu = QLocale_Wrapper.Vanuatu;
QLocale.VaticanCity = QLocale_Wrapper.VaticanCity;
QLocale.Venezuela = QLocale_Wrapper.Venezuela;
QLocale.Vietnam = QLocale_Wrapper.Vietnam;
QLocale.WallisAndFutuna = QLocale_Wrapper.WallisAndFutuna;
QLocale.WesternSahara = QLocale_Wrapper.WesternSahara;
QLocale.World = QLocale_Wrapper.World;
QLocale.Yemen = QLocale_Wrapper.Yemen;
QLocale.Zambia = QLocale_Wrapper.Zambia;
QLocale.Zimbabwe = QLocale_Wrapper.Zimbabwe;
QLocale.AnyCountry = QLocale_Wrapper.AnyCountry;
QLocale.Bonaire = QLocale_Wrapper.Bonaire;
QLocale.BosniaAndHerzegowina = QLocale_Wrapper.BosniaAndHerzegowina;
QLocale.CuraSao = QLocale_Wrapper.CuraSao;
QLocale.CzechRepublic = QLocale_Wrapper.CzechRepublic;
QLocale.DemocraticRepublicOfCongo = QLocale_Wrapper.DemocraticRepublicOfCongo;
QLocale.DemocraticRepublicOfKorea = QLocale_Wrapper.DemocraticRepublicOfKorea;
QLocale.EastTimor = QLocale_Wrapper.EastTimor;
QLocale.LatinAmericaAndTheCaribbean = QLocale_Wrapper.LatinAmericaAndTheCaribbean;
QLocale.Macau = QLocale_Wrapper.Macau;
QLocale.NauruCountry = QLocale_Wrapper.NauruCountry;
QLocale.PeoplesRepublicOfCongo = QLocale_Wrapper.PeoplesRepublicOfCongo;
QLocale.RepublicOfKorea = QLocale_Wrapper.RepublicOfKorea;
QLocale.RussianFederation = QLocale_Wrapper.RussianFederation;
QLocale.SaintVincentAndTheGrenadines = QLocale_Wrapper.SaintVincentAndTheGrenadines;
QLocale.SouthGeorgiaAndTheSouthSandwichIslands = QLocale_Wrapper.SouthGeorgiaAndTheSouthSandwichIslands;
QLocale.SvalbardAndJanMayenIslands = QLocale_Wrapper.SvalbardAndJanMayenIslands;
QLocale.Swaziland = QLocale_Wrapper.Swaziland;
QLocale.SyrianArabRepublic = QLocale_Wrapper.SyrianArabRepublic;
QLocale.TokelauCountry = QLocale_Wrapper.TokelauCountry;
QLocale.TuvaluCountry = QLocale_Wrapper.TuvaluCountry;
QLocale.UnitedStatesMinorOutlyingIslands = QLocale_Wrapper.UnitedStatesMinorOutlyingIslands;
QLocale.VaticanCityState = QLocale_Wrapper.VaticanCityState;
QLocale.WallisAndFutunaIslands = QLocale_Wrapper.WallisAndFutunaIslands;
QLocale.LastTerritory = QLocale_Wrapper.LastTerritory;
QLocale.LastCountry = QLocale_Wrapper.LastCountry;

  // enum: MeasurementSystem
QLocale.MetricSystem = QLocale_Wrapper.MetricSystem;
QLocale.ImperialUSSystem = QLocale_Wrapper.ImperialUSSystem;
QLocale.ImperialUKSystem = QLocale_Wrapper.ImperialUKSystem;
QLocale.ImperialSystem = QLocale_Wrapper.ImperialSystem;

  // enum: FormatType
QLocale.LongFormat = QLocale_Wrapper.LongFormat;
QLocale.ShortFormat = QLocale_Wrapper.ShortFormat;
QLocale.NarrowFormat = QLocale_Wrapper.NarrowFormat;

  // enum: NumberOption
QLocale.DefaultNumberOptions = QLocale_Wrapper.DefaultNumberOptions;
QLocale.OmitGroupSeparator = QLocale_Wrapper.OmitGroupSeparator;
QLocale.RejectGroupSeparator = QLocale_Wrapper.RejectGroupSeparator;
QLocale.OmitLeadingZeroInExponent = QLocale_Wrapper.OmitLeadingZeroInExponent;
QLocale.RejectLeadingZeroInExponent = QLocale_Wrapper.RejectLeadingZeroInExponent;
QLocale.IncludeTrailingZeroesAfterDot = QLocale_Wrapper.IncludeTrailingZeroesAfterDot;
QLocale.RejectTrailingZeroesAfterDot = QLocale_Wrapper.RejectTrailingZeroesAfterDot;

  // enum: FloatingPointPrecisionOption
QLocale.FloatingPointShortest = QLocale_Wrapper.FloatingPointShortest;

  // enum: CurrencySymbolFormat
QLocale.CurrencyIsoCode = QLocale_Wrapper.CurrencyIsoCode;
QLocale.CurrencySymbol = QLocale_Wrapper.CurrencySymbol;
QLocale.CurrencyDisplayName = QLocale_Wrapper.CurrencyDisplayName;

  // enum: DataSizeFormat
QLocale.DataSizeBase1000 = QLocale_Wrapper.DataSizeBase1000;
QLocale.DataSizeSIQuantifiers = QLocale_Wrapper.DataSizeSIQuantifiers;
QLocale.DataSizeIecFormat = QLocale_Wrapper.DataSizeIecFormat;
QLocale.DataSizeTraditionalFormat = QLocale_Wrapper.DataSizeTraditionalFormat;
QLocale.DataSizeSIFormat = QLocale_Wrapper.DataSizeSIFormat;

  // enum: QuotationStyle
QLocale.StandardQuotation = QLocale_Wrapper.StandardQuotation;
QLocale.AlternateQuotation = QLocale_Wrapper.AlternateQuotation;


      // functions:
      

      // static functions:
      

        // static function 
        QLocale.languageToCode = function() 
          
        {
          //print("JS: QLocale.languageToCode");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QLocale_WrapperSingletonInstance.languageToCode(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLocale);
  }

  
  else {
    
        print("QLocale.languageToCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLocale.territoryToCode = function() 
          
        {
          //print("JS: QLocale.territoryToCode");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QLocale_WrapperSingletonInstance.territoryToCode(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLocale);
  }

  
  else {
    
        print("QLocale.territoryToCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLocale.countryToCode = function() 
          
        {
          //print("JS: QLocale.countryToCode");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QLocale_WrapperSingletonInstance.countryToCode(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLocale);
  }

  
  else {
    
        print("QLocale.countryToCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLocale.scriptToCode = function() 
          
        {
          //print("JS: QLocale.scriptToCode");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QLocale_WrapperSingletonInstance.scriptToCode(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLocale);
  }

  
  else {
    
        print("QLocale.scriptToCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLocale.languageToString = function() 
          
        {
          //print("JS: QLocale.languageToString");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QLocale_WrapperSingletonInstance.languageToString(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLocale);
  }

  
  else {
    
        print("QLocale.languageToString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLocale.territoryToString = function() 
          
        {
          //print("JS: QLocale.territoryToString");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QLocale_WrapperSingletonInstance.territoryToString(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLocale);
  }

  
  else {
    
        print("QLocale.territoryToString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLocale.countryToString = function() 
          
        {
          //print("JS: QLocale.countryToString");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QLocale_WrapperSingletonInstance.countryToString(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLocale);
  }

  
  else {
    
        print("QLocale.countryToString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLocale.scriptToString = function() 
          
        {
          //print("JS: QLocale.scriptToString");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QLocale_WrapperSingletonInstance.scriptToString(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLocale);
  }

  
  else {
    
        print("QLocale.scriptToString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLocale.setDefault = function() 
          
        {
          //print("JS: QLocale.setDefault");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QLocale_WrapperSingletonInstance.setDefault(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLocale);
  }

  
  else {
    
        print("QLocale.setDefault(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLocale.c = function() 
          
        {
          //print("JS: QLocale.c");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QLocale_WrapperSingletonInstance.c(
                  
                );
              

        //copyProperties(this, wrapper, QLocale);
  }

  
  else {
    
        print("QLocale.c(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLocale.system = function() 
          
        {
          //print("JS: QLocale.system");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QLocale_WrapperSingletonInstance.system(
                  
                );
              

        //copyProperties(this, wrapper, QLocale);
  }

  
  else {
    
        print("QLocale.system(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLocale.matchingLocales = function() 
          
        {
          //print("JS: QLocale.matchingLocales");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return QLocale_WrapperSingletonInstance.matchingLocales(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QLocale);
  }

  
  else {
    
        print("QLocale.matchingLocales(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLocale.countriesForLanguage = function() 
          
        {
          //print("JS: QLocale.countriesForLanguage");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QLocale_WrapperSingletonInstance.countriesForLanguage(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLocale);
  }

  
  else {
    
        print("QLocale.countriesForLanguage(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QLocale.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QLocale.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    