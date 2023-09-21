
  // Auto generated
  
  #ifndef QIODEVICEBASE_H_WRAPPER
  #define QIODEVICEBASE_H_WRAPPER

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    

  #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QIODeviceBase>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QIODeviceBase
    class QIODeviceBase_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QIODeviceBase_Wrapper(const QIODeviceBase_Wrapper&);

    public:
      // initialization of QIODeviceBase:
      static void init(RJSApi& handler);

      
        static QIODeviceBase* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          
            case RJSType::QBuffer_Type:
              return (QIODeviceBase*)(QBuffer*)vp;
          
            case RJSType::QFileDevice_Type:
              return (QIODeviceBase*)(QFileDevice*)vp;
          
            case RJSType::QIODevice_Type:
              return (QIODeviceBase*)(QIODevice*)vp;
          
            case RJSType::QTextStream_Type:
              return (QIODeviceBase*)(QTextStream*)vp;
          

          // pointer to desired type:
          
              case RJSType::QIODeviceBase_Type:
                return (QIODeviceBase*)vp;
            

          default:
            return nullptr;
          }
        }

        static QIODeviceBase* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QIODeviceBase*: wrapper wraps NULL";
          }

          QIODeviceBase* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QIODeviceBase*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OpenModeFlag {
    NotOpen = QIODeviceBase::NotOpen,
ReadOnly = QIODeviceBase::ReadOnly,
WriteOnly = QIODeviceBase::WriteOnly,
ReadWrite = QIODeviceBase::ReadWrite,
Append = QIODeviceBase::Append,
Truncate = QIODeviceBase::Truncate,
Text = QIODeviceBase::Text,
Unbuffered = QIODeviceBase::Unbuffered,
NewOnly = QIODeviceBase::NewOnly,
ExistingOnly = QIODeviceBase::ExistingOnly,

  };
  Q_ENUM(OpenModeFlag)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QIODeviceBase_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QIODeviceBase_Wrapper(RJSApi& h, QIODeviceBase* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QIODeviceBase_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QIODeviceBase
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QIODeviceBase_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    

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
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QIODeviceBase_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QIODeviceBase* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QIODeviceBase* getWrapped() const {
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
        QIODeviceBase* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QIODeviceBase_Wrapper*)

    Q_DECLARE_INTERFACE(QIODeviceBase_Wrapper, "org.qcad.QIODeviceBase_Wrapper")

  
  #endif
  