
  // Auto generated
  
    #ifndef QSSLCERTIFICATE_H_WRAPPER
    #define QSSLCERTIFICATE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QDateTime>
      
        #include <QIODevice>
      
        #include <QSslError>
      
        #include <QSslKey>
      
        #include <QSslCertificateExtension>
      
        #include <QSslCertificate>
      
        #include <QDebug>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QSslCertificate>
      
      // singleton class wrapper for static functions:
      class QTJSAPI_EXPORT QSslCertificate_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QSslCertificate_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
#ifndef QT_NO_SSL

#endif

    // Class: QSslCertificate
    // Function: fromPath
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fromPath
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
            
    // Class: QSslCertificate
    // Function: fromDevice
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fromDevice
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
            
    // Class: QSslCertificate
    // Function: fromData
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fromData
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
            
    // Class: QSslCertificate
    // Function: fromFile
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fromFile
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
            
#ifndef QT_NO_SSL

    // Class: QSslCertificate
    // Function: verify
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  verify
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
            
#endif


      private:
          RJSApi& handler;
          //static QSslCertificate_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QSslCertificate
    class QTJSAPI_EXPORT QSslCertificate_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QSslCertificate_Wrapper(const QSslCertificate_Wrapper&);

    public:
      // initialization of QSslCertificate:
      static void init(RJSApi& handler);

      
        static QSslCertificate* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QSslCertificate:
          for (int i=0; i<basecasters_QSslCertificate.length(); i++) {
            RJSBasecaster_QSslCertificate* basecaster = basecasters_QSslCertificate[i];
            QSslCertificate* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QSslCertificate:
          if (t==RJSType_QSslCertificate::getIdStatic()) {
            return (QSslCertificate*)vp;
          }

          qWarning() << "QSslCertificate_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QSslCertificate* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QSslCertificate*: wrapper wraps NULL";
          }

          QSslCertificate* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QSslCertificate*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum SubjectInfo {
    Organization = QSslCertificate::Organization,
CommonName = QSslCertificate::CommonName,
LocalityName = QSslCertificate::LocalityName,
OrganizationalUnitName = QSslCertificate::OrganizationalUnitName,
CountryName = QSslCertificate::CountryName,
StateOrProvinceName = QSslCertificate::StateOrProvinceName,
DistinguishedNameQualifier = QSslCertificate::DistinguishedNameQualifier,
SerialNumber = QSslCertificate::SerialNumber,
EmailAddress = QSslCertificate::EmailAddress,

  };
  Q_ENUM(SubjectInfo)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QSslCertificate_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QSslCertificate_Wrapper(RJSApi& h, QSslCertificate* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QSslCertificate_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QSslCertificate
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QSslCertificate_Wrapper
                
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
            
#ifndef QT_NO_SSL

#endif

#ifndef QT_NO_SSL

#endif


    // non-static functions:
    
    // Class: QSslCertificate
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslCertificate
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
            
    // Class: QSslCertificate
    // Function: equals
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  equals
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: operator_not_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_not_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: isBlacklisted
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBlacklisted
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: isSelfSigned
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSelfSigned
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QSslCertificate
    // Function: version
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  version
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: serialNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  serialNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: digest
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  digest
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: issuerInfo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  issuerInfo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: subjectInfo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  subjectInfo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: issuerDisplayName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  issuerDisplayName
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: subjectDisplayName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  subjectDisplayName
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: subjectInfoAttributes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  subjectInfoAttributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: issuerInfoAttributes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  issuerInfoAttributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: effectiveDate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  effectiveDate
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: expiryDate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  expiryDate
              (

                
              )
              
                const
              
              ;
            
#ifndef QT_NO_SSL

    // Class: QSslCertificate
    // Function: publicKey
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  publicKey
              (

                
              )
              
                const
              
              ;
            
#endif

    // Class: QSslCertificate
    // Function: extensions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  extensions
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: toPem
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toPem
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: toDer
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDer
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslCertificate
    // Function: toText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toText
              (

                
              )
              
                const
              
              ;
            
#ifndef QT_NO_SSL

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
          return RJSType_QSslCertificate::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QSslCertificate* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QSslCertificate* getWrapped() const {
          
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
          QSslCertificate* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QSslCertificate*> basecasters_QSslCertificate;

      public:
        static void registerBasecaster_QSslCertificate(RJSBasecaster_QSslCertificate* bc) {
          basecasters_QSslCertificate.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QSslCertificate_Wrapper*)

    Q_DECLARE_INTERFACE(QSslCertificate_Wrapper, "org.qcad.QSslCertificate_Wrapper")

  
  #endif
  
