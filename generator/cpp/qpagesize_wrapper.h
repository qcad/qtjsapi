
  // Auto generated
  
    #ifndef QPAGESIZE_H_WRAPPER
    #define QPAGESIZE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QString>
      
        #include <QSize>
      
        #include <QSizeF>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QPageSize>
      
      // singleton class wrapper for static functions:
      class QTJSAPI_EXPORT QPageSize_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QPageSize_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QPageSize
    // Function: key
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  key
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPageSize
    // Function: name
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  name
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPageSize
    // Function: id
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  id
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
            
    // Class: QPageSize
    // Function: windowsId
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowsId
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPageSize
    // Function: definitionSize
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  definitionSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPageSize
    // Function: definitionUnits
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  definitionUnits
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPageSize
    // Function: size
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  size
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
            
    // Class: QPageSize
    // Function: sizePoints
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sizePoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPageSize
    // Function: sizePixels
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sizePixels
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
            

      private:
          RJSApi& handler;
          //static QPageSize_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QPageSize
    class QPageSize_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QPageSize_Wrapper(const QPageSize_Wrapper&);

    public:
      // initialization of QPageSize:
      static void init(RJSApi& handler);

      
        static QPageSize* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QPageSize:
          for (int i=0; i<basecasters_QPageSize.length(); i++) {
            RJSBasecaster_QPageSize* basecaster = basecasters_QPageSize[i];
            QPageSize* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QPageSize:
          if (t==RJSType_QPageSize::getIdStatic()) {
            return (QPageSize*)vp;
          }

          qWarning() << "QPageSize_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QPageSize* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QPageSize*: wrapper wraps NULL";
          }

          QPageSize* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QPageSize*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum PageSizeId {
    Letter = QPageSize::Letter,
Legal = QPageSize::Legal,
Executive = QPageSize::Executive,
A0 = QPageSize::A0,
A1 = QPageSize::A1,
A2 = QPageSize::A2,
A3 = QPageSize::A3,
A4 = QPageSize::A4,
A5 = QPageSize::A5,
A6 = QPageSize::A6,
A7 = QPageSize::A7,
A8 = QPageSize::A8,
A9 = QPageSize::A9,
A10 = QPageSize::A10,
B0 = QPageSize::B0,
B1 = QPageSize::B1,
B2 = QPageSize::B2,
B3 = QPageSize::B3,
B4 = QPageSize::B4,
B5 = QPageSize::B5,
B6 = QPageSize::B6,
B7 = QPageSize::B7,
B8 = QPageSize::B8,
B9 = QPageSize::B9,
B10 = QPageSize::B10,
C5E = QPageSize::C5E,
Comm10E = QPageSize::Comm10E,
DLE = QPageSize::DLE,
Folio = QPageSize::Folio,
Ledger = QPageSize::Ledger,
Tabloid = QPageSize::Tabloid,
Custom = QPageSize::Custom,
A3Extra = QPageSize::A3Extra,
A4Extra = QPageSize::A4Extra,
A4Plus = QPageSize::A4Plus,
A4Small = QPageSize::A4Small,
A5Extra = QPageSize::A5Extra,
B5Extra = QPageSize::B5Extra,
JisB0 = QPageSize::JisB0,
JisB1 = QPageSize::JisB1,
JisB2 = QPageSize::JisB2,
JisB3 = QPageSize::JisB3,
JisB4 = QPageSize::JisB4,
JisB5 = QPageSize::JisB5,
JisB6 = QPageSize::JisB6,
JisB7 = QPageSize::JisB7,
JisB8 = QPageSize::JisB8,
JisB9 = QPageSize::JisB9,
JisB10 = QPageSize::JisB10,
AnsiC = QPageSize::AnsiC,
AnsiD = QPageSize::AnsiD,
AnsiE = QPageSize::AnsiE,
LegalExtra = QPageSize::LegalExtra,
LetterExtra = QPageSize::LetterExtra,
LetterPlus = QPageSize::LetterPlus,
LetterSmall = QPageSize::LetterSmall,
TabloidExtra = QPageSize::TabloidExtra,
ArchA = QPageSize::ArchA,
ArchB = QPageSize::ArchB,
ArchC = QPageSize::ArchC,
ArchD = QPageSize::ArchD,
ArchE = QPageSize::ArchE,
Imperial7x9 = QPageSize::Imperial7x9,
Imperial8x10 = QPageSize::Imperial8x10,
Imperial9x11 = QPageSize::Imperial9x11,
Imperial9x12 = QPageSize::Imperial9x12,
Imperial10x11 = QPageSize::Imperial10x11,
Imperial10x13 = QPageSize::Imperial10x13,
Imperial10x14 = QPageSize::Imperial10x14,
Imperial12x11 = QPageSize::Imperial12x11,
Imperial15x11 = QPageSize::Imperial15x11,
ExecutiveStandard = QPageSize::ExecutiveStandard,
Note = QPageSize::Note,
Quarto = QPageSize::Quarto,
Statement = QPageSize::Statement,
SuperA = QPageSize::SuperA,
SuperB = QPageSize::SuperB,
Postcard = QPageSize::Postcard,
DoublePostcard = QPageSize::DoublePostcard,
Prc16K = QPageSize::Prc16K,
Prc32K = QPageSize::Prc32K,
Prc32KBig = QPageSize::Prc32KBig,
FanFoldUS = QPageSize::FanFoldUS,
FanFoldGerman = QPageSize::FanFoldGerman,
FanFoldGermanLegal = QPageSize::FanFoldGermanLegal,
EnvelopeB4 = QPageSize::EnvelopeB4,
EnvelopeB5 = QPageSize::EnvelopeB5,
EnvelopeB6 = QPageSize::EnvelopeB6,
EnvelopeC0 = QPageSize::EnvelopeC0,
EnvelopeC1 = QPageSize::EnvelopeC1,
EnvelopeC2 = QPageSize::EnvelopeC2,
EnvelopeC3 = QPageSize::EnvelopeC3,
EnvelopeC4 = QPageSize::EnvelopeC4,
EnvelopeC6 = QPageSize::EnvelopeC6,
EnvelopeC65 = QPageSize::EnvelopeC65,
EnvelopeC7 = QPageSize::EnvelopeC7,
Envelope9 = QPageSize::Envelope9,
Envelope11 = QPageSize::Envelope11,
Envelope12 = QPageSize::Envelope12,
Envelope14 = QPageSize::Envelope14,
EnvelopeMonarch = QPageSize::EnvelopeMonarch,
EnvelopePersonal = QPageSize::EnvelopePersonal,
EnvelopeChou3 = QPageSize::EnvelopeChou3,
EnvelopeChou4 = QPageSize::EnvelopeChou4,
EnvelopeInvite = QPageSize::EnvelopeInvite,
EnvelopeItalian = QPageSize::EnvelopeItalian,
EnvelopeKaku2 = QPageSize::EnvelopeKaku2,
EnvelopeKaku3 = QPageSize::EnvelopeKaku3,
EnvelopePrc1 = QPageSize::EnvelopePrc1,
EnvelopePrc2 = QPageSize::EnvelopePrc2,
EnvelopePrc3 = QPageSize::EnvelopePrc3,
EnvelopePrc4 = QPageSize::EnvelopePrc4,
EnvelopePrc5 = QPageSize::EnvelopePrc5,
EnvelopePrc6 = QPageSize::EnvelopePrc6,
EnvelopePrc7 = QPageSize::EnvelopePrc7,
EnvelopePrc8 = QPageSize::EnvelopePrc8,
EnvelopePrc9 = QPageSize::EnvelopePrc9,
EnvelopePrc10 = QPageSize::EnvelopePrc10,
EnvelopeYou4 = QPageSize::EnvelopeYou4,
LastPageSize = QPageSize::LastPageSize,
AnsiA = QPageSize::AnsiA,
AnsiB = QPageSize::AnsiB,
EnvelopeC5 = QPageSize::EnvelopeC5,
EnvelopeDL = QPageSize::EnvelopeDL,
Envelope10 = QPageSize::Envelope10,

  };
  Q_ENUM(PageSizeId)

  enum Unit {
    Millimeter = QPageSize::Millimeter,
Point = QPageSize::Point,
Inch = QPageSize::Inch,
Pica = QPageSize::Pica,
Didot = QPageSize::Didot,
Cicero = QPageSize::Cicero,

  };
  Q_ENUM(Unit)

  enum SizeMatchPolicy {
    FuzzyMatch = QPageSize::FuzzyMatch,
FuzzyOrientationMatch = QPageSize::FuzzyOrientationMatch,
ExactMatch = QPageSize::ExactMatch,

  };
  Q_ENUM(SizeMatchPolicy)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QPageSize_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QPageSize_Wrapper(RJSApi& h, QPageSize* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QPageSize_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QPageSize
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QPageSize_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
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
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QPageSize
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  swap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPageSize
    // Function: isEquivalentTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEquivalentTo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QPageSize
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isValid
              (

                
              )
              
                const
              
              ;
            
    // Class: QPageSize
    // Function: key
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: 1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  key
              (

                
              )
              
                const
              
              ;
            
    // Class: QPageSize
    // Function: name
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: 1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  name
              (

                
              )
              
                const
              
              ;
            
    // Class: QPageSize
    // Function: id
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: 1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  id
              (

                
              )
              
                const
              
              ;
            
    // Class: QPageSize
    // Function: windowsId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: 1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowsId
              (

                
              )
              
                const
              
              ;
            
    // Class: QPageSize
    // Function: definitionSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: 1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  definitionSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QPageSize
    // Function: definitionUnits
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: 1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  definitionUnits
              (

                
              )
              
                const
              
              ;
            
    // Class: QPageSize
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: 2

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  size
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QPageSize
    // Function: sizePoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: 1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sizePoints
              (

                
              )
              
                const
              
              ;
            
    // Class: QPageSize
    // Function: sizePixels
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: 2

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sizePixels
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QPageSize
    // Function: rect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rect
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QPageSize
    // Function: rectPoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rectPoints
              (

                
              )
              
                const
              
              ;
            
    // Class: QPageSize
    // Function: rectPixels
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rectPixels
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

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
          return RJSType_QPageSize::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QPageSize* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QPageSize* getWrapped() const {
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
        QPageSize* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QPageSize*> basecasters_QPageSize;

      public:
        static void registerBasecaster_QPageSize(RJSBasecaster_QPageSize* bc) {
          basecasters_QPageSize.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QPageSize_Wrapper*)

    Q_DECLARE_INTERFACE(QPageSize_Wrapper, "org.qcad.QPageSize_Wrapper")

  
  #endif
  
