
  // Auto generated
  
    #ifndef QABSTRACTFILEICONPROVIDER_H_WRAPPER
    #define QABSTRACTFILEICONPROVIDER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QAbstractFileIconProvider>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QAbstractFileIconProvider
    class QAbstractFileIconProvider_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QAbstractFileIconProvider_Wrapper(const QAbstractFileIconProvider_Wrapper&);

    public:
      // initialization of QAbstractFileIconProvider:
      static void init(RJSApi& handler);

      
        static QAbstractFileIconProvider* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QFileIconProvider::getIdStatic()) {
                return (QAbstractFileIconProvider*)(QFileIconProvider*)vp;
              }
              

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QAbstractFileIconProvider.length(); i++) {
            RJSBasecaster_QAbstractFileIconProvider* basecaster = basecasters_QAbstractFileIconProvider[i];
            QAbstractFileIconProvider* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QAbstractFileIconProvider::getIdStatic()) {
            return (QAbstractFileIconProvider*)vp;
          }

          qWarning() << "QAbstractFileIconProvider_Wrapper::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QAbstractFileIconProvider* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QAbstractFileIconProvider*: wrapper wraps NULL";
          }

          QAbstractFileIconProvider* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QAbstractFileIconProvider*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum IconType {
    Computer = QAbstractFileIconProvider::Computer,
Desktop = QAbstractFileIconProvider::Desktop,
Trashcan = QAbstractFileIconProvider::Trashcan,
Network = QAbstractFileIconProvider::Network,
Drive = QAbstractFileIconProvider::Drive,
Folder = QAbstractFileIconProvider::Folder,
File = QAbstractFileIconProvider::File,

  };
  Q_ENUM(IconType)

  enum Option {
    DontUseCustomDirectoryIcons = QAbstractFileIconProvider::DontUseCustomDirectoryIcons,

  };
  Q_ENUM(Option)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QAbstractFileIconProvider_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QAbstractFileIconProvider_Wrapper(RJSApi& h, QAbstractFileIconProvider* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QAbstractFileIconProvider_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QAbstractFileIconProvider
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QAbstractFileIconProvider_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: QAbstractFileIconProvider
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
            
    // Class: QAbstractFileIconProvider
    // Function: type
    // Source: 
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
            
    // Class: QAbstractFileIconProvider
    // Function: setOptions
    // Source: 
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
            
    // Class: QAbstractFileIconProvider
    // Function: options
    // Source: 
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
          return RJSType_QAbstractFileIconProvider::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QAbstractFileIconProvider* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QAbstractFileIconProvider* getWrapped() const {
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
        QAbstractFileIconProvider* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QAbstractFileIconProvider*> basecasters_QAbstractFileIconProvider;

      public:
        static void registerBasecaster_QAbstractFileIconProvider(RJSBasecaster_QAbstractFileIconProvider* bc) {
          basecasters_QAbstractFileIconProvider.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QAbstractFileIconProvider_Wrapper*)

    Q_DECLARE_INTERFACE(QAbstractFileIconProvider_Wrapper, "org.qcad.QAbstractFileIconProvider_Wrapper")

  
  #endif
  
