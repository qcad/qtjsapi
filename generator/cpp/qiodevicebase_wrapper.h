
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
    class QTJSAPI_EXPORT QIODeviceBase_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QIODeviceBase_Wrapper(const QIODeviceBase_Wrapper&);

    public:
      // initialization of QIODeviceBase:
      static void init(RJSApi& handler);

      
        static QIODeviceBase* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QBuffer::getIdStatic()) {
                return (QIODeviceBase*)(QBuffer*)vp;
              }
              
              if (t==RJSType_QFileDevice::getIdStatic()) {
                return (QIODeviceBase*)(QFileDevice*)vp;
              }
              
              if (t==RJSType_QIODevice::getIdStatic()) {
                return (QIODeviceBase*)(QIODevice*)vp;
              }
              
              if (t==RJSType_QTextStream::getIdStatic()) {
                return (QIODeviceBase*)(QTextStream*)vp;
              }
              

          // hook for modules to cast from other types to base QIODeviceBase:
          for (int i=0; i<basecasters_QIODeviceBase.length(); i++) {
            RJSBasecaster_QIODeviceBase* basecaster = basecasters_QIODeviceBase[i];
            QIODeviceBase* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QIODeviceBase:
          if (t==RJSType_QIODeviceBase::getIdStatic()) {
            return (QIODeviceBase*)vp;
          }

          qWarning() << "QIODeviceBase_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QIODeviceBase* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
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
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QIODeviceBase::getIdStatic();
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
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QIODeviceBase*> basecasters_QIODeviceBase;

      public:
        static void registerBasecaster_QIODeviceBase(RJSBasecaster_QIODeviceBase* bc) {
          basecasters_QIODeviceBase.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QIODeviceBase_Wrapper*)

    Q_DECLARE_INTERFACE(QIODeviceBase_Wrapper, "org.qcad.QIODeviceBase_Wrapper")

  
  #endif
  
