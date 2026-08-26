
  // Auto generated
  
    #ifndef QSQLERROR_H_WRAPPER
    #define QSQLERROR_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #ifdef QT_SQL_LIB
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QSqlError>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QSqlError
    class QTJSAPI_EXPORT QSqlError_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QSqlError_Wrapper(const QSqlError_Wrapper&);

    public:
      // initialization of QSqlError:
      static void init(RJSApi& handler);

      
        static QSqlError* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QSqlError:
          for (int i=0; i<basecasters_QSqlError.length(); i++) {
            RJSBasecaster_QSqlError* basecaster = basecasters_QSqlError[i];
            QSqlError* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QSqlError:
          if (t==RJSType_QSqlError::getIdStatic()) {
            return (QSqlError*)vp;
          }

          qWarning() << "QSqlError_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QSqlError* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QSqlError*: wrapper wraps NULL";
          }

          QSqlError* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QSqlError*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum ErrorType {
    NoError = QSqlError::NoError,
ConnectionError = QSqlError::ConnectionError,
StatementError = QSqlError::StatementError,
TransactionError = QSqlError::TransactionError,
UnknownError = QSqlError::UnknownError,

  };
  Q_ENUM(ErrorType)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QSqlError_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QSqlError_Wrapper(RJSApi& h, QSqlError* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QSqlError_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QSqlError
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QSqlError_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: QSqlError
    // Function: driverText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  driverText
              (

                
              )
              
                const
              
              ;
            
    // Class: QSqlError
    // Function: databaseText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  databaseText
              (

                
              )
              
                const
              
              ;
            
    // Class: QSqlError
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QSqlError
    // Function: nativeErrorCode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nativeErrorCode
              (

                
              )
              
                const
              
              ;
            
    // Class: QSqlError
    // Function: text
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  text
              (

                
              )
              
                const
              
              ;
            
    // Class: QSqlError
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
          return RJSType_QSqlError::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QSqlError* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QSqlError* getWrapped() const {
          
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
          QSqlError* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QSqlError*> basecasters_QSqlError;

      public:
        static void registerBasecaster_QSqlError(RJSBasecaster_QSqlError* bc) {
          basecasters_QSqlError.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QSqlError_Wrapper*)

    Q_DECLARE_INTERFACE(QSqlError_Wrapper, "org.qcad.QSqlError_Wrapper")

  
    #endif
  
  #endif
  
