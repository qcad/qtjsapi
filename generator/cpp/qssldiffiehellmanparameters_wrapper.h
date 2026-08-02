
  // Auto generated
  
    #ifndef QSSLDIFFIEHELLMANPARAMETERS_H_WRAPPER
    #define QSSLDIFFIEHELLMANPARAMETERS_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QIODevice>
      
        #include <QSslDiffieHellmanParameters>
      
        #include <QDebug>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QSslDiffieHellmanParameters>
      
      // singleton class wrapper for static functions:
      class QTJSAPI_EXPORT QSslDiffieHellmanParameters_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QSslDiffieHellmanParameters_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QSslDiffieHellmanParameters
    // Function: defaultParameters
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  defaultParameters
              (

                
              )
              
              ;
            
    // Class: QSslDiffieHellmanParameters
    // Function: fromEncoded
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fromEncoded
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
            
    // Class: QSslDiffieHellmanParameters
    // Function: equals
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  equals
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
            
    // Class: QSslDiffieHellmanParameters
    // Function: operator_not_assign
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_not_assign
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
            
#ifndef QT_NO_DEBUG_STREAM

#endif


      private:
          RJSApi& handler;
          //static QSslDiffieHellmanParameters_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QSslDiffieHellmanParameters
    class QTJSAPI_EXPORT QSslDiffieHellmanParameters_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QSslDiffieHellmanParameters_Wrapper(const QSslDiffieHellmanParameters_Wrapper&);

    public:
      // initialization of QSslDiffieHellmanParameters:
      static void init(RJSApi& handler);

      
        static QSslDiffieHellmanParameters* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QSslDiffieHellmanParameters:
          for (int i=0; i<basecasters_QSslDiffieHellmanParameters.length(); i++) {
            RJSBasecaster_QSslDiffieHellmanParameters* basecaster = basecasters_QSslDiffieHellmanParameters[i];
            QSslDiffieHellmanParameters* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QSslDiffieHellmanParameters:
          if (t==RJSType_QSslDiffieHellmanParameters::getIdStatic()) {
            return (QSslDiffieHellmanParameters*)vp;
          }

          qWarning() << "QSslDiffieHellmanParameters_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QSslDiffieHellmanParameters* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QSslDiffieHellmanParameters*: wrapper wraps NULL";
          }

          QSslDiffieHellmanParameters* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QSslDiffieHellmanParameters*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Error {
    NoError = QSslDiffieHellmanParameters::NoError,
InvalidInputDataError = QSslDiffieHellmanParameters::InvalidInputDataError,
UnsafeParametersError = QSslDiffieHellmanParameters::UnsafeParametersError,

  };
  Q_ENUM(Error)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QSslDiffieHellmanParameters_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QSslDiffieHellmanParameters_Wrapper(RJSApi& h, QSslDiffieHellmanParameters* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QSslDiffieHellmanParameters_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QSslDiffieHellmanParameters
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QSslDiffieHellmanParameters_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#ifndef QT_NO_DEBUG_STREAM

#endif


    // non-static functions:
    
    // Class: QSslDiffieHellmanParameters
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
            
    // Class: QSslDiffieHellmanParameters
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
            
    // Class: QSslDiffieHellmanParameters
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEmpty
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslDiffieHellmanParameters
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
            
    // Class: QSslDiffieHellmanParameters
    // Function: error
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  error
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslDiffieHellmanParameters
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
            
#ifndef QT_NO_DEBUG_STREAM

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
          return RJSType_QSslDiffieHellmanParameters::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QSslDiffieHellmanParameters* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QSslDiffieHellmanParameters* getWrapped() const {
          
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
          QSslDiffieHellmanParameters* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QSslDiffieHellmanParameters*> basecasters_QSslDiffieHellmanParameters;

      public:
        static void registerBasecaster_QSslDiffieHellmanParameters(RJSBasecaster_QSslDiffieHellmanParameters* bc) {
          basecasters_QSslDiffieHellmanParameters.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QSslDiffieHellmanParameters_Wrapper*)

    Q_DECLARE_INTERFACE(QSslDiffieHellmanParameters_Wrapper, "org.qcad.QSslDiffieHellmanParameters_Wrapper")

  
  #endif
  
