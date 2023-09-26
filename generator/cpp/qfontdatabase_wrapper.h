
  // Auto generated
  
    #ifndef QFONTDATABASE_H_WRAPPER
    #define QFONTDATABASE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QFontDatabase>
      
      // singleton class wrapper for static functions:
      class QFontDatabase_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QFontDatabase_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QFontDatabase
    // Function: standardSizes
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  standardSizes
              (

                
              )
              
              ;
            
#if QT_DEPRECATED_SINCE(6,0)&&!defined(QT_BUILD_GUI_LIB)

#else

#endif

    // Class: QFontDatabase
    // Function: writingSystems
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writingSystems
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFontDatabase
    // Function: families
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  families
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFontDatabase
    // Function: styles
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  styles
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFontDatabase
    // Function: pointSizes
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pointSizes
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
            
    // Class: QFontDatabase
    // Function: smoothSizes
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  smoothSizes
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
            
    // Class: QFontDatabase
    // Function: styleString
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  styleString
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFontDatabase
    // Function: font
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  font
              (

                
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
            
    // Class: QFontDatabase
    // Function: isBitmapScalable
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBitmapScalable
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
            
    // Class: QFontDatabase
    // Function: isSmoothlyScalable
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSmoothlyScalable
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
            
    // Class: QFontDatabase
    // Function: isScalable
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isScalable
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
            
    // Class: QFontDatabase
    // Function: isFixedPitch
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isFixedPitch
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
            
    // Class: QFontDatabase
    // Function: italic
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  italic
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
            
    // Class: QFontDatabase
    // Function: bold
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bold
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
            
    // Class: QFontDatabase
    // Function: weight
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  weight
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
            
    // Class: QFontDatabase
    // Function: hasFamily
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasFamily
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFontDatabase
    // Function: isPrivateFamily
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPrivateFamily
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFontDatabase
    // Function: writingSystemName
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writingSystemName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFontDatabase
    // Function: writingSystemSample
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writingSystemSample
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFontDatabase
    // Function: addApplicationFont
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addApplicationFont
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFontDatabase
    // Function: addApplicationFontFromData
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addApplicationFontFromData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFontDatabase
    // Function: applicationFontFamilies
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  applicationFontFamilies
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFontDatabase
    // Function: removeApplicationFont
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeApplicationFont
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFontDatabase
    // Function: removeAllApplicationFonts
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeAllApplicationFonts
              (

                
              )
              
              ;
            
    // Class: QFontDatabase
    // Function: systemFont
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  systemFont
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QFontDatabase_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QFontDatabase
    class QFontDatabase_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QFontDatabase_Wrapper(const QFontDatabase_Wrapper&);

    public:
      // initialization of QFontDatabase:
      static void init(RJSApi& handler);

      
        static QFontDatabase* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QFontDatabase.length(); i++) {
            RJSBasecaster_QFontDatabase* basecaster = basecasters_QFontDatabase[i];
            QFontDatabase* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QFontDatabase::getIdStatic()) {
            return (QFontDatabase*)vp;
          }

          qWarning() << "QFontDatabase::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QFontDatabase* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QFontDatabase*: wrapper wraps NULL";
          }

          QFontDatabase* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QFontDatabase*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum WritingSystem {
    Any = QFontDatabase::Any,
Latin = QFontDatabase::Latin,
Greek = QFontDatabase::Greek,
Cyrillic = QFontDatabase::Cyrillic,
Armenian = QFontDatabase::Armenian,
Hebrew = QFontDatabase::Hebrew,
Arabic = QFontDatabase::Arabic,
Syriac = QFontDatabase::Syriac,
Thaana = QFontDatabase::Thaana,
Devanagari = QFontDatabase::Devanagari,
Bengali = QFontDatabase::Bengali,
Gurmukhi = QFontDatabase::Gurmukhi,
Gujarati = QFontDatabase::Gujarati,
Oriya = QFontDatabase::Oriya,
Tamil = QFontDatabase::Tamil,
Telugu = QFontDatabase::Telugu,
Kannada = QFontDatabase::Kannada,
Malayalam = QFontDatabase::Malayalam,
Sinhala = QFontDatabase::Sinhala,
Thai = QFontDatabase::Thai,
Lao = QFontDatabase::Lao,
Tibetan = QFontDatabase::Tibetan,
Myanmar = QFontDatabase::Myanmar,
Georgian = QFontDatabase::Georgian,
Khmer = QFontDatabase::Khmer,
SimplifiedChinese = QFontDatabase::SimplifiedChinese,
TraditionalChinese = QFontDatabase::TraditionalChinese,
Japanese = QFontDatabase::Japanese,
Korean = QFontDatabase::Korean,
Vietnamese = QFontDatabase::Vietnamese,
Symbol = QFontDatabase::Symbol,
Other = QFontDatabase::Other,
Ogham = QFontDatabase::Ogham,
Runic = QFontDatabase::Runic,
Nko = QFontDatabase::Nko,
WritingSystemsCount = QFontDatabase::WritingSystemsCount,

  };
  Q_ENUM(WritingSystem)

  enum SystemFont {
    GeneralFont = QFontDatabase::GeneralFont,
FixedFont = QFontDatabase::FixedFont,
TitleFont = QFontDatabase::TitleFont,
SmallestReadableFont = QFontDatabase::SmallestReadableFont,

  };
  Q_ENUM(SystemFont)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QFontDatabase_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QFontDatabase_Wrapper(RJSApi& h, QFontDatabase* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QFontDatabase_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
#if QT_DEPRECATED_SINCE(6,0)&&!defined(QT_BUILD_GUI_LIB)

    // Class: QFontDatabase
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QFontDatabase_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            
#else

#endif


    // non-static functions:
    
#if QT_DEPRECATED_SINCE(6,0)&&!defined(QT_BUILD_GUI_LIB)

#else

#endif


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
          return RJSType_QFontDatabase::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QFontDatabase* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QFontDatabase* getWrapped() const {
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
        QFontDatabase* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QFontDatabase*> basecasters_QFontDatabase;

      public:
        static void registerBasecaster_QFontDatabase(RJSBasecaster_QFontDatabase* bc) {
          basecasters_QFontDatabase.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QFontDatabase_Wrapper*)

    Q_DECLARE_INTERFACE(QFontDatabase_Wrapper, "org.qcad.QFontDatabase_Wrapper")

  
  #endif
  
