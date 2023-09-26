
  // Auto generated
  
    #ifndef QFILEICONPROVIDER_H_WRAPPER
    #define QFILEICONPROVIDER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QFileIconProvider>
      
      // wrapped object is QFileIconProvider_Base class if new object is created: 
      #include "qfileiconprovider_base.h"
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QFileIconProvider
    class QFileIconProvider_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QFileIconProvider_Wrapper(const QFileIconProvider_Wrapper&);

    public:
      // initialization of QFileIconProvider:
      static void init(RJSApi& handler);

      
        static QFileIconProvider* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QFileIconProvider.length(); i++) {
            RJSBasecaster_QFileIconProvider* basecaster = basecasters_QFileIconProvider[i];
            QFileIconProvider* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QFileIconProvider::getIdStatic()) {
            return (QFileIconProvider*)vp;
          }

          qWarning() << "QFileIconProvider_Wrapper::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QFileIconProvider* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QFileIconProvider*: wrapper wraps NULL";
          }

          QFileIconProvider* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QFileIconProvider*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum IconType {
    Computer = QFileIconProvider::Computer,
Desktop = QFileIconProvider::Desktop,
Trashcan = QFileIconProvider::Trashcan,
Network = QFileIconProvider::Network,
Drive = QFileIconProvider::Drive,
Folder = QFileIconProvider::Folder,
File = QFileIconProvider::File,

  };
  Q_ENUM(IconType)

  enum Option {
    DontUseCustomDirectoryIcons = QFileIconProvider::DontUseCustomDirectoryIcons,

  };
  Q_ENUM(Option)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QFileIconProvider_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QFileIconProvider_Wrapper(RJSApi& h, QFileIconProvider* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QFileIconProvider_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QFileIconProvider
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QFileIconProvider_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: QFileIconProvider
    // Function: type
    // Source: QAbstractFileIconProvider
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QFileIconProvider
    // Function: setOptions
    // Source: QAbstractFileIconProvider
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOptions
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileIconProvider
    // Function: options
    // Source: QAbstractFileIconProvider
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  options
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileIconProvider
    // Function: icon
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  icon
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
          return RJSType_QFileIconProvider::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QFileIconProvider* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QFileIconProvider* getWrapped() const {
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

        
          // get wrapped base object or nullptr:
          QFileIconProvider_Base* getWrappedBase() {
            QFileIconProvider* w = getWrapped();
            return dynamic_cast<QFileIconProvider_Base*>(w);
          }

          QFileIconProvider_Base* getWrappedBase() const {
            QFileIconProvider* w = getWrapped();
            return dynamic_cast<QFileIconProvider_Base*>(w);
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

        
          //void setRecFlag(bool on) const {
          //  QFileIconProvider_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        QFileIconProvider* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QFileIconProvider*> basecasters_QFileIconProvider;

      public:
        static void registerBasecaster_QFileIconProvider(RJSBasecaster_QFileIconProvider* bc) {
          basecasters_QFileIconProvider.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QFileIconProvider_Wrapper*)

    Q_DECLARE_INTERFACE(QFileIconProvider_Wrapper, "org.qcad.QFileIconProvider_Wrapper")

  
  #endif
  
