
  // Auto generated
  
  #ifndef QSTRINGCONVERTER_H_WRAPPER
  #define QSTRINGCONVERTER_H_WRAPPER

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    

  #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QStringConverter>
      
      // singleton class wrapper for static functions:
      class QStringConverter_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QStringConverter_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
#ifdef Q_QDOC

#endif

    // Class: QStringConverter
    // Function: nameForEncoding
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nameForEncoding
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QStringConverter_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStringConverter
    class QStringConverter_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStringConverter_Wrapper(const QStringConverter_Wrapper&);

    public:
      // initialization of QStringConverter:
      static void init(RJSApi& handler);

      
        static QStringConverter* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          
            if (t==RJSType_QStringEncoder::getIdStatic()) {
              return (QStringConverter*)(QStringEncoder*)vp;
            }
            
            if (t==RJSType_QStringDecoder::getIdStatic()) {
              return (QStringConverter*)(QStringDecoder*)vp;
            }
            

          // pointer to desired type:
          
              if (t==RJSType_QStringConverter::getIdStatic()) {
                return (QStringConverter*)vp;
              }
              

          return nullptr;
          
        }

        static QStringConverter* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStringConverter*: wrapper wraps NULL";
          }

          QStringConverter* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStringConverter*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Encoding {
    Utf8 = QStringConverter::Utf8,
Utf16 = QStringConverter::Utf16,
Utf16LE = QStringConverter::Utf16LE,
Utf16BE = QStringConverter::Utf16BE,
Utf32 = QStringConverter::Utf32,
Utf32LE = QStringConverter::Utf32LE,
Utf32BE = QStringConverter::Utf32BE,
Latin1 = QStringConverter::Latin1,
System = QStringConverter::System,
LastEncoding = QStringConverter::LastEncoding,

  };
  Q_ENUM(Encoding)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStringConverter_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStringConverter_Wrapper(RJSApi& h, QStringConverter* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStringConverter_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
#ifdef Q_QDOC

#endif


    // non-static functions:
    
#ifdef Q_QDOC

#endif

    // Class: QStringConverter
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
            
    // Class: QStringConverter
    // Function: resetState
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resetState
              (

                
              )
              
              ;
            
    // Class: QStringConverter
    // Function: hasError
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasError
              (

                
              )
              
                const
              
              ;
            
    // Class: QStringConverter
    // Function: name
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  name
              (

                
              )
              
                const
              
              ;
            

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
          
              return RJSType_QStringConverter::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStringConverter* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStringConverter* getWrapped() const {
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
        QStringConverter* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QStringConverter_Wrapper*)

    Q_DECLARE_INTERFACE(QStringConverter_Wrapper, "org.qcad.QStringConverter_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QStringEncoder>
      
      // singleton class wrapper for static functions:
      class QStringEncoder_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QStringEncoder_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QStringEncoder
    // Function: nameForEncoding
    // Source: QStringConverter
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nameForEncoding
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QStringEncoder_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStringEncoder
    class QStringEncoder_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStringEncoder_Wrapper(const QStringEncoder_Wrapper&);

    public:
      // initialization of QStringEncoder:
      static void init(RJSApi& handler);

      
        static QStringEncoder* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              if (t==RJSType_QStringEncoder::getIdStatic()) {
                return (QStringEncoder*)vp;
              }
              

          return nullptr;
          
        }

        static QStringEncoder* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStringEncoder*: wrapper wraps NULL";
          }

          QStringEncoder* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStringEncoder*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Encoding {
    Utf8 = QStringEncoder::Utf8,
Utf16 = QStringEncoder::Utf16,
Utf16LE = QStringEncoder::Utf16LE,
Utf16BE = QStringEncoder::Utf16BE,
Utf32 = QStringEncoder::Utf32,
Utf32LE = QStringEncoder::Utf32LE,
Utf32BE = QStringEncoder::Utf32BE,
Latin1 = QStringEncoder::Latin1,
System = QStringEncoder::System,
LastEncoding = QStringEncoder::LastEncoding,

  };
  Q_ENUM(Encoding)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStringEncoder_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStringEncoder_Wrapper(RJSApi& h, QStringEncoder* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStringEncoder_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStringEncoder
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStringEncoder_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStringEncoder
    // Function: isValid
    // Source: QStringConverter
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
            
    // Class: QStringEncoder
    // Function: resetState
    // Source: QStringConverter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resetState
              (

                
              )
              
              ;
            
    // Class: QStringEncoder
    // Function: hasError
    // Source: QStringConverter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasError
              (

                
              )
              
                const
              
              ;
            
    // Class: QStringEncoder
    // Function: name
    // Source: QStringConverter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  name
              (

                
              )
              
                const
              
              ;
            
    // Class: QStringEncoder
    // Function: encode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  encode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStringEncoder
    // Function: requiredSpace
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  requiredSpace
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            

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
          
              return RJSType_QStringEncoder::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStringEncoder* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStringEncoder* getWrapped() const {
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
        QStringEncoder* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QStringEncoder_Wrapper*)

    Q_DECLARE_INTERFACE(QStringEncoder_Wrapper, "org.qcad.QStringEncoder_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QStringDecoder>
      
      // singleton class wrapper for static functions:
      class QStringDecoder_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QStringDecoder_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QStringDecoder
    // Function: nameForEncoding
    // Source: QStringConverter
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nameForEncoding
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QStringDecoder_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStringDecoder
    class QStringDecoder_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStringDecoder_Wrapper(const QStringDecoder_Wrapper&);

    public:
      // initialization of QStringDecoder:
      static void init(RJSApi& handler);

      
        static QStringDecoder* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              if (t==RJSType_QStringDecoder::getIdStatic()) {
                return (QStringDecoder*)vp;
              }
              

          return nullptr;
          
        }

        static QStringDecoder* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStringDecoder*: wrapper wraps NULL";
          }

          QStringDecoder* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStringDecoder*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Encoding {
    Utf8 = QStringDecoder::Utf8,
Utf16 = QStringDecoder::Utf16,
Utf16LE = QStringDecoder::Utf16LE,
Utf16BE = QStringDecoder::Utf16BE,
Utf32 = QStringDecoder::Utf32,
Utf32LE = QStringDecoder::Utf32LE,
Utf32BE = QStringDecoder::Utf32BE,
Latin1 = QStringDecoder::Latin1,
System = QStringDecoder::System,
LastEncoding = QStringDecoder::LastEncoding,

  };
  Q_ENUM(Encoding)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStringDecoder_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStringDecoder_Wrapper(RJSApi& h, QStringDecoder* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStringDecoder_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStringDecoder
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStringDecoder_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStringDecoder
    // Function: isValid
    // Source: QStringConverter
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
            
    // Class: QStringDecoder
    // Function: resetState
    // Source: QStringConverter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resetState
              (

                
              )
              
              ;
            
    // Class: QStringDecoder
    // Function: hasError
    // Source: QStringConverter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasError
              (

                
              )
              
                const
              
              ;
            
    // Class: QStringDecoder
    // Function: name
    // Source: QStringConverter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  name
              (

                
              )
              
                const
              
              ;
            
    // Class: QStringDecoder
    // Function: decode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  decode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStringDecoder
    // Function: requiredSpace
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  requiredSpace
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            

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
          
              return RJSType_QStringDecoder::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStringDecoder* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStringDecoder* getWrapped() const {
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
        QStringDecoder* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QStringDecoder_Wrapper*)

    Q_DECLARE_INTERFACE(QStringDecoder_Wrapper, "org.qcad.QStringDecoder_Wrapper")

  
  #endif
  