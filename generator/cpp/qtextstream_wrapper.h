
  // Auto generated
  
    #ifndef QTEXTSTREAM_H_WRAPPER
    #define QTEXTSTREAM_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QIODevice>
      
        #include <QLocale>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QTextStream>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QTextStream
    class QTextStream_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QTextStream_Wrapper(const QTextStream_Wrapper&);

    public:
      // initialization of QTextStream:
      static void init(RJSApi& handler);

      
        static QTextStream* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QTextStream.length(); i++) {
            RJSBasecaster_QTextStream* basecaster = basecasters_QTextStream[i];
            QTextStream* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QTextStream::getIdStatic()) {
            return (QTextStream*)vp;
          }

          qWarning() << "QTextStream::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QTextStream* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QTextStream*: wrapper wraps NULL";
          }

          QTextStream* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QTextStream*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OpenModeFlag {
    NotOpen = QTextStream::NotOpen,
ReadOnly = QTextStream::ReadOnly,
WriteOnly = QTextStream::WriteOnly,
ReadWrite = QTextStream::ReadWrite,
Append = QTextStream::Append,
Truncate = QTextStream::Truncate,
Text = QTextStream::Text,
Unbuffered = QTextStream::Unbuffered,
NewOnly = QTextStream::NewOnly,
ExistingOnly = QTextStream::ExistingOnly,

  };
  Q_ENUM(OpenModeFlag)

  enum RealNumberNotation {
    SmartNotation = QTextStream::SmartNotation,
FixedNotation = QTextStream::FixedNotation,
ScientificNotation = QTextStream::ScientificNotation,

  };
  Q_ENUM(RealNumberNotation)

  enum FieldAlignment {
    AlignLeft = QTextStream::AlignLeft,
AlignRight = QTextStream::AlignRight,
AlignCenter = QTextStream::AlignCenter,
AlignAccountingStyle = QTextStream::AlignAccountingStyle,

  };
  Q_ENUM(FieldAlignment)

  enum Status {
    Ok = QTextStream::Ok,
ReadPastEnd = QTextStream::ReadPastEnd,
ReadCorruptData = QTextStream::ReadCorruptData,
WriteFailed = QTextStream::WriteFailed,

  };
  Q_ENUM(Status)

  enum NumberFlag {
    ShowBase = QTextStream::ShowBase,
ForcePoint = QTextStream::ForcePoint,
ForceSign = QTextStream::ForceSign,
UppercaseBase = QTextStream::UppercaseBase,
UppercaseDigits = QTextStream::UppercaseDigits,

  };
  Q_ENUM(NumberFlag)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QTextStream_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QTextStream_Wrapper(RJSApi& h, QTextStream* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QTextStream_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QTextStream
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QTextStream_Wrapper
                
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
            

    // non-static functions:
    
    // Class: QTextStream
    // Function: setEncoding
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEncoding
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextStream
    // Function: encoding
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  encoding
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextStream
    // Function: setAutoDetectUnicode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAutoDetectUnicode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextStream
    // Function: autoDetectUnicode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  autoDetectUnicode
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextStream
    // Function: setGenerateByteOrderMark
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setGenerateByteOrderMark
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextStream
    // Function: generateByteOrderMark
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  generateByteOrderMark
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextStream
    // Function: setLocale
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLocale
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextStream
    // Function: locale
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  locale
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextStream
    // Function: setDevice
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDevice
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextStream
    // Function: device
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  device
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextStream
    // Function: status
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  status
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextStream
    // Function: setStatus
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStatus
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextStream
    // Function: resetStatus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resetStatus
              (

                
              )
              
              ;
            
    // Class: QTextStream
    // Function: atEnd
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  atEnd
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextStream
    // Function: reset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  reset
              (

                
              )
              
              ;
            
    // Class: QTextStream
    // Function: flush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flush
              (

                
              )
              
              ;
            
    // Class: QTextStream
    // Function: seek
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  seek
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextStream
    // Function: pos
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pos
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextStream
    // Function: skipWhiteSpace
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  skipWhiteSpace
              (

                
              )
              
              ;
            
    // Class: QTextStream
    // Function: readLine
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  readLine
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextStream
    // Function: readAll
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  readAll
              (

                
              )
              
              ;
            
    // Class: QTextStream
    // Function: read
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  read
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextStream
    // Function: setFieldAlignment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFieldAlignment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextStream
    // Function: fieldAlignment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fieldAlignment
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextStream
    // Function: setPadChar
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPadChar
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextStream
    // Function: padChar
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  padChar
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextStream
    // Function: setFieldWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFieldWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextStream
    // Function: fieldWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fieldWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextStream
    // Function: setNumberFlags
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNumberFlags
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextStream
    // Function: numberFlags
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  numberFlags
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextStream
    // Function: setIntegerBase
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setIntegerBase
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextStream
    // Function: integerBase
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  integerBase
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextStream
    // Function: setRealNumberNotation
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRealNumberNotation
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextStream
    // Function: realNumberNotation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  realNumberNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextStream
    // Function: setRealNumberPrecision
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRealNumberPrecision
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextStream
    // Function: realNumberPrecision
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  realNumberPrecision
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextStream
    // Function: writeString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeString
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QTextStream::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QTextStream* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QTextStream* getWrapped() const {
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
        QTextStream* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QTextStream*> basecasters_QTextStream;

      public:
        static void registerBasecaster_QTextStream(RJSBasecaster_QTextStream* bc) {
          basecasters_QTextStream.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QTextStream_Wrapper*)

    Q_DECLARE_INTERFACE(QTextStream_Wrapper, "org.qcad.QTextStream_Wrapper")

  
  #endif
  