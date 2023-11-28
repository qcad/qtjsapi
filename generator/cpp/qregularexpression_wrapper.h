
  // Auto generated
  
    #ifndef QREGULAREXPRESSION_H_WRAPPER
    #define QREGULAREXPRESSION_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QLatin1String>
      
        #include <QRegularExpressionMatch>
      
        #include <QRegularExpressionMatchIterator>
      
        #include <QRegularExpression>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QRegularExpression>
      
      // singleton class wrapper for static functions:
      class QTJSAPI_EXPORT QRegularExpression_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QRegularExpression_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
#if QT_STRINGVIEW_LEVEL<2

    // Class: QRegularExpression
    // Function: escape
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  escape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QRegularExpression
    // Function: wildcardToRegularExpression
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  wildcardToRegularExpression
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
            
    // Class: QRegularExpression
    // Function: anchoredPattern
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  anchoredPattern
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#endif


      private:
          RJSApi& handler;
          //static QRegularExpression_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QRegularExpression
    class QTJSAPI_EXPORT QRegularExpression_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QRegularExpression_Wrapper(const QRegularExpression_Wrapper&);

    public:
      // initialization of QRegularExpression:
      static void init(RJSApi& handler);

      
        static QRegularExpression* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QRegularExpression:
          for (int i=0; i<basecasters_QRegularExpression.length(); i++) {
            RJSBasecaster_QRegularExpression* basecaster = basecasters_QRegularExpression[i];
            QRegularExpression* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QRegularExpression:
          if (t==RJSType_QRegularExpression::getIdStatic()) {
            return (QRegularExpression*)vp;
          }

          qWarning() << "QRegularExpression_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QRegularExpression* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QRegularExpression*: wrapper wraps NULL";
          }

          QRegularExpression* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QRegularExpression*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum PatternOption {
    NoPatternOption = QRegularExpression::NoPatternOption,
CaseInsensitiveOption = QRegularExpression::CaseInsensitiveOption,
DotMatchesEverythingOption = QRegularExpression::DotMatchesEverythingOption,
MultilineOption = QRegularExpression::MultilineOption,
ExtendedPatternSyntaxOption = QRegularExpression::ExtendedPatternSyntaxOption,
InvertedGreedinessOption = QRegularExpression::InvertedGreedinessOption,
DontCaptureOption = QRegularExpression::DontCaptureOption,
UseUnicodePropertiesOption = QRegularExpression::UseUnicodePropertiesOption,

  };
  Q_ENUM(PatternOption)

  enum MatchType {
    NormalMatch = QRegularExpression::NormalMatch,
PartialPreferCompleteMatch = QRegularExpression::PartialPreferCompleteMatch,
PartialPreferFirstMatch = QRegularExpression::PartialPreferFirstMatch,
NoMatch = QRegularExpression::NoMatch,

  };
  Q_ENUM(MatchType)

  enum MatchOption {
    NoMatchOption = QRegularExpression::NoMatchOption,
AnchorAtOffsetMatchOption = QRegularExpression::AnchorAtOffsetMatchOption,
DontCheckSubjectStringMatchOption = QRegularExpression::DontCheckSubjectStringMatchOption,

  };
  Q_ENUM(MatchOption)

  enum WildcardConversionOption {
    DefaultWildcardConversion = QRegularExpression::DefaultWildcardConversion,
UnanchoredWildcardConversion = QRegularExpression::UnanchoredWildcardConversion,

  };
  Q_ENUM(WildcardConversionOption)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QRegularExpression_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QRegularExpression_Wrapper(RJSApi& h, QRegularExpression* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QRegularExpression_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QRegularExpression
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QRegularExpression_Wrapper
                
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
    
              )
              
              ;
            
#if QT_STRINGVIEW_LEVEL<2

#endif


    // non-static functions:
    
    // Class: QRegularExpression
    // Function: patternOptions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  patternOptions
              (

                
              )
              
                const
              
              ;
            
    // Class: QRegularExpression
    // Function: setPatternOptions
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPatternOptions
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QRegularExpression
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
            
    // Class: QRegularExpression
    // Function: pattern
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pattern
              (

                
              )
              
                const
              
              ;
            
    // Class: QRegularExpression
    // Function: setPattern
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPattern
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QRegularExpression
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
            
    // Class: QRegularExpression
    // Function: patternErrorOffset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  patternErrorOffset
              (

                
              )
              
                const
              
              ;
            
    // Class: QRegularExpression
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  errorString
              (

                
              )
              
                const
              
              ;
            
    // Class: QRegularExpression
    // Function: captureCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  captureCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QRegularExpression
    // Function: namedCaptureGroups
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namedCaptureGroups
              (

                
              )
              
                const
              
              ;
            
    // Class: QRegularExpression
    // Function: match
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  match
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
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QRegularExpression
    // Function: optimize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  optimize
              (

                
              )
              
                const
              
              ;
            
#if QT_STRINGVIEW_LEVEL<2

#endif

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
          return RJSType_QRegularExpression::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QRegularExpression* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QRegularExpression* getWrapped() const {
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
        QRegularExpression* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QRegularExpression*> basecasters_QRegularExpression;

      public:
        static void registerBasecaster_QRegularExpression(RJSBasecaster_QRegularExpression* bc) {
          basecasters_QRegularExpression.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QRegularExpression_Wrapper*)

    Q_DECLARE_INTERFACE(QRegularExpression_Wrapper, "org.qcad.QRegularExpression_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QRegularExpressionMatch>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QRegularExpressionMatch
    class QTJSAPI_EXPORT QRegularExpressionMatch_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QRegularExpressionMatch_Wrapper(const QRegularExpressionMatch_Wrapper&);

    public:
      // initialization of QRegularExpressionMatch:
      static void init(RJSApi& handler);

      
        static QRegularExpressionMatch* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QRegularExpressionMatch:
          for (int i=0; i<basecasters_QRegularExpressionMatch.length(); i++) {
            RJSBasecaster_QRegularExpressionMatch* basecaster = basecasters_QRegularExpressionMatch[i];
            QRegularExpressionMatch* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QRegularExpressionMatch:
          if (t==RJSType_QRegularExpressionMatch::getIdStatic()) {
            return (QRegularExpressionMatch*)vp;
          }

          qWarning() << "QRegularExpressionMatch_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QRegularExpressionMatch* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QRegularExpressionMatch*: wrapper wraps NULL";
          }

          QRegularExpressionMatch* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QRegularExpressionMatch*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QRegularExpressionMatch_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QRegularExpressionMatch_Wrapper(RJSApi& h, QRegularExpressionMatch* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QRegularExpressionMatch_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QRegularExpressionMatch
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QRegularExpressionMatch_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#if QT_STRINGVIEW_LEVEL<2

#endif

#if QT_STRINGVIEW_LEVEL<2

#endif


    // non-static functions:
    
    // Class: QRegularExpressionMatch
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
            
    // Class: QRegularExpressionMatch
    // Function: regularExpression
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  regularExpression
              (

                
              )
              
                const
              
              ;
            
    // Class: QRegularExpressionMatch
    // Function: matchType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  matchType
              (

                
              )
              
                const
              
              ;
            
    // Class: QRegularExpressionMatch
    // Function: matchOptions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  matchOptions
              (

                
              )
              
                const
              
              ;
            
    // Class: QRegularExpressionMatch
    // Function: hasMatch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasMatch
              (

                
              )
              
                const
              
              ;
            
    // Class: QRegularExpressionMatch
    // Function: hasPartialMatch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasPartialMatch
              (

                
              )
              
                const
              
              ;
            
    // Class: QRegularExpressionMatch
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
            
    // Class: QRegularExpressionMatch
    // Function: lastCapturedIndex
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastCapturedIndex
              (

                
              )
              
                const
              
              ;
            
    // Class: QRegularExpressionMatch
    // Function: captured
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  captured
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
#if QT_STRINGVIEW_LEVEL<2

#endif

    // Class: QRegularExpressionMatch
    // Function: capturedTexts
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  capturedTexts
              (

                
              )
              
                const
              
              ;
            
    // Class: QRegularExpressionMatch
    // Function: capturedStart
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  capturedStart
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QRegularExpressionMatch
    // Function: capturedLength
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  capturedLength
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QRegularExpressionMatch
    // Function: capturedEnd
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  capturedEnd
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
#if QT_STRINGVIEW_LEVEL<2

#endif

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
          return RJSType_QRegularExpressionMatch::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QRegularExpressionMatch* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QRegularExpressionMatch* getWrapped() const {
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
        QRegularExpressionMatch* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QRegularExpressionMatch*> basecasters_QRegularExpressionMatch;

      public:
        static void registerBasecaster_QRegularExpressionMatch(RJSBasecaster_QRegularExpressionMatch* bc) {
          basecasters_QRegularExpressionMatch.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QRegularExpressionMatch_Wrapper*)

    Q_DECLARE_INTERFACE(QRegularExpressionMatch_Wrapper, "org.qcad.QRegularExpressionMatch_Wrapper")

  
  #endif
  
