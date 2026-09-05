
  // Auto generated
  
    #ifndef QHELPSEARCHRESULT_H_WRAPPER
    #define QHELPSEARCHRESULT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #ifdef QT_HELP_LIB
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QHelpSearchResult>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QHelpSearchResult
    class QTJSAPI_EXPORT QHelpSearchResult_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QHelpSearchResult_Wrapper(const QHelpSearchResult_Wrapper&);

    public:
      // initialization of QHelpSearchResult:
      static void init(RJSApi& handler);

      
        static QHelpSearchResult* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QHelpSearchResult:
          for (int i=0; i<basecasters_QHelpSearchResult.length(); i++) {
            RJSBasecaster_QHelpSearchResult* basecaster = basecasters_QHelpSearchResult[i];
            QHelpSearchResult* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QHelpSearchResult:
          if (t==RJSType_QHelpSearchResult::getIdStatic()) {
            return (QHelpSearchResult*)vp;
          }

          qWarning() << "QHelpSearchResult_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QHelpSearchResult* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QHelpSearchResult*: wrapper wraps NULL";
          }

          QHelpSearchResult* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QHelpSearchResult*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QHelpSearchResult_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QHelpSearchResult_Wrapper(RJSApi& h, QHelpSearchResult* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QHelpSearchResult_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QHelpSearchResult
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QHelpSearchResult_Wrapper
                
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
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QHelpSearchResult
    // Function: title
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  title
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpSearchResult
    // Function: url
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  url
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpSearchResult
    // Function: snippet
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  snippet
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
          return RJSType_QHelpSearchResult::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QHelpSearchResult* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QHelpSearchResult* getWrapped() const {
          
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
          QHelpSearchResult* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QHelpSearchResult*> basecasters_QHelpSearchResult;

      public:
        static void registerBasecaster_QHelpSearchResult(RJSBasecaster_QHelpSearchResult* bc) {
          basecasters_QHelpSearchResult.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QHelpSearchResult_Wrapper*)

    Q_DECLARE_INTERFACE(QHelpSearchResult_Wrapper, "org.qcad.QHelpSearchResult_Wrapper")

  
    #endif
  
  #endif
  
