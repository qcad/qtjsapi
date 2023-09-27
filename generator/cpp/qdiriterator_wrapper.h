
  // Auto generated
  
    #ifndef QDIRITERATOR_H_WRAPPER
    #define QDIRITERATOR_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDirIterator>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDirIterator
    class QDirIterator_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDirIterator_Wrapper(const QDirIterator_Wrapper&);

    public:
      // initialization of QDirIterator:
      static void init(RJSApi& handler);

      
        static QDirIterator* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDirIterator.length(); i++) {
            RJSBasecaster_QDirIterator* basecaster = basecasters_QDirIterator[i];
            QDirIterator* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDirIterator::getIdStatic()) {
            return (QDirIterator*)vp;
          }

          qWarning() << "QDirIterator_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QDirIterator* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDirIterator*: wrapper wraps NULL";
          }

          QDirIterator* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDirIterator*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum IteratorFlag {
    NoIteratorFlags = QDirIterator::NoIteratorFlags,
FollowSymlinks = QDirIterator::FollowSymlinks,
Subdirectories = QDirIterator::Subdirectories,

  };
  Q_ENUM(IteratorFlag)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDirIterator_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDirIterator_Wrapper(RJSApi& h, QDirIterator* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDirIterator_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDirIterator
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDirIterator_Wrapper
                
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
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDirIterator
    // Function: next
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  next
              (

                
              )
              
              ;
            
    // Class: QDirIterator
    // Function: nextFileInfo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextFileInfo
              (

                
              )
              
              ;
            
    // Class: QDirIterator
    // Function: hasNext
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasNext
              (

                
              )
              
                const
              
              ;
            
    // Class: QDirIterator
    // Function: fileName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fileName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDirIterator
    // Function: filePath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  filePath
              (

                
              )
              
                const
              
              ;
            
    // Class: QDirIterator
    // Function: fileInfo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fileInfo
              (

                
              )
              
                const
              
              ;
            
    // Class: QDirIterator
    // Function: path
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  path
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
          return RJSType_QDirIterator::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDirIterator* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDirIterator* getWrapped() const {
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
        QDirIterator* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDirIterator*> basecasters_QDirIterator;

      public:
        static void registerBasecaster_QDirIterator(RJSBasecaster_QDirIterator* bc) {
          basecasters_QDirIterator.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDirIterator_Wrapper*)

    Q_DECLARE_INTERFACE(QDirIterator_Wrapper, "org.qcad.QDirIterator_Wrapper")

  
  #endif
  
